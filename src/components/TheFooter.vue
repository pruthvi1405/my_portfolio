<script setup>
import { profile } from '../data/portfolio'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <p>
      <span class="prompt">$</span> echo "designed &amp; built by {{ profile.name }}, {{ year }}"
    </p>
    <div class="footer__links">
      <a :href="profile.github" target="_blank" rel="noopener">GitHub</a>
      <a :href="profile.linkedin" target="_blank" rel="noopener">LinkedIn</a>
      <a :href="`mailto:${profile.email}`">Email</a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '../assets/styles/variables' as *;
@use '../assets/styles/mixins' as *;

.footer {
  @include container;
  padding: 32px 24px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  border-top: 1px solid $border-color;
  font-family: $font-mono;
  font-size: 13px;
  color: $text-muted;

  .prompt {
    color: $accent;
    margin-right: 6px;
  }
}

.footer__links {
  display: flex;
  gap: 20px;

  a {
    color: $text-muted;
    transition: color 0.2s ease;

    &:hover {
      color: $accent;
    }
  }
}
</style>
