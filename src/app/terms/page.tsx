export default function TermsOfService() {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <div className="prose prose-invert max-w-none space-y-6">
          
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Educational Service Only</h2>
            <p className="text-gray-300 leading-relaxed">
              Milton Market provides educational trading signals and market analysis for informational purposes only. 
              Our signals are NOT financial advice, investment recommendations, or trading instructions. 
              You are solely responsible for your trading decisions and their outcomes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Risk Disclaimer</h2>
            <div className="bg-red-900/30 border border-red-500 rounded-lg p-6">
              <p className="text-red-200 font-bold mb-2">⚠️ IMPORTANT RISK WARNING:</p>
              <ul className="text-red-200 space-y-2">
                <li>• Trading involves substantial risk of loss</li>
                <li>• Past performance does not guarantee future results</li>
                <li>• You may lose more than your initial investment</li>
                <li>• Never trade with money you cannot afford to lose</li>
                <li>• Consult a qualified financial advisor before trading</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. No Performance Guarantees</h2>
            <p className="text-gray-300 leading-relaxed">
              Historical win rates and performance data are for educational purposes only. 
              We make no guarantees about future performance, profitability, or accuracy of signals. 
              Market conditions change, and strategies that worked historically may not work in the future.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Subscription Terms</h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Monthly subscription billing on signup date</li>
              <li>• Cancel anytime - no long-term commitments</li>
              <li>• 7-day money-back guarantee for new customers</li>
              <li>• No refunds for partial months after cancellation</li>
              <li>• Price changes with 30-day notice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. User Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to: (a) use signals for educational purposes only; (b) not redistribute or resell our content; 
              (c) not hold us liable for trading losses; (d) comply with all applicable laws; 
              (e) provide accurate billing information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              Milton Market, its owners, and affiliates shall not be liable for any direct, indirect, 
              incidental, or consequential damages arising from your use of our service, 
              including but not limited to trading losses, missed opportunities, or system downtime.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              The Milton Algorithm, signal methodology, and all content are proprietary to Milton Market. 
              Subscribers receive a limited license for personal, non-commercial use only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              Questions about these terms? Contact us at: hello@miltonmarket.ai
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