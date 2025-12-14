import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaCode, FaRocket } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaGraduationCap />, value: '10º', label: 'Ciclo Ing. Sistemas - UTP' },
    { icon: <FaCertificate />, value: 'MS', label: 'Microsoft Certified' },
    { icon: <FaCode />, value: '3+', label: 'Proyectos Production-Ready' },
    { icon: <FaRocket />, value: '2+', label: 'Años de Experiencia' },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl opacity-20 blur-3xl"></div>

              {/* Photo Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary aspect-[3/4]">
                <img
                  src="/Jordy-Perfil.jpg"
                  alt="Jordy Villanueva"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 border-2 border-primary">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">300+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Ventas/día</p>
                  <p className="text-xs text-gray-500">KATITA-POS</p>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre <span className="text-primary">Mí</span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Soy un <span className="font-semibold text-primary">Full Stack Developer</span> apasionado
              por resolver problemas reales con código. Me especializo en desarrollo backend con Python,
              pero disfruto trabajar en toda la stack cuando construyo algo significativo.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Actualmente estudio <span className="font-semibold">Ingeniería de Sistemas</span> (10º ciclo)
              en la Universidad Tecnológica del Perú, donde combino la teoría académica con proyectos prácticos
              que impactan negocios reales.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Mi enfoque está en crear software que no solo use tecnología moderna, sino que
              <span className="font-semibold text-primary"> resuelva problemas reales de negocio</span>.
              Escribo código limpio, mantenible y escalable.
            </p>

            {/* What I Do */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Lo que hago:</h3>
              <div className="space-y-3">
                {[
                  'Desarrollo backend con Python (Flask, FastAPI, Django)',
                  'Análisis de datos con Python (Pandas, NumPy, Matplotlib)',
                  'Frontend moderno con React + TypeScript',
                  'Visualización de datos y dashboards estadísticos',
                  'Bases de datos relacionales (PostgreSQL) y NoSQL (MongoDB)',
                  'Limpieza, transformación y modelado de datos',
                  'Despliegue en la nube (Railway, Vercel, Supabase)',
                  'Integración de APIs REST y sistemas de autenticación'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-primary text-xl mt-1">✓</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl text-primary mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
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
