<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="historie-item">
    <h4>{{ item.year }}</h4>
    <div class="historie-row">
      <img :src="item.imageSrc" :alt="item.alt" />
      <div class="historie-text">
        <p>{{ item.text }}</p>
      </div>
    </div>
  </article>
</template>

<style scoped>
.historie-item {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 18px;
  border: 1px solid var(--card-border);
  border-radius: 12px;
  background: var(--site-surface);
  box-sizing: border-box;
  transition:
    background-color 0.3s,
    border-color 0.3s,
    transform 0.3s ease;
}

.historie-item:hover {
  background-color: var(--card-bg);
  border-color: var(--accent);
  transform: scale(1.02);
}

.historie-row {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.historie-row img {
  width: 400px;
  max-width: 400px;
  height: 250px;
  object-fit: cover;
  object-position: center;
  display: block;
  border-radius: 8px;
  flex: 0 0 400px;
}

.historie-text {
  flex: 1 1 auto;
  min-width: 0;
  padding: 4px 0 0;
  box-sizing: border-box;
}

.historie-text p {
  margin: 0;
  text-indent: 0;
  color: var(--muted-text);
}

h4 {
  color: var(--neon);
}

@media (max-width: 600px) {
  .historie-row {
    flex-direction: column;
  }

  .historie-row img {
    width: 100%;
    max-width: 100%;
    height: 220px;
    object-fit: cover;
    flex: 0 0 auto;
  }
}
</style>
