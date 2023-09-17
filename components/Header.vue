<script setup>
import { ref, onMounted } from 'vue';
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
})
 
const headerMenu = data.story.content.header_menu

// console.log(headerMenu[1])

const logo = {
  default : data.story.content.logo,
  white : data.story.content.logo_white ?? data.story.content.logo
}

// const hoveredMenu = 1;
const hoveredMenu = ref(null);
const debounceTimer = ref(null);


const handleMouseOver = (index) => {
  clearTimeout(debounceTimer.value);
  hoveredMenu.value = index;
};

const handleMouseOut = () => {
  debounceTimer.value = setTimeout(() => {
    hoveredMenu.value = null;
  }, 300); // 300ms delay
};
</script>
 
<template>
  <header :class="hoveredMenu !== null ? 'hover' : ''">
    <div class="h-full mx-auto flex items-center justify-between">
      <NuxtLink to="/">
        <h1 class="text-3xl hidden">StoneGate</h1>
        <img id="logo-full" class="logo hidden" :src="logo.default.filename">
        <img id="logo-white" class="logo" :src="logo.white.filename">
      </NuxtLink>
      <nav class="hidden lg:block h-full" v-if="headerMenu">
        <ul class="h-full flex items-center space-x-8">
          <li class="h-full flex flex-col justify-between items-center pt-12"
            v-for="(blok, index) in headerMenu"
            :key="blok._uid"
            @mouseover="handleMouseOver(index)"
            @mouseleave="handleMouseOut"
          >

            <NuxtLink  v-if="blok.component == 'menu_link'" :to="`/${blok.link.cached_url}`" class="hover:text-[#2650BE]">
              {{ blok.link.story?.name || blok.link.title }}
            </NuxtLink>

            <NuxtLink v-if="blok.component == 'menu_col'"
            :to="`/${blok.titleLink.cached_url}`" class="hover:text-[#2650BE]">
              {{ blok.title }}
            </NuxtLink>

            <div class=""></div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div v-for="(blok, index) in headerMenu" :key="blok._uid" class="expand_placeholder">
    <div class="w-full fixed top-0 pt-32 z-40 bg-white" 
      v-show="hoveredMenu === index"
      v-if=" blok.items"
      @mouseover="handleMouseOver(index)"
      @mouseleave="handleMouseOut"
    >
      <MenuGrid class="container" :menu="blok.items" :cols="4"/>
    </div>
  </div>
</template>

<style>
header {
  @apply w-full h-24 fixed top-0 left-0 z-50;
  @apply text-white hover:text-black;
  @apply hover:border-b hover:border-[#E6E6E6]; 
  @apply transition ease-in-out;
}

header.hover {
  @apply text-black;
  @apply border-b border-[#E6E6E6];
  @apply bg-gradient-to-b from-white to-white;
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

header > div {
  max-width: 1440px !important;
  @apply px-6 lg:px-16;
}

header.hover #logo-full,
header:hover #logo-full {
  @apply block;
  @apply transition ease-in-out;
}

header.hover #logo-white,
header:hover #logo-white {
  @apply hidden;
  @apply transition ease-in-out;

}

a.router-link-active + div {
  @apply h-1 w-full;
  @apply bg-[#2650BE];
}
</style>