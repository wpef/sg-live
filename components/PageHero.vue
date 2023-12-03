<script setup>
const props = defineProps({ blok: Object })
const bgMobile = props.blok.heroMobile?.filename !== null && props.blok.heroMobile?.filename !== undefined && props.blok.heroMobile?.filename !== "" ? props.blok.heroMobile?.filename : props.blok.heroImage?.filename
const bgDefault =  props.blok.heroImage?.filename && props.blok.heroImage.filename !== "" ? props.blok.heroImage?.filename : ''
const bgStyle = { 
  '--bg-img-default' : `url('${bgDefault}')`,
  '--bg-img-mobile' : `url('${bgMobile}')`,
  backgroundColor : props.blok.heroBgColor
}
</script>

<template>
  <div v-editable="blok" class="hero" :style="bgStyle" :class="(blok.fullHeight ? 'h-screen' : 'h-[30rem]') + ' bg-[image:var(--bg-img-mobile)] lg:bg-[image:var(--bg-img-default)]'" >
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

.hero.h-screen .heroTitle h1 {
  @apply pb-4;
}

.hero .heroTitle h2 {
  @apply pt-2 pb-8;
}

</style>