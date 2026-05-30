<script setup>
defineProps({
  skill: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="skill-card">
    <img v-if="skill.image" :src="skill.image" :alt="skill.name" />
    <div v-else-if="skill.flag" class="skill-flag" aria-hidden="true">{{ skill.flag }}</div>
    <div v-else-if="skill.icon" class="skill-icon" aria-hidden="true">{{ skill.icon }}</div>
    <p>{{ skill.name }}</p>
  </article>
</template>

<style scoped>
.skill-card {
  width: 100%;
  max-width: 160px;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.skill-card img {
  height: 50px;
  max-width: 100%;
  margin-bottom: 0.5rem;
  object-fit: contain;
}

.skill-card p {
  color: var(--site-text);
  font-size: 0.9rem;
}

.skill-icon,
.skill-flag {
  display: grid;
  place-items: center;
  margin-bottom: 0.5rem;
}

.skill-icon {
  min-width: 52px;
  height: 52px;
  padding: 0 0.65rem;
  border-radius: 12px;
  border: 1px solid var(--neon-border-2, rgba(90, 240, 214, 0.12));
  background: rgba(255, 255, 255, 0.03);
  color: var(--neon);
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.03em;
}

.skill-flag {
  font-size: 2rem;
  line-height: 1;
}
</style>
