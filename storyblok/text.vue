<template>
  <div class="text" :style="'columns : ' + blok.Columns" v-html="content">
  </div>
</template>

<style>
.text h2 {
  @apply pb-9;
}

.text h3 {
  font-weight: 500;
  margin-bottom: 21px;
}

.text {
  column-gap: 49px;
}

.text p {
  margin-bottom: 36px;
}

.text h2~p, .text h3~p, .text h4~p, .text h5~p { 
  /*Handle list items
  TODO : better handle */
  line-height: 1.8rem;
}

.text-white * { /*TODO : à voir*/
  color : white;
}

</style>
 
<script setup>
const props = defineProps({ blok: Object })
const content = computed(() => renderRichText(props.blok.content));
</script>