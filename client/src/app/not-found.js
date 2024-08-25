"use client"; // This must be at the very top of the file
import Link from 'next/link';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="not-found">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
      <p className="redirect-message">Redirecting to the homepage in <span id="countdown">1</span> seconds...</p>
      <Link href="/" className="home-link">Go back to Home</Link>
    </div>
  );
};

export default NotFound;
