<template>
  <section :class="sectionClasses">

    <div v-editable="blok" class="w-1/2 pr-12">
      <h2 v-if="blok.title">{{ blok.title }}</h2>
      <h3 v-if="blok.subtitle">{{ blok.subtitle }}</h3>
    </div>

    <div class="w-1/2 mt-6 flex-row">
      <StoryblokComponent v-for="blok in blok.right" :key="blok._uid" :blok="blok" />
    </div>

  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object })
 
const sectionClasses = computed(() => {
  return "text_section flex " + 
    (props.blok.line === 'over' ? 'border-t' :  "") + 
    (props.blok.line === 'below' ? 'border-b' :  "")
})
</script>

<style scoped>
section.text_section {
  margin-top: 2.5rem;
  padding-top : 39px;
}

.text_section h2 {
  padding-bottom: 35px;
}
</style>