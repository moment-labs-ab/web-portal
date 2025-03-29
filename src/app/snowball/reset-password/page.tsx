// app/reset-password/page.js
'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function PasswordReset() {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Get the access_token from URL parameters
    const accessToken = searchParams.get('access_token');
    
    if (!accessToken) {
      // Handle missing token case
      console.error('No access token provided');
      return;
    }

    // Construct the deep link URL to your Expo app
    // Format: yourapp://reset-password?access_token=TOKEN
    const expoDeepLink = `com.momentlabs.snowball://reset-password?access_token=${encodeURIComponent(accessToken)}`;
    
    // Redirect to the Expo app
    window.location.href = expoDeepLink;
    
    // Optional: You can set a timeout to show a fallback UI
    // if the redirection doesn't happen (e.g., app not installed)
    const redirectTimeout = setTimeout(() => {
      // This runs if the automatic redirection didn't work
      const manualRedirectElement = document.getElementById('manual-redirect');
      if (manualRedirectElement) {
        manualRedirectElement.style.display = 'block';
      }
    }, 2000);
    
    return () => clearTimeout(redirectTimeout);
  }, [searchParams]);

  return (
    <html>
    <head>
      <title>Password Reset</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body>
    <div className="container mx-auto p-4 max-w-md text-center">
      <h1 className="text-2xl font-bold mb-4">Resetting Your Snowball Password</h1>
      <p className="mb-4">Redirecting you to the app...</p>
      
      <div id="manual-redirect" style={{ display: 'none' }}>
        <p className="text-red-500 mb-4">
          If you're not automatically redirected, please ensure the app is installed on your device.
        </p>
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => {
            const accessToken = searchParams.get('access_token');
            const expoDeepLink = `com.momentlabs.snowball://reset-password?access_token=${encodeURIComponent(accessToken || '')}`;
            window.location.href = expoDeepLink;
          }}
        >
          Open App Manually
        </button>
      </div>
    </div>
    </body>
    </html>
  );
}