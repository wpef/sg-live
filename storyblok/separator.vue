<template>
  <section class="separator">
    <div class="container" v-editable="blok">
      <div :class="(blok.line ? 'border-t' : '') + ' pt-' + blok.space"></div>
  </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object })
</script>