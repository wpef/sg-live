<template>
    <div v-editable="blok" class="w-1/2 pr-12">
      <h2 v-if="blok.title">{{ blok.Title }}</h2>
    </div>
    <hr>
  <div class="text mb-4" v-html="content"></div>
</template>

<style>

</style>
 
<script setup>
const props = defineProps({ blok: Object })
const content = computed(() => renderRichText(props.blok.content));
</script>