import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";

export default function PageLayout({ title, children, breadcrumbs = [], centered = false }) {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-[#191919] flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-white pt-8 pb-6 border-b border-gray-100">
          <div className={`max-w-[1440px] mx-auto px-4 sm:px-6 lg:pl-6 lg:pr-14 xl:pl-4 xl:pr-16 ${centered ? "text-center flex flex-col items-center" : ""}`}>
            <h1 className="text-[32px] md:text-[42px] font-bold leading-tight mb-3 tracking-tight text-[#191919] w-full">
              {title.split(' ').slice(0, -1).join(' ')} <span className="text-[#ed923d]">{title.split(' ').slice(-1)}</span>
            </h1>
            <div className={`h-1 w-20 bg-[#ed923d] rounded-full mb-2 ${centered ? "mx-auto" : ""}`}></div>
          </div>
        </section>

        {/* Content Section */}
        <section className="bg-[#e7ebee] py-12 min-h-[400px]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:pl-6 lg:pr-14 xl:pl-4 xl:pr-16">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-200">
              <div className="prose prose-slate max-w-none text-[#191919]">
                {children}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
