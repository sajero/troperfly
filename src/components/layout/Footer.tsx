import { Logo } from './Logo';

export const Footer = () => (
  <footer className="py-24 px-6 bg-white border-t border-gray-100 font-sans">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">
      <div className="lg:col-span-2">
        <Logo className="mb-8" />
        <p className="text-base text-gray-500 leading-relaxed font-semibold max-w-xs mb-10">
          Transformando la industria del transporte mediante un mecanismo de confianza estandarizado, medible y trazable.
        </p>
        <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex items-center justify-between">
           <p className="text-xs font-bold uppercase text-troperfly-graphite tracking-tighter">Estado de Plataforma</p>
           <div className="flex items-center gap-2 text-green-500 font-bold uppercase text-[10px] tracking-widest">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Operativa
           </div>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-8 uppercase text-sm tracking-widest border-b border-gray-100 pb-4 font-display">Plataforma</h4>
        <ul className="space-y-5 text-sm text-gray-500 font-bold uppercase tracking-tighter">
          <li><a href="#" className="hover:text-troperfly-blue transition-colors">ScoreDriver IA</a></li>
          <li><a href="#" className="hover:text-troperfly-blue transition-colors">Certificación</a></li>
          <li><a href="#" className="hover:text-troperfly-blue transition-colors">Tercerización</a></li>
          <li><a href="#" className="hover:text-troperfly-blue transition-colors">Asignación Smart</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-8 uppercase text-sm tracking-widest border-b border-gray-100 pb-4 font-display">Proyecto</h4>
        <ul className="space-y-5 text-sm text-gray-500 font-bold uppercase tracking-tighter">
          <li><a href="#" className="hover:text-troperfly-blue transition-colors">Avance 1: Fundamentación</a></li>
          <li><a href="#" className="hover:text-troperfly-blue transition-colors">Gartner Analysis</a></li>
          <li><a href="#" className="hover:text-troperfly-blue transition-colors">Architecture</a></li>
          <li><a href="#" className="hover:text-troperfly-blue transition-colors">Documentation</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-8 uppercase text-sm tracking-widest border-b border-gray-100 pb-4 font-display">Conecta</h4>
        <ul className="space-y-5 text-sm text-gray-500 font-bold uppercase tracking-tighter">
          <li><a href="#" className="hover:text-troperfly-blue transition-colors">Linkedin</a></li>
          <li><a href="#" className="hover:text-troperfly-blue transition-colors">Twitter X</a></li>
          <li><a href="#" className="hover:text-troperfly-blue transition-colors">Medium</a></li>
          <li><a href="#" className="hover:text-troperfly-blue transition-colors">Github</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">
      <p>© 2026 troperfly.ai - IA aplicada al capital humano logístico.</p>
      <div className="flex gap-10">
         <span className="text-troperfly-graphite uppercase">Hecho con el "troperfly Engine"</span>
         <a href="#" className="hover:text-troperfly-blue transition-colors">Privacy Policy</a>
         <a href="#" className="hover:text-troperfly-blue transition-colors">Legal Framework</a>
      </div>
    </div>
  </footer>
);
