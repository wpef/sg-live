<template>
<div v-editable="blok" class="banner" :style="{
      backgroundColor: blok.bgColor !== '' ? blok.bgColor : '#003966',
      backgroundImage: `url(${blok.bgImage.filename})`,
    }">
      <div class="container">
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
</template>
 
<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
.banner {
  @apply h-96;
  @apply relative bg-cover bg-center;
  margin-top: 0 !important;
}

.container {
  @apply pr-12 lg:pr-48 xl:pr-[42rem];
  @apply absolute bottom-4;
  max-width: 1440px;
}

h2 {
  @apply mb-5;
}
</style>