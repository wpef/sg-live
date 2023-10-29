<template>
  <NuxtLink class="cta flex items-center gap-1"
    :class="blok.white ? 'text-white' : 'text-[#3052B7]'"
    :to="toUrl(blok)"
    >
      <img class="icon-left" v-if="blok.icon !== false" :src="iconSrc">
      <span :class="blok.icon !== false ? 'icon' : ''">{{ blok.label }}</span>
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

.cta .icon-left {
  @apply -translate-x-2 absolute opacity-0 duration-300;
}

.cta .icon-right {
  @apply translate-x-0  duration-300;
}

.cta span.icon {
  @apply translate-x-0 duration-300;
}

.cta:hover span.icon {
  @apply translate-x-8;
}

.cta:hover .icon-right {
  @apply -translate-x-2 opacity-0;
}

.cta:hover .icon-left {
  @apply translate-x-0 opacity-100;
}
</style>