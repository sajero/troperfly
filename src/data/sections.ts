
export interface SectionContent {
  id: string;
  title: string;
  subtitle: string;
  content: string[];
  category: "context" | "analysis" | "technical" | "conclusion";
}

export const SECTIONS: SectionContent[] = [
  {
    id: "introduccion",
    title: "Introducción",
    subtitle: "El futuro de la gestión del capital humano en el transporte de carga.",
    category: "context",
    content: [
      "En el dinámico ecosistema del transporte de carga, la eficiencia no solo depende de la potencia de los motores o la optimización de las rutas, sino fundamentalmente de la confiabilidad y profesionalismo del factor humano: el operador.",
      "troperfly.ai nace como una respuesta tecnológica avanzada a la crisis de confianza y escasez de talento calificado en la industria logística latinoamericana.",
      "Nuestra plataforma integra Inteligencia Artificial para transformar datos dispersos en un Score de Rendimiento y Confiabilidad (ScoreDriver), permitiendo a las empresas certificar, tercerizar y asignar operadores con una precisión sin precedentes."
    ]
  },
  {
    id: "contexto-problema",
    title: "Definición del Contexto del Problema",
    subtitle: "Análisis de la crisis de confianza en el transporte.",
    category: "context",
    content: [
      "La falta de un mecanismo estandarizado, medible y trazable genera una ausencia de confianza que impacta directamente en los costos operativos y financieros de las empresas.",
      "Identificamos una asimetría de información: las empresas no tienen visibilidad real sobre el comportamiento histórico de los operadores, y los operadores no tienen una identidad digital que certifique su buen desempeño.",
      "Esta desconexión genera riesgos de seguridad, incrementa la rotación de personal y eleva las primas de seguros."
    ]
  },
  {
    id: "usuarios",
    title: "Usuarios Involucrados",
    subtitle: "Actores clave del ecosistema troperfly.",
    category: "analysis",
    content: [
      "1. Empresas Contratantes: Buscan reducir riesgos y asegurar la integridad de su carga.",
      "2. Operadores de Carga: Desean profesionalizar su labor y acceder a mejores oportunidades basadas en mérito.",
      "3. Coordinadores Logísticos: Necesitan herramientas rápidas para la asignación de viajes.",
      "4. Entidades Externas: Aseguradoras y autoridades que requieren datos verificables de cumplimiento."
    ]
  },
  {
    id: "necesidades",
    title: "Necesidades, Deseos y Restricciones",
    subtitle: "Qué resolvemos y qué límites respetamos.",
    category: "analysis",
    content: [
      "Necesidades: Centralización de documentación, cálculo de riesgo objetivo y monitoreo de eficiencia.",
      "Deseos: Una interfaz humana que facilite la interacción sin ser intrusiva, y un sistema de recompensas para conductores estrella.",
      "Restricciones: Cumplimiento estricto de la ley de protección de datos personales, interoperabilidad con sistemas GPS existentes y latencia mínima para decisiones en ruta."
    ]
  },
  {
    id: "formulacion-tecnica",
    title: "Formulación Técnica del Problema",
    subtitle: "Modelando la incertidumbre mediante datos.",
    category: "technical",
    content: [
      "El problema se define como la optimización de la asignación operador-viaje bajo una función de costo que minimice el riesgo de siniestralidad.",
      "Utilizamos modelos probabilísticos para estimar la confiabilidad del conductor basándonos en variables históricas y en tiempo real.",
      "La formulación incluye el desarrollo del Algoritmo ScoreDriver, que pondera variables de seguridad, eficiencia y cumplimiento normativo."
    ]
  },
  {
    id: "especificaciones",
    title: "Especificaciones del Sistema",
    subtitle: "Definición del MVP y alcances funcionales.",
    category: "technical",
    content: [
      "El sistema deberá ser capaz de procesar telemetría de diversas fuentes (API GPS), gestionar expedientes digitales seguros y emitir certificados de confiabilidad.",
      "Se requiere una arquitectura móvil para el operador y un dashboard administrativo para los coordinadores logísticos.",
      "Seguridad: Encriptación punto a punto y registros inalterables de actividad (Audit Trail)."
    ]
  },
  {
    id: "generacion-conceptual",
    title: "Generación Conceptual Inicial",
    subtitle: "De la idea a la estructura lógica.",
    category: "technical",
    content: [
      "El concepto se basa en el 'Digital Driver ID', una identidad portátil que el operador lleva consigo y que evoluciona según su desempeño.",
      "Diseñamos un flujo de trabajo que comienza con la validación documental, sigue con el scoring predictivo y culmina en la asignación inteligente.",
      "Visualizamos una interfaz brutalista y técnica que transmita solidez y precisión."
    ]
  },
  {
    id: "arquitectura",
    title: "Arquitectura Funcional",
    subtitle: "El motor debajo del capó de troperfly.ai.",
    category: "technical",
    content: [
      "Estructura basada en microservicios para garantizar la escalabilidad.",
      "Componentes Core: Engine de Scoring (IA), Módulo de Certificación, Sistema de Alertas y Marketplace de Tercerización.",
      "Integraciones: Conexión nativa con proveedores de telemetría y bases de datos de seguridad pública."
    ]
  },
  {
    id: "fundamentacion-teorica",
    title: "Fundamentación Teórica",
    subtitle: "Bases académicas y de industria.",
    category: "conclusion",
    content: [
      "Nos apoyamos en la Teoría de las Señales en mercados con información asimétrica.",
      "Revisamos modelos de Gamificación aplicados a la seguridad industrial para incentivar el buen manejo.",
      "Contexto Logístico 4.0: La transición de la gestión reactiva a la gestión proactiva basada en datos masivos (Big Data)."
    ]
  },
  {
    id: "conclusiones",
    title: "Conclusiones Preliminares",
    subtitle: "Hallazgos tras el primer avance.",
    category: "conclusion",
    content: [
      "La digitalización del capital humano es el eslabón perdido de la logística moderna.",
      "El ScoreDriver tiene el potencial de convertirse en el estándar de industria para la contratación de operadores.",
      "La viabilidad técnica está confirmada por la disponibilidad de datos de telemetría y APIs de validación."
    ]
  },
  {
    id: "referencias",
    title: "Referencias",
    subtitle: "Fuentes y bibliografía consultada.",
    category: "conclusion",
    content: [
      "Gartner: Logística 4.0 y el futuro del transporte.",
      "Banco Interamericano de Desarrollo: Seguridad vial en América Latina.",
      "Modelos de Riesgo Logístico: Estándares internacionales de certificación ISO."
    ]
  }
];
