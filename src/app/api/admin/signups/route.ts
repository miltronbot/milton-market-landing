import { NextResponse } from 'next/server';
import { readFileSync, existsSync } from 'fs';

const SIGNUPS_FILE = '/tmp/milton-market-signups.json';

export async function GET() {
  try {
    if (!existsSync(SIGNUPS_FILE)) {
      return NextResponse.json({ signups: [] });
    }

    const data = readFileSync(SIGNUPS_FILE, 'utf8');
    const signups = JSON.parse(data);

    // Sort by newest first
    signups.sort((a: any, b: any) => 
      new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    );

    return NextResponse.json({ signups });

  } catch (error) {
    console.error('Error reading signups:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}