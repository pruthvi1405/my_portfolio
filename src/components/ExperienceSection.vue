<template>
  <section id="experience" class="section experience-section">
    <!-- Purple Glow (background only) -->
    <div class="purple-glow"></div>

    <!-- Actual Content -->
    <div class="experience-container">
      <h2 class="section-title">My Work Experiences</h2>
      <div class="timeline-wrapper">
        <!-- Sidebar -->
        <div class="company-list">
          <div
            v-for="(company, index) in experiences"
            :key="company.name"
            :class="{ active: index === selectedIndex }"
            @click="handleClick(index)"
            @mouseenter="handleHover"
            @mouseleave="handleLeave"
          >
            {{ company.name }}
          </div>
        </div>

        <!-- Details -->
        <div class="experience-details">
          <transition name="fade-slide" mode="out-in">
            <div :key="current.name">
              <h3 class="role-title">
                {{ current.title }} <span>@ {{ current.name }}</span>
              </h3>
              <p class="period">{{ current.type }} | {{ current.duration }}</p>
              <div class="description">
                <p v-for="(line, i) in current.description.split('\n')" :key="i">
                  {{ line }}
                </p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const experiences = [
  {
    name: 'Mega Structures',
    title: 'Software Engineer',
    duration: 'Jan 2024 – Jul 2024',
    type: 'Internship',
    description: `• Workflow Automation Team: Produced automated enterprise solutions to enhance efficiency and scalability.
• Devised and deployed an automated leave management system using Python (Flask, PostgreSQL) reducing processing time from 24 hours to 2 hours increasing approval response rates by 50% through timely notifications
• Optimized data processing pipeline to efficiently analyze structural defects in buildings with 1M+ records using stored procedures advanced indexing techniques and using OracleDB.
• Enhanced data quality and system reliability by implementing automated unit and integration tests using JUnit and Postman, reducing manual verification efforts by 40% and improving functional efficiency.`
  },
  {
    name: 'Juniper Networks',
    title: 'Software Engineer',
    duration: 'Jan 2022 – May 2022',
    type: 'Internship',
    description: `• Network Automation and Optimization Team: Designed and implemented automation to configure and monitor Junos-based network infrastructure, improving scalability, reducing downtime by streamlining network operations.
• Developed and fine-tuned automation scripts using the PyEZ framework to configure and manage Junos devices programmatically, reducing manual errors by 60% and significantly improving the efficiency of network deployments.
• Augmented custom monitoring and logging tools to analyze network performance and troubleshoot failures, improving log parsing efficiency by 10% and reducing issue resolution time by 30% through proactive alerting mechanisms.
• Investigated and resolved two critical customer-reported issues, including a complex router misconfiguration, by analyzing device logs and configurations, improving overall network stability and reducing downtime by 25%.`
  },
  {
    name: 'RIM',
    title: 'Full Stack Developer',
    duration: 'Aug 2021 – Nov 2021',
    type: 'Internship',
    description: `• Enterprise Application Development Team: Structured and generated scalable web applications to enhance business process automation, user experience, and security.
• Devised and deployed a responsive HR portal using ReactJS and Node.js, improving user experience by 70% through enriched accessibility, seamless navigation, and improved performance across five core modules.
• Crafted a reusable UI component library adhering to internal design standards, standardizing the UI across five projects and improving frontend consistency and maintainability.
• Streamlined global state management using React Query and Context API, improving data fetching efficiency.
• Integrated TypeScript for type safety and implemented JWT-based authentication, enhancing access control.`
  }
]

const selectedIndex = ref(0)
const current = computed(() => experiences[selectedIndex.value])

const handleClick = (index) => {
  selectedIndex.value = index
  if (cursor) {
    cursor.classList.remove('clicked')
    void cursor.offsetWidth
    cursor.classList.add('clicked')
  }
}

let scrollCooldown = false
const handleWheelScroll = (event) => {
  if (scrollCooldown) return
  if (event.deltaY > 0 && selectedIndex.value < experiences.length - 1) {
    selectedIndex.value++
  } else if (event.deltaY < 0 && selectedIndex.value > 0) {
    selectedIndex.value--
  }
  scrollCooldown = true
  setTimeout(() => {
    scrollCooldown = false
  }, 700)
}

const lockScroll = () => document.body.classList.add('scroll-locked')
const unlockScroll = () => document.body.classList.remove('scroll-locked')

let cursor = null
const handleMouseMove = (e) => {
  if (cursor) {
    cursor.style.top = `${e.clientY}px`
    cursor.style.left = `${e.clientX}px`
  }
}
const handleHover = () => cursor?.classList.add('hovering-company')
const handleLeave = () => cursor?.classList.remove('hovering-company')

onMounted(() => {
  cursor = document.createElement('div')
  cursor.classList.add('custom-cursor')
  document.body.appendChild(cursor)

  window.addEventListener('mousemove', handleMouseMove)

  const detailEl = document.querySelector('.experience-details')
  detailEl?.addEventListener('wheel', handleWheelScroll)
  detailEl?.addEventListener('mouseenter', lockScroll)
  detailEl?.addEventListener('mouseleave', unlockScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  const detailEl = document.querySelector('.experience-details')
  detailEl?.removeEventListener('wheel', handleWheelScroll)
  detailEl?.removeEventListener('mouseenter', lockScroll)
  detailEl?.removeEventListener('mouseleave', unlockScroll)
  cursor?.remove()
})
</script>

<style scoped lang="scss" src="@/assets/styles/ExperienceSection.scss"></style>
