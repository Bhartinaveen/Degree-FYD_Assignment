import PageLayout from "../components/PageLayout";

export default function ContactPage() {
  const breadcrumbs = [{ label: "Contact Us" }];

  return (
    <PageLayout title="Contact Us" breadcrumbs={breadcrumbs} centered={true}>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#0d3b59]">Get in Touch</h2>
          <p className="text-gray-600 leading-relaxed">
            Have questions about a college or need help with the comparison tool? 
            Our support team is here to assist you.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ed923d]/10 flex items-center justify-center text-[#ed923d]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#191919]">Email Us</h4>
                <p className="text-gray-500">support@degreefyd.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ed923d]/10 flex items-center justify-center text-[#ed923d]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#191919]">Call Us</h4>
                <p className="text-gray-500">+91 1800-COLLEGE</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#ed923d]/10 flex items-center justify-center text-[#ed923d]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-[#191919]">Visit Us</h4>
                <p className="text-gray-500">Education Hub, Sector 62, Noida, UP - 201301</p>
              </div>
            </div>
          </div>
        </div>

        <form className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Full Name</label>
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0d3b59] outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Email Address</label>
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0d3b59] outline-none transition-all" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Subject</label>
            <input type="text" placeholder="What's this about?" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0d3b59] outline-none transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700">Message</label>
            <textarea placeholder="Your Message..." rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0d3b59] outline-none transition-all resize-none" />
          </div>
          <button type="submit" className="w-full py-4 bg-[#0d3b59] text-white font-bold rounded-xl hover:bg-[#ed923d] transition-all shadow-lg active:scale-[0.98]">
            Send Message
          </button>
        </form>
      </div>
    </PageLayout>
  );
}
