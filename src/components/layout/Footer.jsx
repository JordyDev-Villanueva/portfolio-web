import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/JordyDev-Villanueva', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/jordy-frank-villanueva-martel-271430337/', label: 'LinkedIn' },
    { icon: <FaEnvelope />, href: 'mailto:jordy.2023.villmar@gmail.com', label: 'Email' },
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
              Full Stack Developer & Data Analyst especializado en Python y React. Construyendo soluciones que impactan.
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
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-primary transition-colors hover:scale-110 transform"
                  aria-label={social.label}
                >
                  {social.icon}
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
