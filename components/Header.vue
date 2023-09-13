<script setup>
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
})
 
const headerMenu = ref(null)
headerMenu.value = data.story.content.header_menu

const logo = {
  default : data.story.content.logo,
  white : data.story.content.logo_white ?? data.story.content.logo
}
</script>
 
<template>
  <header>
    <div class="container h-full mx-auto flex items-center justify-between">
      <NuxtLink to="/">
        <h1 class="text-3xl hidden">StoneGate</h1>
        <img id="logo-full" class="logo hidden" :src="logo.default.filename">
        <img id="logo-white" class="logo" :src="logo.white.filename">
      </NuxtLink>
      <nav class="h-full" v-if="headerMenu">
        <ul class="h-full flex items-center space-x-8">
          <li v-for="blok in headerMenu" :key="blok._uid">

            <NuxtLink v-if="blok.component == 'menu_link'" :to="`/${blok.link.cached_url}`" class="hover:text-[#2650BE]">
              {{ blok.link.story?.name || blok.link.title }}
            </NuxtLink>

            <NuxtLink v-if="blok.component == 'menu_col'" :to="`/${blok.titleLink.cached_url}`" class="hover:text-[#2650BE]">
              {{ blok.title }}
            </NuxtLink>

          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  @apply w-full h-24 fixed top-0 left-0 z-50;
  @apply text-white hover:text-black;
  @apply hover:border-b hover:border-[#E6E6E6];
  @apply transition ease-in-out;
}

a {
  font-size: 1rem;
  font-weight: 500;
  line-height: 100%; /* 1rem */
  letter-spacing: -0.02rem;
}

.logo {
  @apply w-48;
}

header {
  @apply bg-gradient-to-b from-black/50 to-80%;
  @apply hover:bg-gradient-to-b hover:from-white hover:to-white;
}

header:hover #logo-full {
  @apply block;
  @apply transition ease-in-out;

}
header:hover #logo-white {
  @apply hidden;
  @apply transition ease-in-out;

}
header:hover nav a.router-link-active {
  @apply underline underline-offset-4 decoration-4 decoration-[#2650BE];
}
</style>