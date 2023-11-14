<template>
  <div class="sBloks md:w-1/2 flex flex-wrap flex-row gap-4">
    <NuxtLink :to="toUrl(blok.cta[0])" v-for="blok in sbloks" class="footerblok">
      <div class="content">
        <h4 v-if="blok.title" class="h5 pb-1 text-white">{{ blok.title }}</h4>
        <p v-if="blok.description" class="p2 text-white">{{ blok.description }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({ sbloks : Array })

const toUrl = function (blokCta) {
  const link = blokCta.link;
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
.sBloks .content {
  @apply flex flex-col;
}

.sBloks .content>p {
  color: #666;
}

.footerblok {
  @apply w-full;
  @apply p-6;
  border: 1px solid #333333;
}
</style>