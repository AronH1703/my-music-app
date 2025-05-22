
// import ThemeToggle from "./components/ThemeToggle";
import Link from "next/link";
import { Button } from "./components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";


export default function HomePage() {
  return (
    <main className="bg-gradient-to-t from-slate-50 to-indigo-200 dark:from-slate-900 dark:to-indigo-900 min-h-screen flex flex-col">


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
          <div
            id="features"
            className={`text-black dark:text-white grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 transition-transform duration-500`}
          >
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

      {/* About Section */}
      <section id="about" className="h-screen py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            About MoodMix
          </h2>
          <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto">
            MoodMix is your personal music companion, powered by cutting-edge AI technology.
            We help you discover music that resonates with your emotions, creating a seamless
            and personalized listening experience.
          </p>
          <Image
            src="/placeholder.jpg"
            alt="About MoodMix"
            width={400}
            height={200}
            className="mx-auto rounded-lg shadow-lg mt-5"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 MoodMix. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
