<template>
  <section class="two-columns-scroll section" id="skills">
    <div class="layout-container">
      <!-- LEFT -->
      <div class="left-block">
        <div class="tag">MY SKILLS</div>
        <h2 class="section-title">Blending Creativity with <span>Tools</span></h2>
        <p class="subtext">
          I'm a passionate developer who loves turning ideas into impactful digital experiences. With a strong foundation in full-stack development, I craft responsive UIs, build scalable backends, and seamlessly integrate modern tools to bring projects to life.
        </p>
      </div>

      <!-- RIGHT -->
      <div class="right-block">
        <!-- Desktop View: Scroll Columns -->
        <div class="columns-container" v-if="!isMobile">
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

        <!-- Mobile View: Densely filled circular layout -->
       <!-- Mobile View: Horizontal scrolling skills row -->
<div class="scroll-strip" v-else>
  <div class="scroll-content">
    <div
      class="scroll-item"
      v-for="(skill, index) in [...allSkills, ...allSkills]"
      :key="index"
    >
      <img :src="skill.logo" :alt="skill.title" />
    </div>
  </div>
</div>

      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted } from 'vue'

const isMobile = ref(false)
onMounted(() => {
  const checkMobile = () => {
    isMobile.value = window.innerWidth <= 425
  }
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

// Function to position elements in circle (360 deg)
function getCirclePosition(index, total) {
  const angle = (360 / total) * index
  const radius = 120 // Adjust for spacing
  const x = Math.cos((angle * Math.PI) / 180) * radius
  const y = Math.sin((angle * Math.PI) / 180) * radius
  return {
    transform: `translate(${x}px, ${y}px)`
  }
}

// SKILLS DATA (same as before)
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

const allSkills = [
  { title: 'Python', logo: pythonlogo, description: 'Used for automation, scripting, Flask APIs, and machine learning.' },
  { title: 'Java', logo: javalogo, description: 'Developed enterprise applications and Spring Boot backends.' },
  { title: 'SQL', logo: sqllogo, description: 'Used across PostgreSQL, MySQL, and OracleDB for structured data handling.' },
  { title: 'C++', logo: clogo, description: 'Strong foundational language for algorithms and systems programming.' },
  { title: 'JavaScript', logo: jslogo, description: 'Used for dynamic UIs in React and Angular applications.' },
  { title: 'React', logo: reactlogo, description: 'Built responsive frontend UIs and reusable components.' },
  { title: 'Angular', logo: angularlogo, description: 'Worked on frontend architecture and forms.' },
  { title: 'Node.js', logo: nodelogo, description: 'Developed backend logic and APIs in full-stack apps.' },
  { title: '.NET', logo: netlogo, description: 'Worked with Microsoft development stack for enterprise apps.' },
  { title: 'Spring Boot', logo: springlogo, description: 'Created RESTful services and integrated databases.' },
  { title: 'Flask', logo: flasklogo, description: 'Developed lightweight Python backends and APIs.' },
  { title: 'Bash', logo: bashlogo, description: 'Automated tasks and managed Linux-based systems.' },
  { title: 'GraphQL', logo: graphqlLogo, description: 'Used for flexible and efficient data queries.' },
  { title: 'Linux', logo: linuxLogo, description: 'Preferred development OS for backend and scripting tasks.' },
  { title: 'Kafka', logo: kafkaLogo, description: 'Worked with distributed streaming for real-time pipelines.' },
  { title: 'ElasticSearch', logo: elasticsearchLogo, description: 'Implemented full-text search and data indexing.' },
  { title: 'Git', logo: gitLogo, description: 'Version control and collaborative dev workflows.' },
  { title: 'AWS', logo: awsLogo, description: 'Deployed infrastructure and services like EC2, S3.' },
  { title: 'Docker', logo: 'https://cdn-icons-png.flaticon.com/512/919/919853.png', description: 'Containerized apps for development and production.' },
  { title: 'Kubernetes', logo: kubernetesLogo, description: 'Automated deployment and scaling of containers.' },
  { title: 'Jenkins', logo: jenkinsLogo, description: 'Implemented CI/CD pipelines for automation.' },
  { title: 'PostgreSQL', logo: postgresLogo, description: 'Relational DB used in backend and enterprise apps.' },
  { title: 'Redis', logo: redisLogo, description: 'In-memory store for caching and pub/sub systems.' },
  { title: 'MongoDB', logo: mongoLogo, description: 'NoSQL DB used in MERN stack and scalable apps.' }
]
</script>

<style scoped lang="scss" src="@/assets/styles/SkillsSection.scss">


</style>
