import { Headphones, Gamepad2, Keyboard, Mouse, Cpu, Car, Plane, ToyBrick, Book, Zap, ShoppingBag, Sparkles } from 'lucide-react';

export default function ComicBackgroundStore() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid base */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />

      {/* Shopping glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-pink/10 rounded-full blur-[100px]" />

      {/* Floating product icons */}
      <div className="absolute top-[10%] left-[8%] animate-float" style={{ animationDelay: '0s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[-12deg]">
          <Headphones className="w-12 h-12 text-neon-blue" />
        </div>
      </div>
      <div className="absolute top-[15%] right-[10%] animate-float" style={{ animationDelay: '1s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[15deg]">
          <Gamepad2 className="w-14 h-14 text-neon-purple" />
        </div>
      </div>
      <div className="absolute top-[42%] left-[5%] animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[8deg]">
          <Keyboard className="w-12 h-12 text-neon-cyan" />
        </div>
      </div>
      <div className="absolute top-[48%] right-[6%] animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[-10deg]">
          <Mouse className="w-12 h-12 text-neon-blue" />
        </div>
      </div>
      <div className="absolute bottom-[18%] left-[12%] animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[20deg]">
          <Cpu className="w-12 h-12 text-neon-purple" />
        </div>
      </div>
      <div className="absolute bottom-[15%] right-[15%] animate-float" style={{ animationDelay: '2.5s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[-5deg]">
          <Car className="w-14 h-14 text-neon-cyan" />
        </div>
      </div>
      <div className="absolute top-[28%] left-[44%] animate-float" style={{ animationDelay: '3s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[5deg]">
          <Plane className="w-12 h-12 text-neon-blue" />
        </div>
      </div>
      <div className="absolute bottom-[35%] right-[40%] animate-float" style={{ animationDelay: '1.8s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[-18deg]">
          <ToyBrick className="w-12 h-12 text-neon-pink" />
        </div>
      </div>
      <div className="absolute top-[62%] left-[30%] animate-float" style={{ animationDelay: '2.2s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[12deg]">
          <Book className="w-10 h-10 text-neon-cyan" />
        </div>
      </div>
      <div className="absolute top-[55%] right-[20%] animate-float" style={{ animationDelay: '1.2s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[-8deg]">
          <ShoppingBag className="w-10 h-10 text-neon-purple" />
        </div>
      </div>

      {/* Comic burst */}
      <div className="absolute top-[22%] left-[30%]">
        <Zap className="w-20 h-20 text-neon-blue/30 animate-flicker" />
      </div>
      <div className="absolute bottom-[28%] right-[28%]">
        <Sparkles className="w-16 h-16 text-neon-pink/30 animate-flicker" style={{ animationDelay: '1s' }} />
      </div>

      {/* Scan line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-neon-pink/20 to-transparent animate-scan-line" />
      </div>
    </div>
  );
}
