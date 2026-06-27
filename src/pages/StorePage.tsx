import { ShoppingBag, ExternalLink, Cpu, Headphones, Gamepad2, Keyboard, Mouse, Car, Plane, ToyBrick, Zap, Tag, Shield, Truck, Star, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config';

const PRODUCTS = [
  { icon: Mouse,      label: 'Gaming Mouse',      color: 'text-neon-blue',   bg: 'bg-neon-blue/10'   },
  { icon: Keyboard,   label: 'RGB Keyboard',       color: 'text-neon-orange', bg: 'bg-neon-orange/10' },
  { icon: Headphones, label: 'Gaming Headsets',    color: 'text-neon-purple', bg: 'bg-neon-purple/10' },
  { icon: Cpu,        label: 'PC Peripherals',     color: 'text-neon-cyan',   bg: 'bg-neon-cyan/10'   },
  { icon: Gamepad2,   label: 'Gaming Accessories', color: 'text-neon-blue',   bg: 'bg-neon-blue/10'   },
  { icon: Car,        label: 'RC Cars',            color: 'text-neon-orange', bg: 'bg-neon-orange/10' },
  { icon: Plane,      label: 'RC Helicopters',     color: 'text-neon-purple', bg: 'bg-neon-purple/10' },
  { icon: ToyBrick,   label: 'Action Figures',     color: 'text-neon-cyan',   bg: 'bg-neon-cyan/10'   },
];

/* ─── Comic Illustration (pure SVG) ─── */
function ComicIllustration() {
  return (
    <div className="relative w-full max-w-3xl mx-auto select-none">
      <svg viewBox="0 0 900 520" className="w-full h-auto drop-shadow-2xl" aria-label="Comic store illustration">
        {/* ── Background sky ── */}
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a0020" />
            <stop offset="100%" stopColor="#06101e" />
          </linearGradient>
          <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1a0e00" />
            <stop offset="100%" stopColor="#0d0700" />
          </linearGradient>
          <radialGradient id="signGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff6a00" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ff6a00" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="glow2">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <rect width="900" height="520" fill="url(#skyGrad)" rx="18" />

        {/* Stars */}
        {[[60,30],[150,55],[250,20],[400,40],[540,25],[670,50],[800,30],[850,70],[100,90],[750,80]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r={1.5+Math.random()*1.5} fill="#fff" opacity={0.5+Math.random()*0.5}/>
        ))}

        {/* Shop building */}
        <rect x="80" y="110" width="740" height="360" rx="4" fill="#0d1a2e" stroke="#00d4ff" strokeWidth="3" />

        {/* Roof */}
        <polygon points="60,115 450,50 840,115" fill="#0a0f1e" stroke="#ff6a00" strokeWidth="3" />
        <polygon points="80,115 450,60 820,115" fill="#06091a" />

        {/* Main sign board */}
        <rect x="200" y="65" width="500" height="60" rx="10" fill="#1a0800" stroke="#ff6a00" strokeWidth="3" />
        <ellipse cx="450" cy="95" rx="240" ry="28" fill="url(#signGlow)" />
        <text x="450" y="102" textAnchor="middle" fontFamily="Orbitron,sans-serif" fontWeight="900" fontSize="22" fill="#ff6a00" filter="url(#glow)">
          Arul Jothi Prime Enterprise
        </text>

        {/* Neon trim lines */}
        <line x1="80" y1="175" x2="820" y2="175" stroke="#00d4ff" strokeWidth="2" opacity="0.6" />
        <line x1="80" y1="180" x2="820" y2="180" stroke="#00d4ff" strokeWidth="1" opacity="0.3" />

        {/* Shop floor */}
        <rect x="80" y="430" width="740" height="40" rx="0" fill="url(#floorGrad)" />
        <line x1="80" y1="430" x2="820" y2="430" stroke="#ff6a00" strokeWidth="2" opacity="0.5" />

        {/* ── LEFT SHELF ── */}
        <rect x="110" y="190" width="180" height="220" rx="4" fill="#0a1220" stroke="#00d4ff" strokeWidth="2" />
        {/* shelf boards */}
        {[0,1,2].map(i=>(
          <rect key={i} x="110" y={250+i*55} width="180" height="6" rx="2" fill="#0d2030" stroke="#00d4ff" strokeWidth="1" opacity="0.7" />
        ))}
        {/* Products on shelves */}
        {/* Row 1 — gaming mice */}
        <rect x="120" y="224" width="36" height="22" rx="5" fill="#00d4ff" />
        <ellipse cx="138" cy="228" rx="6" ry="4" fill="#fff" opacity="0.4" />
        <rect x="162" y="224" width="36" height="22" rx="5" fill="#0080ff" />
        <ellipse cx="180" cy="228" rx="6" ry="4" fill="#fff" opacity="0.4" />
        <rect x="204" y="222" width="32" height="24" rx="5" fill="#00ffcc" />
        {/* Row 2 — keyboards */}
        <rect x="122" y="260" width="72" height="18" rx="3" fill="#ff6a00" />
        {[0,1,2,3,4,5].map(i=><rect key={i} x={125+i*11} y={262} width="9" height="6" rx="1" fill="#fff" opacity="0.5" />)}
        <rect x="202" y="260" width="72" height="18" rx="3" fill="#bf00ff" />
        {[0,1,2,3,4,5].map(i=><rect key={i} x={205+i*11} y={262} width="9" height="6" rx="1" fill="#fff" opacity="0.4" />)}
        {/* Row 3 — headsets */}
        <path d="M125 325 Q138 310 151 325 L151 338 Q145 342 138 340 Q131 342 125 338 Z" fill="#ff6a00" />
        <rect x="133" y="340" width="10" height="12" rx="2" fill="#cc4400" />
        <path d="M175 322 Q188 307 201 322 L201 336 Q195 341 188 339 Q181 341 175 336 Z" fill="#00d4ff" />
        <rect x="183" y="340" width="10" height="12" rx="2" fill="#0088bb" />
        {/* Shelf label */}
        <text x="200" y="418" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="11" fill="#00d4ff">PC &amp; Gaming</text>

        {/* ── RIGHT SHELF ── */}
        <rect x="610" y="190" width="180" height="220" rx="4" fill="#0a1220" stroke="#ff6a00" strokeWidth="2" />
        {[0,1,2].map(i=>(
          <rect key={i} x="610" y={250+i*55} width="180" height="6" rx="2" fill="#2a1000" stroke="#ff6a00" strokeWidth="1" opacity="0.7" />
        ))}
        {/* RC Cars */}
        <rect x="618" y="220" width="50" height="26" rx="6" fill="#ff4500" />
        <circle cx="624" cy="246" r="7" fill="#222" stroke="#ff6a00" strokeWidth="2" /><circle cx="624" cy="246" r="3" fill="#ff6a00" />
        <circle cx="662" cy="246" r="7" fill="#222" stroke="#ff6a00" strokeWidth="2" /><circle cx="662" cy="246" r="3" fill="#ff6a00" />
        <rect x="676" y="218" width="50" height="26" rx="6" fill="#00d4ff" />
        <circle cx="682" cy="244" r="7" fill="#222" stroke="#00d4ff" strokeWidth="2" /><circle cx="682" cy="244" r="3" fill="#00d4ff" />
        <circle cx="720" cy="244" r="7" fill="#222" stroke="#00d4ff" strokeWidth="2" /><circle cx="720" cy="244" r="3" fill="#00d4ff" />
        {/* RC Helicopter */}
        <ellipse cx="647" cy="295" rx="28" ry="12" fill="#bf00ff" />
        <rect x="635" y="283" width="24" height="6" rx="3" fill="#8800cc" />
        <line x1="610" y1="286" x2="685" y2="286" stroke="#bf00ff" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="703" cy="293" rx="22" ry="10" fill="#ff6a00" />
        <line x1="680" y1="290" x2="726" y2="290" stroke="#ff6a00" strokeWidth="3" strokeLinecap="round" />
        {/* Action figures */}
        {[620,650,680,710,740].map((x,i)=>(
          <g key={i}>
            <circle cx={x} cy={342} r={7} fill={['#ff4500','#00d4ff','#bf00ff','#ff6a00','#00ffcc'][i]} />
            <rect x={x-5} y={349} width="10" height="14" rx="2" fill={['#cc2200','#008899','#880099','#cc4400','#00aa88'][i]} />
            <line x1={x-8} y1={353} x2={x-12} y2={362} stroke={['#ff4500','#00d4ff','#bf00ff','#ff6a00','#00ffcc'][i]} strokeWidth="3" strokeLinecap="round" />
            <line x1={x+8} y1={353} x2={x+12} y2={362} stroke={['#ff4500','#00d4ff','#bf00ff','#ff6a00','#00ffcc'][i]} strokeWidth="3" strokeLinecap="round" />
          </g>
        ))}
        <text x="700" y="418" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="11" fill="#ff6a00">Toys &amp; RC</text>

        {/* ── CENTER DISPLAY ── */}
        {/* Display stand */}
        <rect x="340" y="280" width="220" height="150" rx="6" fill="#0d1a2e" stroke="#00ffcc" strokeWidth="2" />
        <rect x="350" y="290" width="200" height="90" rx="4" fill="#06101e" />
        {/* Screen glow */}
        <rect x="352" y="292" width="196" height="86" rx="3" fill="#001a2e" />
        <text x="450" y="325" textAnchor="middle" fontFamily="Orbitron,sans-serif" fontWeight="700" fontSize="13" fill="#00d4ff" filter="url(#glow)">BEST PRICES</text>
        <text x="450" y="345" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="11" fill="#ff6a00">in the Galaxy! 🚀</text>
        <text x="450" y="365" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="600" fontSize="9" fill="#aaa">arulshopping.com</text>
        {/* Price tag */}
        <rect x="376" y="388" width="148" height="32" rx="16" fill="#ff6a00" />
        <text x="450" y="409" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="800" fontSize="13" fill="#fff">SHOP ON AMAZON →</text>

        {/* ── ALIEN CHARACTER LEFT ── */}
        {/* Body */}
        <ellipse cx="310" cy="380" rx="28" ry="35" fill="#00cc88" stroke="#007755" strokeWidth="2" />
        {/* Head */}
        <ellipse cx="310" cy="338" rx="24" ry="22" fill="#00ff99" stroke="#007755" strokeWidth="2" />
        {/* Eyes */}
        <ellipse cx="302" cy="333" rx="7" ry="9" fill="#000" />
        <ellipse cx="318" cy="333" rx="7" ry="9" fill="#000" />
        <circle cx="304" cy="331" r="3" fill="#00ffff" />
        <circle cx="320" cy="331" r="3" fill="#00ffff" />
        {/* Smile */}
        <path d="M302 344 Q310 350 318 344" stroke="#007755" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Antennae */}
        <line x1="304" y1="316" x2="298" y2="300" stroke="#00cc88" strokeWidth="2" /><circle cx="297" cy="299" r="4" fill="#00ffff" />
        <line x1="316" y1="316" x2="322" y2="300" stroke="#00cc88" strokeWidth="2" /><circle cx="323" cy="299" r="4" fill="#00ffff" />
        {/* Arms */}
        <line x1="282" y1="370" x2="265" y2="385" stroke="#00cc88" strokeWidth="8" strokeLinecap="round" />
        <line x1="338" y1="370" x2="355" y2="358" stroke="#00cc88" strokeWidth="8" strokeLinecap="round" />
        {/* Legs */}
        <line x1="300" y1="412" x2="292" y2="430" stroke="#00cc88" strokeWidth="9" strokeLinecap="round" />
        <line x1="320" y1="412" x2="328" y2="430" stroke="#00cc88" strokeWidth="9" strokeLinecap="round" />
        {/* Shopping bag */}
        <rect x="346" y="350" width="26" height="28" rx="4" fill="#ff6a00" stroke="#cc4400" strokeWidth="2" />
        <path d="M350 350 Q350 344 359 344 Q368 344 368 350" fill="none" stroke="#cc4400" strokeWidth="2" />
        <text x="359" y="367" textAnchor="middle" fontSize="10" fill="#fff">🛒</text>

        {/* Speech bubble — alien */}
        <rect x="215" y="290" width="150" height="38" rx="12" fill="#fff" stroke="#222" strokeWidth="2.5" />
        <polygon points="300,328 290,345 315,328" fill="#fff" stroke="#222" strokeWidth="2" />
        <text x="290" y="308" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="10.5" fill="#111">Best Prices</text>
        <text x="290" y="322" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="10.5" fill="#ff6a00">in the Galaxy! 🌟</text>

        {/* ── ROBOT CHARACTER RIGHT ── */}
        {/* Body */}
        <rect x="565" y="358" width="56" height="56" rx="8" fill="#0066cc" stroke="#003888" strokeWidth="2" />
        {/* Head */}
        <rect x="570" y="325" width="46" height="36" rx="6" fill="#0088ff" stroke="#003888" strokeWidth="2" />
        {/* Visor */}
        <rect x="576" y="332" width="34" height="14" rx="4" fill="#001a3a" />
        <rect x="578" y="334" width="14" height="10" rx="2" fill="#ff0000" opacity="0.8" />
        <rect x="596" y="334" width="12" height="10" rx="2" fill="#ff0000" opacity="0.8" />
        {/* Antenna */}
        <line x1="593" y1="325" x2="593" y2="308" stroke="#0088ff" strokeWidth="3" />
        <circle cx="593" cy="305" r="5" fill="#00d4ff" filter="url(#glow)" />
        {/* Arms */}
        <rect x="540" y="362" width="24" height="10" rx="5" fill="#0066cc" stroke="#003888" strokeWidth="1.5" />
        <rect x="621" y="362" width="24" height="10" rx="5" fill="#0066cc" stroke="#003888" strokeWidth="1.5" />
        {/* Legs */}
        <rect x="573" y="414" width="14" height="20" rx="4" fill="#0044aa" />
        <rect x="593" y="414" width="14" height="20" rx="4" fill="#0044aa" />
        {/* Chest lights */}
        {[0,1,2].map(i=><circle key={i} cx={577+i*12} cy={388} r={4} fill={['#ff6a00','#00d4ff','#00ff88'][i]} filter="url(#glow)" />)}
        {/* Speech bubble — robot */}
        <rect x="620" y="288" width="160" height="38" rx="12" fill="#fff" stroke="#222" strokeWidth="2.5" />
        <polygon points="650,326 640,343 665,326" fill="#fff" stroke="#222" strokeWidth="2" />
        <text x="700" y="306" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="10.5" fill="#111">Gamers Love</text>
        <text x="700" y="320" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="10.5" fill="#0066cc">This Shop! 🎮</text>

        {/* ── CHILD CHARACTER CENTER-LEFT ── */}
        <circle cx="430" cy="372" r="18" fill="#f5c09a" stroke="#cc8866" strokeWidth="2" />
        <ellipse cx="430" cy="410" rx="16" ry="22" fill="#ff4500" stroke="#cc2200" strokeWidth="2" />
        {/* Eyes/smile */}
        <circle cx="424" cy="370" r="3" fill="#333" />
        <circle cx="436" cy="370" r="3" fill="#333" />
        <path d="M424 378 Q430 384 436 378" stroke="#cc8866" strokeWidth="2" fill="none" strokeLinecap="round" />
        {/* Arms */}
        <line x1="414" y1="405" x2="400" y2="418" stroke="#f5c09a" strokeWidth="7" strokeLinecap="round" />
        <line x1="446" y1="405" x2="460" y2="390" stroke="#f5c09a" strokeWidth="7" strokeLinecap="round" />
        {/* Legs */}
        <line x1="423" y1="430" x2="416" y2="450" stroke="#224488" strokeWidth="8" strokeLinecap="round" />
        <line x1="437" y1="430" x2="444" y2="450" stroke="#224488" strokeWidth="8" strokeLinecap="round" />
        {/* Speech bubble */}
        <rect x="450" y="352" width="160" height="36" rx="12" fill="#fff" stroke="#222" strokeWidth="2.5" />
        <polygon points="460,388 455,400 475,388" fill="#fff" stroke="#222" strokeWidth="2" />
        <text x="530" y="370" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="10.5" fill="#111">Affordable Tech</text>
        <text x="530" y="384" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="10.5" fill="#ff4500">for Everyone! 💡</text>

        {/* Comic action effects */}
        {/* Top-left starburst */}
        {Array.from({length:8},(_,i)=>{
          const a=(i*45)*Math.PI/180;
          return <line key={i} x1={148} y1={160} x2={148+Math.cos(a)*18} y2={160+Math.sin(a)*18} stroke="#ff6a00" strokeWidth="2.5" strokeLinecap="round" />;
        })}
        <circle cx="148" cy="160" r="9" fill="#ff6a00" />
        <text x="148" y="164" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="bold">NEW</text>

        {/* Top-right starburst */}
        {Array.from({length:8},(_,i)=>{
          const a=(i*45)*Math.PI/180;
          return <line key={i} x1={750} y1={158} x2={750+Math.cos(a)*16} y2={158+Math.sin(a)*16} stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" />;
        })}
        <circle cx="750" cy="158" r="8" fill="#00d4ff" />
        <text x="750" y="162" textAnchor="middle" fontSize="6.5" fill="#000" fontWeight="bold">HOT</text>

        {/* ZAP effect */}
        <path d="M490 200 L510 185 L505 200 L525 185" stroke="#ffff00" strokeWidth="3" fill="none" strokeLinecap="round" filter="url(#glow2)" opacity="0.9" />

        {/* Price tags */}
        <rect x="113" y="194" width="55" height="18" rx="9" fill="#ff6a00" />
        <text x="140" y="207" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="10" fill="#fff">SALE!</text>
        <rect x="613" y="194" width="55" height="18" rx="9" fill="#00d4ff" />
        <text x="640" y="207" textAnchor="middle" fontFamily="Rajdhani,sans-serif" fontWeight="700" fontSize="10" fill="#000">HOT! 🔥</text>

        {/* Bottom strip */}
        <rect x="80" y="466" width="740" height="4" rx="2" fill="#ff6a00" opacity="0.5" />
      </svg>
    </div>
  );
}

