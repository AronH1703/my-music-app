import ThemeToggle from "./components/ThemeToggle";
import Link from 'next/link';
import { Button } from "./components/ui/button";
import { ChevronRight } from "lucide-react";

export default function HomePage() {
  return (
    <main className="bg-gradient-to-t from-slate-50 to-indigo-200 dark:from-slate-900 dark:to-indigo-900
    min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="text-black dark:text-white bg-white border-gray-200 dark:bg-gray-900 z-10 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className="h-8 w-8 rounded-full bg-music-gradient flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-gradient">
            MoodMix
          </span>
        </Link>

        {/* Right section */}
        <div className="flex md:order-2 space-x-2">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Sign In
          </Button>
          <ThemeToggle />
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li><Link href="/" className="nav-link active">Home</Link></li>
            <li><Link href="#about" className="nav-link">About</Link></li>
            <li><Link href="#features" className="nav-link">Features</Link></li>
            <li><Link href="#contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center flex-grow px-4 pt-24 pb-12">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-music-purple/20 filter blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-music-teal/20 filter blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content */}
        <div className="relative z-1 max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="dark:text-white text-5xl md:text-7xl font-bold mb-6">
            Find Your <span className="text-gradient">Perfect Beat</span>
          </h1>
          <p className="text-black dark:text-white text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Discover music that matches your mood, powered by AI recommendations tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quiz">
              <Button size="lg" className="bg-music-gradient hover:opacity-90 text-white">
                Start Music Quiz <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary text-primary dark:text-white hover:bg-black/10">
              How It Works
            </Button>
          </div>

          {/* Features */}
          <div className="text-black dark:text-white grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="p-6 glass-effect rounded-xl">
              <div className="h-12 w-12 rounded-full bg-music-purple/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Mood Matching</h3>
              <p className="text-muted-foreground">Our quiz learns your current vibe to find the perfect soundtrack.</p>
            </div>
            <div className="p-6 glass-effect rounded-xl">
              <div className="h-12 w-12 rounded-full bg-music-purple/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Powered</h3>
              <p className="text-muted-foreground">Smart recommendations that understand your unique taste in music.</p>
            </div>
            <div className="p-6 glass-effect rounded-xl">
              <div className="h-12 w-12 rounded-full bg-music-purple/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💿</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Save & Share</h3>
              <p className="text-muted-foreground">Keep track of your discoveries and build your perfect playlists.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 MoodMix. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};
