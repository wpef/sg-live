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
  @apply grid md:grid-cols-2 gap-x-4 md:gap-x-6;
}

.item {
  @apply pb-12 lg:pb-14;
}

.item h4 {
  @apply pb-2 lg:pb-6;
}
</style>