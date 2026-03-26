import PageLayout from "../components/PageLayout";

export default function PrivacyPage() {
  const breadcrumbs = [{ label: "Privacy Policy" }];

  return (
    <PageLayout title="Privacy Policy" breadcrumbs={breadcrumbs} centered={true}>
      <div className="space-y-8 text-gray-700">
        <section>
          <p className="mb-4">
            At <strong>DegreeFYD</strong>, we are committed to protecting your privacy and personal data. This Privacy Policy describes 
            how we collect, use, and share your personal information.
          </p>
          <p className="text-sm text-gray-400 italic">Last Updated: March 26, 2026</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-[#ed923d]">1. Information We Collect</h2>
          <p className="mb-2">We collect information that you provide to us directly, such as:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Contact information (e.g., name, email address).</li>
            <li>Information you provide when using our comparison tool or expert connect features.</li>
            <li>Inquiries and other communications you send us.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-[#ed923d]">2. How We Use Your Information</h2>
          <p className="mb-2">We use the information we collect to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide, maintain, and improve our services.</li>
            <li>Respond to your comments, questions, and requests.</li>
            <li>Send you technical notices, updates, and security alerts.</li>
            <li>Monitor and analyze trends, usage, and activities.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-[#ed923d]">3. Sharing of Information</h2>
          <p>
            We do not share your personal information with third parties except as required by law, 
            or with your explicit consent when connecting you with educational experts or institutions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-[#ed923d]">4. Security</h2>
          <p>
            We take reasonable measures to help protect information about you from loss, theft, 
            misuse, and unauthorized access, disclosure, and destruction.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4 text-[#ed923d]">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at 
            <strong> privacy@degreefyd.com</strong>.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
