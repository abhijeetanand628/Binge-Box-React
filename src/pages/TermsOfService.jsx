import React, { useEffect } from 'react';

function TermsOfService() {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-gray-300 min-h-screen w-full flex justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-8">
          Terms of Service for BingeBox
        </h1>

        <div className="bg-[#121212] p-8 rounded-2xl shadow-lg space-y-6">
          <p className="text-sm text-gray-400">
            Last updated: October 21, 2025
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              1. Introduction
            </h2>
            <p>
              Welcome to BingeBox ("we," "us," or "our"). These Terms of Service ("Terms")
              govern your use of our website and services (collectively, the "Service").
              By accessing or using our Service, you agree to be bound by these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              2. Description of Service
            </h2>
            <p>
              BingeBox is a search engine and discovery platform for movies and TV shows.
              Our service provides links to media hosted by third-party services.
              You acknowledge that **BingeBox does not host, store, or stream any media files**
              on its servers. We are not responsible for the legality, accuracy, or
              quality of the content provided by these third-party sites.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              3. User Conduct
            </h2>
            <p>You agree not to use the Service to:</p>
            <ul className="list-disc list-inside text-gray-400 pl-4">
              <li>Violate any local, state, national, or international law.</li>
              <li>Infringe upon the intellectual property rights of others.</li>
              <li>
                Attempt to disrupt, hack, or compromise the integrity or security of our
                servers or network.
              </li>
              <li>
                Use any automated system (e.g., bots, scrapers) to access the Service
                in a manner that sends more request messages to our servers than a
                human can reasonably produce.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              4. Third-Party Links
            </h2>
            <p>
              Our Service contains links to third-party websites that are not
              owned or controlled by BingeBox. We have no control over, and assume
              no responsibility for, the content, privacy policies, or practices of
              any third-party websites. By using our Service, you expressly
              release BingeBox from any and all liability arising from your use of
              any third-party website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              5. Disclaimer of Warranties
            </h2>
            <p>
              The Service is provided on an "AS IS" and "AS AVAILABLE" basis.
              BingeBox makes no warranties, express or implied, regarding the
              Service, including but not limited to its accuracy, reliability, or
              availability. We do not guarantee that the Service will be
              uninterrupted, secure, or free of errors.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              6. Limitation of Liability
            </h2>
            <p>
              In no event shall BingeBox or its affiliates be liable for any
              indirect, incidental, special, consequential, or punitive damages
              arising out of or related to your use of the Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              7. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. We will
              notify you of any changes by posting the new Terms on this page.
              Your continued use of the Service after such changes constitutes
              your acceptance of the new Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-white">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms, please contact us at:
              <a
                href="mailto:support@bingebox.com"
                className="text-red-600 hover:underline ml-2"
              >
                [support@bingebox.com]
              </a>
            </p>
          </section>
          <div className="text-center mt-10">
            <a href="/" className="text-red-600 hover:underline cursor-pointer">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;