import React from "react";
import FooterBg from "../../images/footer/image1.png";

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center py-20 mb-12 bg-linear-to-br from-purple-600/20 to-blue-600/20">
          <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Exclusively by ThemeWagon
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Klean is an elegant HTML5 template and a perfect starting point for
            your next SaaS oriented site, carefully curated by ThemeWagon
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition">
            Download Free
          </button>
        </div>

        {/* Links section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12 text-sm">
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">About</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#prices" className="hover:text-indigo-600">
                  Prices
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-indigo-600">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-indigo-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#career" className="hover:text-indigo-600">
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#terms" className="hover:text-indigo-600">
                  Terms
                </a>
              </li>
              <li>
                <a href="#help" className="hover:text-indigo-600">
                  Help
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-indigo-600">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Team</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#developer" className="hover:text-indigo-600">
                  Developer
                </a>
              </li>
              <li>
                <a href="#designer" className="hover:text-indigo-600">
                  Designer
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Blog</h4>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="#ceo" className="hover:text-indigo-600">
                  CEO
                </a>
              </li>
              <li>
                <a href="#lifestyle" className="hover:text-indigo-600">
                  Lifestyle
                </a>
              </li>
              <li>
                <a href="#article" className="hover:text-indigo-600">
                  Article
                </a>
              </li>
              <li>
                <a href="#tech" className="hover:text-indigo-600">
                  Tech
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center hover:bg-indigo-200 transition"
              >
                <svg
                  className="w-4 h-4 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center hover:bg-indigo-200 transition"
              >
                <svg
                  className="w-4 h-4 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center hover:bg-indigo-200 transition"
              >
                <svg
                  className="w-4 h-4 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center hover:bg-indigo-200 transition"
              >
                <svg
                  className="w-4 h-4 text-indigo-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
            <h4 className="font-semibold text-gray-800 mb-3">
              Subscribe to our newsletter
            </h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-white border border-gray-200 rounded-full px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 w-7 h-7 bg-indigo-100 rounded-full flex items-center justify-center hover:bg-indigo-200 transition">
                <svg
                  className="w-4 h-4 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>All rights Reserved © Your Company, 2021</p>
          <p>Made with - by Themewagon</p>
        </div>
      </div>
    </footer>
  );
}
