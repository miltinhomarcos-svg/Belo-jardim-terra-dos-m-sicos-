
import { motion } from 'framer-motion';
import { Music, MapPin, Heart, Users } from 'lucide-react';

const AboutSection = () => {
  const cards = [
    {
      icon: <Music className="text-brand-orange" size={32} />,
      title: 'Terra dos Músicos',
      description: 'Reconhecida nacionalmente pela sua profunda tradição musical e berço de grandes instrumentistas.'
    },
    {
      icon: <MapPin className="text-brand-blue" size={32} />,
      title: 'Coração de PE',
      description: 'Localização privilegiada no agreste pernambucano, conectando a capital ao sertão.'
    },
    {
      icon: <Heart className="text-brand-red" size={32} />,
      title: 'Cultura Viva',
      description: 'Uma cidade que respira arte, com festividades e expressões culturais vibrantes o ano inteiro.'
    },
    {
      icon: <Users className="text-brand-green" size={32} />,
      title: 'Povo Acolhedor',
      description: 'Hospitalidade incomparável, onde cada visitante é recebido com alegria e calor humano.'
    }
  ];

  return (
    <section id="sobre" className="py-24 bg-brand-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-brand-orange font-bold tracking-wider uppercase mb-2">Sobre a Cidade</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6 leading-tight">
              Onde a história encontra a melodia
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Fundada no século XIX, Belo Jardim é um município brasileiro do estado de Pernambuco que carrega orgulhosamente o título de "Terra dos Músicos". A cidade não apenas possui uma das mais antigas bandas filarmônicas do estado, mas também respira música em cada esquina, formando gerações de talentos espalhados por todo o país.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Além de sua importância artística, o município se destaca pelo seu forte comércio, belas paisagens do agreste e uma qualidade de vida invejável, sendo um refúgio perfeito para quem busca tranquilidade, cultura e boa gastronomia.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cards.map((card, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3"
                >
                  <div className="bg-brand-light w-14 h-14 rounded-full flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h4 className="font-bold text-brand-dark text-xl">{card.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image composition */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative min-h-[500px] w-full"
          >
            {/* Main image */}
            <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1596422846543-75c6eb285155?q=80&w=2670&auto=format&fit=crop" alt="Belo Jardim Paisagem" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply"></div>
            </div>
            {/* Secondary image overlapping */}
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl border-8 border-brand-light">
               <img src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=2572&auto=format&fit=crop" alt="Belo Jardim Cultura" className="w-full h-full object-cover" />
            </div>
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center gap-4"
            >
              <div className="bg-brand-yellow/20 text-brand-orange w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                🎶
              </div>
              <div>
                <p className="font-bold text-brand-dark">Tradição Secular</p>
                <p className="text-xs text-gray-500">Desde o século XIX</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
