import Link from "next/link";
import {
  FaAward,
  FaHandshake,
  FaChartLine,
  FaUsers,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import Image from "next/image";
import ContactMap from "../contact/comp/map";

export const metadata = {
  title: "About Us - BDP Sells Real Estate",
  description:
    "Learn about BDP Sells, your trusted real estate partner with years of experience and local market expertise.",
  keywords:
    "about BDP Sells, real estate agent, realtor bio, local expertise, BDP Sells team",
};

export default function AboutPage() {
  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "$50M+", label: "Properties Sold" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Client Satisfaction" },
  ];

  const team = [
    {
      name: "John Smith",
      role: "Principal Broker & Owner",
      image: "/team-1.jpg",
      bio: "With over 15 years in real estate, John specializes in luxury properties and investment opportunities.",
      phone: "(231) 627-1234",
      email: "john@bdpsells.com",
    },
    {
      name: "Sarah Johnson",
      role: "Senior Real Estate Agent",
      image: "/team-2.jpg",
      bio: "Sarah excels in first-time homebuyers and family homes, with a passion for finding perfect neighborhoods.",
      phone: "(231) 627-1235",
      email: "sarah@bdpsells.com",
    },
    {
      name: "Mike Davis",
      role: "Investment Specialist",
      image: "/team-3.jpg",
      bio: "Mike focuses on investment properties, multi-family units, and helping investors build wealth through real estate.",
      phone: "(231) 627-1236",
      email: "mike@bdpsells.com",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-primary text-primary-content py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About BDP Sells</h1>
          <p className="text-xl">
            Your trusted partner in real estate for over 15 years
          </p>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-4">
                Founded in 2009, BDP Sells has been serving the local community
                with dedication, integrity, and exceptional results. What
                started as a small family business has grown into one of the
                most trusted names in real estate.
              </p>
              <p className="text-lg mb-4">
                We believe that buying or selling a home is one of the most
                important decisions in life, and we&apos;re committed to making
                that experience as smooth and successful as possible for every
                client.
              </p>
              <p className="text-lg mb-6">
                Our team combines local market expertise with personalized
                service to ensure you find the perfect property or get the best
                value for your home.
              </p>
              <Link href="/contact" className="btn btn-primary btn-lg">
                Get to Know Us
              </Link>
            </div>
            <div className="relative">
              <Image
                src="/about-image.jpg"
                width={100}
                height={100}
                alt="BDP Sells Office"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-content p-6 rounded-lg">
                <p className="text-2xl font-bold">15+ Years</p>
                <p className="text-sm">of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re committed to providing exceptional real estate services
              while maintaining the highest standards of integrity and
              professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHandshake className="text-white text-2xl" />
                </div>
                <h3 className="card-title text-xl mb-2">Integrity</h3>
                <p>
                  We conduct business with honesty, transparency, and ethical
                  practices in everything we do.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h3 className="card-title text-xl mb-2">Client Focus</h3>
                <p>
                  Your success is our priority. We provide personalized
                  attention and dedicated support throughout your journey.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaChartLine className="text-white text-2xl" />
                </div>
                <h3 className="card-title text-xl mb-2">Excellence</h3>
                <p>
                  We strive for excellence in every transaction, ensuring the
                  best possible outcomes for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <figure className="h-64">
                  <Image
                    src={member.image}
                    width={100}
                    height={100}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-xl">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <FaPhone className="text-primary" />
                      <span>{member.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FaEnvelope className="text-primary" />
                      <span>{member.email}</span>
                    </div>
                  </div>

                  <div className="card-actions justify-end">
                    <button className="btn btn-primary btn-sm">Contact</button>
                    <button className="btn btn-outline btn-sm">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Certifications & Awards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-white text-3xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Top Producer</h3>
              <p className="text-sm text-gray-600">2020-2023</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-white text-3xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence Award</h3>
              <p className="text-sm text-gray-600">Local Association</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-white text-3xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
              <p className="text-sm text-gray-600">5-Star Rating</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-white text-3xl" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Million Dollar</h3>
              <p className="text-sm text-gray-600">Sales Club</p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Office</h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                  <div>
                    <p className="font-semibold">BDP Sells Real Estate</p>
                    <p className="text-gray-600">
                      14071 Vaness Dr
                      <br />
                      Cheboygan, MI 49721
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhone className="text-primary text-xl" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">(231) 627-1234</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-primary text-xl" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">info@bdpsells.com</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Office Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: By Appointment</p>
              </div>

              <Link href="/contact" className="btn btn-primary">
                Schedule a Meeting
              </Link>
            </div>

            <ContactMap />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">
            Let&apos;s discuss your real estate needs and how we can help you
            achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-secondary btn-lg">
              Contact Us Today
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
