'use client';

import { User } from '@/data/users';
import Image from 'next/image';

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow-md">
      <div className="flex items-center gap-4">
        <Image
          src={user.profilePicture}
          alt={user.name}
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-sm">Gender: {user.gender}</p>
          <p className="text-sm text-gray-600">
            Created: {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Purchase History */}
      <div className="mt-4">
        <h3 className="font-semibold text-base mb-2">Purchase History</h3>
        {user.purchases.length > 0 ? (
          <ul className="space-y-1 text-sm text-gray-700">
            {user.purchases.map((purchase) => (
              <li key={purchase.id} className="border-b pb-1">
                <span className="font-medium">{purchase.product}</span> — 
                {purchase.quantity} x Ksh {purchase.price} on{' '}
                {new Date(purchase.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500">No purchases yet.</p>
        )}
      </div>
    </div>
  );
}
