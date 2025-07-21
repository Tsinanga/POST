"use client";

import { useEffect, useState } from "react";

interface UserActivity {
  id: number;
  userName: string;
  action: string;
  timestamp: string;
  ipAddress?: string;
}

export default function UserActivityPage() {
  const [activities, setActivities] = useState<UserActivity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // You’d replace this with an API call, e.g. fetch("/api/user-activity")
    const sampleData: UserActivity[] = [
      { id: 1, userName: "Alice", action: "Logged In", timestamp: "2025-07-02 09:00", ipAddress: "192.168.0.2" },
      { id: 2, userName: "Bob", action: "Viewed Profile", timestamp: "2025-07-02 09:05", ipAddress: "192.168.0.3" },
      { id: 3, userName: "Alice", action: "Logged Out", timestamp: "2025-07-02 09:15", ipAddress: "192.168.0.2" },
    ];

    setActivities(sampleData);
    setLoading(false);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Activity</h1>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="min-w-full border border-gray-200 rounded shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">User</th>
              <th className="p-2 border">Action</th>
              <th className="p-2 border">Timestamp</th>
              <th className="p-2 border">IP Address</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id} className="hover:bg-gray-50">
                <td className="p-2 border">{activity.id}</td>
                <td className="p-2 border">{activity.userName}</td>
                <td className="p-2 border">{activity.action}</td>
                <td className="p-2 border">{activity.timestamp}</td>
                <td className="p-2 border">{activity.ipAddress ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
