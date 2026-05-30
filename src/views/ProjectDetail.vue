<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects as projectsData } from '@/data/projects.js'
import { useProjectContentStore } from '@/stores/projectContent.js'

const route = useRoute()
const router = useRouter()
const slug = route.params.slug
const projectContentStore = useProjectContentStore()

const project = computed(() => projectsData.find((p) => p.slug === slug) ?? null)
const content = computed(() =>
  project.value ? projectContentStore.getContent(project.value.slug) : null,
)

function goBack() {
  router.push({ name: 'Projects' })
}
</script>

<template>
  <div class="project-detail" v-if="project">
    <button class="back-button" @click="goBack">← Terug naar projecten</button>

    <header class="detail-header">
      <h1>{{ content?.title || project.title }}</h1>
      <p class="lead">{{ content?.detailIntro || project.shortDescription }}</p>
    </header>

    <img :src="project.imageSrc" :alt="project.alt" class="detail-image" />

    <section class="detail-section">
      <h2>Uitgebreide beschrijving</h2>
      <p v-if="content?.detailBody">{{ content.detailBody }}</p>
    </section>

    <section v-if="project.technologies?.length" class="detail-section">
      <h2>Gebruikte technologieën</h2>
      <ul class="tech-list">
        <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
      </ul>
    </section>

    <section v-if="project.features?.length" class="detail-section">
      <h2>Kenmerken</h2>
      <ul>
        <li v-for="f in project.features" :key="f">{{ f }}</li>
      </ul>
    </section>

    <a
      v-if="project.url"
      :href="project.url"
      target="_blank"
      rel="noreferrer noopener"
      class="open-link"
    >
      Bekijk live project
    </a>
  </div>
</template>

<style scoped>
.project-detail {
  max-width: 980px;
  margin: 2rem auto;
  padding: 1rem;
}
.back-button {
  background: none;
  border: none;
  color: var(--neon);
  cursor: pointer;
  font-weight: 700;
  margin-bottom: 1rem;
}
.detail-header h1 {
  margin: 0 0 0.5rem 0;
  color: var(--site-text);
}
.lead {
  color: var(--muted-text);
  margin-bottom: 1.25rem;
}
.detail-image {
  width: 100%;
  border-radius: 12px;
  margin-bottom: 1.25rem;
  object-fit: cover;
}
.detail-section h2 {
  color: var(--accent);
  margin-bottom: 0.5rem;
}
.tech-list {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
}
.open-link {
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 999px;
  background: var(--accent);
  color: var(--site-bg);
  text-decoration: none;
  font-weight: 700;
}
</style>
