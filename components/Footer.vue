<script setup>
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
})

const footerMenu = ref(null)
const preFooterBloks = ref(null)
footerMenu.value = data.story.content.footerMenu
preFooterBloks.value = data.story.content.preFooterBlocks

const logo = {
  default : data.story.content.logo,
  white : data.story.content.logo_white ?? data.story.content.logo
}
</script>
 
<template>
  <footer class="w-full">
    <preFooter :bloks="preFooterBloks" />
    <div class="w-full bg-black pt-12">
      <div class="container flex flex-row">

        <div class="w-1/2">
          <img class="w-44" :src="logo.white.filename" />
        </div>
        <div class="w-1/2">
          <menuGrid :menu="footerMenu" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
nav a.router-link-active {
  @apply underline underline-offset-4 decoration-4 decoration-[#50b0ae];
}
</style>