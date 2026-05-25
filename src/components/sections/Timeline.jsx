import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaRocket, FaCode, FaStar, FaBuilding } from 'react-icons/fa';

const timelineItems = [
  {
    year: '2020',
    title: 'Inicio en UTP',
    description: 'Comencé Ingeniería de Sistemas e Informática en la Universidad Tecnológica del Perú.',
    icon: <FaGraduationCap />,
    color: '#6366f1',
    glow: 'rgba(99, 102, 241, 0.3)',
  },
  {
    year: '2024',
    title: 'Microsoft Python Certificate',
    description: 'Completé el Microsoft Python Development Professional en Coursera — 6 cursos certificados.',
    icon: <FaCertificate />,
    color: '#0d9488',
    glow: 'rgba(13, 148, 136, 0.3)',
  },
  {
    year: '2024',
    title: 'KATITA-POS',
    description: 'Desarrollé mi primer sistema POS completo con Flask + React. 235+ tests unitarios, desplegado en producción.',
    icon: <FaCode />,
    color: '#f59e0b',
    glow: 'rgba(245, 158, 11, 0.3)',
  },
  {
    year: 'Oct 2025',
    title: 'Fundé Scarlyfy',
    description: 'Lancé Scarlyfy, SaaS B2B de agendamiento médico con bot de WhatsApp para clínicas peruanas.',
    icon: <FaRocket />,
    color: '#0d9488',
    glow: 'rgba(13, 148, 136, 0.3)',
    highlight: true,
  },
  {
    year: '2025',
    title: 'Primer cliente pagando',
    description: 'Scarlyfy alcanza clientes reales en producción generando S/. 1,340/mes de ingresos recurrentes.',
    icon: <FaStar />,
    color: '#10b981',
    glow: 'rgba(16, 185, 129, 0.3)',
    highlight: true,
  },
  {
    year: 'Abr 2026',
    title: 'Bachiller UTP',
    description: 'Egresado de Ingeniería de Sistemas e Informática — Universidad Tecnológica del Perú.',
    icon: <FaBuilding />,
    color: '#8b5cf6',
    glow: 'rgba(139, 92, 246, 0.3)',
  },
];

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex items-center gap-0 ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-12`}>
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}
      >
        <div
          className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
            item.highlight ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-white/5 text-gray-400 border border-white/10'
          }`}
        >
          {item.year}
        </div>
        <div
          className="glass-card-hover rounded-xl p-5"
          style={item.highlight ? { borderColor: 'rgba(13,148,136,0.3)' } : {}}
        >
          {item.highlight && (
            <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl"
              style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
            />
          )}
          <h3 className="font-bold text-white mb-1">{item.title}</h3>
          <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
        </div>
      </motion.div>

      {/* Center dot */}
      <div className="w-2/12 flex justify-center relative z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg flex-shrink-0"
          style={{
            background: item.color,
            boxShadow: `0 0 20px ${item.glow}`,
          }}
        >
          {item.icon}
        </motion.div>
      </div>

      {/* Spacer para el lado opuesto */}
      <div className="w-5/12" />
    </div>
  );
};

const Timeline = () => {
  return (
    <section id="timeline" className="section-padding relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge">Trayectoria</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mi <span className="text-gradient">Historia</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Desde la universidad hasta fundar un SaaS con clientes reales.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Línea vertical central */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent transform -translate-x-1/2" />

          {timelineItems.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
