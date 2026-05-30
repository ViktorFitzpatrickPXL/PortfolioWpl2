<template>
  <nav class="topnav">
    <div class="nav-content">
      <div class="nav-left">
        <RouterLink to="/" class="site-title" aria-label="Home">Viktor Fitzpatrick</RouterLink>
        <div class="nav-links">
          <a href="#skills" :class="{ active: activeSection === 'skills' }">Skills</a>
          <a href="#historie" :class="{ active: activeSection === 'historie' }">Historie</a>
          <a href="#projects" :class="{ active: activeSection === 'projects' }">Projects</a>
        </div>
      </div>
      <div class="nav-right">
        <a
          class="social"
          href="https://www.instagram.com/wanderingtrader12/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Instagram"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
          </svg>
        </a>
        <a
          class="social"
          href="https://www.facebook.com/viktor.fitzpatrick.1/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Facebook"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M18 2h-3a4 4 0 0 0-4 4v3H8v4h3v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('')

const handleScroll = () => {
  const sections = document.querySelectorAll('section[id]')
  let currentSection = ''

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id')
    }
  })

  // Aparte check voor de 'about' header, omdat het geen <section> is
  const aboutHeader = document.getElementById('about')
  if (aboutHeader) {
    const sectionTop = aboutHeader.offsetTop
    if (window.scrollY < sectionTop + aboutHeader.clientHeight - 100) {
      currentSection = 'about'
    }
  }

  activeSection.value = currentSection
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.topnav {
  background-color: var(--nav-surface);
  padding: 1rem 0; /* Vertical padding only */
  display: flex;
  justify-content: center; /* Center the content */
  align-items: center;
  border-bottom: 1px solid var(--card-border);
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(10px);
  min-height: var(--nav-height);
}

.nav-content {
  width: 100%;
  max-width: none;
  padding: 0; /* remove side padding so nav touches edges */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.topnav a {
  text-decoration: none;
  color: var(--site-text);
  padding: 0.5rem;
  transition:
    color 0.3s,
    border-bottom-color 0.3s;
  border-bottom: 2px solid transparent;
}

.topnav a:hover,
.topnav a.active {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

.nav-left,
.nav-right {
  display: flex;
  gap: 1rem;
}

.site-title {
  font-weight: 800;
  color: var(--accent);
  margin-right: 1rem;
  text-decoration: none;
  font-size: 1.05rem;
}

.nav-links {
  display: flex;
  gap: 1rem;
  align-items: center;
}
</style>
