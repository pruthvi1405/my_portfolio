<script setup>
import { projects, openSource } from '../data/portfolio'
</script>

<template>
  <section id="projects" class="projects">
    <div class="section-heading">
      <span class="index">04.</span>
      <h2>Projects</h2>
      <span class="rule"></span>
    </div>

    <div class="projects__grid">
      <article v-for="project in projects" :key="project.name" class="project-card">
        <div class="project-card__header">
          <span class="project-card__folder">📁</span>
          <span class="project-card__period">{{ project.period }}</span>
        </div>
        <h3>{{ project.name }}</h3>
        <p class="project-card__subtitle">{{ project.subtitle }}</p>
        <p class="project-card__desc">{{ project.description }}</p>
        <div class="project-card__tags">
          <span v-for="tag in project.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </article>
    </div>

    <div class="section-heading section-heading--sub">
      <span class="index">04a.</span>
      <h2>Open Source</h2>
      <span class="rule"></span>
    </div>

    <a :href="openSource.link" target="_blank" rel="noopener" class="opensource-card">
      <div class="opensource-card__header">
        <span class="opensource-card__icon">★</span>
        <div>
          <h3>{{ openSource.name }}</h3>
          <p class="opensource-card__subtitle">{{ openSource.subtitle }}</p>
        </div>
        <span class="opensource-card__period">{{ openSource.period }}</span>
      </div>
      <p class="opensource-card__desc">{{ openSource.description }}</p>
      <div class="project-card__tags">
        <span v-for="tag in openSource.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </a>
  </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables' as *;
@use '../assets/styles/mixins' as *;

.projects {
  @include container;
  @include section-spacing;
}

.section-heading--sub {
  margin-top: 64px;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

.project-card {
  @include card;
  padding: 28px;
  display: flex;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  &__folder {
    font-size: 26px;
  }

  &__period {
    font-family: $font-mono;
    font-size: 12px;
    color: $text-muted;
  }

  h3 {
    font-size: 19px;
    color: $text-primary;
    margin-bottom: 4px;
  }

  &__subtitle {
    font-family: $font-mono;
    font-size: 13px;
    color: $accent;
    margin-bottom: 14px;
  }

  &__desc {
    font-size: 14px;
    margin-bottom: 20px;
    flex: 1;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
}

.opensource-card {
  @include card;
  display: block;
  padding: 28px;

  &__header {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 16px;

    h3 {
      font-size: 19px;
      color: $text-primary;
    }
  }

  &__icon {
    font-size: 22px;
    color: $accent-secondary;
  }

  &__subtitle {
    font-family: $font-mono;
    font-size: 13px;
    color: $accent;
    margin-top: 4px;
  }

  &__period {
    margin-left: auto;
    font-family: $font-mono;
    font-size: 12px;
    color: $text-muted;
    white-space: nowrap;
  }

  &__desc {
    font-size: 14px;
    margin-bottom: 20px;
  }
}
</style>
