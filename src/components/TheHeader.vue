<script setup>
import { ref } from 'vue'
import { profile } from '../data/portfolio'

const menuOpen = ref(false)
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <a href="#" class="logo">
        <span class="logo__bracket">&lt;</span>PN<span class="logo__bracket">/&gt;</span>
      </a>

      <nav class="nav nav--desktop">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="nav__link">
          {{ link.label }}
        </a>
      </nav>

      <a :href="`mailto:${profile.email}`" class="btn btn--cta">say hi</a>

      <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="Toggle navigation">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <transition name="slide">
      <nav v-if="menuOpen" class="nav nav--mobile">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="nav__link" @click="closeMenu">
          {{ link.label }}
        </a>
      </nav>
    </transition>
  </header>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables' as *;

.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10, 14, 20, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid $border-color;
}

.header__inner {
  max-width: $max-width;
  margin: 0 auto;
  padding: 18px 24px;
  display: flex;
  align-items: center;
  gap: 32px;
}

.logo {
  font-family: $font-mono;
  font-weight: 700;
  font-size: 18px;
  color: $text-primary;
  margin-right: auto;

  &__bracket {
    color: $accent;
  }
}

.nav--desktop {
  display: flex;
  gap: 28px;

  @media (max-width: $breakpoint-md) {
    display: none;
  }
}

.nav__link {
  font-family: $font-mono;
  font-size: 14px;
  color: $text-secondary;
  transition: color 0.2s ease;
  position: relative;

  &:hover {
    color: $accent;
  }
}

.btn--cta {
  font-family: $font-mono;
  font-size: 13px;
  color: $accent;
  border: 1px solid $accent;
  padding: 8px 16px;
  border-radius: $radius-sm;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: $accent;
    color: $bg-base;
  }

  @media (max-width: $breakpoint-md) {
    display: none;
  }
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;

  span {
    width: 22px;
    height: 2px;
    background: $text-primary;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  @media (max-width: $breakpoint-md) {
    display: flex;
  }
}

.nav--mobile {
  display: flex;
  flex-direction: column;
  padding: 8px 24px 24px;
  gap: 18px;
  border-top: 1px solid $border-color;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
