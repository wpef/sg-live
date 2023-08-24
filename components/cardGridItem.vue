<template>
  <div class="cardGridItem">
    <div class="content">
      <h4 v-if="blok.title" class="h5 pb-4">{{ blok.title }}</h4>
      <p v-if="blok.description" class="p2">{{ blok.description }}</p>
    </div>
    <CTA v-if="blok.cta[0]" :blok="blok.cta[0]" />
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>

<style scoped>
.cardGridItem {
  @apply p-6;
  @apply relative;
  @apply aspect-square border;
  /* @apply basis-1/3 flex-grow-0 ; */
}

.cardGridItem .cta {
  @apply absolute bottom-4;
}

.content {
  /* @apply flex flex-wrap flex-row content-between; */
}
</style>