<script setup>
import { education } from '../data/portfolio'
</script>

<template>
  <section id="education" class="education">
    <div class="section-heading">
      <span class="index">05.</span>
      <h2>Education</h2>
      <span class="rule"></span>
    </div>

    <div class="education__grid">
      <div v-for="edu in education" :key="edu.degree" class="education-card">
        <span class="education-card__period">{{ edu.period }}</span>
        <h3>{{ edu.degree }}</h3>
        <p>{{ edu.school }}</p>
        <p class="education-card__location">{{ edu.location }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables' as *;
@use '../assets/styles/mixins' as *;

.education {
  @include container;
  @include section-spacing;
}

.education__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

.education-card {
  @include card;
  padding: 24px;

  &__period {
    font-family: $font-mono;
    font-size: 12px;
    color: $accent;
  }

  h3 {
    font-size: 17px;
    color: $text-primary;
    margin: 10px 0 6px;
  }

  p {
    font-size: 14px;
  }

  &__location {
    color: $text-muted;
    margin-top: 2px;
  }
}
</style>
