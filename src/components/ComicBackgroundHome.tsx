import { Cpu, Gamepad2, Monitor, Keyboard, Mouse, Bot, Zap, CircuitBoard, Rocket, Satellite } from 'lucide-react';

export default function ComicBackgroundHome() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid base */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-purple/10 rounded-full blur-[100px]" />

      {/* Floating tech icons */}
      <div className="absolute top-[10%] left-[8%] animate-float" style={{ animationDelay: '0s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[-12deg]">
          <Cpu className="w-12 h-12 text-neon-blue" />
        </div>
      </div>
      <div className="absolute top-[15%] right-[10%] animate-float" style={{ animationDelay: '1s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[15deg]">
          <Gamepad2 className="w-14 h-14 text-neon-purple" />
        </div>
      </div>
      <div className="absolute top-[45%] left-[5%] animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[8deg]">
          <Monitor className="w-12 h-12 text-neon-cyan" />
        </div>
      </div>
      <div className="absolute top-[50%] right-[6%] animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[-10deg]">
          <Keyboard className="w-12 h-12 text-neon-blue" />
        </div>
      </div>
      <div className="absolute bottom-[20%] left-[12%] animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[20deg]">
          <Mouse className="w-10 h-10 text-neon-purple" />
        </div>
      </div>
      <div className="absolute bottom-[15%] right-[15%] animate-float" style={{ animationDelay: '2.5s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[-5deg]">
          <Bot className="w-14 h-14 text-neon-cyan" />
        </div>
      </div>
      <div className="absolute top-[30%] left-[45%] animate-float" style={{ animationDelay: '3s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[5deg]">
          <CircuitBoard className="w-12 h-12 text-neon-blue" />
        </div>
      </div>
      <div className="absolute bottom-[35%] right-[40%] animate-float" style={{ animationDelay: '1.8s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[-18deg]">
          <Rocket className="w-12 h-12 text-neon-purple" />
        </div>
      </div>
      <div className="absolute top-[65%] left-[35%] animate-float" style={{ animationDelay: '2.2s' }}>
        <div className="glass-card p-4 rounded-2xl rotate-[12deg]">
          <Satellite className="w-10 h-10 text-neon-cyan" />
        </div>
      </div>

      {/* Comic burst effects */}
      <div className="absolute top-[20%] left-[30%]">
        <div className="relative">
          <Zap className="w-20 h-20 text-neon-blue/30 animate-flicker" />
        </div>
      </div>
      <div className="absolute bottom-[25%] right-[25%]">
        <Zap className="w-16 h-16 text-neon-purple/30 animate-flicker" style={{ animationDelay: '1s' }} />
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-neon-blue/20 to-transparent animate-scan-line" />
      </div>
    </div>
  );
}
