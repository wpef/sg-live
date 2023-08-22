<template>
  <div class="text mb-4" :style="'columns : ' + blok.Columns" v-html="content">
  </div>
</template>

<style>
.text h2 {
  margin-bottom: 38px;
}

.text h3 {
  font-weight: 500;
  margin-bottom: 21px;
}

.text {
  column-gap: 49px;
}

.text p {
  margin-bottom: 18px;
}
</style>
 
<script setup>
const props = defineProps({ blok: Object })
const content = computed(() => renderRichText(props.blok.content));
</script>