'use client';

import { createClient } from './lib/supabase';
import { useState } from 'react';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { Provider } from 'react-redux';
import { store } from './store/store';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [supabase] = useState(() => createClient());

  return (
    <Provider store={store}>
      <SessionContextProvider supabaseClient={supabase}>
        {children}
      </SessionContextProvider>
    </Provider>
  );
}
