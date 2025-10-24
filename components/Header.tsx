
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext.tsx';

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);


export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, translations, isLoading } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  if (isLoading || !translations) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-primary"></header>
    );
  }

  const navLinks = [
    { href: '#services', label: translations.nav_services },
    { href: '#team', label: translations.nav_team },
    { href: '#tech', label: translations.nav_tech },
    { href: '#projects', label: translations.nav_projects },
  ];

  const LanguageSwitcherButton: React.FC<{className?: string}> = ({ className }) => (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm font-bold tracking-wider ${className}`}
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <GlobeIcon className="w-5 h-5" />
      <span>{language === 'en' ? 'AR' : 'EN'}</span>
    </button>
  );

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-glass backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#home" onClick={handleLinkClick} className="flex items-center">
                <img 
                  src="https://res.cloudinary.com/dkrnem01r/image/upload/v1761323826/Layer_1_kfrgl2.png" 
                  alt="EWM Logo" 
                  className="h-14 w-auto"
                />
              </a>
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center">
              <div className="flex items-baseline space-x-4 rtl:space-x-reverse">
                {navLinks.map(link => (
                  <a key={link.href} href={link.href} className="text-gray-300 hover:bg-white/10 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{link.label}</a>
                ))}
              </div>
              <LanguageSwitcherButton className="ms-6" />
            </nav>
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
               <LanguageSwitcherButton className="me-2" />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-20 left-0 right-0 z-40 bg-glass backdrop-blur-xl border-b border-white/10 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-[150%]'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-gray-300 hover:bg-white/10 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center">{link.label}</a>
          ))}
        </div>
      </div>
    </>
  );
};