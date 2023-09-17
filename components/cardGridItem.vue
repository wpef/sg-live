<template>
  <div class="cardGridItem" v-editable="blok" :style="{
    borderColor: white ? 'rgba(255, 255, 255, 0.20)' : '',
    backgroundColor: blok.backgroundColor === '' ? 'white' : blok.backgroundColor }"
  >
    <div class="content" data-aos-delay="200">
      <h4 v-if="blok.title" class="h5 pb-4" :class="white ? 'text-white' : null">{{ blok.title }}</h4>
      <p v-if="blok.description" class="p2" :class="white ? 'text-white' : null">{{ blok.description }}</p>
    </div>
    <CTA v-if="!icon && blok.cta[0]" :blok="blok.cta[0]" />
    <img v-if="icon && blok.image" :src="blok.image.filename" :alt="blok.image.alt" width="32px">
    <p v-if="icon && !blok.image.filename" class="number h2" :class="white ? '!text-white' : null">0{{ index }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  blok: Object,
  white: Boolean,
  icon: Boolean,
  index: Number
});
</script>

<style scoped>
.cardGridItem {
  @apply p-6;
  @apply relative;
  @apply aspect-square border;
}

p.number,
.cardGridItem .cta,
.cardGridItem img {
  @apply absolute bottom-4;
}

.content {
  /* @apply flex flex-wrap flex-row content-between; */
}</style>