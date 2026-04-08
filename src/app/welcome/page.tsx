export default function WelcomePage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-green-900 to-blue-900">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-400">
              Welcome to Milton Market!
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Your subscription is active. You'll receive your first signal summary within 24 hours.
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">What Happens Next?</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="font-bold text-green-400">First Signal Summary (Within 24 Hours)</h4>
                  <p className="text-gray-300">We'll send you a comprehensive email with the latest signals from our AI scanner.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="font-bold text-blue-400">Regular Updates (Tuesdays & Fridays)</h4>
                  <p className="text-gray-300">You'll receive bi-weekly signal summaries with new opportunities and performance tracking.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="font-bold text-purple-400">Direct Support</h4>
                  <p className="text-gray-300">Questions? Simply reply to any signal email or contact hello@miltonmarket.ai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Reminders */}
          <div className="bg-yellow-900/30 border border-yellow-500 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-400 mb-4">📋 Important Reminders</h3>
            <ul className="text-yellow-200 space-y-2 text-sm text-left">
              <li>• Our signals are for educational purposes only - not financial advice</li>
              <li>• Always manage your risk and never invest more than you can afford to lose</li>
              <li>• Past performance doesn't guarantee future results</li>
              <li>• Consider consulting a financial advisor before making investment decisions</li>
            </ul>
          </div>

          {/* Manage Subscription */}
          <div className="space-y-4">
            <p className="text-gray-400">
              Need to manage your subscription? Check your email for the Stripe customer portal link, 
              or contact us at hello@miltonmarket.ai
            </p>
            
            <div className="space-x-4">
              <a 
                href="https://milton-market.fly.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                View Live Signals Dashboard
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              Questions? Contact us at <span className="text-blue-400">hello@miltonmarket.ai</span>
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Milton Market - AI-Powered Trading Signals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}