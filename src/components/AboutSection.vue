<template>
  <div class="hero-section section" id="about">
    <div class="page-overlay"></div>
    <!-- Starry background -->
    <div class="stars-bg"></div>

    <!-- Main content -->
    <div class="hero-content">
      <div class="text-content">
        <img src="@/assets/images/pruthvi.jpeg" alt="Profile" class="profile-img" />

        <h1>
          <span class="highlight">FULLSTACK</span><br />
          <span class="dimmed">DEVELOPER</span>
        </h1>

        <p>
          Hi! I'm <strong>Pruthvi</strong>. A creative Frontend Developer with 3+ years
          of experience in building high-performance, scalable, and responsive web
          solutions.
        </p>

        <div class="social-buttons">
  <a href="https://www.linkedin.com/in/pruthvi-niranjan/" target="_blank" class="icon-btn">
    <i class="fab fa-linkedin-in"></i>
  </a>
  <a href="https://github.com/pruthvi1405" target="_blank" class="icon-btn">
    <i class="fab fa-github"></i>
  </a>
  <a href="https://leetcode.com/u/pruthviniranjan01/" target="_blank" class="icon-btn leetcode-icon">
    <svg width="24" height="24" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFA116" d="M15.9 36.5l-2.6-2.6 12-12-12-12 2.6-2.6 14.6 14.6-14.6 14.6z"/>
      <path fill="#000" d="M20.3 39.8L33.9 26.2l-13.6-13.6 2.6-2.6 16.2 16.2-16.2 16.2-2.6-2.6z"/>
    </svg>
  </a>
</div>
      </div>

<!-- Scroll Down V-shaped cue -->
<div class="scroll-down">
  <div class="v-symbol">v</div>
</div>


    </div>

    <!-- Bottom-right vertical stats -->
    <div class="hero-stats">
      <div class="stat"><span>3+</span><p>Years of Experience</p></div>
      <div class="stat"><span>7+</span><p>Completed Projects</p></div>
      <div class="stat"><span>10K+</span><p>Hours Worked</p></div>
    </div>
  </div>
</template>

<script setup>
// nothing needed here
</script>

<!-- Add this to index.html or main layout -->
<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" /> -->

<style scoped lang="scss" src="@/assets/styles/AboutSection.scss"></style>
