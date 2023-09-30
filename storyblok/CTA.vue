<template>
  <NuxtLink class="cta flex items-center gap-1"
    :class="blok.white ? 'text-white' : 'text-[#3052B7]'"
    :to="toUrl(blok)"
    >
      <img class="icon-left" v-if="blok.icon !== false" :src="iconSrc">
      <span>{{ blok.label }}</span>
      <img class="icon-right" v-if="blok.icon !== false" :src="iconSrc">
    </NuxtLink>
</template>
 
<script setup>
const props = defineProps({ 
  blok: Object,
  white: Boolean,
  icon : Boolean
});

const iconSrc = computed(() => { return props.blok.white || props.white ? '/icons/next-white.svg' : '/icons/next.svg'})

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

<style scoped>
.cta {
  @apply h-6;
}

.icon-left, a:hover .icon-right {
  @apply w-0;
}

.icon-right, a:hover .icon-left {
  @apply w-6;
}

img { 
  @apply transition-all duration-200;
}
</style>