import { motion } from 'framer-motion';
import { Camera, Map } from 'lucide-react';

const TourismSection = () => {
  const places = [
    {
      name: "Mirante do Cruzeiro de Serra do Vento",
      description: "Vista panorâmica deslumbrante e contato direto com a natureza de nossa serra.",
      image: "/mirante de serra do ventos.jpg"
    },
    {
      name: "Cachoeira do Bitury",
      description: "Um oásis de águas refrescantes cercado por vegetação exuberante.",
      image: "/Cachoeira do Bitury.jpg"
    },
    {
      name: "Igreja Matriz de N. Sra. da Conceição",
      description: "Símbolo de fé com arquitetura imponente e bela iluminação noturna.",
      image: "/Igreja matriz nossa senhora da conceição.jpg"
    },
    {
      name: "Praça da Nossa Senhora da Conceição",
      description: "O coração da cidade, um local arborizado, iluminado e perfeito para passeios familiares.",
      image: "/Praça da nossa senhora da conceição.jpg"
    }
  ];

  return (
    <section id="turismo" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-orange font-bold tracking-wider uppercase mb-2"
            >
              Pontos Turísticos
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-4"
            >
              Belezas de Belo Jardim
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg"
            >
              Nossa cidade oferece cenários encantadores que misturam história, natureza e espiritualidade.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 md:mt-0"
          >
            <button className="flex items-center gap-2 font-bold text-brand-orange hover:text-brand-dark transition-colors">
              <Map size={20} />
              Ver mapa turístico
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {places.map((place, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group bg-brand-light rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-brand-orange transform scale-50 group-hover:scale-100 transition-transform duration-300">
                     <Camera size={24} />
                   </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-xl text-brand-dark mb-2 line-clamp-1">{place.name}</h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{place.description}</p>
                <button className="text-sm font-bold text-brand-orange group-hover:text-brand-yellow transition-colors flex items-center gap-1">
                  Saiba mais <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourismSection;
