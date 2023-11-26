<template>
    <ul v-editable="blok" class="textList mb-4" :class="blok.columns == 2 ? 'md:columns-2' : ''">
      <li :class="blok.number ? 'number' : 'icon'" v-for="item in content">{{ item }}</li>
    </ul>
</template>

<style scoped>

li {
  color: var(--sg-gris-texte, #505050);
  font-size: 16px;
  margin-bottom: .88rem;
  line-height: 1.4rem;
  letter-spacing: -0.32px;
  @apply pl-8 mr-12;
  
}
li.icon {
  background-repeat: no-repeat;
  background-image: url("/icons/check.svg");
}

li.number {
  list-style-type: decimal;
}
</style>
 
<script setup>
const props = defineProps({ blok: Object })
const content = computed(() => props.blok.list.split("\n").filter( n => n));
</script>