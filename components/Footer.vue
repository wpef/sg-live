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

</script>
 
<template>
  <footer class="w-full">
    <!--  #WIP 
      <preFooter :bloks="preFooterBloks"/> -->
    <div class="w-full">
      <nav v-if="footerMenu">
        <ul class="h6 flex space-x-8">
          <li v-for="blok in footerMenu" :key="blok._uid">
            <NuxtLink :to="`/${blok.link.story.url}`" class="hover:text-[#50b0ae]">
              {{ blok.link.story.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
nav a.router-link-active {
  @apply underline underline-offset-4 decoration-4 decoration-[#50b0ae];
}
</style>