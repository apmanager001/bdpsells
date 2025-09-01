"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaHome, FaSearch, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.href = "/";
          return 0;
        }
        return prev - 1;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number with House Icon */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-blue-600 opacity-20">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <FaHome className="text-6xl text-blue-600" />
          </div>
        </div>

        {/* Main Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! This Property Has Been Sold!
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Looks like this listing has already found its perfect buyer. Don't
          worry though - we have plenty of other amazing properties waiting for
          you!
        </p>

        {/* Fun Real Estate Joke */}
        <div className="bg-white rounded-lg p-6 mb-8 shadow-lg border-l-4 border-blue-500">
          <p className="text-gray-700 italic">
            "Why did the real estate agent go broke? Because they couldn't make
            ends meet!" 🏠😄
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            href="/"
            className="btn btn-primary btn-lg flex items-center gap-2"
          >
            <FaHome />
            Back to Home
          </Link>

          <Link
            href="/properties"
            className="btn btn-outline btn-lg flex items-center gap-2"
          >
            <FaSearch />
            Browse Properties
          </Link>
        </div>

        {/* Auto-redirect Message */}
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <p className="text-blue-700">
            <FaMapMarkerAlt className="inline mr-2" />
            Redirecting you to our homepage in{" "}
            <span className="font-bold">{countdown}</span> seconds...
          </p>
        </div>

        {/* Additional Fun Elements */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-500">
          <div className="flex items-center justify-center gap-2">
            <span>🏠</span>
            <span>No property found here</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>🔍</span>
            <span>Search elsewhere</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>✨</span>
            <span>Better luck next time</span>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-12 text-gray-500">
          <p className="text-sm">
            Remember: In real estate, the best property is the one you can
            actually afford! 💰🏡
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
