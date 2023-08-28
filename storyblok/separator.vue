<template>
  <section class="separator">
    <div class="container">
      <div :class="blok.line ? 'border-t' : ''"></div>
  </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped>


</style>