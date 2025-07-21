'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';


export default function OtpPage() {
  const [otp, setOtp] = useState('');
  const [wrongOtp, setWrongOtp] = useState(false);
  const [timer, setTimer] = useState(60);
  const [isResending, setIsResending] = useState(false);


  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

 
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (otp === '123456') {
      alert('OTP verified!');
    } else {
      setWrongOtp(true);
    }
  };

  const handleResend = () => {
    setIsResending(true);
    setTimer(60);
    setOtp('');
    setWrongOtp(false);

    // Simulate API call delay
    setTimeout(() => {
      setIsResending(false);
      alert('OTP resent!');
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <form
        onSubmit={handleOtpSubmit}
        className="w-full max-w-md space-y-4 bg-white p-6 rounded shadow"
      >
        <h2 className="text-xl font-semibold text-center">Enter OTP</h2>
        <p className="text-center text-gray-600">
          We’ve sent a verification code to your email/phone.
        </p>

        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
          maxLength={6}
          className="w-full p-2 border rounded text-center tracking-widest text-lg"
          required
        />

        {wrongOtp && <p className="text-red-500 text-sm">Incorrect OTP. Try again.</p>}

        <Link href="/user">
            <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded">
              Verify OTP
            </button>
          </Link>

        <div className="text-sm text-center text-gray-600">
          {timer > 0 ? (
            <p>Resend OTP in {formatTime(timer)}</p>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              disabled={isResending}
              className="text-blue-500 hover:underline"
            >
              {isResending ? 'Resending...' : 'Resend OTP'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
