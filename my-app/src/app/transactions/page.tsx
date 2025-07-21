'use client';

import React, { useState, useEffect } from 'react';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

const sampleTransactions: Transaction[] = [
  { id: 1, description: 'Payment to supplier', amount: 5000, date: '2025-06-29', status: 'completed' },
  { id: 2, description: 'Refund from vendor', amount: 2000, date: '2025-06-28', status: 'pending' },
  { id: 3, description: 'Service fee', amount: -300, date: '2025-06-27', status: 'completed' },
];

export default function TransactionPage() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // In a real app, replace this with an API call
    setTransactions(sampleTransactions);
  }, []);

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Transaction History</h1>
      <div className="bg-white shadow rounded-lg">
        <table className="w-full text-left">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Description</th>
              <th className="py-2 px-4">Amount</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{tx.date}</td>
                <td className="py-2 px-4">{tx.description}</td>
                <td className="py-2 px-4">{tx.amount}</td>
                <td className="py-2 px-4">
                  <span
                    className={
                      tx.status === 'completed'
                        ? 'text-green-600'
                        : tx.status === 'pending'
                        ? 'text-yellow-600'
                        : 'text-red-600'
                    }
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
