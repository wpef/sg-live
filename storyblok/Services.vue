<template>
  <section class="services" :style="{backgroundColor : sectionStyle}">
    <div class="container flex flex-row h-2/3 pt-16">
      <div class="shrink-0 basis-80 pr-24">
        <h2 class="text-white h4" v-if="blok.title">{{ blok.title }}</h2>
      </div>
      <div v-if="blok.items.length > 0" class="servicesList flex flex-wrap">
        <div v-for="item in blok.items" :key="blok._uid" class="serviceItem">
          <div class="serviceContent relative">
            <h4 class="text-white h5 mb-4">{{ item.title }}</h4>
            <p class="text-white p2">{{ item.description }}</p>
            <img class="absolute bottom-0" width="32px" :src="item.image.filename" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object });
const sectionStyle = computed(() => {   
  return props.blok.backgroundColor === '' ? "#003966": props.blok.backgroundColor
 }); 
</script>

<style scoped>

.services .container {
  @apply pt-28 pb-20;
}
.serviceItem {
  @apply flex basis-1/3 flex-grow flex-shrink-0;
  @apply pr-16 mb-6;
  @apply border-l pl-6;
  @apply h-96;
  border-color: rgba(255, 255, 255, 0.20);
}

.serviceItem p.p2 {
  color: rgba(255, 255, 255, 0.50);
}
</style>