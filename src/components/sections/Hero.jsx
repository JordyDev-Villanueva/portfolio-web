import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-24">
      <div className="container-custom w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-primary font-semibold mb-4"
            >
              Hola, soy
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              Jordy <span className="text-primary">Villanueva</span>
            </motion.h1>

            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-400 mb-6"
            >
              Full Stack Developer & Data Analyst
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
            >
              Construyo soluciones web completas y analizo datos para resolver problemas reales.
              Especializado en Python (Flask, FastAPI, Pandas, NumPy) y React frontend.
              Microsoft Certified Python Developer. Actualmente estudiando Ing. Sistemas (10º ciclo) - UTP.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Ver Proyectos
                <FaArrowRight />
              </a>

              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all hover:scale-105"
              >
                Descargar CV
                <FaDownload />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-4 mt-12"
            >
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary">10º</h4>
                <p className="text-gray-600 dark:text-gray-400">Ciclo Ing. Sistemas</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary">3+</h4>
                <p className="text-gray-600 dark:text-gray-400">Proyectos</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-primary">MS</h4>
                <p className="text-gray-600 dark:text-gray-400">Certificado</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-3xl"></div>
              <div className="relative w-full h-full rounded-full border-4 border-primary flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                <div className="text-center">
                  <div className="text-8xl mb-4">👨‍💻</div>
                  <p className="text-2xl font-bold text-primary">Full Stack Dev</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
