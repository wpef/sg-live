<template>
  <!-- {{ blok.link }} -->
  <NuxtLink class="cta flex items-center"
    :class="blok.white ? 'text-white' : 'text-[#3052B7]'"
    :to="toUrl(blok)"
    >
      <span>{{ blok.label }}</span>
      <img v-if="blok.icon !== false" class="ml-2" :src="iconSrc">
    </NuxtLink>
</template>
 
<script setup>
const props = defineProps({ 
  blok: Object,
  white: Boolean,
  icon : Boolean
});

const iconSrc = computed(() => { return props.blok.white || props.white ? '/assets/icons/next-white.svg' : '/assets/icons/next.svg'})

const toUrl = function (blok) {
  const link = blok.link;
  const https = "https://";

  if (link.linktype === 'story') {
    return '/' + link.cached_url
  }
  if (link.linktype == 'url') {
    if (link.url.startsWith(https))
      return link.url
    return https + link.url
  }
}
</script>