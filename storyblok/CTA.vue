<template>
    <NuxtLink class="cta flex items-center"
    :to="blok.link.url == '' ? '/' + blok.link.cached_url : blok.link.url"
    >
      <span :class="blok.white ? 'text-white' : 'text-[#3052B7]'">{{ blok.label }}</span>
      <img class="ml-2" :src="iconSrc">
    </NuxtLink>
</template>
 
<script setup>
const props = defineProps({ 
  blok: Object,
  white: Boolean
});
const iconSrc = computed(() => { return props.blok.white || props.white ? '/assets/icons/next-white.svg' : '/assets/icons/next.svg'})
</script>