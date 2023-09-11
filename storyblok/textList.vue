<template>
    <ul class="textList mb-4" :class="blok.columns == 2 ? 'columns-2' : ''">
      <li v-for="item in content">{{ item }}</li>
    </ul>
</template>

<style scoped>
li {
  color: var(--sg-gris-texte, #505050);
  font-size: 16px;
  line-height: 132%; /* 21.12px */
  letter-spacing: -0.32px;
  background-repeat: no-repeat;
  background-image: url("/icons/see.svg");
  
  @apply pl-8 mr-12 mb-6;
}
</style>
 
<script setup>
const props = defineProps({ blok: Object })
const content = computed(() => props.blok.list.split("\n"));
</script>