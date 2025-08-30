"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaHome,
  FaSearch,
  FaInfoCircle,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="navbar bg-base-100 shadow-lg fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/" className={isActive("/") ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/properties"
                className={isActive("/properties") ? "active" : ""}
              >
                Properties
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={isActive("/about") ? "active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={isActive("/services") ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={isActive("/contact") ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold text-primary">
          BDP Sells
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              href="/"
              className={`flex items-center gap-2 ${
                isActive("/") ? "active" : ""
              }`}
            >
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link
              href="/properties"
              className={`flex items-center gap-2 ${
                isActive("/properties") ? "active" : ""
              }`}
            >
              <FaSearch /> Properties
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`flex items-center gap-2 ${
                isActive("/about") ? "active" : ""
              }`}
            >
              <FaInfoCircle /> About
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`flex items-center gap-2 ${
                isActive("/services") ? "active" : ""
              }`}
            >
              <FaUser /> Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`flex items-center gap-2 ${
                isActive("/contact") ? "active" : ""
              }`}
            >
              <FaEnvelope /> Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/contact" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </nav>
  );
}
