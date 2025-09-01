import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";

// MongoDB connection
let client;
let db;

async function connectToDatabase() {
  if (!client) {
    try {
      client = new MongoClient(process.env.MONGODB_URI);
      await client.connect();
      db = client.db("bdpSells");
      console.log("Connected to MongoDB Atlas");
    } catch {
      console.error("Failed to connect to MongoDB:", error);
      throw error;
    }
  }
  return { client, db };
}

// R2 S3 Client
const s3Client = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

// Function to delete images from R2
async function deleteImagesFromR2(images) {
  if (!images || images.length === 0) return;

  const deletePromises = images.map(async (imagePath) => {
    try {
      // Extract the actual file path from the stored path
      // If it's a full URL, extract just the path part
      let filePath = imagePath;
      if (imagePath.includes("/api/images/")) {
        filePath = imagePath.split("/api/images/")[1];
      }

      // Skip if it's a local image (starts with /)
      if (filePath.startsWith("/")) {
        console.log(`Skipping local image: ${filePath}`);
        return;
      }

      const deleteCommand = new DeleteObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: filePath,
      });

      await s3Client.send(deleteCommand);
      console.log(`Successfully deleted image: ${filePath}`);
    } catch {
      console.error(`Failed to delete image ${imagePath}:`, error);
      // Don't throw error here - we want to continue deleting other images
    }
  });

  await Promise.all(deletePromises);
}

export async function GET(request, { params }) {
  try {
    // Connect to database
    const { db } = await connectToDatabase();

    const { id } = params;

    // Validate ID format
    if (!id) {
      return NextResponse.json(
        { message: "Property ID is required" },
        { status: 400 }
      );
    }

    // Try to find property by MongoDB ObjectId first, then by regular id
    let property = null;

    try {
      // Try MongoDB ObjectId
      const objectId = new ObjectId(id);
      property = await db.collection("properties").findOne({ _id: objectId });
    } catch {
      // If ObjectId fails, try regular id field
      property = await db.collection("properties").findOne({ id: id });
    }

    if (!property) {
      return NextResponse.json(
        { message: "Property not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ property }, { status: 200 });
  } catch (error) {
    console.error("Error fetching property:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    // Connect to database
    const { db } = await connectToDatabase();

    const { id } = params;

    let updateData;
    try {
      updateData = await request.json();
    } catch {
      console.error("Error parsing request JSON:", error);
      return NextResponse.json(
        { message: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    // Validate ID format
    if (!id) {
      return NextResponse.json(
        { message: "Property ID is required" },
        { status: 400 }
      );
    }

    // Remove _id from update data if it exists
    delete updateData._id;

    // Try to update by MongoDB ObjectId first, then by regular id
    let updatedProperty = null;

    try {
      // Try MongoDB ObjectId
      const objectId = new ObjectId(id);
      await db
        .collection("properties")
        .updateOne({ _id: objectId }, { $set: updateData });

      // Fetch the updated document
      updatedProperty = await db
        .collection("properties")
        .findOne({ _id: objectId });
    } catch {
      // ObjectId conversion failed, try regular id field
      try {
        await db
          .collection("properties")
          .updateOne({ id: id }, { $set: updateData });

        // Fetch the updated document
        updatedProperty = await db.collection("properties").findOne({ id: id });
      } catch {
        // Both methods failed
      }
    }

    if (!updatedProperty) {
      return NextResponse.json(
        { message: "Property not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Property updated successfully",
        property: updatedProperty,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating property:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    // Connect to database
    const { db } = await connectToDatabase();

    const { id } = params;

    // Validate ID format
    if (!id) {
      return NextResponse.json(
        { message: "Property ID is required" },
        { status: 400 }
      );
    }

    // First, find the property to get its images
    let property = null;

    try {
      // Try MongoDB ObjectId
      const objectId = new ObjectId(id);
      property = await db.collection("properties").findOne({ _id: objectId });
    } catch {
      // If ObjectId fails, try regular id field
      property = await db.collection("properties").findOne({ id: id });
    }

    if (!property) {
      return NextResponse.json(
        { message: "Property not found" },
        { status: 404 }
      );
    }

    // Delete images from R2 before deleting the property
    try {
      const imagesToDelete = [];

      // Add main image if it exists
      if (property.image) {
        imagesToDelete.push(property.image);
      }

      // Add all gallery images
      if (property.images && property.images.length > 0) {
        imagesToDelete.push(...property.images);
      }

      // Remove duplicates
      const uniqueImages = [...new Set(imagesToDelete)];

      if (uniqueImages.length > 0) {
        console.log(
          `Deleting ${uniqueImages.length} images from R2 for property: ${property.title}`
        );
        await deleteImagesFromR2(uniqueImages);
      }
    } catch {
      console.error("Error deleting images from R2:", error);
      // Continue with property deletion even if image deletion fails
    }

    // Now delete the property from MongoDB
    let deleteResult = null;

    try {
      // Try MongoDB ObjectId
      const objectId = new ObjectId(id);
      deleteResult = await db
        .collection("properties")
        .deleteOne({ _id: objectId });
    } catch {
      // If ObjectId fails, try regular id field
      deleteResult = await db.collection("properties").deleteOne({ id: id });
    }

    if (!deleteResult || deleteResult.deletedCount === 0) {
      return NextResponse.json(
        { message: "Property not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Property and associated images deleted successfully",
        property: property,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting property:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
