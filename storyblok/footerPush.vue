<template>
  <section class="footerPush container" v-editable="blok">

    <div v-for="(push, index) in blok.items" :key="blok._uid" :style="{
      backgroundImage: `url(${push.image.filename})`,
      backgroundColor: push.backgroundColor
    }" :class="push.backgroundColor !== '' ? '' : 'border'" class="item"
      data-aos="fade-up" :data-aos-delay="100 * index"
      v-editable="push">
      <div class="contentTop">
        <h4 class="h2" :class="push.white ? 'text-white' : ''" data-aos="fade-up" :data-aos-delay="150 * index">
          {{ push.title }}</h4>
        <p class="p1" :class="push.white ? 'text-white' : ''" data-aos="fade-up" :data-aos-delay="200 * index">
          {{ push.description }}</p>
      </div>
      <CTA v-if="push.cta[0] && push.cta[0].link" class="absolute bottom-6" :blok="push.cta[0]" />
    </div>

  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped>
section.footerPush {
  @apply flex flex-row gap-6 flex-wrap md:flex-nowrap;
  @apply py-16;
}

.footerPush .item {
  @apply h-96 lg:h-[33.5rem];
  @apply w-full md:w-1/2 p-8;
  @apply relative;
  @apply bg-cover;
}

.footerPush .item .h2 {
  @apply text-[1.7rem];
}

.footerPush .item h4 {
  @apply mb-4;
}

.contentTop {
  @apply lg:pr-32;
}
</style>