<template>
    <NuxtLink class="cta flex items-center text-blue-900"
    :to="blok.link.url == '' ? blok.link.cached_url : blok.link.url"
    >
      {{ blok.label }}
      <img class="ml-2" src="assets/icons/next.svg">
    </NuxtLink>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>