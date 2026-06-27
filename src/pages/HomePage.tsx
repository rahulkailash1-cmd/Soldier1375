import { Youtube, Play, Sparkles, Cpu, Gamepad2, BookOpen, Zap, Star, TrendingUp, Users, Video, Monitor } from 'lucide-react';
import { SITE_CONFIG, type PagePath } from '../config';

interface HomePageProps {
  onNavigate: (page: PagePath) => void;
}

const VIDEO_CARDS = [
  {
    category: 'Tech Review',
    title: 'Latest Tech Reviews',
    desc: 'In-depth analysis of the newest gadgets, PC components, and gaming peripherals hitting the market.',
    icon: Cpu,
    accent: 'neon-blue',
    border: 'border-neon-blue/30',
    iconColor: 'text-neon-blue',
    badgeBg: 'bg-neon-blue/10',
    badgeText: 'text-neon-blue',
  },
  {
    category: 'Gaming',
    title: 'Gaming Videos',
    desc: 'Gameplay walkthroughs, game reviews, tips, tricks, and everything for the hardcore and casual gamer.',
    icon: Gamepad2,
    accent: 'neon-orange',
    border: 'border-neon-orange/30',
    iconColor: 'text-neon-orange',
    badgeBg: 'bg-neon-orange/10',
    badgeText: 'text-neon-orange',
  },
  {
    category: 'Featured',
    title: 'Featured Videos',
    desc: 'Handpicked must-watch content: tutorials, guides, AI tools, PC optimization, and software deep-dives.',
    icon: Star,
    accent: 'neon-purple',
    border: 'border-neon-purple/30',
    iconColor: 'text-neon-purple',
    badgeBg: 'bg-neon-purple/10',
    badgeText: 'text-neon-purple',
  },
];

