<template>
  <section class="dyptic" :style="'background-color : ' + blok.backgroundColor">
    <div class="container" v-editable="blok">
      <div class="thmumb-l md:w-1/2" data-aos="fade-up">
        <h4 v-if="blok.title || blok.title2" :class="blok.white ? 'text-white' : ''" class="p1 pb-4">{{ blok.title }}</h4>
        <img v-if="blok.image" :src="blok.image.filename" :alt="blok.image.alt">
      </div>
      <div class="thumb-r md:w-1/2" data-aos="fade-up" data-aos-delay="200">
        <h4 v-if="blok.title || blok.title2" :class="blok.white ? 'text-white' : ''" class="p1 pb-4">{{ blok.title2 }}</h4>
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
  @apply flex flex-col md:flex-row gap-8;
}

img {
  @apply aspect-square md:aspect-auto md:h-[33.5rem];
  @apply object-cover;
}
</style>