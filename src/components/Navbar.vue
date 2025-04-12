<template>
  <header>
    <nav class="navbar">
      <div class="logo">&lt; PN /&gt;</div>

      <!-- Hamburger Icon (visible on mobile) -->
      <div class="hamburger" @click="toggleMenu">
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </div>

      <ul class="nav-links" :class="{ open: isOpen }">
        <li><a href="#about" :class="{ active: activeSection === 'about' }">About</a></li>
        <li><a href="#experience" :class="{ active: activeSection === 'experience' }">Experience</a></li>
        <li><a href="#projects" :class="{ active: activeSection === 'projects' }">Projects</a></li>
        <li><a href="#skills" :class="{ active: activeSection === 'skills' }">Skills</a></li>
        <li><a href="#contact" :class="{ active: activeSection === 'contact' }">Contact</a></li>
      </ul>
    </nav>

    <div class="scroll-progress" :style="{ width: scrollWidth + '%' }"></div>
  </header>
</template>


<script setup>
import { ref, inject, onMounted, onUnmounted } from 'vue'
import '@/assets/styles/AppNavbar.scss'


const scrollContainer = inject('scrollContainer')
const scrollWidth = ref(0)
const activeSection = ref('about')
const sectionIds = ['about', 'experience', 'projects', 'skills', 'contact']
const isOpen = ref(false)


const toggleMenu = () => {
  isOpen.value = !isOpen.value
}


const handleScroll = () => {
  const el = scrollContainer?.value
  if (!el) return

  const scrollTop = el.scrollTop
  const scrollHeight = el.scrollHeight - el.clientHeight
  scrollWidth.value = (scrollTop / scrollHeight) * 100

  for (const id of sectionIds) {
    const section = document.getElementById(id)
    if (section) {
      const offsetTop = section.offsetTop
      const offsetHeight = section.offsetHeight
      if (scrollTop >= offsetTop - 200 && scrollTop < offsetTop + offsetHeight - 200) {
        activeSection.value = id
        break
      }
    }
  }
}

onMounted(() => {
  scrollContainer?.value?.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  scrollContainer?.value?.removeEventListener('scroll', handleScroll)
})
</script>
