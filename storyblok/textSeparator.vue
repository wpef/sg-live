<template>
  <div :class="blok.line ? 'border-t ' : '' + space" v-editable="blok"></div>
</template>
<script setup>
const props = defineProps({ blok: Object })
const space = computed(() => {
  return "pt-"+props.blok.space/2 + " md:pt-"+props.blok.space;
})
</script>