<template>
      <div class="wrapper">
        <div class="item" v-for="(item, index) in blok.items" :key="blok._uid">
          <h4 class="h6">{{ item.title }}</h4>
          <p class="p2">{{ item.content  }}</p>
        </div>
      </div>
</template>
 
<script setup>
const props = defineProps({ 
  blok: Object,
  white: Boolean
})
</script>

<style scoped>
.title {
  @apply max-w-lg pr-40 mb-6;
}

.wrapper {
  @apply grid grid-cols-2 gap-x-12;
}

.item {
  @apply pb-14;
}

.item h4 {
  @apply pb-6;
}
</style>