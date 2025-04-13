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
import chess from '@/assets/images/chess.jpg'
import study from '@/assets/images/study.jpg'
import easy from '@/assets/images/easy.jpg'
import medical from '@/assets/images/medical.jpg'

const projects = [
  {
  name: 'Easy Connect',
  description: 'Full-stack MERN application with real-time chat, video calling, and file sharing features.',
  github: 'https://github.com/pruthvi1405/Easy-Connect',
  image: easy
},
  {
  name: 'Study Sync',
  description: 'Java-based microservices application for managing and delivering quizzes, with scalable architecture and real-time evaluation.',
  github: 'https://github.com/pruthvi1405/study_sync',
  image: study
},
  {
  name: 'ChessGame',
  description: 'Real-time chess game built with React, featuring chat and video call integration.',
  github: 'https://github.com/pruthvi1405/ChessGame',
  image: chess
},
{
  name: 'Medical Image Generator',
  description: 'Diffusion-based deep learning model for generating realistic skin rash images for medical research.',
  github: 'https://github.com/pruthvi1405/medical-image-generator',
  image: medical
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
