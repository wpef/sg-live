<template>
  <section class="container push_section flex flex-wrap flex-row">
    <div class="flex flex-wrap flex-row">

      <h2 class="h2 border-b" v-if="blok.title">{{ blok.title }}</h2>
      <h3 class="h4" v-if="blok.description">{{ blok.description }}</h3>
    </div>

    <div v-if="blok.pushs.length > 0" class="push_list">
      <div v-for="push in blok.pushs" :key="blok._uid"
        :style="{ backgroundImage: `url(${push.background.filename})` }"
        class="push">
        <div class="push_content absolute left-6 bottom-6">
          <h4 class="text-white h3 mb-4">{{ push.title }}</h4>
          <CTA class="text-white" :blok="{ label: 'Découvrir', white: true, ...push }" />
        </div>
      </div>
    </div>

  </section>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
section.push_section {
  @apply mt-10 mb-4;
}

.push_section .h2 {
  @apply mb-8 pb-9;
  @apply md:w-2/3;
}

.push_section .h4 {
  @apply pb-4;
}

.push_list {
  @apply flex flex-wrap w-full;
  @apply content-between justify-between;
  @apply gap-4;
}
.push {
  @apply aspect-square shrink grow basis-96;
  @apply bg-no-repeat bg-cover;
  @apply relative;
}

</style>