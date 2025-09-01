import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";

// Initialize S3 client for Cloudflare R2
const s3Client = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

export async function POST(request) {
  try {
    const formData = await request.formData();
    const image = formData.get("image");
    const type = formData.get("type") || "gallery";

    if (!image) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    // Validate file type
    if (!image.type.startsWith("image/")) {
      return NextResponse.json(
        { error: "Invalid file type. Only images are allowed." },
        { status: 400 }
      );
    }

    // Validate file size (10MB limit)
    if (image.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File size too large. Maximum size is 10MB." },
        { status: 400 }
      );
    }

    // Generate unique filename
    const fileExtension = image.name.split(".").pop();
    const fileName = `${type}/${uuidv4()}.${fileExtension}`;

    // Convert image to buffer
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Upload to R2
    const uploadCommand = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: fileName,
      Body: buffer,
      ContentType: image.type,
      CacheControl: "public, max-age=31536000", // 1 year cache
    });

    await s3Client.send(uploadCommand);

    // Return just the file path instead of full URL
    // The frontend will construct the full URL using the current environment
    const imagePath = fileName;

    return NextResponse.json({
      success: true,
      url: imagePath,
      fileName: fileName,
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}

// Optional: Add GET method to check if endpoint is working
export async function GET() {
  return NextResponse.json({
    message: "Upload endpoint is working",
    config: {
      hasR2Endpoint: !!process.env.R2_ENDPOINT,
      hasR2Bucket: !!process.env.R2_BUCKET_NAME,
      hasR2PublicUrl: !!process.env.R2_PUBLIC_URL,
    },
  });
}
