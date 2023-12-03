<template>

  <NuxtLink class="whatsapp" :to="'https://wa.me/9710582942560'" target="_blank">
    <Icon name="whatsapp" size="40" color="white"/>
  </NuxtLink>
  
</template>


<script setup>
defineProps({
  link : Object
})
</script>

<style scoped>
.whatsapp {
  @apply p-4 bg-green-500 rounded-full;
  @apply shadow shadow-gray-600;
}


</style>