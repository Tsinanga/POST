import { users, User } from '@/data/users';
import UserCard from '@/components/UserCard';

export default function UsersPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-italics mb-6">User Info</h1>
      <div className="space-y-4">
        {users.map((user: User) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
}
