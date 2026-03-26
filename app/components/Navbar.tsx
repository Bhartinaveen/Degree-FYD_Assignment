"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Universities", hasDropdown: false },
  { label: "Courses", hasDropdown: false, active: true },
  { label: "Exams", hasDropdown: false },
  { label: "About us", hasDropdown: false },
  { label: "More", hasDropdown: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 flex-shrink-0 group">
            <div className="flex items-center h-12">
              <img src="/logo.png" alt="Logo" className="h-8 md:h-10 w-auto object-contain" />
              <div className="flex items-baseline ml-[-3px]">
                <span className="text-[20px] md:text-[26px] font-normal tracking-tight text-[#191919]">Degree</span>
                <span className="text-[20px] md:text-[26px] font-bold tracking-tight text-[#191919]">FYD</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="relative h-16 flex items-center"
              >
                <Link
                  href="#"
                  className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors h-full ${
                    item.label === "Courses"
                    ? "text-[#0d3b59] font-semibold"
                    : "text-[#191919] hover:text-[#0d3b59]"
                  }`}
                >
                  {item.label}
                  <svg className="w-3.5 h-3.5 mt-0.5 text-[#191919]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-6 py-2 text-[14px] font-bold text-[#0d3b59] border border-[#0d3b59]/30 rounded-lg hover:bg-gray-50 transition-colors">
              Sign up
            </button>
            <button className="px-8 py-2 text-[14px] font-bold text-white bg-[#0d3b59] rounded-lg hover:bg-[#14304f] transition-all shadow-sm">
              Login
            </button>
          </div>

          {/* Mobile toggle & Search */}
          <div className="flex md:hidden items-center gap-2.5">
            <button className="p-2 border border-[#0d3b59] rounded-lg text-[#0d3b59] hover:bg-gray-50 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button
              className="p-2 border border-[#0d3b59] rounded-lg text-[#0d3b59] hover:bg-gray-50 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Sidebar Drawer */}
        <div 
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div 
          className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span className="text-lg font-bold text-[#0d3b59]">Menu</span>
            <button 
              onClick={() => setMobileOpen(false)}
              className="p-2 text-gray-500 hover:text-[#0d3b59]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-2">
            <div className="px-3 space-y-0.5">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href="#"
                    onClick={() => setMobileOpen(false)}
                    className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl transition-all ${
                      item.label === "Courses" ? "bg-gray-50 text-[#0d3b59]" : "text-[#191919]"
                    }`}
                  >
                    <span className="text-[15px] font-semibold">{item.label}</span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-100 bg-gray-50/50 space-y-3">
            <button className="w-full py-2.5 text-[14px] font-bold text-[#0d3b59] border border-[#0d3b59]/30 rounded-xl bg-white">Sign up</button>
            <button className="w-full py-2.5 text-[14px] font-bold text-white bg-[#0d3b59] rounded-xl shadow-md">Login</button>
          </div>
        </div>
      </div>
    </header>
  );
}
