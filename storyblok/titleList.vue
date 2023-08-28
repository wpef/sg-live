<template>
  <section class="titleList container">
    <div class="title">
      <h2 class="h2" v-if="blok.title">{{ blok.title }}</h2>
    </div>
    <div class="border-t"></div>
    <div class="wrapper flex flex-col">
      <div class="item" v-for="blok in blok.Items" :key="blok._uid">
        <h3 class="h4 w-3/4">{{ blok.title }}</h3>
        <div class="border-t w-3/4"></div>
        <p class="w-1/2 float-right">{{ blok.content }}</p>
      </div>
    </div>
  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped>
.title {
  @apply max-w-lg pr-40 mb-6;
}

.wrapper {
  @apply flex flex-col;
  @apply pt-20;
}

.item {
  @apply flex flex-col justify-end items-end;
  @apply pb-14;
}

.item h3 {
  @apply pb-3;
}

.item p {
  @apply pt-8;
}
</style>