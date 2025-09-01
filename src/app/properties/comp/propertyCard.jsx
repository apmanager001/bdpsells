"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaShare } from "react-icons/fa";
import { FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { getMainImageUrl } from "../../../utils/imageUtils";
import EditProperty from "../../admin/dashboard/comp/editProperty";
import DeleteProperty from "../../admin/dashboard/comp/deleteProperty";

const PropertyCard = ({
  property,
  showActions = true,
  admin = false,
  onUpdate = null,
  onDelete = null,
}) => {
  return (
    <div
      key={property.id}
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <figure className="h-64 relative">
        <Image
          src={getMainImageUrl(property) || "/home.jpg"}
          width={500}
          height={500}
          alt={property.title}
          className="w-full h-full object-cover"
          priority
        />
        {showActions && property.featured && (
          <div className="badge badge-primary absolute top-4 left-4">
            Featured
          </div>
        )}
        {admin && (
          <div className="absolute top-4 right-4 flex gap-2">
            <EditProperty property={property} onUpdate={onUpdate} />
            <DeleteProperty property={property} onDelete={onDelete} />
          </div>
        )}
        {showActions && (
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="btn btn-circle btn-sm btn-ghost bg-white/80 hover:bg-white">
              <FaHeart className="text-red-500" />
            </button>
            <button className="btn btn-circle btn-sm btn-ghost bg-white/80 hover:bg-white">
              <FaShare />
            </button>
          </div>
        )}
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start mb-2">
          <h3 className="card-title text-lg">{property.title}</h3>
          <span className="text-2xl font-bold text-primary">
            {typeof property.price === "number"
              ? `$${property.price.toLocaleString()}`
              : property.price.startsWith("$")
              ? property.price
              : `$${parseFloat(property.price || 0).toLocaleString()}`}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <FaMapMarkerAlt />
          <span>{property.location}</span>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <FaBed />
            <span>{property.beds} beds</span>
          </div>
          <div className="flex items-center gap-1">
            <FaBath />
            <span>{property.baths} baths</span>
          </div>
          <div className="flex items-center gap-1">
            <FaRulerCombined />
            <span>{property.sqft} sqft</span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="badge badge-outline">{property.type}</span>
          <span className="badge badge-success">{property.status}</span>
        </div>

        <div className="card-actions justify-end">
          <Link
            href={`/properties/${property._id || property.id}`}
            className="btn btn-primary"
          >
            View Details
          </Link>
          {showActions && (
            <button className="btn btn-outline">Schedule Viewing</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
