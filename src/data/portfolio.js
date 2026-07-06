// Central content file — edit these values to update the site.
// No component code needs to change when you update your info here.

export const profile = {
  name: 'Pruthvi Niranjan',
  title: 'AI Automation & Full-Stack Software Engineer',
  location: 'Oregon, USA',
  phone: '857-390-5565',
  email: 'pruthviniranjan14@gmail.com',
  github: 'https://github.com/pruthvi1405',
  // TODO: confirm this is your real LinkedIn slug before publishing — currently unverified
  linkedin: 'https://linkedin.com/in/pruthvi-niranjan',
  summary:
    "I build AI agents and cloud-native systems that replace manual work with software that runs itself. In the last year: slashed scheduling overhead 60% for 5+ beta clients with voice/AI intake agents, secured a multi-tier microservices architecture on AWS, and shipped a fix to a data-corruption bug in a 79.6k-star open source project. 4+ years across startups and agencies — Python, Node.js, React, AWS, and modern LLM integration.",
  roles: [
    'AI agents that replace manual work',
    'cloud-native platforms that scale',
    'full-stack apps, shipped end-to-end',
  ],
}

export const skills = [
  {
    category: 'AI & Automation',
    items: ['OpenAI API', 'LangChain', 'RAG Pipelines', 'Prompt Engineering', 'ChromaDB'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS EC2', 'ECS Fargate', 'S3', 'RDS', 'CloudWatch', 'IAM', 'VPC', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins'],
  },
  {
    category: 'Web Development',
    items: ['React', 'Node.js', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', 'SASS', 'Vue'],
  },
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'Java', 'SQL', 'Bash'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firestore', 'DynamoDB', 'Redis'],
  },
  {
    category: 'Testing & Monitoring',
    items: ['Jest', 'PyTest', 'Unit Testing', 'Integration Testing', 'Distributed Tracing'],
  },
]

export const certifications = [
  'AWS Solutions Architect',
  'Certified Scrum Product Owner',
]

// Verb variety pass: each bullet across the whole resume now leads with a
// different action verb (no repeats within the same section or across
// adjacent sections). TODOs preserved wherever a real number/detail is
// still needed from you — don't fill these with guesses.
export const experience = [
  {
    company: 'Intel',
    location: 'Oregon, USA',
    role: 'Validation Engineer',
    period: 'May 2025 — Present',
    points: [
      'Streamlined manual firmware-log analysis, saving 2–3 hours/day, by integrating OpenAI GPT-based summarization into Python backend services, automatically surfacing key findings from validation logs so engineers could triage failures without reading raw output line-by-line.',
      'Increased validation throughput 40% and cut daily overhead 2 hours/engineer across a 20+ engineer team by engineering a cloud-hosted automation platform in Python and Node.js.',
      'Improved system stability 30% under peak load by building automated pipelines for error injection, firmware updates, and stress testing across data-center platforms, removing manual steps from update and test cycles.',
      'Slashed triage latency 60% by building cloud-native backend services for log ingestion, telemetry processing, and platform health monitoring, replacing manual review with real-time visibility into 50,000+ daily validation events.',
      'Reduced environment setup time 70% and standardized deployment across distributed validation teams by containerizing the platform’s internal services with Docker.',
      'Delivered real-time visibility into validation status and cross-environment health by building React and TypeScript telemetry dashboards, replacing ad hoc manual status checks.',
    ],
  },
  {
    company: 'StemLink Automation',
    location: 'Oregon, USA',
    role: 'Software Engineer',
    period: 'Aug 2024 — Apr 2025',
    points: [
      'Designed and built a beta-stage AI voice- and appointment-scheduling agent in Python using the OpenAI API, automating end-to-end client intake and cutting manual scheduling overhead 60% across 5+ beta clients.',
      'Led integration of LLM-driven conversation flows with client CRM systems across healthcare and professional-services beta accounts, cutting manual operations time 40%+ and standardizing intake across client verticals.',
      'Engineered cloud-hosted (AWS) backend services and Node.js orchestration pipelines connecting lead capture, qualification, scheduling, and follow-up, improving client response times 3x and eliminating manual handoffs during active beta testing.',
      'Built full-stack client-facing dashboards in React and TypeScript for scheduling-agent configuration and call analytics, giving beta clients self-serve visibility into automation performance without engineering support.',
      'Owned technical delivery for 5+ beta client engagements end-to-end, from architecture and prototyping through cloud deployment and iterative beta releases, as the primary point of contact from discovery through rollout.',
    ],
  },
  {
    company: 'StemLink Automation',
    location: 'Oregon, USA',
    role: 'Software Intern',
    period: 'May 2023 — Aug 2023',
    points: [
      // TODO: add a real % or count here if you have one from pilot testing
      'Developed core conversation-flow logic for an AI-powered appointment-scheduling agent using Python and the OpenAI API, enabling automated client intake ahead of the platform’s beta rollout.',
      'Implemented and tested REST API integrations in Node.js connecting a voice-based virtual assistant to backend scheduling and CRM systems, improving data accuracy between call intake and booking records.',
      'Created internal React dashboards to visualize scheduling-agent call outcomes and system performance, giving the engineering team real-time insight into automation reliability during development.',
      'Shipped and validated service updates in an AWS cloud environment as part of the team’s CI/CD pipeline, supporting reliable releases during active beta development.',
    ],
  },
  {
    company: 'Juniper Networks',
    location: 'USA',
    role: 'Software Engineering Intern',
    period: 'Jan 2022 — Jun 2022',
    points: [
      // TODO: name the actual root cause and a device/engineer count if you can
      'Resolved a router configuration-mismatch defect in Juniper’s PyEZ automation framework by reproducing the failure against live device state and identifying the underlying cause, restoring reliable configuration validation for the automation team.',
      'Strengthened codebase health across the PyEZ framework by resolving 150+ pylint violations, cutting the module’s lint warning count roughly 80% and reducing review friction for future contributors.',
      // TODO: note how many modules / how much of the framework this covered
      'Future-proofed the PyEZ framework ahead of Python 2 end-of-life by migrating framework modules from Python 2 to Python 3, replacing deprecated syntax and APIs to keep the library running on supported interpreters.',
    ],
  },
]

