<template>
  <section class="textSection" :class="bgClasses" :style="{
    backgroundColor : blok.backgroundColor,
    backgroundImage : `url(${blok.backgroundImage?.filename})`,
  }">
  <div class="container" v-editable="blok">
    <div v-if="blok.line === true" class="line"></div>
    <div class="textSectionContainer" :class="sectionClasses">      
      <div class="textSectionTitle lg:w-1/2" :class="blok.white ? 'text-white' : ''" >
        <h2 v-if="blok.title" class="h2"  data-aos="fade-up">{{ blok.title }}</h2>
        <h3 v-if="blok.subtitle" :class="blok.title ? 'h5' : 'h4'"  data-aos="fade-up">{{ blok.subtitle }}</h3>
      </div>
      <div v-if="blok.right.length > 0" class="textSectionRight lg:w-1/2" :class="blok.white ? 'text-white' : ''" data-aos="fade-up" data-aos-delay='300'>
        <StoryblokComponent v-for="(textBlok, index) in blok.right" v-editable="blok" :key="textBlok._uid" :blok="textBlok" data-aos="fade-up"/>
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
    (props.blok.right.length > 0 ? 'flex-col lg:flex-row gap-12' : 'flex-wrap flex-row gap-4')
  })

const bgClasses = computed(() => {
  return props.blok.backgroundImage ? 'bg-cover bg-local bg-clip-border	bg-cover bg-center' : '';
})
</script>

<style scoped>

.textSectionContainer {
  border-color: rgba(255, 255, 255, 0.20);
  @apply py-16 lg:py-32; /* TODO : default padding */
}

.textSectionTitle > * {
  @apply max-w-lg;
}

.textSectionContainer .textSectionRight {
  @apply md:pr-24;
}
.textSectionContainer h2 {
  @apply pb-6;
}

.line {
  height : 1px;
  background-color: #CCCCCC;
  margin-bottom : -90px; 
}
</style>