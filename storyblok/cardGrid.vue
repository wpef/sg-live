<template>
  <section class="container">
  <div class="cardGrid grid sm:grid-cols-2 md:grid-cols-4 gap-6">
    <div class="cardGridItem"></div>
    <div class="cardGridItem"></div>
    <cardGridItem
      v-for="blok in blok.items"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</section>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>

<style>
.cardGridItem {
  @apply md:relative;
  @apply md:aspect-square;
}
</style>