import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Logo } from './Logo';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuGroups = [
    {
      name: 'Contexto',
      items: [
        { name: 'Introducción', path: '/introduccion' },
        { name: 'Contexto del Problema', path: '/contexto-problema' },
      ]
    },
    {
      name: 'Análisis',
      items: [
        { name: 'Usuarios', path: '/usuarios' },
        { name: 'Necesidades', path: '/necesidades' },
      ]
    },
    {
      name: 'Técnico',
      items: [
        { name: 'Formulación', path: '/formulacion-tecnica' },
        { name: 'Especificaciones', path: '/especificaciones' },
        { name: 'Concepto', path: '/generacion-conceptual' },
        { name: 'Arquitectura', path: '/arquitectura' },
      ]
    },
    {
      name: 'Cierre',
      items: [
        { name: 'Fundamentación', path: '/fundamentacion-teorica' },
        { name: 'Conclusiones', path: '/conclusiones' },
        { name: 'Referencias', path: '/referencias' },
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || location.pathname !== '/' ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuGroups.map((group) => (
            <div key={group.name} className="relative group/menu">
              <button className="text-[11px] font-bold text-troperfly-graphite uppercase tracking-widest hover:text-troperfly-blue transition-colors flex items-center gap-1 py-2">
                {group.name}
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:translate-y-0 group-hover/menu:pointer-events-auto transition-all">
                <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-4 w-48 flex flex-col gap-2">
                  {group.items.map((item) => (
                    <Link 
                      key={item.path} 
                      to={item.path} 
                      className={`text-[10px] font-bold uppercase tracking-tight hover:text-troperfly-blue transition-colors ${location.pathname === item.path ? 'text-troperfly-blue' : 'text-gray-400'}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <button className="bg-troperfly-graphite text-white ml-4 px-5 py-2.5 rounded-full text-xs font-bold hover:bg-troperfly-blue transition-all active:scale-95 font-display uppercase tracking-widest">
            Demo
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-troperfly-graphite" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-6 md:hidden max-h-[80vh] overflow-y-auto"
          >
            {menuGroups.map((group) => (
              <div key={group.name} className="flex flex-col gap-3">
                <span className="text-[10px] font-bold text-troperfly-blue uppercase tracking-[0.3em] border-b border-gray-50 pb-2">{group.name}</span>
                <div className="flex flex-col gap-3 pl-2">
                  {group.items.map((item) => (
                    <Link 
                      key={item.path} 
                      to={item.path} 
                      onClick={() => setIsOpen(false)}
                      className={`text-sm font-bold font-display uppercase tracking-tighter ${location.pathname === item.path ? 'text-troperfly-blue' : 'text-troperfly-graphite'}`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <button className="bg-troperfly-blue text-white w-full py-4 rounded-xl font-bold font-display uppercase tracking-widest text-xs">
              Pide una Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
