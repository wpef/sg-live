<template>
  <section class="textImage" :style="{ backgroundColor : blok.backgroundColor }">
    <div class="container">
    <div class="title">
      <h2 v-if="blok.title" :class="blok.white ? 'text-white' : ''" class="h2">{{ blok.title }}</h2>
      <div v-if="blok.body" :class="blok.white ? 'text-white' : ''" class="text" v-html="content"></div>
    </div>
    <div class="thumb w-full lg:w-1/2">
      <NuxtImg
        v-if="blok.image"
        provider="storyblok"
        :src="blok.image.filename" 
        :alt="blok.image.alt"
        height="680"
        width="648"
      />
    </div>
  </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object });
const content = computed(() => renderRichText(props.blok.body));
</script>

<style scoped>
.container {
  @apply flex flex-wrap flex-row;
  @apply py-6 lg:py-12;
}

.title {
  @apply flex flex-wrap flex-row content-between;
  @apply lg:w-1/2;
  @apply pb-14 md:pb-0 md:pr-12 xl:pr-40;
}

.title h2 {
  @apply pb-5;
}

.title .text {
  @apply lg:pr-20;
}

.text .p {
  @apply pb-0;
}


</style>