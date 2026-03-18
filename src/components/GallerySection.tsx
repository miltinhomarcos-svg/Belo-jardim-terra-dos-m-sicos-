import { motion } from 'framer-motion';

const GallerySection = () => {
  const photos = [
    { span: "md:col-span-2 md:row-span-2", img: "https://images.unsplash.com/photo-1518991043134-ce96bdcdbc4d?q=80&w=2670&auto=format&fit=crop" },
    { span: "md:col-span-1 md:row-span-1", img: "https://images.unsplash.com/photo-1465847822923-55d5be81119b?q=80&w=2671&auto=format&fit=crop" },
    { span: "md:col-span-1 md:row-span-1", img: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?q=80&w=2670&auto=format&fit=crop" },
    { span: "md:col-span-1 md:row-span-1", img: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=2787&auto=format&fit=crop" },
    { span: "md:col-span-1 md:row-span-1", img: "https://images.unsplash.com/photo-1548625361-ec8536184a1e?q=80&w=2670&auto=format&fit=crop" },
  ];

  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-bold tracking-wider uppercase mb-2">Imagens</h2>
          <h3 className="text-4xl font-display font-bold text-brand-dark">Galeria</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {photos.map((photo, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`rounded-2xl overflow-hidden shadow-sm group cursor-pointer relative ${photo.span} h-full w-full`}
            >
              <img src={photo.img} alt="Galeria Belo Jardim" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
