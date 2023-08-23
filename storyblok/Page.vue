<template>
  <div v-editable="blok" class="px-16">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>

<style>
.h1 {
  /* SG/Head 1 */
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 112%;
  /* 71.68px */
  letter-spacing: -3.84px;
}

.h2 {
  /* SG/Head 2 */
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 48px */
  letter-spacing: -2px;
}

.h3 {
  /* SG/Head 3 */
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 124%;
  /* 32.24px */
  letter-spacing: -1.04px;
}

.h4 {
  /* SG/Head 4 */
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 132%;
  /* 26.4px */
  letter-spacing: -0.8px;
}

.h5 {
  /* SG/Head 5 */
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 132%;
  /* 26.4px */
  letter-spacing: -0.4px;
}

.h6 {
  /* SG/Head 6 */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 132%;
  /* 21.12px */
  letter-spacing: -0.32px;
}

.p1 {
  color: var(--sg-gris-hard, #505050);

  /* SG/Body 1 */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 22.4px */
  letter-spacing: -0.32px;
}

.p2 {
  color: var(--sg-gris-hard, #505050);

  /* SG/Body 2 */
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 132%;
  /* 18.48px */
  letter-spacing: -0.28px;
}

.button1 {
  color: var(--sg-noir-texte, #1E1E1E);

  /* SG/Bouton 1 */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  /* 16px */
  letter-spacing: -0.32px;
}

.button2 {
  color: var(--sg-noir-texte, #1E1E1E);

  /* SG/Bouton 2 */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  /* 16px */
  letter-spacing: -0.32px;
}

.quote {
  color: var(--sg-noir-texte, #1E1E1E);

  /* SG/Quote 1 */
  font-family: Inter;
  font-size: 80px;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
  /* 96px */
}

h2 {
  color: var(--sg-texte-noir, #1E1E1E);
  font-family: Inter;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 3rem */
  letter-spacing: -0.125rem;
}

h3 {
  color: var(--sg-texte-noir, #1E1E1E);
  font-family: Inter;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  /* 1.25rem */
  letter-spacing: -0.05rem;
}

p,
li {
  color: var(--sg-gris-texte, #505050);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 132%;
  /* 18.48px */
  letter-spacing: -0.28px;
}</style>