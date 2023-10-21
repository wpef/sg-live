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
const burgerOpen = ref(null);


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

const toggleBurger = () => {
  burgerOpen.value = burgerOpen.value ? null : true;
}

</script>
 
<template>
  <header @mouseenter="handleMouseOver(-1)" :class="!burgerOpen && hoveredMenu !== null ? 'hover' : ''">
    <div class="h-full mx-auto flex items-center justify-between">
      <NuxtLink class="pb-8" to="/">
        <h1 class="text-3xl hidden">StoneGate</h1>
        <div v-if="!burgerOpen" class="logo">
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
      <Button class="hidden lg:flex" :link="headerCTA[0]"/>
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
  <Transition>
    <img v-if="!burgerOpen && hoveredMenu === null" class="burgerIcon" src="/icons/burger.svg" @click="toggleBurger">
  </Transition>
  <Transition>
    <img v-if="!burgerOpen && hoveredMenu !== null" class="burgerIcon " src="/icons/burger-black.svg" @click="toggleBurger">
  </Transition>
  <Transition>
    <img v-if="burgerOpen" class="burgerIcon" src="/icons/x.svg" @click="toggleBurger">
  </Transition>
    <Transition>
    <div v-if="burgerOpen" class="burgerMenu z-40">
      <BurgerMenu @click="toggleBurger" :cta="headerCTA[0]" :menu="headerMenu"/>
    </div>
  </Transition>
</template>

<style scoped>

.burgerIcon {
  @apply lg:hidden;
  @apply fixed right-5 top-10 z-50;
}


header {
  @apply w-full h-24 fixed top-0 left-0 z-50;
  @apply text-white;
  @apply transition-all duration-300;
  @apply border-b-0 border-b-transparent;
  @apply bg-none;
}

header.hover {
  @apply text-black;
  @apply border-b border-[#E6E6E6];
  @apply bg-white;
}

header.hover #logo-full {
  @apply opacity-100;
}

header.hover #logo-white,
#logo-full
{
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
  @apply w-48 h-16;
  @apply transition-all duration-300;
  @apply absolute pb-6;
}

header>div {
  max-width: 1440px !important;
  @apply px-6 lg:px-16;
}

a.router-link-active+div {
  @apply h-1 w-full;
  @apply bg-[#2650BE];
}

/* Burger */
.burgerMenu {
  @apply fixed w-full h-full bg-[#003966];
}

</style>