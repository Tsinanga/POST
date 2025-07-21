'use client';

import React from 'react';
import Link from 'next/link';

interface Order {
  id: number;
  buyerName: string;
  item: string;
  quantity: number;
  status: 'Pending' | 'Shipped' | 'Delivered';
}

const orders: Order[] = [
  { id: 1, buyerName: 'John Doe', item: 'Dairy Cow', quantity: 1, status: 'Shipped' },
  { id: 2, buyerName: 'Jane Wambui', item: 'Goat', quantity: 2, status: 'Pending' },
  { id: 3, buyerName: 'Ali Mwangi', item: 'Chicken', quantity: 10, status: 'Delivered' },
];

export default function OrdersPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 border-b">Order ID</th>
              <th className="py-2 px-4 border-b">Buyer</th>
              <th className="py-2 px-4 border-b">Item</th>
              <th className="py-2 px-4 border-b">Quantity</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{order.id}</td>
                <td className="py-2 px-4 border-b">{order.buyerName}</td>
                <td className="py-2 px-4 border-b">{order.item}</td>
                <td className="py-2 px-4 border-b">{order.quantity}</td>
                <td className="py-2 px-4 border-b">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>

                      <Link href="/logout">
                
                  Logout
               
              </Link>
      </div>
    </div>
  );
}
