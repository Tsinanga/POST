'use client';
import { useState } from 'react';
import Link from 'next/link';
import { handleRegister } from './test';

export default function SignIn() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.name || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }

    try {
      await handleRegister({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      setSuccess('Signup successful!');
    } catch (err: any) {
      setError(err.message || 'Error occurred');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '1rem' }}>
      <h2>Sign In</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />

        <div className="flex flex-col gap-2">
          <Link href="/otp">
            <button type="button" className="px-4 py-2 bg-blue-500 text-white rounded">
              Sign In
            </button>
          </Link>

        
      

           <p className="text-center text-sm">
            Don't have an account?{' '}
            <Link href="/signUp"
             className="text-blue-500 underline">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
