import { motion } from 'framer-motion';
import { ShieldCheck, HeartPulse, Sun } from 'lucide-react';

const SecuritySection = () => {
  return (
    <section className="py-24 bg-green-50 text-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-green/5 mix-blend-multiply"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <ShieldCheck className="mx-auto text-brand-green mb-6" size={64} />
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight"
          >
            Um lugar perfeito para curtir com a família
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-700 text-xl font-medium max-w-2xl mx-auto mb-16"
          >
            A tranquilidade do interior somada à infraestrutura necessária para receber bem. Belo Jardim se destaca pelos excelentes índices de segurança e qualidade de vida no agreste.
          </motion.p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-brand-dark">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
              <Sun className="mx-auto text-brand-orange mb-3" size={32} />
              <h4 className="font-bold text-lg">Ambiente Tranquilo</h4>
              <p className="text-sm text-gray-600">Paz e sossego típicos do interior</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
              <HeartPulse className="mx-auto text-brand-red mb-3" size={32} />
              <h4 className="font-bold text-lg">Qualidade de Vida</h4>
              <p className="text-sm text-gray-600">Ar puro e contato com a natureza</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
              <ShieldCheck className="mx-auto text-brand-blue mb-3" size={32} />
              <h4 className="font-bold text-lg">Segurança</h4>
              <p className="text-sm text-gray-600">Reconhecida como cidade pacífica</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
