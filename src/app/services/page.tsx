import Link from "next/link";
import {
  FaHome,
  FaSearch,
  FaChartLine,
  FaHandshake,
  FaCalculator,
  FaClipboardList,
  FaCamera,
  FaBullhorn,
  FaUsers,
  FaShieldAlt,
  FaLightbulb,
  FaGraduationCap,
} from "react-icons/fa";

export const metadata = {
  title: "Services - BDP Sells Real Estate",
  description:
    "Comprehensive real estate services including buying, selling, investing, and property management. Expert guidance for all your real estate needs.",
  keywords:
    "real estate services, home buying, home selling, property investment, property management, BDP Sells",
};

export default function ServicesPage() {
  const services = [
    {
      icon: FaHome,
      title: "Home Buying",
      description:
        "Expert guidance through the entire home buying process, from search to closing.",
      features: [
        "Property search and evaluation",
        "Market analysis and pricing",
        "Negotiation and offer strategy",
        "Home inspection coordination",
        "Closing assistance",
      ],
      price: "No upfront fees",
      cta: "Start Your Search",
    },
    {
      icon: FaHandshake,
      title: "Home Selling",
      description:
        "Maximize your home's value and sell quickly with our proven marketing strategies.",
      features: [
        "Property valuation and pricing",
        "Professional photography and staging",
        "Marketing and advertising",
        "Open house coordination",
        "Negotiation support",
      ],
      price: "Competitive commission rates",
      cta: "Get Your Home Valued",
    },
    {
      icon: FaChartLine,
      title: "Investment Properties",
      description:
        "Build wealth through real estate with our investment property expertise.",
      features: [
        "Investment property analysis",
        "ROI calculations and projections",
        "Market trend analysis",
        "Property management referrals",
        "Tax strategy guidance",
      ],
      price: "Consultation fee applies",
      cta: "Investment Consultation",
    },
    {
      icon: FaCalculator,
      title: "Property Valuation",
      description:
        "Accurate property valuations using market data and professional expertise.",
      features: [
        "Comparative market analysis",
        "Property condition assessment",
        "Market trend evaluation",
        "Detailed valuation report",
        "Price optimization strategy",
      ],
      price: "Free for clients",
      cta: "Get Free Valuation",
    },
    {
      icon: FaClipboardList,
      title: "Property Management",
      description:
        "Professional property management services for landlords and investors.",
      features: [
        "Tenant screening and placement",
        "Rent collection and accounting",
        "Property maintenance coordination",
        "Legal compliance management",
        "Financial reporting",
      ],
      price: "8-10% of monthly rent",
      cta: "Management Services",
    },
    {
      icon: FaCamera,
      title: "Professional Photography",
      description:
        "High-quality photography and virtual tours to showcase your property.",
      features: [
        "Professional real estate photography",
        "Drone photography and video",
        "Virtual tours and 3D walkthroughs",
        "Property staging consultation",
        "Marketing material creation",
      ],
      price: "Starting at $150",
      cta: "Book Photography",
    },
  ];

  const additionalServices = [
    {
      icon: FaBullhorn,
      title: "Marketing & Advertising",
      description:
        "Comprehensive marketing strategies to reach potential buyers and tenants.",
    },
    {
      icon: FaUsers,
      title: "Relocation Services",
      description:
        "Assistance for families and individuals relocating to the area.",
    },
    {
      icon: FaShieldAlt,
      title: "Legal Support",
      description:
        "Referrals to trusted real estate attorneys and legal resources.",
    },
    {
      icon: FaLightbulb,
      title: "Home Improvement Advice",
      description:
        "Guidance on renovations and improvements to increase property value.",
    },
    {
      icon: FaGraduationCap,
      title: "First-Time Buyer Education",
      description:
        "Educational resources and guidance for first-time homebuyers.",
    },
    {
      icon: FaSearch,
      title: "Market Research",
      description:
        "In-depth market analysis and trend reports for informed decisions.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-primary text-primary-content py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>
      </div>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a full range of real estate services to help you buy,
              sell, and invest in properties with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="card-body">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="text-white text-2xl" />
                  </div>

                  <h3 className="card-title text-xl text-center mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="text-center mb-4">
                    <span className="badge badge-primary badge-lg">
                      {service.price}
                    </span>
                  </div>

                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">{service.cta}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">
                We start with a thorough consultation to understand your needs
                and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">
                We develop a customized strategy tailored to your specific
                situation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Execution</h3>
              <p className="text-gray-600">
                We implement the strategy with professional expertise and
                attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Results</h3>
              <p className="text-gray-600">
                We deliver exceptional results and provide ongoing support as
                needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-3">
                    <service.icon className="text-white text-lg" />
                  </div>
                  <h3 className="card-title text-lg">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Service Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <h3 className="card-title text-2xl mb-4">Buyer Services</h3>
                <div className="text-3xl font-bold text-primary mb-4">FREE</div>
                <p className="text-gray-600 mb-6">
                  No upfront costs for buyers. We're compensated by the seller.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Property search assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Market analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Negotiation support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Closing assistance</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn btn-primary w-full">
                  Get Started
                </Link>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl border-2 border-primary">
              <div className="card-body text-center">
                <div className="badge badge-primary mb-2">Most Popular</div>
                <h3 className="card-title text-2xl mb-4">Seller Services</h3>
                <div className="text-3xl font-bold text-primary mb-4">6%</div>
                <p className="text-gray-600 mb-6">
                  Standard commission rate for full-service listing and
                  marketing.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Professional photography</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Marketing campaigns</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Open house coordination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Negotiation support</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn btn-primary w-full">
                  List Your Home
                </Link>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <h3 className="card-title text-2xl mb-4">
                  Investment Services
                </h3>
                <div className="text-3xl font-bold text-primary mb-4">$500</div>
                <p className="text-gray-600 mb-6">
                  One-time consultation fee for investment property analysis.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Market analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>ROI calculations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Property recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Follow-up support</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn btn-primary w-full">
                  Investment Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandshake className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Personalized Approach
              </h3>
              <p className="text-gray-600">
                Every client receives customized service tailored to their
                specific needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaChartLine className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Track record of successful transactions and satisfied clients.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Professional Standards
              </h3>
              <p className="text-gray-600">
                Licensed professionals with ongoing education and training.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of local markets, neighborhoods, and trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Let's discuss your real estate needs and find the perfect service
            package for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Schedule Consultation
            </Link>
            <Link
              href="/properties"
              className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary"
            >
              View Properties
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
