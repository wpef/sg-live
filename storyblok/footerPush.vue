<template>
  <section class="footerPush container w-full flex flex-row gap-6">

      <div v-for="push in blok.items" :key="blok._uid"
        :style="{
          backgroundImage: `url(${push.image.filename})`,
          backgroundColor: push.backgroundColor,
          minHeight: '420px' }"
        :class="push.backgroundColor !== '' ? '' : 'border'"
        class="w-1/2 p-8 relative"
        >
        <div class="mb-24">
          <h4 class="h2 mb-4 pr-32" :class="push.white ? 'text-white' : ''">{{ push.title }}</h4>
          <p class="p1" :class="push.white ? 'text-white' : ''">{{ push.description }}</p>
        </div>
        <CTA v-if="push.cta[0] && push.cta[0].link" class="absolute bottom-6" :blok="push.cta[0]" />
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