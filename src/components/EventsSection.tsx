import { motion } from 'framer-motion';
import { Calendar, Music, PartyPopper } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      month: "Janeiro",
      title: "Festa de São Sebastião",
      type: "Religiosa e Tradicional",
      description: "Tradicional festa com procissões, missas e apresentações das filarmônicas.",
      icon: <Calendar className="text-brand-orange" />
    },
    {
      month: "Maio",
      title: "Emancipação Política",
      type: "Cívico",
      description: "Desfiles, apresentações musicais e eventos culturais comemorando o aniversário da cidade.",
      icon: <Music className="text-brand-blue" />
    },
    {
      month: "Setembro",
      title: "Festa de Nossa Senhora das Dores",
      type: "Religiosa",
      description: "Celebração padroeira dos distritos, com barracas típicas e forró.",
      icon: <PartyPopper className="text-brand-red" />
    },
    {
      month: "Dezembro",
      title: "Festa de Nossa Senhora da Conceição",
      type: "Religiosa e Cultural",
      description: "A maior festividade católica do município, marcando o encerramento do ano.",
      icon: <Calendar className="text-brand-yellow" />
    }
  ];

  return (
    <section id="eventos" className="py-24 bg-brand-light relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue font-bold tracking-wider uppercase mb-2"
          >
            Festas & Eventos
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6"
          >
            Calendário Cultural
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-lg"
          >
            Uma cidade viva que celebra suas tradições o ano inteiro. Conheça as principais datas.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-5 md:before:ml-[50%] before:-translate-x-px md:before:translate-x-0 before:w-0.5 before:bg-brand-blue/20">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12 last:mb-0`}
            >
              {/* Marker icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-brand-light bg-brand-dark/5 shadow-md flex-shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 mx-5 md:mx-0 transition-transform group-hover:scale-110">
                {event.icon}
              </div>
              
              {/* Content card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow relative">
                <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-1 block">{event.month}</span>
                <h4 className="text-2xl font-bold text-brand-dark mb-2">{event.title}</h4>
                <span className="inline-block px-3 py-1 bg-brand-blue/10 text-brand-blue text-xs font-semibold rounded-full mb-3">
                  {event.type}
                </span>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
