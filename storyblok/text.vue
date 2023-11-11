<template>
  <div class="text" :class="blok.tight ? 'tight' : ''" :style="'columns : ' + blok.Columns" v-html="content">
  </div>
</template>

<style>

.text {
  @apply md:pr-24;
}

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

.text-white p,
.text-white h1,
.text-white h2,
.text-white h3,
.text-white h4,
.text-white h5,
.text-white h6,
.text-white .text p,
.text-white .text h1,
.text-white .text h2,
.text-white .text h3,
.text-white .text h4,
.text-white .text h5,
.text-white .text h6
{
  color : white;
}

</style>
 
<script setup>
const props = defineProps({ blok: Object })
const content = computed(() => renderRichText(props.blok.content));
</script>