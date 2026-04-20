'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState(null);

  // Load user on mount + route change
  useEffect(() => {
    const loadUser = () => {
      const storedUser = localStorage.getItem('user');
      setUser(storedUser ? JSON.parse(storedUser) : null);
    };

    loadUser();
  }, [pathname]); // 👈 IMPORTANT FIX

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
  };

  if (pathname === '/login') return null;

  return (
    <nav className="bg-blue-600 p-4 text-white shadow-md flex justify-between items-center">

      {/* Brand */}
      <h1 className="text-xl font-bold">
        <Link href="/home">Smart Laundry</Link>
      </h1>

      {/* Nav */}
      <div className="flex gap-4">
        <Link href="/user" className="hover:bg-blue-700 px-3 py-1 rounded">
          Booking
        </Link>

        <Link href="/about" className="hover:bg-blue-700 px-3 py-1 rounded">
          About
        </Link>

        <Link href="/contact" className="hover:bg-blue-700 px-3 py-1 rounded">
          Contact
        </Link>
      </div>

      {/* Auth Button */}
      <div>
       
          <button
            onClick={handleLogout}
            className="bg-blue-800 px-4 py-2 rounded hover:bg-blue-900 transition"
          >
            Logout
          </button>
      </div>

    </nav>
  );
}