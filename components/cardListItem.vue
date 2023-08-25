<template>
  <div class="cardListItem">
    <div class="thumb">
      <img v-if="blok.image" :src="blok.image.filename" :alt="blok.image.alt">
    </div>
    <div class="title">
      <h4 v-if="blok.title" class="h5">{{ blok.title }}</h4>
      <CTA v-if="blok.cta[0]" :blok="blok.cta[0]" />
    </div>
    <p v-if="blok.description" class="p2 md:w-1/3">{{ blok.description }}</p>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>

<style scoped>
.cardListItem {
  @apply flex flex-col flex-wrap md:flex-nowrap md:flex-row;
  @apply py-4 my-2 md:gap-12;
  @apply border-b;
}

.cardListItem .title {
  @apply flex flex-wrap flex-col justify-between;
}

.cardListItem .title h4 {
  @apply md:pr-64;
}

.cardListItem p {
  @apply md:pl-12 py-2;
}
</style>