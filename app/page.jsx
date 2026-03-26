"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import PopularComparisons from "./components/PopularComparisons";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import CollegeSelectModal from "./components/CollegeSelectModal";
import ComparisonDetails from "./components/ComparisonDetails";
import { collegeOptions, popularColleges } from "./data/colleges";

/**
 * Main Home Component
 * Features:
 * - Interactive college comparison logic
 * - Side-by-side comparison cards
 * - Expert connect banner
 * - Popular comparisons carousel
 */
export default function Home() {
  const [leftCollege, setLeftCollege] = useState(collegeOptions[0]);
  const [rightCollege, setRightCollege] = useState(collegeOptions[1]);
  const [showLeftModal, setShowLeftModal] = useState(false);
  const [showRightModal, setShowRightModal] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const comparisonRef = useRef(null);

  const handleCompareClick = () => {
    if (!showComparison) {
      setShowComparison(true);
      setTimeout(() => {
        comparisonRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      setShowComparison(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#191919] flex flex-col">
      <Navbar />

      {/* Header Section */}
      <section className="bg-white pt-5 pb-3">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <nav className="flex items-center gap-2 mb-6 text-[13px] font-medium tracking-tight">
            <Link href="/" className="text-[#191919] hover:text-[#f39c12] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#0d3b59]">Compare Colleges</span>
          </nav>
          
          <div className="mb-0">
            <h1 className="text-[32px] md:text-[38px] font-bold leading-tight mb-2 tracking-tight">
              <span className="text-[#f39c12]">Compare</span> <span className="text-[#191919]">Top Colleges in India</span>
            </h1>
            <p className="text-[#191919] text-[14px] leading-relaxed max-w-[95%]">
              Select any two colleges from the &quot;Add College&quot; section below to begin your comparison.
              Once selected, you can evaluate them side by side based on important factors such as
              fees, key highlights, courses offered, rankings, approvals, placements, and more.
            </p>
          </div>
        </div>
      </section>

      {/* 
        Main Comparison & Content Section
        Includes the primary comparison cards, expert contact, and popular pairings
      */}
      <section className="flex-1 bg-[#e7ebee] border-t border-gray-100 py-3">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            <div className="flex-1 w-full">
              <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 flex flex-col items-center shadow-sm w-full mb-4">
                <div className="w-full flex flex-row items-stretch justify-center gap-2 md:gap-10 lg:gap-18 relative">

                  {/* Left College Box */}
                  <div className="w-[48%] md:w-[370px] bg-white border border-gray-200 py-3 md:py-5 px-2 md:px-4 flex-shrink-0">
                    <div className="w-full max-w-[260px] mx-auto flex flex-col items-start h-full">
                      <div className="w-full h-[105px] border border-gray-200 rounded-md overflow-hidden flex items-center justify-center bg-white p-3 mb-5 relative">
                        {leftCollege.logo ? (
                          <img src={leftCollege.logo} alt={leftCollege.name} className="max-w-[90%] max-h-[90%] object-contain" />
                        ) : (
                          <div className="text-gray-300 flex flex-col items-center">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xs mt-1">Add Image</span>
                          </div>
                        )}
                      </div>
                      <div className="text-left w-full mb-6">
                        <h3 className="text-[#191919] font-bold text-[16px] leading-tight mb-2 pr-4">{leftCollege.name || "Add College"}</h3>
                        <div className="flex items-center gap-1 text-gray-500 font-medium">
                          <svg className="w-[12px] h-[12px] md:w-[15px] md:h-[15px]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-[11px] md:text-[13px] truncate">{leftCollege.location || "Location"}</span>
                        </div>
                      </div>
                      <div className="mt-auto w-full pt-2 md:pt-4">
                        <button onClick={() => setShowLeftModal(true)} className="flex items-center gap-1 md:gap-2 py-1.5 md:py-2 border border-[#0d3b59] rounded-md text-[#0d3b59] text-[12px] md:text-[14px] font-medium hover:bg-gray-50 transition-all w-full justify-center">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-11 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-[#f39c12] flex items-center justify-center shadow-md shadow-orange-200/50 relative">
                      <span className="text-white font-medium text-[12px] md:text-[16px]">Vs</span>
                    </div>
                  </div>

                  {/* Right College Box */}
                  <div className="w-[48%] md:w-[370px] bg-white border border-gray-200 py-3 md:py-5 px-2 md:px-4 flex-shrink-0">
                    <div className="w-full max-w-[260px] mx-auto flex flex-col items-start h-full">
                      <div className="w-full h-[105px] border border-gray-200 rounded-md overflow-hidden flex items-center justify-center bg-white p-3 mb-5 relative">
                        {rightCollege.logo ? (
                          <img src={rightCollege.logo} alt={rightCollege.name} className="max-w-[90%] max-h-[90%] object-contain" />
                        ) : (
                          <div className="text-gray-300 flex flex-col items-center">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-xs mt-1">Add Image</span>
                          </div>
                        )}
                      </div>
                      <div className="text-left w-full mb-6">
                        <h3 className="text-[#191919] font-bold text-[16px] leading-tight mb-2 pr-4">{rightCollege.name || "Add College"}</h3>
                        <div className="flex items-center gap-1 text-gray-500 font-medium">
                          <svg className="w-[12px] h-[12px] md:w-[15px] md:h-[15px]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-[11px] md:text-[13px] truncate">{rightCollege.location || "Location"}</span>
                        </div>
                      </div>
                      <div className="mt-auto w-full pt-2 md:pt-4">
                        <button onClick={() => setShowRightModal(true)} className="flex items-center gap-1 md:gap-2 py-1.5 md:py-2 border border-[#0d3b59] rounded-md text-[#0d3b59] text-[12px] md:text-[14px] font-medium hover:bg-gray-50 transition-all w-full justify-center">
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 mb-6">
                  <button onClick={handleCompareClick} className="flex items-center gap-2 px-8 py-2 bg-[#0d3b59] text-white font-medium rounded-md hover:bg-[#14304f] transition-all group">
                    <span className="text-[15px]">Compare</span>
                    <svg className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                {showComparison && (
                  <div ref={comparisonRef} className="w-full scroll-mt-6">
                    <ComparisonDetails leftCollege={leftCollege} rightCollege={rightCollege} />
                  </div>
                )}
              </div>

              {/* Expert Help Banner */}
              <div className="w-auto -mx-4 sm:-mx-6 md:mx-0 bg-[#0d3b59] rounded-none md:rounded-xl px-8 md:px-12 py-8 md:py-10 flex flex-row items-center md:items-start justify-between gap-2 relative overflow-hidden shadow-inner mt-4 mb-4">
                <div className="z-10 text-left pt-2 md:pt-4">
                  <h2 className="text-white text-[16px] md:text-[28px] font-bold mb-4 md:mb-10 leading-tight tracking-tight max-w-[220px] md:max-w-[550px]">
                    Not Sure about colleges.? <br className="hidden md:block" />Let&apos;s Connect with our Experts.
                  </h2>
                  <button className="px-4 md:px-10 py-2 md:py-3.5 bg-white text-[#0d3b59] font-bold rounded-lg md:rounded-xl hover:bg-gray-50 transition-all shadow-xl text-[12px] md:text-[18px]">
                    Connect Now
                  </button>
                </div>
                <div className="relative md:absolute md:right-8 md:bottom-0 flex-shrink-0">
                  <img src="/mascot.png" alt="Expert Mascot" className="w-[140px] md:w-[320px] object-contain drop-shadow-2xl translate-y-2 md:translate-y-6" />
                </div>
              </div>

              {/* Popular Comparisons Section */}
              <PopularComparisons />

              {/* FAQ & Support */}
              <FAQSection />
            </div>

            {/* Sidebar - Popular Colleges List */}
            <aside className="w-full lg:w-[320px] flex-shrink-0">
              <h3 className="text-[#191919] font-bold text-[20px] mb-5 tracking-tight">
                Explore Some Popular colleges-
              </h3>
              <div className="space-y-4">
                {popularColleges.map((college) => {
                  const CardContent = (
                    <>
                      <div className="w-full aspect-[2/1] rounded-md overflow-hidden mb-3.5">
                        <img src={college.logo} alt={college.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
                      </div>
                      <div className="px-0.5">
                        <h4 className="text-[#0070c0] text-[16px] font-normal leading-tight mb-2 underline decoration-1 underline-offset-[3px] group-hover:text-blue-700">
                          {college.name}
                        </h4>
                        <div className="flex items-center gap-1.5 text-[#555555] pb-0.5">
                          <svg className="w-[15px] h-[15px] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-[14px]">{college.location}</span>
                        </div>
                      </div>
                    </>
                  );

                  return college.link ? (
                    <a 
                      key={college.id} 
                      href={college.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white border border-gray-200 rounded-lg p-3.5 shadow-sm block group cursor-pointer hover:shadow-md transition-shadow"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    <div key={college.id} className="bg-white border border-gray-200 rounded-lg p-3.5 shadow-sm block group cursor-pointer hover:shadow-md transition-shadow">
                      {CardContent}
                    </div>
                  );
                })}
              </div>
            </aside>

          </div>
        </div>
      </section>

      <Footer />

      {/* Modals */}
      {showLeftModal && (
        <CollegeSelectModal
          title="Select College"
          options={collegeOptions}
          excludeId={rightCollege.id}
          onSelect={(c) => { setLeftCollege(c); setShowLeftModal(false); setShowComparison(false); }}
          onClose={() => setShowLeftModal(false)}
        />
      )}
      {showRightModal && (
        <CollegeSelectModal
          title="Select College"
          options={collegeOptions}
          excludeId={leftCollege.id}
          onSelect={(c) => { setRightCollege(c); setShowRightModal(false); setShowComparison(false); }}
          onClose={() => setShowRightModal(false)}
        />
      )}
    </div>
  );
}
