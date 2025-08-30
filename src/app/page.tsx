"use client";

import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHome,
  FaSearch,
  FaUser,
  FaInfoCircle,
  FaNewspaper,
} from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="hero min-h-screen relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          {/* Fallback background in case video doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-80"></div>

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover relative z-10"
            poster="/hero-poster.jpg"
          >
            <source
              src="/hero.mp4"
              type="video/mp4; codecs=avc1.42E01E, mp4a.40.2"
            />
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-20"></div>
        </div>

        {/* Hero Content */}
        <div className="hero-content text-center text-neutral-content relative z-30">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-5xl font-bold">Find Your Dream Home</h1>
            <p className="mb-8 text-xl">
              Professional real estate services with personalized attention to
              help you buy, sell, or invest in your perfect property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/properties"
                className="btn btn-soft btn-primary btn-lg"
              >
                <FaSearch className="mr-2" />
                Browse Properties
              </Link>
              <Link
                href="/contact"
                className="btn btn-soft btn-secondary btn-lg"
              >
                <FaPhone className="mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Search Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="card bg-base-100 shadow-xl max-w-4xl mx-auto">
            <div className="card-body">
              <h2 className="card-title text-3xl mb-6 text-center">
                Find Your Perfect Home
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Location</span>
                  </label>
                  <input
                    type="text"
                    placeholder="City, State, or ZIP"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Property Type</span>
                  </label>
                  <select className="select select-bordered">
                    <option>Any Type</option>
                    <option>Single Family</option>
                    <option>Condo</option>
                    <option>Townhouse</option>
                    <option>Multi-Family</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price Range</span>
                  </label>
                  <select className="select select-bordered">
                    <option>Any Price</option>
                    <option>$100k - $200k</option>
                    <option>$200k - $300k</option>
                    <option>$300k - $500k</option>
                    <option>$500k+</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Bedrooms</span>
                  </label>
                  <select className="select select-bordered">
                    <option>Any</option>
                    <option>1+</option>
                    <option>2+</option>
                    <option>3+</option>
                    <option>4+</option>
                  </select>
                </div>
              </div>
              <div className="card-actions justify-center mt-6">
                <button className="btn btn-primary btn-lg">
                  <FaSearch className="mr-2" />
                  Search Properties
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Card 1 */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="h-64">
                <img
                  src="/home.jpg"
                  alt="Luxury Home"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Luxury Family Home</h3>
                <p className="text-2xl font-bold text-primary">$750,000</p>
                <p className="text-sm text-gray-600">
                  4 bed • 3 bath • 2,500 sqft
                </p>
                <p className="text-sm text-gray-600">
                  123 Main Street, City, State
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="h-64">
                <img
                  src="/home.jpg"
                  alt="Modern Condo"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Modern Downtown Condo</h3>
                <p className="text-2xl font-bold text-primary">$450,000</p>
                <p className="text-sm text-gray-600">
                  2 bed • 2 bath • 1,200 sqft
                </p>
                <p className="text-sm text-gray-600">
                  456 Oak Avenue, City, State
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="card bg-base-100 shadow-xl">
              <figure className="h-64">
                <img
                  src="/home.jpg"
                  alt="Cozy Townhouse"
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Cozy Townhouse</h3>
                <p className="text-2xl font-bold text-primary">$325,000</p>
                <p className="text-sm text-gray-600">
                  3 bed • 2.5 bath • 1,800 sqft
                </p>
                <p className="text-sm text-gray-600">
                  789 Pine Street, City, State
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/properties" className="btn btn-primary btn-soft btn-lg">
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose BDP Sells?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUser className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Years of experience in the local real estate market with proven
                results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHome className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Knowledge</h3>
              <p className="text-gray-600">
                Deep understanding of neighborhoods, schools, and market trends.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personal Service</h3>
              <p className="text-gray-600">
                Dedicated support throughout your entire real estate journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl mb-8">
            Let's start your real estate journey today. Contact us for a free
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-secondary btn-soft btn-lg">
              <FaPhone className="mr-2" />
              Call Now
            </Link>
            <Link
              href="/properties"
              className="btn btn-soft btn-lg btn-primary"
            >
              <FaSearch className="mr-2" />
              Browse Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
