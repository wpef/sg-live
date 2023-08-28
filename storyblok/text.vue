<template>
  <div class="text" :class="blok.tight ? 'tight' : ''" :style="'columns : ' + blok.Columns" v-html="content">
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

.text h2~p+p, .text h3~p+p, .text h4~p+p, .text h5~p+p { 
  /*Handle list items
  TODO : better handle */
  @apply leading-7;
}

.text h2~p, .text h3~p, .text h4~p, .text h5~p { 
  @apply mt-4;
}

.text.tight h2~p, .text.tight h3~p, .text.tight h4~p, .text.tight h5~p { 

  /* SG/Body 2 */
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.28px;
}

.text.tight {
  @apply pr-8 md:pr-40;
}

.text-white * { /*TODO : à voir*/
  color : white;
}

</style>
 
<script setup>
const props = defineProps({ blok: Object })
const content = computed(() => renderRichText(props.blok.content));
</script>