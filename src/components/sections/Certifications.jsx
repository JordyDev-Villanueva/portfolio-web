import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaCheckCircle, FaCertificate } from 'react-icons/fa';
import { SiMicrosoft, SiCoursera } from 'react-icons/si';
import { certifications } from '../../data/certifications';

const Certifications = () => {
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
              {/* Certificate Image */}
              <div className="relative h-80 md:h-96 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain p-6"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg"/>';
                    e.target.parentElement.innerHTML = `
                      <div class="flex items-center justify-center h-full">
                        <div class="text-center">
                          <div class="text-6xl text-primary mb-4">🎓</div>
                          <p class="text-gray-600 dark:text-gray-400">Certificado Microsoft</p>
                        </div>
                      </div>
                    `;
                  }}
                />
                {cert.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full flex items-center gap-2 font-semibold shadow-lg">
                    <FaCertificate /> Featured
                  </div>
                )}
              </div>

              {/* Certificate Content */}
              <div className="p-8">
                {/* Header with Logos */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl text-blue-600">
                      <SiMicrosoft />
                    </div>
                    <div className="text-2xl text-gray-700 dark:text-gray-300">×</div>
                    <div className="text-4xl text-blue-500">
                      <SiCoursera />
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-xl text-primary font-semibold mb-4">{cert.subtitle}</p>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {cert.description}
                </p>

                {/* Courses List */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="text-primary">📚</span>
                    {cert.courses.length} Cursos Completados:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {cert.courses.map((course, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Habilidades:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verify Button */}
                <div className="flex gap-4">
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition-all hover:scale-105 shadow-lg"
                  >
                    Verificar Certificado
                    <FaExternalLinkAlt />
                  </a>
                </div>

                {/* Issuer Info */}
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Emitido por: <strong className="text-gray-900 dark:text-white">{cert.issuer}</strong></span>
                    <span>Plataforma: <strong className="text-gray-900 dark:text-white">{cert.platform}</strong></span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
