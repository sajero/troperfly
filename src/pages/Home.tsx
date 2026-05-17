import { 
  Truck, 
  Cpu, 
  Route, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight,
  Globe,
  Zap,
  Users,
  CheckCircle2,
  AlertTriangle,
  History,
  Award
} from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ icon: Icon, title, description, index }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="p-8 bg-white border border-gray-100 rounded-[2.5rem] hover:border-troperfly-blue/30 hover:shadow-2xl hover:shadow-troperfly-blue/5 transition-all group"
  >
    <div className="w-14 h-14 rounded-2xl bg-troperfly-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-troperfly-blue" size={28} />
    </div>
    <h3 className="text-xl font-bold mb-3 text-troperfly-graphite font-display">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-sm font-medium font-sans">
      {description}
    </p>
  </motion.div>
);

const UserRole = ({ icon: Icon, role, description }: any) => (
  <div className="flex gap-5 p-7 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
    <div className="shrink-0 w-12 h-12 rounded-2xl bg-troperfly-light flex items-center justify-center group-hover:bg-troperfly-blue transition-colors">
      <Icon className="text-troperfly-blue group-hover:text-white transition-colors" size={24} />
    </div>
    <div>
      <h4 className="font-bold text-troperfly-graphite mb-1 uppercase text-sm tracking-tight font-display">{role}</h4>
      <p className="text-xs text-gray-500 leading-relaxed font-medium font-sans">{description}</p>
    </div>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-troperfly-light font-sans selection:bg-troperfly-blue selection:text-white">
      {/* Hero Section */}
      <section id="intro" className="pt-40 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-troperfly-blue/10 border border-troperfly-blue/20 text-troperfly-blue text-xs font-bold uppercase tracking-widest mb-8">
              <Zap size={14} className="fill-current" /> Certificación y Tercerización 4.0
            </div>
            <h1 className="text-5xl md:text-[5.5rem] font-bold tracking-tighter text-troperfly-graphite mb-10 leading-[0.95] uppercase font-display">
              Asignación <br/>
              <span className="text-troperfly-blue">Confiable</span> <br/>
              con IA.
            </h1>
              <h2 className='text-2xl md:text-5xl font-bold tracking-tighter text-troperfly-graphite mb-10 leading-[0.95] uppercase font-display'>
                  trucker + operator + IA = <br/>
                  <span className='text-troperfly-blue'>troperfly</span>

              </h2>
            <p className="text-xl text-gray-500 mb-12 max-w-xl leading-relaxed font-medium font-sans">
              Diseñamos una plataforma inteligente para la certificación, tercerización y asignación confiable de operadores de transporte de carga.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link to="/introduccion" className="bg-troperfly-graphite text-white px-10 py-5 rounded-2xl font-bold uppercase text-sm flex items-center gap-3 hover:bg-troperfly-blue transition-all group shadow-2xl shadow-troperfly-graphite/20 font-display">
                Ver Documentación <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-troperfly-blue via-troperfly-blue to-troperfly-emerald/20 rounded-[5rem] p-1 shadow-2xl relative z-10">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591768793355-74d7c2d3a37e?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center rounded-[4.8rem] opacity-40 mix-blend-overlay" />
              <div className="h-full w-full bg-white/5 backdrop-blur-3xl rounded-[4.8rem] border border-white/20 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center p-12">
                   <div className="grid grid-cols-2 gap-5 w-full h-full z-20">
                      <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/50 shadow-sm flex flex-col justify-between hover:scale-[1.02] transition-transform">
                        <ShieldCheck className="text-troperfly-blue" size={32} />
                        <div>
                          <p className="text-[11px] font-bold text-troperfly-graphite/40 uppercase tracking-widest mb-1">Nivel de Confianza</p>
                          <p className="text-4xl font-bold text-troperfly-graphite font-display">98.4%</p>
                        </div>
                      </div>
                      <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/50 shadow-sm flex flex-col justify-between translate-y-12 hover:scale-[1.02] transition-transform">
                        <Award className="text-troperfly-emerald" size={32} />
                        <div>
                          <p className="text-[11px] font-bold text-troperfly-graphite/40 uppercase tracking-widest mb-1">Certificación</p>
                          <p className="text-4xl font-bold text-troperfly-graphite font-display">A1+</p>
                        </div>
                      </div>
                      <div className="bg-troperfly-graphite rounded-[2.5rem] p-8 shadow-2xl flex flex-col justify-between -translate-y-6 hover:scale-[1.02] transition-transform">
                        <Cpu className="text-troperfly-blue" size={32} />
                        <div>
                          <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest mb-2 tracking-tighter">Troperfly Score</p>
                          <div className="h-2.5 w-full bg-white/10 rounded-full mt-2 overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: '94%' }}
                              transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                              className="h-full bg-troperfly-blue shadow-[0_0_10px_#1E60FF]" 
                            />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/50 shadow-sm flex flex-col justify-between translate-y-6 hover:scale-[1.02] transition-transform">
                        <History className="text-troperfly-blue" size={32} />
                        <div>
                          <p className="text-[11px] font-bold text-troperfly-graphite/40 uppercase tracking-widest mb-1">Trazabilidad</p>
                          <p className="text-4xl font-bold text-troperfly-graphite font-display">RT-IA</p>
                        </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-troperfly-emerald/10 blur-[120px] rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-troperfly-blue/15 blur-[150px] rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-32 px-6 bg-white border-y border-gray-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7">
            <span className="text-troperfly-emerald font-bold text-xs uppercase tracking-[0.3em] mb-6 block">Fundamentación del Problema</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-10 leading-[1] text-troperfly-graphite uppercase tracking-tighter font-display">
              El operador: El factor <br/> <span className="text-troperfly-emerald">crítico</span> de la cadena.
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed mb-12 font-medium font-sans max-w-2xl">
              La falta de un mecanismo estandarizado, medible y trazable genera una ausencia de confianza que impacta directamente en tus costos operativos y financieros.
            </p>
            <Link to="/contexto-problema" className="inline-flex items-center gap-2 text-troperfly-emerald font-bold uppercase text-sm mb-12 group">
              Leer Contexto del Problema <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { title: "Escasez vs Confiabilidad", desc: "El problema no es solo la falta de choferes, sino la deficiencia en su gestión y evaluación." },
                { title: "Riesgos de Siniestralidad", desc: "Malas prácticas de conducción y falta de monitoreo preventivo elevan el riesgo operativo." },
                { title: "Alta Rotación", desc: "La ausencia de profesionalización formal y planes de carrera claros debilita la retención." },
                { title: "Brecha Documental", desc: "Dificultad constante para validar antecedentes, licencias y perfiles operativos reales." }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="flex gap-4 items-start mb-3">
                    <div className="w-8 h-8 rounded-xl bg-troperfly-emerald/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-troperfly-emerald transition-colors">
                      <AlertTriangle size={16} className="text-troperfly-emerald group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="font-bold text-troperfly-graphite uppercase text-sm tracking-tight font-display">{item.title}</h4>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed font-medium pl-12 font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-gray-50 rounded-[4rem] p-12 border border-gray-100 flex flex-col items-center text-center shadow-inner relative group overflow-hidden">
                <div className="absolute inset-0 bg-troperfly-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center shadow-xl shadow-troperfly-blue/5 mb-10 relative z-10">
                  <Users size={40} className="text-troperfly-blue" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-troperfly-graphite uppercase leading-none relative z-10 font-display">No es solo logística, <br/> es capital humano.</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium relative z-10 leading-[1.6] font-sans">
                  troperfly.ai transforma información dispersa en criterios objetivos para reducir la incertidumbre en la selección y asignación de operadores.
                </p>
                <div className="mt-10 pt-10 border-t border-gray-200 w-full relative z-10">
                   <p className="text-[10px] font-bold uppercase text-troperfly-emerald tracking-widest mb-2 font-sans tracking-tighter">Tu Reto Actual</p>
                   <p className="text-lg font-bold text-troperfly-graphite font-display">Recuperar la Confianza Operativa</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ScoreDriver Section */}
      <section id="score" className="py-32 px-6 bg-troperfly-graphite text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-troperfly-blue opacity-10 blur-[200px] -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-troperfly-blue font-bold text-xs uppercase tracking-[0.4em] mb-6 block">Nuestra Innovación</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter font-display">Troperfly Score</h2>
            <p className="text-white/50 text-xl max-w-2xl mx-auto font-medium font-sans">Un Score de Rendimiento y Confiabilidad construido a partir de variables verificables en tiempo real.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {[
              { label: "Seguridad Vial", icon: ShieldCheck, val: "Historial de accidentes e infracciones" },
              { label: "Eficiencia Operativa", icon: Route, val: "Rendimiento de combustible y Km" },
              { label: "Cumplimiento", icon: CheckCircle2, val: "Ventanas de entrega y tiempos de ruta" },
              { label: "Aptitud Médica", icon: Award, val: "Capacitación y aptitud física validada" }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all cursor-default">
                <item.icon className="text-troperfly-blue mb-8 group-hover:scale-110 transition-transform" size={40} />
                <p className="text-[11px] font-bold text-troperfly-blue uppercase tracking-widest mb-3 tracking-tighter font-sans">{item.label}</p>
                <p className="text-sm font-medium text-white/70 leading-relaxed font-sans">{item.val}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 bg-white/5 rounded-[4rem] p-10 md:p-16 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-troperfly-blue to-transparent opacity-50" />
            <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 rounded-full border-[6px] border-troperfly-blue border-t-transparent animate-spin-slow" />
                <div>
                  <h4 className="text-2xl font-bold uppercase tracking-tight mb-2 font-display">Metodología troperfly</h4>
                  <p className="text-white/40 text-sm font-medium max-w-md leading-relaxed font-sans">
                    Integramos telemetría GPS, validación documental y reportes de incidencia para un cálculo dinámico y honesto.
                  </p>
                </div>
              </div>
              <button className="bg-white text-troperfly-graphite px-10 py-5 rounded-2xl font-bold uppercase text-sm hover:bg-troperfly-blue hover:text-white transition-all shadow-2xl font-display">
                Explorar Variables del Score
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Section */}
      <section id="ecosystem" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="lg:w-[40%] sticky top-40">
              <span className="text-troperfly-blue font-bold text-xs uppercase tracking-[0.3em] mb-6 block">Contexto Colaborativo</span>
              <h2 className="text-5xl font-bold mb-10 text-troperfly-graphite uppercase leading-none tracking-tighter font-display">Actores de la Confiabilidad.</h2>
              <p className="text-xl text-gray-500 leading-relaxed font-medium mb-10 font-sans">
                troperfly.ai no es solo una herramienta, es un sistema-servicio que genera valor para todos los usuarios involucrados.
              </p>
              <Link to="/usuarios" className="inline-flex items-center gap-2 text-troperfly-blue font-bold uppercase text-sm mb-12 group">
                Explorar los Usuarios <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 flex items-center gap-6">
                 <div className="w-14 h-14 bg-troperfly-graphite rounded-2xl flex items-center justify-center shrink-0">
                    <Globe className="text-white" size={28} />
                 </div>
                 <p className="text-sm font-bold text-troperfly-graphite tracking-tight uppercase tracking-tighter font-display">
                   Mercado B2B: Distribución, Manufactura, Retail y E-commerce.
                 </p>
              </div>
            </div>
            <div className="lg:w-[60%] grid sm:grid-cols-2 gap-6">
              <UserRole 
                icon={Truck}
                role="Empresa Contratante"
                description="Reduce su exposición operativa y protege su mercancía con conductores adecuados al nivel de criticidad."
              />
              <UserRole 
                icon={History}
                role="Operador de Carga"
                description="Accede a empleo formal, capacitación y un plan de carrera basado en su reputación laboral verificable."
              />
              <UserRole 
                icon={Cpu}
                role="Coordinador Logístico"
                description="Toma decisiones en tiempo récord sobre asignación, reemplazo y continuidad de la operación."
              />
              <UserRole 
                icon={ShieldCheck}
                role="Seguridad Patrimonial"
                description="Evalúa riesgos de siniestros y incidentes mediante datos técnicos de conducción y antecedentes."
              />
              <UserRole 
                icon={Users}
                role="Área de Talent / HR"
                description="Estandariza perfiles y reduce drásticamente la tasa de rotación mediante métricas de desempeño."
              />
              <UserRole 
                icon={Zap}
                role="punto de Entrega / Cliente"
                description="Obtiene una experiencia de servicio superior con entregas puntuales, correctas y profesionales."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="features" className="py-32 px-6 bg-gray-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <span className="text-troperfly-emerald font-bold text-xs uppercase tracking-[0.3em] mb-6 block">Especificaciones</span>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter uppercase text-troperfly-graphite leading-none font-display">Capacidades del Sistema</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-xl font-medium leading-relaxed font-sans mb-8">
              Un MVP robusto diseñado para la trazabilidad y la profesionalización del oficio.
            </p>
            <Link to="/especificaciones" className="inline-flex items-center gap-2 bg-white text-troperfly-graphite px-8 py-3 rounded-full font-bold uppercase text-xs border border-gray-200 hover:border-troperfly-blue hover:text-troperfly-blue transition-all">
              Especificaciones Técnicas
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureCard 
              icon={Users}
              index={0}
              title="Expediente Digital"
              description="Integración de información documental, operativa y técnica de cada conductor en un perfil único inalterable."
            />
            <FeatureCard 
              icon={Award}
              index={1}
              title="Módulo de Certificación"
              description="Validación de requisitos técnicos, aptitud ocupacional y capacitación por tipo de unidad (Larga distancia, última milla)."
            />
            <FeatureCard 
              icon={Route}
              index={2}
              title="Asignación Predictiva"
              description="Algoritmo que sugiere el operador más apto según el tipo de carga, ruta y restricción operativa del cliente."
            />
            <FeatureCard 
              icon={History}
              index={3}
              title="Trazabilidad Permanente"
              description="Bitácora detallada con evidencia de cada asignación, recomendación y resultado operativo histórico."
            />
            <FeatureCard 
              icon={Zap}
              index={4}
              title="Esquema de Incentivos"
              description="Administración de bonos por eficiencia, rutas preferentes y metas de cumplimiento basadas en el Troperfly Score."
            />
            <FeatureCard 
              icon={BarChart3}
              index={5}
              title="Tablero de Control"
              description="Vistas específicas para administradores y clientes con indicadores críticos de disponibilidad y riesgo."
            />
          </div>
        </div>
      </section>

      {/* Documentation Overview */}
      <section className="py-32 px-6 bg-troperfly-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-troperfly-blue font-bold text-xs uppercase tracking-[0.4em] mb-6 block">Índice del Proyecto</span>
              <h2 className="text-5xl font-bold text-troperfly-graphite uppercase tracking-tighter leading-none font-display">Documentación <br/> Completa</h2>
            </div>
            <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest max-w-xs md:text-right">
              Explore cada uno de los puntos fundamentales del desarrollo de troperfly.ai.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: 'introduccion', title: 'Introducción' },
              { id: 'contexto-problema', title: 'Contexto del Problema' },
              { id: 'usuarios', title: 'Usuarios Involucrados' },
              { id: 'necesidades', title: 'Necesidades y Deseos' },
              { id: 'formulacion-tecnica', title: 'Formulación Técnica' },
              { id: 'especificaciones', title: 'Especificaciones' },
              { id: 'generacion-conceptual', title: 'Generación Conceptual' },
              { id: 'arquitectura', title: 'Arquitectura Funcional' },
              { id: 'fundamentacion-teorica', title: 'Fundamentación Teórica' },
              { id: 'conclusiones', title: 'Conclusiones Preliminares' },
              { id: 'referencias', title: 'Referencias' }
            ].map((item, i) => (
              <Link 
                key={item.id} 
                to={`/${item.id}`}
                className="group p-8 bg-white border border-gray-100 rounded-3xl flex items-center justify-between hover:border-troperfly-blue hover:shadow-xl hover:shadow-troperfly-blue/5 transition-all"
              >
                <div>
                  <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-1 block group-hover:text-troperfly-blue transition-colors">Punto {i + 1}</span>
                  <h4 className="text-lg font-bold text-troperfly-graphite uppercase tracking-tight font-display">{item.title}</h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-troperfly-blue group-hover:text-white transition-colors">
                  <ArrowRight size={18} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Alternatives / Progress Section */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-50 rounded-[4rem] p-12 md:p-20 border border-gray-100 grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative">
                <div className="absolute inset-0 bg-troperfly-blue opacity-10 blur-3xl rounded-full" />
                <h2 className="text-5xl font-bold text-troperfly-graphite uppercase leading-[0.9] tracking-tighter mb-8 relative z-10 font-display">
                  Evolución <br/> <span className="text-troperfly-blue">Progresiva</span>
                </h2>
                <div className="space-y-8 relative z-10">
                   {[
                     { step: "01", title: "Plataforma de Scoring", desc: "Digitalización de expedientes and cálculo inicial del score." },
                     { step: "02", title: "Asignación Semiautomatizada", desc: "Integración de telemetría and sugerencias asistidas a coordinadores." },
                     { step: "03", title: "Agencia Inteligente IA", desc: "IA Agénica para optimización predictiva de flotas and reemplazos preventivos." }
                   ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-center group">
                        <span className="text-4xl font-bold text-troperfly-blue/20 group-hover:text-troperfly-blue transition-colors font-mono">{item.step}</span>
                        <div>
                          <h4 className="font-bold uppercase tracking-tighter text-troperfly-graphite mb-1 font-display">{item.title}</h4>
                          <p className="text-xs text-gray-500 font-medium tracking-tight font-sans">{item.desc}</p>
                        </div>
                      </div>
                   ))}
                </div>
             </div>
             <div className="bg-troperfly-graphite rounded-[3.5rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-troperfly-emerald opacity-20 blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                <Zap className="text-troperfly-emerald mb-8" size={48} />
                <h3 className="text-3xl font-bold uppercase leading-none mb-6 font-display">Alternativa de <br/> Desarrollo B</h3>
                <p className="text-white/60 text-sm font-medium leading-relaxed mb-8 font-sans">
                  Hemos seleccionado el camino de la semiautomatización para garantizar trazabilidad and solidez antes de la autonomía total por IA.
                </p>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-troperfly-emerald font-sans">
                   <CheckCircle2 size={16} /> Decisión de Diseño Confirmada
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
