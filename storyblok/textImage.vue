<template>
  <div class="cardListItem" :style="
  'background-color : ' + blok.backgroundColor + ';' +
  'box-shadow: 0 0 0 100vmax ' + blok.backgroundColor
  ">
    <div class="title w-1/2 pr-48">
      <h4 v-if="blok.title" class="h2">{{ blok.title }}</h4>
      <p v-if="blok.body" class="p2">{{ blok.body }}</p>
    </div>
    <div class="thumb w-1/2 pl-12 h-auto">
      <img v-if="blok.image" :src="blok.image.filename" :alt="blok.image.alt">
    </div>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>

<style scoped>
.cardListItem {
  @apply flex flex-wrap flex-row;
  @apply py-12 my-2;

  /*handle outside color*/
  clip-path: inset(0 -100vmax); 
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