<template>
  <section class="SectionPush container flex flex-wrap flex-row" v-editable="blok">
    <div class="title w-full flex flex-wrap flex-col">
    
      <h2 data-aos="fade-up" class="h2" v-if="blok.title">{{ blok.title }}</h2>
      <div data-aos="fade-up" class="border-t"></div>
      <h3 data-aos="fade-up" class="h4" v-if="blok.subtitle">{{ blok.subtitle }}</h3>

    </div>

    <div v-if="blok.pushs.length > 0" class="wrapper">

      <div v-for="(push,index) in blok.pushs"
        :key="blok._uid"
        class="push"
        data-aos="fade-up"
        :data-aos-delay="100*index"
        v-editable="push"
        @click="push.link ? navigateTo( '/' + push.link?.cached_url) : ''"
      >
      <div class="background" :style="{ backgroundImage : `url(${push.background.filename})`}"></div>

        <div class="content absolute left-6 bottom-6">
          <h4 class="text-white h3 mb-4">{{ push.title }}</h4>
          <CTA class="text-white" :blok="{ label: 'Discover', white: true, ...push }" />
        </div>
      </div>

    </div>

  </section>
</template>
 
<script setup>
defineProps({ blok: Object })
const navigateTo2 = (link) => console.log(link)
</script>

<style scoped>
.SectionPush {
  @apply mt-10 pb-24;
}

.background {
  @apply w-full h-full absolute;
  @apply hover:brightness-75;
  @apply transition-all duration-200;
}

.title .h2 {
  @apply pb-8;
  @apply max-w-lg;
}

.title .h4 {
  @apply pt-9 pb-4;
}

.wrapper {
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