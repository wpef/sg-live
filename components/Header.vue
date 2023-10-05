<script setup>
import { ref, onMounted } from 'vue';
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
})

const headerMenu = data.story.content.header_menu

const logo = {
  default: data.story.content.logo,
  white: data.story.content.logo_white ?? data.story.content.logo
}

const headerCTA = data.story.content.header_cta

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

onMounted(() => {
  window.addEventListener('scroll', e => {
    if(window.scrollY > 5)
      handleMouseOver(-1)
    else if (hoveredMenu !== null)
      handleMouseOut();
  })
})
</script>
 
<template>
  <header :class="hoveredMenu !== null ? 'hover' : ''">
    <div class="h-full mx-auto flex items-center justify-between">
      <NuxtLink class="pb-8" to="/">
        <h1 class="text-3xl hidden">StoneGate</h1>
        <div class="logo">
          <img id="logo-full" :src="logo.default.filename">
          <img id="logo-white" :src="logo.white.filename">
        </div>
      </NuxtLink>
      <nav class="hidden lg:block h-full" v-if="headerMenu">
        <ul class="h-full flex items-center space-x-8">
          <li class="h-full flex flex-col justify-between items-center pt-12" v-for="(blok, index) in headerMenu"
            :key="blok._uid" @mouseover="handleMouseOver(index)" @mouseleave="handleMouseOut">

            <NuxtLink v-if="blok.component == 'menu_link'" :to="`/${blok.link.cached_url}`" class="hover:text-[#2650BE]">
              {{ blok.link.story?.name || blok.link.title }}
            </NuxtLink>

            <NuxtLink v-if="blok.component == 'menu_col'" :to="`/${blok.titleLink.cached_url}`"
              class="hover:text-[#2650BE]">
              {{ blok.title }}
            </NuxtLink>

            <div class=""></div>
          </li>
        </ul>
      </nav>
      <Button :link="headerCTA[0]"/>
    </div>
  </header>
  <div v-for="(blok, index) in headerMenu" :key="blok._uid" class="expand_placeholder">
    <Transition>
      <div class="w-full fixed top-0 pt-32 z-40 bg-white" v-show="hoveredMenu == index" v-if="blok.items"
      @mouseover="handleMouseOver(index)" @mouseleave="handleMouseOut">
      <MenuGrid class="container" :menu="blok.items" :cols="4" />
    </div>
  </Transition>
  </div>
</template>

<style scoped>
header {
  @apply w-full h-24 fixed top-0 left-0 z-50;
  @apply text-white;
  @apply transition-all delay-300 duration-300;
  @apply border-b-0 border-b-transparent;
  @apply bg-none;
}

header:hover, header.hover {
  @apply text-black;
  @apply border-b border-[#E6E6E6];
  @apply bg-white;
}

header.hover #logo-full,
header:hover #logo-full {
  @apply opacity-100;
}

header.hover #logo-white,
header:hover #logo-white {
  @apply opacity-0;
}

header>div {
  max-width: 1440px !important;
  @apply px-6 lg:px-16;
}

.v-enter-active,
.v-leave-active {
  @apply opacity-100 transition-all duration-300;
}

.v-enter-from,
.v-leave-to {
  @apply opacity-0;
}

a {
  font-size: 1rem;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.02rem;
}

.logo, .logo > * {
  @apply w-48;
  @apply transition-all delay-300 duration-300;
  @apply absolute pb-6;
}


a.router-link-active+div {
  @apply h-1 w-full;
  @apply bg-[#2650BE];
}
</style>