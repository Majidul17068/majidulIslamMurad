import React, { useState, useEffect } from 'react';
import { Icons } from './ui/Icons';
import { SOCIAL_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map(link => link.href.substring(1));

      // Check if we're at the bottom of the page - activate last section
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
        setActiveSection(navLinks[navLinks.length - 1].href.substring(1));
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // detailed check: if the section top is near the viewport top
          // OR if we are at the very top of page (for 'about' section)
          if (window.scrollY < 100 && section === 'about') {
            setActiveSection('about');
            break;
          }
          if (rect.top >= -150 && rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Run once on mount to set initial state correctly
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Research', href: '#research' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white/80 backdrop-blur-sm py-3'}`}>
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo Area - Properly constrained */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <img
              src="/logo.png"
              alt="Majid - AI Specialist"
              className="h-14 sm:h-20 w-auto object-contain rounded-full shadow-lg border border-slate-100 bg-white p-1.5"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors relative py-1 ${activeSection === link.href.substring(1)
                  ? 'text-primary'
                  : 'text-slate-600 hover:text-primary'
                  }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in" />
                )}
              </a>
            ))}
          </div>

          {/* Right Section: Social Icons + Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="hidden sm:flex text-slate-500 hover:text-primary transition-colors p-1"
              aria-label="Email"
            >
              <Icons.Mail size={18} />
            </a>
            <a
              href={`tel:${SOCIAL_LINKS.phone}`}
              className="hidden sm:flex text-slate-500 hover:text-primary transition-colors p-1"
              aria-label="Call"
            >
              <Icons.Phone size={18} />
            </a>

            <div className="w-px h-4 bg-slate-200 hidden sm:block mx-1"></div>

            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex text-slate-500 hover:text-slate-900 transition-colors p-1"
              aria-label="GitHub Profile"
            >
              <Icons.Github size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex text-slate-500 hover:text-blue-700 transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <Icons.Linkedin size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex text-slate-500 hover:text-blue-600 transition-colors p-1"
              aria-label="Facebook Profile"
            >
              <Icons.Facebook size={18} />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-100"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <Icons.X size={22} /> : <Icons.Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute top-0 right-0 w-72 max-w-[85vw] h-full bg-white shadow-2xl animate-fade-in">
            <div className="pt-16 px-6">
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`block py-3 px-4 text-base font-medium rounded-lg transition-colors ${activeSection === link.href.substring(1)
                      ? 'text-primary bg-primary/5'
                      : 'text-slate-700 hover:text-primary hover:bg-slate-50'
                      }`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wide mb-4">Get in touch</p>
                <div className="space-y-2">
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-primary py-2 px-2 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Icons.Mail size={16} />
                    Email
                  </a>
                  <a
                    href={`tel:${SOCIAL_LINKS.phone}`}
                    className="flex items-center gap-3 text-sm text-slate-600 hover:text-primary py-2 px-2 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <Icons.Phone size={16} />
                    Call
                  </a>
                </div>

                {/* Social Links in Mobile Menu */}
                <div className="flex gap-4 mt-6 pt-4 border-t border-slate-100">
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <Icons.Github size={20} />
                  </a>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 hover:text-blue-700 transition-colors"
                  >
                    <Icons.Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};