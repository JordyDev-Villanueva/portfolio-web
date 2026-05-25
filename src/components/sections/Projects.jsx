import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects, categories } from '../../data/projects';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.45 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: 'rgba(13, 21, 42, 0.55)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: project.inProduction
          ? '1px solid rgba(13, 148, 136, 0.25)'
          : '1px solid rgba(255, 255, 255, 0.07)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: project.inProduction
            ? 'linear-gradient(90deg, #0d9488, #14b8a6)'
            : 'linear-gradient(90deg, #6366f1, #8b5cf6)',
        }}
      />

      {/* Glow on hover */}
      <style>{`
        .project-card-${project.id}:hover {
          box-shadow: ${project.inProduction
            ? '0 0 40px rgba(13, 148, 136, 0.15)'
            : '0 0 40px rgba(99, 102, 241, 0.1)'};
          border-color: ${project.inProduction
            ? 'rgba(13, 148, 136, 0.4)'
            : 'rgba(99, 102, 241, 0.3)'} !important;
        }
      `}</style>

      <div className={`project-card-${project.id} flex flex-col flex-1`} style={{ transition: 'box-shadow 0.3s ease' }}>

        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(13,21,42,0.85)] z-10" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-600"
            loading="lazy"
          />

          {/* Badges en imagen */}
          <div className="absolute top-3 left-3 z-20 flex gap-2 flex-wrap">
            {project.inProduction && (
              <span
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  background: 'rgba(6, 78, 59, 0.85)',
                  border: '1px solid rgba(16, 185, 129, 0.4)',
                  color: '#34d399',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                EN PRODUCCIÓN
              </span>
            )}
          </div>

          {/* GitHub / Demo icons top-right */}
          <div className="absolute top-3 right-3 z-20 flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg text-white/70 hover:text-white transition-colors"
                style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
                aria-label="Ver código en GitHub"
              >
                <FaGithub size={15} />
              </a>
            )}
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-white/70 hover:text-primary transition-colors"
              style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
              aria-label="Ver demo"
            >
              <FaExternalLinkAlt size={13} />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Category */}
          <div className="flex items-center justify-between mb-3">
            <span
              className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
              style={{
                background: project.inProduction ? 'rgba(13,148,136,0.12)' : 'rgba(99,102,241,0.12)',
                color: project.inProduction ? '#14b8a6' : '#a5b4fc',
                border: `1px solid ${project.inProduction ? 'rgba(13,148,136,0.2)' : 'rgba(99,102,241,0.2)'}`,
              }}
            >
              {project.category}
            </span>
            {project.subtitle && (
              <span className="text-xs text-gray-500">{project.subtitle}</span>
            )}
          </div>

          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Demo credentials */}
          {project.demoCredentials && (
            <div
              className="mb-4 p-3 rounded-lg text-xs"
              style={{
                background: 'rgba(99, 102, 241, 0.07)',
                border: '1px solid rgba(99, 102, 241, 0.15)',
              }}
            >
              <p className="font-semibold text-indigo-400 mb-1.5 flex items-center gap-1.5">
                🔐 Credenciales de prueba
              </p>
              <p className="text-gray-400">Admin: <span className="text-white font-mono">{project.demoCredentials.admin.user}</span> / <span className="font-mono text-white">{project.demoCredentials.admin.pass}</span></p>
              <p className="text-gray-400">Vendedor: <span className="text-white font-mono">{project.demoCredentials.vendor.user}</span> / <span className="font-mono text-white">{project.demoCredentials.vendor.pass}</span></p>
            </div>
          )}

          {/* Highlights */}
          {project.highlights && (
            <div className="mb-4 space-y-1.5">
              {project.highlights.slice(0, 3).map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-400">{h}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-xs text-gray-400"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-3 border-t border-white/5">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105"
              style={{
                background: project.inProduction
                  ? 'linear-gradient(135deg, #0d9488, #0f766e)'
                  : 'linear-gradient(135deg, #6366f1, #4f46e5)',
                boxShadow: project.inProduction
                  ? '0 4px 15px rgba(13, 148, 136, 0.25)'
                  : '0 4px 15px rgba(99, 102, 241, 0.2)',
              }}
            >
              Ver Demo <FaExternalLinkAlt size={11} />
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-gray-300 hover:text-white transition-all hover:scale-105"
                style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
              >
                Ver Código <FaGithub size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0c1322] to-[#0a0f1e] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="section-badge">Portafolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mis <span className="text-gradient">Proyectos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proyectos reales construidos con tecnologías modernas. Uno en producción con clientes pagando.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'text-white scale-105'
                  : 'text-gray-400 hover:text-white'
              }`}
              style={
                activeCategory === cat
                  ? {
                      background: 'linear-gradient(135deg, #0d9488, #0f766e)',
                      boxShadow: '0 4px 15px rgba(13, 148, 136, 0.3)',
                    }
                  : {
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`grid gap-6 ${
              filtered.length === 1
                ? 'max-w-lg mx-auto'
                : filtered.length === 2
                ? 'md:grid-cols-2 max-w-4xl mx-auto'
                : 'md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No hay proyectos en esta categoría aún.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
