<template>
    <ul v-editable="blok" class="textList mb-4" :class="blok.columns == 2 ? 'md:columns-2' : ''">
      <li :class="blok.number ? 'list-decimal' : 'list-image-[url(/icons/check.svg)]'" v-for="item in content">{{ item }}</li>
    </ul>
</template>

<style scoped>

.textList {
  @apply list-inside;
}

li {
  color: var(--sg-gris-texte, #505050);
  font-size: 16px;
  margin-bottom: .88rem;
  line-height: 1.4rem;
  letter-spacing: -0.32px;  
}

li > *{
  display: inline-block !important;
  vertical-align: middle !important;
}

</style>
 
<script setup>
const props = defineProps({ blok: Object })
const content = computed(() => props.blok.list.split("\n").filter( n => n));
</script>