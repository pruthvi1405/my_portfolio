<template>
  <section class="two-columns-scroll section" id="skills">
    <!-- Main layout container: heading on the left, columns on the right -->
    <div class="layout-container">
      <!-- LEFT SIDE: heading and subtext -->
      <div class="left-block">
        <!-- Tag/label above heading -->
        <div class="tag">ABOUT ME</div>

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
/**
 * Same data as before. Each skill has:
 *   title, logo, description
 * You can replace or expand these with your own.
 */
 const allSkills = [
  // Programming Languages
  {
    title: 'Python',
    logo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.citypng.com%2Fphoto%2F20680%2Fhd-python-logo-symbol-transparent-png&psig=AOvVaw2U6BWe-Z4Dpk0ZVMxv3iM9&ust=1744381908207000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKikt5TXzYwDFQAAAAAdAAAAABAE',
    description: 'Used for automation, scripting, Flask APIs, and machine learning.',
  },
  {
    title: 'Java',
    logo: 'https://cdn-icons-png.flaticon.com/512/226/226777.png',
    description: 'Developed enterprise applications and Spring Boot backends.',
  },
  {
    title: 'SQL',
    logo: 'https://cdn-icons-png.flaticon.com/512/4492/4492311.png',
    description: 'Used across PostgreSQL, MySQL, and OracleDB for structured data handling.',
  },
  {
    title: 'C++',
    logo: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png',
    description: 'Strong foundational language for algorithms and systems programming.',
  },
  {
    title: 'JavaScript',
    logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    description: 'Used for dynamic UIs in React and Angular applications.',
  },

  // Frameworks & Libraries
  {
    title: 'React',
    logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
    description: 'Built responsive frontend UIs and reusable components.',
  },
  {
    title: 'Angular',
    logo: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
    description: 'Worked on frontend architecture and forms.',
  },
  {
    title: 'Node.js',
    logo: 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
    description: 'Developed backend logic and APIs in full-stack apps.',
  },
  {
    title: '.NET',
    logo: 'https://cdn-icons-png.flaticon.com/512/6132/6132221.png',
    description: 'Worked with Microsoft development stack for enterprise apps.',
  },
  {
    title: 'Spring Boot',
    logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png',
    description: 'Created RESTful services and integrated databases.',
  },
  {
    title: 'Flask',
    logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png',
    description: 'Developed lightweight Python backends and APIs.',
  },
  {
    title: 'Bash',
    logo: 'https://cdn-icons-png.flaticon.com/512/919/919837.png',
    description: 'Automated tasks and managed Linux-based systems.',
  },

  // Systems & APIs
  {
    title: 'RESTful APIs',
    logo: 'https://cdn-icons-png.flaticon.com/512/3909/3909444.png',
    description: 'Designed and consumed stateless web services.',
  },
  {
    title: 'GraphQL',
    logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968773.png',
    description: 'Used for flexible and efficient data queries.',
  },
  {
    title: 'Linux',
    logo: 'https://www.google.com/url?sa=i&url=https%3A%2F%2F1000logos.net%2Flinux-logo%2F&psig=AOvVaw2atLqWZkgTs7j6YmzmeARz&ust=1744381973011000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOjpsbHXzYwDFQAAAAAdAAAAABAE',
    description: 'Preferred development OS for backend and scripting tasks.',
  },
  {
    title: 'Kafka',
    logo: 'https://cdn-icons-png.flaticon.com/512/919/919831.png',
    description: 'Worked with distributed streaming for real-time pipelines.',
  },
  {
    title: 'ElasticSearch',
    logo: 'https://cdn-icons-png.flaticon.com/512/1051/1051275.png',
    description: 'Implemented full-text search and data indexing.',
  },
  {
    title: 'LogStash',
    logo: 'https://cdn-icons-png.flaticon.com/512/5969/5969044.png',
    description: 'Processed logs and ingested data for analytics.',
  },
  {
    title: 'Git',
    logo: 'https://cdn-icons-png.flaticon.com/512/2111/2111288.png',
    description: 'Version control and collaborative dev workflows.',
  },

  // Cloud & DevOps
  {
    title: 'AWS',
    logo: 'https://cdn-icons-png.flaticon.com/512/919/919825.png',
    description: 'Deployed infrastructure and services like EC2, S3.',
  },
  {
    title: 'Docker',
    logo: 'https://cdn-icons-png.flaticon.com/512/919/919853.png',
    description: 'Containerized apps for development and production.',
  },
  {
    title: 'Kubernetes',
    logo: 'https://cdn-icons-png.flaticon.com/512/5969/5969039.png',
    description: 'Automated deployment and scaling of containers.',
  },
  {
    title: 'Jenkins',
    logo: 'https://cdn-icons-png.flaticon.com/512/2772/2772189.png',
    description: 'Implemented CI/CD pipelines for automation.',
  },

  // Databases
  {
    title: 'PostgreSQL',
    logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968349.png',
    description: 'Relational DB used in backend and enterprise apps.',
  },
  {
    title: 'Redis',
    logo: 'https://cdn-icons-png.flaticon.com/512/528/528144.png',
    description: 'In-memory store for caching and pub/sub systems.',
  },
  {
    title: 'MongoDB',
    logo: 'https://cdn-icons-png.flaticon.com/512/919/919836.png',
    description: 'NoSQL DB used in MERN stack and scalable apps.',
  }
];




</script>

<!-- Import your SCSS (update the path if needed) -->
<style scoped lang="scss" src="@/assets/styles/SkillsSection.scss"></style>
