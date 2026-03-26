"use client";

import { useState } from "react";

// Standard College Data Models
const IGNOU_DATA = {
  id: "ignou",
  name: "Indira Gandhi National Open University",
  location: "New Delhi, Delhi",
  logo: "/indra.png"
};

const LPU_ONLINE_DATA = {
  id: "lpu",
  name: "Lovely Professional University Online",
  location: "Punjab",
  logo: "/lpu.png"
};

/**
 * Popular comparisons are currently standardized to show the IGNOU vs LPU Online 
 * pair across all cards based on current business requirements.
 */
const comparisons = Array.from({ length: 4 }, (_, i) => ({
  id: (i + 1).toString(),
  college1: IGNOU_DATA,
  college2: LPU_ONLINE_DATA
}));

export default function PopularComparisons() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [dragStart, setDragStart] = useState(null);
  const [dragEnd, setDragEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  // Swipe/Drag logic
  const minDistance = 50;

  const handleStart = (clientX) => {
    setDragEnd(null);
    setDragStart(clientX);
    setIsDragging(true);
  };

  const handleMove = (clientX) => {
    if (isDragging) setDragEnd(clientX);
  };

  const handleEnd = () => {
    setIsDragging(false);
    if (!dragStart || !dragEnd) return;
    const distance = dragStart - dragEnd;
    const isLeftSwipe = distance > minDistance;
    const isRightSwipe = distance < -minDistance;

    if (isLeftSwipe && currentIndex < comparisons.length - 1) {
      handleNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      handlePrev();
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < comparisons.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="w-full mt-0 bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm select-none">
      <h3 className="text-[#191919] font-bold text-[22px] mb-6 tracking-tight">
        Popular Comparisons-
      </h3>

      <div className="relative group">
        <div 
          className={`overflow-hidden touch-pan-y ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          onTouchStart={(e) => handleStart(e.targetTouches[0].clientX)}
          onTouchMove={(e) => handleMove(e.targetTouches[0].clientX)}
          onTouchEnd={handleEnd}
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseMove={(e) => handleMove(e.clientX)}
          onMouseUp={handleEnd}
          onMouseLeave={() => isDragging && handleEnd()}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out pointer-events-none"
            style={{ transform: `translateX(-${currentIndex * (typeof window !== 'undefined' && window.innerWidth < 768 ? 100 : 50)}%)` }}
          >
            {comparisons.map((pair) => (
              <div key={pair.id} className="w-full md:w-1/2 flex-shrink-0 md:px-3">
                <div className="bg-white border border-gray-200 rounded-2xl p-4 md:p-6 hover:shadow-md transition-shadow relative">

                <div className="flex items-center justify-between mb-6 relative pointer-events-auto">
                  {/* College 1 Box */}
                  <div className="w-[45%] flex flex-col items-center">
                    <div className="w-full aspect-[1.8/1] border border-gray-100 rounded-xl p-3 flex items-center justify-center mb-3 bg-[#fcfdfe]">
                      <img src={pair.college1.logo} alt={pair.college1.name} className="max-w-[85%] max-h-[80%] object-contain" />
                    </div>
                    <h4 className="text-[#191919] text-[13px] md:text-[14px] font-bold leading-tight mb-1 text-center line-clamp-2 h-8">{pair.college1.name}</h4>
                    <div className="flex items-center gap-1 text-gray-400 font-medium">
                      <svg className="w-[12px] h-[12px]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-[11px] md:text-[12px]">{pair.college1.location}</span>
                    </div>
                  </div>

                  {/* VS Badge */}
                  <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#f39c12] border-2 border-white flex items-center justify-center shadow-sm">
                      <span className="text-white font-bold text-[11px] md:text-[12px]">Vs</span>
                    </div>
                  </div>

                  {/* College 2 Box */}
                  <div className="w-[45%] flex flex-col items-center">
                    <div className="w-full aspect-[1.8/1] border border-gray-100 rounded-xl p-3 flex items-center justify-center mb-3 bg-[#fcfdfe]">
                      <img src={pair.college2.logo} alt={pair.college2.name} className="max-w-[85%] max-h-[80%] object-contain" />
                    </div>
                    <h4 className="text-[#191919] text-[13px] md:text-[14px] font-bold leading-tight mb-1 text-center line-clamp-2 h-8">{pair.college2.name}</h4>
                    <div className="flex items-center gap-1 text-gray-400 font-medium">
                      <svg className="w-[12px] h-[12px]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-[11px] md:text-[12px]">{pair.college2.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-4 pointer-events-auto">
                  <button className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#0d3b59] text-white font-bold rounded-lg hover:bg-[#0a2f47] transition-all group w-[180px] shadow-sm">
                    <span className="text-[14px]">Compare</span>
                    <svg className="w-[16px] h-[16px] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

              </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`absolute -left-6 md:-left-10 top-[37%] -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] hidden md:flex items-center justify-center text-[#0d3b59] transition-all z-30 ${currentIndex === 0 ? 'opacity-0 pointer-events-none' : 'hover:scale-110 active:scale-95'}`}
          aria-label="Previous comparisons"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex >= comparisons.length - (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2)}
          className={`absolute -right-6 md:-right-10 top-[37%] -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] hidden md:flex items-center justify-center text-[#0d3b59] transition-all z-30 ${currentIndex >= comparisons.length - (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2) ? 'opacity-0 pointer-events-none' : 'hover:scale-110 active:scale-95'}`}
          aria-label="Next comparisons"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center gap-2.5 mt-8">
        {comparisons.slice(0, typeof window !== 'undefined' && window.innerWidth < 768 ? comparisons.length : comparisons.length - 1).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? "bg-[#0d3b59] scale-125" : "bg-slate-200 hover:bg-slate-300"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
