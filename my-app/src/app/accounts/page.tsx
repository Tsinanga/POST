'use client';

import React, { useEffect, useState } from 'react';

interface UserSession {
  id: number;
  name: string;
  status: 'active' | 'inactive';
  lastAccessed: string;
  sessionDuration: string;
  feedback?: string;
}

const sampleUserSessions: UserSession[] = [
  {
    id: 1,
    name: 'Alice',
    status: 'active',
    lastAccessed: '2025/06/30  0915 hrs',
    sessionDuration: '45m',
    feedback: 'Good',
  },
  {
    id: 2,
    name: 'Bob',
    status: 'inactive',
    lastAccessed: '2025/06/29  1822 hrs',
    sessionDuration: '2h 10m',
    feedback: 'Better',
  },
  {
    id: 3,
    name: 'Charlie',
    status: 'active',
    lastAccessed: '2025/06/30  1005 hrs',
    sessionDuration: '1h 5m',
    feedback: 'Very good',
  },
  {
    id: 4,
    name: 'Diana',
    status: 'inactive',
    lastAccessed: '2025/06/30  1630 hrs',
    sessionDuration: '39m',
    feedback: 'It was a good session',
  },
  {
    id: 5,
    name: 'Tsinanga',
    status: 'active',
    lastAccessed: '2025/06/31  0730 hrs',
    sessionDuration: '3h 16m',
    feedback: 'Excellent',
  },
];

export default function UsersReportPage() {
  const [sessions, setSessions] = useState<UserSession[]>([]);

  useEffect(() => {
    setSessions(sampleUserSessions);
  }, []);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User Sessions Report</h1>
      <table className="w-full border-collapse border">
        <thead className="bg-gray-100 border-b">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Last Accessed</th>
            <th className="p-2 border">Session Duration</th>
            <th className="p-2 border">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session.id} className="hover:bg-gray-50">
              <td className="p-2 border">{session.name}</td>
              <td
                className={`p-2 border ${
                  session.status === 'active' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {session.status}
              </td>
              <td className="p-2 border">{session.lastAccessed}</td>
              <td className="p-2 border">{session.sessionDuration}</td>
              <td className="p-2 border">{session.feedback ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
