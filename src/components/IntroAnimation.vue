<template>
    <div class="intro-wrapper">
      <div class="flash-overlay"></div>
      <div class="particles"></div>
      <div class="letter-container">
        <span class="letter p">
          <span class="main">P</span>
          <span class="trail">ruthvi</span>
        </span>
        <span class="letter n">
          <span class="main">N</span>
          <span class="trail">iranjan</span>
        </span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  const emit = defineEmits(['done'])
  
  onMounted(() => {
    setTimeout(() => {
      emit('done')
    }, 7000)
  })
  </script>
  
  <style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@900&display=swap');
  
  .intro-wrapper {
    position: fixed;
    inset: 0;
    background: radial-gradient(circle, #1a002b, #000);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    z-index: 9999;
    animation: fadeOut 1s ease-in-out 6.5s forwards;
  }
  
  .flash-overlay {
    position: absolute;
    inset: 0;
    background: white;
    opacity: 0;
    animation: flashIn 0.5s ease 0.5s forwards;
  }
  
  .particles {
    position: absolute;
    inset: 0;
    background: url('https://www.transparenttextures.com/patterns/dark-mosaic.png');
    opacity: 0.03;
    animation: pulseBg 6s infinite;
    pointer-events: none;
    z-index: 0;
  }
  
  .letter-container {
    z-index: 2;
    display: flex;
    align-items: baseline;
    gap: 5rem;
  }
  
  .letter {
    position: relative;
    display: flex;
    align-items: baseline;
    font-family: 'Orbitron', sans-serif;
    color: #fff;
    text-shadow:
      0 0 10px #9c27b0,
      0 0 25px #9c27b0,
      0 0 50px #ce93d8;
  }
  
  .main {
    font-size: 12rem;
    opacity: 0;
    transform: scale(0) rotateX(90deg);
    animation: enterMain 1.2s ease-out forwards;
  }
  
  .p .main {
    animation-delay: 0.8s;
  }
  
  .n .main {
    animation-delay: 1.5s;
  }
  
  .trail {
    font-size: 2rem;
    margin-left: 1rem;
    color: #ce93d8;
    opacity: 0;
    animation: trailFade 0.5s ease 2.5s forwards;
  }
  
  @keyframes enterMain {
    0% {
      transform: scale(0) rotateX(90deg);
      opacity: 0;
    }
    60% {
      transform: scale(1.2) rotateX(0deg);
      opacity: 1;
    }
    100% {
      transform: scale(1) rotateX(0deg);
      opacity: 1;
    }
  }
  
  @keyframes trailFade {
    to {
      opacity: 1;
    }
  }
  
  @keyframes fadeOut {
    to {
      opacity: 0;
      visibility: hidden;
    }
  }
  
  @keyframes pulseBg {
    0%, 100% {
      opacity: 0.02;
    }
    50% {
      opacity: 0.06;
    }
  }
  
  @keyframes flashIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  </style>
  