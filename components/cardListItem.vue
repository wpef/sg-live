<template>
  <div class="cardListItem" :style="style" v-editable="blok">
      <!-- TODO : handle 100% width on mobile -->
      <NuxtImg
        v-if="blok.image"
        provider="storyblok"
        :src="blok.image?.filename" 
        :alt="blok.image?.alt"
        :modifiers="{ filters: { focal: blok.image?.focus } }"
        width="430"
        height="240"
      />
    <div class="title">
      <h4 v-if="blok.title" class="h5">{{ blok.title }}</h4>
      <CTA class="hidden lg:flex" v-if="blok.cta[0]" :blok="blok.cta[0]" />
    </div>
    <p v-if="blok.description" class="p2 w-full lg:w-1/3">{{ blok.description }}</p>
    <CTA class="lg:hidden pb-4" v-if="blok.cta[0]" :blok="blok.cta[0]" />
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const style = computed(() => {
  return { 
    '--bg-hover-color' :  'rgba(71, 131, 238, .15)'
  }
})

</script>

<style scoped>
.cardListItem {
  @apply flex flex-col flex-wrap lg:flex-nowrap lg:flex-row;
  @apply gap-4 lg:py-6 lg:gap-12;
  @apply border-b;
  @apply transition-all duration-75;
}

.cardListItem:hover {
  background-color: var(--bg-hover-color);
}
.cardListItem .title {
  @apply flex flex-wrap flex-col justify-between;
}

.cardListItem .title h4 {
  @apply pr-6 pt-3;
}

.cardListItem p {
  @apply xl:pl-12 pb-2 lg:pt-4;
}

.title {
  @apply md:w-1/3;
}
</style>