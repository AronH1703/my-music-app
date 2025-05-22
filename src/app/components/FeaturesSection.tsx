'use client';


type FeaturesProps = {
  fullHeight: boolean;
};

export default function Features({ fullHeight }: FeaturesProps) {
  return (
    <section
      id="features"
      className={`${
        fullHeight ? 'min-h-screen' : ''
      } text-black dark:text-white grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 transition-all duration-500`}
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
    </section>
  );
}
