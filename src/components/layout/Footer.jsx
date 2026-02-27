import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/JordyDev-Villanueva', label: 'GitHub', handle: 'JordyDev-Villanueva' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/jordy-frank-villanueva-martel-271430337/', label: 'LinkedIn', handle: 'Jordy Villanueva' },
    { icon: <FaEnvelope />, href: 'mailto:jordy.2023.villmar@gmail.com', label: 'Email', handle: 'jordy.2023.villmar@gmail.com' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Jordy<span className="text-primary">Dev</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-400">
              Python Backend Developer Jr. especializado en Flask, FastAPI y Django. Disponible para trabajo remoto.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { label: 'Inicio', href: '#home' },
                { label: 'Sobre Mí', href: '#about' },
                { label: 'Proyectos', href: '#projects' },
                { label: 'Habilidades', href: '#skills' },
                { label: 'Certificaciones', href: '#certifications' },
                { label: 'Contacto', href: '#contact' }
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociales</h4>
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
                  <span className="text-xl group-hover:scale-110 transform transition-transform">
                    {social.icon}
                  </span>
                  <span className="text-sm">{social.handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Jordy Villanueva. Hecho con <FaHeart className="text-red-500" /> usando React + Vite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
