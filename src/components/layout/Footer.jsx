import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaExternalLinkAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/JordyDev-Villanueva', label: 'GitHub', handle: 'JordyDev-Villanueva' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/jordy-frank-villanueva-martel-271430337/', label: 'LinkedIn', handle: 'Jordy Frank Villanueva' },
    { icon: <FaEnvelope />, href: 'mailto:jordy.2023.villmar@gmail.com', label: 'Email', handle: 'jordy.2023.villmar@gmail.com' },
  ];

  const quickLinks = [
    { label: 'Inicio', href: '#home' },
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Historia', href: '#timeline' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-[#070c17]">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container-custom section-padding py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#home" className="text-2xl font-bold tracking-tight mb-3 block">
              <span className="text-primary">Jordy</span>
              <span className="text-white">Dev</span>
              <span className="text-primary">.</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Python Backend Developer · Full Stack<br />
              Fundador de <a href="https://scarlyfy.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">Scarlyfy</a> — SaaS médico en producción
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              Disponible para roles remotos — Perú · Latam · España
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center gap-1 group"
                  >
                    <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-200 text-primary">›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contacto</h4>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group"
                  aria-label={social.label}
                >
                  <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-primary/10 transition-all text-sm">
                    {social.icon}
                  </span>
                  <span className="text-sm">{social.handle}</span>
                </a>
              ))}

              {/* Scarlyfy link */}
              <a
                href="https://scarlyfy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-primary transition-colors group mt-1"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary text-sm">
                  <FaExternalLinkAlt size={12} />
                </span>
                <span className="text-sm">scarlyfy.com</span>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full border border-green-500/20">live</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p className="flex items-center gap-1.5">
            © {currentYear} Jordy Villanueva · Hecho con
            <FaHeart className="text-red-500 mx-0.5" size={12} />
            usando React + Vite · Desplegado en Vercel
          </p>
          <p className="text-xs">
            Python Backend Developer · Microsoft Certified · UTP 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
