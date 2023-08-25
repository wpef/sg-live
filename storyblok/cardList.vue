<template>
  <section class="container">
  <h2 class="h2 border-b">{{ blok.title }}</h2>
  <div class="flex flex-wrap flex-row w-full">
    <cardListItem
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

<style scoped>
h2 {
  @apply pb-5 mb-5;
}

section {
  @apply pt-36;
}
</style>