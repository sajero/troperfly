export interface SectionContent {
  id: string;
  title: string;
  subtitle: string;
  content: string[];
  category: 'context' | 'analysis' | 'technical' | 'conclusion';
}

export const SECTIONS: SectionContent[] = [
  {
    id: 'introduccion',
    title: 'Introducción',
    subtitle: 'El futuro de la gestión del capital humano en el transporte de carga.',
    category: 'context',
    content: [
      'Maestría en Ciberseguridad – MCY.',
      'Maestría en Ingeniería con especialidad en productividad y calidad – MIP.',
      'Asignatura | Calidad en la innovación de productos, procesos y servicios.',
      'Avance 1 | Fundamentación del problema',
      'Proyecto: Sistema de evaluación, clasificación y asignación de Operadores de Autotransporte de Carga para el Sector Logístico Mexicano',
      'Nombre comercial provisional: troperfly.ai',
      'Equipo 05: Saúl Jerónimo Rodríguez | Isaac David Moreno González | Jose Ruben Gallegos Vázquez | Juan Pablo Olivas Palomares',
      'Fecha de entrega: Domingo, 17 de mayo 2026',
      'El proyecto parte de un problema real y documentado: el déficit de operadores calificados en el autotransporte de carga en México supera las 90,000 vacantes en 2026. Esta situación afecta la continuidad logística, la eficiencia operativa, la seguridad de las mercancías y la capacidad de respuesta de las empresas ante la demanda nacional e internacional. El objetivo del proyecto es diseñar un sistema que permita evaluar, clasificar y asignar operadores de autotransporte de carga a operaciones logísticas de forma confiable, objetiva y verificable.',
      'Desde esta perspectiva, el proyecto busca responder a una necesidad crítica del sector: contar con una forma estandarizada para determinar si un operador es apto para una operación específica, considerando su competencia técnica, condición física, historial de confiabilidad, experiencia, desempeño operativo y compatibilidad con el nivel de exigencia de cada ruta.'
    ]
  },
  {
    id: 'contexto-problema',
    title: '1. Definición del Contexto',
    subtitle: 'Análisis de la crisis de confianza en el transporte.',
    category: 'context',
    content: [
      '1.1 Entorno físico, social, institucional y geográfico',
      'El autotransporte de carga en México opera sobre una red de corredores federales que conectan los principales polos industriales del país: Nuevo León, Chihuahua, Coahuila, el Bajío y la Zona Metropolitana del Valle de México. El 85% del intercambio comercial con Estados Unidos se mueve por carretera, lo que hace de los operadores de carga un factor crítico para la cadena de suministro nacional y para los compromisos del T-MEC (SICT, 2025-2030).',
      'Las condiciones laborales del sector son precarias: ingreso promedio de entre $14,000 y $16,000 MXN mensuales y una tasa de informalidad del 30% (Data México, STPS 2024). En lo institucional, las empresas que gestionan personal operativo deben cumplir con la LFPDPPP, estar inscritas en el REPSE y operar conforme a las NOM aplicables al transporte de carga (NOM-087-SCT-2-2017; NOM-012-SCT-2-2017). Geográficamente, el sistema debe funcionar tanto en rutas de larga distancia interestatal como en distribución de última milla en ciudades.',
      '1.2 Usuarios involucrados',
      'Hay dos tipos de usuarios que interactúan directamente con el sistema. Por un lado, las empresas de logística y autotransporte, que necesitan reclutar, evaluar y asignar operadores a sus operaciones. Por otro, los propios conductores, cuya experiencia con el sistema definirá si lo adoptan o no.',
      'Los usuarios secundarios son quienes se ven afectados sin interactuar directamente: empresas manufactureras que dependen de que las entregas lleguen a tiempo, aseguradoras interesadas en reducir siniestralidad, autoridades como la SICT y la STPS, y centros de capacitación que certifican competencias.',
      '1.3 Necesidad central y evidencia que justifica su urgencia',
      'El problema de fondo es que el sector no tiene una forma estandarizada de saber si un conductor es apto para la operación que se le va a asignar. Las empresas contratan con criterios informales y no diferenciados: el mismo proceso para un conductor de larga distancia con carga de alto valor que para uno de reparto local. Las consecuencias son medibles:',
      '• Al primer semestre de 2026, el déficit de operadores calificados supera las 90,000 vacantes en México, crecimiento del 66% desde 2022, cuando eran 54,000 plazas. Aproximadamente 90,000 camiones permanecen inactivos por falta de conductores (CANACAR, 2026).',
      '• El sector registra más de 30,000 accidentes anuales en carreteras federales, muchos relacionados con la falta de verificación sistemática de aptitud técnica y física de los conductores (Plan México, 2026).',
      '• Las pérdidas por robo de carga superan los $7,000 millones de pesos anuales, en parte por deficiencias en la evaluación de antecedentes al momento de contratar (CANACAR / Kern Grosse, 2026).',
      '• La edad promedio del conductor activo es 44.5 años, y el número de conductores jóvenes cayó 15% en el último año. El relevo generacional es insuficiente, lo que hace más urgente retener al talento existente (Webfleet MX, 2026).',
      '• El nearshoring disparó la demanda logística en corredores clave como Nuevo León, que acumula más de $50,000 millones de dólares en IED, pero el déficit de operadores frena ese crecimiento (Agente Digitalizado, 2026).',
      '• El 80% de los empleadores del sector reportan dificultades para cubrir vacantes. La IRU estima un déficit global del 40%, y México encabeza el crecimiento de esa brecha en América Latina (The Logistics World, 2026).'
    ]
  },
  {
    id: 'necesidades',
    title: '2. Identificación de Necesidades',
    subtitle: 'Qué resolvemos, qué valor buscamos y qué límites debe respetar la solución.',
    category: 'analysis',
    content: [
      'Para identificar las necesidades se siguió el proceso de cinco pasos de Ulrich et al. (2020, Cap. 5, pp. 79-95). Las fuentes consultadas incluyen reportes de CANACAR, Webfleet MX, The Logistics World y AMTM, las normativas vigentes (LFPDPPP, REPSE, NOM-087-SCT-2-2017) y estadísticas de siniestralidad y robo de carga.',
      'Cada dato bruto se tradujo a un enunciado de necesidad en términos de lo que el sistema debe hacer, sin mencionar tecnologías. Las necesidades resultantes se agruparon en tres funciones: evaluación del operador, clasificación y asignación, y sostenibilidad operativa. Las que tocan seguridad y cumplimiento normativo tienen mayor peso, ya que operan como restricciones que ningún concepto puede ignorar. A continuación se detallan las diez necesidades principales identificadas:',
      '• [N1 - Latente]: El sistema debe medir objetivamente el nivel de competencia técnica de cada operador (manejo defensivo, tipos de unidad, normativa vial). Las empresas no articulan esto directamente, pero asignan operadores sin criterios estandarizados, lo que genera siniestralidad.',
      '• [N2 - Restricción]: El sistema debe evaluar la condición física y de salud del operador como requisito de aptitud. La NOM-087-SCT-2-2017 obliga a verificar la aptitud física y sensorial del conductor para operar legalmente.',
      '• [N3 - Explícita]: El sistema debe verificar y registrar el historial de incidentes, antecedentes y confiabilidad del operador. Las empresas señalan que las pérdidas por robo y accidentes se ligan a fallas en filtros de contratación.',
      '• [N4 - Latente]: El sistema debe actualizar continuamente el perfil del operador, no solo al contratarlo. Un perfil estático no captura la dinámica del riesgo o incidencias posteriores.',
      '• [N5 - Explícita]: El sistema debe asignar a cada operador únicamente a operaciones compatibles con su perfil de competencia y riesgo (separar rutas de larga distancia con alto valor de reparto local urbano).',
      '• [N6 - Latente]: El sistema debe permitir al operador conocer y comprender su propio perfil de evaluación. La transparencia en la evaluación incrementa la motivación y la retención del conductor.',
      '• [N7 - Explícita]: El sistema debe proveer un operador de reemplazo ante la ausencia imprevista del asignado en el menor tiempo posible para evitar penalizaciones contractuales.',
      '• [N8 - Restricción]: El sistema debe proteger los datos sensibles del operador conforme a la LFPDPPP (salud, toxicología, antecedentes) mediante consentimiento expreso y medidas de seguridad.',
      '• [N9 - Latente]: El sistema debe ser accesible para usuarios con distintos niveles de alfabetización digital, considerando que la fuerza laboral tiene una edad promedio de 44.5 años y alta informalidad.',
      '• [N10 - Restricción]: El sistema debe cumplir con los requisitos de operación bajo el régimen de subcontratación especializada (REPSE) para evitar la responsabilidad solidaria de la empresa cliente.'
    ]
  },
  {
    id: 'formulacion-tecnica',
    title: '3. Formulación del Problema',
    subtitle: 'Definición medible del reto de diseño.',
    category: 'technical',
    content: [
      'El enunciado del problema se redactó siguiendo los tres criterios de Ulrich et al. (2020, Cap. 5, p. 82): que sea verificable, delimitado y tecnológicamente neutro. Verificable significa que incluye parámetros medibles. Delimitado significa que especifica quién usa el sistema, en qué condiciones y bajo qué normativa. Tecnológicamente neutro significa que no asume ningún principio de solución específico.',
      'Enunciado Central del Problema Técnico:',
      'Diseñar un sistema que permita a las empresas del sector del autotransporte de carga en México evaluar objetivamente el perfil de competencia técnica, condición física, historial de confiabilidad y aptitud operativa de los conductores de unidades de carga, para asignarlos a operaciones logísticas de acuerdo con el nivel de exigencia y riesgo de cada ruta, incluyendo larga distancia interestatal, distribución urbana de última milla y transporte de carga de alto valor, reduciendo en al menos 40% la tasa de asignaciones fallidas respecto a los métodos de reclutamiento tradicional del sector, y operando en corredores logísticos de alta demanda bajo los marcos normativos de la NOM-087-SCT-2-2017, el REPSE y la LFPDPPP, en un contexto de déficit estructural de más de 90,000 operadores calificados y creciente presión del nearshoring sobre la cadena de suministro nacional.',
      '3.1 Justificación del enunciado',
      'El enunciado cumple los tres criterios. Es verificable porque incluye un parámetro numérico concreto: reducción del 40% en asignaciones fallidas respecto al método tradicional, cifra anclada a estadísticas documentadas del sector. Está delimitado porque especifica el usuario (empresas del autotransporte), el entorno (corredores de alta demanda), las condiciones (déficit de más de 90,000 operadores, presión del nearshoring) y los marcos normativos que aplican. Y es tecnológicamente neutro porque no menciona plataformas, aplicaciones ni algoritmos: el término \'sistema\' puede tomar cualquier forma, lo que deja abierto el espacio de exploración conceptual que los próximos avances requieren.'
    ]
  },
  {
    id: 'especificaciones',
    title: '4. Especificaciones Preliminares',
    subtitle: 'Definición del MVP, requerimientos funcionales, técnicos, de restricción y calidad.',
    category: 'technical',
    content: [
      'Las especificaciones se construyeron siguiendo el Capítulo 6 de Ulrich et al. (2020, pp. 103-120): primero se listaron métricas a partir de las necesidades identificadas, luego se recopiló información de benchmarking contra normativas y datos del sector, y finalmente se fijaron valores objetivo-numéricos. Toda especificación sin número o rango se descartó como necesidad mal traducida.',
      'Los valores de referencia provienen de estadísticas de CANACAR (tasa de siniestralidad sectorial: 5.2 incidentes por cada 100,000 km; retención a 12 meses: 45%), del Plan México 2026 (30,000 accidentes anuales) y de programas de retención documentados como AMO y Daimler Truck México, que reportan retención del 75% entre sus egresadas certificadas. Los requerimientos métricos establecidos son:',
      '• [R1 - Funcional]: Tiempo de asignación de operador disponible — Objetivo: <= 4 Horas desde la solicitud del cliente hasta la confirmación.',
      '• [R2 - Funcional]: Cobertura de solicitudes urgentes — Objetivo: >= 85% de solicitudes de emergencia atendidas en menos de 24 horas.',
      '• [R3 - Funcional]: Reducción de asignaciones fallidas respecto al método tradicional — Objetivo: >= 40% de reducción de incidentes por asignación incorrecta.',
      '• [R4 - Funcional]: Tasa de siniestralidad de operadores asignados — Objetivo: <= 2.5 incidentes de tráfico o seguridad por cada 100,000 km recorridos.',
      '• [R5 - Funcional]: Retención de operadores a 12 meses — Objetivo: >= 70% de operadores activos que permanecen en la plataforma tras un año.',
      '• [R6 - Funcional]: Tiempo de reemplazo de emergencia — Objetivo: <= 2 Horas desde la notificación de ausencia hasta el sustituto confirmado.',
      '• [R7 - Técnico]: Exactitud de clasificación por perfil-operación — Objetivo: >= 90% de asignaciones validadas como totalmente compatibles por el cliente.',
      '• [R8 - Técnico]: Frecuencia de actualización del expediente del operador — Objetivo: <= 30 Días como plazo máximo entre revisiones obligatorias.',
      '• [R9 - Técnico]: Cobertura de dimensiones de evaluación del operador — Objetivo: >= 4 Dimensiones validadas (técnica, física, antecedentes, desempeño).',
      '• [R10 - Técnico]: Tiempo de incorporación de nuevo operador al sistema — Objetivo: <= 5 Días hábiles desde la solicitud hasta la habilitación del perfil.',
      '• [R11 - Restricción]: Protección de datos sensibles conforme a LFPDPPP — Objetivo: 100% de los registros protegidos con consentimiento expreso.',
      '• [R12 - Restricción]: Cumplimiento de aptitud física (NOM-087-SCT-2-2017) — Objetivo: 100% de los operadores asignados con certificado médico vigente.',
      '• [R13 - Restricción]: Registro REPSE vigente — Objetivo: Estado activo y verificado como condición indispensable para la operación legal.',
      '• [R14 - Técnico]: Capacidad mínima de gestión de perfiles simultáneos — Objetivo: >= 500 en etapa de MVP / >= 5,000 perfiles activos en escala.'
    ]
  },
  {
    id: 'generacion-conceptual',
    title: '5. Generación Conceptual Inicial',
    subtitle: 'Alternativas iniciales para convertir la idea en una solución viable.',
    category: 'technical',
    content: [
      'La generación de conceptos siguió el método del Capítulo 7 de Ulrich et al. (2020, pp. 125-153). El proceso parte de descomponer el problema en sus subfunciones, es decir, lo que cualquier solución debe hacer independientemente de cómo lo haga, y luego explora principios de solución distintos para cada una.',
      '5.1 Clarificación: descomposición en subfunciones críticas',
      'Antes de generar conceptos, el problema se descompuso en las seis subfunciones que cualquier diseño debe cubrir (Ulrich et al., 2020, p. 128). Expresarlas en términos funcionales, y no tecnológicos, es lo que hace posible comparar conceptos de forma neutral:',
      '• SF1. Capturar datos del operador: competencia técnica, condición física, antecedentes penales/laborales e historial de desempeño.',
      '• SF2. Evaluar y puntuar al operador, generando un perfil de aptitud diferenciado por tipo de operación.',
      '• SF3. Clasificar al operador según su perfil (larga distancia, distribución urbana, transporte de alto valor).',
      '• SF4. Comunicar la disponibilidad y perfil del operador a la empresa solicitante.',
      '• SF5. Ejecutar la asignación operador-operación garantizando compatibilidad de perfil.',
      '• SF6. Registrar retroalimentación posoperación y actualizar el perfil del operador.',
      '5.2 Búsqueda externa',
      'Para la búsqueda externa se revisaron referentes de otros sectores que resuelven problemas similares: los sistemas de calificación de conductores de Uber y DiDi, los esquemas de certificación modular del CONOCER, los centros de formación de CANACAR con programa de 180 horas en UT Nuevo Laredo, los modelos de scoring crediticio del Buró de Crédito y el triage médico por niveles de aptitud. Ninguno aplica directamente al autotransporte de carga en México, pero cada uno aporta un principio de solución para alguna de las subfunciones identificadas.',
      '5.3 Exploración sistemática de Alternativas Conceptuales:',
      'Para resolver el árbol morfológico, el equipo estructuró dos enfoques conceptuales opuestos y válidos:',
      'Concepto A (Puntuación Dinámica Algorítmica): SF1 mediante integración de telemetría GPS; SF2 a través de un algoritmo multivariable ponderado; SF3 con categorización automática de score; SF4 con un repositorio central en tiempo real; SF5 usando un motor de matching automatizado; y SF6 mediante actualización en vivo por eventos.',
      'Concepto B (Certificación Modular Presencial): SF1 mediante evaluación física en centros certificados; SF2 a través de un panel de evaluadores con rúbrica estandarizada; SF3 con acreditación presencial por bloques; SF4 mediante un catálogo regional distribuido; SF5 a través de un coordinador logístico humano; y SF6 mediante renovación periódica presencial.',
      '5.4 Concepto A: Sistema de puntuación dinámica con asignación algorítmica Centralizada',
      'El Concepto A parte de integrar datos de múltiples fuentes en un repositorio centralizado: telemetría GPS del vehículo, registros médicos y toxicológicos periódicos, historial de antecedentes y retroalimentación del cliente. Con esa información, un algoritmo de puntuación genera un índice de aptitud operativa dinámico para cada conductor, considerando las cuatro dimensiones de evaluación. Cuando una empresa solicita un operador, el sistema identifica al conductor con mayor compatibilidad entre su índice y los requisitos de la operación.',
      'Este concepto cubre bien las necesidades de actualización continua del perfil (N4), asignación compatible (N5) y reemplazo ágil (N7), y estructuralmente permite cumplir los tiempos de respuesta de R1 y R6 sin depender de un coordinador disponible en ese momento.',
      'Sus puntos débiles son igualmente claros. Requiere conectividad en ambos extremos. La calidad del índice depende directamente de la calidad de los datos de entrada: si la telemetría falla o los registros médicos llegan tarde, el perfil del operador se desactualiza. Gestionar datos de salud y antecedentes bajo la LFPDPPP es complejo. Y hay un riesgo real de resistencia por parte de operadores que vean el monitoreo continuo como vigilancia, lo que compromete a la adopción (N9).',
      '5.5 Concepto B: Sistema de Certificación Modular Presencial con asignación por Red de Coordinadores Regionales',
      'El Concepto B funciona diferente. Una red de centros de valoración física, propios o en alianza con los centros de CANACAR ya existentes, donde los operadores acreditan módulos presenciales: manejo en simulador, valoración médica estructurada, examen de normativa vial y de manejo de carga, y verificación de antecedentes. Cada módulo acreditado genera una credencial verificada y portable. El conjunto de credenciales define para qué tipos de operación está habilitado el conductor. La asignación la hace un coordinador regional que consulta el catálogo de operadores disponibles en su zona.',
      'La ventaja más clara de este concepto es la robustez de la evaluación presencial: es más difícil falsificar un resultado de simulador que un dato digital. Cumple naturalmente con la NOM-087-SCT-2-2017 porque la valoración médica es presencial y verificable. No requiere que el operador sea digitalmente competente, lo que lo hace más accesible (N9). La credencial portable también beneficia directamente al conductor que cambia de empresa sin perder su historial de certificación.',
      'Las limitaciones son de escala y velocidad. El perfil se actualiza periódicamente, no en tiempo real, lo que puede generar desfases entre el estado actual del operador y lo que dice su certificación (tensión con N4 y R8). Si en una zona no hay operadores certificados disponibles, el coordinador no puede cumplir los tiempos de R1. La evaluación humana introduce variabilidad que el Concepto A no tiene, lo que es un riesgo para R7. Y la retroalimentación posoperación depende de la disciplina de reporte del coordinador.'
    ]
  },
  {
    id: 'referencias',
    title: 'Referencias',
    subtitle: 'Fuentes y bibliografía consultada.',
    category: 'conclusion',
    content: [
      'Agente Digitalizado. (2026). Nearshoring en México 2026: Datos, industrias ganadoras y proyecciones a 2030. https://agentedigitalizado.com/nearshoring-en-mexico-2026-datos-industrias-ganadoras-y-proyecciones-a-2030/',
      'Asociación de Mujeres Operadoras [AMO], & El Financiero. (2026). Mujeres: la reserva estratégica del autotransporte en México. https://www.elfinanciero.com.mx/transporte-y-movilidad/2026/02/25/mujeres-la-reserva-estrategica-del-autotransporte-en-mexico/',
      'Cámara Nacional del Autotransporte de Carga [CANACAR]. (2026). Faltan más de 90 mil operadores en carreteras. El Sol de México. https://oem.com.mx/elsoldemexico/finanzas/faltan-mas-de-90-mil-operadores-en-carreteras-alerta-canacar-28165722',
      'Data México / STPS. (2024). Conductores de camiones, camionetas y automóviles de carga: Salarios, diversidad, industrias e informalidad laboral. https://www.economia.gob.mx/datamexico/es/profile/occupation/conductores-de-camiones-camionetas-y-automoviles-de-carga',
      'Gobierno de México / Presidencia. (2026). Plan México: presidenta Claudia Sheinbaum presenta Programa de protección a la Industria de Vehículos Pesados. https://www.gob.mx/presidencia/prensa/plan-mexico',
      'Gobierno de México / SICT. (2025). Programa Sectorial de Infraestructura, Comunicaciones y Transportes 2025-2030. https://www.gob.mx/cms/uploads/attachment/file/1021187/09_PS_SICT_2025-2030.pdf',
      'International Road Transport Union [IRU]. (2026). IRU estima déficit de conductores del 40% a nivel global. CANACAR. https://canacar.com.mx/iru-estima-deficit-conductores-del-40-a-nivel-global/',
      'Kern Grosse. (2026). Seguridad en carreteras en 2026: El blindaje necesario para el autotransporte en México. https://www.kerngrosse.com.mx/seguridad-en-carreteras-2026-mexico/',
      'The Logistics World. (2026). Nearshoring en México enfrenta límites en infraestructura, energía y talento. https://thelogisticsworld.com/actualidad-logistica/nearshoring-en-mexico-enfrenta-limites-en-infraestructura-energia-y-talento/',
      'Ulrich, K. T., Eppinger, S. D., & Yang, M. C. (2020). Product design and development (7th ed.). McGraw-Hill Education.',
      'Webfleet MX. (2026). Falta de conductores en México: causas y soluciones. https://www.webfleet.com/es_mx/webfleet/fleet-challenges/driver-shortage/'
    ]
  }
];