<template>
    <NuxtLink class="cta flex items-center text-blue-900"
    :to="blok.link.url == '' ? blok.link.cached_url : blok.link.url"
    >
      <span>{{ blok.label }}</span>
      <img class="ml-2" :src="iconSrc">
    </NuxtLink>
</template>
 
<script setup>
const props = defineProps({ blok: Object });
const iconSrc = computed(() => { return props.blok.white ? 'assets/icons/next-white.svg' : 'assets/icons/next.svg'})
</script>