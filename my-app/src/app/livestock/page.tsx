'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LivestockPage() {
  const router = useRouter();
  const farmerId = '1'; // simulate logged-in farmer ID

  const [form, setForm] = useState({
    name: '',
    type: '',
    price: '',
    quantity: '',
    farmerId:'',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      farmerId,
      ...form,
      price: parseFloat(form.price),
      quantity: parseInt(form.quantity),
    };

    // save to localStorage
    const existing = JSON.parse(localStorage.getItem('livestock') || '[]');
    localStorage.setItem('livestock', JSON.stringify([newItem, ...existing]));

    // redirect to farmer's page
    router.push(`/farmer/${farmerId}`);
  };

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Add Livestock</h1>

      <form
        onSubmit={handleAdd}
        className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4 mb-10"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded p-2 mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Type</label>
          <input
            name="type"
            value={form.type}
            onChange={handleChange}
            required
            placeholder="e.g. Cow, Goat, Chicken"
            className="w-full border border-gray-300 rounded p-2 mt-1"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Price (Ksh)</label>
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              type="number"
              required
              className="w-full border border-gray-300 rounded p-2 mt-1"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              type="number"
              required
              className="w-full border border-gray-300 rounded p-2 mt-1"
            />
          </div>
        </div>

        <Link
  href="/farmer"
  className="w-full block text-center bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
>
  Post Livestock to My Page
</Link>
      </form>
    </main>
  );
}