export const projects = [
  {
    name: 'Cruddr',
    subtitle: 'AWS Microservices',
    period: 'Jun 2026',
    description:
      'Production-grade microservices app deployed on AWS ECS Fargate, RDS, DynamoDB, S3, and API Gateway with distributed tracing via X-Ray for 60% better debug visibility, plus CI/CD via GitHub Actions. Secured multi-tier architecture with IAM roles, VPC networking, security groups, and load balancing.',
    tags: ['AWS ECS Fargate', 'RDS', 'DynamoDB', 'S3', 'API Gateway', 'X-Ray', 'GitHub Actions'],
    link: '',
  },
  {
    name: 'DevLog AI',
    subtitle: 'Intelligent Engineering Log Analyzer',
    period: 'Aug 2025',
    description:
      'RAG-powered log analysis tool (ChromaDB + OpenAI GPT) enabling plain-English queries over validation logs, reducing triage time by 2+ hours/day. Deployed via Docker + FastAPI.',
    tags: ['ChromaDB', 'OpenAI GPT', 'RAG', 'FastAPI', 'Docker'],
    link: '',
  },
]

export const openSource = {
  name: 'Hoppscotch',
  subtitle: 'Open-Source API Client · 79.6k★',
  period: 'Jun 2026',
  description:
    "Identified a silent data-corruption bug where basic-auth passwords containing colons were incorrectly truncated on cURL import, affecting all platform variants across the shared @hoppscotch/common package. Root-caused the issue to an incorrect split(\":\") in two TypeScript auth-parsing paths (getAuthFromParsedArgs and getAuthFromAuthHeader in auth.ts) that destructured all colon-delimited segments instead of splitting on the first colon only, per curl's documented credential format. Reproduced the bug with a minimal test case, documented expected vs. actual behavior with base64 evidence, and submitted a fix PR.",
  tags: ['TypeScript', 'Bug Fix', 'Open Source', 'PR'],
  link: 'https://github.com/hoppscotch/hoppscotch',
}

export const education = [
  {
    degree: 'Master of Science in Software Engineering Systems',
    school: 'Northeastern University',
    location: 'Boston, Massachusetts, USA',
    period: 'Aug 2024',
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'PES University',
    location: 'Bengaluru, Karnataka, India',
    period: 'May 2022',
  },
]
