<template>
  <section class="footerPush container">

      <div v-for="push in blok.items" :key="blok._uid"
        :style="{
          backgroundImage: `url(${push.image.filename})`,
          backgroundColor: push.backgroundColor
          }"
        :class="push.backgroundColor !== '' ? '' : 'border'"
        class="item"
        >
        <div class="contentTop">
          <h4 class="h2" :class="push.white ? 'text-white' : ''">{{ push.title }}</h4>
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

.footerPush {
  @apply flex flex-row gap-6;
}

.footerPush .item {
  @apply w-1/2 p-8;
  @apply relative;
  aspect-ratio: 6/5;
  @apply bg-cover;
}

.footerPush .item h4 {
  @apply mb-4 pr-32;
}

</style>