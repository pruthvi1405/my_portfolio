<script setup>
import { skills } from '../data/portfolio'
</script>

<template>
  <section id="skills" class="skills">
    <div class="section-heading">
      <span class="index">02.</span>
      <h2>Skills &amp; Tools</h2>
      <span class="rule"></span>
    </div>

    <div class="skills__grid">
      <div v-for="group in skills" :key="group.category" class="skills__card">
        <h3 class="skills__category">{{ group.category }}</h3>
        <div class="skills__items">
          <span v-for="item in group.items" :key="item" class="tag">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables' as *;
@use '../assets/styles/mixins' as *;

.skills {
  @include container;
  @include section-spacing;
}

.skills__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: $breakpoint-lg) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}

.skills__card {
  @include card;
  padding: 24px;
}

.skills__category {
  font-family: $font-mono;
  font-size: 14px;
  color: $accent;
  margin-bottom: 16px;
}

.skills__items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
