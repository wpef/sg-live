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
  margin-bottom: 22px;

  background: url("assets/icons/see.svg") no-repeat;
  padding-left: 32px; /* 16px icon + 16px margin  */
  margin-right: 77px;
}
</style>
 
<script setup>
const props = defineProps({ blok: Object })
const content = computed(() => props.blok.list.split("\n"));
</script>