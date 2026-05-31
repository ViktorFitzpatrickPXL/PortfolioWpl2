<script setup>
import { computed, onBeforeUnmount, watch } from 'vue'
import { useCentralStorageStore } from '@/stores/projectContent.js'

const props = defineProps({
  project: { type: Object, default: null },
  show: { type: Boolean, default: false },
})

const emit = defineEmits(['close'])

const projectContentStore = useCentralStorageStore()

const modalContent = computed(() => {
  if (!props.project?.slug) return null

  return projectContentStore.getContent(props.project.slug)
})

function close() {
  emit('close')
}

function onKeydown(event) {
  if (event.key === 'Escape') {
    close()
  }
}

function getSectionBody(section) {
  return section?.body ?? ''
}

watch(
  () => props.show,
  (isVisible) => {
    if (typeof document === 'undefined') return

    document.body.style.overflow = isVisible ? 'hidden' : ''

    if (isVisible) {
      window.addEventListener('keydown', onKeydown)
    } else {
      window.removeEventListener('keydown', onKeydown)
    }
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }

  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="show && project" class="modal-overlay" @click.self="close">
        <article class="modal-content" role="dialog" aria-modal="true" :aria-label="project.title">
          <button class="modal-close" type="button" aria-label="Sluit modal" @click="close">
            ×
          </button>

          <div class="modal-body">
            <div class="modal-visual">
              <img :src="project.imageSrc" :alt="project.alt" class="modal-image" />

              <div class="modal-meta">
                <span v-if="project.category" class="modal-tag">{{ project.category }}</span>
                <h2>{{ modalContent?.title || project.title }}</h2>
                <p class="short-desc">
                  {{ modalContent?.summary || project.shortDescription || project.description }}
                </p>
              </div>
            </div>

            <div class="modal-info">
              <section v-if="modalContent?.sections?.length" class="section">
                <div
                  v-for="section in modalContent.sections"
                  :key="section.heading"
                  class="section-block"
                >
                  <h3>{{ section.heading }}</h3>
                  <p>{{ getSectionBody(section) }}</p>
                </div>
              </section>

              <section v-if="project.technologies?.length" class="section">
                <h3>Gebruikte software</h3>
                <ul class="tech-list">
                  <li v-for="tech in project.technologies" :key="tech" class="tech-badge">
                    {{ tech }}
                  </li>
                </ul>
              </section>

              <section v-if="project.features?.length" class="section">
                <h3>Kenmerken</h3>
                <ul class="features-list">
                  <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
                </ul>
              </section>

              <a
                v-if="project.url"
                class="modal-link"
                :href="project.url"
                target="_blank"
                rel="noreferrer noopener"
              >
                Bekijk project
              </a>
              <router-link
                v-if="project.slug"
                :to="{ name: 'ProjectDetail', params: { slug: project.slug } }"
                class="modal-detail-button"
              >
                Meer details
              </router-link>
            </div>
          </div>
        </article>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at top, rgba(90, 240, 214, 0.12), transparent 36%), rgba(4, 10, 20, 0.84);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1rem;
}

.modal-content {
  width: 100%;
  max-width: 1200px;
  background: linear-gradient(180deg, rgba(11, 35, 51, 0.96), rgba(8, 22, 36, 0.98));
  border: 1px solid var(--card-border);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.55);
}

.modal-close {
  position: absolute;
  right: 16px;
  top: 16px;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--card-border);
  font-size: 1.8rem;
  cursor: pointer;
  color: var(--site-text);
  z-index: 10;
  transition:
    color 0.2s,
    border-color 0.2s,
    background-color 0.2s,
    transform 0.2s;
  display: grid;
  place-items: center;
  line-height: 1;
}

.modal-close:hover {
  color: var(--accent);
  border-color: var(--accent);
  background: rgba(0, 191, 166, 0.1);
  transform: scale(1.04);
}

.modal-body {
  display: grid;
  grid-template-columns: minmax(280px, 0.95fr) minmax(0, 1.05fr);
  gap: 2rem;
  padding: 2rem;
  overflow-y: auto;
  max-height: calc(95vh - 60px);
  scrollbar-width: thin;
  scrollbar-color: var(--accent) rgba(255, 255, 255, 0.05);
}

.modal-body::-webkit-scrollbar {
  width: 10px;
}

.modal-body::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 999px;
}

.modal-body::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, var(--accent), var(--neon));
  border-radius: 999px;
  border: 2px solid rgba(4, 10, 20, 0.6);
}

.modal-body::-webkit-scrollbar-thumb:hover {
  background: var(--neon);
}

.modal-visual {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.modal-image {
  width: 100%;
  height: 340px;
  object-fit: cover;
  border-radius: 16px;
  border: 1px solid var(--card-border);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.28);
}

.modal-meta {
  padding: 0.25rem 0.25rem 0;
}

.modal-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: rgba(0, 191, 166, 0.12);
  border: 1px solid rgba(90, 240, 214, 0.18);
  color: var(--neon);
  font-size: 0.8rem;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  margin-bottom: 0.85rem;
}

.modal-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.modal-info h2 {
  margin-top: 0;
  margin-bottom: 0.5rem;
  color: var(--site-text);
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  line-height: 1.1;
}

.short-desc {
  color: var(--muted-text);
  margin-bottom: 0;
  font-size: 1rem;
}

.section {
  margin-bottom: 0;
}

.section-block + .section-block {
  margin-top: 1rem;
}

.section h3 {
  color: var(--accent);
  font-size: 1rem;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.section p {
  color: var(--site-text);
  line-height: 1.6;
  white-space: pre-line;
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.tech-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--card-border);
  color: var(--site-text);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  color: var(--site-text);
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.features-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-weight: bold;
}

.modal-link {
  width: fit-content;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.1rem;
  border-radius: 999px;
  background: var(--accent);
  color: var(--site-bg);
  text-decoration: none;
  font-weight: 700;
  transition:
    transform 0.2s,
    background-color 0.2s;
}

.modal-link:hover {
  transform: translateY(-1px);
  background: var(--neon);
}

.modal-detail-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.1rem;
  border-radius: 999px;
  background: transparent;
  color: var(--site-text);
  border: 1px solid var(--card-border);
  text-decoration: none;
  font-weight: 700;
  margin-left: 0.75rem;
  transition:
    transform 0.2s,
    background-color 0.2s,
    border-color 0.2s;
}

.modal-detail-button:hover {
  transform: translateY(-1px);
  border-color: var(--accent);
  background: rgba(0, 0, 0, 0.06);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.25s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@media (max-width: 900px) {
  .modal-body {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 1.25rem;
  }

  .modal-image {
    height: 260px;
  }
}

@media (max-width: 600px) {
  .modal-overlay {
    padding: 0.5rem;
  }

  .modal-content {
    border-radius: 16px;
    max-height: 96vh;
  }

  .modal-close {
    right: 12px;
    top: 12px;
    width: 38px;
    height: 38px;
    font-size: 1.5rem;
  }

  .modal-body {
    padding: 1rem;
    gap: 1rem;
  }

  .modal-image {
    height: 220px;
  }

  .modal-meta {
    padding: 0;
  }

  .modal-info {
    gap: 1.1rem;
  }

  .modal-link,
  .modal-detail-button {
    width: 100%;
    margin-left: 0;
  }

  .modal-detail-button {
    margin-top: 0.75rem;
  }
}
</style>
