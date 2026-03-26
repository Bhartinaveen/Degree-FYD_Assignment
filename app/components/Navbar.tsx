"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  {
    label: "Universities",
    hasDropdown: true,
    categories: [
      {
        title: "Top Universities",
        items: [
          { name: "Top Private Universities", href: "#" },
          { name: "Top Government Universities", href: "#" },
          { name: "NIRF Ranked Universities", href: "#" },
          { name: "NAAC A++ Universities", href: "#" },
        ]
      },
      {
        title: "By Location",
        items: [
          { name: "Universities in Delhi NCR", href: "#" },
          { name: "Universities in Bangalore", href: "#" },
          { name: "Universities in Mumbai", href: "#" },
          { name: "Universities in Hyderabad", href: "#" },
        ]
      },
      {
        title: "Specialized",
        items: [
          { name: "Medical Universities", href: "#" },
          { name: "Engineering Universities", href: "#" },
          { name: "Management Universities", href: "#" },
          { name: "Law Universities", href: "#" },
        ]
      }
    ]
  },
  {
    label: "Courses",
    hasDropdown: true,
    active: true,
    categories: [
      {
        title: "Management",
        items: [
          { name: "MBA (General)", href: "#" },
          { name: "Executive MBA", href: "#" },
          { name: "BBA / BMS", href: "#" },
          { name: "PGDM", href: "#" },
        ]
      },
      {
        title: "Engineering & IT",
        items: [
          { name: "B.Tech / B.E.", href: "#" },
          { name: "M.Tech / M.E.", href: "#" },
          { name: "BCA / MCA", href: "#" },
          { name: "Data Science & AI", href: "#" },
        ]
      },
      {
        title: "Other Streams",
        items: [
          { name: "Medical / MBBS", href: "#" },
          { name: "Commerce / B.Com", href: "#" },
          { name: "Arts / B.A.", href: "#" },
          { name: "Law / LLB", href: "#" },
        ]
      }
    ]
  },
  {
    label: "Exams",
    hasDropdown: true,
    categories: [
      {
        title: "Management Exams",
        items: [
          { name: "CAT", href: "#" },
          { name: "MAT", href: "#" },
          { name: "XAT", href: "#" },
          { name: "SNAP", href: "#" },
        ]
      },
      {
        title: "Engineering Exams",
        items: [
          { name: "JEE Main", href: "#" },
          { name: "GATE", href: "#" },
          { name: "JEE Advanced", href: "#" },
          { name: "BITSAT", href: "#" },
        ]
      },
      {
        title: "Medical & Other",
        items: [
          { name: "NEET UG", href: "#" },
          { name: "NEET PG", href: "#" },
          { name: "CLAT", href: "#" },
          { name: "CUET", href: "#" },
        ]
      }
    ]
  },
  {
    label: "About us",
    hasDropdown: false,
    href: "/about"
  },
  {
    label: "More",
    hasDropdown: true,
    categories: [
      {
        title: "Resources",
        items: [
          { name: "Expert Consultation", href: "/expert-consultation" },
          { name: "Comparison Tool", href: "/" },
          { name: "Latest News", href: "#" },
          { name: "Admission Guide", href: "#" },
        ]
      },
      {
        title: "Company",
        items: [
          { name: "Privacy Policy", href: "/privacy-policy" },
          { name: "Terms & Conditions", href: "/terms-and-conditions" },
          { name: "Contact Us", href: "/contact-us" },
        ]
      }
    ]
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto pl-2 pr-4 sm:px-6 lg:pl-4 lg:pr-16 xl:pl-2 xl:pr-18">
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
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href || "#"}
                  className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors h-full ${item.active
                      ? "text-[#0d3b59] font-semibold"
                      : "text-[#191919] hover:text-[#0d3b59]"
                    }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg className={`w-3.5 h-3.5 mt-0.5 transition-transform duration-200 ${activeDropdown === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Mega Menu Dropdown */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-[1000px] bg-white border border-gray-100 shadow-2xl rounded-b-2xl py-10 px-12 grid grid-cols-3 gap-12 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    {item.categories?.map((cat) => (
                      <div key={cat.title} className="space-y-5">
                        <h4 className="text-[14px] font-bold text-[#0d3b59] uppercase tracking-wider border-b border-gray-50 pb-3">
                          {cat.title}
                        </h4>
                        <ul className="space-y-3.5">
                          {cat.items.map((subItem) => (
                            <li key={subItem.name}>
                              <Link
                                href={subItem.href}
                                className="text-[15px] text-[#191919] hover:text-[#ed923d] transition-colors block font-medium"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/signup"
              className="px-6 py-2 text-[14px] font-bold text-[#0d3b59] border border-[#0d3b59]/30 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Sign up
            </Link>
            <Link
              href="/login"
              className="px-8 py-2 text-[14px] font-bold text-white bg-[#0d3b59] rounded-lg hover:bg-[#14304f] transition-all shadow-sm"
            >
              Login
            </Link>
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
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] transition-opacity duration-300 md:hidden ${mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${mobileOpen ? "translate-x-0" : "translate-x-full"
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
                  {item.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setMobileDropdown(mobileDropdown === item.label ? null : item.label)}
                        className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl transition-all ${item.active || mobileDropdown === item.label ? "bg-gray-50 text-[#0d3b59]" : "text-[#191919]"
                          }`}
                      >
                        <span className="text-[15px] font-semibold">{item.label}</span>
                        <svg className={`w-4 h-4 text-gray-400 transition-transform ${mobileDropdown === item.label ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {mobileDropdown === item.label && (
                        <div className="mt-1 ml-4 space-y-4 py-2 border-l-2 border-gray-100 pl-4 animate-in slide-in-from-top-1 duration-200">
                          {item.categories?.map((cat) => (
                            <div key={cat.title}>
                              <h4 className="text-[13px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                                {cat.title}
                              </h4>
                              <ul className="space-y-2">
                                {cat.items.map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      href={subItem.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="text-[14px] text-[#191919] hover:text-[#0d3b59] block py-1"
                                    >
                                      {subItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      onClick={() => setMobileOpen(false)}
                      className={`w-full flex items-center justify-between py-2.5 px-3 rounded-xl transition-all ${item.active ? "bg-gray-50 text-[#0d3b59]" : "text-[#191919]"
                        }`}
                    >
                      <span className="text-[15px] font-semibold">{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-gray-100 bg-gray-50/50 space-y-3">
            <Link
              href="/signup"
              onClick={() => setMobileOpen(false)}
              className="w-full block text-center py-2.5 text-[14px] font-bold text-[#0d3b59] border border-[#0d3b59]/30 rounded-xl bg-white"
            >
              Sign up
            </Link>
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="w-full block text-center py-2.5 text-[14px] font-bold text-white bg-[#0d3b59] rounded-xl shadow-md"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
