<template>
  <div class="cardListItem">
    <div class="thumb w-1/3 pr-12 h-auto">
      <img v-if="blok.image" :src="blok.image.filename" :alt="blok.image.alt">
    </div>
    <div class="title w-1/3 py-2">
      <h4 v-if="blok.title" class="h5 pr-40">{{ blok.title }}</h4>
      <CTA v-if="blok.cta[0]" :blok="blok.cta[0]" />
    </div>
    <p v-if="blok.description" class="p2 pl-12 py-2 w-1/3">{{ blok.description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>

<style scoped>
.cardListItem {
  @apply flex flex-wrap flex-row;
  @apply py-4 my-2;
  @apply border-b;
}

.title {
  @apply flex flex-wrap flex-row content-between;
}
</style>