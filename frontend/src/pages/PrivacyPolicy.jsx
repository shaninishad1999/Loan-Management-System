import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 t rounded-lg shadow-md mt-20">
      <h1 className="text-3xl font-bold mb-6 text-gray-100 border-b pb-2">Privacy Policy</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200">Introduction</h2>
        <p className="mb-4 text-gray-100 leading-relaxed">
          Welcome to our Privacy Policy. This document explains how we collect, use, and protect your personal information when you use our services.
          Your privacy is important to us, and we are committed to protecting and respecting your data in compliance with applicable laws and regulations.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200">Information We Collect</h2>
        <p className="mb-3 text-gray-100 leading-relaxed">
          We may collect the following types of information:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-100 space-y-2">
          <li>Personal information (name, email address, phone number) provided during account creation</li>
          <li>Usage data and analytics related to how you interact with our services</li>
          <li>Device information including browser type, IP address, and operating system</li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200">How We Use Your Information</h2>
        <p className="mb-3 text-gray-100 leading-relaxed">
          We use your information for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-100 space-y-2">
          <li>To provide and maintain our services</li>
          <li>To notify you about changes to our services</li>
          <li>To allow you to participate in interactive features</li>
          <li>To provide customer support</li>
          <li>To gather analysis or valuable information to improve our services</li>
          <li>To detect, prevent and address technical issues</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200">Data Security</h2>
        <p className="mb-4 text-gray-100 leading-relaxed">
          We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal data.
          However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200">Third-Party Services</h2>
        <p className="mb-4 text-gray-100 leading-relaxed">
          Our service may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site.
          We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200">Your Rights</h2>
        <p className="mb-3 text-gray-100 leading-relaxed">
          Depending on your location, you may have the following rights:
        </p>
        <ul className="list-disc pl-6 mb-4 text-gray-100 space-y-2">
          <li>The right to access personal information we hold about you</li>
          <li>The right to request correction of inaccurate data</li>
          <li>The right to request deletion of your data</li>
          <li>The right to restrict or object to our processing of your data</li>
          <li>The right to data portability</li>
          <li>The right to withdraw consent</li>
        </ul>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200">Updates to This Policy</h2>
        <p className="mb-4 text-gray-100 leading-relaxed">
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          You are advised to review this Privacy Policy periodically for any changes.
        </p>
      </section>
      
      <section className="mb-4">
        <h2 className="text-2xl font-semibold mb-3 text-gray-200">Contact Us</h2>
        <p className="mb-4 text-gray-100 leading-relaxed">
          If you have any questions about this Privacy Policy, please contact us at:
        </p>
        <div className="bg-gray-100 p-4 rounded-md text-gray-700">
          <p>Email: privacy@example.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Privacy Street, Data City, 12345</p>
        </div>
      </section>
      
      <footer className="mt-10 pt-4 border-t text-sm text-gray-500 text-center">
        Last Updated: February 25, 2025
      </footer>
    </div>
  );
};

export default PrivacyPolicy;