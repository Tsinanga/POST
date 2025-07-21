"use server";
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email');
  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  try {
    const response = await fetch(
      `http://41.80.34.214:9098/api/Auth/generateOTP?email=${encodeURIComponent(email)}`,
      {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }
    );

    const data = await response.json();

    
    if (data?.otp) {
      console.log(`OTP for ${email}:`, data.otp);
    } else {
      console.log(`Response from external API for ${email}:`, data);
    }

    return NextResponse.json(data, { status: response.status });
  } catch (error: any) {
    console.error('Error generating OTP:', error.message);
    return NextResponse.json({ error: 'Failed to generate OTP' }, { status: 500 });
  }
}
