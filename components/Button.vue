<template>

  <NuxtLink class="cta" :to="link.link.url" target="_blank">
    <img class="icon-left" src="/icons/up-white.svg">
    <span>{{ link.label }}</span>
    <img class="icon-right" src="/icons/up-white.svg">
  </NuxtLink>
  
</template>


<script setup>
defineProps({
  link : Object
})
</script>

<style scoped>

.cta {
  @apply relative justify-between items-center gap-2;
  @apply text-white bg-[#3052B7] px-5 py-3 rounded;
}

.cta .icon-left {
  @apply -translate-x-2 absolute opacity-0 duration-300;
}

.cta .icon-right {
  @apply translate-x-0  duration-300;
}

.cta span {
  @apply translate-x-0 duration-300;
}

.cta:hover span {
  @apply translate-x-8;
}

.cta:hover .icon-right {
  @apply -translate-x-2 opacity-0;
}

.cta:hover .icon-left {
  @apply translate-x-0 opacity-100;
}

.cta .icon-left, .cta a:hover .icon-right{
  /* @apply -translate-x-10; */
}

</style>