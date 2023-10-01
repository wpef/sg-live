<template>
  <section class="container"  v-editable="blok" >
  <h2 class="h2 border-b"
    data-aos="fade-up"
  >{{ blok.title }}</h2>
  <div class="flex flex-wrap flex-row w-full">
    <cardListItem
      v-for="item in blok.items"
      :key="item._uid"
      :blok="item"
      data-aos="fade-up"
    />
  </div>
</section>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
h2 {
  @apply pb-5 mb-5;
}

section {
  @apply pt-20 pb-16 md:pt-36 md:pb-32;
}
</style>