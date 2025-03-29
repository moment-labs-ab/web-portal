// app/reset-password/page.js
'use client';

import { Suspense } from 'react';
import ClientOnly from './client-only';

// Server Component
export default function PasswordResetPage() {
  return (
    <Suspense fallback={<div className="container mx-auto p-4 max-w-md text-center">Loading...</div>}>
        <ClientOnly />
    </Suspense>
  )
}