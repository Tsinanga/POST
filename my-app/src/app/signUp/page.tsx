'use client';

import { useState } from 'react';
import Link from 'next/link';



export default function SignupPage() {
  const [step, setStep] = useState<'form' | 'otp'>('form');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('otp');
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('OTP Verified (placeholder)');
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
     

      <div className="flex-1 flex flex-col items-center justify-center p-4">
        {step === 'form' ? (
          <form
            onSubmit={handleFormSubmit}
            className="w-full max-w-md space-y-4 bg-white p-6 rounded shadow"
          >
            <h1 className="text-2xl font-bold text-center">SIGN UP</h1>
            <p className="text-center text-gray-600">
              Welcome! Create an account to access the livestock marketplace platform
            </p>

            <input type="text" placeholder="First Name" className="w-full p-2 border rounded" required />
            <input type="text" placeholder="Last Name" className="w-full p-2 border rounded" required />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              required
            />
            <input type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" required />
            <input type="password" placeholder="Password" className="w-full p-2 border rounded" required />
            <input type="password" placeholder="Re-enter Password" className="w-full p-2 border rounded" required />

            <label className="flex items-center space-x-2 text-sm">
              <input type="checkbox" required />
              <span>I understand and agree to the livestock marketplace notice</span>
            </label>

            <Link href="/otp">
              <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded">
                Sign Up
              </button>
            </Link>
          </form>
        ) : (
          <form
            onSubmit={handleOtpSubmit}
            className="w-full max-w-md space-y-4 bg-white p-6 rounded shadow"
          >
            <h2 className="text-xl font-semibold text-center">Verify OTP</h2>
            <p className="text-center text-gray-600">
              An OTP has been sent to <span className="font-medium">{email}</span>
            </p>

            <input type="text" placeholder="Enter OTP" className="w-full p-2 border rounded" required />

            <Link href="/user" className="text-blue-500 underline">
              Verify
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}
