<template>
  <section class="container">
  <div class="cardGrid grid sm:grid-cols-2 md:grid-cols-4 gap-6"  v-editable="blok" >
    <div v-if="blok.items.length > 4" class="cardGridItem empty"></div>
    <div v-if="blok.items.length > 4" class="cardGridItem empty"></div>
    <cardGridItem
      v-for="(blok, index) in blok.items"
      :key="blok._uid"
      :white="false"
      :blok="blok"
      data-aos="fade-up"
      :data-aos-delay="100*index"
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

.cardGridItem.empty {
  @apply hidden md:block;
}

.cardGrid {
  @apply md:pb-12; 
}
</style>