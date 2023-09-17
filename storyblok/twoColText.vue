<template>
  <section class="textSection twoColText" :style="{
    backgroundColor : blok.backgroundColor,
    backgroundImage : `url(${blok.backgroundImage?.filename})`,
  }">
  <div class="container" v-editable="blok">

    <div class="textSectionContainer" :class="sectionClasses">
      
      <div class="textSectionTitle lg:w-1/2" :class="blok.white ? 'text-white' : ''">
        <h2 data-aos="fade-up" v-if="blok.title" class="h2">{{ blok.title }}</h2>
        <h3 data-aos="fade-up" data-aos-delay="200" v-if="blok.subtitle" :class="blok.title ? 'h5' : 'h4'">{{ blok.subtitle }}</h3>
      </div>

      <div class="textSection w-full flex gap-32" :class="blok.white ? 'text-white' : ''" data-aos="fade-up">
        <StoryblokComponent v-for="blok in blok.items" :key="blok._uid" :blok="blok" :class="'w-1/2'" />
      </div>
            
    </div>
  </div>
  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object })
 
const sectionClasses = computed(() => {
  return "flex flex-wrap flex-col lg:flex-row gap-4 ";
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

.textSectionTitle > * {
  @apply max-w-lg;
}

.textSectionContainer .textSectionRight {
  @apply pr-24;
}
.textSectionContainer h2 {
  @apply pb-9;
}
</style>