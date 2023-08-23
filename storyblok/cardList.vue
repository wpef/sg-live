<template>
  <div
    v-editable="blok"
    class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-center"
  >
  <h2>{{ blok.title }}</h2>
    <cardListItem
      v-for="blok in blok.items"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>