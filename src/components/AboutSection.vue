<script setup>
import { certifications } from '../data/portfolio'

const highlights = [
  {
    icon: '🤖',
    title: 'AI-driven automation',
    text: 'Design LLM-powered agents and RAG pipelines that replace manual workflows — from voice scheduling to log triage.',
  },
  {
    icon: '🧱',
    title: 'Full-stack delivery',
    text: 'Ship end-to-end features across Python, Node.js, React, and Vue, with a focus on clean, maintainable APIs.',
  },
  {
    icon: '☁️',
    title: 'Cloud-native systems',
    text: 'Architect and operate distributed services on AWS — microservices, IAM, VPC networking, and CI/CD pipelines.',
  },
]
</script>

<template>
  <section id="about" class="about">
    <div class="section-heading">
      <span class="index">01.</span>
      <h2>About Me</h2>
      <span class="rule"></span>
    </div>

    <div class="about__grid">
      <p class="about__bio">
        I'm a software engineer with 4+ years of experience turning ambiguous problems into
        reliable, production-grade systems. My work spans AI-powered automation for real
        businesses, scalable REST APIs, and cloud infrastructure that just keeps running.
        I care about shipping things that hold up under real-world use — not just demos.
        Outside of client work, I contribute to open source and dig into bugs most people
        would rather ignore.
      </p>

      <div class="about__highlights">
        <div v-for="item in highlights" :key="item.title" class="highlight-card">
          <span class="highlight-card__icon">{{ item.icon }}</span>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </div>

    <div class="about__certs">
      <span class="about__certs-label">certifications //</span>
      <span v-for="cert in certifications" :key="cert" class="tag">{{ cert }}</span>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables' as *;
@use '../assets/styles/mixins' as *;

.about {
  @include container;
  @include section-spacing;
}

.about__grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;

  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

.about__bio {
  font-size: 16px;
}

.about__highlights {
  display: grid;
  gap: 18px;
}

.highlight-card {
  @include card;
  padding: 22px 24px;

  &__icon {
    font-size: 22px;
    display: block;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 16px;
    color: $text-primary;
    margin-bottom: 8px;
  }

  p {
    font-size: 14px;
  }
}

.about__certs {
  margin-top: 48px;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  &-label {
    font-family: $font-mono;
    font-size: 13px;
    color: $text-muted;
  }
}
</style>
