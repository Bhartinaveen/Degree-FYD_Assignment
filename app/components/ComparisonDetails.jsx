import React from "react";

const InfoItem = ({ label, value }) => (
  <div className="flex flex-col items-start px-2 md:px-0 py-2">
    <span className="font-bold text-[#191919] text-[15px] md:text-[18px] leading-tight mb-1 whitespace-pre-wrap">{value || "N/A"}</span>
    <span className="text-gray-500 text-[12px] md:text-[14px]">{label}</span>
  </div>
);

export default function ComparisonDetails({ leftCollege, rightCollege }) {
  if (!leftCollege || !rightCollege) return null;

  return (
    <div className="w-full mt-6 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden animate-in slide-in-from-top-4 fade-in duration-300">
      
      {/* Institute Information Section */}
      <div className="border border-gray-100 rounded-lg m-2 overflow-hidden shadow-sm">
        <div className="bg-[#eef1f5] py-3 text-center border-b border-gray-200">
          <h3 className="text-[#191919] text-[20px] font-bold tracking-tight">Institute Information</h3>
        </div>
        <div className="flex flex-row divide-x divide-gray-200 bg-white">
          {/* Left Info */}
          <div className="flex-1 p-4 md:p-6 space-y-4">
            <InfoItem label="College Type" value={leftCollege.instituteInfo?.type} />
            <InfoItem label="Established Year" value={leftCollege.instituteInfo?.established} />
            <InfoItem label="Total Students" value={leftCollege.instituteInfo?.students} />
            <InfoItem label="Courses Offered" value={leftCollege.instituteInfo?.courses} />
            <InfoItem label="Location Type" value={leftCollege.instituteInfo?.locationType} />
            <InfoItem label="Affiliated University" value={leftCollege.instituteInfo?.affiliated} />
          </div>
          {/* Right Info */}
          <div className="flex-1 p-4 md:p-6 space-y-4">
            <InfoItem label="College Type" value={rightCollege.instituteInfo?.type} />
            <InfoItem label="Established Year" value={rightCollege.instituteInfo?.established} />
            <InfoItem label="Total Students" value={rightCollege.instituteInfo?.students} />
            <InfoItem label="Courses Offered" value={rightCollege.instituteInfo?.courses} />
            <InfoItem label="Location Type" value={rightCollege.instituteInfo?.locationType} />
            <InfoItem label="Affiliated University" value={rightCollege.instituteInfo?.affiliated} />
          </div>
        </div>
      </div>

      {/* Placements Section */}
      <div className="border border-gray-100 rounded-lg m-2 mt-4 overflow-hidden shadow-sm">
        <div className="bg-[#eef1f5] py-3 text-center border-b border-gray-200">
          <h3 className="text-[#191919] text-[20px] font-bold tracking-tight">Placements</h3>
        </div>
        <div className="flex flex-row divide-x divide-gray-200 bg-white">
          <div className="flex-1 p-4 md:p-6 space-y-4">
            <InfoItem label="Average Package" value={leftCollege.placements?.average} />
            <InfoItem label="Highest Package" value={leftCollege.placements?.highest} />
          </div>
          <div className="flex-1 p-4 md:p-6 space-y-4">
            <InfoItem label="Average Package" value={rightCollege.placements?.average} />
            <InfoItem label="Highest Package" value={rightCollege.placements?.highest} />
          </div>
        </div>
      </div>

      {/* Top Recruiters Section */}
      <div className="border border-gray-100 rounded-lg m-2 mt-4 overflow-hidden shadow-sm">
        <div className="bg-[#eef1f5] py-3 text-center border-b border-gray-200">
          <h3 className="text-[#191919] text-[20px] font-bold tracking-tight">Top Recruiters</h3>
        </div>
        <div className="flex flex-row divide-x divide-gray-200 bg-white p-4">
          <div className="flex-1 grid grid-cols-2 gap-2 md:flex md:flex-wrap md:justify-start">
            {leftCollege.topRecruiters?.slice(0, 8).map((logo, idx) => (
              <div key={idx} className="aspect-[2/1.1] border border-gray-100 rounded-lg flex items-center justify-center p-1.5 md:p-2 bg-white hover:shadow-sm transition-all md:w-[85px] md:h-[45px]">
                <img src={logo} alt="Recruiter" className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
          <div className="flex-1 grid grid-cols-2 gap-2 md:flex md:flex-wrap md:justify-start pl-4">
            {rightCollege.topRecruiters?.slice(0, 8).map((logo, idx) => (
              <div key={idx} className="aspect-[2/1.1] border border-gray-100 rounded-lg flex items-center justify-center p-1.5 md:p-2 bg-white hover:shadow-sm transition-all md:w-[85px] md:h-[45px]">
                <img src={logo} alt="Recruiter" className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rankings & Accreditations Section */}
      <div className="border border-gray-100 rounded-lg m-2 mt-4 overflow-hidden shadow-sm">
        <div className="bg-[#eef1f5] py-3 text-center border-b border-gray-200">
          <h3 className="text-[#191919] text-[20px] font-bold tracking-tight">Rankings & Accreditations</h3>
        </div>
        <div className="flex flex-row divide-x divide-gray-200 bg-white">
          <div className="flex-1 p-4 md:p-6 space-y-4">
            <InfoItem label="NIRF Rank" value={leftCollege.ranking?.nirf} />
            <InfoItem label="Accreditation" value={leftCollege.accreditations} />
          </div>
          <div className="flex-1 p-4 md:p-6 space-y-4">
            <InfoItem label="NIRF Rank" value={rightCollege.ranking?.nirf} />
            <InfoItem label="Accreditation" value={rightCollege.accreditations} />
          </div>
        </div>
      </div>

      {/* Fee Range Section */}
      <div className="border border-gray-100 rounded-lg m-2 mt-4 overflow-hidden shadow-sm">
        <div className="bg-[#eef1f5] py-3 text-center border-b border-gray-200">
          <h3 className="text-[#191919] text-[20px] font-bold tracking-tight">Fee Range</h3>
        </div>
        <div className="flex flex-row divide-x divide-gray-200 bg-white">
          <div className="flex-1 p-4 md:p-6">
            <span className="font-bold text-[#191919] text-[14px] md:text-[18px]">{leftCollege.feeRange || "N/A"}</span>
            <div className="flex flex-col text-gray-500 text-[12px] md:text-[14px] mt-1">
              <span>(Approx.)</span>
              <span>Total Fee Range</span>
            </div>
          </div>
          <div className="flex-1 p-4 md:p-6">
            <span className="font-bold text-[#191919] text-[14px] md:text-[18px]">{rightCollege.feeRange || "N/A"}</span>
            <div className="flex flex-col text-gray-500 text-[12px] md:text-[14px] mt-1">
              <span>(Approx.)</span>
              <span>Total Fee Range</span>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 p-2 bg-white border-t border-gray-100">
          <button className="flex-1 py-2.5 bg-[#0d3b59] text-white text-[14px] md:text-[16px] font-bold rounded-lg hover:bg-[#0a2f47] transition-colors">
            Shortlist
          </button>
          <button className="flex-1 py-2.5 bg-[#f39c12] text-white text-[14px] md:text-[16px] font-bold rounded-lg hover:bg-[#d68910] transition-colors">
            Shortlist
          </button>
        </div>
      </div>

    </div>
  );
}
