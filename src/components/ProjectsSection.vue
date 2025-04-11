<template>
  <section class="projects-carousel section" id="projects">
    <div class="carousel-wrapper">
      <!-- LEFT: Carousel -->
      <div class="carousel-left">
        <div class="carousel-slides">
          <div
            v-for="(project, index) in projects"
            :key="project.name"
            class="carousel-slide"
            :class="{
              center: index === currentIndex,
              left: index === (currentIndex - 1 + projects.length) % projects.length,
              right: index === (currentIndex + 1) % projects.length
            }"
            @click="index === currentIndex && goToGithub(project.github)"
          >
            <img :src="project.image" :alt="project.name" class="slide-image" />
            <div class="slide-details">
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </div>

        <div class="carousel-controls">
          <button @click="prevSlide">◀</button>
          <button @click="nextSlide">▶</button>
        </div>
      </div>


    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const projects = [
  {
    name: 'Easy Connect',
    description: 'Real-time MERN chat app with file sharing.',
    github: 'https://github.com/pruthvi1405/easy-connect',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f73?auto=format&fit=crop&w=1050&q=80'
  },
  {
    name: 'CI/CD Pipeline',
    description: 'Jenkins-Docker-Kubernetes powered automation.',
    github: 'https://github.com/pruthvi1405/cicd-pipeline',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1050&q=80'
  },
  {
    name: 'ChatterMind',
    description: 'AI chatbot that classifies and chats using NLP.',
    github: 'https://github.com/pruthvi1405/chattermind',
    image: 'https://images.unsplash.com/photo-1633114072402-44df68d26a04?auto=format&fit=crop&w=1050&q=80'
  },
  {
    name: 'Attendance ML',
    description: 'ML-powered face recognition attendance app.',
    github: 'https://github.com/pruthvi1405/attendance-system',
    image: 'https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?auto=format&fit=crop&w=1050&q=80'
  }
]

const currentIndex = ref(0)
let interval

const nextSlide = () => currentIndex.value = (currentIndex.value + 1) % projects.length
const prevSlide = () => currentIndex.value = (currentIndex.value - 1 + projects.length) % projects.length
const goToGithub = (url) => window.open(url, '_blank')

onMounted(() => {
  interval = setInterval(nextSlide, 3000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<style scoped lang="scss" src="@/assets/styles/ProjectSection.scss"></style>
