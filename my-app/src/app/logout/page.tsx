'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    
    localStorage.removeItem('userToken'); 
    localStorage.removeItem('user');

   
    setTimeout(() => {
      router.push('/signIn');
    }, 1500);
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-2">Logging Out...</h1>
        <p>You are being redirected to the login page.</p>
      </div>
    </main>
  );
}
