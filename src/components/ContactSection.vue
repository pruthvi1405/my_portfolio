<template>
  <section id="contact" class="contact-section section">
    <div class="contact-container">
      <div class="left-light"></div>
      <div class="right-light"></div>
      <div class="contact-content">
        <div class="contact-title">
          <h2>Let's Connect</h2>
          <p>Whether it's building something incredible or just talking code — I'm all ears.</p>
        </div>

        <form class="contact-form" @submit.prevent="sendEmail">
          <input v-model="form.name" type="text" placeholder="Your Name" required />
          <input v-model="form.email" type="email" placeholder="Your Email" required />
          <textarea v-model="form.message" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div class="contact-footer">
          <a class="resume-btn" href="/PruthviNiranjan_Resume.pdf" download>
            Download My Resume
          </a>
          <div class="social-links">
            <a href="mailto:pruthviniranjan14@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/pruthvi-niranjan/" target="_blank">LinkedIn</a>
            <a href="https://github.com/pruthvi1405" target="_blank">GitHub</a>
            <a href="https://leetcode.com/u/pruthviniranjan01/" target="_blank">LeetCode</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import emailjs from 'emailjs-com'

const form = ref({ name: '', email: '', message: '' })

const sendEmail = () => {
  const serviceID = 'service_gkztwzk'
  const templateID = 'template_w1r3k1o'
  const userID = '1AgVE_v2Y28LGjEx6'

  emailjs.send(serviceID, templateID, {
    from_name: form.value.name,
    reply_to: form.value.email,
    message: form.value.message,
  }, userID)
    .then(() => {
      alert('Message sent successfully!')
      form.value = { name: '', email: '', message: '' }
    })
    .catch((err) => {
      console.error('FAILED...', err)
      alert('Something went wrong.')
    })
}

</script>

<style scoped lang="scss" src="@/assets/styles/ContactSection.scss"></style>