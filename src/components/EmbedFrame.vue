<template>
  <div class="embed-frame">
    <iframe
      :src="url"
      :title="title"
      sandbox="allow-same-origin allow-scripts"
      frameborder="0"
      loading="lazy"
      referrerpolicy="no-referrer"
      :style="iframeStyle"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  url: { type: String, required: true },
  title: { type: String, default: 'Embedded site' },
  height: { type: [String, Number], default: '640px' },
})

const iframeStyle = computed(() => {
  const h = typeof props.height === 'number' ? `${props.height}px` : props.height
  return { width: '100%', height: h }
})
</script>

<style scoped>
.embed-frame {
  width: 100%;
  margin-top: 1rem;
}
.embed-frame iframe {
  border-radius: 10px;
  border: 1px solid var(--card-border);
}
</style>
