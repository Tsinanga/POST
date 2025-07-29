'use client';

import React, { useState } from 'react';
import Link from 'next/link';


export default function LandingPage() {
  // Local state for the selected day
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to Our Website!</h1>
      <p>We're glad you're here. Sign up to get started or sign in if you already have an account.</p>

      <div className="flex gap-4 justify-center mt-6">
        <Link href="/signUp">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            Sign Up
          </button>
        </Link>
        <Link href="/signIn">
          <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 transition">
            Log In
          </button>
        </Link>
      </div>

     

 
      {date && (
        <p className="mt-4 text-sm text-gray-600">
          You picked: {date.toLocaleDateString()}
        </p>
      )}
    </main>
  );
}
