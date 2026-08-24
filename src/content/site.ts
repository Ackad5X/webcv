export type Lang = "en" | "es";
export type L = Record<Lang, string>;

export const profile = {
  name: "Alejandro Castaño",
  email: "alejandrocastano018@gmail.com",
  linkedin: "https://www.linkedin.com/in/alejandro-c-6a17b61a1",
  location: { en: "Spain", es: "España" } as L,
  headline: {
    en: "Security Architect | Zscaler & Netskope Specialist | SSE/SASE & Zero Trust for Multi-Cloud Environments",
    es: "Arquitecto de Seguridad | Especialista en Zscaler y Netskope | SSE/SASE y Zero Trust para entornos multinube",
  } as L,
  summary: {
    en: "I design and deploy SSE/SASE architectures and Zero Trust models on Zscaler and Netskope for regulated, multi-cloud enterprises.\nHands-on across secure web gateway, private access, DLP and CASB — aligned to NIST and MITRE ATT&CK. Currently working as a multi-technology security architect.",
    es: "Diseño e implemento arquitecturas SSE/SASE y modelos Zero Trust sobre Zscaler y Netskope para entornos multinube regulados.\nEnfoque hands-on en navegación segura, acceso privado, DLP y CASB, alineado a NIST y MITRE ATT&CK. Actualmente desempeñándome como arquitecto de seguridad multi-tecnología.",
  } as L,
  meta: {
    en: "Spain · 5+ years in network & cloud security · Professional working English",
    es: "España · +5 años en seguridad de red y cloud · Inglés profesional",
  } as L,
};

export const vendors = [
  { name: "Zscaler", domain: "zscaler.com" },
  { name: "Netskope", domain: "netskope.com" },
  { name: "Palo Alto Networks", domain: "paloaltonetworks.com" },
  { name: "Forcepoint", domain: "forcepoint.com" },
];

export const ui = {
  nav: {
    work: { en: "Project experience", es: "Experiencia" } as L,
    certs: { en: "Certifications", es: "Certificaciones" } as L,
    automation: { en: "Automation", es: "Automatización" } as L,
    interests: { en: "Interests", es: "Intereses" } as L,
    contact: { en: "Contact", es: "Contacto" } as L,
  },
  sections: {
    featured: { en: "Project experience", es: "Experiencia en proyectos" } as L,
    certs: { en: "Certifications", es: "Certificaciones" } as L,
    certsNote: {
      en: "15 vendor certifications across the SSE/SASE stack.",
      es: "15 certificaciones de fabricante en el stack SSE/SASE.",
    } as L,
    automation: { en: "AI & Automation", es: "IA y Automatización" } as L,
    automationNote: {
      en: "With the rise of AI, automation has become far more accessible — I've leaned into that, building internal tooling around the areas below.",
      es: "Con el auge de la IA, la automatización se ha vuelto mucho más accesible — he apostado por ello, construyendo herramientas internas en las áreas de abajo.",
    } as L,
    interests: { en: "Interests", es: "Intereses" } as L,
  },
  labels: {
    sector: { en: "Sector", es: "Sector" } as L,
    duration: { en: "Duration", es: "Duración" } as L,
    stack: { en: "Stack", es: "Stack" } as L,
    context: { en: "Context", es: "Contexto" } as L,
    challenge: { en: "Challenge", es: "Reto" } as L,
    approach: { en: "Technical approach", es: "Enfoque técnico" } as L,
    outcome: { en: "Outcome", es: "Resultado" } as L,
    readCase: { en: "View details", es: "Ver detalles" } as L,
    close: { en: "Close", es: "Cerrar" } as L,
    issued: { en: "Issued", es: "Emitida" } as L,
    downloadCv: { en: "Download CV", es: "Descargar CV" } as L,
    interestsTechnical: { en: "Technical", es: "Técnicos" } as L,
    interestsPersonal: { en: "Personal", es: "Personales" } as L,
    moreEngagements: {
      en: "Additional delivery across regulated and private-sector environments.",
      es: "Proyectos adicionales en entornos regulados y del sector privado.",
    } as L,
  },
  stats: {
    experienceValue: { en: "4+", es: "4+" } as L,
    experienceLabel: { en: "Years in SASE/SSE", es: "Años en SASE/SSE" } as L,
    sectorsLabel: { en: "Sectors delivered", es: "Sectores" } as L,
    engagementsLabel: { en: "Engagements", es: "Proyectos" } as L,
    certsLabel: { en: "Vendor certifications", es: "Certificaciones" } as L,
  },
};

