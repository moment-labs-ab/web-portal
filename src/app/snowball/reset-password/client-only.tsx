'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ClientOnly() {
  const [mounted, setMounted] = useState(false);

  // Only render content after component has mounted on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return empty div on server render to avoid hydration mismatch
  if (!mounted) {
    // This is what gets rendered on the server - an empty div
    return <div />;
  }

  // Only render the actual content on the client after mounting
  return <PasswordResetContent />;
}

function PasswordResetContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'error' | 'manual'>('loading');
  const accessToken = searchParams.get('access_token');

  useEffect(() => {
    if (!accessToken) {
      setStatus('error');
      return;
    }

    // Construct deep link
    const expoDeepLink = `com.momentlabs.snowball://reset-password?access_token=${encodeURIComponent(accessToken)}`;
    
    // Try to redirect to app
    window.location.href = expoDeepLink;

    // Set timeout for manual option
    const timeout = setTimeout(() => {
      setStatus('manual');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [accessToken]);

  return (
    <div className="container mx-auto p-4 max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Resetting Your Password</h1>
        
        {status === 'error' && (
        <p className="text-red-500">No access token provided. Please check your reset link.</p>
        )}
        
        {status === 'loading' && (
        <p className="mb-4">Redirecting you to the app...</p>
        )}
        
        {status === 'manual' && (
        <div>
            <p className="text-red-500 mb-4">
            If you're not automatically redirected, please ensure the app is installed on your device.
            </p>
            <button 
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => {
                if (accessToken) {
                const expoDeepLink = `com.momentlabs.snowball://reset-password?access_token=${encodeURIComponent(accessToken)}`;
                window.location.href = expoDeepLink;
                }
            }}
            >
            Open App Manually
            </button>
        </div>
        )}
    </div>
  );
}