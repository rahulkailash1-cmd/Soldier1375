import { BookOpen, ExternalLink, Sparkles, Feather, Compass, Star, Globe, Flame, Zap } from 'lucide-react';
import { SITE_CONFIG } from '../config';

const STORY_CATEGORIES = [
  { title: 'Science Fiction', desc: 'Journey to distant galaxies, encounter alien civilizations, and explore the frontiers of technology.', icon: Globe,   color: 'text-neon-blue',   badge: 'bg-neon-blue/10 text-neon-blue',   border: 'border-neon-blue/30'   },
  { title: 'Epic Adventures',  desc: 'Heroes, quests, ancient temples, treasure maps, and thrilling journeys across mysterious lands.',  icon: Compass, color: 'text-neon-orange', badge: 'bg-neon-orange/10 text-neon-orange', border: 'border-neon-orange/30' },
  { title: 'Fantasy Worlds',   desc: 'Dragons, magic forests, enchanted kingdoms, and worlds where the impossible becomes reality.',       icon: Sparkles,color: 'text-neon-purple', badge: 'bg-neon-purple/10 text-neon-purple', border: 'border-neon-purple/30' },
  { title: 'Mystery & Suspense',desc: 'Dark secrets, unexpected twists, gripping mysteries, and stories that keep you on the edge.',    icon: Star,    color: 'text-neon-cyan',   badge: 'bg-neon-cyan/10 text-neon-cyan',     border: 'border-neon-cyan/30'   },
  { title: 'Space Exploration', desc: 'Astronauts, black holes, alien worlds, interstellar travel, and the wonders of the universe.',    icon: Flame,   color: 'text-neon-pink',   badge: 'bg-neon-pink/10 text-neon-pink',     border: 'border-neon-pink/30'   },
  { title: 'Daily Stories',    desc: 'A brand new original story published every single day. Never run out of things to read.',          icon: Feather, color: 'text-neon-blue',   badge: 'bg-neon-blue/10 text-neon-blue',     border: 'border-neon-blue/30'   },
];

