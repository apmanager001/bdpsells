import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Get credentials from environment variables
    const envUsername = process.env.LOGIN_USERNAME;
    const envPassword = process.env.LOGIN_PASSWORD;

    // Check if environment variables are set
    if (!envUsername || !envPassword) {
      console.error(
        "Environment variables LOGIN_USERNAME and LOGIN_PASSWORD are not set"
      );
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    // Validate credentials
    if (username === envUsername && password === envPassword) {
      return NextResponse.json(
        { message: "Login successful" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { message: "Invalid username or password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

