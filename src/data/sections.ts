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
      `La eficiencia de la cadena de suministro depende de la coordinación entre infraestructura, unidades de transporte, sistemas de información, procesos logísticos y capital humano especializado. Sin embargo, dentro del transporte de carga, el operador continúa siendo un factor crítico para la continuidad operativa, la seguridad de la mercancía, el cumplimiento de entregas y la calidad del servicio. Aunque muchas empresas ya utilizan herramientas de rastreo, telemetría, monitoreo satelital, administración de flotas y planeación de rutas, la selección, evaluación, capacitación y asignación de operadores sigue realizándose con criterios parcialmente fragmentados, lo que limita la capacidad de tomar decisiones confiables y oportunas.`,
      `En este contexto, el proyecto troperfly.ai propone el diseño de una plataforma inteligente para la certificación, tercerización y asignación confiable de operadores de transporte de carga. La solución se concibe como un sistema-servicio orientado al mercado B2B, donde una agencia especializada administra operadores logísticos y utiliza una plataforma tecnológica para integrar información documental, operativa, técnica y de desempeño. Su propósito es apoyar a empresas de distribución, manufactura, retail, comercio electrónico, consumo masivo y logística tercerizada que requieren operadores confiables, disponibles y adecuados al tipo de ruta, unidad, mercancía y nivel de criticidad de cada operación.`,
      `El problema central que atiende el proyecto no se reduce únicamente a la escasez de operadores. La dificultad principal se encuentra en la ausencia de un mecanismo estandarizado, medible y trazable para evaluar la confiabilidad, desempeño y compatibilidad operativa de cada conductor. La falta de profesionalización formal, la alta rotación, los procesos lentos de reclutamiento, la dificultad para validar antecedentes laborales, los riesgos de siniestralidad, las malas prácticas de conducción, los incumplimientos de entrega y la pérdida de confianza generan costos operativos y financieros para las empresas contratantes.`,
      `La propuesta plantea como núcleo de diseño un Score de Rendimiento y Confiabilidad, es decir, una puntuación dinámica del operador construida a partir de variables medibles como rendimiento de combustible, kilometraje, horas de conducción y descanso, cumplimiento de ventanas de entrega, historial de accidentes, infracciones, incidencias operativas, calidad de servicio, documentación validada, capacitación y compatibilidad con tipos de operación. Este score permitiría clasificar operadores por perfil y sugerir asignaciones más adecuadas para larga distancia, distribución local, última milla, reparto capilar, operaciones punto a punto o comercio electrónico.`,
      `troperfly.ai también busca generar valor para el operador, no solo para la empresa contratante. A través de un expediente digital, un esquema de incentivos, bonos por desempeño, rutas preferentes y un plan de carrera, el sistema permitiría profesionalizar el oficio y promover una cultura de mejora continua. De esta manera, el operador podría visualizar su progreso, fortalecer su reputación laboral y acceder a mejores oportunidades con base en evidencia verificable de desempeño, seguridad y cumplimiento.`,
      `Desde la perspectiva de innovación, el proyecto se alinea con las tendencias actuales de digitalización logística, inteligencia artificial, analítica avanzada y optimización de recursos humanos en operaciones de cadena de suministro. Gartner señala que las organizaciones logísticas buscan tecnologías que les permitan tomar decisiones más rápidas e informadas, considerando mayor cantidad de datos, restricciones operativas, disponibilidad laboral, pronósticos, simulación y analítica avanzada. En este sentido, troperfly.ai no se plantea como una agencia tradicional de contratación, sino como una plataforma de diseño orientada a transformar la gestión del capital humano logístico mediante datos, trazabilidad, evaluación estructurada y apoyo inteligente a la toma de decisiones.`,
      `Por lo tanto, este primer avance tiene como finalidad fundamentar el problema de diseño, identificar las necesidades reales de los usuarios involucrados, formular técnicamente el reto a resolver, establecer especificaciones preliminares medibles y generar alternativas conceptuales iniciales. La intención es construir una base sólida para evolucionar el proyecto hacia una solución viable, escalable y alineada con las necesidades actuales del transporte de carga y la cadena de suministro.`
    ]
  },
  {
    id: 'contexto-problema',
    title: 'Definición del Contexto del Problema',
    subtitle: 'Análisis de la crisis de confianza en el transporte.',
    category: 'context',
    content: [
      `El problema de diseño se ubica en el sector logístico y de transporte de carga, particularmente en operaciones donde las empresas requieren operadores para cubrir rutas de larga distancia, distribución local, última milla, reparto capilar, comercio electrónico, entregas punto a punto y movimientos de mercancía de diferente criticidad. En este tipo de operación, la continuidad del servicio no depende únicamente de contar con unidades disponibles, sino de asignar al operador adecuado para cada tipo de ruta, carga y condición operativa.`,
      `En la práctica, muchas organizaciones enfrentan procesos de reclutamiento lentos, altos niveles de rotación, dificultad para validar referencias, baja trazabilidad del desempeño previo y limitada visibilidad sobre la confiabilidad real del operador. A esto se suman riesgos asociados a siniestros, incumplimiento de horarios, malas prácticas operativas, posibles problemas de consumo de sustancias, incidentes de seguridad, pérdidas de confianza, conflictos en puntos de entrega y baja calidad en la atención al cliente.`,
      `El avance inicial del equipo identifica tres fricciones principales: complejidad en atracción y retención, riesgos de confiabilidad y siniestralidad, y baja eficiencia operativa por falta de perfiles adecuados para entregas punto a punto, distribución de última milla, reparto capilar y comercio electrónico. Estas fricciones muestran que el problema no debe formularse únicamente como falta de choferes, sino como una deficiencia estructural en la gestión, evaluación, profesionalización y asignación del capital humano logístico.`,
      `Desde una perspectiva de diseño, el reto consiste en crear una solución que permita transformar información dispersa del operador en criterios objetivos para la toma de decisiones. La agencia inteligente propuesta debería integrar variables como tipo de licencia, experiencia, historial de entregas, cumplimiento de ventanas de tiempo, eficiencia de combustible, respeto a horas de descanso, historial de accidentes, infracciones, antecedentes laborales verificables, resultados de pruebas permitidas por la normativa, aptitud médica ocupacional, calidad de servicio y compatibilidad con tipos de unidad y operación.`,
      `El entorno operativo donde funcionaría troperfly.ai involucra a empresas de transporte, centros de distribución, operadores logísticos, clientes industriales, empresas de consumo masivo, comercios de última milla, responsables de seguridad patrimonial, áreas de recursos humanos, coordinadores de tráfico y operadores de carga. Cada actor observa una parte distinta del problema, pero todos convergen en una necesidad común: reducir la incertidumbre en la selección y asignación de operadores mediante información confiable, medible y trazable.`,
      `La necesidad central del proyecto puede expresarse de la siguiente forma:`,
      `Diseñar una plataforma inteligente que permita evaluar, certificar, clasificar y asignar operadores de transporte de carga con base en indicadores verificables de desempeño, seguridad, cumplimiento, aptitud ocupacional, calidad de servicio y compatibilidad operativa, con el fin de mejorar la confiabilidad logística y profesionalizar el oficio del operador.`,
      `El proyecto se delimita al diseño conceptual de una plataforma de tercerización especializada. No se pretende implementar de inmediato un software comercial completo, ni automatizar decisiones laborales sensibles sin revisión humana. El objetivo del Avance 1 es establecer la base del proyecto: contexto, usuarios, necesidades, problema técnico, requerimientos medibles y alternativas conceptuales.`
    ]
  },
  {
    id: 'usuarios',
    title: 'Usuarios Involucrados',
    subtitle: 'Actores clave del ecosistema troperfly.ai.',
    category: 'analysis',
    content: [
      `Los usuarios y actores principales de troperfly.ai son los siguientes:`,
      `Empresa contratante\nRol dentro del sistema: solicita operadores para cubrir servicios logísticos.\nNecesidad principal: contar con operadores confiables, disponibles y adecuados al tipo de operación.`,
      `Agencia troperfly.ai\nRol dentro del sistema: recluta, certifica, capacita, administra y asigna operadores.\nNecesidad principal: gestionar talento logístico con criterios medibles, trazables y rentables.`,
      `Operador de transporte\nRol dentro del sistema: ejecuta rutas, entregas y servicios de carga.\nNecesidad principal: acceder a empleo formal, capacitación, mejores rutas e incentivos por desempeño.`,
      `Coordinador logístico\nRol dentro del sistema: supervisa rutas, unidades, cumplimiento y disponibilidad.\nNecesidad principal: tomar decisiones rápidas sobre asignación, reemplazo y continuidad operativa.`,
      `Área de seguridad patrimonial\nRol dentro del sistema: evalúa riesgos de siniestros, robos o incidentes.\nNecesidad principal: reducir exposición operativa y proteger mercancía.`,
      `Área de recursos humanos\nRol dentro del sistema: participa en reclutamiento, documentación y capacitación.\nNecesidad principal: estandarizar perfiles y reducir rotación.`,
      `Cliente final o punto de entrega\nRol dentro del sistema: recibe mercancía.\nNecesidad principal: obtener entregas puntuales, correctas y con buen servicio.`
    ]
  },
  {
    id: 'necesidades',
    title: 'Necesidades, Deseos y Restricciones',
    subtitle: 'Qué resolvemos, qué valor buscamos y qué límites debe respetar la solución.',
    category: 'analysis',
    content: [
      `4.1 Necesidades`,
      `1. Evaluar la confiabilidad del operador.\nLa empresa requiere conocer si el operador tiene historial adecuado para cubrir una ruta o carga específica.`,
      `2. Reducir riesgos operativos.\nSe busca disminuir accidentes, incumplimientos, conflictos en entrega, pérdidas y malas prácticas.`,
      `3. Clasificar perfiles por tipo de operación.\nNo todos los operadores son adecuados para larga distancia, última milla, reparto capilar, carga crítica o comercio electrónico.`,
      `4. Mejorar atracción y retención.\nLa agencia necesita formar una base estable de operadores calificados.`,
      `5. Medir desempeño con indicadores.\nSe requiere pasar de evaluaciones subjetivas a métricas verificables.`,
      `6. Crear trazabilidad del desempeño.\nLa empresa necesita evidencia histórica para justificar asignaciones y decisiones.`,
      `7. Profesionalizar al operador.\nEl operador requiere capacitación, reconocimiento, retroalimentación y plan de carrera.`,
      `4.2 Deseos`,
      `1. Gamificación del plan de carrera.\nEl operador podría visualizar niveles de avance, logros, metas y beneficios.`,
      `2. Rutas preferentes para mejores operadores.\nLos operadores con mejor desempeño podrían acceder a rutas mejor pagadas o con mejores condiciones.`,
      `3. Bonos por desempeño.\nSe podría incentivar ahorro de combustible, puntualidad, cero incidencias y buen servicio.`,
      `4. Tablero ejecutivo para clientes.\nLas empresas podrían consultar disponibilidad, desempeño, riesgo y trazabilidad del servicio.`,
      `5. Integración con telemetría.\nLa plataforma podría recibir datos de GPS, CAN bus o sistemas de administración de flota.`,
      `4.3 Restricciones`,
      `1. Protección de datos personales.\nEl sistema manejaría datos sensibles y debe cumplir con la normativa aplicable.`,
      `2. Consentimiento informado.\nEl operador debe conocer qué datos se recopilan, para qué se usan y cómo se protegen.`,
      `3. Cumplimiento laboral.\nEl modelo de tercerización especializada debe ajustarse al marco legal vigente.`,
      `4. No discriminación.\nLos criterios de asignación deben enfocarse en aptitud, seguridad, desempeño y cumplimiento, evitando sesgos indebidos.`,
      `5. Validación humana.\nLas decisiones críticas no deben depender únicamente del algoritmo.`,
      `6. Calidad de datos.\nEl score solo será útil si la información capturada es consistente, verificable y actualizada.`
    ]
  },
  {
    id: 'formulacion-tecnica',
    title: 'Formulación Técnica Verificable del Problema',
    subtitle: 'Definición medible del reto de diseño.',
    category: 'technical',
    content: [
      `El problema de diseño se formula de la siguiente manera:`,
      `¿Cómo diseñar una plataforma inteligente de tercerización logística que permita evaluar, certificar y asignar operadores de transporte de carga mediante un Score de Rendimiento y Confiabilidad basado en indicadores medibles de seguridad, desempeño operativo, cumplimiento, aptitud ocupacional, calidad de servicio y compatibilidad con el tipo de ruta, unidad y mercancía?`,
      `Esta formulación es técnica y verificable porque permite evaluar si la solución cumple con indicadores concretos.`,
      `Variables verificables:`,
      `1. Tiempo de reclutamiento y validación.\nForma de medición: días promedio desde solicitud hasta operador aprobado.`,
      `2. Porcentaje de operadores certificados.\nForma de medición: operadores certificados sobre operadores evaluados.`,
      `3. Cumplimiento de ventanas de entrega.\nForma de medición: porcentaje de entregas en tiempo.`,
      `4. Incidencias operativas.\nForma de medición: número de accidentes, retrasos, rechazos o conflictos por periodo.`,
      `5. Rotación de operadores.\nForma de medición: porcentaje de bajas en un periodo determinado.`,
      `6. Eficiencia de combustible.\nForma de medición: kilómetros por litro o consumo por ruta.`,
      `7. Seguridad vial.\nForma de medición: número de infracciones, frenados bruscos, excesos de velocidad o eventos críticos.`,
      `8. Satisfacción del cliente.\nForma de medición: calificación posterior al servicio.`,
      `9. Compatibilidad de asignación.\nForma de medición: correspondencia entre perfil del operador y tipo de operación.`,
      `10. Trazabilidad.\nForma de medición: existencia de bitácora con datos usados, recomendación y decisión final.`
    ]
  },
  {
    id: 'especificaciones',
    title: 'Especificaciones Preliminares del Sistema',
    subtitle: 'Definición del MVP, requerimientos funcionales, técnicos, de restricción y calidad.',
    category: 'technical',
    content: [
      `6.1 Requerimientos funcionales`,
      `RF1. El sistema debe crear un expediente digital por operador.\nIndicador verificable: expediente con documentación, experiencia, licencias, evaluaciones y registros de desempeño.`,
      `RF2. El sistema debe calcular un Score de Rendimiento y Confiabilidad.\nIndicador verificable: puntuación actualizada por operador en escala definida.`,
      `RF3. El sistema debe clasificar operadores por tipo de unidad.\nIndicador verificable: clasificación por tractocamión, torton, camioneta, reparto local o última milla.`,
      `RF4. El sistema debe sugerir asignaciones de ruta.\nIndicador verificable: recomendación basada en score, disponibilidad, tipo de carga y tipo de operación.`,
      `RF5. El sistema debe registrar incidencias operativas.\nIndicador verificable: historial de accidentes, retrasos, conflictos, rechazos o incumplimientos.`,
      `RF6. El sistema debe registrar capacitación del operador.\nIndicador verificable: cursos aprobados, evaluaciones, certificaciones y vigencias.`,
      `RF7. El sistema debe permitir esquema de incentivos.\nIndicador verificable: registro de bonos, metas, niveles y beneficios asignados.`,
      `6.2 Requerimientos técnicos`,
      `RT1. La plataforma debe integrar información de telemetría cuando esté disponible.\nIndicador verificable: velocidad, frenados bruscos, consumo de combustible, paradas y kilometraje.`,
      `RT2. El sistema debe permitir actualización periódica del score.\nIndicador verificable: actualización por viaje, semana, mes o periodo operativo definido.`,
      `RT3. El sistema debe generar tableros para clientes y administradores.\nIndicador verificable: vista de disponibilidad, desempeño, riesgo y cumplimiento.`,
      `RT4. El sistema debe permitir segmentación de perfiles.\nIndicador verificable: larga distancia, última milla, reparto capilar, comercio electrónico o carga crítica.`,
      `RT5. El sistema debe operar inicialmente como MVP semiautomatizado.\nIndicador verificable: tablero funcional con cálculo inicial del score y carga manual o semiautomática de datos.`,
      `6.3 Requerimientos de restricción`,
      `RR1. El uso de datos sensibles debe requerir consentimiento expreso.\nIndicador verificable: aviso de privacidad y autorización documentada.`,
      `RR2. Las decisiones críticas deben ser revisadas por un responsable humano.\nIndicador verificable: registro de aprobación, rechazo o ajuste de asignación.`,
      `RR3. El sistema debe evitar criterios discriminatorios.\nIndicador verificable: auditoría de variables usadas en el scoring.`,
      `RR4. El sistema debe cumplir con obligaciones laborales aplicables.\nIndicador verificable: validación del modelo de tercerización especializada.`,
      `6.4 Requerimientos de calidad`,
      `RC1. La plataforma debe generar trazabilidad de decisiones.\nIndicador verificable: bitácora con fecha, responsable, datos usados y recomendación emitida.`,
      `RC2. El sistema debe ser escalable por cliente o región.\nIndicador verificable: capacidad de agregar nuevos clientes, rutas y operadores.`,
      `RC3. La plataforma debe favorecer usabilidad.\nIndicador verificable: interfaz clara para operador, administrador y cliente.`,
      `RC4. La solución debe mantener integridad de datos.\nIndicador verificable: registros protegidos, consistentes y actualizables.`
    ]
  },
  {
    id: 'generacion-conceptual',
    title: 'Generación Conceptual Inicial',
    subtitle: 'Alternativas iniciales para convertir la idea en una solución viable.',
    category: 'technical',
    content: [
      `7.1 Alternativa A: Agencia tradicional especializada con score manual`,
      `Esta alternativa consiste en crear una agencia logística que reclute, valide y capacite operadores utilizando procesos humanos tradicionales, complementados con una matriz de evaluación manual. El Score de Rendimiento y Confiabilidad se calcularía inicialmente con fórmulas simples en una base de datos o tablero administrativo.`,
      `Ventaja: es la alternativa más viable para iniciar, requiere menor inversión tecnológica y permite validar el modelo de negocio con un grupo reducido de operadores.`,
      `Limitación: la capacidad predictiva sería limitada y dependería mucho del criterio humano.`,
      `7.2 Alternativa B: Plataforma digital de scoring y asignación semiautomatizada`,
      `Esta alternativa propone una plataforma tecnológica que centralice el expediente del operador, calcule automáticamente el score, segmente perfiles y sugiera asignaciones de ruta según criterios operativos. La decisión final quedaría en manos de un coordinador humano.`,
      `Ventaja: permite mayor trazabilidad, estandarización y velocidad de decisión.`,
      `Limitación: requiere datos consistentes y procesos claros de captura, validación y actualización.`,
      `7.3 Alternativa C: Agencia inteligente con IA agéntica y asignación predictiva`,
      `Esta alternativa plantea una evolución más avanzada del sistema. La agencia operaría con módulos de IA capaces de analizar demanda de operadores, disponibilidad, tipo de carga, riesgo de ruta, historial de desempeño, telemetría y necesidades del cliente para recomendar asignaciones óptimas. También podría sugerir capacitación, bonos, rutas preferentes y reemplazos preventivos.`,
      `Ventaja: es la opción más innovadora y alineada con tendencias de IA aplicada a logística.`,
      `Limitación: requiere mayor madurez tecnológica, gobernanza de datos, integración con sistemas externos y controles éticos.`,
      `7.4 Alternativa seleccionada para desarrollo inicial`,
      `La alternativa B se considera la más adecuada como punto de partida, ya que permite construir un MVP realista, medible y escalable. La alternativa C puede plantearse como evolución futura una vez que se cuente con datos suficientes de operadores, rutas, incidencias y desempeño. Esta ruta evita prometer una autonomía tecnológica prematura y permite que troperfly.ai evolucione de manera progresiva: primero como plataforma de scoring y trazabilidad; después como sistema inteligente de recomendación; finalmente como agencia logística apoyada por IA agéntica.`
    ]
  },
  {
    id: 'arquitectura',
    title: 'Arquitectura Funcional Preliminar',
    subtitle: 'El motor modular debajo del capó de troperfly.ai.',
    category: 'technical',
    content: [
      `Aunque el Avance 1 no exige desarrollar por completo la arquitectura del sistema, conviene dejar planteada una arquitectura preliminar para conectar el proyecto con Semana 4 y con la noción de arquitectura del producto.`,
      `troperfly.ai puede organizarse como un sistema modular compuesto por los siguientes subsistemas:`,
      `1. Módulo de reclutamiento.\nFunción principal: captura candidatos, documentos, licencias y experiencia.\nUsuarios relacionados: agencia, recursos humanos y operador.`,
      `2. Módulo de certificación.\nFunción principal: valida requisitos, capacitación y aptitud operativa.\nUsuarios relacionados: agencia, operador y cliente.`,
      `3. Módulo ScoreDriver.\nFunción principal: calcula el Score de Rendimiento y Confiabilidad.\nUsuarios relacionados: agencia y coordinador logístico.`,
      `4. Módulo de asignación.\nFunción principal: sugiere operador según ruta, unidad, carga y disponibilidad.\nUsuarios relacionados: coordinador logístico y empresa contratante.`,
      `5. Módulo de telemetría.\nFunción principal: integra datos de conducción cuando existan fuentes disponibles.\nUsuarios relacionados: cliente y agencia.`,
      `6. Módulo de incidencias.\nFunción principal: registra retrasos, accidentes, conflictos, rechazos o incumplimientos.\nUsuarios relacionados: cliente, operador y agencia.`,
      `7. Módulo de incentivos.\nFunción principal: administra bonos, niveles y rutas preferentes.\nUsuarios relacionados: operador y agencia.`,
      `8. Módulo de trazabilidad.\nFunción principal: conserva evidencia de datos, recomendaciones y decisiones.\nUsuarios relacionados: agencia, cliente y auditoría.`,
      `9. Módulo de cumplimiento.\nFunción principal: gestiona consentimiento, privacidad y restricciones legales.\nUsuarios relacionados: agencia, jurídico y operador.`,
      `Esta arquitectura modular facilita que el sistema pueda iniciar con funciones básicas y crecer progresivamente sin rediseñar toda la solución. Además, permite aislar funciones críticas, como datos sensibles, cumplimiento laboral y cálculo del score, de otros módulos más operativos, como incentivos o tableros de consulta.`
    ]
  },
  {
    id: 'fundamentacion-teorica',
    title: 'Fundamentación Teórica Preliminar',
    subtitle: 'Bases académicas, de diseño e industria que sostienen la propuesta.',
    category: 'conclusion',
    content: [
      `El proyecto se sustenta en el enfoque de diseño sistemático de productos y servicios, donde una solución debe iniciar por la identificación del problema, el análisis de usuarios, la traducción de necesidades en requerimientos y la generación de alternativas conceptuales. Ulrich, Eppinger y Yang plantean que el desarrollo de productos debe partir de necesidades del cliente claramente entendidas y transformarse en especificaciones medibles que guíen el diseño de la solución.`,
      `Desde la perspectiva de Pahl y Beitz, el diseño de ingeniería requiere estructurar funciones, restricciones y alternativas antes de seleccionar una solución final. En este proyecto, troperfly.ai puede entenderse como un sistema-servicio compuesto por funciones principales: evaluar operadores, certificar perfiles, asignar rutas, registrar desempeño, generar incentivos y reducir riesgos logísticos.`,
      `La Semana 4 también aporta una base conceptual relevante al enfatizar la arquitectura del producto. La forma en que se organizan y relacionan los componentes de un producto influye en manufactura, costos, escalabilidad e innovación, además de distinguir entre arquitecturas modulares e integrales. En el caso de troperfly.ai, la solución debe diseñarse con una arquitectura modular porque integra varios subsistemas: reclutamiento, certificación, scoring, asignación, telemetría, incentivos, cumplimiento y trazabilidad. Esta modularidad permitiría evolucionar por etapas, reducir riesgos de implementación y adaptar la plataforma a distintos clientes o tipos de operación.`,
      `El diseño también se relaciona con tendencias actuales en logística y cadena de suministro. Gartner señala que las tecnologías emergentes en logística buscan mejorar la toma de decisiones mediante datos, pronósticos, simulación, optimización de recursos y analítica avanzada. Asimismo, en manufactura y operaciones, Gartner identifica que la automatización, la IA, los datos industriales y la integración entre tecnologías IT, OT y procesos humanos son elementos clave para mejorar resiliencia, eficiencia y competitividad.`,
      `En este sentido, troperfly.ai no se plantea únicamente como un negocio de subcontratación, sino como un sistema de diseño orientado a resolver una necesidad operativa concreta: mejorar la confiabilidad del capital humano logístico mediante evaluación estructurada, datos verificables, asignación inteligente y profesionalización del operador.`
    ]
  },
  {
    id: 'conclusiones',
    title: 'Conclusiones Preliminares',
    subtitle: 'Hallazgos principales del primer avance.',
    category: 'conclusion',
    content: [
      `El análisis inicial permite establecer que el problema principal no es únicamente la falta de operadores de transporte, sino la ausencia de un sistema confiable, estandarizado y trazable para evaluar, certificar, asignar y desarrollar operadores según las necesidades reales de la cadena de suministro. La propuesta troperfly.ai busca responder a esta problemática mediante una plataforma inteligente de tercerización logística que combine agencia especializada, expediente digital, score de confiabilidad, segmentación operativa, asignación semiautomatizada, incentivos y plan de carrera.`,
      `La propuesta es pertinente porque atiende una necesidad real de empresas logísticas, distribuidoras y de consumo masivo, al mismo tiempo que ofrece al operador una vía de profesionalización basada en mérito y evidencia. A diferencia de una agencia tradicional de empleo, troperfly.ai busca construir una infraestructura de confianza operativa, donde cada asignación se sustente en datos verificables y criterios alineados con seguridad, desempeño, cumplimiento y calidad de servicio.`,
      `Para las siguientes etapas del proyecto será necesario profundizar en la arquitectura funcional del sistema, validar las variables críticas del score, analizar riesgos legales y éticos, comparar alternativas mediante criterios de viabilidad e impacto, y definir cómo se integraría la plataforma con fuentes de datos reales como expedientes, telemetría, reportes de incidencias y evaluación del cliente.`
    ]
  },
  {
    id: 'referencias',
    title: 'Referencias',
    subtitle: 'Fuentes y bibliografía consultada.',
    category: 'conclusion',
    content: [
      `Gartner. (2026). Hype Cycle for Supply Chain Execution and Logistics Technologies, 2026. Gartner.`,
      `Gartner. (2025). Hype Cycle for Manufacturing Operations Strategy, 2025. Gartner.`,
      `Pahl, G., Beitz, W., Feldhusen, J., & Grote, K.-H. (2007). Engineering design: A systematic approach (3rd ed.). Springer.`,
      `Ulrich, K. (1995). The role of product architecture in the manufacturing firm. Research Policy, 24(3), 419-440.`,
      `Ulrich, K. T., Eppinger, S. D., & Yang, M. C. (2020). Product design and development (7th ed.). McGraw-Hill Education.`
    ]
  }
];


interface SectionContentRendererProps {
  section: SectionContent;
}

export function SectionContentRenderer({ section }: SectionContentRendererProps) {
  return (
      <section>
          <h2>{section.title}</h2>
      <p>{section.subtitle}</p>

  {section.content.map((paragraph, paragraphIndex) => (
      <p key={`${section.id}-${paragraphIndex}`}>
    {paragraph.split('\n').map((line, lineIndex, lines) => (
        <span key={`${section.id}-${paragraphIndex}-${lineIndex}`}>
      {line}
      {lineIndex < lines.length - 1 ? <br /> : null}
      </span>
    ))}
    </p>
  ))}
  </section>
);
}
