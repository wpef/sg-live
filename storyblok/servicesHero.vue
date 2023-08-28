<template>
  <section class="servicesHero" :style="{ backgroundColor: blok.backgroundColor }">
    <div class="container flex flex-col h-2/3 pt-16">
      <div class="flex flex-row-reverse">
        <div class="w-1/2 pb-40 md:pr-24" :class="blok.backgroundColor === '' ? null : 'text-white' ">
        <StoryblokComponent v-for="blok in blok.hero" :key="blok._uid" :blok="blok" />
        </div>
      </div>
      <div class="cardGrid grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <cardGridItem v-for="(blok, index) in blok.items"
          :key="blok._uid"
          :blok="blok"
          :white="textWhite"
          :icon="true"
          :index="index+1"
        />
      </div>
    </div>
  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object });
// const sectionStyle = computed(() => {   
//   return props.blok.backgroundColor === '' ? "": props.blok.backgroundColor
//  });
const textWhite = computed(() => {   
  return props.blok.backgroundColor !== ''
 }); 
</script>

<style scoped>
.servicesHero {
  @apply pt-32 pb-16;
}
</style>