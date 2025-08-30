import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div>
          <span className="footer-title">BDP Sells</span>
          <p className="text-sm">
            Your trusted partner in real estate.
            <br />
            Professional service, exceptional results.
          </p>
        </div>
        <div>
          <span className="footer-title">Quick Links</span>
          <Link href="/properties" className="link link-hover">
            Properties
          </Link>
          <Link href="/about" className="link link-hover">
            About Us
          </Link>
          <Link href="/services" className="link link-hover">
            Services
          </Link>
          <Link href="/contact" className="link link-hover">
            Contact
          </Link>
        </div>
        <div>
          <span className="footer-title">Contact Info</span>
          <div className="flex items-center gap-2">
            <FaPhone />
            <span>(231) 627-1234</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>info@bdpsells.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>14071 Vaness Dr, Cheboygan, MI 49721</span>
          </div>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-neutral border-neutral-content">
        <div className="items-center grid-flow-col">
          <p>Copyright © 2025 - All rights reserved by BDP Sells</p>
        </div>
        <div className="md:place-self-end md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link href="/privacy" className="link link-hover">
              Privacy Policy
            </Link>
            <Link href="/terms" className="link link-hover">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
