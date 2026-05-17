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
      'Proyecto: Sistema de evaluación, clasificación y asignación de operadores de autotransporte de carga para el sector logístico mexicano',
      'Nombre comercial provisional: troperfly.ai',
      'Avance 1: Fundamentación del problema | Equipo 05 | Fecha de entrega: Domingo, 17 de mayo de 2026',
      'Este documento corresponde al Avance 1 del proyecto integrador de la materia Calidad en la innovación de productos, procesos y servicios. Su propósito es fundamentar el problema de diseño mediante la identificación de necesidades, la definición técnica del problema, el establecimiento de especificaciones preliminares y la generación conceptual inicial, siguiendo el proceso descrito por Ulrich, Eppinger y Yang, principalmente en los capítulos 5, 6 y 7.',
      'El proyecto parte de un problema real y documentado: el déficit de operadores calificados en el autotransporte de carga en México supera las 90,000 vacantes en 2026. Esta situación afecta la continuidad logística, la eficiencia operativa, la seguridad de las mercancías y la capacidad de respuesta de las empresas ante la demanda nacional e internacional. El objetivo del proyecto es diseñar un sistema que permita evaluar, clasificar y asignar operadores de autotransporte de carga a operaciones logísticas de forma confiable, objetiva y verificable.',
      'El enfoque de este avance es tecnológicamente neutro. Esto significa que no se asume desde el inicio una solución específica, una aplicación, un algoritmo, una plataforma de inteligencia artificial o un modelo operativo definitivo. En esta etapa, troperfly.ai se utiliza como nombre comercial provisional del sistema, pero la formulación del problema permanece abierta para permitir la exploración de distintas alternativas conceptuales.',
      'Desde esta perspectiva, el proyecto busca responder a una necesidad crítica del sector: contar con una forma estandarizada para determinar si un operador es apto para una operación específica, considerando su competencia técnica, condición física, historial de confiabilidad, experiencia, desempeño operativo y compatibilidad con el nivel de exigencia de cada ruta.'
    ]
  },
  {
    id: 'contexto-problema',
    title: 'Definición del Contexto del Problema',
    subtitle: 'Análisis de la crisis de confianza en el transporte.',
    category: 'context',
    content: [
      'El autotransporte de carga en México opera sobre una red de corredores federales que conectan los principales polos industriales del país, como Nuevo León, Chihuahua, Coahuila, el Bajío y la Zona Metropolitana del Valle de México. Esta red es fundamental para el comercio nacional e internacional, especialmente por su relación con el intercambio comercial con Estados Unidos y los compromisos derivados del T-MEC.',
      'El entorno físico y geográfico del problema incluye rutas de larga distancia interestatal, distribución urbana de última milla, reparto local, transporte de carga de alto valor, operaciones punto a punto y rutas regionales de alta demanda. Cada tipo de operación exige condiciones distintas. No es equivalente asignar a un operador para una ruta urbana de reparto capilar que asignarlo a una ruta interestatal nocturna, con mercancía de alto valor o con restricciones estrictas de tiempo.',
      'El entorno social y laboral también condiciona el problema. Las condiciones laborales del sector presentan retos importantes: ingresos promedio limitados, informalidad laboral, baja profesionalización, envejecimiento de la fuerza laboral, reducción en la participación de conductores jóvenes y dificultad para atraer nuevos operadores. Muchos conductores desarrollan sus competencias de forma empírica, sin una ruta formal de certificación, actualización o evaluación continua.',
      'En el entorno institucional, cualquier solución debe considerar las normas y obligaciones aplicables al transporte de carga y a la gestión de personal. Entre las restricciones principales se encuentran la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, el régimen de subcontratación especializada mediante REPSE y las normas oficiales mexicanas aplicables al autotransporte, incluyendo la NOM-087-SCT-2-2017, relacionada con condiciones físico-médicas de los operadores, y la NOM-012-SCT-2-2017, vinculada con peso y dimensiones de vehículos de autotransporte.',
      'El problema de fondo es que el sector no cuenta con una forma suficientemente estandarizada, verificable y trazable para saber si un conductor es apto para la operación que se le va a asignar. Las empresas suelen contratar o asignar operadores con criterios informales y no diferenciados. En muchos casos, se aplica el mismo proceso de evaluación para un conductor de larga distancia con carga de alto valor que para uno de distribución urbana o última milla.',
      'Las consecuencias son medibles. Al primer semestre de 2026, el déficit de operadores calificados supera las 90,000 vacantes en México, con un crecimiento relevante respecto a años anteriores. El sector registra más de 30,000 accidentes anuales en carreteras federales, muchos de ellos relacionados con falta de verificación sistemática de aptitud técnica y física. Las pérdidas por robo de carga superan montos significativos y el relevo generacional es insuficiente. Además, la presión del nearshoring incrementa la demanda logística en corredores clave como Nuevo León, lo que agrava la necesidad de contar con operadores confiables y correctamente asignados.'
    ]
  },
  {
    id: 'usuarios',
    title: 'Usuarios Involucrados',
    subtitle: 'Actores clave del ecosistema troperfly.ai.',
    category: 'analysis',
    content: [
      'Los usuarios directos del sistema son aquellos que interactúan de manera operativa con la solución:',
      '1. Empresas de logística y autotransporte: Son las organizaciones que necesitan reclutar, evaluar, clasificar y asignar operadores a sus operaciones. Buscan reducir incertidumbre, tiempos de contratación, rotación, siniestralidad, incumplimientos y riesgos de confianza.',
      '2. Operadores de autotransporte de carga: Son los conductores que serán evaluados, clasificados, certificados y asignados a operaciones logísticas. Necesitan un proceso justo, comprensible y transparente que les permita demostrar sus competencias, acceder a mejores oportunidades y construir una trayectoria profesional verificable.',
      '3. Agencia o entidad administradora troperfly.ai: Es el actor que operaría el sistema-servicio. Su función sería integrar procesos de reclutamiento, validación documental, evaluación, clasificación, asignación, capacitación, seguimiento y actualización del perfil del operador.',
      '4. Coordinadores logísticos: Son responsables de cubrir rutas, resolver ausencias, asignar operadores, controlar tiempos y responder ante contingencias. Necesitan información rápida y confiable para tomar decisiones operativas.',
      '5. Áreas de recursos humanos: Participan en el ingreso, documentación, capacitación, permanencia y desarrollo de los operadores. Necesitan estandarizar perfiles, reducir rotación y mejorar la retención.',
      '6. Áreas de seguridad patrimonial y cumplimiento: Se enfocan en reducir riesgos de robo, siniestros, antecedentes no validados, incumplimientos normativos y exposición legal.',
      'Los usuarios secundarios son aquellos que no necesariamente operan el sistema de forma cotidiana, pero se ven afectados por sus resultados:',
      '1. Empresas manufactureras y de consumo masivo: Dependen de entregas puntuales, seguras y confiables para sostener su producción, distribución y servicio al cliente.',
      '2. Aseguradoras: Tienen interés en reducir siniestralidad, pérdidas, reclamos y exposición de riesgo.',
      '3. Autoridades regulatorias: Incluyen instancias como la SICT, la STPS y autoridades vinculadas con privacidad, transporte, seguridad vial y subcontratación especializada.',
      '4. Centros de capacitación y certificación: Pueden participar como aliados en la evaluación de competencias, simuladores, programas de formación y certificaciones modulares.',
      '5. Clientes finales o puntos de entrega: Reciben la mercancía y experimentan directamente la calidad del servicio, puntualidad, trato del operador y cumplimiento de la entrega.'
    ]
  },
  {
    id: 'necesidades',
    title: 'Necesidades, Deseos y Restricciones',
    subtitle: 'Qué resolvemos, qué valor buscamos y qué límites debe respetar la solución.',
    category: 'analysis',
    content: [
      'Para identificar las necesidades se siguió el proceso de cinco pasos de Ulrich, Eppinger y Yang. Las fuentes revisadas incluyen reportes de CANACAR, Webfleet MX, The Logistics World, AMTM, normativas vigentes y estadísticas de siniestralidad y robo de carga.',
      'Cada dato bruto se tradujo a un enunciado de necesidad en términos de lo que el sistema debe hacer, sin mencionar tecnologías específicas. Las necesidades resultantes se agruparon en tres funciones: evaluación del operador, clasificación y asignación, y sostenibilidad operativa. Las necesidades relacionadas con seguridad, privacidad y cumplimiento normativo tienen mayor peso, ya que operan como restricciones que ningún concepto puede ignorar.',
      'Tabla 1. Necesidades principales del sistema',
      '| Código | Tipo en rúbrica | Clasificación metodológica | Enunciado |',
      '|---|---|---|---|',
      '| N1 | Necesidad | Latente | El sistema debe medir objetivamente el nivel de competencia técnica de cada operador, considerando manejo defensivo, tipo de unidad, normativa vial y experiencia verificable. |',
      '| N2 | Restricción | Restricción | El sistema debe evaluar la condición física y de salud ocupacional del operador como requisito de aptitud, conforme a la normativa aplicable. |',
      '| N3 | Necesidad | Explícita | El sistema debe verificar y registrar historial de incidentes, antecedentes laborales, referencias y confiabilidad del operador. |',
      '| N4 | Necesidad | Latente | El sistema debe actualizar continuamente el perfil del operador y no limitarse a una evaluación única al momento de la contratación. |',
      '| N5 | Necesidad | Explícita | El sistema debe asignar a cada operador únicamente a operaciones compatibles con su perfil de competencia, experiencia y riesgo. |',
      '| N6 | Necesidad | Latente | El sistema debe permitir que el operador conozca y comprenda su propio perfil de evaluación para fomentar mejora continua. |',
      '| N7 | Necesidad | Explícita | El sistema debe proveer operadores de reemplazo ante ausencias imprevistas en el menor tiempo posible. |',
      '| N8 | Restricción | Restricción | El sistema debe proteger los datos sensibles del operador conforme a la normativa de privacidad vigente. |',
      '| N9 | Restricción | Latente | El sistema debe ser accesible para usuarios con distintos niveles de alfabetización digital. |',
      '| N10 | Restricción | Restricción | El sistema debe cumplir con los requisitos de operación bajo el régimen de subcontratación especializada aplicable. |',
      'Tabla 2. Deseos o atributos de valor agregado',
      '| Código | Tipo | Enunciado |',
      '|---|---|---|',
      '| D1 | Deseo | El operador podría visualizar su avance profesional mediante niveles, reconocimientos o categorías de desempeño. |',
      '| D2 | Deseo | Los operadores con mejor desempeño podrían acceder a rutas preferentes, mejores condiciones o esquemas de incentivo. |',
      '| D3 | Deseo | Las empresas cliente podrían consultar un tablero ejecutivo con disponibilidad, nivel de riesgo y compatibilidad del operador. |',
      '| D4 | Deseo | El sistema podría integrarse progresivamente con telemetría, GPS o sistemas de administración de flota. |',
      '| D5 | Deseo | La agencia podría ofrecer programas de capacitación modular o alianzas con centros de formación para fortalecer la oferta de operadores certificados. |',
      'Tabla 3. Restricciones críticas de diseño',
      '| Código | Restricción | Implicación para el diseño |',
      '|---|---|---|',
      '| RST1 | Protección de datos personales | El sistema manejará datos sensibles; debe existir consentimiento expreso, aviso de privacidad y medidas de seguridad. |',
      '| RST2 | Cumplimiento laboral | Si el modelo opera como tercerización especializada, debe considerar REPSE y responsabilidades laborales aplicables. |',
      '| RST3 | Aptitud física normativa | La asignación de operadores debe considerar certificados y evaluaciones vigentes cuando la normativa lo exija. |',
      '| RST4 | No discriminación | El sistema no debe utilizar criterios que generen sesgos indebidos por edad, género, condición social o cualquier atributo no relacionado con aptitud operativa. |',
      '| RST5 | Validación humana | Las decisiones críticas de contratación, bloqueo, asignación de alto riesgo o exclusión no deben depender únicamente de un cálculo automático. |',
      '| RST6 | Calidad de datos | El valor del sistema depende de que los datos sean consistentes, verificables, actualizados y auditables. |'
    ]
  },
  {
    id: 'formulacion-tecnica',
    title: 'Formulación Técnica Verificable del Problema',
    subtitle: 'Definición medible del reto de diseño.',
    category: 'technical',
    content: [
      'El enunciado del problema se redactó siguiendo tres criterios de Ulrich, Eppinger y Yang: que sea verificable, delimitado y tecnológicamente neutro. Verificable significa que incluye parámetros medibles. Delimitado significa que especifica quién usa el sistema, en qué condiciones y bajo qué normativa. Tecnológicamente neutro significa que no asume ningún principio de solución específico.',
      'El problema de diseño se formula de la siguiente manera:',
      'Diseñar un sistema que permita a las empresas del sector del autotransporte de carga en México evaluar objetivamente el perfil de competencia técnica, condición física, historial de confiabilidad y aptitud operativa de los conductores de unidades de carga, para asignarlos a operaciones logísticas de acuerdo con el nivel de exigencia y riesgo de cada ruta, incluyendo larga distancia interestatal, distribución urbana de última milla y transporte de carga de alto valor, reduciendo en al menos 40% la tasa de asignaciones fallidas respecto a los métodos de reclutamiento tradicional del sector, y operando en corredores logísticos de alta demanda bajo los marcos normativos de la NOM-087-SCT-2-2017, el REPSE y la LFPDPPP, en un contexto de déficit estructural de más de 90,000 operadores calificados y creciente presión del nearshoring sobre la cadena de suministro nacional.',
      'El enunciado cumple los tres criterios. Es verificable porque incluye un parámetro numérico concreto: reducción del 40% en asignaciones fallidas respecto al método tradicional. Está delimitado porque especifica el usuario, el entorno, las condiciones de operación y los marcos normativos aplicables. Además, es tecnológicamente neutro porque no menciona aplicaciones, algoritmos ni plataformas específicas. El término sistema puede tomar distintas formas, lo que deja abierto el espacio de exploración conceptual para los siguientes avances.',
      'Para efectos de identidad del proyecto, el sistema se denomina provisionalmente troperfly.ai, pero el nombre comercial no sustituye la formulación técnica del problema.'
    ]
  },
  {
    id: 'especificaciones',
    title: 'Especificaciones Preliminares del Sistema',
    subtitle: 'Definición del MVP, requerimientos funcionales, técnicos, de restricción y calidad.',
    category: 'technical',
    content: [
      'Las especificaciones se construyeron siguiendo el capítulo 6 de Ulrich, Eppinger y Yang. Primero se listaron métricas a partir de las necesidades identificadas; después se recopiló información de benchmarking contra normativas y datos del sector; finalmente se fijaron valores objetivo numéricos. Toda especificación sin número, rango o condición verificable se descartó como necesidad mal traducida.',
      'Los valores de referencia provienen de estadísticas sectoriales, reportes de siniestralidad y programas de retención documentados. Las especificaciones permiten evaluar el diseño de manera objetiva y evitan que el proyecto se quede en declaraciones generales de intención.',
      'Tabla 4. Especificaciones preliminares',
      '| Código | Requerimiento | Tipo | Métrica o indicador | Valor objetivo | Unidad |',
      '|---|---|---|---|---|---|',
      '| R1 | Tiempo de asignación de operador disponible | Funcional | Tiempo desde la solicitud del cliente hasta la confirmación de operador asignado | <= 4 | Horas |',
      '| R2 | Cobertura de solicitudes urgentes | Funcional | Porcentaje de solicitudes urgentes atendidas en menos de 24 horas | >= 85 | % de solicitudes |',
      '| R3 | Reducción de asignaciones fallidas respecto al método tradicional | Funcional | Reducción de incidentes de asignación incorrecta frente a reclutamiento tradicional | >= 40 | % de reducción |',
      '| R4 | Tasa de siniestralidad de operadores asignados | Funcional | Incidentes de tráfico o seguridad por 100,000 km recorridos | <= 2.5 | Incidentes / 100,000 km |',
      '| R5 | Retención de operadores a 12 meses | Funcional | Operadores activos que permanecen en el sistema después de 12 meses | >= 70 | % de operadores activos |',
      '| R6 | Tiempo de reemplazo de emergencia | Funcional | Tiempo desde de ausencia notificada hasta sustituto confirmado | <= 2 | Horas |',
      '| R7 | Exactitud de clasificación perfil-operación | Técnico | Asignaciones donde el perfil del operador es compatible con el tipo de operación | >= 90 | % de asignaciones compatibles |',
      '| R8 | Frecuencia de actualización del expediente del operador | Técnico | Días máximos entre actualizaciones obligatorias del perfil activo | <= 30 | Días |',
      '| R9 | Cobertura de dimensiones de evaluación | Técnico | Dimensiones cubiertas: competencia técnica, condición física, antecedentes, desempeño operativo | >= 4 | Dimensiones validadas |',
      '| R10 | Tiempo de incorporación de nuevo operador al sistema | Técnico | Tiempo desde solicitud de ingreso hasta perfil completo habilitado | <= 5 | Días hábiles |',
      '| R11 | Protección de datos sensibles conforme a LFPDPPP | Restricción | Datos sensibles con consentimiento expreso y medidas de seguridad activas | 100 | % de registros |',
      '| R12 | Cumplimiento de aptitud física conforme a NOM-087-SCT-2-2017 | Restricción | Operadores asignados con certificado de aptitud vigente cuando aplique | 100 | % de operadores activos asignados |',
      '| R13 | Registro REPSE vigente | Restricción | Estado de registro ante REPSE como condición de operación legal | Activo y vigente | Sí / No |',
      '| R14 | Capacidad mínima de gestión de perfiles simultáneos | Técnico | Perfiles activos administrados sin degradación del servicio | >= 500 MVP / >= 5,000 escala | Perfiles activos |'
    ]
  },
  {
    id: 'generacion-conceptual',
    title: 'Generación Conceptual Inicial',
    subtitle: 'Alternativas iniciales para convertir la idea en una solución viable.',
    category: 'technical',
    content: [
      'La generación de conceptos siguió el método del capítulo 7 de Ulrich, Eppinger y Yang. El proceso parte de descomponer el problema en sus subfunciones, es decir, en aquello que cualquier solución debe hacer independientemente de cómo lo haga. Esta descomposición permite comparar alternativas distintas sin quedar atrapados en una tecnología específica.',
      'Subfunciones críticas:',
      'SF1. Capturar datos del operador: competencia técnica, condición física, antecedentes laborales o penales permitidos, historial de desempeño e información documental.',
      'SF2. Evaluar y puntuar al operador: generar un perfil de aptitud diferenciado por tipo de operación.',
      'SF3. Clasificar al operador: determinar si es apto para larga distancia, distribución urbana, última milla, carga de alto valor u otra modalidad.',
      'SF4. Comunicar disponibilidad y perfil: mostrar a la empresa solicitante qué operadores están disponibles y qué nivel de compatibilidad tienen.',
      'SF5. Ejecutar la asignación operador-operación: vincular al operador con una operación específica garantizando compatibilidad de perfil.',
      'SF6. Registrar retroalimentación posoperación: capturar desempeño posterior a la ruta y actualizar el perfil del operador.',
      'Búsqueda externa de referentes:',
      'Para la búsqueda externa se revisaron referentes de otros sectores que resuelven problemas similares: sistemas de calificación de conductores en plataformas de movilidad, esquemas de certificación modular, centros de formación especializados, modelos de scoring crediticio y triage médico por niveles de aptitud. Ninguno aplica directamente al autotransporte de carga en México, pero cada uno aporta un principio de solución para alguna de las subfunciones identificadas.',
      'Árbol morfológico simplificado',
      '| Subfunción | Concepto A: Puntuación dinámica con asignación algorítmica | Concepto B: Certificación modular presencial con red de coordinadores |',
      '|---|---|---|',
      '| SF1. Captura de datos | Integración con telemetría, formularios digitales y registros estructurados | Evaluación presencial en centros de valoración física y técnica |',
      '| SF2. Evaluación | Puntuación multivariable con ponderación de dimensiones | Panel de evaluadores certificados con rúbrica estandarizada |',
      '| SF3. Clasificación | Categorización automática por umbrales de score | Acreditación por módulos de competencia |',
      '| SF4. Comunicación | Repositorio centralizado consultable en tiempo real | Catálogo regional de operadores certificados |',
      '| SF5. Asignación | Motor de matching por compatibilidad perfil-operación | Coordinador regional vincula operador con operación |',
      '| SF6. Actualización | Actualización continua por eventos registrados | Renovación periódica de módulos de certificación |',
      'Concepto A: Sistema de puntuación dinámica con asignación algorítmica centralizada',
      'Este concepto integra datos de múltiples fuentes en un repositorio centralizado: telemetría del vehículo, registros documentales, historial de desempeño, retroalimentación del cliente y validaciones periódicas. Con esos datos, el sistema calcula un índice de aptitud operativa para cada conductor. Cuando una empresa solicita un operador, el sistema identifica al conductor con mayor compatibilidad entre su perfil y los requisitos de la operación.',
      'Este concepto cubre adecuadamente las necesidades de actualización continua del perfil, asignación compatible y reemplazo ágil. También permite cumplir metas de tiempo como R1 y R6. Su mayor fortaleza es la velocidad de respuesta y la trazabilidad del criterio de asignación.',
      'Sus puntos débiles son la dependencia de datos de calidad, conectividad, integración con fuentes externas y aceptación por parte de operadores que podrían interpretar el monitoreo como vigilancia excesiva. Además, requiere una gestión cuidadosa de datos sensibles.',
      'Concepto B: Sistema de certificación modular presencial con asignación por red de coordinadores regionales',
      'Este concepto funciona de forma distinta. Se basa en una red de centros de valoración física, técnica y documental, propios o en alianza con instituciones existentes. En estos centros, los operadores acreditan módulos presenciales, como manejo en simulador, valoración médica estructurada, examen de normativa vial, manejo de carga y verificación de antecedentes permitidos. Cada módulo acreditado genera una credencial verificable y portable. El conjunto de credenciales define para qué tipos de operación está habilitado el conductor. La asignación la realiza un coordinador regional que consulta el catálogo de operadores disponibles en su zona.',
      'La ventaja principal de este concepto es la robustez de la evaluación presencial. Es más difícil falsificar un resultado de simulador que un dato digital aislado. Además, este concepto facilita el cumplimiento de requisitos médicos y puede ser más accesible para operadores con baja alfabetización digital. La credencial portable también beneficia directamente al conductor que cambia de empresa sin perder su historial de certificación.',
      'Sus limitaciones están en la velocidad y escalabilidad. El perfil se actualiza periódicamente y no necesariamente en tiempo real. Además, si no hay operadores certificados disponibles en una región, el sistema podría no cumplir los tiempos de respuesta esperados. La evaluación humana introduce variabilidad, por lo que sería necesario estandarizar rúbricas y auditorías.',
      'Alternativa recomendada para evolución inicial',
      'La alternativa más sólida para troperfly.ai es un modelo híbrido. En una primera etapa, se recomienda iniciar con certificación modular y evaluación semiautomatizada para asegurar confianza, legalidad y adopción. En una segunda etapa, el sistema puede evolucionar hacia puntuación dinámica e integración con telemetría, una vez que exista una base de datos suficiente y procesos maduros de gobernanza.'
    ]
  },
  {
    id: 'arquitectura',
    title: 'Arquitectura Funcional Preliminar',
    subtitle: 'El motor modular debajo del capó de troperfly.ai.',
    category: 'technical',
    content: [
      'La arquitectura funcional preliminar de troperfly.ai debe organizarse como un sistema modular. Esta decisión permite iniciar con un producto mínimo viable, incorporar nuevos módulos con el tiempo y reducir riesgos de implementación. La arquitectura también permite separar funciones críticas, como cumplimiento, privacidad y validación de datos sensibles, de funciones operativas como disponibilidad, asignación y retroalimentación.',
      'Tabla 5. Arquitectura funcional preliminar',
      '| Módulo | Función principal | Relación con subfunciones |',
      '|---|---|---|',
      '| Módulo de registro y expediente | Captura datos del operador, documentos, licencias, experiencia y autorizaciones | SF1 |',
      '| Módulo de certificación | Valida competencias, aptitud física, capacitación y requisitos documentales | SF1, SF2 |',
      '| Módulo de evaluación y score | Calculates un perfil de aptitud o score operativo con base en dimensiones validadas | SF2 |',
      '| Módulo de clasificación operativa | Clasifica operadores por tipo de ruta, unidad, carga y nivel de riesgo | SF3 |',
      '| Módulo de disponibilidad | Muestra operadores disponibles por zona, horario, certificación y perfil | SF4 |',
      '| Módulo de asignación | Sugiere o ejecuta asignación operador-operación con validación humana | SF5 |',
      '| Módulo de retroalimentación posoperación | Registra desempeño, incidencias, puntualidad, trato al cliente y cumplimiento | SF6 |',
      '| Módulo de actualización continua | Actualiza el expediente y recalcula el perfil en periodos definidos | SF6 |',
      '| Módulo de cumplimiento y privacidad | Gestiona consentimiento, aviso de privacidad, REPSE, NOM aplicables y auditoría | Transversal |',
      '| Módulo de desarrollo del operador | Administra capacitación, niveles, incentivos y plan de carrera | Transversal |',
      'Esta arquitectura conserva la neutralidad metodológica del Avance 1 porque no obliga a iniciar con inteligencia artificial avanzada. Puede comenzar como una plataforma semiautomatizada con procesos presenciales y evolucionar hacia modelos más inteligentes de asignación conforme se acumulen datos de calidad.',
      'Desde una perspectiva de diseño, troperfly.ai puede entenderse como un sistema-servicio. No es únicamente software ni únicamente agencia de empleo; integra procesos, personas, reglas, datos, capacitación, certificación y toma de decisiones operativas.'
    ]
  },
  {
    id: 'fundamentacion-teorica',
    title: 'Fundamentación Teórica Preliminar',
    subtitle: 'Bases académicas, de diseño e industria que sostienen la propuesta.',
    category: 'conclusion',
    content: [
      'El proyecto se fundamenta en el enfoque de diseño sistemático propuesto por Ulrich, Eppinger y Yang. En la identificación de necesidades, estos autores plantean que el equipo de diseño debe escuchar la voz del usuario, traducir datos brutos en enunciados de necesidad y evitar adelantar soluciones antes de comprender el problema. Por esta razón, el avance mantiene una formulación tecnológicamente neutra y separa necesidades, deseos y restricciones.',
      'En el desarrollo de especificaciones, Ulrich, Eppinger y Yang establecen que las necesidades deben transformarse en métricas medibles. Esto se refleja en la tabla de especificaciones preliminares, donde cada requerimiento cuenta con indicador, valor objetivo y unidad. La intención es que el diseño pueda evaluarse posteriormente con evidencia, no solo con afirmaciones generales.',
      'En la generación conceptual, Ulrich, Eppinger y Yang proponen descomponer el problema en subfunciones, buscar referentes externos, explorar alternativas y combinar principios de solución. Por ello, el documento identifica seis subfunciones críticas y compara dos conceptos iniciales: puntuación dinámica con asignación algorítmica y certificación modular presencial con red de coordinadores.',
      'Desde la perspectiva de Pahl y Beitz, el diseño de ingeniería requiere clarificar la tarea, identificar funciones esenciales y generar principios de solución antes de seleccionar un concepto definitivo. Esta lógica refuerza la decisión de no partir directamente de una aplicación con inteligencia artificial, sino de analizar qué debe hacer el sistema: capturar información, evaluar aptitud, clasificar perfiles, comunicar disponibilidad, asignar operadores y actualizar el perfil después de cada operación.',
      'El enfoque de arquitectura de producto también es relevante para troperfly.ai. Una arquitectura modular permite separar funciones críticas, reducir complejidad, facilitar escalabilidad y adaptar el sistema a distintos contextos operativos. En este caso, la modularidad permite iniciar con certificación, expediente digital y asignación básica, para después integrar telemetría, scoring dinámico, tableros avanzados o modelos predictivos.',
      'El sustento empírico del problema proviene de fuentes del sector logístico mexicano, incluyendo reportes sobre déficit de operadores, nearshoring, robo de carga, siniestralidad, informalidad laboral, envejecimiento de la fuerza laboral y programas de capacitación. Estas fuentes permiten afirmar que el reto no es hipotético, sino una necesidad real de la cadena de suministro nacional.'
    ]
  },
  {
    id: 'conclusiones',
    title: 'Conclusiones Preliminares',
    subtitle: 'Hallazgos principales del primer avance.',
    category: 'conclusion',
    content: [
      'El análisis realizado permite concluir que el problema central del proyecto no es únicamente la falta de operadores de transporte de carga, sino la ausencia de un sistema confiable, estandarizado y verificable para evaluar, clasificar y asignar operadores de acuerdo con el nivel de exigencia de cada operación logística.',
      'troperfly.ai se plantea como un sistema-servicio orientado a mejorar la confiabilidad del capital humano logístico. Su valor radica en integrar evaluación objetiva, certificación, clasificación operativa, asignación compatible, trazabilidad, cumplimiento normativo y desarrollo profesional del operador.',
      'El enfoque tecnológicamente neutro permite evitar una selección prematura de solución. En esta etapa, la prioridad es comprender el problema, identificar necesidades, establecer métricas y comparar conceptos. La inteligencia artificial, la automatización o la telemetría pueden incorporarse en fases posteriores, siempre que respondan a una necesidad real y no a una adopción tecnológica sin fundamento.',
      'Las alternativas conceptuales muestran dos rutas complementarias. La puntuación dinámica ofrece velocidad, actualización continua y escalabilidad, mientras que la certificación modular presencial ofrece robustez, confianza y mayor control normativo. Por ello, el camino más viable para troperfly.ai es una evolución híbrida: comenzar con certificación y scoring semiautomatizado, y posteriormente avanzar hacia asignación dinámica basada en datos.',
      'Para los siguientes avances será necesario profundizar en la selección conceptual, ponderar criterios de decisión, diseñar la arquitectura del sistema con mayor detalle, validar el modelo de score, revisar riesgos legales y éticos, y definir cómo se medirá el impacto real en asignaciones fallidas, siniestralidad, retención y eficiencia operativa.'
    ]
  },
  {
    id: 'referencias',
    title: 'Referencias',
    subtitle: 'Fuentes y bibliografía consultada.',
    category: 'conclusion',
    content: [
      'Agente Digitalizado. (2026). Nearshoring en México 2026: Datos, industrias ganadoras y proyecciones a 2030. https://agentedigitalizado.com/nearshoring-en-mexico-2026-datos-industrias-ganadoras-y-proyecciones-a-2030/',
      'Asociación de Mujeres Operadoras [AMO] / El Financiero. (2026). Mujeres: la reserva estratégica del autotransporte en México. https://www.elfinanciero.com.mx/transporte-y-movilidad/2026/02/25/mujeres-la-reserva-estrategica-del-autotransporte-en-mexico/',
      'Cámara Nacional del Autotransporte de Carga [CANACAR]. (2026). Faltan más de 90 mil operadores en carreteras. El Sol de México. https://oem.com.mx/elsoldemexico/finanzas/faltan-mas-de-90-mil-operadores-en-carreteras-alerta-canacar-28165722',
      'Data México / Secretaría del Trabajo y Previsión Social [STPS]. (2024). Conductores de camiones, camionetas y automóviles de carga: Salarios, diversidad, industrias e informalidad laboral. https://www.economia.gob.mx/datamexico/es/profile/occupation/conductores-de-camiones-camionetas-y-automoviles-de-cargo',
      'Gobierno de México / Presidencia. (2026). Plan México: presidenta Claudia Sheinbaum presenta Programa de protección a la Industria de Vehículos Pesados. https://www.gob.mx/presidencia/prensa/plan-mexico',
      'Gobierno de México / Secretaría de Infraestructura, Comunicaciones y Transportes [SICT]. (2025). Programa Sectorial de Infraestructura, Comunicaciones y Transportes 2025-2030. https://www.gob.mx/cms/uploads/attachment/file/1021187/09_PS_SICT_2025-2030.pdf',
      'International Road Transport Union [IRU]. (2026). IRU estima déficit de conductores del 40% a nivel global. CANACAR. https://canacar.com.mx/iru-estima-deficit-conductores-del-40-a-nivel-global/',
      'Kern Grosse. (2026). Seguridad en carreteras en 2026: El blindaje necesario para el autotransporte en México. https://www.kerngrosse.com.mx/seguridad-en-carreteras-2026-mexico/',
      'Pahl, G., Beitz, W., Feldhusen, J., & Grote, K. H. (2007). Engineering design: A systematic approach (3rd ed.). Springer.',
      'The Logistics World. (2026). Nearshoring en México enfrenta límites en infraestructura, energía y talento. https://thelogisticsworld.com/actualidad-logistica/nearshoring-en-mexico-enfrenta-limites-infraestructura-energia-talento/',
      'Ulrich, K. T., Eppinger, S. D., & Yang, M. C. (2020). Product design and development (7a ed.). McGraw-Hill Education.',
      'Webfleet MX. (2026). Falta de conductores en México: causas y soluciones. https://www.webfleet.com/es_mx/webfleet/fleet-challenges/driver-shortage/'
    ]
  }
];