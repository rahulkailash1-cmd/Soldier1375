import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage    from './pages/HomePage';
import BlogPage    from './pages/BlogPage';
import StorePage   from './pages/StorePage';
import AboutPage   from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import type { PagePath } from './config';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PagePath>('home');

  useEffect(() => {
    const hash = window.location.hash.replace('#', '') as PagePath;
    if (['home','blog','store','about','contact'].includes(hash)) setCurrentPage(hash);

    const onHash = () => {
      const h = window.location.hash.replace('#', '') as PagePath;
      if (['home','blog','store','about','contact'].includes(h)) setCurrentPage(h);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const handleNavigate = (page: PagePath) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const Page = () => {
    switch (currentPage) {
      case 'home':    return <HomePage    onNavigate={handleNavigate} />;
      case 'blog':    return <BlogPage />;
      case 'store':   return <StorePage />;
      case 'about':   return <AboutPage  onNavigate={handleNavigate} />;
      case 'contact': return <ContactPage />;
      default:        return <HomePage    onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-dark-900 text-gray-100 overflow-x-hidden">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main key={currentPage} className="animate-fade-in">
        <Page />
      </main>
      <Footer />
    </div>
  );
}
