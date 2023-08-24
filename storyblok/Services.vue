<template>
  <section class="services flex flex-row h-2/3 pt-16" :style="sectionStyle">
    <div class="shrink-0 pr-24">
      <h2 class="text-white h4" v-if="blok.title">{{ blok.title }}</h2>
    </div>
    <div v-if="blok.items.length > 0" class="servicesList flex flex-wrap">
      <div v-for="item in blok.items" :key="blok._uid" class="serviceItem">
        <div class="serviceContent">
          <h4 class="text-white h5 mb-4">{{ item.title }}</h4>
          <p class="text-white p2">{{ item.description }}</p>
          <img class="mt-60" :src="item.image.filename" />
        </div>
      </div>
    </div>
  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object });
const sectionStyle = computed(function(){ 
  let color = props.blok.backgroundColor === '' ? "#003966": props.blok.backgroundColor
  
  return {
    backgroundColor: color,
    boxShadow: '0 0 0 100vmax ' + color
  }
 }); 
</script>

<style scoped>
.serviceItem {
  @apply flex basis-1/3 flex-grow flex-shrink-0;
  @apply pr-16;
  @apply border-l pl-6;
  border-color: rgba(255, 255, 255, 0.20);
}
</style>