<template>
  <div class="text" :style="'columns : ' + blok.Columns" v-html="content">
  </div>
</template>

<style>
.text h2 {
  @apply pb-9;
}

.text h3 {
  @apply font-medium mb-6;
}

.text {
  @apply gap-2 md:gap-12;
}

.text p {
  @apply pb-4 mt-2;
}

.text h2~p, .text h3~p, .text h4~p, .text h5~p { 
  /*Handle list items
  TODO : better handle */
  @apply leading-7;
}

.text-white * { /*TODO : à voir*/
  color : white;
}

</style>
 
<script setup>
const props = defineProps({ blok: Object })
const content = computed(() => renderRichText(props.blok.content));
</script>