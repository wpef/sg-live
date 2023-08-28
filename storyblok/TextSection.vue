<template>
  <section class="textSection" :class="bgClasses" :style="{
    backgroundColor : blok.backgroundColor,
    backgroundImage : `url(${blok.backgroundImage?.filename})`,
  }">
  <div class="container">

    <div class="textSectionContainer" :class="sectionClasses">
      
      <div class="textSectionTitle w-1/2" :class="blok.white ? 'text-white' : ''">
        <h2 v-if="blok.title" class="h2">{{ blok.title }}</h2>
        <h3 v-if="blok.subtitle" :class="blok.title ? 'h5' : 'h4'">{{ blok.subtitle }}</h3>
      </div>
      <div v-if="blok.right.length > 0" class="textSectionRight w-1/2 mt-6" :class="blok.white ? 'text-white' : ''">
        <StoryblokComponent v-for="blok in blok.right" :key="blok._uid" :blok="blok" :white="blok.white" />
      </div>
      
      <div v-if="blok.right.length === 0" class="w-full border-b"></div>
      
    </div>
  </div>
  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object })
 
const sectionClasses = computed(() => {
  return "flex " + 
    (props.blok.line === true ? 'border-t ' :  "") + 
    (props.blok.right.length > 0 ? '' : 'flex-wrap flex-row gap-4')
  })

const bgClasses = computed(() => {
  return props.blok.backgroundImage ? 'bg-cover bg-local bg-clip-border	bg-cover bg-center' : '';
})
</script>

<style scoped>

.textSection {
  @apply pt-20 pb-16;
}

.textSectionContainer {
  @apply pt-9;
  border-color: rgba(255, 255, 255, 0.20);
}

.textSectionTitle {
  @apply max-w-lg;
}

.textSectionContainer .textSectionRight {
  @apply pr-24;
}
.textSectionContainer h2 {
  @apply pb-9;
}
</style>