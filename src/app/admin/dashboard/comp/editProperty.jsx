"use client";

import React, { useState, useEffect } from "react";
import { FaEdit, FaTimes, FaSave } from "react-icons/fa";

const EditProperty = ({ property, onUpdate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    beds: "",
    baths: "",
    sqft: "",
    type: "",
    status: "",
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
    contactPhone: "",
    contactEmail: "",
    agentName: "",
    featured: false,
    features: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    if (property) {
      setFormData({
        title: property.title || "",
        price: property.price || "",
        beds: property.beds || "",
        baths: property.baths || "",
        sqft: property.sqft || "",
        type: property.type || "",
        status: property.status || "",
        description: property.description || "",
        address: property.address || "",
        city: property.city || "",
        state: property.state || "",
        zipCode: property.zipCode || "",
        yearBuilt: property.yearBuilt || "",
        lotSize: property.lotSize || "",
        garageSpaces: property.garageSpaces || "",
        propertyTax: property.propertyTax || "",
        hoaFees: property.hoaFees || "",
        contactPhone: property.contactPhone || "",
        contactEmail: property.contactEmail || "",
        agentName: property.agentName || "",
        featured: property.featured || false,
        features: property.features || [],
      });
    }
  }, [property]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFeatureChange = (index, value) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = value;
    setFormData((prev) => ({
      ...prev,
      features: newFeatures,
    }));
  };

  const addFeature = () => {
    setFormData((prev) => ({
      ...prev,
      features: [...prev.features, ""],
    }));
  };

  const removeFeature = (index) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch(
        `/api/properties/${property._id || property.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            updatedAt: new Date().toISOString(),
            location: `${formData.address}, ${formData.city}, ${formData.state}`,
            priceFormatted: `$${parseInt(formData.price).toLocaleString()}`,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update property");
      }

      const updatedProperty = await response.json();
      setMessage({ type: "success", text: "Property updated successfully!" });

      // Call the onUpdate callback to refresh the parent component
      if (onUpdate) {
        onUpdate(updatedProperty.property);
      }

      // Close modal after a short delay
      setTimeout(() => {
        setIsModalOpen(false);
        setMessage({ type: "", text: "" });
      }, 1500);
    } catch (error) {
      console.error("Error updating property:", error);
      setMessage({
        type: "error",
        text: "Failed to update property. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Edit Button */}
      <button
        className="btn btn-circle btn-sm btn-ghost bg-white/80 hover:bg-white"
        onClick={() => setIsModalOpen(true)}
      >
        <FaEdit size={18} />
      </button>

      {/* Modal */}
      <dialog className={`modal ${isModalOpen ? "modal-open" : ""}`}>
        <div className="modal-box w-11/12 max-w-4xl">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Edit Property</h3>
            <button
              className="btn btn-sm btn-circle btn-ghost"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes />
            </button>
          </div>

          {/* Message */}
          {message.text && (
            <div
              className={`alert ${
                message.type === "success" ? "alert-success" : "alert-error"
              } mb-4`}
            >
              <span>{message.text}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Property Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bedrooms</span>
                </label>
                <input
                  type="number"
                  name="beds"
                  value={formData.beds}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Bathrooms</span>
                </label>
                <input
                  type="number"
                  name="baths"
                  value={formData.baths}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Square Feet</span>
                </label>
                <input
                  type="number"
                  name="sqft"
                  value={formData.sqft}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Property Type</span>
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="select select-bordered"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Single Family">Single Family</option>
                  <option value="Condo">Condo</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Multi-Family">Multi-Family</option>
                  <option value="Commercial">Commercial</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Status</span>
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="select select-bordered"
                  required
                >
                  <option value="">Select Status</option>
                  <option value="For Sale">For Sale</option>
                  <option value="For Rent">For Rent</option>
                  <option value="Sold">Sold</option>
                  <option value="Rented">Rented</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Featured Property</span>
                </label>
                <label className="label cursor-pointer">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text ml-2">Mark as Featured</span>
                </label>
              </div>
            </div>

            {/* Address Information */}
            <div className="divider">Address Information</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">City</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">State</span>
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">ZIP Code</span>
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            {/* Additional Details */}
            <div className="divider">Additional Details</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Year Built</span>
                </label>
                <input
                  type="number"
                  name="yearBuilt"
                  value={formData.yearBuilt}
                  onChange={handleInputChange}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Lot Size (sq ft)</span>
                </label>
                <input
                  type="number"
                  name="lotSize"
                  value={formData.lotSize}
                  onChange={handleInputChange}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Garage Spaces</span>
                </label>
                <input
                  type="number"
                  name="garageSpaces"
                  value={formData.garageSpaces}
                  onChange={handleInputChange}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Property Tax ($)</span>
                </label>
                <input
                  type="number"
                  name="propertyTax"
                  value={formData.propertyTax}
                  onChange={handleInputChange}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">HOA Fees ($)</span>
                </label>
                <input
                  type="number"
                  name="hoaFees"
                  value={formData.hoaFees}
                  onChange={handleInputChange}
                  className="input input-bordered"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="divider">Contact Information</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact Phone</span>
                </label>
                <input
                  type="tel"
                  name="contactPhone"
                  value={formData.contactPhone}
                  onChange={handleInputChange}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact Email</span>
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Agent Name</span>
                </label>
                <input
                  type="text"
                  name="agentName"
                  value={formData.agentName}
                  onChange={handleInputChange}
                  className="input input-bordered"
                />
              </div>
            </div>

            {/* Description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="textarea textarea-bordered h-24"
                placeholder="Describe the property..."
              />
            </div>

            {/* Features */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Features</span>
              </label>
              <div className="space-y-2">
                {formData.features?.map((feature, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) =>
                        handleFeatureChange(index, e.target.value)
                      }
                      className="input input-bordered flex-1"
                      placeholder="Enter feature"
                    />
                    <button
                      type="button"
                      onClick={() => removeFeature(index)}
                      className="btn btn-error btn-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addFeature}
                  className="btn btn-outline btn-sm"
                >
                  Add Feature
                </button>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="modal-action">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setIsModalOpen(false)}
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    Updating...
                  </>
                ) : (
                  <>
                    <FaSave />
                    Update Property
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setIsModalOpen(false)}>close</button>
        </form>
      </dialog>
    </>
  );
};

export default EditProperty;
