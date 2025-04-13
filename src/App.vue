<template>
  <div>
    <!-- Example of an IntroAnimation that disappears -->
    <IntroAnimation v-if="showIntro" @done="showIntro = false" />
    
    <div v-else id="app">
      <AppNavbar />
      <!-- One-page, full-height scroll container -->
      <main class="scroll-container" ref="scrollContainer">
        <AboutSection />
        <ExperienceSection />
        
        <!-- Our Projects Section (one full screen) -->
        <ProjectsSection />
        
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  </div>
  <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
/>

</template>

<script setup>
import { ref, provide } from 'vue'
import IntroAnimation from './components/IntroAnimation.vue'
import AppNavbar from './components/AppNavbar.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'


const showIntro = ref(true)
const scrollContainer = ref(null)
provide('scrollContainer', scrollContainer)
</script>

<style lang="scss">
/* Make sure the parent layout uses scroll snapping */
html,
body {
  margin: 0;
  height: 100%;
  overflow: hidden;
}

.scroll-container {
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}

/* Every child section must have .section to snap properly */
.section {
  height: 100vh;
  scroll-snap-align: start;
}
</style>
