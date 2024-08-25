"use client"; // This must be at the very top of the file

import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Set a timeout to redirect to the home page after 3 seconds
    const timeoutId = setTimeout(() => {
      router.push('/');
    }, 3000);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [router]);

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <p>Redirecting to the homepage in 3 seconds...</p>
      <Link href="/">Go back to Home</Link>
    </div>
  );
}
