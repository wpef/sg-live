<template>
  <section class="dyptic" :style="'background-color : ' + blok.backgroundColor">
    <div class="container">
      <div class="thmumb-l w-1/2">
        <h4 v-if="blok.title" :class="blok.white ? 'text-white' : ''" class="p1 pb-4">{{ blok.title }}</h4>
        <img v-if="blok.image" :src="blok.image.filename" :alt="blok.image.alt">
      </div>
      <div class="thumb-r w-1/2">
        <h4 v-if="blok.title2" :class="blok.white ? 'text-white' : ''" class="p1 pb-4">{{ blok.title2 }}</h4>
        <img v-if="blok.image" :src="blok.image2.filename" :alt="blok.image2.alt">
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>

<style scoped>
.container {
  @apply flex flex-wrap flex-row;
}
</style>