<template>
  <section class="services" :style="{backgroundColor : sectionStyle}">
    <div class="container">
      <div class="w-full xl:pr-24" v-editable="blok" data-aos="fade-up">
        <h2 class="text-white h4" v-if="blok.title">{{ blok.title }}</h2>
      </div>
      <div v-if="blok.items.length > 0" class="servicesList flex flex-wrap">
        <div v-for="(item,index) in blok.items" :key="blok._uid" class="serviceItem"  v-editable="item" data-aos="fade-right" :data-aos-delay="100*index">
          <div class="serviceContent relative">
            <h4 class="text-white h5 mb-4">{{ item.title }}</h4>
            <p class="text-white p2">{{ item.description }}</p>
            <img class="absolute bottom-0" width="32" :src="item.image.filename" />
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
  @apply pt-24 lg:pb-20;
  @apply flex flex-col lg:flex-row h-2/3 gap-12 lg:gap-8;
}
.serviceItem {
  @apply flex basis-1/3 flex-grow flex-shrink-0;
  @apply pr-16 mb-24 lg:mb-6;
  @apply border-l pl-6;
  @apply h-64 lg:h-96;
  border-color: rgba(255, 255, 255, 0.20);
}

.serviceItem p.p2 {
  color: rgba(255, 255, 255, 0.50);
}
</style>