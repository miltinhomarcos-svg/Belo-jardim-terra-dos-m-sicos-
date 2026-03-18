import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section id="contato" className="py-32 relative overflow-hidden bg-brand-blue">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560064227-2b73bc35ac24?q=80&w=2574&auto=format&fit=crop')", filter: "opacity(0.1) saturate(0.5)"}}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 to-brand-dark/90"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-display font-bold text-white mb-6 drop-shadow-md"
        >
          Venha conhecer <span className="text-brand-yellow">Belo Jardim!</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl mx-auto font-medium"
        >
          Prepare as malas e venha se encantar com a Terra dos Músicos, onde a hospitalidade pernambucana encontra a tradição e a natureza.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="bg-brand-yellow hover:bg-white text-brand-dark px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl w-full sm:w-auto">
            Planejar visita
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl w-full sm:w-auto">
            Entrar em contato
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
