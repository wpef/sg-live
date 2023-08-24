<template>
  <div class="cardGridItem" :style="{ borderColor :  white ? 'rgba(255, 255, 255, 0.20)' : '' }" >
    <div class="content">
      <h4 v-if="blok.title" class="h5 pb-4" :class="white ? 'text-white' : null ">{{ blok.title }}</h4>
      <p v-if="blok.description" class="p2" :class="white ? 'text-white' : null ">{{ blok.description }}</p>
    </div>
    <CTA v-if="blok.cta[0]" :blok="blok.cta[0]" />
    <img v-if="icon && blok.image" :src="blok.image.filename" :alt="blok.image.alt" width="32px">
  </div>
</template>

<script setup>
const props = defineProps({ 
  blok: Object,
  white : Boolean,
  icon : Boolean
});

// console.log(props.white)
</script>

<style scoped>
.cardGridItem {
  @apply p-6;
  @apply relative;
  @apply aspect-square border;
}

.cardGridItem .cta ,.cardGridItem img {
  @apply absolute bottom-4;
}

.content {
  /* @apply flex flex-wrap flex-row content-between; */
}
</style>