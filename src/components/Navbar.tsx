import { useState, useEffect } from 'react';
import { Youtube, Menu, X } from 'lucide-react';
import { NAV_ITEMS, SITE_CONFIG, type PagePath } from '../config';

interface NavbarProps {
  currentPage: PagePath;
  onNavigate: (page: PagePath) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page: PagePath) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-lg shadow-neon-blue/10' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav('home')} className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-orange rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="relative font-orbitron font-black text-base text-dark-900">L</span>
          </div>
          <span className="font-orbitron font-bold text-base sm:text-lg tracking-wider text-white group-hover:text-neon-blue transition-colors">
            LONE<span className="text-neon-blue">SOLDIER</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNav(item.path)}
              className={`relative font-rajdhani font-semibold text-sm tracking-wide uppercase transition-colors duration-300 ${
                currentPage === item.path
                  ? 'text-neon-blue'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-orange transition-all duration-300 ${
                  currentPage === item.path ? 'w-full' : 'w-0'
                }`}
              />
            </button>
          ))}

          {/* YouTube button */}
          <a
            href={SITE_CONFIG.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600/15 border border-red-600/40 hover:bg-red-600/25 hover:border-red-600/70 transition-all duration-300 group"
            aria-label="Visit YouTube channel"
          >
            <Youtube className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
            <span className="font-rajdhani font-semibold text-sm text-red-400 group-hover:text-red-300">YouTube</span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-neon-blue p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass mx-4 mt-3 rounded-xl p-4 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNav(item.path)}
              className={`text-left font-rajdhani font-semibold text-lg tracking-wide uppercase px-4 py-2 rounded-lg transition-all ${
                currentPage === item.path
                  ? 'text-neon-blue bg-neon-blue/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href={SITE_CONFIG.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600/10 border border-red-600/30 text-red-400 font-rajdhani font-semibold"
          >
            <Youtube className="w-5 h-5" />
            YouTube
          </a>
        </div>
      </div>
    </nav>
  );
}
