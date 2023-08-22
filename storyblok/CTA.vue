<template>
  <button class="cta flex items-center text-blue-900">
    <NuxtLink
    :to="blok.link.url"
    >
      {{ blok.label }}
    </NuxtLink>
    <img class="ml-2" src="assets/icons/next.svg">
  </button>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>