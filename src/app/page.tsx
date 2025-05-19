import ThemeToggle from "./components/ThemeToggle";


export default function HomePage() {
  return (
    // <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white px-6 py-12">
    // <section className="text-center mt-20">
    // <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Discover Music <br />That Matches Your Mood.</h1>
    //     <button className="mt-4 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl text-white font-medium dark:bg-red/20 dark:hover:bg-green/30">Find Your Song
    //     </button>
    //   </section>
    //   <ThemeToggle/>
    // </main>

    <main className="min-h-screen bg-white dark:bg-black dark:text-white px-6 py-12">
      {/* Navbar */}
      <nav className="bg-black/20 dark:bg-white rounded-xl px-6 py-4 flex justify-between items-center max-w-5xl mx-auto">
        <div className="flex items-center space-x-4">
          <span className="text-xl">🎵</span>
          <a href="#" className="text-black font-medium hover:underline">Home</a>
          <a href="#" className="text-black font-medium hover:underline">About</a>
          <a href="#" className="text-black font-medium hover:underline">Library</a>
        </div>
        <a href="#" className="text-black font-medium hover:underline">Log in</a>
      </nav>

      {/* Hero Section */}
      <section className="text-center mt-20">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Discover Music <br />That Matches Your Mood.
        </h1>
        <button className="mt-4 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl text-white font-medium">
          Find Your Song
        </button>
      </section>

      {/* Trending Artists */}
      <section className="text-center mt-20 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Trending Artists</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-neutral-800 rounded-xl overflow-hidden">
            <img src="/assets/placeholder.jpg" alt="Artist 1" />
          </div>
          <div className="bg-neutral-800 rounded-xl overflow-hidden">
            <img src="/assets/placeholder.jpg" alt="Artist 2" />
          </div>
          <div className="bg-neutral-800 rounded-xl overflow-hidden">
            <img src="/assets/placeholder.jpg" alt="Artist 3" />
          </div>
          <div className="bg-neutral-800 rounded-xl overflow-hidden">
            <img src="/assets/placeholder.jpg" alt="Artist 4" />
          </div>
        </div>
      </section>
      <ThemeToggle />
    </main>
  );
}
