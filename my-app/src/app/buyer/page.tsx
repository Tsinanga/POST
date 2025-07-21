'use client';

import React, { useEffect, useState } from 'react';

interface Livestock {
  id: number;
  name: string;
  type: string;
  price: number;
  quantity: number;
  buyerId: string;
}


export default function BuyerPage() {
  const [livestock, setLivestock] = useState<Livestock[]>([]);
  const [addedIds, setAddedIds] = useState<number[]>([]);
  const buyerId = 'buyer1';


  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('livestock') || '[]');
    const assigned = all.filter((item: Livestock) => item.buyerId === buyerId);
    setLivestock(assigned);
  }, []);



  const handleAddToCart = (item: Livestock) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...existingCart, item];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setAddedIds((prev) => [...prev, item.id]);
  };

  return (
    <>
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">Welcome Buyer</h1>
      </header>

      <section className="p-4">
        <h2 className="text-lg font-semibold">Livestock Assigned to You</h2>

        {livestock.length === 0 ? (
          <p className="text-gray-600 mt-4">No livestock assigned yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-4">
            {livestock.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded shadow bg-gray-100 hover:bg-gray-200 transition cursor-pointer"
                onClick={() => handleAddToCart(item)}
              >
                <h3 className="font-bold">{item.name} ({item.type})</h3>
                <p className="text-gray-800">Price: Ksh {item.price}</p>
                <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                {addedIds.includes(item.id) && (
                  <p className="text-green-600 text-sm mt-2">✅ Added to cart</p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
