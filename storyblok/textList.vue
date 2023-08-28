<template>
    <ul class="textList mb-4">
      <li v-for="item in content">{{ item }}</li>
    </ul>
</template>

<style scoped>
ul {
  columns: 2;
}


ul li {
  color: var(--sg-gris-texte, #505050);
  font-size: 16px;
  line-height: 132%; /* 21.12px */
  letter-spacing: -0.32px;
  background: url("/assets/icons/see.svg") no-repeat;
  
  @apply pl-8 mr-20 mb-6;
}
</style>
 
<script setup>
const props = defineProps({ blok: Object })
const content = computed(() => props.blok.list.split("\n"));
</script>