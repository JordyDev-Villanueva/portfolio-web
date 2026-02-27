import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaCheckCircle, FaCertificate, FaMicrosoft, FaTimes } from 'react-icons/fa';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { certifications } from '../../data/certifications';

const CertModal = ({ cert, onClose, getPlatformIcon, getIssuerIcon }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary rounded-full p-2 shadow-lg transition-colors"
            aria-label="Cerrar"
          >
            <FaTimes size={18} />
          </button>

          {/* Certificate Image */}
          <div className="relative h-64 sm:h-80 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-contain p-4 sm:p-6"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML += `
                  <div class="flex items-center justify-center h-full absolute inset-0">
                    <div class="text-center">
                      <div class="text-6xl mb-4">🎓</div>
                      <p class="text-gray-600 dark:text-gray-400">Diploma</p>
                    </div>
                  </div>
                `;
              }}
            />
            {cert.featured && (
              <div className="absolute top-3 left-3 bg-yellow-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-xs font-semibold shadow">
                <FaCertificate /> Featured
              </div>
            )}
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8">
            {/* Issuer + Platform icons */}
            <div className="flex items-center gap-3 mb-4">
              {getIssuerIcon(cert.issuer) && (
                <>
                  <div className="text-3xl text-blue-600">{getIssuerIcon(cert.issuer)}</div>
                  <span className="text-xl text-gray-400">×</span>
                </>
              )}
              <div className={`text-3xl ${cert.platform === 'Udemy' ? 'text-purple-600' : 'text-blue-500'}`}>
                {getPlatformIcon(cert.platform)}
              </div>
            </div>

            {/* Name */}
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
              {cert.title}
            </h3>
            <p className="text-primary font-semibold mb-4">{cert.subtitle}</p>

            {/* Meta info */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Plataforma</p>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{cert.platform}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Fecha</p>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{cert.date}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-3 col-span-2">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Emitido por</p>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">{cert.issuer}</p>
              </div>
            </div>

            {/* Verify button */}
            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition-all hover:scale-105 shadow-lg"
            >
              Verificar Certificado
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const getPlatformIcon = (platform) => {
    const icons = {
      'Coursera': <SiCoursera />,
      'Udemy': <SiUdemy />
    };
    return icons[platform] || null;
  };

  const getIssuerIcon = (issuer) => {
    if (issuer.includes('Microsoft')) return <FaMicrosoft />;
    return null;
  };

  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certificaciones <span className="text-primary">Profesionales</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Certificaciones oficiales que validan mis habilidades en desarrollo Python y análisis de datos.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Certificate Image — clickable */}
              <div
                className="relative h-64 sm:h-80 md:h-96 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700 cursor-pointer group"
                onClick={() => setSelectedCert(cert)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-4 sm:p-6 group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>';
                    e.target.parentElement.innerHTML = `
                      <div class="flex items-center justify-center h-full cursor-pointer">
                        <div class="text-center">
                          <div class="text-4xl sm:text-6xl text-primary mb-4">🎓</div>
                          <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">Certificado</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                {cert.featured && (
                  <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-yellow-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-semibold shadow-lg">
                    <FaCertificate className="text-xs sm:text-sm" /> <span className="hidden sm:inline">Featured</span><span className="sm:hidden">★</span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-gray-900/90 text-primary font-semibold px-4 py-2 rounded-full text-sm shadow-lg">
                    Ver diploma
                  </span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-4 sm:p-6 md:p-8">
                {/* Header with Logos */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    {getIssuerIcon(cert.issuer) && (
                      <>
                        <div className="text-3xl sm:text-4xl text-blue-600">
                          {getIssuerIcon(cert.issuer)}
                        </div>
                        <div className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">×</div>
                      </>
                    )}
                    <div className={`text-3xl sm:text-4xl ${cert.platform === 'Udemy' ? 'text-purple-600' : 'text-blue-500'}`}>
                      {getPlatformIcon(cert.platform)}
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-primary font-semibold mb-4">{cert.subtitle}</p>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6">
                  {cert.description}
                </p>

                {/* Courses List */}
                <div className="mb-6">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="text-primary">📚</span>
                    {cert.courses.length} Cursos Completados:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {cert.courses.map((course, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0 text-xs sm:text-sm" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="mb-6">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-3">Habilidades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 sm:px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-xs sm:text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 border-2 border-primary text-primary rounded-lg text-sm sm:text-base font-semibold hover:bg-primary hover:text-white transition-all hover:scale-105"
                  >
                    Ver Diploma
                    <FaCertificate className="text-xs sm:text-sm" />
                  </button>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-primary text-white rounded-lg text-sm sm:text-base font-semibold hover:bg-secondary transition-all hover:scale-105 shadow-lg"
                  >
                    Verificar
                    <FaExternalLinkAlt className="text-xs sm:text-sm" />
                  </a>
                </div>

                {/* Issuer Info */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <span className="break-words">Emitido por: <strong className="text-gray-900 dark:text-white">{cert.issuer}</strong></span>
                    <span>Plataforma: <strong className="text-gray-900 dark:text-white">{cert.platform}</strong></span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCert && (
        <CertModal
          cert={selectedCert}
          onClose={() => setSelectedCert(null)}
          getPlatformIcon={getPlatformIcon}
          getIssuerIcon={getIssuerIcon}
        />
      )}
    </section>
  );
};

export default Certifications;
