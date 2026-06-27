import { BookOpen, Compass, Mountain, Sparkles, Globe, Star, Flame, Map, Trees, Rocket } from 'lucide-react';

export default function ComicBackgroundBlog() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid base */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-15" />

      {/* Adventure glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-neon-blue/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-neon-pink/5 rounded-full blur-[80px]" />

      {/* Floating adventure icons */}
      <div className="absolute top-[12%] left-[8%] animate-float" style={{ animationDelay: '0s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[-12deg]">
          <BookOpen className="w-12 h-12 text-neon-purple" />
        </div>
      </div>
      <div className="absolute top-[18%] right-[10%] animate-float" style={{ animationDelay: '1s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[15deg]">
          <Compass className="w-14 h-14 text-neon-blue" />
        </div>
      </div>
      <div className="absolute top-[40%] left-[6%] animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[8deg]">
          <Mountain className="w-12 h-12 text-neon-cyan" />
        </div>
      </div>
      <div className="absolute top-[48%] right-[8%] animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[-10deg]">
          <Map className="w-12 h-12 text-neon-purple" />
        </div>
      </div>
      <div className="absolute bottom-[20%] left-[14%] animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[20deg]">
          <Trees className="w-10 h-10 text-neon-blue" />
        </div>
      </div>
      <div className="absolute bottom-[18%] right-[16%] animate-float" style={{ animationDelay: '2.5s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[-5deg]">
          <Rocket className="w-14 h-14 text-neon-cyan" />
        </div>
      </div>
      <div className="absolute top-[30%] left-[42%] animate-float" style={{ animationDelay: '3s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[5deg]">
          <Globe className="w-12 h-12 text-neon-purple" />
        </div>
      </div>
      <div className="absolute bottom-[40%] right-[38%] animate-float" style={{ animationDelay: '1.8s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[-18deg]">
          <Flame className="w-12 h-12 text-neon-pink" />
        </div>
      </div>

      {/* Sparkles */}
      <div className="absolute top-[25%] left-[35%]">
        <Sparkles className="w-16 h-16 text-neon-blue/30 animate-flicker" />
      </div>
      <div className="absolute bottom-[30%] right-[30%]">
        <Star className="w-12 h-12 text-neon-purple/30 animate-flicker" style={{ animationDelay: '1s' }} />
      </div>
      <div className="absolute top-[60%] left-[20%]">
        <Star className="w-8 h-8 text-neon-cyan/30 animate-flicker" style={{ animationDelay: '2s' }} />
      </div>

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-neon-purple/20 to-transparent animate-scan-line" />
      </div>
    </div>
  );
}
