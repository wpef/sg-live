<template>
  <section class="testimonial" :style="'background-color : ' + blok.backgroundColor">
    <div class="container" v-editable="blok">
      <div class="title lg:w-1/2">
        <blockquote class="relative" data-aos="fade-up" data-aos-delay="200">
          <h4 v-if="blok.quote" :class="blok.white ? 'text-white' : ''" class="h5">{{ blok.quote }}</h4>
        </blockquote>
        <div v-if="blok.signature" :class="blok.white ? 'text-white' : ''" class="signature p2"  data-aos="fade-up" data-aos-delay="500" v-html="content"></div>
      </div>
      <div class="thumb lg:w-1/2 h-auto"  data-aos="fade-up">
        <img v-if="blok.image" :src="blok.image.filename" :alt="blok.image.alt">
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object });
const content = computed(() => renderRichText(props.blok.signature));
</script>

<style scoped>

.container {
  @apply flex flex-col-reverse lg:flex-row lg:gap-24 gap-8;
  @apply pt-12 lg:pt-32 pb-12; 
}

.title {
  @apply flex flex-wrap flex-row content-between items-center;
  @apply gap-12 lg:gap-24 py-3 pt-8 lg:pt-16 pb-4;
  @apply pl-6 lg:pl-16 pr-6 lg:pr-24 py-3;
}


.signature p {
  padding-bottom: unset;
}


blockquote h4:before {
  content: open-quote;

  @apply absolute;
  @apply -left-6 -top-12;
}

blockquote h4:after {
  content: close-quote;

  @apply absolute h-0 pl-4;
}
</style>