<script setup>
import { profile } from '../data/portfolio'
</script>

<template>
  <section id="contact" class="contact">
    <p class="contact__index">06. What's Next?</p>
    <h2 class="contact__heading">Get In Touch</h2>
    <p class="contact__text">
      I'm always open to discussing new projects, automation ideas, or opportunities to build
      something useful together. My inbox is open — drop me a line.
    </p>
    <a :href="`mailto:${profile.email}`" class="btn contact__cta">say hello</a>

    <div class="contact__links">
      <a :href="`mailto:${profile.email}`" class="contact__link">{{ profile.email }}</a>
      <a :href="`tel:+1${profile.phone.replace(/[^0-9]/g, '')}`" class="contact__link">{{ profile.phone }}</a>
      <a :href="profile.github" target="_blank" rel="noopener" class="contact__link">GitHub</a>
      <a :href="profile.linkedin" target="_blank" rel="noopener" class="contact__link">LinkedIn</a>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables' as *;
@use '../assets/styles/mixins' as *;

.contact {
  @include container;
  @include section-spacing;
  text-align: center;
  max-width: 640px;
}

.contact__index {
  font-family: $font-mono;
  color: $accent;
  font-size: 15px;
  margin-bottom: 12px;
}

.contact__heading {
  font-size: clamp(28px, 5vw, 44px);
  color: $text-primary;
  margin-bottom: 20px;
}

.contact__text {
  margin-bottom: 36px;
  font-size: 16px;
}

.contact__cta {
  margin-bottom: 48px;
}

.contact__links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
}

.contact__link {
  font-family: $font-mono;
  font-size: 14px;
  color: $text-secondary;
  transition: color 0.2s ease;

  &:hover {
    color: $accent;
  }
}
</style>
