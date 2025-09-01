"use client";

import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const DeleteProperty = ({ property, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleDelete = async () => {
    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch(
        `/api/properties/${property._id || property.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete property");
      }

      setMessage({ type: "success", text: "Property deleted successfully!" });

      // Call the onDelete callback to refresh the parent component
      if (onDelete) {
        onDelete(property._id || property.id);
      }

      // Close modal after a short delay
      setTimeout(() => {
        setIsModalOpen(false);
        setMessage({ type: "", text: "" });
      }, 1500);
    } catch (error) {
      console.error("Error deleting property:", error);
      setMessage({
        type: "error",
        text: "Failed to delete property. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Delete Button */}
      <button
        className="btn btn-circle btn-sm btn-ghost bg-white/80 hover:bg-white"
        onClick={() => setIsModalOpen(true)}
      >
        <FaTrash className="text-red-500" />
      </button>

      {/* Modal */}
      <dialog className={`modal ${isModalOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
          {/* Modal Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-red-600">Delete Property</h3>
            <button
              className="btn btn-sm btn-circle btn-ghost"
              onClick={() => setIsModalOpen(false)}
            >
              ×
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

          {/* Warning Message */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="text-red-500 text-2xl">⚠️</div>
              <div>
                <h4 className="font-semibold text-red-800">Are you sure?</h4>
                <p className="text-red-700 text-sm mt-1">
                  This action cannot be undone. The property "{property.title}"
                  will be permanently deleted from the database.
                </p>
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-gray-800 mb-2">
              Property Details:
            </h4>
            <div className="text-sm text-gray-600 space-y-1">
              <p>
                <strong>Title:</strong> {property.title}
              </p>
              <p>
                <strong>Price:</strong> $
                {parseInt(property.price).toLocaleString()}
              </p>
              <p>
                <strong>Location:</strong> {property.location}
              </p>
              <p>
                <strong>Type:</strong> {property.type}
              </p>
              <p>
                <strong>Status:</strong> {property.status}
              </p>
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
              type="button"
              className="btn btn-error"
              onClick={handleDelete}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Deleting...
                </>
              ) : (
                <>
                  <FaTrash />
                  Delete Property
                </>
              )}
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => setIsModalOpen(false)}>close</button>
        </form>
      </dialog>
    </>
  );
};

export default DeleteProperty;
