import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaRocket, FaCode } from 'react-icons/fa';

const stats = [
  { icon: <FaRocket />, value: 'Scarlyfy', label: 'SaaS en Producción', color: '#0d9488' },
  { icon: <FaCode />, value: '3+', label: 'Proyectos', color: '#14b8a6' },
  { icon: <FaCertificate />, value: 'MS', label: 'Microsoft Certified', color: '#8b5cf6' },
  { icon: <FaGraduationCap />, value: '2026', label: 'Bachiller UTP', color: '#f59e0b' },
];

const doList = [
  'Fundé y desarrollo Scarlyfy, SaaS médico con clientes pagando en Perú',
  'Desarrollo backend con Python (FastAPI, Flask, Django)',
  'Análisis de datos con Python (Pandas, NumPy, Matplotlib)',
  'Frontend moderno con React + TypeScript + Tailwind',
  'DevOps: Railway, Vercel, GitHub Actions CI/CD',
  'Integración de APIs REST, WhatsApp Business API, Twilio',
  'Bases de datos PostgreSQL con SQLAlchemy y Alembic',
  'Uso de herramientas IA como apoyo en desarrollo (Claude, Copilot)',
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0d1520] to-[#0a0f1e] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Glow blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-3xl" />

              {/* Photo frame */}
              <div
                className="relative rounded-2xl overflow-hidden aspect-[3/4] border border-primary/20"
                style={{ boxShadow: '0 0 40px rgba(13, 148, 136, 0.15)' }}
              >
                <img
                  src="/Jordy-Perfil.jpg"
                  alt="Jordy Villanueva"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                {/* Overlay degradado en la parte inferior */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0f1e]/80 to-transparent" />
                {/* Badge en foto */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
                    style={{
                      background: 'rgba(10, 15, 30, 0.85)',
                      border: '1px solid rgba(13, 148, 136, 0.3)',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white font-medium">Disponible</span>
                    <span className="text-gray-400 ml-auto">La Libertad, Perú</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-badge">Sobre Mí</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Python Dev &{' '}
              <span className="text-gradient">Founder</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-4">
              Soy un <span className="font-semibold text-primary">Python Backend Developer</span> apasionado
              por construir software que resuelve problemas reales de negocio.
            </p>

            <p className="text-gray-400 leading-relaxed mb-4">
              Fundé <a href="https://scarlyfy.com" target="_blank" rel="noopener noreferrer"
                className="font-semibold text-primary hover:text-accent transition-colors">Scarlyfy</a>, SaaS B2B de agendamiento médico actualmente{' '}
              <span className="text-white font-medium">en producción con clientes reales pagando en Perú</span>.
              Combina un bot de WhatsApp, recordatorios automáticos y un dashboard con métricas en tiempo real.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              Egresado de <span className="font-semibold text-white">Ingeniería de Sistemas</span> de la UTP
              (Bachiller abril 2026). Microsoft Certified Python Developer — Coursera.
            </p>

            {/* What I do */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-white mb-3">Lo que hago:</h3>
              <div className="grid grid-cols-1 gap-2">
                {doList.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-2.5"
                  >
                    <span className="text-primary text-sm mt-0.5 flex-shrink-0">▸</span>
                    <span className="text-gray-400 text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card-hover rounded-xl p-4 flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: `${stat.color}18`, color: stat.color }}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
