import { NextRequest, NextResponse } from 'next/server';

// Note: You'll need to add your Stripe secret key to environment variables
// For now, this is a template - we'll use simple payment links initially

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // For MVP, we'll redirect to a simple Stripe payment link
    // Later, we can integrate full Stripe Checkout API
    
    const paymentUrl = process.env.STRIPE_PAYMENT_LINK || 
      'https://buy.stripe.com/test_PLACEHOLDER'; // Replace with actual payment link

    return NextResponse.json({ 
      success: true,
      paymentUrl,
      message: 'Redirecting to payment...' 
    });

  } catch (error) {
    console.error('Payment creation error:', error);
    return NextResponse.json(
      { error: 'Payment system temporarily unavailable' },
      { status: 500 }
    );
  }
}