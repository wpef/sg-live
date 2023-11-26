<template>
<div v-editable="blok" class="banner" :style="{
      backgroundColor: blok.bgColor !== '' ? blok.bgColor : '#003966',
      backgroundImage: `url(${blok.bgImage.filename})`,
    }">
      <div class="">
        <div class="container wrapper">

          <h2 class="h3 text-white" 
          v-if="blok.title" 
          data-aos="fade-up"
          >{{ blok.title }}</h2>
          <CTA v-if="blok.cta[0]"
          :blok="blok.cta[0]"
          data-aos="fade-up"
          />
        </div>
      </div>
    </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
.banner {
  @apply h-96;
  @apply relative bg-cover bg-[right_20%_top] md:bg-center;
  margin-top: 0 !important;
}

.wrapper {
  @apply max-w-2xl lg:pr-14;
  @apply absolute bottom-4 lg:bottom-14;
}

h2 {
  @apply mb-3;
  @apply xl:pr-48;
}
</style>