<template>
  <div v-if="push" :style="style" :class="push.backgroundColor !== '' ? '' : 'border'" class="item" data-aos="fade-up"
    :data-aos-delay="100 * index" v-editable="push">
    <div class="content" :style="{ backgroundImage : `url(${props.push.image?.filename})`}">
    </div>
    <div class="textContent">
      <h4 class="h2" :class="push.white ? 'text-white' : ''" data-aos="fade-up" :data-aos-delay="150 * index">
        {{ push.title }}</h4>
        <p class="p1" :class="push.white ? 'text-white' : ''" data-aos="fade-up" :data-aos-delay="200 * index">
          {{ push.description }}</p>
    </div>
    <CTA v-if="push.cta && push.cta[0] && push.cta[0].link" class="absolute bottom-6 p-8" :blok="push.cta[0]" />
  </div>
</template>
 
<script setup>
const props = defineProps({
  push: Object,
  index: Number
})

const style = computed(() => {
  return { 
    '--bg-color' : props.push.backgroundColor === '' ? 'white' : props.push.backgroundColor,
    '--bg-hover-color' : props.push.backgroundColor === '' ?  
      'rgba(71, 131, 238, .15)' :
      'color-mix(in srgb, var(--bg-color) 85%, black)',
  }
})
</script>

<style scoped>
.item {
  @apply h-96 lg:h-[33.5rem];
  @apply w-full md:w-1/2;
  @apply relative overflow-hidden;
}

.content {
  @apply absolute;
  @apply w-full h-full;
  @apply bg-cover;
  background-color: var(--bg-color);
  @apply transition-all duration-500;
}

.textContent {
  @apply lg:pr-32 p-8;
  @apply absolute top-0;
}

.item:hover .content {
  background-color: var(--bg-hover-color);
  transform: scale(1.1);
}

.item .h2 {
  @apply text-[1.7rem];
}

.item h4 {
  @apply mb-4;
}



</style>