
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image/Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-green/30 via-white/40 to-white/95 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2670&auto=format&fit=crop" 
          alt="Músicos tocando" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <span className="bg-brand-yellow/90 text-brand-dark px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase">
            Visite Pernambuco
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-brand-dark mb-6 leading-tight drop-shadow-sm"
        >
          Belo Jardim: <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-orange">A Terra dos Músicos</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-800 max-w-3xl mb-12 font-medium"
        >
          Descubra cultura, tradição e experiências únicas no coração de Pernambuco.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#sobre" className="px-8 py-4 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl flex items-center justify-center">
            Explorar a cidade
          </a>
          <a href="#turismo" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl flex items-center justify-center">
            Ver atrações
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1, repeat: Infinity }}
        className="absolute bottom-10 z-10 flex flex-col items-center"
      >
        <span className="text-gray-500 text-sm mb-2 font-medium uppercase tracking-widest">Role para descobrir</span>
        <ChevronDown className="text-brand-green" size={32} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
