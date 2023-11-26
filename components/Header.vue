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
const burgerOpen = ref(null);

const handleScroll = (header) => {
  if(window.scrollY == 0) {
    header.classList.remove('sticked');
  }
  else if (!header.classList.contains('sticked') && !burgerOpen.value)
    header.classList.add('sticked');
}


onMounted(() => {
  const header = document.getElementById('header');
  const navItems = document.querySelectorAll('.navItem');
  const expands = document.querySelectorAll('.expand');
  hoveredMenu.value = null;
  handleScroll(header);

  window.addEventListener('scroll', e => {
    handleScroll(header);
  })

  header.addEventListener('mouseenter', e => {
    if (!header.classList.contains('hover'))
      header.classList.add('hover');
  })

  header.addEventListener( 'mouseleave' , e => {
    setTimeout(() => {
      if (!hoveredMenu.value) {
        header.classList.remove('hover');
      }
    }, 150);
  })

  navItems.forEach((exp) => { 
      exp.addEventListener('mouseenter', e => {
        hoveredMenu.value = e.target.dataset.index;
      })
      exp.addEventListener('mouseleave', e => {
        hoveredMenu.value = null;
      })
  })

  expands.forEach((exp) => { 
      exp.addEventListener('mouseenter', e => {
        hoveredMenu.value = e.target.dataset.index;
      })
      exp.addEventListener('mouseleave', e => {
        hoveredMenu.value = null;
        header.classList.remove('hover');
      })
      exp.addEventListener('click', e => {
        hoveredMenu.value = null;
        header.classList.remove('hover');
      })
  })
})

const toggleBurger = () => {
  burgerOpen.value = burgerOpen.value ? null : true;
  if (burgerOpen)
    header.classList.remove('sticked');
  else if (window.scrollY != 0)
    header.classList.add('sticked');
}

</script>
 
<template>
  <header id="header">
    <div>
      <NuxtLink class="pb-8" to="/">
        <h1 class="text-3xl hidden">StoneGate</h1>
        <div v-if="!burgerOpen" class="logo">
          <img id="logo-full" :src="logo.default.filename">
          <img id="logo-white" :src="logo.white.filename">
        </div>
      </NuxtLink>
      <nav v-if="headerMenu">
        <ul>
          <li class="navItem" :class="hoveredMenu == index ? 'hover' : '' " v-for="(blok, index) in headerMenu" :data-index="index"
            :key="blok._uid">

            <div class="line"></div>

            <NuxtLink v-if="blok.component == 'menu_link'" :to="`/${blok.link.cached_url}`">
              {{ blok.link.story?.name || blok.link.title }}
            </NuxtLink>

            <NuxtLink v-if="blok.component == 'menu_col'" :to="`/${blok.titleLink.cached_url}`">
              {{ blok.title }}
            </NuxtLink>

            <div class="line subline"></div>
          </li>
        </ul>
      </nav>
      <Button class="hidden lg:flex" :link="headerCTA[0]"/>
    </div>
  </header>
  <div v-for="(blok, index) in headerMenu" :key="blok._uid" class="expand_placeholder">
    <Transition>
      <div class="expand w-full fixed top-0 pt-32 z-40 bg-white" v-show="hoveredMenu == index" v-if="blok.items" :data-index="index">
      <MenuGrid class="container" :menu="blok.items" :cols="4" />
    </div>
  </Transition>
  </div>
  <Transition>
    <img v-if="!burgerOpen" class="burgerIcon burgerIconWhite" src="/icons/burger.svg" @click="toggleBurger">
  </Transition>
  <Transition>
    <img v-if="!burgerOpen" class="burgerIcon burgerIconBlack" src="/icons/burger-black.svg" @click="toggleBurger">
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

header.sticked {
  @apply h-20;
}

header.sticked {
  @apply text-black;
  @apply border-b border-[#E6E6E6];
  @apply bg-white;
}

header.hover {
  @apply md:text-black;
  @apply md:border-b md:border-[#E6E6E6];
  @apply md:bg-white;
}


header:not(.sticked)~.burgerIconWhite,
header.sticked~.burgerIconBlack {
  opacity: 1;
}

.burgerIconBlack {
  top : 33px
}


header.sticked~.burgerIconWhite,
header:not(.sticked)~.burgerIconBlack {
  opacity : 0
}

header.hover #logo-full {
  @apply md:opacity-100;
}

header.sticked #logo-full {
  @apply opacity-100;
}

header.hover #logo-white
{
  @apply md:opacity-0;
}
header.sticked #logo-white,
#logo-full
{
  @apply opacity-0;
}

header>div {
  max-width: 1440px !important;
  @apply px-6 lg:px-16;
  @apply h-full mx-auto flex items-center justify-between;
}

nav {
  @apply hidden lg:block h-full lg:pl-48;
}

nav ul {
  @apply h-full flex items-center space-x-8;
}

.navItem {
  @apply  h-full flex flex-col justify-center;
}

.navItem.hover > a {
  @apply text-[#2650BE];
}

.navItem.hover > a, .navItem > a.router-link-active {
  margin-top: 4px; /* compense subline */
}

.navItem.hover > .subline, a.router-link-active+.subline {
  @apply h-1 w-full;
  @apply bg-[#2650BE];
}

.line {
  @apply mt-auto;
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

/* Burger */
.burgerMenu {
  @apply fixed w-full h-full bg-[#003966];
}

</style>