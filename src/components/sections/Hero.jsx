import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

// ── Terminal animada ──────────────────────────────────────────────────────────
const CODE_LINES = [
  { text: '# scarlyfy/routers/citas.py', color: '#6b7280' },
  { text: '@router.post("/citas/agendar")', color: '#60a5fa' },
  { text: 'async def agendar_cita(data: CitaIn):', color: '#fbbf24' },
  { text: '    cita = await CitaRepo.crear(data)', color: '#e5e7eb' },
  { text: '    await WhatsApp.confirmar(cita)', color: '#e5e7eb' },
  { text: '    await Twilio.recordatorio(cita)', color: '#e5e7eb' },
  { text: '    return {"ok": True, "agendada": "✓"}', color: '#34d399' },
  { text: '', color: '' },
  { text: '# ✓ 57 citas agendadas este mes', color: '#0d9488' },
];

function TerminalCard() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= CODE_LINES.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 380);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10"
      style={{ boxShadow: '0 0 60px rgba(13, 148, 136, 0.15)' }}>
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-white/10">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-gray-400 text-xs font-mono">scarlyfy/routers/citas.py</span>
        <span className="ml-auto flex items-center gap-1.5 text-xs text-green-400">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          production
        </span>
      </div>
      {/* Code lines */}
      <div className="bg-[#0d1117] p-5 font-mono text-sm space-y-1 min-h-[220px]">
        {CODE_LINES.slice(0, visible).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            style={{ color: line.color || 'transparent' }}
            className="leading-relaxed"
          >
            {line.text || ' '}
          </motion.div>
        ))}
        {visible < CODE_LINES.length && (
          <span className="inline-block w-2 h-4 bg-primary animate-pulse align-middle" />
        )}
      </div>
    </div>
  );
}

// ── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: 'S/. 1,340', label: 'MRR Scarlyfy' },
  { value: '235+', label: 'Tests unitarios' },
  { value: '3+', label: 'Proyectos' },
  { value: 'MS', label: 'Certificado' },
];

// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-28 relative overflow-hidden">

      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() > 0.5 ? '4px' : '2px',
              height: Math.random() > 0.5 ? '4px' : '2px',
              background: i % 3 === 0 ? 'rgba(13,148,136,0.4)' : i % 3 === 1 ? 'rgba(20,184,166,0.3)' : 'rgba(52,211,153,0.2)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      <div className="container-custom w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── LEFT: Text ── */}
          <div>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border"
              style={{
                background: 'rgba(16, 185, 129, 0.08)',
                borderColor: 'rgba(16, 185, 129, 0.25)',
                color: '#34d399',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Disponible para trabajar — Remoto / Presencial
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-semibold text-lg mb-2"
            >
              Hola, soy
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            >
              Jordy{' '}
              <span className="text-gradient">Villanueva</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-5 h-16"
            >
              <TypeAnimation
                sequence={[
                  'Python Backend Developer',
                  2000,
                  'Fundador de Scarlyfy · SaaS en Producción',
                  2500,
                  'Full Stack Developer',
                  2000,
                  'FastAPI · React · PostgreSQL',
                  2000,
                  'Microsoft Certified Developer',
                  2000,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg"
            >
              Desarrollador Python especializado en backend con proyectos reales en producción.
              Fundé <a href="https://scarlyfy.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors font-medium">Scarlyfy</a>, SaaS de agendamiento médico con clientes pagando en Perú.
              Construyo APIs REST con FastAPI, PostgreSQL y frontend con React + TypeScript.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a href="#projects" className="btn-primary">
                Ver Proyectos
                <FaArrowRight size={14} />
              </a>
              <a
                href="/CV_Jordy_Frank_Villanueva_Martel.pdf"
                download="CV_Jordy_Frank_Villanueva_Martel.pdf"
                className="btn-outline"
              >
                Descargar CV
                <FaDownload size={14} />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-4 gap-4"
            >
              {STATS.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-primary leading-tight">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Terminal ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="hidden lg:block"
          >
            <TerminalCard />

            {/* Badges flotantes */}
            <motion.div
              className="mt-4 flex flex-wrap gap-2 justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {['FastAPI', 'React', 'PostgreSQL', 'WhatsApp API', 'Docker'].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: 'rgba(13, 148, 136, 0.1)',
                    border: '1px solid rgba(13, 148, 136, 0.2)',
                    color: '#5eead4',
                  }}
                >
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Social quick links */}
            <motion.div
              className="mt-6 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <a
                href="https://github.com/JordyDev-Villanueva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
              >
                <FaGithub /> GitHub
              </a>
              <span className="text-gray-700">·</span>
              <a
                href="https://www.linkedin.com/in/jordy-frank-villanueva-martel-271430337/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <span className="text-gray-700">·</span>
              <a
                href="https://scarlyfy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary hover:text-accent transition-colors text-sm font-medium"
              >
                scarlyfy.com ↗
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
