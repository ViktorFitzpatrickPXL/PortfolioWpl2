<script setup>
import { ref, computed } from 'vue'
import HistorieItem from '@/components/HistorieItem.vue'
import SkillCard from '@/components/SkillCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import ProjectModal from '@/components/ProjectModal.vue'
import { projects as projectsData } from '@/data/projects.js'

const digitalSkills = [
  { name: 'Adobe Illustrator', icon: 'Ai' },
  { name: 'Adobe Photoshop', icon: 'Ps' },
  { name: 'Figma', icon: 'Fg' },
  { name: 'JavaScript', icon: 'JS' },
  { name: 'CSS', icon: 'CSS' },
  { name: 'HTML5', icon: 'HTML' },
]

const languageSkills = [
  { name: 'Nederlands - Moedertaal', flag: '🇧🇪' },
  { name: 'Engels', flag: '🇬🇧' },
  { name: 'Frans (10%)', flag: '🇫🇷' },
]

const historieData = [
  {
    year: '2006',
    imageSrc: '/images/historie/2006.jpg',
    alt: 'Kindertijd',
    text: 'In 2006 werd ik geboren in Frankrijk, in het stadje Saint-Aubin-lès-Elbeuf. Op dat moment woonde mijn mama daar in een organisatie die Emmaüs heet, een gemeenschap die mensen ondersteunt en samenbrengt rond werk en solidariteit. De eerste drie jaren van mijn leven bracht ik in Frankrijk door, omringd door een andere cultuur, taal en omgeving dan die ik later gewoon zou worden. Toch is het opvallend dat ik vandaag weinig tot geen Frans spreek. Dat roept bij mij soms de vraag op: hoe anders zou mijn leven of mijn identiteit zijn geweest als ik daar langer was gebleven of de taal wel actief had opgepikt? Ondanks dat ik me die periode niet bewust herinner, maakt het deel uit van mijn verhaal en vormt het een bijzondere start van mijn leven.',
  },
  {
    year: '2009',
    imageSrc: '/images/historie/2009.jpg',
    alt: 'Kleuterklas',
    text: 'In 2009 ben ik bij mijn oma en opa gaan wonen. Zij woonden in België, in het dorp Bekkevoort, en tot op de dag van vandaag woon ik hier nog steeds. Toen ik drie jaar oud was, verhuisde ik van Frankrijk naar België, wat een grote verandering moet zijn geweest, ook al herinner ik me daar zelf weinig van. In Bekkevoort bouwde ik stap voor stap een nieuw leven op, omringd door familie en een vertrouwde omgeving. Deze plek is uiteindelijk echt mijn thuis geworden en heeft een grote invloed gehad op wie ik vandaag ben.',
  },
  {
    year: '2018',
    imageSrc: '/images/historie/2018.jpg',
    alt: 'School Ter Beuke',
    text: 'In 2018 ben ik naar de school Ter Beuke gegaan in Kessel-Lo. In die periode is er een nieuwe directeur gekomen en werd er een volledig nieuw leerplan ingevoerd, wat de school echt heel tof maakte. In het tweede middelbaar moest ik ineens op een hele nieuwe manier les volgen, met EPICs, iPads, actieve examens, enzovoort.',
  },
  {
    year: '2021',
    imageSrc: '/images/historie/2021.jpg',
    alt: 'De Prins',
    text: 'In 2021 ben ik terechtgekomen op de school De Prins in Diest. Oorspronkelijk was ik begonnen in een kantoorgerichte richting, maar al snel kwam ik erachter dat dit niets voor mij was. Daarna heb ik de richting Publiciteit gevonden. Hier heb ik ook het grootste deel van mijn vrienden leren kennen en heb ik een echte liefde voor design en creativiteit ontwikkeld.',
  },
  {
    year: '2025',
    imageSrc: '/images/historie/2025.png',
    alt: 'PXL',
    text: 'Sinds 2025 tot op heden ben ik student aan de Hogeschool PXL in Hasselt. Ik volg de richting Digitale Vormgeving, omdat ik mij verder wil verdiepen in webdevelopment. Het extra bijleren van design is daarbij altijd een groot pluspunt.',
  },
]

const selectedCategory = ref('Opleiding')

const filteredProjects = computed(() => {
  return projectsData.filter((project) => project.category === selectedCategory.value)
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
          <SkillCard v-for="skill in digitalSkills" :key="skill.name" :skill="skill" />
        </div>
      </section>

      <section class="languages">
        <h4>Talen</h4>
        <div class="languages-grid">
          <SkillCard v-for="skill in languageSkills" :key="skill.name" :skill="skill" />
        </div>
      </section>
    </section>

    <section id="historie" class="Historie">
      <h3 class="style">Historie</h3>
      <HistorieItem v-for="item in historieData" :key="item.year" :item="item" />
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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

h4 {
  color: var(--neon);
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
}

.page-home {
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
