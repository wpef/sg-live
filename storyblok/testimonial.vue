<template>
  <section class="testimonial" :style="'background-color : ' + blok.backgroundColor">
    <div class="container">
      <div class="title w-1/2">
        <blockquote class="relative" data-aos="fade-up" data-aos-delay="200">
          <h4 v-if="blok.quote" :class="blok.white ? 'text-white' : ''" class="h5">{{ blok.quote }}</h4>
        </blockquote>
        <div v-if="blok.signature" :class="blok.white ? 'text-white' : ''" class="signature p2"  data-aos="fade-up" data-aos-delay="500" v-html="content"></div>
      </div>
      <div class="thumb w-1/2 h-auto"  data-aos="fade-up">
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
  @apply flex flex-row gap-24;
}

.title {
  @apply flex flex-wrap flex-row content-between gap-24 items-center;
  @apply pl-16 pr-24 pt-16 pb-4;
}

.signature p {
  padding-bottom: unset;
}


blockquote h4:before {
  content: open-quote;

  @apply absolute;
  @apply -left-11 -top-10;
}

blockquote h4:after {
  content: close-quote;

  @apply absolute pl-4;
}
</style>