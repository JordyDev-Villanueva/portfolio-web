import { motion } from 'framer-motion';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-gradient"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container-custom w-full relative z-10">
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-400 mb-6 h-20 md:h-24"
            >
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Data Analyst',
                  2000,
                  'Python Developer',
                  2000,
                  'React Developer',
                  2000,
                ]}
                wrapper="h3"
                speed={50}
                repeat={Infinity}
                className="text-2xl md:text-3xl lg:text-4xl"
              />
            </motion.div>

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

          {/* Image/Illustration with enhanced effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden md:flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              ></motion.div>

              {/* Rotating border effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(45deg, var(--color-primary), var(--color-accent), var(--color-primary))',
                  backgroundSize: '200% 200%',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="absolute inset-1 rounded-full bg-gray-100 dark:bg-gray-800"></div>
              </motion.div>

              {/* Content */}
              <div className="relative w-full h-full rounded-full flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="text-8xl mb-4"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    👨‍💻
                  </motion.div>
                  <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Full Stack Dev
                  </p>
                </div>
              </div>

              {/* Floating tech icons */}
              {['🐍', '⚛️', '🗄️', '📊'].map((icon, i) => (
                <motion.div
                  key={i}
                  className="absolute text-4xl"
                  style={{
                    top: `${[20, 20, 80, 80][i]}%`,
                    left: `${[10, 90, 10, 90][i]}%`,
                  }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
