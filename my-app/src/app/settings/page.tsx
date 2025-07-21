'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SettingsPage() {
  const initialUsername = 'JohnDoe';
  const initialEmail = 'johndoe@example.com';

  const [username, setUsername] = useState(initialUsername);
  const [email, setEmail] = useState(initialEmail);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Settings saved!');
  };

  const handleDiscard = () => {
    setUsername(initialUsername);
    setEmail(initialEmail);
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-700">Settings</h1>

      <form
        onSubmit={handleSave}
        className="max-w-xl mx-auto bg-white shadow-md rounded p-6 space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            placeholder="Leave blank to keep current"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded p-2"
            placeholder="Repeat new password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Save Changes
        </button>

        <button
          type="button"
          onClick={handleDiscard}
          className="w-full bg-yellow-600 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Discard Changes
        </button>
      </form>
    </main>
  );
}
