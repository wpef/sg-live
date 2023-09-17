<template>
  <section class="servicesHero" :style="{ backgroundColor: blok.backgroundColor }">
    <div class="container flex flex-col h-2/3 pt-16">
      <div class="flex flex-row-reverse">
        <div v-if="blok.title || blok.subtitle" class="text md:w-1/2 pb-40 xl:pr-24">
          <h2 v-if="blok.title" class="pb-8" :class="textWhite ? 'text-white':''" data-aos="fade-up">{{ blok.title ?? blok.subtitle }}</h2>
          <CTA data-aos="fade-up" v-if="blok.cta[0]" :blok="blok.cta[0]"/>
        </div>
      </div>
      <div class="cardGrid grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        <cardGridItem v-for="(blok, index) in blok.items" data-aos="fade-up"
          :key="blok._uid"
          :blok="blok"
          :white="textWhite"
          :icon="true"
          :index="index+1"
          :data-aos-delay="100*index"
        />
      </div>
    </div>
  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object });
const textWhite = computed(() => {   
  return props.blok.backgroundColor !== ''
 }); 
</script>

<style scoped>
</style>