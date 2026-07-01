<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile } from '../data/portfolio'

const roleIndex = ref(0)
const displayedRole = ref('')
let charIndex = 0
let typing = true
let timer = null

function tick() {
  const currentRole = profile.roles[roleIndex.value]

  if (typing) {
    displayedRole.value = currentRole.slice(0, charIndex + 1)
    charIndex++
    if (charIndex === currentRole.length) {
      typing = false
      timer = setTimeout(tick, 1400)
      return
    }
  } else {
    displayedRole.value = currentRole.slice(0, charIndex - 1)
    charIndex--
    if (charIndex === 0) {
      typing = true
      roleIndex.value = (roleIndex.value + 1) % profile.roles.length
    }
  }

  timer = setTimeout(tick, typing ? 55 : 30)
}

onMounted(() => {
  timer = setTimeout(tick, 400)
})

onUnmounted(() => {
  clearTimeout(timer)
})
</script>

<template>
  <section class="hero">
    <div class="hero__inner">
      <p class="hero__eyebrow">
        <span class="dot"></span>
        hi, my name is
      </p>
      <h1 class="hero__name">{{ profile.name }}.</h1>
      <h2 class="hero__title">I build <span class="accent">{{ displayedRole }}</span><span class="cursor">_</span></h2>
      <p class="hero__summary">{{ profile.summary }}</p>

      <div class="hero__actions">
        <a href="#projects" class="btn">view projects</a>
        <a href="#contact" class="btn btn-ghost">get in touch</a>
      </div>
    </div>

    <div class="hero__terminal">
      <div class="terminal">
        <div class="terminal__bar">
          <span class="dot dot--red"></span>
          <span class="dot dot--yellow"></span>
          <span class="dot dot--green"></span>
          <span class="terminal__title">whoami.sh</span>
        </div>
        <div class="terminal__body">
          <p><span class="prompt">$</span> whoami</p>
          <p class="out">{{ profile.name }} — {{ profile.title }}</p>
          <p><span class="prompt">$</span> cat location.txt</p>
          <p class="out">{{ profile.location }}</p>
          <p><span class="prompt">$</span> ./run_experience.sh --years</p>
          <p class="out">4+ years shipping production software</p>
          <p><span class="prompt">$</span> <span class="blink">▌</span></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables' as *;
@use '../assets/styles/mixins' as *;

.hero {
  @include container;
  @include section-spacing;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 56px;
  align-items: center;
  min-height: calc(100vh - 72px);

  @media (max-width: $breakpoint-lg) {
    grid-template-columns: 1fr;
    padding-top: 60px;
  }
}

.hero__eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: $font-mono;
  color: $accent;
  font-size: 15px;
  margin-bottom: 20px;

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: $accent;
    box-shadow: 0 0 10px $accent;
  }
}

.hero__name {
  font-size: clamp(38px, 6vw, 64px);
  color: $text-primary;
  margin-bottom: 8px;
}

.hero__title {
  font-size: clamp(24px, 3.4vw, 36px);
  color: $text-secondary;
  margin-bottom: 24px;
  min-height: 1.3em;

  .accent {
    color: $accent;
    font-family: $font-mono;
  }

  .cursor {
    color: $accent;
  }
}

.hero__summary {
  max-width: 560px;
  font-size: 17px;
  margin-bottom: 36px;
}

.hero__actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.terminal {
  background: $bg-elevated;
  border: 1px solid $border-color;
  border-radius: $radius-lg;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);
}

.terminal__bar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: $bg-card;
  border-bottom: 1px solid $border-color;

  .dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    &--red { background: #ff5f56; }
    &--yellow { background: #ffbd2e; }
    &--green { background: #27c93f; }
  }

  .terminal__title {
    margin-left: 10px;
    font-family: $font-mono;
    font-size: 12px;
    color: $text-muted;
  }
}

.terminal__body {
  padding: 24px;
  font-family: $font-mono;
  font-size: 14px;
  line-height: 2;

  p {
    margin: 0;
  }

  .prompt {
    color: $accent;
    margin-right: 8px;
  }

  .out {
    color: $text-secondary;
    margin-bottom: 10px;
    padding-left: 20px;
  }

  .blink {
    color: $accent;
    animation: blink 1s steps(1) infinite;
  }
}

@keyframes blink {
  50% { opacity: 0; }
}
</style>
