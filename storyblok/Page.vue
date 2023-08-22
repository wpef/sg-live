<template>
  <div v-editable="blok" class="px-16">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>

<style>
/* div {
  max-width: 1440px;
} */

h2 {
  color: var(--sg-texte-noir, #1E1E1E);
  font-family: Inter;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 3rem */
  letter-spacing: -0.125rem;
}

h3 {
  color: var(--sg-texte-noir, #1E1E1E);
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 1.25rem */
  letter-spacing: -0.05rem;
}

p, li {
  color: var(--sg-gris-texte, #505050);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 132%; /* 18.48px */
  letter-spacing: -0.28px;
}

</style>