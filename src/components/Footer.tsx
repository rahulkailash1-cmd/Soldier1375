import { SITE_CONFIG } from '../config';
import { Youtube, BookOpen, ShoppingBag, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-neon-blue/20 mt-20">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-800/80 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <span className="font-orbitron font-bold text-lg text-white">
              LONE<span className="text-neon-blue">SOLDIER</span>
            </span>
            <p className="mt-2 font-rajdhani text-sm text-gray-400">
              Technology. Gaming. Stories. One Community.
            </p>
          </div>
          {/* Quick links */}
          <div>
            <h4 className="font-rajdhani font-bold text-sm uppercase tracking-widest text-neon-blue mb-3">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {['Home', 'Blog', 'Store', 'About', 'Contact'].map((l) => (
                <span key={l} className="font-rajdhani text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">
                  {l}
                </span>
              ))}
            </div>
          </div>
          {/* Social */}
          <div>
            <h4 className="font-rajdhani font-bold text-sm uppercase tracking-widest text-neon-orange mb-3">
              Connect
            </h4>
            <div className="flex gap-3 flex-wrap">
              <a href={SITE_CONFIG.youtubeUrl} target="_blank" rel="noopener noreferrer"
                 className="glass p-2 rounded-lg hover:border-red-500/50 transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5 text-red-500" />
              </a>
              <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer"
                 className="glass p-2 rounded-lg hover:border-pink-500/50 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-pink-400" />
              </a>
              <a href={SITE_CONFIG.bloggerUrl} target="_blank" rel="noopener noreferrer"
                 className="glass p-2 rounded-lg hover:border-neon-blue/50 transition-colors" aria-label="Blog">
                <BookOpen className="w-5 h-5 text-neon-blue" />
              </a>
              <a href={SITE_CONFIG.amazonUrl} target="_blank" rel="noopener noreferrer"
                 className="glass p-2 rounded-lg hover:border-neon-orange/50 transition-colors" aria-label="Amazon Store">
                <ShoppingBag className="w-5 h-5 text-neon-orange" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neon-blue/10 pt-6 text-center">
          <p className="font-rajdhani text-sm text-gray-500">
            &copy; 2026 Lone Soldier
            <span className="text-neon-blue mx-2">|</span>
            Powered by <span className="text-neon-orange font-semibold">Arul Jothi Prime Enterprise</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
