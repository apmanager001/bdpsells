/**
 * Utility functions for handling image URLs
 */

/**
 * Constructs the full image URL from a stored image path
 * @param {string} imagePath - The stored image path (e.g., "main/uuid.jpg")
 * @returns {string} - The full image URL for the current environment
 */
export const getImageUrl = (imagePath) => {
  if (!imagePath) return "/home.jpg"; // Default fallback image

  // If it's already a full URL, return as is
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath;
  }

  // If it's an absolute path starting with /, return as is (for local images)
  if (imagePath.startsWith("/")) {
    return imagePath;
  }

  // Get the base URL from environment or current location
  let baseUrl;

  if (typeof window !== "undefined") {
    // Client-side: use current location
    baseUrl = window.location.origin;
  } else {
    // Server-side: use environment variables
    baseUrl =
      process.env.NEXTAUTH_URL ||
      process.env.VERCEL_URL ||
      "http://localhost:3000";
  }

  // Construct the full URL for R2 images
  return `${baseUrl}/api/images/${imagePath}`;
};

/**
 * Gets the main image URL for a property
 * @param {Object} property - The property object
 * @returns {string} - The main image URL
 */
export const getMainImageUrl = (property) => {
  if (property.image) {
    return getImageUrl(property.image);
  }

  if (property.images && property.images.length > 0) {
    return getImageUrl(property.images[0]);
  }

  return "/home.jpg"; // Default fallback
};

/**
 * Gets all image URLs for a property
 * @param {Object} property - The property object
 * @returns {string[]} - Array of image URLs
 */
export const getAllImageUrls = (property) => {
  if (property.images && property.images.length > 0) {
    return property.images.map((img) => getImageUrl(img));
  }

  if (property.image) {
    return [getImageUrl(property.image)];
  }

  return ["/home.jpg"]; // Default fallback
};
