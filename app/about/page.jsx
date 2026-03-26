import PageLayout from "../components/PageLayout";

export default function AboutPage() {
  const breadcrumbs = [{ label: "About Us" }];

  return (
    <PageLayout title="About Us" breadcrumbs={breadcrumbs} centered={true}>
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#ed923d]">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            At <strong>DegreeFYD</strong>, our mission is to empower students across India by providing transparent, 
            data-driven comparisons of educational institutions. We believe that choosing the right college is one 
            of the most significant decisions in a student's life, and we are here to make that process simpler, 
            smarter, and more reliable.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-[#191919]">What We Do</h3>
            <p className="text-gray-600">
              We aggregate complex data points—from NIRF rankings and NAAC accreditations to placement 
              statistics and fee structures—into an easy-to-navigate comparison engine.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
            <h3 className="text-xl font-bold mb-3 text-[#191919]">Why Choose Us</h3>
            <p className="text-gray-600">
              Our platform is built with the user in mind. No clutter, no bias—just the facts you need 
              to make an informed choice for your future.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-[#ed923d]">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            DegreeFYD started as a small project with a big vision: to bridge the information gap in the 
            Indian higher education landscape. Today, we serve thousands of students daily, helping them 
            navigate the diverse offerings of universities and colleges nationwide.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We are constantly evolving, adding new features and more data points to ensure that we 
            remain India's most trusted college comparison platform.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
