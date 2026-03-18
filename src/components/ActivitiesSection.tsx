import { motion } from 'framer-motion';
import { Utensils, Mountain, Tent, Bus } from 'lucide-react';

const ActivitiesSection = () => {
  const activities = [
    {
      title: "Gastronomia Regional",
      description: "Experimente a autêntica comida nordestina: buchada, bode assado e queijo coalho.",
      icon: <Utensils size={32} />
    },
    {
      title: "Trilhas Ecológicas",
      description: "Aventure-se nas rotas da zona rural, desbravando o relevo único do agreste.",
      icon: <Mountain size={32} />
    },
    {
      title: "Turismo Rural e Camping",
      description: "Experimente a vida no campo se hospedando em fazendas charmosas da região.",
      icon: <Tent size={32} />
    },
    {
      title: "Passeios Culturais",
      description: "Conheça o centro histórico e visite os espaços dedicados às filarmônicas.",
      icon: <Bus size={32} />
    }
  ];

  return (
    <section className="py-24 bg-brand-light text-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/3"
          >
            <h2 className="text-brand-orange font-bold tracking-wider uppercase mb-2">O Que Fazer</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6 leading-tight">
              Aventuras e Sabores
            </h3>
            <p className="text-gray-700 text-lg mb-8">
              De manhãs radicais explorando as belezas naturais a roteiros tranquilos desfrutando da rica gastronomia local. Descubra sua atividade preferida em Belo Jardim.
            </p>
            <button className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-xl">
              Ver roteiro completo
            </button>
          </motion.div>

          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {/* Background design accents */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl -z-10"></div>
            
            {activities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:bg-green-50/50 transition-all group cursor-pointer"
              >
                <div className="text-brand-orange mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-brand-dark mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
