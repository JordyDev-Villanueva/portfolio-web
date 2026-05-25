import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const navLinks = [
  { name: 'Inicio', href: '#home' },
  { name: 'Sobre Mí', href: '#about' },
  { name: 'Historia', href: '#timeline' },
  { name: 'Proyectos', href: '#projects' },
  { name: 'Habilidades', href: '#skills' },
  { name: 'Certificaciones', href: '#certifications' },
  { name: 'Contacto', href: '#contact' },
];

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/JordyDev-Villanueva', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/jordy-frank-villanueva-martel-271430337/', label: 'LinkedIn' },
  { icon: <FaEnvelope />, href: 'mailto:jordy.2023.villmar@gmail.com', label: 'Email' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll shrink effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section detector
  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2 bg-[#0a0f1e]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container-custom section-padding py-0">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="text-xl font-bold tracking-tight"
          >
            <span className="text-primary">Jordy</span>
            <span className="text-white">Dev</span>
            <span className="text-primary">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
                    isActive
                      ? 'text-primary'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/5">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-primary bg-primary/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="flex gap-3 mt-4 px-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-all"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
