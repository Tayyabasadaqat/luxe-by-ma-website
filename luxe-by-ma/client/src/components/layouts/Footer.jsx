import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Luxe By MA
            </h2>

            <p className="text-gray-400 leading-7">
              Discover timeless handbags crafted to elevate
              your everyday style with elegance and confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/collection">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Customer Care
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li><Link to="/shipping">Shipping & Delivery</Link></li>
              <li><Link to="/returns">Returns & Exchanges</Link></li>
             <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4 text-2xl">

<a
  href="https://www.instagram.com/luxeby_m.a/"
  target="_blank"
  rel="noopener noreferrer"
>                <FaInstagram />
              </a>

            </div>

            <p className="text-gray-400 mt-6">
              Email:
              <br />
              info@luxebymastore.com
            </p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400">
          © 2026 Luxe By MA. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;