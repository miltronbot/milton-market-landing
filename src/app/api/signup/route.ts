import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';

const SIGNUPS_FILE = '/tmp/milton-market-signups.json';

interface Signup {
  email: string;
  timestamp: string;
  ip?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Read existing signups
    let signups: Signup[] = [];
    if (existsSync(SIGNUPS_FILE)) {
      try {
        const data = readFileSync(SIGNUPS_FILE, 'utf8');
        signups = JSON.parse(data);
      } catch (e) {
        console.error('Error reading signups file:', e);
      }
    }

    // Check if email already exists
    if (signups.some(signup => signup.email === email)) {
      return NextResponse.json({ message: 'Already signed up!' }, { status: 200 });
    }

    // Add new signup
    const newSignup: Signup = {
      email,
      timestamp: new Date().toISOString(),
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    };

    signups.push(newSignup);

    // Save to file
    writeFileSync(SIGNUPS_FILE, JSON.stringify(signups, null, 2));

    console.log(`New signup: ${email}`);

    return NextResponse.json({ 
      message: 'Thanks for signing up! We\'ll contact you within 24 hours.' 
    });

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}