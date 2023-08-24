<template>
  <section class="serviceHero" :style="{ backgroundColor: sectionStyle }">
    <div class="container flex flex-col h-2/3 pt-16">
      <div class="flex flex-row-reverse">
        <StoryblokComponent class="w-1/2" v-for="blok in blok.hero" :key="blok._uid" :blok="blok" />
      </div>
      <div class="cardGrid grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <cardGridItem v-for="blok in blok.items" :key="blok._uid" :blok="blok" />
      </div>
    </div>
  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object });
const sectionStyle = computed(() => {   
  return props.blok.backgroundColor === '' ? "#003966": props.blok.backgroundColor
 }); 
</script>

<style scoped>
/* .cardGridItem {
  @apply md: relative;
  @apply md: aspect-square;
} */
</style>