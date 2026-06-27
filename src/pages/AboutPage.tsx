import { Youtube, BookOpen, ShoppingBag, ExternalLink, Cpu, Gamepad2, Feather, Rocket, Star, Zap, Target, Heart } from 'lucide-react';
import { SITE_CONFIG, type PagePath } from '../config';

interface AboutPageProps {
  onNavigate: (page: PagePath) => void;
}

const CONTENT_PILLARS = [
  {
    icon: Cpu,
    title: 'Technology Videos',
    desc: 'In-depth reviews, tutorials, and insights into the latest gadgets, PC components, AI tools, and software.',
    color: 'text-neon-blue',
    bg: 'bg-neon-blue/10',
    border: 'border-neon-blue/25',
  },
  {
    icon: Gamepad2,
    title: 'Gaming Videos',
    desc: 'Game reviews, gameplay walkthroughs, tips, strategies, and everything a gamer needs to level up.',
    color: 'text-neon-orange',
    bg: 'bg-neon-orange/10',
    border: 'border-neon-orange/25',
  },
  {
    icon: Star,
    title: 'Product Reviews',
    desc: 'Honest, detailed reviews of gaming peripherals, tech accessories, and the products we sell in our store.',
    color: 'text-neon-purple',
    bg: 'bg-neon-purple/10',
    border: 'border-neon-purple/25',
  },
  {
    icon: Feather,
    title: 'Fiction Writing',
    desc: 'Original short stories crafted with imagination, heart, and a gift for narrative that keeps readers hooked.',
    color: 'text-neon-cyan',
    bg: 'bg-neon-cyan/10',
    border: 'border-neon-cyan/25',
  },
  {
    icon: Rocket,
    title: 'Science Fiction',
    desc: 'Space operas, AI futures, alien encounters, and futuristic worlds that push the boundaries of imagination.',
    color: 'text-neon-blue',
    bg: 'bg-neon-blue/10',
    border: 'border-neon-blue/25',
  },
  {
    icon: Zap,
    title: 'Adventure Stories',
    desc: 'Action-packed tales of heroes, quests, ancient temples, mysterious lands, and thrilling journeys daily.',
    color: 'text-neon-orange',
    bg: 'bg-neon-orange/10',
    border: 'border-neon-orange/25',
  },
];

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="relative min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-700" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-8" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-neon-blue/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-neon-orange/8 rounded-full blur-[130px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass animate-fade-in">
            <Heart className="w-4 h-4 text-neon-orange" />
            <span className="font-rajdhani font-semibold text-sm text-neon-orange tracking-wider uppercase">
              Creator • Writer • Entrepreneur
            </span>
          </div>

          <h1 className="font-orbitron font-black text-5xl sm:text-6xl md:text-7xl mb-6 animate-slide-up leading-none">
            <span className="text-white">About </span>
            <span className="gradient-text neon-text">Lone</span>
            <br />
            <span className="gradient-text-orange neon-text-orange">Soldier</span>
          </h1>

          <p className="font-rajdhani text-xl text-gray-300 mb-3 max-w-2xl mx-auto">
            "Empowering Every Gamer and Tech Enthusiast Through Knowledge, Innovation, and Inspiring Digital Experiences."
          </p>
          <p className="font-inter text-base text-gray-500 mb-10 max-w-2xl mx-auto">
            Technology. Gaming. Stories. One Community.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a href={SITE_CONFIG.youtubeUrl} target="_blank" rel="noopener noreferrer" className="btn-red">
              <Youtube className="w-5 h-5" /> Subscribe on YouTube
            </a>
            <button onClick={() => onNavigate('store')} className="btn-orange">
              <ShoppingBag className="w-5 h-5" /> Visit Our Store
            </button>
          </div>
        </div>
      </section>

      {/* ── MISSION ── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-700 to-dark-900" />

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-badge glass bg-neon-blue/5 text-neon-blue border border-neon-blue/20 mb-4">
              <Target className="w-3.5 h-3.5" /> Our Mission
            </div>
            <h2 className="font-orbitron font-bold text-3xl sm:text-4xl text-white">
              What Drives <span className="gradient-text">Everything We Do</span>
            </h2>
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-neon-blue/20">
            <p className="font-rajdhani text-lg sm:text-xl leading-relaxed text-gray-300 text-center">
              To <span className="text-neon-blue font-bold">educate</span>,{' '}
              <span className="text-neon-orange font-bold">entertain</span>, and{' '}
              <span className="text-neon-purple font-bold">inspire</span> through technology, gaming, storytelling, and affordable products. We believe quality knowledge and quality products should be accessible to everyone — from beginner gamers to seasoned tech professionals, from casual readers to sci-fi enthusiasts.
            </p>
          </div>

          {/* Mission stats */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { label: 'Educate',  icon: Cpu,    color: 'text-neon-blue'   },
              { label: 'Entertain',icon: Gamepad2,color: 'text-neon-orange' },
              { label: 'Inspire',  icon: Feather, color: 'text-neon-purple' },
            ].map((m) => (
              <div key={m.label} className="glass-card rounded-2xl p-6 text-center">
                <m.icon className={`w-8 h-8 mx-auto mb-2 ${m.color}`} />
                <span className={`font-orbitron font-bold text-base ${m.color}`}>{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT PILLARS ── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-6" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-badge glass bg-neon-orange/5 text-neon-orange border border-neon-orange/20 mb-4">
              <Zap className="w-3.5 h-3.5" /> What I Create
            </div>
            <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl mb-3">
              <span className="gradient-text-orange">Content Pillars</span>
            </h2>
            <p className="font-rajdhani text-lg text-gray-400 max-w-2xl mx-auto">
              Six categories of content, all crafted with passion, precision, and purpose.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONTENT_PILLARS.map((p) => (
              <div key={p.title} className={`glass-card rounded-2xl p-8 border ${p.border} group`}>
                <div className={`inline-flex p-3 rounded-xl ${p.bg} mb-5`}>
                  <p.icon className={`w-7 h-7 ${p.color}`} />
                </div>
                <h3 className="font-orbitron font-bold text-xl text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {p.title}
                </h3>
                <p className="font-rajdhani text-base text-gray-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM LINKS ── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900" />

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-orbitron font-bold text-3xl sm:text-4xl text-white">
              Find Me <span className="gradient-text">Everywhere</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <a href={SITE_CONFIG.youtubeUrl} target="_blank" rel="noopener noreferrer"
               className="glass-card rounded-2xl p-8 text-center border border-red-600/25 hover:border-red-600/60 group block">
              <div className="w-14 h-14 rounded-2xl bg-red-600/15 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600/25 transition-colors">
                <Youtube className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="font-orbitron font-bold text-base text-white mb-1">YouTube</h3>
              <p className="font-rajdhani text-sm text-gray-400 mb-3">Tech & gaming videos</p>
              <span className="inline-flex items-center gap-1 text-red-400 text-sm font-rajdhani">Visit Channel <ExternalLink className="w-3 h-3" /></span>
            </a>

            <a href={SITE_CONFIG.bloggerUrl} target="_blank" rel="noopener noreferrer"
               className="glass-card rounded-2xl p-8 text-center border border-neon-blue/25 hover:border-neon-blue/60 group block">
              <div className="w-14 h-14 rounded-2xl bg-neon-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-blue/20 transition-colors">
                <BookOpen className="w-8 h-8 text-neon-blue" />
              </div>
              <h3 className="font-orbitron font-bold text-base text-white mb-1">Blog</h3>
              <p className="font-rajdhani text-sm text-gray-400 mb-3">Daily fiction stories</p>
              <span className="inline-flex items-center gap-1 text-neon-blue text-sm font-rajdhani">Read Stories <ExternalLink className="w-3 h-3" /></span>
            </a>

            <a href={SITE_CONFIG.amazonUrl} target="_blank" rel="noopener noreferrer"
               className="glass-card rounded-2xl p-8 text-center border border-neon-orange/25 hover:border-neon-orange/60 group block">
              <div className="w-14 h-14 rounded-2xl bg-neon-orange/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-orange/20 transition-colors">
                <ShoppingBag className="w-8 h-8 text-neon-orange" />
              </div>
              <h3 className="font-orbitron font-bold text-base text-white mb-1">Store</h3>
              <p className="font-rajdhani text-sm text-gray-400 mb-3">Gaming & tech products</p>
              <span className="inline-flex items-center gap-1 text-neon-orange text-sm font-rajdhani">Shop Now <ExternalLink className="w-3 h-3" /></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
