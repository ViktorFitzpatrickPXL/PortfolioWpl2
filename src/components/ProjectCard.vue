<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
})

const emit = defineEmits(['open'])

function openDetails() {
  emit('open', props.project)
}
</script>

<template>
  <div class="project-card">
    <img :src="project.imageSrc" :alt="project.alt" class="project-image" />
    <div class="project-content">
      <h4>{{ project.title }}</h4>
      <p>{{ project.shortDescription || project.description }}</p>
      <button class="project-button" @click="openDetails">Meer info</button>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  border: 1px solid var(--card-border);
  border-radius: 12px;
  background: var(--site-surface);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.project-card:hover {
  transform: scale(1.03);
  border-color: var(--accent);
  box-shadow: 0 8px 30px var(--muted-shadow);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-grow: 1;
}

.project-content h4 {
  margin-top: 0;
  color: var(--neon);
}

.project-content p {
  color: var(--muted-text);
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.project-button {
  background-color: var(--accent);
  color: var(--site-bg);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin-top: auto;
  transition: background-color 0.3s;
}

.project-button:hover {
  background-color: var(--neon);
}
</style>
