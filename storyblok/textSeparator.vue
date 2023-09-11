<template>
  <div :class="blok.line ? 'border-t ' : '' + space"></div>
</template>
<script setup>
const props = defineProps({ blok: Object })
const space = computed(() => {
  return "pt-"+props.blok.space;
})
</script>