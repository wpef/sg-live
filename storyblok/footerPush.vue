<template>
  <section class="w-full flex flex-row space-x-6">
      <div v-for="push in blok.items" :key="blok._uid"
        :style="{
          backgroundImage: `url(${push.backgroundImage.filename})`,
          backgroundColor: push.backgroundColor,
          minHeight: '420px' }"
        class="w-1/2 p-8 relative">
        <div class="mb-24">
          <h4 class="h3 text-white mb-4 pr-32">{{ push.title }}</h4>
          <p class="p1 text-white">{{ push.description }}</p>
        </div>
        <CTA v-if="push.cta[0] && push.cta[0].url" class="text-white absolute bottom-6" :blok="{ white:true, ...push.cta[0]}" />
      </div>

  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object })

</script>

<style scoped>

/* .footerPush .h4 {
  /* padding-bottom: 18px; 
} */

</style>