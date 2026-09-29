export type ProjectCategory = "ALL" | "WEB" | "AI / ML" | "AUTOMATION" | "ENTERPRISE";

export interface ProjectOutcome {
  value: string;
  label: string;
  description: string;
}

export interface ArchitectureNode {
  step: string;
  title: string;
  subtitle: string;
  tech: string;
  details: string;
}

export interface BehindTheBuild {
  problem: {
    title: string;
    description: string;
  };
  decision: {
    title: string;
    description: string;
  };
  engineering: {
    title: string;
    description: string;
  };
  result: {
    title: string;
    description: string;
  };
}

export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  year: string;
  title: string;
  subtitle: string;
  client: string;
  clientConfidentiality: string;
  industry: string;
  category: "WEB" | "AI / ML" | "AUTOMATION" | "ENTERPRISE";
  technologies: string[];
  shortDescription: string;
  fullOverview: string;
  challenge: string[];
  approach: string[];
  whatWeBuilt: {
    headline: string;
    paragraphs: string[];
    features: { title: string; description: string }[];
  };
  architecture: {
    headline: string;
    subheadline: string;
    nodes: ArchitectureNode[];
  };
  behindTheBuild: BehindTheBuild;
  outcomes: ProjectOutcome[];
  mockupData: {
    type: "dashboard" | "pipeline" | "stream" | "editor";
    accentColor: string;
    badge: string;
    stats: { label: string; value: string }[];
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: "proj-01",
    slug: "enterprise-content-distribution",
    number: "01",
    year: "2026",
    title: "Enterprise Content Distribution Platform",
    subtitle: "High-throughput financial content delivery with deterministic multi-channel routing",
    client: "Confidential Client",
    clientConfidentiality: "Confidential Global Financial Institution",
    industry: "Financial Technology",
    category: "ENTERPRISE",
    technologies: [".NET", "React", "PostgreSQL", "Redis", "AWS"],
    shortDescription:
      "A scalable platform for managing, processing and distributing financial content across multiple channels.",
    fullOverview:
      "Engineered an enterprise-grade distribution system that coordinates high-frequency financial publications, regulatory disclosures, and multi-tenant news syndication across tier-1 trading desks and consumer endpoints.",
    challenge: [
      "Financial market communications require millisecond-level determinism, strict regulatory auditability, and zero message dropping during sudden market volatility spikes.",
      "The client's legacy infrastructure suffered from brittle batch synchronization, database lock contention, and lacked an unified authoring-to-delivery pipeline, leading to costly delivery delays."
    ],
    approach: [
      "Deconstructed the monolithic ingestion flow into an asynchronous, event-driven streaming pipeline orchestrated with .NET core background services and Redis stream workers.",
      "Designed an ultra-clean, dense React control room that gives editorial and compliance teams live status on every outbound broadcast packet with millisecond audit trails."
    ],
    whatWeBuilt: {
      headline: "A fault-tolerant distribution mesh with real-time auditability",
      paragraphs: [
        "We built an integrated web console paired with resilient distributed backend services. Editorial teams draft, verify compliance against financial disclosures, and dispatch payloads to hundreds of target endpoints simultaneously.",
        "The system handles automatic payload formatting (FIX protocol, JSON-LD, Bloomberg terminal formats), rate-limiting, and cryptographic signing with comprehensive fallback routing."
      ],
      features: [
        {
          title: "Channel Dispatcher Engine",
          description: "Sub-50ms parallel routing across RSS, Webhook, Bloomberg SAPI, and consumer client push streams."
        },
        {
          title: "Immutable Compliance Ledger",
          description: "Cryptographically verified audit trail capturing exact author identity, diffs, and distribution timestamps."
        },
        {
          title: "Live Operational Control Room",
          description: "Dense React operations surface displaying real-time delivery queues, latency percentiles, and node health."
        }
      ]
    },
    architecture: {
      headline: "Multi-Tier Event-Driven Architecture",
      subheadline: "Deterministic pipeline design ensuring sub-100ms end-to-end delivery under extreme market peaks.",
      nodes: [
        {
          step: "01",
          title: "CLIENT",
          subtitle: "Editorial Desks & Automated Feeds",
          tech: "React 19 / TypeScript / WebSocket",
          details: "Instant draft authoring, validation, and manual override controls."
        },
        {
          step: "02",
          title: "FRONTEND GATEWAY",
          subtitle: "Edge CDN & Reverse Proxy",
          tech: "AWS CloudFront / ALB / Next.js",
          details: "Edge caching, JWT auth, and DDoS protection."
        },
        {
          step: "03",
          title: "API GATEWAY",
          subtitle: "High-Throughput Dispatcher",
          tech: ".NET 8 Web API / Kestrel",
          details: "Async request parsing, schema enforcement, and rate governance."
        },
        {
          step: "04",
          title: "SERVICES & QUEUES",
          subtitle: "Stream Processing Mesh",
          tech: "Redis Streams / Distributed Workers",
          details: "Partitioned queuing, idempotent retries, and format serialization."
        },
        {
          step: "05",
          title: "DATABASE & AUDIT",
          subtitle: "Persistent Store & Ledger",
          tech: "PostgreSQL / AWS RDS Multi-AZ",
          details: "Partitioned document storage with transactional integrity."
        },
        {
          step: "06",
          title: "EXTERNAL SYSTEMS",
          subtitle: "Syndication Endpoints",
          tech: "Webhooks / Bloomberg SAPI / S3",
          details: "Guaranteed at-least-once delivery with circuit breakers."
        }
      ]
    },
    behindTheBuild: {
      problem: {
        title: "Database Lock Contention Under Market Surges",
        description:
          "During earnings announcements, 3,000+ simultaneous updates caused table-level locks on the legacy system, cascading into 15-second delivery lag when seconds mattered."
      },
      decision: {
        title: "Decouple Ingestion from Persistence via In-Memory Log",
        description:
          "Rather than writing directly to relational storage on the critical path, we routed every broadcast through Redis Streams with append-only logs, writing to PostgreSQL asynchronously via worker batches."
      },
      engineering: {
        title: "Zero-Allocation Serialization in .NET 8",
        description:
          "Implemented custom Span<T> based JSON/XML formatters that serialize payloads without managed heap allocations, reducing garbage collection pauses to near zero under heavy throughput."
      },
      result: {
        title: "Rock-Solid Sub-40ms P99 Latency",
        description:
          "P99 distribution latency plunged from 14.8 seconds to 38 milliseconds, eliminating lock contention even when handling 10x historical volume spikes."
      }
    },
    outcomes: [
      {
        value: "99.99%",
        label: "SYSTEM AVAILABILITY",
        description: "Zero downtime recorded across four consecutive quarterly earnings peaks."
      },
      {
        value: "40%",
        label: "FASTER PROCESSING",
        description: "Reduction in end-to-end payload dispatch duration across all channels."
      },
      {
        value: "15+",
        label: "CHANNEL INTEGRATIONS",
        description: "Standardized adapters for financial terminals, RSS, email, and partner webhooks."
      }
    ],
    mockupData: {
      type: "dashboard",
      accentColor: "#FD5006",
      badge: "LIVE FEEDS · PRODUCTION ACTIVE",
      stats: [
        { label: "THROUGHPUT", value: "24.6k/sec" },
        { label: "P99 LATENCY", value: "38ms" },
        { label: "QUEUE HEALTH", value: "Optimal" }
      ]
    }
  },
  {
    id: "proj-02",
    slug: "ai-powered-ecommerce-platform",
    number: "02",
    year: "2025",
    title: "AI-Powered Ecommerce Platform",
    subtitle: "Contextual commerce engine with semantic discovery and intelligent inventory forecasting",
    client: "Confidential Client",
    clientConfidentiality: "Confidential DTC & Specialty Retail Brand",
    industry: "Digital Commerce",
    category: "AI / ML",
    technologies: ["Next.js", "Node.js", "Gemini / OpenAI", "MongoDB", "AWS"],
    shortDescription:
      "A personalized commerce experience with AI-assisted discovery and intelligent product workflows.",
    fullOverview:
      "Designed and developed a headless commerce platform combining vector-embedded search, natural-language guided discovery, and real-time inventory allocation for a global specialty retail brand.",
    challenge: [
      "Traditional keyword search failed on nuanced consumer queries (e.g., 'lightweight water-resistant jacket for humid 15-degree morning runs'), driving high search bounce rates.",
      "Customer support was overwhelmed by basic product suitability questions that could be answered directly from rich technical product specifications."
    ],
    approach: [
      "Constructed a high-dimensional vector search layer indexing product attributes, material specifications, and verified customer reviews.",
      "Integrated a low-latency LLM discovery agent that synthesizes catalog knowledge to provide conversational recommendations without intrusive or generic bot responses."
    ],
    whatWeBuilt: {
      headline: "Intent-driven search and lightning-fast checkout",
      paragraphs: [
        "A bespoke Next.js storefront with sub-second page transitions, dynamic facet generation based on intent, and a lightweight server-driven AI assistant.",
        "A merchant back-office tool that analyzes zero-result search clusters and automatically generates optimized copy suggestions based on catalog gaps."
      ],
      features: [
        {
          title: "Semantic Vector Discovery",
          description: "Hybrid keyword + embedding search returning contextual matches even with typos and abstract queries."
        },
        {
          title: "Context-Aware Product Advisor",
          description: "Streaming recommendations grounded in real inventory, sizing guides, and temperature tolerances."
        },
        {
          title: "Edge Cached Storefront",
          description: "Sub-100ms cold loads globally utilizing Next.js incremental static regeneration and edge KV."
        }
      ]
    },
    architecture: {
      headline: "Hybrid Neural Search & Edge Commerce Pipeline",
      subheadline: "Sub-second product retrieval pairing hybrid vector indexing with edge caching.",
      nodes: [
        {
          step: "01",
          title: "CLIENT",
          subtitle: "Responsive Storefront",
          tech: "Next.js / React 19 / Tailwind",
          details: "Optimistic UI updates, mobile-first design, and streaming state."
        },
        {
          step: "02",
          title: "EDGE LAYER",
          subtitle: "Global CDN & Session Store",
          tech: "AWS CloudFront / Edge Middleware",
          details: "Geo-routing, currency normalization, and personalized edge tags."
        },
        {
          step: "03",
          title: "API ORCHESTRATION",
          subtitle: "Catalog & Search Service",
          tech: "Node.js / Express / TypeScript",
          details: "Cart logic, pricing computation, and telemetry tracking."
        },
        {
          step: "04",
          title: "AI INFERENCE",
          subtitle: "Vector Search & LLM Engine",
          tech: "OpenAI / Gemini Embeddings / Pinecone",
          details: "Real-time query expansion, semantic reranking, and guarded completions."
        },
        {
          step: "05",
          title: "DATA STORE",
          subtitle: "Catalog & Order Store",
          tech: "MongoDB Atlas / AWS DocumentDB",
          details: "Schema-flexible product documents and transaction-safe order ledgers."
        },
        {
          step: "06",
          title: "PAYMENT & ERP",
          subtitle: "Fulfillment Integrations",
          tech: "Stripe / Shopify API / ShipStation",
          details: "Webhooks for synchronous auth and async fulfillment updates."
        }
      ]
    },
    behindTheBuild: {
      problem: {
        title: "Hallucination Risk & Latency in LLM Responses",
        description:
          "Naive LLM wrappers introduced 3.5s response latency and occasionally suggested products not currently in stock, damaging customer trust."
      },
      decision: {
        title: "Deterministic Pre-Filtering with Strict Retrieval Boundaries",
        description:
          "We enforced a two-stage pipeline: Elasticsearch/Vector search extracts exact in-stock SKUs first, and the LLM only formats and justifies recommendations from this explicit verified pool."
      },
      engineering: {
        title: "Streaming Server-Sent Events with Dynamic Cards",
        description:
          "Architected token streaming over HTTP/2 SSE where product cards hydrate and render in the UI within 220ms, while the accompanying reasoning streams in parallel."
      },
      result: {
        title: "34% Increase in Search-to-Cart Conversion",
        description:
          "Shoppers found target items in 1.4 queries on average (down from 4.1), and search abandonment dropped by 52% within the first 60 days."
      }
    },
    outcomes: [
      {
        value: "34%",
        label: "HIGHER CONVERSION",
        description: "Increase in search-to-cart conversion rate across technical catalog categories."
      },
      {
        value: "220ms",
        label: "SEARCH LATENCY",
        description: "Average retrieval time for hybrid semantic + lexical queries."
      },
      {
        value: "52%",
        label: "REDUCED BOUNCE",
        description: "Drop in zero-result exit rates on complex exploratory searches."
      }
    ],
    mockupData: {
      type: "stream",
      accentColor: "#FD5006",
      badge: "SEMANTIC SEARCH · LIVE",
      stats: [
        { label: "INDEXED SKUS", value: "48,200" },
        { label: "HYBRID ACCURACY", value: "97.4%" },
        { label: "AVG RESPONSE", value: "220ms" }
      ]
    }
  },
  {
    id: "proj-03",
    slug: "business-automation-platform",
    number: "03",
    year: "2025",
    title: "Business Automation Platform",
    subtitle: "Custom workflow engine orchestrating cross-departmental operations and automated reporting",
    client: "Confidential Client",
    clientConfidentiality: "Confidential Enterprise Logistics & Fleet Operator",
    industry: "Enterprise Operations",
    category: "AUTOMATION",
    technologies: ["Python", "FastAPI", "PostgreSQL", "AWS"],
    shortDescription:
      "A workflow automation system designed to reduce repetitive internal operations and reporting.",
    fullOverview:
      "Engineered an automated operations engine that unifies fleet telemetry, regulatory compliance filings, and weekly financial reconciliation into idempotent, self-healing background pipelines.",
    challenge: [
      "Operations teams spent 30+ hours each week manually extracting CSV files from three legacy ERPs, cross-referencing toll receipts, and resolving billing discrepancies.",
      "Human error in manual data entry caused recurring quarterly audit adjustments and delayed partner settlements."
    ],
    approach: [
      "Constructed a modular workflow engine in FastAPI utilizing DAG (directed acyclic graph) task execution with strict schema validation via Pydantic.",
      "Implemented automated anomaly detection that flags statistical deviations in vendor invoices before payment runs are triggered."
    ],
    whatWeBuilt: {
      headline: "Resilient automation replacing fragile manual spreadsheets",
      paragraphs: [
        "A centralized automation service that monitors incoming SFTP drops, webhooks, and REST endpoints, automatically validating and reconciling transactions in minutes.",
        "A clean administrative interface where operations managers can inspect pipeline runs, retry failed external tasks with one click, and review auto-generated compliance reports."
      ],
      features: [
        {
          title: "DAG Workflow Scheduler",
          description: "Dependency-aware task runner supporting automatic retries, backoff, and alerting."
        },
        {
          title: "Automated Reconciliation",
          description: "High-speed matching engine resolving 100,000+ line items against bank statements in under 3 minutes."
        },
        {
          title: "Audit & Rollback Controls",
          description: "Every automated write operation is fully reversible with deterministic rollback logs."
        }
      ]
    },
    architecture: {
      headline: "Asynchronous Task Scheduling & ETL Core",
      subheadline: "Distributed queue architecture designed for guaranteed execution and self-healing error states.",
      nodes: [
        {
          step: "01",
          title: "DATA INGESTION",
          subtitle: "SFTP, APIs & Webhooks",
          tech: "AWS S3 / EventBridge / Webhook Receivers",
          details: "Automated ingestion triggers on file upload or partner events."
        },
        {
          step: "02",
          title: "SCHEMA VALIDATION",
          subtitle: "Strict Typing & Sanitation",
          tech: "FastAPI / Pydantic V2",
          details: "Deterministic payload contract enforcement and sanitization."
        },
        {
          step: "03",
          title: "WORKFLOW ORCHESTRATOR",
          subtitle: "Task DAG & Execution",
          tech: "Celery / Redis / Python 3.12",
          details: "State machine tracking dependencies, concurrency, and worker leases."
        },
        {
          step: "04",
          title: "RECONCILIATION ENGINE",
          subtitle: "Fuzzy Matching & Anomaly Detection",
          tech: "NumPy / Pandas / Custom Rules",
          details: "Multi-parameter matching with confidence scoring thresholds."
        },
        {
          step: "05",
          title: "RELATIONAL REPOSITORY",
          subtitle: "Ledger & Audit History",
          tech: "PostgreSQL / SQLAlchemy / Alembic",
          details: "ACID transactions with time-series partitioned logging."
        },
        {
          step: "06",
          title: "NOTIFICATION & REPORTING",
          subtitle: "Dispatches & Exports",
          tech: "AWS SES / Slack Webhooks / S3 Exports",
          details: "Automated summaries, executive PDFs, and instant incident paging."
        }
      ]
    },
    behindTheBuild: {
      problem: {
        title: "Silent Failures in External Vendor Feeds",
        description:
          "Upstream vendor APIs would frequently change date formats or return 200 OK statuses containing empty bodies, polluting historical reporting databases."
      },
      decision: {
        title: "Fail-Fast Contract Guards and Isolation Sandboxes",
        description:
          "Rather than trusting external inputs, we implemented strict contract boundaries: any malformed data immediately halts that specific branch, notifies the operator, and retains the payload in quarantine without stopping the global queue."
      },
      engineering: {
        title: "Deterministic Re-execution and Time-Travel Replay",
        description:
          "Built full state snapshots into every workflow step, allowing engineers and operators to replay any batch from the exact moment of failure once external issues were resolved."
      },
      result: {
        title: "28 Hours/Week Reclaimed for Core Operations",
        description:
          "Eliminated manual copy-pasting across departments, lowered reporting turnaround from 3 days to 4 minutes, and achieved 100% clean audit compliance."
      }
    },
    outcomes: [
      {
        value: "28h/wk",
        label: "TIME SAVED",
        description: "Manual administrative hours saved per week across finance and ops."
      },
      {
        value: "99.8%",
        label: "AUTO-MATCH RATE",
        description: "Accurate autonomous reconciliation without manual intervention."
      },
      {
        value: "0",
        label: "AUDIT DISCREPANCIES",
        description: "Zero reporting discrepancies recorded over three fiscal quarters."
      }
    ],
    mockupData: {
      type: "pipeline",
      accentColor: "#FD5006",
      badge: "AUTOMATION ENGINE · ACTIVE",
      stats: [
        { label: "TASKS / DAY", value: "142,800" },
        { label: "AUTO-RESOLVED", value: "99.8%" },
        { label: "RUN TIME", value: "3.8m" }
      ]
    }
  },
  {
    id: "proj-04",
    slug: "analytics-operations-dashboard",
    number: "04",
    year: "2024",
    title: "Analytics / Operations Dashboard",
    subtitle: "Real-time telemetry, anomaly tracking, and operational intelligence for distributed services",
    client: "Confidential Client",
    clientConfidentiality: "Confidential Cloud Infrastructure Provider",
    industry: "Infrastructure & Observability",
    category: "WEB",
    technologies: ["React", "Node.js", "PostgreSQL", "Charts", "APIs"],
    shortDescription:
      "A real-time business intelligence and monitoring platform.",
    fullOverview:
      "Architected a unified observability and business telemetry console capable of aggregating millions of time-series event metrics into sub-second visual dashboards for executive and engineering leadership.",
    challenge: [
      "The engineering leadership had to consult four disparate monitoring portals to understand whether infrastructure degradation was impacting business-level transaction revenue.",
      "Existing enterprise BI tools were slow to load (10-15s per query) and struggled with high-cardinality time-series filtering."
    ],
    approach: [
      "Engineered a purpose-built telemetry aggregation layer that pre-computes time-bucketed rollups into partitioned PostgreSQL tables.",
      "Designed a clutter-free, high-density React interface inspired by aviation displays, delivering 60fps graph scrubbing and zero render lag."
    ],
    whatWeBuilt: {
      headline: "Sub-second insights bridging technical telemetry and revenue health",
      paragraphs: [
        "A responsive operational command center providing synchronized time-series scrubbing, real-time alerting thresholds, and interactive drill-downs into raw customer incident logs.",
        "Optimized canvas-accelerated rendering techniques ensuring fluid chart interaction even when displaying 50,000 data points on modest hardware."
      ],
      features: [
        {
          title: "Unified Revenue & Telemetry Correlation",
          description: "Instantly correlates latency spikes with checkout completion drops."
        },
        {
          title: "Hardware-Accelerated Charting",
          description: "Smooth 60fps canvas-rendered time-series scrubbing with multi-cursor sync."
        },
        {
          title: "Live Incident Triage Room",
          description: "Shared collaborative dashboard view with real-time cursor indicators and annotation locks."
        }
      ]
    },
    architecture: {
      headline: "Time-Series Stream Aggregator & Canvas Visualizer",
      subheadline: "Real-time query pipeline reducing multi-gigabyte log scans to sub-second cached queries.",
      nodes: [
        {
          step: "01",
          title: "TELEMETRY AGENTS",
          subtitle: "Service Nodes & Gateways",
          tech: "OpenTelemetry / Prometheus",
          details: "Structured metric collection across distributed Kubernetes clusters."
        },
        {
          step: "02",
          title: "INGESTION STREAM",
          subtitle: "Buffer & Aggregator",
          tech: "Node.js / TimescaleDB Ingester",
          details: "Windowed deduplication, metric downsampling, and backpressure control."
        },
        {
          step: "03",
          title: "DATA WAREHOUSE",
          subtitle: "Time-Series Partitioned Store",
          tech: "PostgreSQL / Continuous Aggregates",
          details: "Compressed hourly and daily hypertable rollups for instant query execution."
        },
        {
          step: "04",
          title: "QUERY ENGINE",
          subtitle: "Analytical API & Cache",
          tech: "Node.js / Fastify / Redis",
          details: "Predictive pre-fetching and sub-50ms query cache responses."
        },
        {
          step: "05",
          title: "DASHBOARD CLIENT",
          subtitle: "High-Density Command Center",
          tech: "React 19 / HTML5 Canvas / Web Workers",
          details: "Worker-thread data parsing preventing main-thread UI stutter."
        },
        {
          step: "06",
          title: "ALERTING RELAY",
          subtitle: "Escalation & Paging",
          tech: "PagerDuty / Webhooks / Email",
          details: "Automated anomaly threshold alerting with contextual incident runbooks."
        }
      ]
    },
    behindTheBuild: {
      problem: {
        title: "Browser Freezing on High-Density Time-Series Datasets",
        description:
          "SVG-based charting libraries choked the browser DOM when rendering more than 4,000 data points across multiple concurrent metric charts, crashing client tabs."
      },
      decision: {
        title: "Offload Data Decimation to Web Workers + Canvas Rendering",
        description:
          "We moved all data decimation (Largest-Triangle-Three-Buckets algorithm) to dedicated background Web Workers and switched from DOM SVGs to lightweight 2D Canvas rendering."
      },
      engineering: {
        title: "Cross-Chart Synchronized Hover via Shared Reference Bus",
        description:
          "Implemented a decoupled lightweight coordinate pub/sub bus so that scrubbing across one metric instantly syncs cursor lines and tooltips across all 8 charts without React rerenders."
      },
      result: {
        title: "Instant 60fps Scrubbing Across 50,000+ Metrics",
        description:
          "Page load time dropped from 12 seconds to 450ms, and engineers can scrub through a full 30-day incident window with zero dropped frames."
      }
    },
    outcomes: [
      {
        value: "<450ms",
        label: "QUERY LATENCY",
        description: "Average retrieval time across 30-day multi-metric queries."
      },
      {
        value: "60fps",
        label: "RENDER PERFORMANCE",
        description: "Smooth canvas scrubbing across 50,000+ simultaneous data points."
      },
      {
        value: "65%",
        label: "FASTER TRIAGE",
        description: "Decrease in mean-time-to-resolution (MTTR) during system incidents."
      }
    ],
    mockupData: {
      type: "editor",
      accentColor: "#FD5006",
      badge: "TELEMETRY ENGINE · LIVE",
      stats: [
        { label: "METRICS / SEC", value: "320k" },
        { label: "QUERY P99", value: "42ms" },
        { label: "FRAME RATE", value: "60 FPS" }
      ]
    }
  }
];
