'use client';

import { useState } from 'react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      const data = await response.json();
      setSubmitted(true);
      
    } catch (error) {
      alert('Error signing up. Please try again.');
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Trading Signals with <span className="text-green-400">70%+ Win Rates</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Get proven market signals powered by Steve&apos;s Hybrid Strategy. 
              <br />3,992 backtested signals across stocks, crypto, and ETFs.
            </p>
          </div>

          {/* Proof Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400">+22%</div>
              <div className="text-sm text-gray-400">FAS · GREAT BUY</div>
              <div className="text-xs text-gray-500">March 2026</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400">+21%</div>
              <div className="text-sm text-gray-400">SPXL · GREAT BUY</div>
              <div className="text-xs text-gray-500">March 2026</div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400">+11%</div>
              <div className="text-sm text-gray-400">SVXY · GREAT BUY</div>
              <div className="text-xs text-gray-500">March 2026</div>
            </div>
          </div>

          {/* Win Rates */}
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">Proven Track Record</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-green-400">72%</div>
                <div className="text-gray-300">Great Sell Win Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400">67%</div>
                <div className="text-gray-300">Great Buy Win Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400">242</div>
                <div className="text-gray-300">Symbols Tracked</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8">
            <h3 className="text-3xl font-bold mb-4">Early Access - 40% Off</h3>
            <p className="text-xl mb-6">
              Get daily AI trading signals for just <span className="line-through text-gray-300">$49</span> 
              <span className="text-yellow-400 font-bold"> $29/month</span>
            </p>
            <p className="text-sm text-gray-200 mb-8">
              Limited to first 100 customers • Cancel anytime • 7-day money-back guarantee
            </p>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 mb-4"
                />
                <button 
                  type="submit" 
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Start Getting Signals - $29/month
                </button>
              </form>
            ) : (
              <div className="bg-green-600/20 border border-green-400 rounded-lg p-6">
                <h4 className="text-xl font-bold text-green-400 mb-2">🎉 You&apos;re In!</h4>
                <p className="text-gray-200">We&apos;ll contact you within 24 hours with payment details and your first signal summary.</p>
              </div>
            )}
            
            <p className="text-xs text-gray-300 mt-4">
              * Not financial advice. Past performance doesn&apos;t guarantee future results.
            </p>
          </div>

          {/* Features */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-3">🎯 Multi-Asset Coverage</h4>
              <p className="text-gray-300">Stocks, crypto, and ETFs analyzed with the same proven strategy</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3">⚡ Real-Time Scanning</h4>
              <p className="text-gray-300">Automated scans every 6 hours to catch new opportunities</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3">📊 Historical Validation</h4>
              <p className="text-gray-300">3,992 backtested signals with full performance tracking</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3">🤖 AI-Powered Analysis</h4>
              <p className="text-gray-300">Steve&apos;s Hybrid Strategy: MFI + StochRSI + RSI convergence</p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-12">How Milton Market Signals Work</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
              <h4 className="font-bold mb-2">AI Scans 242 Symbols</h4>
              <p className="text-gray-400 text-sm">Automated analysis of stocks, crypto, and ETFs every 6 hours</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
              <h4 className="font-bold mb-2">Hybrid Strategy Detection</h4>
              <p className="text-gray-400 text-sm">MFI + StochRSI + RSI must align on same candle for signal</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
              <h4 className="font-bold mb-2">Instant Signal Alerts</h4>
              <p className="text-gray-400 text-sm">Get notified immediately when new opportunities are detected</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 py-8 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-400">
          <p>Milton Market - AI-Powered Trading Signals</p>
          <p className="text-sm mt-2">Built by traders, for traders. 🤖</p>
        </div>
      </div>
    </div>
  );
}