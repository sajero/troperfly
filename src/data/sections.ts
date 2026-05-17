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
      'Maestría en Ciberseguridad – MCY',
      'Maestría en Ingeniería con especialidad en productividad y calidad – MIP',
      'Asignatura: Calidad en la innovación de productos, procesos y servicios.',
      'Avance 1: Fundamentación del problema',
      'Proyecto: Sistema de evaluación, clasificación y asignación de Operadores de Autotransporte de Carga para el Sector Logístico Mexicano',
      'Nombre comercial provisional: troperfly.ai',
      'Equipo 05: Saúl Jerónimo Rodríguez | Isaac David Moreno González | Jose Ruben Gallegos Vázquez | Juan Pablo Olivas Palomares',
      'Fecha de entrega: Domingo, 17 de mayo 2026',
      'El proyecto parte de un problema real y documentado: el déficit de operadores calificados en el autotransporte de carga en México supera las 90,000 vacantes en 2026. Esta situación afecta la continuidad logística, la eficiencia operativa, la seguridad de las mercancías y la capacidad de respuesta de las empresas ante la demanda nacional e internacional. El objetivo del proyecto es diseñar un sistema que permita evaluar, clasificar y asignación operadores de autotransporte de carga a operaciones logísticas de forma confiable, objetiva y verificable.',
      'Desde esta perspectiva, el proyecto busca responder a una necesidad crítica del sector: contar con una forma estandarizada para determinar si un operador es apto para una operación específica, considerando su competencia técnica, condición física, historial de confiabilidad, experiencia, desempeño operativo y compatibilidad con el nivel de exigencia de cada ruta.'
    ]
  },
  {
    id: 'contexto-problema',
    title: 'Definición del Contexto del Problema',
    subtitle: 'Análisis de la crisis de confianza en el transporte.',
    category: 'context',
    content: [
      '1.1 Entorno físico, social, institucional y geográfico',
      'El autotransporte de carga en México opera sobre una red de corredores federales que conectan los principales polos industriales del país: Nuevo León, Chihuahua, Coahuila, el Bajío y la Zona Metropolitana del Valle de México. El 85% del intercambio comercial con Estados Unidos se mueve por carretera, lo que hace de los operadores de carga un factor crítico para la cadena de suministro nacional y para los compromisos del T-MEC (SICT, 2025-2030).',
      'Las condiciones laborales del sector son precarias: ingreso promedio de entre $14,000 y $16,000 MXN mensuales y una tasa de informalidad del 30% (Data México, STPS 2024). En lo institucional, las empresas que gestionan personal operativo deben cumplir con la LFPDPPP, estar inscritas en el REPSE y operar conforme a las NOM aplicables al transporte de carga (NOM-087-SCT-2-2017; NOM-012-SCT-2-2017). Geográficamente, el sistema debe funcionar tanto en rutas de larga distancia interestatal como en distribución de última milla en ciudades.',
      '1.3 Necesidad central y evidencia que justifica su urgencia',
      'El problema de fondo es que el sector no tiene una forma estandarizada de saber si un conductor es apto para la operación que se le va a asignar. Las empresas contratan con criterios informales y no diferenciados: el mismo proceso para un conductor de larga distancia con carga de alto valor que para uno de reparto local. Las consecuencias son medibles:',
      '• Al primer semestre de 2026, el déficit de operadores calificados supera las 90,000 vacantes en México, lo que representa un crecimiento del 66% desde 2022, cuando eran 54,000 plazas. Aproximadamente 90,000 camiones permanecen inactivos por falta de conductores (CANACAR, 2026).',
      '• El sector registra más de 30,000 accidentes anuales en carreteras federales, muchos relacionados con la falta de verificación sistemática de aptitud técnica y física de los conductores (Plan México, 2026).',
      '• Las pérdidas por robo de carga superan los $7,000 millones de pesos anuales, en parte por deficiencias en la evaluación de antecedentes al momento de contratar (CANACAR / Kern Grosse, 2026).',
      '• La edad promedio del conductor activo es 44.5 años, y el número de conductores jóvenes cayó 15% en el último año. El relevo generacional es insuficiente, lo que hace más urgente retener al talento existente (Webfleet MX, 2026).',
      '• El nearshoring disparó la demanda logística en corredores clave como Nuevo León, que acumula más de $50,000 millones de dólares en IED, pero el déficit de operadores frena ese crecimiento (Agente Digitalizado, 2026).',
      '• El 80% de los empleadores del sector reportan dificultades para cubrir vacantes. La IRU estima un déficit global del 40%, y México encabeza el crecimiento de esa brecha en América Latina (The Logistics World, 2026).'
    ]
  },
  {
    id: 'usuarios',
    title: 'Usuarios Involucrados',
    subtitle: 'Actores clave del ecosistema troperfly.ai.',
    category: 'analysis',
    content: [
      '1.2 Usuarios involucrados',
      'Hay dos tipos de usuarios que interactúan directamente con el sistema:',
      'Usuarios Directos:',
      '• Empresas de logística y autotransporte: Necesitan reclutar, evaluar y asignar operadores a sus operaciones de manera objetiva.',
      '• Conductores / Operadores: Su experiencia directa con el sistema definirá si lo adoptan o no dentro de su entorno diario.',
      'Usuarios Secundarios:',
      '• Empresas manufactureras y de consumo masivo: Dependen de que las entregas lleguen a tiempo y seguras.',
      '• Aseguradoras: Interesadas en reducir los índices de siniestralidad y riesgos en ruta.',
      '• Autoridades reguladoras: Entidades institucionales como la SICT y la STPS.',
      '• Centros de capacitación: Instituciones encargadas de certificar competencias técnicas.'
    ]
  },
  {
    id: 'necesidades',
    title: 'Necesidades, Deseos y Restricciones',
    subtitle: 'Qué resolvemos, qué valor buscamos y qué límites debe respetar la solución.',
    category: 'analysis',
    content: [
      'Para identificar las necesidades se siguió el proceso de cinco pasos de Ulrich et al. (2020, Cap. 5, pp. 79-95). Las fuentes consultadas incluyen reportes de CANACAR, Webfleet MX, The Logistics World y AMTM, las normativas vigentes (LFPDPPP, REPSE, NOM-087-SCT-2-2017) y estadísticas de siniestralidad y robo de carga.',
      'Cada dato bruto se tradujo a un enunciado de necesidad en términos de lo que el sistema debe hacer, sin mencionar tecnologías. Las necesidades resultantes se agruparon en tres funciones: evaluación del operador, clasificación y asignación, y sostenibilidad operativa. Las que tocan seguridad y cumplimiento normativo tienen mayor peso, ya que operan como restricciones que ningún concepto puede ignorar.',
      'Tabla 1. Necesidades principales del sistema',
      '| Código | Categoría | Descripción |',
      '|---|---|---|',
      '| N1 | Latente | El sistema debe medir objetivamente el nivel de competencia técnica de cada operador. Las empresas no articulan esto directamente, pero asignan operadores sin criterios estandarizados, lo que genera siniestralidad. Un perfil de competencias técnicas verificado (manejo defensivo, tipos de unidad, normativa vial) es la base de cualquier asignación confiable. |',
      '| N2 | Restricción | El sistema debe evaluar la condición física y de salud del operador como requisito de aptitud. La NOM-087-SCT-2-2017 obliga a verificar aptitud física y sensorial del conductor. Sin este componente, el sistema no puede operar legalmente. |',
      '| N3 | Explícita | El sistema debe verificar y registrar el historial de incidentes, antecedentes y confiabilidad del operador. Las empresas señalan directamente que las pérdidas por robo de carga y los accidentes están relacionados con deficiencias en la verificación de antecedentes al momento de contratar. |',
      '| N4 | Latente | El sistema debe actualizar continuamente el perfil del operador, no solo al momento de la contratación. Las empresas reconocen el valor de esto cuando se les presenta: el operador confiable hace seis meses puede haber tenido un incidente de adicción o una infracción grave. El perfil estático no captura la dinámica del riesgo. |',
      '| N5 | Explícita | El sistema debe asignar a cada operador únicamente a operaciones compatibles con su perfil de competencia y riesgo. Los usuarios articulan directamente la necesidad de separar operadores aptos para larga distancia con carga de alto valor de quienes son adecuados para distribución urbana de última milla. |',
      '| N6 | Latente | El sistema debe permitir al operador conocer y comprender su propio perfil de evaluación. Ningún operador lo pide espontáneamente, pero la evidencia de programas como AMO y Daimler Truck México muestra que la transparencia en la evaluación mejora la retención y motiva la mejora continua. |',
      '| N7 | Explícita | El sistema debe proveer un operador de reemplazo ante la ausencia imprevista del asignado, en el menor tiempo posible. Las empresas logísticas articulan directamente que una falla en la disponibilidad del operador rompe el compromiso de servicio y genera penalizaciones contractuales. |',
      '| N8 | Restricción | El sistema debe proteger los datos sensibles del operador conforme a la normativa de privacidad vigente. La LFPDPPP exige consentimiento expreso, aviso de privacidad y medidas de seguridad para datos sensibles (salud, antecedentes, toxicología). Esta restricción aplica independientemente del concepto de solución elegido. |',
      '| N9 | Latente | El sistema debe ser accesible para usuarios con distintos niveles de alfabetización digital. La fuerza laboral del sector tiene edad promedio de 44.5 años y alta informalidad (30%). Un sistema que requiera competencias digitales avanzadas del operador tendrá una tasa de adopción baja. |',
      '| N10 | Restricción | El sistema debe cumplir con los requisitos de operación bajo el régimen de subcontratación especializada (REPSE). La prestación de servicios especializados de capital humano en México requiere registro vigente en el REPSE. Sin este, la empresa cliente incurre en responsabilidad solidaria ante el SAT. |'
    ]
  },
  {
    id: 'formulacion-tecnica',
    title: 'Formulación Técnica Verificable del Problema',
    subtitle: 'Definición medible del reto de diseño.',
    category: 'technical',
    content: [
      'El enunciado del problema se redactó siguiendo los tres criterios de Ulrich et al. (2020, Cap. 5, p. 82): que sea verificable, delimitado y tecnológicamente neutro.',
      'Enunciado Técnico del Problema:',
      'Diseñar un sistema que permita a las empresas del sector del autotransporte de carga en México evaluar objetivamente el perfil de competencia técnica, condición física, historial de confiabilidad y aptitud operativa de los conductores de unidades de carga, para asignarlos a operaciones logísticas de acuerdo con el nivel de exigencia y riesgo de cada ruta, incluyendo larga distancia interestatal, distribución urbana de última milla y transporte de carga de alto valor, reduciendo en al menos 40% la tasa de asignaciones fallidas respecto a los métodos de reclutamiento tradicional del sector, y operando en corredores logísticos de alta demanda bajo los marcos normativos de la NOM-087-SCT-2-2017, el REPSE y la LFPDPPP, en un contexto de déficit estructural de más de 90,000 operadores calificados y creciente presión del nearshoring sobre la cadena de suministro nacional.',
      '3.1 Justificación del enunciado',
      'El enunciado cumple los tres criterios. Es verificable porque incluye un parámetro numérico concreto: reducción del 40% en asignaciones fallidas respecto al método tradicional, cifra anclada a estadísticas documentadas del sector.',
      'Está delimitado porque especifica el usuario (empresas del autotransporte), el entorno (corredores de alta demanda), las condiciones (déficit de más de 90,000 operadores, presión del nearshoring) y los marcos normativos que aplican.',
      'Y es tecnológicamente neutro porque no menciona plataformas, aplicaciones ni algoritmos: el término "sistema" puede tomar cualquier forma, lo que deja abierto el espacio de exploración conceptual que los próximos avances requieren.'
    ]
  },
  {
    id: 'especificaciones',
    title: 'Especificaciones Preliminares del Sistema',
    subtitle: 'Definición del MVP, requerimientos funcionales, técnicos, de restricción y calidad.',
    category: 'technical',
    content: [
      'Las especificaciones se construyeron siguiendo el Capítulo 6 de Ulrich et al. (2020, pp. 103-120): primero se listaron métricas a partir de las necesidades identificadas, luego se recopiló información de benchmarking contra normativas y datos del sector, y finalmente se fijaron valores objetivo-numéricos. Toda especificación sin número o rango se descartó.',
      'Los valores de referencia provienen de estadísticas de CANACAR (tasa de siniestralidad sectorial: 5.2 incidentes por cada 100,000 km; retención a 12 meses: 45%), del Plan México 2026 (30,000 accidentes anuales) y de programas de retención documentados como AMO y Daimler Truck México, que reportan retención del 75% entre sus egresadas certificadas.',
      'Tabla 4. Especificaciones preliminares',
      '| Código | Requerimiento | Tipo | Métrica / Indicador | Valor Objetivo | Unidad |',
      '|---|---|---|---|---|---|',
      '| R1 | Tiempo de asignación de operador disponible | Funcional | Tiempo transcurrido desde la solicitud del cliente hasta la confirmación de operador asignado | <= 4 | Horas |',
      '| R2 | Cobertura de solicitudes urgentes | Funcional | Porcentaje de solicitudes urgentes atendidas en menos de 24 horas | >= 85 | % de solicitudes |',
      '| R3 | Reducción de asignaciones fallidas respecto al método tradicional | Funcional | Porcentaje de reducción de incidentes de asignación incorrecta vs. reclutamiento tradicional | >= 40 | % de reducción |',
      '| R4 | Tasa de siniestralidad de operadores asignados | Funcional | Número de incidentes de tráfico o seguridad por 100,000 km recorridos por operadores del sistema (benchmark sector: 5.2) | <= 2.5 | Incidentes / 100,000 km |',
      '| R5 | Retención de operadores a 12 meses | Funcional | Porcentaje de operadores activos que permanecen en el sistema después de 12 meses (benchmark sector: 45%) | >= 70 | % de operadores activos |',
      '| R6 | Tiempo de reemplazo de emergencia | Funcional | Tiempo desde la notificación de ausencia del operador original hasta la confirmación del sustituto | <= 2 | Horas |',
      '| R7 | Exactitud de clasificación por perfil-operación | Técnico | Porcentaje de asignaciones en que el perfil del operador es compatible con el tipo de operación, validado por retroalimentación | >= 90 | % de asignaciones compatibles |',
      '| R8 | Frecuencia de actualización del expediente del operador | Técnico | Número máximo de días entre actualizaciones obligatorias del perfil activo de un operador | <= 30 | Días |',
      '| R9 | Cobertura de dimensiones de evaluación del operador | Técnico | Número de dimensiones de evaluación cubiertas: competencia técnica, condición física, antecedentes/confiabilidad, historial operativo | >= 4 | Dimensiones validadas |',
      '| R10 | Tiempo de incorporación de nuevo operador al sistema | Técnico | Tiempo desde la solicitud de ingreso hasta la generación del perfil completo y habilitación | <= 5 | Días hábiles |',
      '| R11 | Protección de datos sensibles conforme a LFPDPPP | Restricción | Porcentaje de datos sensibles almacenados con consentimiento expreso documentado y medidas de seguridad | 100 | % de registros |',
      '| R12 | Cumplimiento de aptitud física (NOM-087-SCT-2-2017) | Restricción | Porcentaje de operadores asignados con certificado de aptitud física vigente conforme a la norma | 100 | % de operadores activos asignados |',
      '| R13 | Registro REPSE vigente | Restricción | Estado de registro ante el REPSE con renovación anual, como condición de operación legal del sistema | Activo y vigente | Sí / No (binario) |',
      '| R14 | Capacidad mínima de gestión de perfiles simultáneos | Técnico | Número de perfiles de operadores activos que el sistema puede gestionar sin degradación (MVP / escala) | >= 500 MVP / >= 5,000 escala | Perfiles activos |'
    ]
  },
  {
    id: 'generacion-conceptual',
    title: 'Generación Conceptual Inicial',
    subtitle: 'Alternativas iniciales para convertir la idea en una solución viable.',
    category: 'technical',
    content: [
      'La generación de conceptos siguió el método del Capítulo 7 de Ulrich et al. (2020, pp. 125-153). El proceso parte de descomponer el problema en sus subfunciones esenciales, permitiendo explorar principios de solución independientes.',
      '5.1 Clarificación: descomposición en subfunciones críticas',
      'SF1. Capturar datos del operador: competencia técnica, condición física, antecedentes penales/laborales e historial de desempeño.',
      'SF2. Evaluar y puntuar al operador, generando un perfil de aptitud diferenciado por tipo de operación.',
      'SF3. Clasificar al operador según su perfil (larga distancia, distribución urbana, transporte de alto valor).',
      'SF4. Comunicar la disponibilidad y perfil del operador a la empresa solicitante.',
      'SF5. Ejecutar la asignación operador-operación garantizando compatibilidad de perfil.',
      'SF6. Registrar retroalimentación posoperación y actualizar el perfil del operador.',
      '5.2 Búsqueda externa',
      'Se revisaron referentes de otros sectores que resuelven problemas similares: sistemas de calificación de Uber y DiDi, esquemas de certificación modular del CONOCER, centros de formación de CANACAR con programas de 180 horas en UT Nuevo Laredo, scoring de Buró de Crédito y el triage médico por niveles de aptitud.',
      '5.3 Exploración sistemática: árbol morfológico simplificado',
      '| Subfunción | Concepto A: Puntuación Dinámica con asignación algorítmica | Concepto B: Certificación Modular Presencial con Red de Coordinadores |',
      '|---|---|---|',
      '| SF1. Captura de datos | Integración automática con sistemas de telemetría GPS y formularios digitales estructurados | Evaluación presencial en centros de valoración física certificados |',
      '| SF2. Evaluación y puntuación | Algoritmo de puntuación multivariable con ponderación dinámica de dimensiones | Panel de evaluadores certificados aplicando rúbrica estandarizada |',
      '| SF3. Clasificación del operador | Categorización automática por umbral de score diferenciado por tipo de operación | Acreditación por módulos de competencia verificados |',
      '| SF4. Comunicación | Repositorio centralizado consultable en tiempo real por las empresas cliente | Catálogo de operadores certificados distribuido regionalmente |',
      '| SF5. Asignación | Motor de matching automatizado por compatibilidad perfil-operación, con ranking | Coordinador regional que consulta el catálogo y vincula al operador |',
      '| SF6. Actualización | Actualización automática continua por eventos registrados en tiempo real | Renovación periódica de módulos de certificación con evaluación presencial |',
      '5.4 Concepto A: Sistema de puntuación dinámica con asignación algorítmica Centralizada',
      'El Concepto A parte de integrar datos de múltiples fuentes en un repositorio centralizado: telemetría GPS del vehículo, registros médicos/toxicológicos periódicos, historial de antecedentes y retroalimentación del cliente. Un algoritmo de puntuación genera un índice de aptitud operativa dinámico multivariable.',
      'Fortalezas: Cubre bien las necesidades de actualización continua (N4), asignación compatible (N5) y reemplazo ágil (N7). Cumple estructuralmente con los tiempos de respuesta de R1 y R6 de forma automatizada.',
      'Debilidades: Alta dependencia de la calidad de datos de entrada y conectividad. Complejidad en la gestión de datos sensibles bajo la LFPDPPP y riesgo potencial de resistencia por parte de operadores ante un monitoreo continuo (afectando N9).',
      '5.5 Concepto B: Sistema de Certificación Modular Presencial con asignación por Red de Coordinadores Regionales',
      'El Concepto B se basa en una red de centros de valoración física y técnica (propios o en alianza con CANACAR), donde los operadores acreditan módulos presenciales: simulador, valoración médica, examen normativo y de carga. Cada módulo genera una credencial verificada y portable.',
      'Fortalezas: Evaluación presencial robusta y difícil de falsificar. Cumple naturalmente con la NOM-087-SCT-2-2017 y resulta altamente accesible para operadores con baja alfabetización digital (N9).',
      'Debilidades: Limitaciones claras de escala y velocidad. Actualizaciones periódicas y no en tiempo real (tensión con N4 y R8). Si hay desabasto regional de perfiles calificados, se compromete el cumplimiento de los tiempos de R1, introduciendo variabilidad humana en R7.'
    ]
  },
  {
    id: 'arquitectura',
    title: 'Arquitectura Funcional Preliminar',
    subtitle: 'El motor modular debajo del capó de troperfly.ai.',
    category: 'technical',
    content: [
      'Para garantizar la neutralidad metodológica del Avance 1 y asegurar la viabilidad del proyecto, se propone una arquitectura modular. Esta separación lógica e institucional permite aislar funciones críticas de cumplimiento normativo y protección de datos sensibles, de las operaciones diarias de asignación y telemetría.',
      'Estructura Modular del Ecosistema:',
      '1. Módulo de Registro y Expediente (SF1): Centraliza la captura de documentos, licencias vigentes y autorizaciones expresas del conductor.',
      '2. Módulo de Certificación Presencial (SF1, SF2): Valida las dimensiones médicas y de simulación técnica en entornos físicos controlados.',
      '3. Módulo ScoreDriver / Evaluación (SF2): Ejecuta el algoritmo de ponderación o la matriz de rúbricas para determinar el índice de aptitud activa.',
      '4. Módulo de Clasificación y Asignación (SF3, SF5): Realiza el cruce de variables de compatibilidad operativa según el nivel de riesgo de la ruta asignada.',
      '5. Módulo Transversal de Cumplimiento Legal: Monitorea las actualizaciones regulatorias del REPSE, la LFPDPPP y auditorías de no discriminación.'
    ]
  },
  {
    id: 'fundamentacion-teorica',
    title: 'Fundamentación Teórica Preliminar',
    subtitle: 'Bases académicas, de diseño e industria que sostienen la propuesta.',
    category: 'conclusion',
    content: [
      'El sustento metodológico de este avance se basa estrictamente en la ingeniería de diseño estructurada por Ulrich, Eppinger y Yang (2020). El enfoque de mantener una perspectiva tecnológicamente neutra durante la fase de fundamentación asegura que el espacio operativo de solución permanezca abierto, evitando sesgos comerciales tempranos.',
      'Por otra parte, la descomposición funcional detallada sigue los principios de Pahl y Beitz (2007). Al traducir los requerimientos complejos de la industria del transporte en subfunciones abstractas independientes (SF1 a SF6), el equipo de diseño logra aislar el "qué debe hacer el sistema" del "cómo lo hará", permitiendo un análisis comparativo robusto mediante árboles morfológicos estructurados.'
    ]
  },
  {
    id: 'conclusiones',
    title: 'Conclusiones Preliminares',
    subtitle: 'Hallazgos principales del primer avance.',
    category: 'conclusion',
    content: [
      'El análisis realizado permite concluir que la crisis del transporte de carga en México trasciende el simple desabasto numérico de personal; se trata de una deficiencia estructural en los mecanismos de validación de confianza y asignación especializada ante escenarios exigentes como el nearshoring.',
      'Mantener un enfoque conceptualmente neutro en esta etapa ha permitido trazar parámetros medibles claros, como la meta de reducción del 40% en asignaciones fallidas. El siguiente paso crítico para troperfly.ai consistirá en modelar la convergencia híbrida óptima entre la inmediatez algorítmica del Concepto A y el blindaje normativo presencial del Concepto B.'
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