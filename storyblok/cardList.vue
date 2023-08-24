<template>
  <section class="container">
  <h2 class="p1 border-b">{{ blok.title }}</h2>
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
  padding-bottom: 19px;
  margin-bottom: 20px;
}
</style>