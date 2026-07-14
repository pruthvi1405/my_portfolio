// Central content file — edit these values to update the site.
// No component code needs to change when you update your info here.

export const profile = {
  name: 'Pruthvi Niranjan',
  title: 'AI Software Engineer | LLM & Distributed Systems',
  location: 'Hillsboro, OR',
  phone: '857-390-5565',
  email: 'pruthviniranjan14@gmail.com',
  github: 'https://github.com/pruthvi1405',
  linkedin: 'https://linkedin.com/in/pruthvi-niranjan',

  summary:
    'AI-focused Software Engineer building production LLM applications, distributed data platforms, and cloud-native backend systems. At StemLink Automation, I engineered event-driven ingestion services processing 5M+ conversational AI events daily, built production RAG pipelines over 10,000+ knowledge articles, and deployed scalable services on AWS and Kubernetes. Passionate about building intelligent systems that combine reliable backend engineering with modern AI.',

  roles: [
    'Production LLM applications',
    'Distributed backend systems',
    'Cloud-native AI infrastructure',
  ],
}

export const skills = [
  {
    category: 'AI Engineering',
    items: [
      'OpenAI API',
      'RAG Pipelines',
      'Embeddings',
      'Vector Search',
      'Prompt Engineering',
      'LLM Evaluation',
    ],
  },
  {
    category: 'Backend',
    items: [
      'Python',
      'FastAPI',
      'Java',
      'Node.js',
      'REST APIs',
      'GraphQL',
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      'AWS',
      'Lambda',
      'API Gateway',
      'EC2',
      'SQS',
      'S3',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'Terraform',
      'Jenkins',
      'Linux',
    ],
  },
  {
    category: 'Data Engineering',
    items: [
      'Snowflake',
      'Kafka',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Elasticsearch',
    ],
  },
  {
    category: 'Frontend',
    items: ['React', 'TypeScript'],
  },
]

export const certifications = [
  'AWS Certified Solutions Architect – Associate',
]

export const experience = [
  {
    company: 'StemLink Automation',
    location: 'Hillsboro, OR',
    role: 'Software Data Engineer',
    period: 'Aug 2024 — Present',
    points: [
      'Led a 3-engineer initiative building event-driven data-ingestion services using FastAPI, AWS SQS, and Snowflake, reducing end-to-end ingestion latency by 80%.',
      'Engineered high-throughput Python pipelines processing over 5 million conversational AI events daily, increasing throughput 6× through asynchronous programming and optimized partitioning.',
      'Built production Retrieval-Augmented Generation (RAG) pipelines using OpenAI embeddings and vector search across 10,000+ customer knowledge articles, improving retrieval accuracy by 35% while reducing hallucinations by 40%.',
      'Implemented automated schema validation, anomaly detection, and real-time data-quality monitoring, reducing data integrity incidents by 75% and manual validation by 90%.',
      'Deployed containerized backend services on AWS and Kubernetes with CI/CD, centralized logging, and monitoring, improving deployment reliability to 99.9% while reducing release cycles.',
    ],
  },
  {
    company: 'Juniper Networks',
    location: 'Bengaluru, India',
    role: 'Software Engineering Intern',
    period: 'Jan 2022 — Jul 2022',
    points: [
      'Automated Junos network device configuration using Python and the PyEZ framework, reducing manual configuration errors by 60%.',
      'Enhanced monitoring and logging tools for network performance analysis, reducing issue-resolution time by 30% through proactive alerting.',
      'Resolved critical customer escalations by analyzing device logs and network configurations, restoring production network stability.',
    ],
  },
]

export const projects = [
  {
    name: 'PulseCheck',
    subtitle: 'Autonomous AI Code Review Platform',
    period: 'Jul 2026',
    description:
      'Built an autonomous GitHub App that authenticates webhooks using HMAC signatures, retrieves pull request diffs via GitHub APIs, performs dual-pass code reviews using static analysis and LLM reasoning, and publishes consolidated review feedback through an event-driven AWS architecture.',
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
    subtitle: 'RAG-Based Log Analysis Tool',
    period: 'Oct 2025',
    description:
      'Designed the embedding and retrieval architecture using OpenAI embeddings, ChromaDB, semantic search, FastAPI, and Docker, enabling engineers to query logs in natural language while reducing debugging time by more than two hours per day.',
    tags: [
      'Python',
      'OpenAI',
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
