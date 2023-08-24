<template>
  <section class="textImage" :style="'background-color : ' + backgroundColor">
    <div class="container">
    <div class="title w-1/2 pr-48">
      <h4 v-if="blok.title" class="h2">{{ blok.title }}</h4>
      <p v-if="blok.body" class="p2">{{ blok.body }}</p>
    </div>
    <div class="thumb w-1/2 pl-12 h-auto">
      <img v-if="blok.image" :src="blok.image.filename" :alt="blok.image.alt">
    </div>
  </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object });
const backgroundColor = computed(() => {  return props.blok.backgroundColor === '' ? "#003966" : props.blok.backgroundColor }); 
</script>

<style scoped>
.container {
  @apply flex flex-wrap flex-row;
  @apply py-12 my-2;
}

.title {
  @apply flex flex-wrap flex-row content-between;
  @apply text-white;
  @apply pt-6 pb-4;
}

.p2 {
  @apply text-white;
}
</style>