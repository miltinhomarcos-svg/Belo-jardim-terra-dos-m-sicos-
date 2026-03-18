import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const NearbyCitiesSection = () => {
  const cities = [
    { name: "Caruaru", distance: "50km", desc: "Capital do Forró", img: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2670&auto=format&fit=crop" },
    { name: "Pesqueira", distance: "40km", desc: "Berço da Renda Renascença", img: "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?q=80&w=2600&auto=format&fit=crop" },
    { name: "Gravatá", distance: "100km", desc: "Suiça Pernambucana", img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2641&auto=format&fit=crop" },
  ];

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-bold tracking-wider uppercase mb-2">Explore a Região</h2>
          <h3 className="text-4xl font-display font-bold text-brand-dark mb-4">Cidades Vizinhas</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Aproveite sua estadia para conhecer as maravilhas que cercam Belo Jardim, excelentes para um roteiro bate-volta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cities.map((city, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="group cursor-pointer rounded-2xl overflow-hidden shadow-sm bg-white"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={city.img} alt={city.name} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-xl text-brand-dark">{city.name}</h4>
                  <span className="flex items-center text-xs font-bold text-brand-orange bg-brand-orange/10 px-2 py-1 rounded-full"><MapPin size={12} className="mr-1"/> {city.distance}</span>
                </div>
                <p className="text-gray-600 text-sm font-medium">{city.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyCitiesSection;
