<template>
    <!-- All previous sections -->
    <!-- ...existing hero, about, skills, projects, experience, contact sections... -->
  
    <footer class="footer section">
      <div class="footer-container">
        <p class="footer-text">&copy; 2025 Pruthvi Niranjan. All rights reserved.</p>
        <div class="footer-links">
          <a href="https://github.com/pruthvi1405" target="_blank">GitHub</a>
          <a href="https://linkedin.com/in/pruthvi1405" target="_blank">LinkedIn</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup>
  // Future: Add EmailJS or backend submission logic here
  </script>
  
  <style scoped>
  /* ...existing styles remain... */
  .contact-section {
    padding: 4rem 2rem;
    background-color: #1e1e2f;
    text-align: center;
    color: #ffffff;
  }
  
  .contact-heading {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #ffafcc;
  }
  
  .contact-description {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
  
  .contact-form {
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .contact-form input,
  .contact-form textarea {
    padding: 0.75rem;
    border: none;
    border-radius: 10px;
    background: #2e2e3f;
    color: white;
    font-size: 1rem;
  }
  
  .contact-form button {
    padding: 0.75rem;
    background: #f72585;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .contact-form button:hover {
    background: #b5179e;
  }
  
  .footer {
    background-color: #0f0f1c;
    padding: 2rem;
    color: #888;
    text-align: center;
    font-size: 0.9rem;
  }
  
  .footer-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
  
  .footer-links {
    display: flex;
    gap: 1.5rem;
  }
  
  .footer-links a {
    color: #ffd6ff;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-links a:hover {
    color: #f72585;
  }
  </style>