'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function FarmerPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    type: '',
    price: '',
    quantity: '',
    buyerId: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      ...form,
      price: parseFloat(form.price),
      quantity: parseInt(form.quantity),
    };

    const existing = JSON.parse(localStorage.getItem('livestock') || '[]');
    localStorage.setItem('livestock', JSON.stringify([newItem, ...existing]));

    router.push('/buyer'); // go to buyer page
  };

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Add Livestock for Buyer</h1>

      <form
        onSubmit={handleAdd}
        className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4 mb-10"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Livestock Name"
          required
          className="w-full border p-2 rounded"
        />

        <input
          name="type"
          value={form.type}
          onChange={handleChange}
          placeholder="Type (e.g., Cow)"
          required
          className="w-full border p-2 rounded"
        />

        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          type="number"
          placeholder="Price"
          required
          className="w-full border p-2 rounded"
        />

        <input
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          type="number"
          placeholder="Quantity"
          required
          className="w-full border p-2 rounded"
        />

        <input
          name="buyerId"
          value={form.buyerId}
          onChange={handleChange}
          placeholder="Buyer ID (e.g., buyer1)"
          required
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Assign Livestock to Buyer
        </button>

             <Link href="/reports">
        <div className="w-full bg-blue-600 text-white py-2 rounded text-center hover:bg-blue-700 cursor-pointer">
          Reports
        </div>
      </Link>
      </form>
    </main>
  );
}
