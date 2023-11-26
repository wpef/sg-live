<script setup>
const props = defineProps({ blok: Object })
const backgroundStyle = computed(() => {
  const bgImage = props.blok.heroMobile?.filename !== undefined && props.blok.heroMobile?.filename !== '' ? props.blok.heroMobile.filename : props.blok.heroImage?.filename
  return {
      backgroundColor: props.blok.heroBgColor !== undefined && props.blok.heroBgColor !== '' ? props.blok.heroBgColor : '#003966',
      backgroundImage: `url(${bgImage})`
    }
})
</script>

<template>
  <div v-editable="blok" class="hero" :class="blok.fullHeight ? 'h-screen' : 'h-[30rem]'" :style="backgroundStyle">
      <div class="container">
        <div class="heroTitle text-white">
          <h1 class="h1" 
            v-if="blok.title" 
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-anchor-placement="bottom"
          >{{ blok.title }}</h1>
          <h2 class="h4" v-if="blok.subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
            data-aos-anchor-placement="bottom"
          >{{ blok.subtitle }}</h2>
        </div>
      </div>
    </div>
</template>

<style>
div.hero {
  @apply pt-64;
  @apply relative bg-cover bg-center;
  margin-top: 0 !important;
}

.hero .heroTitle {
  @apply pr-12 lg:pr-48 xl:pr-[42rem];
  @apply absolute bottom-12;
  max-width: 1440px;
}

.hero .heroTitle h1 {
  @apply pb-6;
}
</style>