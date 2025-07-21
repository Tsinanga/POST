'use client';

import Link from 'next/link';
import React from 'react';

export default function UserPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">
      <h1 className="text-4xl font-bold text-green-800 mb-6">Welcome</h1>
      <p className="text-lg text-gray-700 mb-8">Choose your role to continue:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
      
        <Link href="/buyer">
          <div className="p-6 bg-white shadow-md hover:shadow-lg transition rounded-2xl border cursor-pointer text-center">
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Buyer</h2>
            <p className="text-gray-600">Looking to purchase high quality livestock? Browse our selection and buy from the best sellers.</p>
          </div>
        </Link>

        
        <Link href="/farmer">
          <div className="p-6 bg-white shadow-md hover:shadow-lg transition rounded-2xl border cursor-pointer text-center">
            <h2 className="text-2xl font-semibold text-green-700 mb-2">Farmer</h2>
            <p className="text-gray-600">Sell animals and access market tools.</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
