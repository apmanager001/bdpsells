import Link from "next/link";
import {
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHeart,
  FaShare,
} from "react-icons/fa";

export const metadata = {
  title: "Properties - BDP Sells Real Estate",
  description:
    "Browse our selection of properties for sale. Find your perfect home with BDP Sells.",
  keywords: "properties, homes for sale, real estate listings, BDP Sells",
};

export default function PropertiesPage() {
  const properties = [
    {
      id: 1,
      title: "Luxury Family Home",
      price: "$750,000",
      location: "123 Main Street, City, State",
      beds: 4,
      baths: 3,
      sqft: "2,500",
      type: "Single Family",
      status: "For Sale",
      image: "/home.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Modern Downtown Condo",
      price: "$450,000",
      location: "456 Oak Avenue, City, State",
      beds: 2,
      baths: 2,
      sqft: "1,200",
      type: "Condo",
      status: "For Sale",
      image: "/home.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Cozy Townhouse",
      price: "$325,000",
      location: "789 Pine Street, City, State",
      beds: 3,
      baths: 2.5,
      sqft: "1,800",
      type: "Townhouse",
      status: "For Sale",
      image: "/home.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Spacious Ranch Home",
      price: "$550,000",
      location: "321 Elm Street, City, State",
      beds: 3,
      baths: 2,
      sqft: "2,200",
      type: "Single Family",
      status: "For Sale",
      image: "/home.jpg",
      featured: false,
    },
    {
      id: 5,
      title: "Investment Duplex",
      price: "$680,000",
      location: "654 Maple Drive, City, State",
      beds: 6,
      baths: 4,
      sqft: "3,000",
      type: "Multi-Family",
      status: "For Sale",
      image: "/home.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "Waterfront Villa",
      price: "$1,200,000",
      location: "987 Lake View Road, City, State",
      beds: 5,
      baths: 4.5,
      sqft: "4,200",
      type: "Single Family",
      status: "For Sale",
      image: "/home.jpg",
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-primary text-primary-content py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Properties for Sale</h1>
          <p className="text-xl">
            Discover your perfect home from our curated selection
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-base-200 py-8">
        <div className="container mx-auto px-4">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-6 flex items-center gap-2">
                <FaSearch />
                Search Properties
              </h2>

              {/* Search Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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
                    <option>$500k - $750k</option>
                    <option>$750k+</option>
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
                    <option>5+</option>
                  </select>
                </div>
              </div>

              {/* Additional Filters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Bathrooms</span>
                  </label>
                  <select className="select select-bordered">
                    <option>Any</option>
                    <option>1+</option>
                    <option>2+</option>
                    <option>3+</option>
                    <option>4+</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Square Footage</span>
                  </label>
                  <select className="select select-bordered">
                    <option>Any Size</option>
                    <option>Under 1,000 sqft</option>
                    <option>1,000 - 1,500 sqft</option>
                    <option>1,500 - 2,000 sqft</option>
                    <option>2,000 - 3,000 sqft</option>
                    <option>3,000+ sqft</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Sort By</span>
                  </label>
                  <select className="select select-bordered">
                    <option>Newest First</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Square Footage</option>
                    <option>Bedrooms</option>
                  </select>
                </div>
              </div>

              <div className="card-actions justify-center">
                <button className="btn btn-primary btn-lg">
                  <FaSearch className="mr-2" />
                  Search Properties
                </button>
                <button className="btn btn-outline">
                  <FaFilter className="mr-2" />
                  Advanced Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              Showing {properties.length} Properties
            </h2>
            <div className="flex gap-2">
              <button className="btn btn-sm btn-outline">Grid View</button>
              <button className="btn btn-sm btn-outline">List View</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <figure className="h-64 relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  {property.featured && (
                    <div className="badge badge-primary absolute top-4 left-4">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="btn btn-circle btn-sm btn-ghost bg-white/80 hover:bg-white">
                      <FaHeart className="text-red-500" />
                    </button>
                    <button className="btn btn-circle btn-sm btn-ghost bg-white/80 hover:bg-white">
                      <FaShare />
                    </button>
                  </div>
                </figure>
                <div className="card-body">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="card-title text-lg">{property.title}</h3>
                    <span className="text-2xl font-bold text-primary">
                      {property.price}
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
                    <span className="badge badge-success">
                      {property.status}
                    </span>
                  </div>

                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                    <button className="btn btn-outline">
                      Schedule Viewing
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="join">
              <button className="join-item btn">«</button>
              <button className="join-item btn btn-active">1</button>
              <button className="join-item btn">2</button>
              <button className="join-item btn">3</button>
              <button className="join-item btn">»</button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl mb-8">
            Let us know your specific requirements and we'll help you find the
            perfect property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Contact Us
            </Link>
            <button className="btn btn-outline btn-lg">Set Up Alerts</button>
          </div>
        </div>
      </div>
    </div>
  );
}
