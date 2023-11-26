<template>
  <div class="cardGridItem" :style="style" v-editable="blok"
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

const style = computed(() => {
  return { 
    '--bg-color' : props.blok.backgroundColor === '' ? 'white' : props.blok.backgroundColor,
    '--border-color' :  props.white ? 'rgba(255, 255, 255, 0.20)' : '#CCC',
    '--bg-hover-color' :  props.blok.backgroundColor === '' || props.blok.backgroundColor === 'white' ? 'rgba(71, 131, 238, .15)' : 'rgba(38, 80, 190, .15)'
  }
})
</script>

<style scoped>
.cardGridItem {
  @apply p-6;
  @apply relative;
  @apply aspect-square border;
  background-color: var(--bg-color);
  border-color: var(--border-color);
  @apply transition-all	delay-0;
}

.cardGridItem:hover {
  background-color: var(--bg-hover-color);
}

.cardGridItem .content {
  @apply mb-10;
}

p.number,
.cardGridItem .cta,
.cardGridItem img {
  @apply absolute bottom-4;
}

p.number {
  @apply text-3xl;
}
</style>