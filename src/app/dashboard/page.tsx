'use client';

import { useEffect } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { Button } from '../components/ui/button';
// import ThemeToggle from '.,/components/ThemeToggle';

export default function Profile() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  // Redirect if not logged in
  useEffect(() => {
    if (!session) {
      router.push('/login');
    }
  }, [session, router]);

  // Log out
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  // Wait for session
  if (!session) return null;

  // Example user data
  const user = {
    name: 'Music Lover',
    email: session.user.email,
    likedSongs: [
      {
        id: '1',
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        albumArt:
          'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&w=500&q=60',
      },
      {
        id: '3',
        title: 'As It Was',
        artist: 'Harry Styles',
        albumArt:
          'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=60',
      },
    ],
  };

  return (
    <div className="container max-w-xl mx-auto py-4">
      <div className="text-center mb-8">
        <div className="h-24 w-24 rounded-full bg-music-gradient mx-auto mb-4 flex items-center justify-center text-3xl">
          {user.name.charAt(0)}
        </div>
        <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
        <p className="text-muted-foreground">{user.email}</p>
        <div className="mt-4">
          <Button onClick={handleLogout} variant="outline">
            Log out
          </Button>
        </div>
      </div>

      <div className="glass-effect rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Your Liked Songs</h2>
          <Button variant="outline" size="sm" onClick={() => router.push('/discover')}>
            Discover More
          </Button>
        </div>

        {user.likedSongs.length > 0 ? (
          <div className="space-y-4">
            {user.likedSongs.map((song) => (
              <div
                key={song.id}
                className="flex items-center gap-4 p-2 hover:bg-muted/20 rounded-lg transition-colors"
              >
                <img
                  src={song.albumArt}
                  alt={song.title}
                  className="h-12 w-12 object-cover rounded"
                />
                <div className="flex-grow">
                  <p className="font-medium">{song.title}</p>
                  <p className="text-sm text-muted-foreground">{song.artist}</p>
                </div>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  ▶️
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <p>No liked songs yet.</p>
            <Button variant="link" className="text-primary" onClick={() => router.push('/discover')}>
              Start discovering music
            </Button>
          </div>
        )}
      </div>

      <div className="glass-effect rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Connect Music Services</h2>
        <div className="space-y-4">
          <Button variant="outline" className="w-full flex justify-between">
            <span>Connect to Spotify</span>
            <span>🔗</span>
          </Button>
          <Button variant="outline" className="w-full flex justify-between">
            <span>Connect to Apple Music</span>
            <span>🔗</span>
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-4">
          Connecting to music services allows us to provide better recommendations
          and save songs directly to your playlists.
        </p>
      </div>
    </div>
  );
}
