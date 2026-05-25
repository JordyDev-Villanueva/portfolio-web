import { motion } from 'framer-motion';

// ── Data ──────────────────────────────────────────────────────────────────────
const backendSkills = [
  { name: 'Python',       level: 5, sub: 'Principal lenguaje' },
  { name: 'FastAPI',      level: 5, sub: 'APIs REST en producción' },
  { name: 'Flask',        level: 4, sub: 'Backend KATITA-POS' },
  { name: 'Django',       level: 3, sub: 'ORM + Admin' },
  { name: 'PostgreSQL',   level: 5, sub: 'SQLAlchemy + Alembic' },
  { name: 'JWT / Auth',   level: 4, sub: 'Multi-tenant, roles' },
  { name: 'pytest / TDD', level: 4, sub: '235+ tests passing' },
  { name: 'REST API',     level: 5, sub: 'Diseño & documentación' },
];

const frontendSkills = [
  { name: 'React',          level: 4, sub: 'Hooks, Context, SPA' },
  { name: 'TypeScript',     level: 4, sub: 'Tipado estricto' },
  { name: 'Tailwind CSS',   level: 5, sub: 'Diseño responsivo' },
  { name: 'Vite',           level: 4, sub: 'Bundler moderno' },
  { name: 'Framer Motion',  level: 3, sub: 'Animaciones UI' },
  { name: 'Recharts',       level: 3, sub: 'Dashboards métricas' },
  { name: 'HTML5 / CSS3',   level: 5, sub: 'Base sólida' },
  { name: 'JavaScript',     level: 4, sub: 'ES6+, async/await' },
];

const toolsRow = [
  { name: 'Docker',          icon: '🐳' },
  { name: 'Railway',         icon: '🚂' },
  { name: 'Vercel',          icon: '▲' },
  { name: 'GitHub Actions',  icon: '⚙️' },
  { name: 'Pandas / NumPy',  icon: '🐼' },
  { name: 'WhatsApp API',    icon: '💬' },
  { name: 'Twilio',          icon: '📱' },
  { name: 'Cloudinary',      icon: '☁️' },
  { name: 'Redis',           icon: '🔴' },
  { name: 'Claude AI',       icon: '🤖' },
];

// ── Subcomponentes ────────────────────────────────────────────────────────────
const Dots = ({ level, color }) => (
  <div className="flex gap-0.5 mt-1">
    {[1, 2, 3, 4, 5].map((d) => (
      <span
        key={d}
        className="w-2 h-2 rounded-full transition-all duration-300"
        style={{
          background: d <= level ? color : 'rgba(255,255,255,0.1)',
          boxShadow: d <= level ? `0 0 4px ${color}80` : 'none',
        }}
      />
    ))}
  </div>
);

const SkillRow = ({ skill, index, color, barColor }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.07 }}
    className="flex items-center justify-between group py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
  >
    <div>
      <p className="text-sm font-semibold text-white group-hover:text-opacity-100"
        style={{ color: index === 0 ? 'white' : undefined }}>
        {skill.name}
      </p>
      <p className="text-xs text-gray-500">{skill.sub}</p>
    </div>
    <Dots level={skill.level} color={color} />
  </motion.div>
);

// ── Main Component ────────────────────────────────────────────────────────────
const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0c1322] to-[#0a0f1e] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-badge">Tecnologías</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stack <span className="text-gradient">Completo</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Backend sólido con Python + frontend moderno con React. Construyo el producto completo de punta a punta.
          </p>
        </motion.div>

        {/* Full-Stack badge central */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-10"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold"
            style={{
              background: 'linear-gradient(135deg, rgba(13,148,136,0.15) 0%, rgba(99,102,241,0.15) 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <span className="text-teal-400">Backend</span>
            <span className="text-gray-500">·</span>
            <span
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{ background: 'linear-gradient(135deg, #0d9488, #6366f1)', color: 'white' }}
            >
              Full Stack
            </span>
            <span className="text-gray-500">·</span>
            <span className="text-indigo-400">Frontend</span>
          </div>
        </motion.div>

        {/* ── Dos paneles principales ── */}
        <div className="grid md:grid-cols-2 gap-5 mb-6">

          {/* BACKEND */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(13, 21, 42, 0.6)',
              border: '1px solid rgba(13, 148, 136, 0.25)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Panel header */}
            <div className="px-5 py-4 flex items-center gap-3"
              style={{ borderBottom: '1px solid rgba(13,148,136,0.15)', background: 'rgba(13,148,136,0.06)' }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                style={{ background: 'rgba(13,148,136,0.2)', color: '#0d9488' }}>
                🐍
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Backend Development</h3>
                <p className="text-xs text-teal-400/70">Python · FastAPI · PostgreSQL</p>
              </div>
              <div className="ml-auto">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(13,148,136,0.15)', color: '#0d9488', border: '1px solid rgba(13,148,136,0.3)' }}>
                  Principal
                </span>
              </div>
            </div>

            {/* Skills */}
            <div className="px-3 py-3">
              {backendSkills.map((skill, i) => (
                <SkillRow key={skill.name} skill={skill} index={i} color="#0d9488" />
              ))}
            </div>
          </motion.div>

          {/* FRONTEND */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(13, 21, 42, 0.6)',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Panel header */}
            <div className="px-5 py-4 flex items-center gap-3"
              style={{ borderBottom: '1px solid rgba(99,102,241,0.15)', background: 'rgba(99,102,241,0.06)' }}>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-base"
                style={{ background: 'rgba(99,102,241,0.2)', color: '#818cf8' }}>
                ⚛️
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Frontend Development</h3>
                <p className="text-xs text-indigo-400/70">React · TypeScript · Tailwind</p>
              </div>
              <div className="ml-auto">
                <span className="px-2.5 py-1 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(99,102,241,0.15)', color: '#818cf8', border: '1px solid rgba(99,102,241,0.3)' }}>
                  Avanzado
                </span>
              </div>
            </div>

            {/* Skills */}
            <div className="px-3 py-3">
              {frontendSkills.map((skill, i) => (
                <SkillRow key={skill.name} skill={skill} index={i} color="#6366f1" />
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Tools row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="rounded-2xl px-6 py-5"
          style={{
            background: 'rgba(13, 21, 42, 0.4)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 text-center">
            DevOps · Integraciones · Herramientas
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {toolsRow.map((tool, i) => (
              <motion.span
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-gray-300 cursor-default transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <span>{tool.icon}</span>
                {tool.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* ── Leyenda de nivel ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-600"
        >
          <span className="flex items-center gap-1.5">
            <span className="flex gap-0.5">{[...Array(5)].map((_, i) => <span key={i} className="w-1.5 h-1.5 rounded-full bg-teal-500/80" />)}</span>
            Experto
          </span>
          <span className="flex items-center gap-1.5">
            <span className="flex gap-0.5">{[...Array(4)].map((_, i) => <span key={i} className={`w-1.5 h-1.5 rounded-full ${i < 4 ? 'bg-teal-500/80' : 'bg-white/10'}`} />)}<span className="w-1.5 h-1.5 rounded-full bg-white/10" /></span>
            Avanzado
          </span>
          <span className="flex items-center gap-1.5">
            <span className="flex gap-0.5">{[...Array(3)].map((_, i) => <span key={i} className={`w-1.5 h-1.5 rounded-full ${i < 3 ? 'bg-teal-500/80' : 'bg-white/10'}`} />)}{[...Array(2)].map((_, i) => <span key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />)}</span>
            Intermedio
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
