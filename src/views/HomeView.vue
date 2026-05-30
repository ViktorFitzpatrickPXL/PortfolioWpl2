<script setup>
import { ref, computed } from 'vue'
import HistorieItem from '@/components/HistorieItem.vue'
import SkillCard from '@/components/SkillCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectModal from '@/components/ProjectModal.vue'
import Workplekleren1 from '@/components/workplekleren/Workplekleren1.vue'
import Workplekleren2 from '@/components/workplekleren/Workplekleren2.vue'
import { useCentralStorageStore } from '@/stores/projectContent.js'

const projectContentStore = useCentralStorageStore()

const selectedCategory = ref('Opleiding')
const selectedWorkplekleren = ref('werkplekleren-1')
const workpleklerenComponents = {
  'werkplekleren-1': Workplekleren1,
  'werkplekleren-2': Workplekleren2,
}

function toggleWorkplekleren(slug) {
  selectedWorkplekleren.value = selectedWorkplekleren.value === slug ? '' : slug
}

function isWorkpleklerenOpen(slug) {
  return selectedWorkplekleren.value === slug
}

const selectedWorkpleklerenItem = computed(() => {
  return (
    projectContentStore.workplekleren.find((item) => item.slug === selectedWorkplekleren.value) ??
    null
  )
})

const selectedWorkpleklerenComponent = computed(() => {
  return workpleklerenComponents[selectedWorkplekleren.value] ?? null
})

const filteredProjects = computed(() => {
  return projectContentStore.projects.filter(
    (project) => project.category === selectedCategory.value,
  )
})

const modalVisible = ref(false)
const activeProject = ref(null)

function openProject(project) {
  activeProject.value = project
  modalVisible.value = true
}

function closeModal() {
  modalVisible.value = false
  activeProject.value = null
}
</script>

<template>
  <div class="page-home">
    <header id="home-header">
      <img src="/images/header/Header.jpg" alt="Header Image" class="header-background" />
      <div class="header-content">
        <div class="header-text">
          <h2 class="subtitle">Student Digitale Vormgeving</h2>
          <h1>Viktor Fitzpatrick</h1>
        </div>
      </div>
    </header>

    <section id="about">
      <h3>Over Mij</h3>
      <p>
        Ik ben een enthousiaste student die zich verdiept in de wereld van webontwikkeling en
        design. Mijn passie ligt in het creëren van gebruiksvriendelijke en visueel aantrekkelijke
        digitale ervaringen.
      </p>
    </section>

    <section id="skills" class="skills">
      <h3 class="style">Skills</h3>
      <section>
        <h4>Digitaal</h4>
        <div class="skills-grid">
          <SkillCard v-for="skill in projectContentStore.digitalSkills" :key="skill.name" :skill="skill" />
        </div>
      </section>

      <section class="languages">
        <h4>Talen</h4>
        <div class="languages-grid">
          <SkillCard v-for="skill in projectContentStore.languageSkills" :key="skill.name" :skill="skill" />
        </div>
      </section>
    </section>

    <section id="historie" class="Historie">
      <h3 class="style">Historie</h3>
      <HistorieItem v-for="item in projectContentStore.historieData" :key="item.year" :item="item" />
    </section>

    <section id="workplekleren" class="workplekleren">
      <div class="workplekleren-tabs" role="tablist" aria-label="Werkplekleren">
        <button
          v-for="item in projectContentStore.workplekleren"
          :key="item.slug"
          type="button"
          class="workplekleren-tab"
          :class="{ active: isWorkpleklerenOpen(item.slug) }"
          :aria-selected="isWorkpleklerenOpen(item.slug)"
          :aria-expanded="isWorkpleklerenOpen(item.slug)"
          @click="toggleWorkplekleren(item.slug)"
        >
          <span>{{ item.title }}</span>
          <span class="workplekleren-arrow" aria-hidden="true">
            {{ isWorkpleklerenOpen(item.slug) ? '▲' : '▼' }}
          </span>
        </button>
      </div>

      <Transition name="workplekleren-expand" mode="out-in">
        <component
          :is="selectedWorkpleklerenComponent"
          v-if="selectedWorkpleklerenItem && selectedWorkpleklerenComponent"
          :key="selectedWorkpleklerenItem.slug"
          class="workplekleren-panel"
        />
      </Transition>
    </section>

    <section id="projects" class="projects">
      <h3 class="style">Projects</h3>
      <div class="project-filter">
        <select
          id="category-dropdown"
          v-model="selectedCategory"
          class="filter-dropdown"
          aria-label="Categorie filter"
        >
          <option value="Opleiding">Opleiding</option>
          <option value="Persoonlijk">Persoonlijk</option>
        </select>
      </div>
      <div class="projects-grid">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.title"
          :project="project"
          @open="openProject"
        />
      </div>
      <ProjectModal :show="modalVisible" :project="activeProject" @close="closeModal" />
    </section>
  </div>
</template>

<style scoped>
.Historie {
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 24px 20px 40px;
}

@media (max-width: 600px) {
  .Historie {
    padding-left: 12px;
    padding-right: 12px;
  }
}

.style {
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  color: var(--site-text);
  margin: 2rem 0;
}

.style::before,
.style::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid var(--accent);
}

.style::before {
  margin-right: 1em;
}

.style::after {
  margin-left: 1em;
}
.subtitle {
  font-size: 5rem;
  margin-bottom: 0.5rem;
  margin-top: 0%;
  max-width: 50vw;
}
h1 {
  font-size: 2rem;
  margin-top: 0;
  color: var(--accent);
}
.aboutMe-inline {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  margin-top: 1rem;
  max-width: 50vw;
}
.aboutMe-inline p {
  margin: 0.5rem;
  color: var(--muted-text);
}
header {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 40px 20px;
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.skills-grid,
.languages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  justify-items: center;
}

.workplekleren {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 24px 20px 40px;
}

.workplekleren-tabs {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.workplekleren-tab,
.workplekleren-panel {
  border: 1px solid var(--card-border);
  border-radius: 14px;
  background: var(--site-surface);
}

.workplekleren-tab {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border: 1px solid var(--card-border);
  background: var(--site-surface);
  color: var(--site-text);
  font: inherit;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.workplekleren-tab:hover,
.workplekleren-tab.active {
  background: rgba(255, 255, 255, 0.03);
}

.workplekleren-tab.active {
  border-color: var(--accent);
}

.workplekleren-tab span:first-child {
  font-weight: 700;
}

.workplekleren-arrow {
  color: var(--accent);
  font-size: 0.95rem;
  line-height: 1;
}

.workplekleren-panel {
  padding: 1rem 1.25rem 1.25rem;
  color: var(--muted-text);
}

.workplekleren-expand-enter-active,
.workplekleren-expand-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.workplekleren-expand-enter-from,
.workplekleren-expand-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

@media (max-width: 700px) {
  .workplekleren-tabs {
    grid-template-columns: 1fr;
  }
}

h4 {
  color: var(--neon);
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}

header#home-header {
  position: relative;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  overflow: hidden;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(0.6);
}

.header-content {
  position: relative;
  z-index: 1;
}

.header-text {
  transform: translateY(-5%);
}

section {
  padding: 4rem 2rem;
}

section#about {
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
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
  transition: all 0.3s ease;
}

.filter-dropdown:hover,
.filter-dropdown:focus {
  background-color: var(--accent);
  color: var(--site-bg);
  border-color: var(--accent);
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

/* 2 columns for tablets */
@media (min-width: 600px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .projects-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