const STATS = [
  { icon: Users,      label: 'Subscribers',  value: '10K+',  color: 'text-neon-blue' },
  { icon: Video,      label: 'Videos',        value: '200+',  color: 'text-neon-orange' },
  { icon: TrendingUp, label: 'Total Views',   value: '500K+', color: 'text-neon-purple' },
  { icon: Monitor,    label: 'Topics Covered',value: '50+',   color: 'text-neon-cyan' },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="relative min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10" />

        {/* Glow orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-neon-blue/12 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/4 right-1/4   w-[400px] h-[400px] bg-neon-orange/8 rounded-full blur-[130px]" />
        <div className="absolute top-1/4  left-1/5      w-[300px] h-[300px] bg-neon-purple/8 rounded-full blur-[120px]" />

        {/* Floating tech icons */}
        <div className="hidden lg:block absolute top-[18%] left-[8%]  animate-float" style={{ animationDelay: '0s' }}>
          <div className="glass p-4 rounded-2xl rotate-[-10deg]"><Cpu      className="w-10 h-10 text-neon-blue" /></div>
        </div>
        <div className="hidden lg:block absolute top-[22%] right-[9%] animate-float" style={{ animationDelay: '1s' }}>
          <div className="glass p-4 rounded-2xl rotate-[12deg]"><Gamepad2  className="w-12 h-12 text-neon-orange" /></div>
        </div>
        <div className="hidden lg:block absolute bottom-[22%] left-[10%] animate-float" style={{ animationDelay: '2s' }}>
          <div className="glass p-4 rounded-2xl rotate-[8deg]"><BookOpen  className="w-10 h-10 text-neon-purple" /></div>
        </div>
        <div className="hidden lg:block absolute bottom-[18%] right-[8%] animate-float" style={{ animationDelay: '1.5s' }}>
          <div className="glass p-4 rounded-2xl rotate-[-14deg]"><Zap      className="w-10 h-10 text-neon-cyan" /></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass animate-fade-in">
            <Sparkles className="w-4 h-4 text-neon-orange" />
            <span className="font-rajdhani font-semibold text-sm text-neon-orange tracking-wider uppercase">
              Technology • Gaming • Stories
            </span>
          </div>

          {/* Title */}
          <h1 className="font-orbitron font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 animate-slide-up leading-none">
            <span className="gradient-text neon-text">LONE</span>
            <br />
            <span className="gradient-text-orange neon-text-orange">SOLDIER</span>
          </h1>

          {/* Tagline */}
          <p className="font-rajdhani font-medium text-xl sm:text-2xl text-gray-300 mb-4 tracking-wide animate-slide-up" style={{ animationDelay: '0.15s' }}>
            Technology. Gaming. Stories.{' '}
            <span className="text-neon-orange font-bold">One Community.</span>
          </p>
          <p className="font-inter text-sm sm:text-base text-gray-500 mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Empowering Every Gamer and Tech Enthusiast Through Knowledge, Innovation, and Inspiring Digital Experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a href={SITE_CONFIG.youtubeUrl} target="_blank" rel="noopener noreferrer" className="btn-red">
              <Youtube className="w-6 h-6" />
              Subscribe on YouTube
            </a>
            <button onClick={() => onNavigate('store')} className="btn-orange">
              <Sparkles className="w-5 h-5" />
              Visit Our Store
            </button>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-neon-blue/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-blue rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* ── YOUTUBE CTA BANNER ── */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/30 via-dark-800 to-red-950/30" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-5" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-3xl p-10 sm:p-14 border-red-600/20">
            <div className="w-20 h-20 rounded-2xl bg-red-600/20 border border-red-600/40 flex items-center justify-center mx-auto mb-6">
              <Youtube className="w-10 h-10 text-red-500" />
            </div>
            <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
              Watch on <span className="text-red-500">YouTube</span>
            </h2>
            <p className="font-rajdhani text-lg text-gray-300 mb-8 max-w-xl mx-auto">
              Join our growing community. Get the latest tech reviews, gaming content, tutorials, and guides — all on our YouTube channel.
            </p>
            <a
              href={SITE_CONFIG.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red text-xl px-10 py-4"
            >
              <Youtube className="w-7 h-7" />
              <span className="font-orbitron">Subscribe Now – It's Free!</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── VIDEO CATEGORIES ── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-8" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-badge glass bg-neon-blue/5 text-neon-blue border border-neon-blue/20 mb-4">
              <Play className="w-3.5 h-3.5" /> Content Library
            </div>
            <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl mb-3">
              <span className="gradient-text">What We Create</span>
            </h2>
            <p className="font-rajdhani text-lg text-gray-400 max-w-2xl mx-auto">
              Deep-dive tech reviews, gaming walkthroughs, and expert guides — delivered with clarity and passion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VIDEO_CARDS.map((card) => (
              <div key={card.category} className={`glass-card rounded-2xl p-8 border ${card.border} group`}>
                <div className={`inline-flex p-3 rounded-xl ${card.badgeBg} mb-5`}>
                  <card.icon className={`w-7 h-7 ${card.iconColor}`} />
                </div>
                <div className={`section-badge ${card.badgeBg} ${card.badgeText} mb-3 text-xs`}>
                  {card.category}
                </div>
                <h3 className="font-orbitron font-bold text-xl text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {card.title}
                </h3>
                <p className="font-rajdhani text-base text-gray-400 leading-relaxed mb-5">
                  {card.desc}
                </p>
                <a
                  href={SITE_CONFIG.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 font-rajdhani font-semibold text-sm ${card.iconColor} hover:underline`}
                >
                  <Play className="w-4 h-4" /> Watch Videos
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHANNEL STATS ── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900" />

        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="section-badge glass bg-neon-orange/5 text-neon-orange border border-neon-orange/20 mb-4">
              <TrendingUp className="w-3.5 h-3.5" /> Channel Stats
            </div>
            <h2 className="font-orbitron font-bold text-3xl sm:text-4xl text-white">
              Growing <span className="gradient-text-orange">Together</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-6 sm:p-8 text-center border border-white/5">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                <div className={`font-orbitron font-black text-3xl sm:text-4xl mb-1 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="font-rajdhani text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon-blue/8 rounded-full blur-[150px]" />

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl md:text-6xl mb-6">
            <span className="text-white">Join the </span>
            <span className="gradient-text">Community</span>
          </h2>
          <p className="font-rajdhani text-xl text-gray-300 mb-10">
            Subscribe and become part of a community of gamers, tech enthusiasts, and story lovers. New content every week.
          </p>
          <a
            href={SITE_CONFIG.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-red text-lg px-12 py-5"
          >
            <Youtube className="w-6 h-6" />
            Subscribe & Join Our Community
          </a>
        </div>
      </section>
    </div>
  );
}
