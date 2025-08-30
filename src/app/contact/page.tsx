import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaPaperPlane,
} from "react-icons/fa";
import ContactMap from "./comp/map";

export const metadata = {
  title: "Contact Us - BDP Sells Real Estate",
  description:
    "Get in touch with BDP Sells for all your real estate needs. Contact us for consultations, property inquiries, or general questions.",
  keywords:
    "contact BDP Sells, real estate agent contact, realtor contact, BDP Sells phone, BDP Sells email",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-primary text-primary-content py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">
            Get in touch with our team for all your real estate needs
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">First Name *</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Last Name *</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="input input-bordered"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email *</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="(231) 627-1234"
                      className="input input-bordered"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Subject *</span>
                  </label>
                  <select className="select select-bordered" required>
                    <option value="">Select a subject</option>
                    <option value="buying">I want to buy a home</option>
                    <option value="selling">I want to sell my home</option>
                    <option value="investment">
                      Investment property inquiry
                    </option>
                    <option value="valuation">
                      Property valuation request
                    </option>
                    <option value="general">General question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Message *</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-32"
                    placeholder="Tell us about your real estate needs..."
                    required
                  ></textarea>
                </div>

                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">
                      I agree to be contacted by BDP Sells regarding my inquiry
                    </span>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary"
                      required
                    />
                  </label>
                </div>

                <button type="submit" className="btn btn-primary btn-lg w-full">
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">
                      Office Address
                    </h3>
                    <p className="text-gray-600">
                      BDP Sells Real Estate
                      <br />
                      14071 Vaness Dr
                      <br />
                      Cheboygan, MI 49721
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Main: (231) 627-1234
                      <br />
                      Fax: (231) 627-1235
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-600">
                      General: info@bdpsells.com
                      <br />
                      Sales: sales@bdpsells.com
                      <br />
                      Support: support@bdpsells.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                      <br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="#" className="btn btn-circle btn-outline">
                    <FaFacebook />
                  </a>
                  <a href="#" className="btn btn-circle btn-outline">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="btn btn-circle btn-outline">
                    <FaInstagram />
                  </a>
                  <a href="#" className="btn btn-circle btn-outline">
                    <FaTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Quick Contact Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPhone className="text-white text-2xl" />
                </div>
                <h3 className="card-title text-xl mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">
                  Speak directly with our team for immediate assistance.
                </p>
                <a href="tel:2316271234" className="btn btn-primary">
                  (231) 627-1234
                </a>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
                <h3 className="card-title text-xl mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">
                  Send us a detailed message and we&apos;ll respond within 24
                  hours.
                </p>
                <a href="mailto:info@bdpsells.com" className="btn btn-primary">
                  info@bdpsells.com
                </a>
              </div>
            </div>

            <div className="card bg-base-100 shadow-xl">
              <div className="card-body text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
                <h3 className="card-title text-xl mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-4">
                  Stop by our office for a face-to-face consultation.
                </p>
                <button className="btn btn-primary">Get Directions</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="collapse collapse-arrow bg-base-100 shadow-lg">
              <input type="radio" name="faq-accordion" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                What areas do you serve?
              </div>
              <div className="collapse-content">
                <p>
                  We serve the entire metropolitan area including City, Suburb,
                  and surrounding communities. Our team has extensive knowledge
                  of local neighborhoods and market conditions.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                How quickly can you respond to inquiries?
              </div>
              <div className="collapse-content">
                <p>
                  We typically respond to all inquiries within 2-4 hours during
                  business hours. For urgent matters, we&apos;re available by
                  phone 24/7.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                Do you offer virtual consultations?
              </div>
              <div className="collapse-content">
                <p>
                  Yes! We offer video consultations via Zoom, FaceTime, or other
                  platforms for your convenience and safety.
                </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-100 shadow-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl font-medium">
                What documents do I need for a consultation?
              </div>
              <div className="collapse-content">
                <p>
                  For initial consultations, no documents are required.
                  We&apos;ll discuss your needs and guide you on what
                  documentation will be needed for specific services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-base-200">
        <div className="container mx-auto">
          <div className="h-full w-full">
            <ContactMap />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Don&apos;t wait to start your real estate journey. Contact us today
            for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:2316271234" className="btn btn-secondary btn-lg">
              <FaPhone className="mr-2" />
              Call Now
            </a>
            <a
              href="mailto:info@bdpsells.com"
              className="btn btn-outline btn-lg text-primary-content border-primary-content hover:bg-primary-content hover:text-primary"
            >
              <FaEnvelope className="mr-2" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
