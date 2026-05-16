import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SECTIONS } from '../data/sections';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

export default function SectionDetail() {
  const { sectionId } = useParams();
  const section = SECTIONS.find(s => s.id === sectionId) || SECTIONS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sectionId]);

  const currentIndex = SECTIONS.findIndex(s => s.id === sectionId);
  const nextSection = SECTIONS[currentIndex + 1];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-troperfly-blue transition-colors mb-12 text-sm font-bold uppercase tracking-widest font-display">
          <ChevronLeft size={16} /> Volver al Inicio
        </Link>
        
        <motion.div
          key={sectionId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-troperfly-blue font-bold text-xs uppercase tracking-[0.4em] mb-6 block">Documentación Técnica</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-troperfly-graphite uppercase tracking-tighter font-display leading-[0.9]">
            {section.title}
          </h1>
          <p className="text-2xl text-troperfly-emerald font-medium mb-16 font-display italic">
            {section.subtitle}
          </p>

          <div className="space-y-12">
            {section.content.map((paragraph, index) => (
              <motion.p 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="text-xl text-gray-600 leading-relaxed font-sans"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <div className="mt-24 pt-16 border-t border-gray-100 grid md:grid-cols-2 gap-8">
            {nextSection ? (
              <Link to={`/${nextSection.id}`} className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 group hover:border-troperfly-blue transition-all">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-troperfly-graphite mb-4 font-display group-hover:text-troperfly-blue transition-colors">Siguiente Sección</h3>
                 <p className="text-gray-500 mb-8 font-sans text-lg font-bold">{nextSection.title}</p>
                 <div className="flex items-center gap-3 text-troperfly-blue font-bold uppercase text-sm font-display">
                   Continuar leyendo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </div>
              </Link>
            ) : (
              <Link to="/" className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 group hover:border-troperfly-blue transition-all">
                 <h3 className="text-sm font-bold uppercase tracking-widest text-troperfly-graphite mb-4 font-display">Fin del Documento</h3>
                 <p className="text-gray-500 mb-8 font-sans">Has llegado al final de la documentación preliminar.</p>
                 <div className="flex items-center gap-3 text-troperfly-blue font-bold uppercase text-sm font-display">
                   Volver al Inicio <ChevronLeft size={18} />
                 </div>
              </Link>
            )}
            <div className="p-10 rounded-[3rem] bg-troperfly-graphite text-white">
               <h3 className="text-sm font-bold uppercase tracking-widest text-troperfly-blue mb-4 font-display">Colaboración</h3>
               <p className="text-white/50 mb-8 font-sans">¿Deseas aportar feedback o solicitar una especificación técnica adicional?</p>
               <button className="bg-white text-troperfly-graphite px-8 py-4 rounded-2xl font-bold uppercase text-xs hover:bg-troperfly-blue hover:text-white transition-all font-display">
                 Reporte de Feedback
               </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
