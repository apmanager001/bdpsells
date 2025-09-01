"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHome,
  FaTag,
  FaCalendar,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";
import { getMainImageUrl, getAllImageUrls } from "../../../utils/imageUtils";

const PropertyDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (params.id) {
      fetchProperty();
    }
  }, [params.id]);

  useEffect(() => {
    if (error) {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            router.push("/properties");
            return 0;
          }
          return prev - 1;
        });
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [error, router]);

  const fetchProperty = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/properties/${params.id}`);

      if (!response.ok) {
        throw new Error("Property not found");
      }

      const data = await response.json();
      setProperty(data.property);
    } catch (err) {
      console.error("Error fetching property:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg"></div>
          <p className="mt-4 text-gray-600">Loading property details...</p>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 mt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Property Not Found Header */}
            <div className="mb-12">
              <div className="relative mb-8">
                <div className="text-8xl font-bold text-blue-600 opacity-20">
                  🏠
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaSearch className="text-6xl text-blue-600" />
                </div>
              </div>

              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                Property Not Found
              </h1>

              <p className="text-xl text-gray-600 mb-6">
                We couldn't find the property you're looking for. It might have
                been sold or removed from our listings.
              </p>

              <p className="text-lg text-gray-600">
                Don't worry though - we have plenty of other amazing properties
                waiting for you!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/properties"
                className="btn btn-primary btn-lg flex items-center gap-2"
              >
                <FaSearch />
                Browse All Properties
              </Link>

              <Link
                href="/"
                className="btn btn-outline btn-lg flex items-center gap-2"
              >
                <FaHome />
                Back to Home
              </Link>
            </div>

            {/* Auto-redirect Message */}
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-12">
              <p className="text-blue-700 text-lg">
                <FaArrowRight className="inline mr-2" />
                Redirecting you to our properties page in{" "}
                <span className="font-bold text-2xl">{countdown}</span>{" "}
                seconds...
              </p>
            </div>

            {/* Featured Properties Preview */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Check Out These Featured Properties
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Property Preview 1 */}
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaHome className="text-2xl text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Luxury Homes
                  </h3>
                  <p className="text-sm text-gray-600">
                    Discover our premium listings
                  </p>
                </div>

                {/* Property Preview 2 */}
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaMapMarkerAlt className="text-2xl text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Prime Locations
                  </h3>
                  <p className="text-sm text-gray-600">
                    Properties in the best areas
                  </p>
                </div>

                {/* Property Preview 3 */}
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <FaTag className="text-2xl text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Great Deals
                  </h3>
                  <p className="text-sm text-gray-600">
                    Best value for your money
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Link href="/properties" className="btn btn-primary btn-lg">
                  View All Properties
                </Link>
              </div>
            </div>

            {/* Additional Help */}
            <div className="mt-8 text-gray-500">
              <p className="text-sm">
                Need help finding the perfect property? Our agents are here to
                assist you! 💼🏡
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 mt-10">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="text-sm breadcrumbs">
            <ul>
              <li>
                <a href="/" className="text-blue-600 hover:text-blue-800">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/properties"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Properties
                </a>
              </li>
              <li className="text-gray-500">{property.title}</li>
            </ul>
          </nav>
        </div>

        {/* Property Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Image */}
            <div className="lg:w-2/3">
              <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={getMainImageUrl(property)}
                  alt={property.title}
                  fill
                  className="object-cover"
                  priority
                />
                {property.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="badge badge-primary text-lg">
                      Featured
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Property Info */}
            <div className="lg:w-1/3">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {property.title}
              </h1>

              <div className="text-4xl font-bold text-primary mb-6">
                {typeof property.price === "number"
                  ? `$${property.price.toLocaleString()}`
                  : property.price.startsWith("$")
                  ? property.price
                  : `$${parseFloat(property.price || 0).toLocaleString()}`}
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 text-gray-600">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <span>{property.location}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <FaHome className="text-blue-500" />
                  <span>{property.type}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <FaTag className="text-blue-500" />
                  <span>{property.status}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600">
                  <FaCalendar className="text-blue-500" />
                  <span>
                    Listed {new Date(property.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {property.beds}
                  </div>
                  <div className="text-sm text-gray-600">Beds</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {property.baths}
                  </div>
                  <div className="text-sm text-gray-600">Baths</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">
                    {property.sqft}
                  </div>
                  <div className="text-sm text-gray-600">Sq Ft</div>
                </div>
              </div>

              <div className="space-y-3">
                <button className="btn btn-primary w-full">
                  Schedule Viewing
                </button>
                <button className="btn btn-outline w-full">
                  Contact Agent
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Description */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {property.description ||
                  `This beautiful ${property.type} located in ${
                    property.city
                  }, ${property.state} offers ${property.beds} bedrooms and ${
                    property.baths
                  } bathrooms with ${
                    property.sqft
                  } square feet of living space. This property is currently ${property.status.toLowerCase()} and represents an excellent opportunity for ${
                    property.status === "For Sale" ? "homeownership" : "rental"
                  }.`}
              </p>
            </div>

            {/* Features */}
            {property.features && property.features.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Images */}
            {property.images && property.images.length > 1 && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {getAllImageUrls(property)
                    .slice(1)
                    .map((image, index) => (
                      <div
                        key={index}
                        className="relative h-32 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={image}
                          alt={`${property.title} - Image ${index + 2}`}
                          height={500}
                          width={500}
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Property Details
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Property Type:</span>
                  <span className="font-medium">{property.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status:</span>
                  <span className="font-medium">{property.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bedrooms:</span>
                  <span className="font-medium">{property.beds}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bathrooms:</span>
                  <span className="font-medium">{property.baths}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Square Feet:</span>
                  <span className="font-medium">{property.sqft}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Address:</span>
                  <span className="font-medium text-right max-w-[150px]">
                    {property.address}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">City:</span>
                  <span className="font-medium">{property.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">State:</span>
                  <span className="font-medium">{property.state}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ZIP Code:</span>
                  <span className="font-medium">{property.zipCode}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <button className="btn btn-primary w-full">Call Agent</button>
                <button className="btn btn-outline w-full">Send Message</button>
                <button className="btn btn-outline w-full">
                  Schedule Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
