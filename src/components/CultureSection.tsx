import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const CultureSection = () => {
  const projects = [
    {
      title: "Filarmônica São Sebastião",
      image: "https://images.unsplash.com/photo-1543842188-755a5de30dd2?q=80&w=2670&auto=format&fit=crop",
      year: "1887"
    },
    {
      title: "Banda Musical Nossa Senhora da Conceição",
      image: "https://images.unsplash.com/photo-1465847822923-55d5be81119b?q=80&w=2671&auto=format&fit=crop",
      year: "1935"
    },
    {
      title: "Instituto Conceição de Moura",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2670&auto=format&fit=crop",
      year: "Atual"
    }
  ];

  return (
    <section id="cultura" className="py-24 bg-green-50 text-brand-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-yellow font-bold tracking-wider uppercase mb-2"
          >
            Cultura & Música
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6 text-brand-dark"
          >
            A Sinfonia de Belo Jardim
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 text-lg"
          >
            As ruas transbordam arte. Da música erudita ao forró pé-de-serra, nossas filarmônicas centenárias e projetos culturais moldam o ritmo de Pernambuco.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-white/5"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-3 inline-block">
                  Desde {project.year}
                </span>
                <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                <div className="flex items-center gap-2 text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <PlayCircle size={20} />
                  <span className="text-sm font-semibold">Conhecer projeto</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
