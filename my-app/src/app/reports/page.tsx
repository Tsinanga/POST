'use client';

import React from 'react';
import Link from 'next/link';

export default function ReportsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Reports</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="border p-4 rounded shadow hover:bg-gray-50">
          <h2 className="text-xl font-semibold">Sales Report</h2>
          <p className="text-gray-600">Monthly sales overview and trends.</p>
          <Link href="/salesreport" className="text-blue-600 mt-2 inline-block">
            View Details
          </Link>
        </div>

        <div className="border p-4 rounded shadow hover:bg-gray-50">
          <h2 className="text-xl font-semibold">User Activity</h2>
          <p className="text-gray-600">Engagement and session duration metrics.</p>
          <Link href="/useractivity" className="text-red-600 mt-2 inline-block">
            View Details
          </Link>
        </div>

        <div className="border p-4 rounded shadow hover:bg-gray-50">
          <h2 className="text-xl font-semibold">Inventory Status</h2>
          <p className="text-gray-600">Available stock and movement summary.</p>
          <Link href="inventorystats" className="text-green-600 mt-2 inline-block">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}