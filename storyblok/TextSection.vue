<template>
  <section :class="sectionClasses">

    <div v-editable="blok" class="w-1/2 pr-36">
      <h2 v-if="blok.title">{{ blok.title }}</h2>
      <h3 v-if="blok.subtitle">{{ blok.subtitle }}</h3>
    </div>

    <div v-if="blok.right.length === 0" class="w-full border-b"></div>

    <div v-if="blok.right.length > 0" class="w-1/2 mt-6 flex-row">
      <StoryblokComponent v-for="blok in blok.right" :key="blok._uid" :blok="blok" />
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

// const titleClasses = computed(() => {
//   return  props.blok.right.length === 0 ? "border-b" : ""
// })
</script>

<style scoped>
section.text_section {
  margin-top: 2.5rem;
  padding-top : 39px;
  margin-bottom: 1rem;
}

.text_section h2 {
  padding-bottom: 35px;
}
</style>