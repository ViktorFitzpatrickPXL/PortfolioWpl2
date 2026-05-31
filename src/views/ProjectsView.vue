<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectModal from '@/components/ProjectModal.vue'
import { useCentralStorageStore } from '@/stores/projectContent.js'

const router = useRouter()
const projectContentStore = useCentralStorageStore()
const selectedCategory = ref('Opleiding')
const modalVisible = ref(false)
const activeProject = ref(null)

const filteredProjects = computed(() => {
  return projectContentStore.projects.filter(
    (project) => project.category === selectedCategory.value,
  )
})

function openProject(project) {
  activeProject.value = project
  modalVisible.value = true
}

function closeModal() {
  modalVisible.value = false
  activeProject.value = null
}

function goHome() {
  router.push({ name: 'Home' })
}
</script>

<template>
  <main class="projects-page">
    <header class="projects-header">
      <button type="button" class="back-button" @click="goHome">← Terug naar home</button>
      <h1>Projects</h1>
      <p>Een overzicht van mijn opleiding- en persoonlijke projecten.</p>
    </header>

    <section class="project-filter">
      <select v-model="selectedCategory" class="filter-dropdown" aria-label="Categorie filter">
        <option value="Opleiding">Opleiding</option>
        <option value="Persoonlijk">Persoonlijk</option>
      </select>
    </section>

    <section class="projects-grid">
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.slug"
        :project="project"
        @open="openProject"
      />
    </section>

    <ProjectModal :show="modalVisible" :project="activeProject" @close="closeModal" />
  </main>
</template>

<style scoped>
.projects-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.25rem 4rem;
}

.projects-header {
  margin-bottom: 1.5rem;
}

.projects-header h1 {
  margin: 0.5rem 0;
  color: var(--site-text);
}

.projects-header p {
  color: var(--muted-text);
  margin: 0;
}

.back-button {
  background: none;
  border: none;
  color: var(--neon);
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  padding: 0;
}

.project-filter {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;
}

.filter-dropdown {
  background: none;
  border: 1px solid var(--card-border);
  color: var(--muted-text);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 600px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
