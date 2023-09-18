<template>
  <section class="titleList" :style="'background-color : ' + blok.backgroundColor">
    <div class="container" v-editable="blok">

      <div v-if="blok.title" class="title" data-aos="fade-up">
        <h2 :class="whiteClass" class="h2">{{ blok.title }}</h2>
      </div>
      <div v-if="blok.title" class="border-t"></div>

      <div class="wrapper">
        <TitleListItem  v-for="(item, index) in blok.Items" :key="blok._uid" :blok="item" :white="blok.white" :expand="blok.expand" :index="index"/>
      </div>

    </div>
  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object })
const whiteClass = props.blok.white ? 'text-white' : ''
</script>

<style scoped>
.title {
  @apply max-w-lg lg:pr-40 mb-6;
}

.wrapper {
  @apply flex flex-col;
  @apply pt-8 lg:pt-20;
}
</style>