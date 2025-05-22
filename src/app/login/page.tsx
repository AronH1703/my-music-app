'use client';

import { useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { useSession } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { createClient } from '../lib/supabase';
import ThemeToggle from '../components/ThemeToggle';

export default function SignInPage() {
  const supabase = createClient();
  const session = useSession();
  const router = useRouter();

  // ✅ Redirect to dashboard if user is logged in
  useEffect(() => {
    if (session) {
      router.push('/dashboard');
    }
  }, [session]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-t from-slate-50 to-indigo-200 text-foreground">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white dark:bg-gray-900">
        <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
        <div className="flex justify-center mb-4">
          <ThemeToggle />
        </div>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={['google', 'facebook']}
          theme="dark"
        />
      </div>
    </main>
  );
}