export type CaseStudy = {
  id: string;
  sector: L;
  duration: L;
  stack: string[];
  context: L;
  challenge: L;
  approach: L[];
  outcome: L;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "banking",
    sector: { en: "Banking", es: "Banca" },
    duration: { en: "7 months", es: "7 meses" },
    stack: ["Cisco WSA", "Cisco Umbrella", "Netskope", "Splunk", "SWG", "SSL Inspection"],
    context: {
      en: "Perimeter security operations for a large retail bank, covering the full proxy estate with no intermediate support tiers.",
      es: "Operación de seguridad perimetral para una gran entidad bancaria, cubriendo toda la plataforma de proxy sin niveles intermedios de soporte.",
    },
    challenge: {
      en: "Every browsing, access and filtering incident — trivial or complex — landed on the same team, in an environment where any policy error interrupts banking operations.",
      es: "Todas las incidencias de navegación, acceso y filtrado —simples o complejas— recaían en el mismo equipo, en un entorno donde cualquier error de política interrumpe la operativa bancaria.",
    },
    approach: [
      {
        en: "Administered and tuned Cisco WSA and Umbrella policy sets alongside Netskope policy supervision.",
        es: "Administración y ajuste de políticas en Cisco WSA y Umbrella, junto con la supervisión de políticas en Netskope.",
      },
      {
        en: "Correlated events and analysed traffic and log data in Splunk to isolate root causes.",
        es: "Correlación de eventos y análisis de tráfico y logs en Splunk para aislar la causa raíz.",
      },
      {
        en: "Executed policy and infrastructure changes outside production hours with rollback plans.",
        es: "Ejecución de cambios de política e infraestructura fuera del horario productivo con planes de reversión.",
      },
    ],
    outcome: {
      en: "Sustained secure-browsing availability for the bank's user base and resolved incidents end to end without escalation paths.",
      es: "Disponibilidad sostenida de la navegación segura para la base de usuarios del banco y resolución de incidencias de extremo a extremo sin escalados.",
    },
  },
  {
    id: "airport",
    sector: {
      en: "Airport & transport infrastructure",
      es: "Infraestructura aeroportuaria y transporte",
    },
    duration: { en: "Multi-phase rollout", es: "Despliegue multifase" },
    stack: [
      "Zscaler ZIA",
      "Zscaler ZPA",
      "Endpoint DLP",
      "Inline DLP",
      "CASB API",
      "Proxy migration",
    ],
    context: {
      en: "End-to-end Zscaler SSE deployment for an airport infrastructure operator, replacing a legacy proxy platform.",
      es: "Implantación integral de Zscaler SSE para un operador de infraestructuras aeroportuarias, sustituyendo una plataforma de proxy heredada.",
    },
    challenge: {
      en: "Critical operational infrastructure could not tolerate downtime while browsing rules and private access were migrated off the legacy proxy.",
      es: "La infraestructura crítica no admitía cortes de servicio mientras se migraban las reglas de navegación y el acceso privado desde el proxy antiguo.",
    },
    approach: [
      {
        en: "Deployed ZIA for web filtering, SSL inspection and threat protection, and ZPA for secure private access to internal applications.",
        es: "Despliegue de ZIA para filtrado web, inspección SSL y protección frente a amenazas, y de ZPA para el acceso privado seguro a aplicaciones internas.",
      },
      {
        en: "Analysed the legacy architecture and migrated rules and policies technically, one functional block at a time.",
        es: "Análisis de la arquitectura previa y migración técnica de reglas y políticas por bloques funcionales.",
      },
      {
        en: "Implemented layered DLP: Endpoint DLP, Inline DLP on traffic in transit, and CASB API for cloud services.",
        es: "Implementación de DLP por capas: Endpoint DLP, Inline DLP sobre el tráfico en tránsito y CASB API para servicios cloud.",
      },
      {
        en: "Ran connectivity testing, rule debugging and security fine-tuning to guarantee operational continuity.",
        es: "Pruebas de conectividad, depuración de reglas y ajuste fino de seguridad para garantizar la continuidad operativa.",
      },
    ],
    outcome: {
      en: "Legacy proxy fully retired, Zero Trust access in place for internal infrastructure, and data protection enforced across endpoint, network and SaaS layers.",
      es: "Proxy heredado retirado por completo, acceso Zero Trust a la infraestructura interna y protección de datos aplicada en endpoint, red y SaaS.",
    },
  },
  {
    id: "nuclear",
    sector: { en: "Nuclear energy", es: "Sector nuclear energético" },
    duration: { en: "3 months", es: "3 meses" },
    stack: ["Proofpoint", "Exchange On-Prem", "Exchange Online", "Microsoft 365", "Mail routing"],
    context: {
      en: "Secure email hybridisation for a nuclear energy operator using Proofpoint advanced email security.",
      es: "Hibridización de correo seguro para un operador del sector nuclear energético mediante Proofpoint.",
    },
    challenge: {
      en: "Mailboxes lived across on-premise Exchange and Exchange Online simultaneously, and both had to be protected under one coherent routing model.",
      es: "Los buzones convivían en Exchange On-Premise y Exchange Online, y ambos debían protegerse bajo un modelo de enrutamiento coherente.",
    },
    approach: [
      {
        en: "Integrated Proofpoint into the hybrid mail flow, protecting on-premise and cloud mailboxes at once.",
        es: "Integración de Proofpoint en el flujo de correo híbrido, protegiendo simultáneamente buzones on-premise y cloud.",
      },
      {
        en: "Designed group-based routing so hybrid mailbox management stayed deterministic.",
        es: "Diseño de enrutamiento por grupos para que la gestión de buzones híbridos fuese determinista.",
      },
      {
        en: "Applied advanced configuration on Proofpoint and Microsoft 365 and produced detailed technical documentation.",
        es: "Configuración avanzada en Proofpoint y Microsoft 365 y elaboración de documentación técnica detallada.",
      },
    ],
    outcome: {
      en: "A single protected mail perimeter across both platforms, with handover documentation and accompaniment during client-side configuration.",
      es: "Un único perímetro de correo protegido en ambas plataformas, con documentación de entrega y acompañamiento en la configuración del cliente.",
    },
  },
  {
    id: "naval",
    sector: {
      en: "Naval construction (civil & defence)",
      es: "Construcción naval (civil y militar)",
    },
    duration: { en: "3 months", es: "3 meses" },
    stack: ["Zscaler", "SSE", "Zero Trust", "Web policy", "CASB", "DLP"],
    context: {
      en: "Zscaler SSE implementation for a naval construction group operating both civil and defence programmes.",
      es: "Implementación de la solución SSE de Zscaler para un grupo de construcción naval con programas civiles y militares.",
    },
    challenge: {
      en: "Sensitive engineering and defence data required strict egress control without blocking industrial collaboration workflows.",
      es: "Los datos sensibles de ingeniería y defensa exigían un control estricto de salida sin bloquear los flujos de colaboración industriales.",
    },
    approach: [
      {
        en: "Built browsing policy from scratch and adapted it to the client's operating model.",
        es: "Creación de políticas de navegación desde cero y adaptación al modelo operativo del cliente.",
      },
      {
        en: "Rolled out SSL inspection with controlled exclusions for industrial and legacy systems.",
        es: "Despliegue de inspección SSL con exclusiones controladas para sistemas industriales y heredados.",
      },
      {
        en: "Configured CASB and DLP controls over corporate cloud services.",
        es: "Configuración de controles CASB y DLP sobre los servicios cloud corporativos.",
      },
    ],
    outcome: {
      en: "Consistent Zero Trust egress control across sites, with policy documented and transferred to the client's operations team.",
      es: "Control de salida Zero Trust consistente entre sedes, con la política documentada y transferida al equipo de operaciones del cliente.",
    },
  },
];

