"use client";

import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What programs does IGNOU offer?",
    answer: "IGNOU offers a wide range of programs including undergraduate, postgraduate, diploma, and certificate courses across multiple disciplines such as arts, science, management, IT, and healthcare."
  },
  {
    id: 2,
    question: "Can working professionals pursue IGNOU programs?",
    answer: "Yes, IGNOU's flexible learning model is specifically designed for working professionals, providing distance education with weekend counseling sessions and online resources."
  },
  {
    id: 3,
    question: "Is an Online MBA in Marketing enough to become a marketing manager?",
    answer: "While an Online MBA provides the core theoretical knowledge and credentials, becoming a marketing manager typically also requires relevant work experience, a strong portfolio, and networking."
  },
  {
    id: 4,
    question: "Is an Online MBA in Marketing enough to become a marketing manager?",
    answer: "An Online MBA covers strategic marketing, consumer behavior, and digital trends, which are essential for management roles in the marketing sector."
  },
  {
    id: 5,
    question: "Is an Online MBA in Marketing enough to become a marketing manager?",
    answer: "Yes, most employers recognize accredited Online MBAs the same as traditional ones, especially when combined with practical skills and industry certifications."
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show only 3 FAQs initially, 5 when expanded
  const displayedFaqs = isExpanded ? faqData : faqData.slice(0, 3);

  return (
    <div className="w-full mt-6 bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
      <h3 className="text-[#191919] font-bold text-[22px] mb-6 tracking-tight">
        Frequently Asked Questions-
      </h3>

      <div className="space-y-3">
        {displayedFaqs.map((faq) => (
          <div 
            key={faq.id} 
            className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors group"
            >
              <span className="text-[15px] font-semibold text-[#191919] flex gap-3">
                <span className="text-gray-400">{faq.id}.</span>
                {faq.question}
              </span>
              <svg 
                className={`w-5 h-5 text-[#0d3b59] transition-transform duration-300 ${openId === faq.id ? "rotate-180" : ""}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out ${
                openId === faq.id ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="p-4 pt-0 text-[14px] text-gray-600 leading-relaxed pl-[44px]">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center">
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 px-6 py-2.5 border border-[#0d3b59] text-[#0d3b59] font-semibold rounded-lg hover:bg-gray-50 transition-all text-[15px]"
        >
          {isExpanded ? "View less" : "View more"}
          <svg 
            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
