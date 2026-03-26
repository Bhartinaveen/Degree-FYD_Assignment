import React from 'react';
import Link from 'next/link';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="w-full bg-[#f8fafc] pt-12 pb-8 border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-10">
          {/* Logo & Tagline */}
          <div className="lg:col-span-8 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex items-center h-12">
                <img src="/logo.png" alt="Logo" className="h-10 w-auto object-contain transition-transform group-hover:scale-105" />
                <div className="flex items-baseline ml-1">
                  <span className="text-[24px] font-normal tracking-tight text-[#0d3b59]">Degree</span>
                  <span className="text-[24px] font-bold tracking-tight text-[#0d3b59]">FYD</span>
                </div>
              </div>
            </Link>
            <p className="text-[15px] text-black leading-relaxed max-w-lg">
              <span className="text-[#ed923d]">Empowering students</span> to find their perfect path. Discover, compare, and apply for the top universities and courses across India with our comprehensive admission platform.
            </p>
            <SocialLinks />
          </div>

          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-[14px] font-bold text-[#0d3b59] uppercase tracking-[0.1em]">Company</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
              {[
                { label: "About us", href: "/about" },
                { label: "Contact Us", href: "/contact-us" },
                { label: "Terms & Conditions", href: "/terms-and-conditions" },
                { label: "Privacy Policy", href: "/privacy-policy" }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[15px] text-black hover:text-[#ed923d] transition-colors inline-block group">
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-[#ed923d] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[14px] text-slate-400 font-medium">
            © {new Date().getFullYear()} <span className="text-[#0d3b59]">DegreeFYD</span>. Making education accessible.
          </p>
          <div className="flex items-center gap-8">
            {['Support', 'Help Center'].map((link) => (
              <Link 
                key={link} 
                href="#" 
                className="text-[14px] font-medium text-slate-400 hover:text-[#0d3b59] transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
