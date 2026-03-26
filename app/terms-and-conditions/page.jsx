import PageLayout from "../components/PageLayout";

export default function TermsPage() {
  const breadcrumbs = [{ label: "Terms & Conditions" }];

  return (
    <PageLayout title="Terms & Conditions" breadcrumbs={breadcrumbs} centered={true}>
      <div className="space-y-8 text-gray-700">
        <section>
          <p className="mb-4">
            Welcome to <strong>DegreeFYD</strong>. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions of use.
          </p>
          <p className="text-sm text-gray-400 italic">Last Updated: March 26, 2026</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-[#ed923d]">1. Acceptance of Terms</h2>
          <p>
            The services provided by DegreeFYD are subject to the following Terms of Use. DegreeFYD reserves the right to update these terms at any time without notice to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-[#ed923d]">2. Description of Service</h2>
          <p>
            DegreeFYD provides users with access to a collection of resources, including college comparison tools, 
            educational data, and expert consultation services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-[#ed923d]">3. Accuracy of Data</h2>
          <p>
            While we strive to provide the most accurate and up-to-date information, the educational data 
            (fees, rankings, placements) is subject to change by the respective institutions. Users are 
            encouraged to verify critical information directly with the colleges.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-[#ed923d]">4. Use of Content</h2>
          <p>
            All content on this website, including text, graphics, logos, and software, is the property of 
            DegreeFYD and is protected by copyright laws. You may not reproduce, modify, or distribute 
            our content without prior written consent.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-[#ed923d]">5. Limitation of Liability</h2>
          <p>
            DegreeFYD shall not be liable for any decision made or action taken by you in reliance upon the 
            information provided on this website. The use of our service is at your own risk.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
