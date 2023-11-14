<template>
  <section class="container">
    <!-- TODO : dynamise src -->
    <img class="logo" src="/icons/logo-simple.svg">
    <div class="menu">
      <div class="empty"></div>
      <div class="navHead" v-for="head in menu">
        <NuxtLink v-if="head.component === 'menu_link'" :to="'/' + head.link.cached_url">{{ head.title ??
          head.link.story.name ?? '' }}</NuxtLink>
        <NuxtLink v-if="head.component === 'menu_col'" :to="'/' + head.titleLink.cached_url">{{ head.title ??
          head.titleLink?.story?.name ?? '' }}</NuxtLink>
        <div v-if="head.component === 'menu_col'" class="navSub">
          <NuxtLink v-for="(item, index) in head.items" :key="item._uid" :to="titleLink" class="item h6">{{
            item.title ?? item.titleLink.story?.name }}
          </NuxtLink>
        </div>
        <!-- TODO : render list -->
      </div>
    </div>
    <Button class="cta flex" :link="cta" />
  </section>
</template>
 
<script setup>
const props = defineProps({
  menu: Object,
  cta: Object
})

// console.log(props.menu)
</script>

<style scoped>
.container {
  @apply pt-24 flex flex-col h-full justify-between;
}

.logo {
  @apply absolute top-10 left-8;
}

section>.cta {
  @apply bg-[#4783EE] mb-14;
}

.container .menu>div {
  @apply py-5;
  @apply border-b;
  border-color: rgba(141, 198, 207, 0.2);
  @apply text-white;
}

.navHead>a {
  @apply pl-5;
}

.navSub {
  @apply flex flex-col pl-6;
}

.navSub>a {
  @apply py-4 pl-5 border-b;
  @apply last:pb-0 last:border-0;
  border-color: rgba(141, 198, 207, 0.2);
  color : rgba(141, 198, 207, 1);
}

.empty {
  @apply pt-10;
}

.navHead::before {
  content: url('/icons/up-white.svg');
  @apply relative -bottom-1;
}

.navSub::before {
  @apply w-full mt-5;
  @apply border-b;
  border-color: rgba(141, 198, 207, 0.2);
}

</style>