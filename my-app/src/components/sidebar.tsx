'use client';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-30 bg--700 text-yellow-700 min-h-screen p-3">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <nav className="flex flex-col space-y-2">
        <Link href="/" className="hover:bg-blue-800 p-2 rounded">Home</Link>
        <Link href="/" className="hover:bg-blue-800 p-2 rounded">Diagnostics</Link>
        <Link href="/" className="hover:bg-blue-800 p-2 rounded">Book appointment</Link>
        
       
        <br/><br/>
        <br/><br/>
                <br/><br/><br/><br/>
       

        
        <Link href="/settings" className="hover:bg-red-800 p-2 rounded">Settings</Link>
                          <Link href="/users" className="hover:bg-red-800 p-2 rounded">User</Link>
         <Link href="/logout" className="hover:bg-red-800 p-2 rounded">Logout</Link>

      </nav>
    </div>
  );
}
