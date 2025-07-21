"use client";

import { useEffect, useState } from "react";

interface InventoryItem {
  id: number;
  name: string;
  sku: string;
  quantity: number;
  reorderLevel: number;
  lastUpdated: string;
}

export default function InventoryStatusPage() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const sampleData: InventoryItem[] = [
      { id: 1, name: "Quail", sku: "LP-1001", quantity: 15, reorderLevel: 5, lastUpdated: "2025-07-03" },
      { id: 2, name: "Ostrich", sku: "WM-2003", quantity: 3, reorderLevel: 10, lastUpdated: "2025-07-03" },
      { id: 3, name: "German Shepherd", sku: "KB-3002", quantity: 0, reorderLevel: 5, lastUpdated: "2025-07-02" },
    ];

    setInventory(sampleData);
    setLoading(false);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory Status</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="min-w-full border border-gray-200 rounded shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Serial.No</th>
              <th className="p-2 border">Quantity</th>
              <th className="p-2 border">Reorder Level</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item) => {
              let statusClass = "text-green-600";
              let statusLabel = "In Stock";

              if (item.quantity === 0) {
                statusClass = "text-red-600";
                statusLabel = "Out of Stock";
              } else if (item.quantity <= item.reorderLevel) {
                statusClass = "text-yellow-600";
                statusLabel = "Low Stock";
              }

              return (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{item.id}</td>
                  <td className="p-2 border">{item.name}</td>
                  <td className="p-2 border">{item.sku}</td>
                  <td className="p-2 border">{item.quantity}</td>
                  <td className="p-2 border">{item.reorderLevel}</td>
                  <td className={`p-2 border font-semibold ${statusClass}`}>{statusLabel}</td>
                  <td className="p-2 border">{item.lastUpdated}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
