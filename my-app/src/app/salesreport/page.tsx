"use client";

import { useEffect, useState } from "react";

interface SaleRecord {
  id: number;
  customer: string;
  amount: number;
  date: string;
  status: "paid" | "pending" | "refunded";
}

export default function SalesReportPage() {
  const [sales, setSales] = useState<SaleRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulated data (replace with an API call later)
    const sampleSales: SaleRecord[] = [
      { id: 1001, customer: "John Doe", amount: 250.0, date: "2025-07-01", status: "paid" },
      { id: 1002, customer: "Mary Smith", amount: 500.0, date: "2025-07-02", status: "pending" },
      { id: 1003, customer: "James Brown", amount: 150.0, date: "2025-07-02", status: "refunded" },
    ];

    setSales(sampleSales);
    setLoading(false);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Sales Report</h1>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="min-w-full border border-gray-200 rounded shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Order ID</th>
              <th className="p-2 border">Customer</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id} className="hover:bg-gray-50">
                <td className="p-2 border">{sale.id}</td>
                <td className="p-2 border">{sale.customer}</td>
                <td className="p-2 border">${sale.amount.toFixed(2)}</td>
                <td className="p-2 border">{sale.date}</td>
                <td className={`p-2 border ${
                  sale.status === "paid" ? "text-green-600" :
                  sale.status === "pending" ? "text-yellow-600" :
                  "text-red-600"
                }`}>
                  {sale.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
