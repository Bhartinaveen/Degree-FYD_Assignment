"use client";

import { useState } from "react";
import { filterColleges, getSelectedCollege, handleCollegeSelectionClick } from "../utils/collegeModalLogic";

export default function CollegeSelectModal({
  title,
  options,
  excludeId,
  onSelect,
  onClose,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [attemptedId, setAttemptedId] = useState(null);

  const filteredOptions = filterColleges(options, searchTerm);

  const handleAddSelection = () => {
    if (selectedId && selectedId !== excludeId) {
      const selectedCollege = getSelectedCollege(options, selectedId);
      if (selectedCollege) {
        onSelect(selectedCollege);
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-[24px] shadow-2xl w-full max-w-[550px] overflow-hidden animate-in fade-in zoom-in duration-200">

        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-gray-100">
          <h2 className="text-[#191919] font-medium text-[20px] tracking-tight">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-1 border border-gray-200 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-all flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-7">
          {/* Search Input */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search college..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-gray-300 focus:ring-0 outline-none text-[15px] placeholder-gray-400"
            />
          </div>

          {/* College List */}
          <div className="space-y-4 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((college) => {
                const isSelected = selectedId === college.id;
                const isAlreadyChosen = excludeId === college.id;
                const showWarning = isAlreadyChosen && attemptedId === college.id;

                return (
                  <div
                    key={college.id}
                    onClick={() => handleCollegeSelectionClick({
                      collegeId: college.id,
                      isAlreadyChosen,
                      setAttemptedId,
                      setSelectedId
                    })}
                    className={`flex items-center gap-5 p-3.5 rounded-xl border transition-all cursor-pointer ${
                      showWarning
                        ? "border-orange-300 bg-orange-50/70"
                        : isSelected
                        ? "border-[#0d3b59] border-2 bg-white"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <div className="w-[100px] h-[50px] flex-shrink-0 flex items-center justify-center p-1">
                      <img
                        src={college.logo}
                        alt={college.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="text-[#303030] font-semibold text-[16px] leading-tight line-clamp-2">
                          {college.name}
                        </h3>
                        {showWarning && (
                          <span className="flex-shrink-0 text-[11px] font-semibold text-orange-600 bg-orange-100 border border-orange-200 px-2 py-0.5 rounded-full">
                            Already chosen
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-500">
                        <svg className="w-[15px] h-[15px] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-[14px] truncate">{college.location}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-6 text-gray-500 text-[15px]">
                No colleges found.
              </div>
            )}
          </div>

          {/* Add Selection Button */}
          <div className="mt-6">
            <button
              onClick={handleAddSelection}
              disabled={!selectedId || selectedId === excludeId}
              className={`w-full py-3.5 rounded-xl text-white font-medium text-[15.5px] transition-all ${
                selectedId && selectedId !== excludeId
                  ? "bg-[#0d3b59] hover:bg-[#0a2f47]"
                  : "bg-[#0d3b59]/70 cursor-not-allowed"
              }`}
            >
              Add Selection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