export type Engagement = { sector: L; duration: L; stack: string[] };

export const engagements: Engagement[] = [
  {
    sector: { en: "Biomedical research", es: "Investigación biomédica" },
    duration: { en: "Project", es: "Proyecto" },
    stack: ["Zscaler ZPA", "Zero Trust", "VPN replacement"],
  },
  {
    sector: { en: "Hospitality", es: "Sector hotelero" },
    duration: { en: "Project", es: "Proyecto" },
    stack: ["Zscaler ZIA", "Zscaler ZPA", "CASB", "DLP", "NGFW"],
  },
  {
    sector: { en: "Banking — SOC (N2/N3)", es: "Banca — SOC (N2/N3)" },
    duration: { en: "7 months", es: "7 meses" },
    stack: ["Zscaler", "Chronicle", "Trellix HX", "SentinelOne"],
  },
  {
    sector: { en: "Chemical industry", es: "Industria química" },
    duration: { en: "2 months", es: "2 meses" },
    stack: ["Netskope audit", "NPA", "Cloud Exchange", "IoC ingestion"],
  },
  {
    sector: { en: "Legal & business consulting", es: "Consultoría y derecho laboral" },
    duration: { en: "2 months", es: "2 meses" },
    stack: ["Netskope SSE", "CASB API", "OneDrive", "Outlook", "DLP"],
  },
  {
    sector: { en: "Construction & asset management", es: "Construcción y gestión de activos" },
    duration: { en: "3 months", es: "3 meses" },
    stack: ["Netskope SSE", "Malware", "CASB", "Web policy"],
  },
  {
    sector: { en: "Healthcare & insurance", es: "Salud y seguros" },
    duration: { en: "2 months", es: "2 meses" },
    stack: ["Netskope Cloud Firewall", "GRE tunnels", "Advanced Analytics"],
  },
  {
    sector: { en: "Real estate", es: "Inmobiliario" },
    duration: { en: "2 months", es: "2 meses" },
    stack: ["Netskope SSE", "CASB", "Web policy"],
  },
  {
    sector: { en: "Public administration", es: "Administración pública" },
    duration: { en: "2 months", es: "2 meses" },
    stack: ["Netskope SSE", "DLP", "Web policy"],
  },
];

