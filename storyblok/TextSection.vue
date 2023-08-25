<template>
  <section class="textSection" :class="sectionClasses2" :style="{
    backgroundColor : blok.backgroundColor,
    backgroundImage : `url(${blok.backgroundImage?.filename})`,
  }">
    <div class="container" :class="sectionClasses">

      <div v-editable="blok" class="text w-1/2 pr-36">
        <h2 v-if="blok.title" :class="blok.backgroundImage ? 'text-white' : ''">{{ blok.title }}</h2>
        <h3 v-if="blok.description">{{ blok.description }}</h3>
      </div>
      <div v-if="blok.right.length === 0" class="w-full border-b"></div>
      <div v-if="blok.right.length > 0" class="w-1/2 mt-6 flex-row" :class="blok.backgroundImage ? 'text-white' : ''">
        <StoryblokComponent v-for="blok in blok.right" :key="blok._uid" :blok="blok" />
      </div>
      
    </div>
  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object })
 
const sectionClasses = computed(() => {
  return "text_section flex " + 
    (props.blok.line === true ? 'border-t' :  "") + 
    (props.blok.right.length > 0 ? '' : 'flex-wrap flex-row')
  })

const sectionClasses2 = computed(() => {
  return props.blok.backgroundImage ? 'bg-local bg-clip-border	bg-cover bg-center' : '';
})

// const titleClasses = computed(() => {
//   return  props.blok.right.length === 0 ? "border-b" : ""
// })
</script>

<style scoped>

.textSection {
  @apply pt-20 pb-16;
}
section.text_section {
  @apply mt-10 mb-4;
  @apply bg-cover;
}

.text_section h2 {
  @apply pb-9;
}
</style>