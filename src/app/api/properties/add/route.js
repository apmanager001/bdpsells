import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

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
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
      throw error;
    }
  }
  return { client, db };
}

export async function POST(request) {
  try {
    // Connect to database
    const { db } = await connectToDatabase();

    const propertyData = await request.json();

    // Validate required fields
    const requiredFields = [
      "title",
      "price",
      "beds",
      "baths",
      "sqft",
      "type",
      "status",
      "address",
      "city",
      "state",
      "zipCode",
    ];
    const missingFields = requiredFields.filter(
      (field) => !propertyData[field]
    );

    if (missingFields.length > 0) {
      return NextResponse.json(
        { message: `Missing required fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    // Create new property object with additional metadata
    const newProperty = {
      id: Date.now().toString(), // Temporary ID generation
      ...propertyData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      // Format location from address components
      location: `${propertyData.address}, ${propertyData.city}, ${propertyData.state}`,
      // Format price with currency
      priceFormatted: `$${parseInt(propertyData.price).toLocaleString()}`,
      // Ensure features is an array
      features: Array.isArray(propertyData.features)
        ? propertyData.features
        : [],
      // Ensure images is an array
      images: Array.isArray(propertyData.images)
        ? propertyData.images
        : ["/home.jpg"], // Default image
    };

    // Save to MongoDB
    const collection = db.collection("properties");
    const result = await collection.insertOne(newProperty);

    // Update the property with the MongoDB _id
    newProperty._id = result.insertedId;

    console.log("Property added:", newProperty);

    return NextResponse.json(
      {
        message: "Property added successfully",
        property: newProperty,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding property:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve all properties
export async function GET() {
  try {
    // Connect to database
    const { db } = await connectToDatabase();

    // Fetch from MongoDB
    const collection = db.collection("properties");
    const properties = await collection.find({}).toArray();

    return NextResponse.json({ properties }, { status: 200 });
  } catch (error) {
    console.error("Error fetching properties:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
