<template>
    <h2 class="title h4" data-aos="fade-up">{{ blok.title }}</h2>
    <p class="transition-all content" data-aos="fade-up" v-for="line in content">{{ line }}</p>
</template>

<style scoped>
.h4 {
  @apply pt-8 pb-5;
  color: var(--sg-color-styles-noir-texte, #1E1E1E);

  /* SG Text styles/Head 4 */
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 132%; /* 1.65rem */
  letter-spacing: -0.05rem;
}
</style>
 
<script setup>
const props = defineProps({
  blok: Object,
})
const content = computed(() => props.blok.content.split('\n'));
</script>