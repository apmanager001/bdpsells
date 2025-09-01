"use client";

import { useState, useRef } from "react";
import {
  FaHome,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaDollarSign,
  FaImage,
  FaUpload,
  FaTrash,
  FaEye,
} from "react-icons/fa";

export default function AddHome() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    beds: "",
    baths: "",
    sqft: "",
    type: "Single Family",
    status: "For Sale",
    description: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    yearBuilt: "",
    lotSize: "",
    garageSpaces: "",
    propertyTax: "",
    hoaFees: "",
    features: [],
    images: [],
    featured: false,
    contactPhone: "",
    contactEmail: "",
    agentName: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [mainImage, setMainImage] = useState(null);
  const [mainImagePreview, setMainImagePreview] = useState("");
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryPreviews, setGalleryPreviews] = useState([]);
  const [uploadingImages, setUploadingImages] = useState(false);

  const mainImageRef = useRef();
  const galleryImagesRef = useRef();

  const propertyTypes = [
    "Single Family",
    "Condo",
    "Townhouse",
    "Multi-Family",
    "Luxury",
    "Investment",
    "New Construction",
  ];

  const statusOptions = [
    "For Sale",
    "Pending",
    "Sold",
    "Under Contract",
    "Coming Soon",
  ];

  const commonFeatures = [
    "Central Air",
    "Fireplace",
    "Hardwood Floors",
    "Granite Countertops",
    "Stainless Steel Appliances",
    "Walk-in Closet",
    "Balcony/Deck",
    "Pool",
    "Garden",
    "Basement",
    "Attic",
    "Garage",
    "Fenced Yard",
    "Solar Panels",
    "Smart Home Features",
  ];

  // Image compression function
  const compressImage = (file, maxWidth = 1200, quality = 0.8) => {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        // Calculate new dimensions
        let { width, height } = img;
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;

        // Draw and compress
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(resolve, "image/jpeg", quality);
      };

      img.src = URL.createObjectURL(file);
    });
  };

  // Handle main image upload
  const handleMainImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setMessage({ type: "error", text: "Please select a valid image file" });
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      // 10MB limit
      setMessage({
        type: "error",
        text: "Image size should be less than 10MB",
      });
      return;
    }

    try {
      setUploadingImages(true);

      // Compress image
      const compressedBlob = await compressImage(file, 1200, 0.8);
      const compressedFile = new File([compressedBlob], file.name, {
        type: "image/jpeg",
      });

      // Create preview
      const previewUrl = URL.createObjectURL(compressedFile);
      setMainImagePreview(previewUrl);
      setMainImage(compressedFile);

      setMessage({
        type: "success",
        text: "Main image uploaded successfully!",
      });
    } catch (error) {
      setMessage({ type: "error", text: "Failed to process image" });
    } finally {
      setUploadingImages(false);
    }
  };

  // Handle gallery images upload
  const handleGalleryImagesUpload = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    if (imageFiles.length !== files.length) {
      setMessage({ type: "error", text: "Some files are not valid images" });
      return;
    }

    const oversizedFiles = imageFiles.filter(
      (file) => file.size > 10 * 1024 * 1024
    );
    if (oversizedFiles.length > 0) {
      setMessage({ type: "error", text: "Some images are larger than 10MB" });
      return;
    }

    try {
      setUploadingImages(true);

      const newImages = [];
      const newPreviews = [];

      for (const file of imageFiles) {
        // Compress image
        const compressedBlob = await compressImage(file, 1200, 0.8);
        const compressedFile = new File([compressedBlob], file.name, {
          type: "image/jpeg",
        });

        // Create preview
        const previewUrl = URL.createObjectURL(compressedFile);

        newImages.push(compressedFile);
        newPreviews.push(previewUrl);
      }

      setGalleryImages((prev) => [...prev, ...newImages]);
      setGalleryPreviews((prev) => [...prev, ...newPreviews]);

      setMessage({
        type: "success",
        text: `${newImages.length} images added to gallery!`,
      });
    } catch (error) {
      setMessage({ type: "error", text: "Failed to process some images" });
    } finally {
      setUploadingImages(false);
    }
  };

  // Remove main image
  const removeMainImage = () => {
    setMainImage(null);
    setMainImagePreview("");
    if (mainImageRef.current) {
      mainImageRef.current.value = "";
    }
  };

  // Remove gallery image
  const removeGalleryImage = (index) => {
    setGalleryImages((prev) => prev.filter((_, i) => i !== index));
    setGalleryPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  // Upload single image to R2
  const uploadSingleImage = async (file, type) => {
    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("type", type);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return data.url;
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error("Image upload error:", error);
      return null;
    }
  };

  // Upload images to R2
  const uploadImagesToR2 = async () => {
    const uploadedUrls = [];

    // Upload main image if exists
    if (mainImage) {
      const mainImageUrl = await uploadSingleImage(mainImage, "main");
      if (mainImageUrl) {
        uploadedUrls.push(mainImageUrl);
      }
    }

    // Upload gallery images
    for (const image of galleryImages) {
      console.log("Uploading gallery image:", image.name);
      const imageUrl = await uploadSingleImage(image, "gallery");
      console.log("Gallery image URL result:", imageUrl);
      if (imageUrl) {
        uploadedUrls.push(imageUrl);
      }
    }

    console.log("Final uploaded URLs:", uploadedUrls);
    return uploadedUrls;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFeatureToggle = (feature) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      // Upload images first
      const imageUrls = await uploadImagesToR2();

      if (imageUrls.length === 0) {
        setMessage({ type: "error", text: "Please upload at least one image" });
        setIsLoading(false);
        return;
      }

      // Prepare form data with image URLs
      const submitData = {
        ...formData,
        image: imageUrls[0], // Main image
        images: imageUrls, // All images including main
      };

      const response = await fetch("/api/properties/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Property added successfully!" });
        // Reset form and images
        setFormData({
          title: "",
          price: "",
          location: "",
          beds: "",
          baths: "",
          sqft: "",
          type: "Single Family",
          status: "For Sale",
          description: "",
          address: "",
          city: "",
          state: "",
          zipCode: "",
          yearBuilt: "",
          lotSize: "",
          garageSpaces: "",
          propertyTax: "",
          hoaFees: "",
          features: [],
          images: [],
          featured: false,
          contactPhone: "",
          contactEmail: "",
          agentName: "",
        });
        setMainImage(null);
        setMainImagePreview("");
        setGalleryImages([]);
        setGalleryPreviews([]);
        if (mainImageRef.current) mainImageRef.current.value = "";
        if (galleryImagesRef.current) galleryImagesRef.current.value = "";
      } else {
        setMessage({
          type: "error",
          text: data.message || "Failed to add property",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="flex items-center gap-3 mb-8">
          <FaHome className="text-3xl text-primary" />
          <h2 className="text-3xl font-bold text-gray-900">Add New Property</h2>
        </div>

        {message.text && (
          <div
            className={`alert ${
              message.type === "success" ? "alert-success" : "alert-error"
            } mb-6`}
          >
            <span>{message.text}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Image Upload Section */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4 flex items-center gap-2">
                <FaImage />
                Property Images
              </h3>

              {/* Main Image Upload */}
              <div className="mb-6">
                <label className="label">
                  <span className="label-text font-medium">
                    Main Property Image *
                  </span>
                </label>
                <div className="space-y-4">
                  <input
                    ref={mainImageRef}
                    type="file"
                    accept="image/*"
                    onChange={handleMainImageUpload}
                    className="file-input file-input-bordered w-full"
                    disabled={uploadingImages}
                  />

                  {mainImagePreview && (
                    <div className="relative inline-block">
                      <img
                        src={mainImagePreview}
                        alt="Main property preview"
                        className="w-48 h-32 object-cover rounded-lg border"
                      />
                      <button
                        type="button"
                        onClick={removeMainImage}
                        className="btn btn-sm btn-circle btn-error absolute -top-2 -right-2"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Gallery Images Upload */}
              <div>
                <label className="label">
                  <span className="label-text font-medium">
                    Additional Gallery Images
                  </span>
                </label>
                <div className="space-y-4">
                  <input
                    ref={galleryImagesRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleGalleryImagesUpload}
                    className="file-input file-input-bordered w-full"
                    disabled={uploadingImages}
                  />

                  {galleryPreviews.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {galleryPreviews.map((preview, index) => (
                        <div key={index} className="relative">
                          <img
                            src={preview}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg border"
                          />
                          <button
                            type="button"
                            onClick={() => removeGalleryImage(index)}
                            className="btn btn-sm btn-circle btn-error absolute -top-2 -right-2"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {uploadingImages && (
                  <div className="mt-4 text-center">
                    <div className="loading loading-spinner loading-sm"></div>
                    <span className="ml-2 text-sm text-gray-600">
                      Processing images...
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Basic Information */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">Basic Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Property Title *
                    </span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="e.g., Luxury Family Home"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Price *</span>
                  </label>
                  <div className="input-group">
                    <span className="bg-base-200 px-3 flex items-center">
                      <FaDollarSign />
                    </span>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className="input input-bordered flex-1"
                      placeholder="750000"
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Property Type *
                    </span>
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="select select-bordered"
                    required
                  >
                    {propertyTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Status *</span>
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="select select-bordered"
                    required
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">Property Details</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Bedrooms *</span>
                  </label>
                  <div className="input-group">
                    <span className="bg-base-200 px-3 flex items-center">
                      <FaBed />
                    </span>
                    <input
                      type="number"
                      name="beds"
                      value={formData.beds}
                      onChange={handleInputChange}
                      className="input input-bordered flex-1"
                      placeholder="4"
                      min="0"
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Bathrooms *</span>
                  </label>
                  <div className="input-group">
                    <span className="bg-base-200 px-3 flex items-center">
                      <FaBath />
                    </span>
                    <input
                      type="number"
                      name="baths"
                      value={formData.baths}
                      onChange={handleInputChange}
                      className="input input-bordered flex-1"
                      placeholder="2.5"
                      min="0"
                      step="0.5"
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Square Feet *
                    </span>
                  </label>
                  <div className="input-group">
                    <span className="bg-base-200 px-3 flex items-center">
                      <FaRulerCombined />
                    </span>
                    <input
                      type="number"
                      name="sqft"
                      value={formData.sqft}
                      onChange={handleInputChange}
                      className="input input-bordered flex-1"
                      placeholder="2500"
                      min="0"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Year Built</span>
                  </label>
                  <input
                    type="number"
                    name="yearBuilt"
                    value={formData.yearBuilt}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="2020"
                    min="1800"
                    max={new Date().getFullYear()}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Lot Size (sqft)
                    </span>
                  </label>
                  <input
                    type="number"
                    name="lotSize"
                    value={formData.lotSize}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="5000"
                    min="0"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Garage Spaces
                    </span>
                  </label>
                  <input
                    type="number"
                    name="garageSpaces"
                    value={formData.garageSpaces}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="2"
                    min="0"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Property Tax (annual)
                    </span>
                  </label>
                  <div className="input-group">
                    <span className="bg-base-200 px-3 flex items-center">
                      <FaDollarSign />
                    </span>
                    <input
                      type="number"
                      name="propertyTax"
                      value={formData.propertyTax}
                      onChange={handleInputChange}
                      className="input input-bordered flex-1"
                      placeholder="5000"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">Address Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Street Address *
                    </span>
                  </label>
                  <div className="input-group">
                    <span className="bg-base-200 px-3 flex items-center">
                      <FaMapMarkerAlt />
                    </span>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="input input-bordered flex-1"
                      placeholder="123 Main Street"
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">City *</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="City"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">State *</span>
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="State"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">ZIP Code *</span>
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="12345"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">Description</h3>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">
                    Property Description
                  </span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="textarea textarea-bordered h-32"
                  placeholder="Describe the property, its features, and what makes it special..."
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">Features & Amenities</h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {commonFeatures.map((feature) => (
                  <label
                    key={feature}
                    className="label cursor-pointer justify-start gap-3 truncate"
                  >
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      checked={formData.features.includes(feature)}
                      onChange={() => handleFeatureToggle(feature)}
                    />
                    <span className="label-text">{feature}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">Contact Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Agent Name</span>
                  </label>
                  <input
                    type="text"
                    name="agentName"
                    value={formData.agentName}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="Agent Name"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Contact Phone
                    </span>
                  </label>
                  <input
                    type="tel"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      Contact Email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="agent@example.com"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Options */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl mb-4">Additional Options</h3>

              <div className="space-y-4">
                <label className="label cursor-pointer justify-start gap-3">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text font-medium">
                    Mark as Featured Property
                  </span>
                </label>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">
                      HOA Fees (monthly)
                    </span>
                  </label>
                  <div className="input-group">
                    <span className="bg-base-200 px-3 flex items-center">
                      <FaDollarSign />
                    </span>
                    <input
                      type="number"
                      name="hoaFees"
                      value={formData.hoaFees}
                      onChange={handleInputChange}
                      className="input input-bordered flex-1"
                      placeholder="200"
                      min="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={() => {
                setFormData({
                  title: "",
                  price: "",
                  location: "",
                  beds: "",
                  baths: "",
                  sqft: "",
                  type: "Single Family",
                  status: "For Sale",
                  description: "",
                  address: "",
                  city: "",
                  state: "",
                  zipCode: "",
                  yearBuilt: "",
                  lotSize: "",
                  garageSpaces: "",
                  propertyTax: "",
                  hoaFees: "",
                  features: [],
                  images: [],
                  featured: false,
                  contactPhone: "",
                  contactEmail: "",
                  agentName: "",
                });
                setMainImage(null);
                setMainImagePreview("");
                setGalleryImages([]);
                setGalleryPreviews([]);
                if (mainImageRef.current) mainImageRef.current.value = "";
                if (galleryImagesRef.current)
                  galleryImagesRef.current.value = "";
              }}
              className="btn btn-outline"
            >
              Clear Form
            </button>
            <button
              type="submit"
              disabled={isLoading || !mainImage}
              className="btn btn-primary btn-lg"
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Adding Property...
                </>
              ) : (
                "Add Property"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
