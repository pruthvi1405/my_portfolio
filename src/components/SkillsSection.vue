<template>
  <section class="two-columns-scroll section" id="skills">
    <!-- Main layout container: heading on the left, columns on the right -->
    <div class="layout-container">
      <!-- LEFT SIDE: heading and subtext -->
      <div class="left-block">
        <!-- Tag/label above heading -->
        <div class="tag">MY SKILLS</div>

        <h2 class="section-title">
          Blending Creativity with 
          <span>Tools</span>
        </h2>
        <p class="subtext">
          I'm a passionate developer who loves turning ideas into impactful digital experiences. With a strong foundation in full-stack development, I craft responsive UIs, build scalable backends, and seamlessly integrate modern tools to bring projects to life.
        </p>
      </div>

      <!-- RIGHT SIDE: two columns side by side -->
      <div class="right-block">
        <div class="columns-container">
          <!-- Left column (scrolls UP) -->
          <div class="column up">
            <div class="column-content">
              <div
                class="skill-card"
                v-for="(skill, index) in allSkills"
                :key="index"
              >
                <img :src="skill.logo" :alt="skill.title" />
                <h3>{{ skill.title }}</h3>
                <p class="desc">{{ skill.description }}</p>
              </div>
            </div>
          </div>

          <!-- Right column (scrolls DOWN) -->
          <div class="column down">
            <div class="column-content">
              <div
                class="skill-card"
                v-for="(skill, index) in allSkills"
                :key="index"
              >
                <img :src="skill.logo" :alt="skill.title" />
                <h3>{{ skill.title }}</h3>
                <p class="desc">{{ skill.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import kubernetesLogo from '@/assets/images/kubernetes.png'
import awsLogo from '@/assets/images/aws.png'
import jenkinsLogo from '@/assets/images/jenkins.png'
import mongoLogo from '@/assets/images/mongodb.svg'
import postgresLogo from '@/assets/images/postgres.png'
import redisLogo from '@/assets/images/redis.png'
import gitLogo from '@/assets/images/git.png'
import logstashLogo from '@/assets/images/logstash.svg'
import elasticsearchLogo from '@/assets/images/elasticsearch.png'
import kafkaLogo from '@/assets/images/kafka.png'
import linuxLogo from '@/assets/images/linux.png'
import graphqlLogo from '@/assets/images/graphql.png'
import restLogo from '@/assets/images/rest.webp'
import reactlogo from '@/assets/images/react.png'
import angularlogo from '@/assets/images/angular.png'
import nodelogo from '@/assets/images/node.png'
import netlogo from '@/assets/images/net.png'
import springlogo from '@/assets/images/springboot.png'
import flasklogo from '@/assets/images/flask.png'
import bashlogo from '@/assets/images/bash.png'
import javalogo from '@/assets/images/java.png'
import pythonlogo from '@/assets/images/python.png'
import clogo from '@/assets/images/c++.png'
import sqllogo from '@/assets/images/sql.jpeg'
import jslogo from '@/assets/images/js.png'
/**
 * Same data as before. Each skill has:
 *   title, logo, description
 * You can replace or expand these with your own.
 */
 const allSkills = [
  // Programming Languages
  {
    title: 'Python',
    logo: pythonlogo,
    description: 'Used for automation, scripting, Flask APIs, and machine learning.',
  },
  {
    title: 'Java',
    logo: javalogo,
    description: 'Developed enterprise applications and Spring Boot backends.',
  },
  {
    title: 'SQL',
    logo: sqllogo,
    description: 'Used across PostgreSQL, MySQL, and OracleDB for structured data handling.',
  },
  {
    title: 'C++',
    logo: clogo,
    description: 'Strong foundational language for algorithms and systems programming.',
  },
  {
    title: 'JavaScript',
    logo: jslogo,
    description: 'Used for dynamic UIs in React and Angular applications.',
  },

  // Frameworks & Libraries
  {
    title: 'React',
    logo: reactlogo,
    description: 'Built responsive frontend UIs and reusable components.',
  },
  {
    title: 'Angular',
    logo: angularlogo,
    description: 'Worked on frontend architecture and forms.',
  },
  {
    title: 'Node.js',
    logo: nodelogo,
    description: 'Developed backend logic and APIs in full-stack apps.',
  },
  {
    title: '.NET',
    logo: netlogo,
    description: 'Worked with Microsoft development stack for enterprise apps.',
  },
  {
    title: 'Spring Boot',
    logo: springlogo,
    description: 'Created RESTful services and integrated databases.',
  },
  {
    title: 'Flask',
    logo: flasklogo,
    description: 'Developed lightweight Python backends and APIs.',
  },
  {
    title: 'Bash',
    logo: bashlogo,
    description: 'Automated tasks and managed Linux-based systems.',
  },

  // Systems & APIs
  {
    title: 'RESTful APIs',
    logo: restLogo,
    description: 'Designed and consumed stateless web services.',
  },
  {
    title: 'GraphQL',
    logo: graphqlLogo,
    description: 'Used for flexible and efficient data queries.',
  },
  {
    title: 'Linux',
    logo: linuxLogo,
    description: 'Preferred development OS for backend and scripting tasks.',
  },
  {
    title: 'Kafka',
    logo: kafkaLogo,
    description: 'Worked with distributed streaming for real-time pipelines.',
  },
  {
    title: 'ElasticSearch',
    logo: elasticsearchLogo,
    description: 'Implemented full-text search and data indexing.',
  },
  {
    title: 'LogStash',
    logo: logstashLogo,
    description: 'Processed logs and ingested data for analytics.',
  },
  {
    title: 'Git',
    logo: gitLogo,
    description: 'Version control and collaborative dev workflows.',
  },

  // Cloud & DevOps
  {
    title: 'AWS',
    logo: awsLogo,
    description: 'Deployed infrastructure and services like EC2, S3.',
  },
  {
    title: 'Docker',
    logo: 'https://cdn-icons-png.flaticon.com/512/919/919853.png',
    description: 'Containerized apps for development and production.',
  },
  {
    title: 'Kubernetes',
    logo: kubernetesLogo,
    description: 'Automated deployment and scaling of containers.',
  },
  {
    title: 'Jenkins',
    logo: jenkinsLogo,
    description: 'Implemented CI/CD pipelines for automation.',
  },

  // Databases
  {
    title: 'PostgreSQL',
    logo: postgresLogo,
    description: 'Relational DB used in backend and enterprise apps.',
  },
  {
    title: 'Redis',
    logo: redisLogo,
    description: 'In-memory store for caching and pub/sub systems.',
  },
  {
    title: 'MongoDB',
    logo: mongoLogo,
    description: 'NoSQL DB used in MERN stack and scalable apps.',
  }
];




</script>

<!-- Import your SCSS (update the path if needed) -->
<style scoped lang="scss" src="@/assets/styles/SkillsSection.scss"></style>
