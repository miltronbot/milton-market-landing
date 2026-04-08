export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6">
          
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <ul className="text-gray-300 space-y-2">
              <li><strong>Account Information:</strong> Email address, payment details</li>
              <li><strong>Usage Data:</strong> Login times, features used, IP addresses</li>
              <li><strong>Communication:</strong> Support emails, feedback, preferences</li>
              <li><strong>Analytics:</strong> Page views, signup sources, conversion data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Data</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Deliver trading signals and market analysis</li>
              <li>• Process payments and manage subscriptions</li>
              <li>• Send important service updates and notifications</li>
              <li>• Improve our algorithms and user experience</li>
              <li>• Provide customer support</li>
              <li>• Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Data Sharing</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do <strong>NOT</strong> sell your personal data. We only share data with:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>Payment Processors:</strong> Stripe for billing (encrypted)</li>
              <li>• <strong>Email Service:</strong> For delivering signals and updates</li>
              <li>• <strong>Analytics Tools:</strong> Anonymized usage data only</li>
              <li>• <strong>Legal Requirements:</strong> If required by law enforcement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement industry-standard security measures including encryption, 
              secure servers, and regular security audits. However, no system is 100% secure, 
              and we cannot guarantee absolute security of transmitted data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Your Rights (GDPR/CCPA)</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>Access:</strong> Request a copy of your personal data</li>
              <li>• <strong>Rectification:</strong> Correct inaccurate information</li>
              <li>• <strong>Erasure:</strong> Delete your account and data</li>
              <li>• <strong>Portability:</strong> Export your data in machine-readable format</li>
              <li>• <strong>Opt-out:</strong> Unsubscribe from marketing emails</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              We use essential cookies for login sessions and analytics cookies to understand 
              how users interact with our service. You can disable cookies in your browser, 
              but some features may not work properly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Active accounts: Data retained while subscription is active</li>
              <li>• Cancelled accounts: Deleted within 90 days unless legally required</li>
              <li>• Financial records: Retained for 7 years per tax regulations</li>
              <li>• Anonymized analytics: Retained indefinitely for service improvement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. International Transfers</h2>
            <p className="text-gray-300 leading-relaxed">
              Your data may be processed in the United States where our servers are located. 
              We ensure appropriate safeguards are in place for international data transfers 
              in compliance with applicable privacy laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this privacy policy periodically. Significant changes will be 
              communicated via email with 30 days notice. Continued use of our service 
              after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              Questions about privacy or data requests? Contact us at: privacy@miltonmarket.ai
            </p>
          </section>

          <div className="border-t border-gray-700 pt-6 mt-8">
            <p className="text-gray-500 text-sm">
              Last updated: April 8, 2026<br />
              Effective immediately for all users
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}