export default function StorePage() {
  return (
    <div className="relative min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-700" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-8" />
        <div className="absolute top-1/3 left-1/3   w-[500px] h-[300px] bg-neon-orange/12 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-neon-blue/10   rounded-full blur-[130px]" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass animate-fade-in">
            <ShoppingBag className="w-4 h-4 text-neon-orange" />
            <span className="font-rajdhani font-semibold text-sm text-neon-orange tracking-wider uppercase">
              Affordable Technology & Toys
            </span>
          </div>

          <h1 className="font-orbitron font-black text-5xl sm:text-6xl md:text-7xl mb-4 animate-slide-up leading-none">
            <span className="gradient-text-orange neon-text-orange">Arul Jothi</span>
            <br />
            <span className="gradient-text">Prime Enterprise</span>
          </h1>
          <p className="font-rajdhani font-medium text-xl sm:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Affordable Technology, Gaming Accessories & Toys for Everyone.
          </p>

          <a href={SITE_CONFIG.amazonUrl} target="_blank" rel="noopener noreferrer" className="btn-orange text-xl px-10 py-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <ShoppingBag className="w-6 h-6" />
            <span className="font-orbitron">Shop Now on Amazon</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>

      {/* ── COMIC ILLUSTRATION ── */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-700 to-dark-900" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-6" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-badge glass bg-neon-orange/5 text-neon-orange border border-neon-orange/20 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Our Store
            </div>
            <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl mb-3">
              <span className="text-white">Welcome to the </span>
              <span className="gradient-text-orange">Galaxy's Best Shop</span>
            </h2>
            <p className="font-rajdhani text-lg text-gray-400 max-w-2xl mx-auto">
              Aliens, robots, and humans all agree — Arul Jothi Prime Enterprise has the best prices in the universe!
            </p>
          </div>

          {/* Comic frame */}
          <div className="relative rounded-3xl overflow-hidden border-4 border-neon-orange/40 neon-border-orange p-1 bg-dark-800">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-orange via-neon-blue to-neon-orange" />
            <ComicIllustration />
          </div>

          {/* Speech bubble callouts */}
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[
              { quote: 'Best Prices in the Galaxy!', by: 'Green Alien Customer', color: 'border-neon-blue/40 text-neon-blue' },
              { quote: 'Gamers Love This Shop!',     by: 'Robot Shopper',        color: 'border-neon-orange/40 text-neon-orange' },
              { quote: 'Affordable Tech for Everyone!', by: 'Happy Gamer Kid',  color: 'border-neon-purple/40 text-neon-purple' },
            ].map((b) => (
              <div key={b.by} className={`glass-card rounded-2xl p-5 border ${b.color.split(' ')[0]}`}>
                <p className={`font-rajdhani font-bold text-lg mb-2 ${b.color.split(' ')[1]}`}>
                  "{b.quote}"
                </p>
                <p className="font-rajdhani text-sm text-gray-500">— {b.by}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-badge glass bg-neon-blue/5 text-neon-blue border border-neon-blue/20 mb-4">
              <Zap className="w-3.5 h-3.5" /> What We Sell
            </div>
            <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl mb-3">
              <span className="gradient-text">Our Product Range</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {PRODUCTS.map((p) => (
              <div key={p.label} className={`glass-card rounded-2xl p-6 text-center group border ${p.color.replace('text-', 'border-')}/20`}>
                <div className={`inline-flex p-3 rounded-xl ${p.bg} mb-4 group-hover:scale-110 transition-transform`}>
                  <p.icon className={`w-8 h-8 ${p.color}`} />
                </div>
                <p className="font-orbitron font-bold text-sm text-white">{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES ── */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900" />

        <div className="relative max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6 mb-14">
            {[
              { icon: Shield, title: 'Quality Guaranteed', desc: 'Every product carefully selected for reliability and performance.', color: 'text-neon-blue', bg: 'bg-neon-blue/10' },
              { icon: Tag,    title: 'Affordable Prices',  desc: 'Premium products at prices everyone can enjoy.',                   color: 'text-neon-orange', bg: 'bg-neon-orange/10' },
              { icon: Truck,  title: 'Fast Delivery',      desc: 'Quick shipping so you get your order as fast as possible.',       color: 'text-neon-purple', bg: 'bg-neon-purple/10' },
            ].map((f) => (
              <div key={f.title} className="glass-card rounded-2xl p-8 text-center">
                <div className={`inline-flex p-4 rounded-2xl ${f.bg} mb-4`}>
                  <f.icon className={`w-8 h-8 ${f.color}`} />
                </div>
                <h3 className="font-orbitron font-bold text-base text-white mb-2">{f.title}</h3>
                <p className="font-rajdhani text-sm text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Amazon CTA */}
          <div className="glass-card rounded-3xl p-10 text-center border border-neon-orange/30">
            <div className="w-16 h-16 rounded-2xl bg-neon-orange/10 border border-neon-orange/30 flex items-center justify-center mx-auto mb-5">
              <ShoppingBag className="w-8 h-8 text-neon-orange" />
            </div>
            <h3 className="font-orbitron font-bold text-2xl sm:text-3xl text-white mb-3">
              Ready to Shop?
            </h3>
            <p className="font-rajdhani text-lg text-gray-400 mb-7 max-w-xl mx-auto">
              Browse our full collection on Amazon. Quality products at prices you'll love — backed by our commitment to customer satisfaction.
            </p>
            <a href={SITE_CONFIG.amazonUrl} target="_blank" rel="noopener noreferrer" className="btn-orange text-lg px-10 py-4">
              <ShoppingBag className="w-6 h-6" />
              <span className="font-orbitron">Shop Now on Amazon</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <p className="mt-4 font-rajdhani text-xs text-gray-600">
              * Amazon link will be updated when storefront is ready
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT BRAND ── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-badge glass bg-neon-orange/5 text-neon-orange border border-neon-orange/20 mb-4">
              <Star className="w-3.5 h-3.5" /> About Our Brand
            </div>
            <h2 className="font-orbitron font-bold text-3xl sm:text-4xl text-white">
              <span className="gradient-text-orange">Quality You Can Trust</span>
            </h2>
          </div>
          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-neon-orange/20">
            <p className="font-rajdhani text-lg sm:text-xl leading-relaxed text-gray-300 first-letter:text-5xl first-letter:font-orbitron first-letter:font-bold first-letter:gradient-text-orange first-letter:mr-2 first-letter:float-left">
              Arul Jothi Prime Enterprise is your trusted destination for quality
              PC peripherals, gaming accessories, toys, RC toys, and comic books
              at affordable prices. We are committed to delivering reliable
              products that combine performance, durability, and exceptional value
              for money. Whether you're a gamer, technology enthusiast, collector,
              or shopping for the perfect toy, we offer carefully selected
              products designed to enhance your gaming, work, and entertainment
              experience. Customer satisfaction, product quality, and competitive
              pricing are at the heart of everything we do. Our mission is to make
              premium technology and exciting entertainment products accessible
              to everyone. Shop with confidence and discover innovation, fun,
              performance, and value in every purchase. Choose Arul Jothi Prime
              Enterprise for quality you can trust and prices you'll love.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
