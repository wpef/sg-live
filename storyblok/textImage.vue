<template>
  <section class="textImage" :style="{ backgroundColor : blok.backgroundColor }">
    <div class="container">
    <div class="title md:w-1/2 md:pr-48">
      <h4 v-if="blok.title" :class="blok.white ? 'text-white' : ''" class="h2">{{ blok.title }}</h4>
      <div v-if="blok.body" :class="blok.white ? 'text-white' : ''" class="text" v-html="content"></div>
    </div>
    <div class="thumb md:w-1/2">
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
console.log(content)
</script>

<style scoped>
.container {
  @apply flex flex-wrap flex-row;
  @apply py-12 my-2;
}

.title {
  @apply flex flex-wrap flex-row content-between;
}


</style>