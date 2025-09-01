"use client";

import React, { useState, useEffect } from "react";
import PropertyCard from "../../../properties/comp/propertyCard";

const HomeDashboard = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/properties/add");

      if (!response.ok) {
        throw new Error("Failed to fetch properties");
      }

      const data = await response.json();
      setProperties(data.properties || []);
    } catch (err) {
      console.error("Error fetching properties:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePropertyUpdate = (updatedProperty) => {
    setProperties((prev) =>
      prev.map((property) =>
        property._id === updatedProperty._id ||
        property.id === updatedProperty.id
          ? updatedProperty
          : property
      )
    );
  };

  const handlePropertyDelete = (deletedPropertyId) => {
    setProperties((prev) =>
      prev.filter(
        (property) =>
          property._id !== deletedPropertyId &&
          property.id !== deletedPropertyId
      )
    );
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-center">
          <div className="loading loading-spinner loading-lg"></div>
          <span className="ml-2">Loading properties...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <div className="alert alert-error">
          <span>Error loading properties: {error}</span>
          <button onClick={fetchProperties} className="btn btn-sm">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to the admin dashboard. You have successfully logged in.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Total Properties
            </h3>
            <p className="text-3xl font-bold text-blue-700">
              {properties.length}
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-2">
              For Sale
            </h3>
            <p className="text-3xl font-bold text-green-700">
              {properties.filter((p) => p.status === "For Sale").length}
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-900 mb-2">
              For Rent
            </h3>
            <p className="text-3xl font-bold text-purple-700">
              {properties.filter((p) => p.status === "For Rent").length}
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            All Properties
          </h2>
          {properties.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">
                No properties found in the database.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard
                  key={property._id || property.id}
                  property={property}
                  admin={true}
                  showActions={false}
                  onUpdate={handlePropertyUpdate}
                  onDelete={handlePropertyDelete}
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-8">
          <button
            onClick={() => window.history.back()}
            className="btn btn-outline"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
