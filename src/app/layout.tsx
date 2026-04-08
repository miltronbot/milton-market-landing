import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Milton Market - AI Trading Signals with 70%+ Win Rates',
  description: 'Get proven market signals powered by our proprietary AI algorithm. 3,992 backtested signals across stocks, crypto, and ETFs.',
  keywords: 'trading signals, AI trading, stock signals, crypto signals, technical analysis, MFI, StochRSI, RSI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}