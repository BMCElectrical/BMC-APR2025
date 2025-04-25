import React from 'react';
import PageLayout from '../components/PageLayout';

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-600">
              We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we handle your personal data, your privacy rights, and how the law protects you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-600">
              We collect and process the following information when you use our website:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-600">
              <li>Contact information (name, email address, phone number)</li>
              <li>Usage data (how you interact with our website)</li>
              <li>Technical data (IP address, browser type, device information)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600">
              We use your personal data for the following purposes:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-600">
              <li>To provide and maintain our service</li>
              <li>To notify you about changes to our service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-600">
              <li>By email: privacy@example.com</li>
              <li>By visiting our contact page</li>
            </ul>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}