export default function BlogPage() {
  return (
    <div className="relative min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-700" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-8" />

        {/* Glow */}
        <div className="absolute top-1/3 left-1/4  w-[500px] h-[300px] bg-neon-purple/12 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-neon-blue/10   rounded-full blur-[130px]" />

        {/* Floating icons */}
        <div className="hidden lg:block absolute top-[20%] left-[7%]  animate-float"><div className="glass p-4 rounded-2xl rotate-[-12deg]"><BookOpen className="w-10 h-10 text-neon-purple" /></div></div>
        <div className="hidden lg:block absolute top-[25%] right-[8%] animate-float" style={{ animationDelay: '1s' }}><div className="glass p-4 rounded-2xl rotate-[14deg]"><Compass className="w-12 h-12 text-neon-orange" /></div></div>
        <div className="hidden lg:block absolute bottom-[20%] left-[9%] animate-float" style={{ animationDelay: '2s' }}><div className="glass p-4 rounded-2xl rotate-[7deg]"><Star className="w-10 h-10 text-neon-cyan" /></div></div>
        <div className="hidden lg:block absolute bottom-[22%] right-[7%] animate-float" style={{ animationDelay: '1.5s' }}><div className="glass p-4 rounded-2xl rotate-[-15deg]"><Sparkles className="w-10 h-10 text-neon-blue" /></div></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Text */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass animate-fade-in">
                <Feather className="w-4 h-4 text-neon-purple" />
                <span className="font-rajdhani font-semibold text-sm text-neon-purple tracking-wider uppercase">Daily Fiction & Sci-Fi Stories</span>
              </div>

              <h1 className="font-orbitron font-black text-5xl sm:text-6xl md:text-7xl mb-6 leading-none animate-slide-up">
                <span className="gradient-text-warm">Daily</span>
                <br />
                <span className="gradient-text">Fiction</span>
                <br />
                <span className="text-white text-4xl sm:text-5xl">&amp; Sci-Fi Stories</span>
              </h1>

              <p className="font-rajdhani text-lg text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                I publish original fictional stories, science fiction adventures, mystery stories, and exciting adventures every day. Discover imaginative worlds, unforgettable characters, and thrilling journeys.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <a href={SITE_CONFIG.bloggerUrl} target="_blank" rel="noopener noreferrer" className="btn-neon">
                  <BookOpen className="w-5 h-5" />
                  Read My Blog
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Hero image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative rounded-3xl overflow-hidden border-2 border-neon-purple/30 group neon-border-purple">
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 via-transparent to-neon-blue/20 z-10 pointer-events-none" />
                <img
                  src={SITE_CONFIG.blogHeroImage}
                  alt="Blog adventure artwork"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-20 glass px-3 py-1 rounded-full">
                  <span className="font-rajdhani font-bold text-xs text-neon-purple uppercase tracking-wider">Featured</span>
                </div>
              </div>
              {/* Floating decorations */}
              <div className="absolute -top-4 -left-4 glass p-3 rounded-xl animate-float">
                <Compass className="w-8 h-8 text-neon-orange" />
              </div>
              <div className="absolute -bottom-4 -right-4 glass p-3 rounded-xl animate-float" style={{ animationDelay: '1.2s' }}>
                <Zap className="w-8 h-8 text-neon-blue" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STORY CATEGORIES ── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-700 to-dark-900" />
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-8" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="section-badge glass bg-neon-purple/5 text-neon-purple border border-neon-purple/20 mb-4">
              <BookOpen className="w-3.5 h-3.5" /> Story Genres
            </div>
            <h2 className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl mb-3">
              <span className="gradient-text-warm">Worlds Without Limits</span>
            </h2>
            <p className="font-rajdhani text-lg text-gray-400 max-w-2xl mx-auto">
              Every genre, every day. Step into a new story and never look back.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STORY_CATEGORIES.map((cat) => (
              <div key={cat.title} className={`glass-card rounded-2xl p-8 border ${cat.border} group`}>
                <div className={`inline-flex p-3 rounded-xl ${cat.badge.split(' ')[0]} mb-5`}>
                  <cat.icon className={`w-7 h-7 ${cat.color}`} />
                </div>
                <h3 className="font-orbitron font-bold text-xl text-white mb-3 group-hover:text-neon-blue transition-colors">
                  {cat.title}
                </h3>
                <p className="font-rajdhani text-base text-gray-400 leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT + CTA ── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-neon-purple/6 rounded-full blur-[150px]" />

        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="section-badge glass bg-neon-blue/5 text-neon-blue border border-neon-blue/20 mb-4">
              <Feather className="w-3.5 h-3.5" /> About My Stories
            </div>
            <h2 className="font-orbitron font-bold text-3xl sm:text-4xl text-white">
              Where <span className="gradient-text-warm">Imagination Lives</span>
            </h2>
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-neon-purple/20">
            <p className="font-rajdhani text-lg sm:text-xl leading-relaxed text-gray-300 first-letter:text-5xl first-letter:font-orbitron first-letter:font-bold first-letter:gradient-text-warm first-letter:mr-2 first-letter:float-left">
              Welcome to my blog, where imagination knows no limits. I publish
              original fictional, science fiction, and adventure stories every
              day, taking readers on unforgettable journeys through mysterious
              worlds, futuristic civilizations, and thrilling quests. Every story
              is carefully crafted with unique characters, exciting plots, and
              immersive storytelling to inspire readers of all ages. Whether you
              enjoy epic adventures, space exploration, suspense, or
              fantasy-inspired fiction, you'll always find something new to
              explore. My goal is to create engaging stories that entertain,
              spark creativity, and leave a lasting impression. Join our growing
              community of readers and experience a new adventure with every
              post. Follow my blog today and never miss a daily dose of
              imagination and storytelling.
            </p>
          </div>

          <div className="text-center mt-10">
            <a href={SITE_CONFIG.bloggerUrl} target="_blank" rel="noopener noreferrer" className="btn-neon">
              <BookOpen className="w-5 h-5" />
              Read My Blog
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