export const engagementCount = caseStudies.length + engagements.length;
export const sectorCount = new Set(
  [...caseStudies, ...engagements].map((p) => p.sector.en.split(" — ")[0]),
).size;

export type Automation = { title: L; description: L };

export const automations: Automation[] = [
  {
    title: {
      en: "Extensible policy automation suite",
      es: "Suite de automatización y gestión de políticas",
    },
    description: {
      en: "A plugin-based platform for bulk import, export, and real-time management of web filtering, private access, and endpoint policies across multiple vendor tenants — replacing hours of manual console work with batch operations.",
      es: "Plataforma basada en plugins para importación, exportación y gestión masiva en tiempo real de políticas de filtrado web, acceso privado y endpoint en diversos fabricantes y tenants — sustituyendo horas de trabajo manual en consola por operaciones por lote.",
    },
  },
  {
    title: { en: "Diagnostics & log analysis", es: "Diagnóstico y análisis de logs" },
    description: {
      en: "Parses and visualises client diagnostic bundles into an interactive dashboard, turning raw logs into fast triage for connectivity, authentication and certificate issues.",
      es: "Analiza y visualiza paquetes de diagnóstico de cliente en un panel interactivo, convirtiendo logs en bruto en un triaje rápido de incidencias de conectividad, autenticación y certificados.",
    },
  },
  {
    title: { en: "Guided connectivity diagnostics", es: "Diagnóstico de conectividad guiado" },
    description: {
      en: "An interactive terminal tool that walks through DNS, connectivity and packet-capture checks for private-access connectors, producing a single report ready to share with support.",
      es: "Herramienta de terminal interactiva que guía comprobaciones de DNS, conectividad y captura de paquetes para conectores de acceso privado, generando un único informe listo para compartir con soporte.",
    },
  },
  {
    title: { en: "Deployment tracking & audit", es: "Seguimiento y auditoría de despliegues" },
    description: {
      en: "Cross-references rollout target lists against live tenant data to classify adoption in real time and flag outdated agent versions across a client base.",
      es: "Cruza listados objetivo de despliegue con datos en vivo del tenant para clasificar la adopción en tiempo real y detectar versiones de agente desactualizadas.",
    },
  },
];

export type Interest = {
  label: L;
  category: "technical" | "personal";
  icon: string;
};

export const interests: Interest[] = [
  {
    label: { en: "SSE/SASE architecture", es: "Arquitectura SSE/SASE" },
    category: "technical",
    icon: "Network",
  },
  {
    label: { en: "Zero Trust design", es: "Diseño Zero Trust" },
    category: "technical",
    icon: "ShieldCheck",
  },
  {
    label: { en: "Cloud security (AWS/Azure/GCP)", es: "Seguridad en cloud (AWS/Azure/GCP)" },
    category: "technical",
    icon: "Cloud",
  },
  {
    label: { en: "DLP & data protection", es: "DLP y protección de datos" },
    category: "technical",
    icon: "FileLock2",
  },
  {
    label: { en: "Identity & access management", es: "Gestión de identidades y accesos" },
    category: "technical",
    icon: "KeyRound",
  },
  {
    label: { en: "Security automation", es: "Automatización de seguridad" },
    category: "technical",
    icon: "Workflow",
  },
  {
    label: { en: "Threat modeling", es: "Modelado de amenazas" },
    category: "technical",
    icon: "Crosshair",
  },
  {
    label: { en: "Network security", es: "Seguridad de redes" },
    category: "technical",
    icon: "Waypoints",
  },
  {
    label: { en: "Homelab & self-hosting", es: "Homelab y self-hosting" },
    category: "personal",
    icon: "Server",
  },
  {
    label: { en: "Open-source security tools", es: "Herramientas open source de seguridad" },
    category: "personal",
    icon: "GitBranch",
  },
  {
    label: { en: "Continuous learning", es: "Aprendizaje continuo" },
    category: "personal",
    icon: "BookOpen",
  },
];
