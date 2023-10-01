<template>
  <section class="separator">
    <div class="container" v-editable="blok">
      <!-- todo : handle pour de vrai -->
      <!-- handle background color -->
      <!-- <div :class="blok.line ? 'border-t' : ''"></div> -->
  </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped>


</style>