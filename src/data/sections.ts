
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
      "La eficiencia de la cadena de suministro depende de la coordinación entre infraestructura, unidades de transporte, sistemas de información, procesos logísticos y capital humano especializado. Sin embargo, dentro del transporte de carga, el operador continúa siendo un factor crítico para la continuidad operativa, la seguridad de la mercancía, el cumplimiento de entregas y la calidad del servicio. Aunque muchas empresas ya utilizan herramientas de rastreo, telemetría, monitoreo satelital, administración de flotas y planeación de rutas, la selección, evaluación, capacitación y asignación de operadores sigue realizándose con criterios parcialmente fragmentados, lo que limita la capacidad de tomar decisiones confiables y oportunas.",
      "En este contexto, el proyecto troperfly.ai propone el diseño de una plataforma inteligente para la certificación, tercerización y asignación confiable de operadores de transporte de carga. La solución se concibe como un sistema-servicio orientado al mercado B2B, donde una agencia especializada administra operadores logísticos y utiliza una plataforma tecnológica para integrar información documental, operativa, técnica y de desempeño. Su propósito es apoyar a empresas de distribución, manufactura, retail, comercio electrónico, consumo masivo y logística tercerizada que requieren operadores confiables, disponibles y adecuados al tipo de ruta, unidad, mercancía y nivel de criticidad de cada operación.",
      "El problema central que atiende el proyecto no se reduce únicamente a la escasez de operadores. La dificultad principal se encuentra en la ausencia de un mecanismo estandarizado, medible y trazable para evaluar la confiabilidad, desempeño y compatibilidad operativa de cada conductor. La falta de profesionalización formal, la alta rotación, los procesos lentos de reclutamiento, la dificultad para validar antecedentes laborales, los riesgos de siniestralidad, las malas prácticas de conducción, los incumplimientos de entrega y la pérdida de confianza generan costos operativos y financieros para las empresas contratantes.",
      "La propuesta plantea como núcleo de diseño un Score de Rendimiento y Confiabilidad, es decir, una puntuación dinámica del operador construida a partir de variables medibles como rendimiento de combustible, kilometraje, horas de conducción y descanso, cumplimiento de ventanas de entrega, historial de accidentes, infracciones, incidencias operativas, calidad de servicio, documentación validada, capacitación y compatibilidad con tipos de operación. Este score permitiría clasificar operadores por perfil y sugerir asignaciones más adecuadas para larga distancia, distribución local, última milla, reparto capilar, operaciones punto a punto o comercio electrónico.",
      "troperfly.ai también busca generar valor para el operador, no solo para la empresa contratante. A través de un expediente digital, un esquema de incentivos, bonos por desempeño, rutas preferentes y un plan de carrera, el sistema permitiría profesionalizar el oficio y promover una cultura de mejora continua. De esta manera, el operador podría visualizar su progreso, fortalecer su reputación laboral y acceder a mejores oportunidades con base en evidencia verificable de desempeño, seguridad y cumplimiento.",
      "Desde la perspectiva de innovación, el proyecto se alinea con las tendencias actuales de digitalización logística, inteligencia artificial, analítica avanzada y optimización de recursos humanos en operaciones de cadena de suministro. Gartner señala que las organizaciones logísticas buscan tecnologías que les permitan tomar decisiones más rápidas e informadas, considerando mayor cantidad de datos, restricciones operativas, disponibilidad laboral, pronósticos, simulación y analítica avanzada. En este sentido, troperfly.ai no se plantea como una agencia tradicional de contratación, sino como una plataforma de diseño orientada a transformar la gestión del capital humano logístico mediante datos, trazabilidad, evaluación estructurada y apoyo inteligente a la toma de decisiones.",
      "Por lo tanto, este primer avance tiene como finalidad fundamentar el problema de diseño, identificar las necesidades reales de los usuarios involucrados, formular técnicamente el reto a resolver, establecer especificaciones preliminares medibles y generar alternativas conceptuales iniciales. La intención es construir una base sólida para evolucionar el proyecto hacia una solución viable, escalable y alineada con las necesidades actuales del transporte de carga y la cadena de suministro."
    ]
  },
  {
    id: "contexto-problema",
    title: "Definición del Contexto del Problema",
    subtitle: "Análisis de la crisis de confianza en el transporte.",
    category: "context",
    content: [
      "El problema de diseño se ubica en el sector logístico y de transporte de carga, particularmente en operaciones donde las empresas requieren operadores para cubrir rutas de larga distancia, distribución local, última milla, reparto capilar, comercio electrónico, entregas punto a punto y movimientos de mercancía de diferente criticidad. En este tipo de operación, la continuidad del servicio no depende únicamente de contar con unidades disponibles, sino de asignar al operador adecuado para cada tipo de ruta, carga y condición operativa.",
      "En la práctica, muchas organizaciones enfrentan procesos de reclutamiento lentos, altos niveles de rotación, dificultad para validar referencias, baja trazabilidad del desempeño previo y limitada visibilidad sobre la confiabilidad real del operador. A esto se suman riesgos asociados a siniestros, incumplimiento de horarios, malas prácticas operativas, posibles problemas de consumo de sustancias, incidentes de seguridad, pérdidas de confianza, conflictos en puntos de entrega y baja calidad en la atención al cliente.",
      "El avance inicial del equipo identifica tres fricciones principales: complejidad en atracción y retención, riesgos de confiabilidad y siniestralidad, y baja eficiencia operativa por falta de perfiles adecuados para entregas punto a punto, distribución de última milla, reparto capilar y comercio electrónico. Estas fricciones muestran que el problema no debe formularse únicamente como falta de choferes, sino como una deficiencia estructural en la gestión, evaluación, profesionalización y asignación del capital humano logístico.",
      "Desde una perspectiva de diseño, el reto consiste en crear una solución que permita transformar información dispersa del operador en criterios objetivos para la toma de decisiones. La agencia inteligente propuesta debería integrar variables como tipo de licencia, experiencia, historial de entregas, cumplimiento de ventanas de tiempo, eficiencia de combustible, respeto a horas de descanso, historial de accidentes, infracciones, antecedentes laborales verificables, resultados de pruebas permitidas por la normativa, aptitud médica ocupacional, calidad de servicio y compatibilidad con tipos de unidad y operación.",
      "El entorno operativo donde funcionaría troperfly.ai involucra a empresas de transporte, centros de distribución, operadores logísticos, clientes industriales, empresas de consumo masivo, comercios de última milla, responsables de seguridad patrimonial, áreas de recursos humanos, coordinadores de tráfico y operadores de carga. Cada actor observa una parte distinta del problema, pero todos convergen en una necesidad común: reducir la incertidumbre en la selección y asignación de operadores mediante información confiable, medible y trazable.",
      "La necesidad central del proyecto puede expresarse de la siguiente forma:",
      "Diseñar una plataforma inteligente que permita evaluar, certificar, clasificar y asignar operadores de transporte de carga con base en indicadores verificables de desempeño, seguridad, cumplimiento, aptitud ocupacional, calidad de servicio y compatibilidad operativa, con el fin de mejorar la confiabilidad logística y profesionalizar el oficio del operador.",
      "El proyecto se delimita al diseño conceptual de una plataforma de tercerización especializada. No se pretende implementar de inmediato un software comercial completo, ni automatizar decisiones laborales sensibles sin revisión humana. El objetivo del Avance 1 es establecer la base del proyecto: contexto, usuarios, necesidades, problema técnico, requerimientos medibles y alternativas conceptuales."
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
