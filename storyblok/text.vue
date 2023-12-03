<template>
  <div class="text" :class="classes" v-html="content">
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
  @apply pr-8 md:pr-56;
}


</style>
 
<script setup>

const props = defineProps({ blok: Object })
const content = computed(() => renderRichText(props.blok.content));
const classes = computed(() => {
  let ret = ''
  if (props.blok.tight) ret += 'tight '
  if (props.blok.Columns) ret += `md:columns-${props.blok.Columns}`
  return ret
});
</script>