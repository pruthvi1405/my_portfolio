<script setup>
import { experience } from '../data/portfolio'
</script>

<template>
  <section id="experience" class="experience">
    <div class="section-heading">
      <span class="index">03.</span>
      <h2>Experience</h2>
      <span class="rule"></span>
    </div>

    <div class="timeline">
      <div v-for="job in experience" :key="job.company" class="timeline__item">
        <div class="timeline__marker">
          <span class="timeline__dot"></span>
          <span class="timeline__line"></span>
        </div>

        <div class="timeline__content">
          <p class="timeline__period">{{ job.period }}</p>
          <h3 class="timeline__role">
            {{ job.role }} <span class="at">@ {{ job.company }}</span>
          </h3>
          <p class="timeline__location">{{ job.location }}</p>
          <ul class="timeline__points">
            <li v-for="(point, i) in job.points" :key="i">{{ point }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables' as *;
@use '../assets/styles/mixins' as *;

.experience {
  @include container;
  @include section-spacing;
}

.timeline__item {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 24px;

  &:last-child .timeline__line {
    display: none;
  }
}

.timeline__marker {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline__dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: $accent;
  box-shadow: 0 0 12px $accent-glow;
  margin-top: 8px;
  flex-shrink: 0;
}

.timeline__line {
  width: 1px;
  flex: 1;
  background: $border-color;
  margin-top: 6px;
}

.timeline__content {
  padding-bottom: 48px;
}

.timeline__period {
  font-family: $font-mono;
  font-size: 13px;
  color: $accent;
  margin-bottom: 6px;
}

.timeline__role {
  font-size: 20px;
  color: $text-primary;
  margin-bottom: 4px;

  .at {
    color: $text-secondary;
    font-weight: 500;
  }
}

.timeline__location {
  font-size: 14px;
  margin-bottom: 16px;
}

.timeline__points {
  display: grid;
  gap: 10px;

  li {
    position: relative;
    padding-left: 20px;
    font-size: 15px;
    color: $text-secondary;
    line-height: 1.7;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: $accent;
    }
  }
}
</style>
