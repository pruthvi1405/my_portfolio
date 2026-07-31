

export const profile = {
  name: 'Pruthvi Niranjan',

  title: 'AI Software Engineer | GenAI, Distributed Systems & Cloud',

  location: 'Washington, USA',

  phone: '857-390-5565',

  email: 'pruthviniranjan14@gmail.com',

  github: 'https://github.com/pruthvi1405',

  linkedin: 'https://linkedin.com/in/pruthvi-niranjan',

  summary:
    'AI Software Engineer with 3+ years of experience designing scalable cloud-native microservices, distributed systems, and production-grade GenAI applications. Experienced in building Retrieval-Augmented Generation (RAG) pipelines, agentic AI workflows, high-throughput event-driven architectures, and Kubernetes-based cloud platforms using Java, Spring Boot, Python, Azure, and AWS. Passionate about engineering intelligent systems that combine modern LLM capabilities with enterprise-scale backend software.',

  roles: [
    'Production GenAI Systems',
    'Distributed Backend Engineering',
    'Cloud-Native AI Infrastructure',
  ],
}

export const skills = [
  {
    category: 'AI Engineering',
    items: [
      'Azure OpenAI',
      'LangChain',
      'Retrieval-Augmented Generation (RAG)',
      'Agentic AI',
      'Function Calling',
      'Prompt Engineering',
      'LLM Evaluation',
      'Pinecone',
      'Vector Databases',
    ],
  },

  {
    category: 'Backend',
    items: [
      'Java 17',
      'Spring Boot',
      'Spring Cloud',
      'Python',
      'Node.js',
      'REST APIs',
      'gRPC',
      'GraphQL',
    ],
  },

  {
    category: 'Cloud & DevOps',
    items: [
      'Azure',
      'Azure OpenAI',
      'AKS',
      'Azure Service Bus',
      'Azure DevOps',
      'AWS',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'Git',
    ],
  },

  {
    category: 'Data & Distributed Systems',
    items: [
      'Apache Kafka',
      'Apache Spark',
      'PostgreSQL',
      'Redis',
      'Cosmos DB',
      'Pinecone',
    ],
  },

  {
    category: 'Frontend',
    items: [
      'React',
      'TypeScript',
      'Redux',
    ],
  },
]

export const certifications = [
  'AWS Certified Solutions Architect – Associate',
]

export const experience = [
  {
    company: 'Abbott Laboratories',

    location: 'Washington, USA',

    role: 'AI Software Engineer',

    period: 'Sep 2024 — Present',

    points: [
      'Designed cloud-native Java 17 and Spring Boot microservices processing real-time biosensor data from over 500K deployed glucose monitoring devices, sustaining more than 10,000 events per second with sub-second latency using Azure Service Bus.',

      'Built production Retrieval-Augmented Generation (RAG) pipelines using Azure OpenAI, LangChain, Pinecone, and Redis to generate clinically relevant patient insights while improving AI response quality.',

      'Developed agentic AI workflows using Azure OpenAI function-calling to query PostgreSQL and Cosmos DB, generate clinical summaries, and automate over 5,000 provider alerts daily with complete audit trails.',

      'Built and maintained Kubernetes-based MLOps pipelines using Azure DevOps, Docker, and AKS, automating validation, deployment, and monitoring within FDA-compliant CI/CD environments.',

      'Optimized Apache Kafka and Spark data pipelines to absorb a 30% increase in biosensor traffic with zero performance degradation while serving low-latency dashboards to more than 2,000 clinicians.',

      'Implemented secure backend services with OAuth2/JWT authentication while adhering to FDA QSR, ISO 13485, and IEC 62304 compliance requirements.',
    ],
  },

  {
    company: 'Infinite Infolab',

    location: 'Bengaluru, India',

    role: 'Software Engineer',

    period: 'Jan 2021 — Jul 2022',

    points: [
      'Developed scalable Spring Boot and Node.js microservices using OAuth2/JWT authentication, RBAC, PostgreSQL, and gRPC, reducing backend latency by 25%.',

      'Migrated legacy on-premise systems to AWS ECS (Fargate), Docker, Amazon S3, and RDS PostgreSQL with zero production downtime.',

      'Revamped legacy applications into React.js and Redux with GraphQL APIs, improving page load speed by 30% through code splitting and lazy loading.',

      'Integrated Apache Kafka for event-driven communication across distributed services and Stripe payment processing.',

      'Automated CI/CD pipelines using Jenkins and Docker, reducing deployment errors by 90% while achieving 85% automated test coverage with JUnit and Jest.',
    ],
  },
]

export const projects = [
  {
    name: 'PulseCheck',

    subtitle: 'Autonomous AI Code Review Platform',

    period: 'Jul 2026',

    description:
      'Built an autonomous GitHub App that authenticates webhooks, retrieves pull request diffs via GitHub APIs, performs dual-stage code reviews using static analysis and LLM reasoning, and publishes consolidated review feedback through an event-driven AWS architecture.',

    tags: [
      'Python',
      'FastAPI',
      'OpenAI',
      'GitHub API',
      'AWS Lambda',
      'API Gateway',
      'SQS',
    ],

    link: '',
  },

  {
    name: 'DevLog AI',

    subtitle: 'LLM-Powered Log Intelligence Platform',

    period: 'Oct 2025',

    description:
      'Designed a Retrieval-Augmented Generation (RAG) platform using OpenAI embeddings, ChromaDB, semantic search, FastAPI, and Docker, enabling engineers to query logs in natural language and significantly reducing debugging time.',

    tags: [
      'Python',
      'OpenAI',
      'LangChain',
      'RAG',
      'ChromaDB',
      'FastAPI',
      'Docker',
    ],

    link: '',
  },
]

export const openSource = {
  name: 'Hoppscotch',

  subtitle: 'Open-Source API Client · 79.8k★',

  period: 'May 2026',

  description:
    'Diagnosed and fixed a data-corruption bug where cURL imports silently truncated Basic Authentication passwords containing colons. Implemented a first-colon-only parsing fix, added regression tests, and successfully merged the contribution upstream.',

  tags: [
    'TypeScript',
    'Open Source',
    'Bug Fix',
    'Testing',
  ],

  link: 'https://github.com/hoppscotch/hoppscotch',
}

export const education = [
  {
    degree: 'Master of Science in Software Engineering Systems',

    school: 'Northeastern University',

    location: 'Boston, MA',

    period: 'Sep 2022 – Aug 2024',
  },

  {
    degree: 'Bachelor of Technology in Computer Science',

    school: 'PES University',

    location: 'Bengaluru, India',

    period: 'Aug 2018 – May 2022',
  },
]
