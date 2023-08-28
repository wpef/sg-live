<template>
  <div v-editable="blok" class="page">
    <div class="hero" v-if="blok.title && blok.subtitle" :class="blok.heroImage?.filename ? 'h-screen' : ''" :style="{
      backgroundColor: blok.heroBgColor !== '' ? blok.heroBgColor : '#003966',
      backgroundImage: `url(${blok.heroImage?.filename})`,
    }">
      <div class="container">
        <div class="heroTitle text-white">
          <h1 class="h1" v-if="blok.title">{{ blok.title }}</h1>
          <h2 class="h2" v-if="blok.subtitle">{{ blok.subtitle }}</h2>
        </div>
      </div>
    </div>
    <div class="body">
    <StoryblokComponent class="body" v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
    </div>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>

<style>
/*local*/
div.hero {
  @apply pt-64;
  @apply relative bg-cover;
  min-height: 30rem;
  margin-top: 0 !important;
}

.hero .heroTitle {
  @apply pr-96;
  @apply absolute bottom-12;
  max-width: 1440px; 
}

.hero .heroTitle h1 {
  @apply pb-6;
}


/*global*/

.textImage .text p {
  @apply p2;
  color : #1E1E1E;
}

/* GENERAL */

.h1,
.text h1 {
  /* SG/Head 1 */
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 112%;
  /* 71.68px */
  letter-spacing: -3.84px;
}

.h2,
.text h2 {
  /* SG/Head 2 */
  font-family: Inter;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 48px */
  letter-spacing: -2px;
}

.h3,
.text h3 {
  /* SG/Head 3 */
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
  line-height: 124%;
  /* 32.24px */
  letter-spacing: -1.04px;
}

.h4,
.text h4 {
  /* SG/Head 4 */
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 132%;
  /* 26.4px */
  letter-spacing: -0.8px;
}

.h5,
.text h5 {
  /* SG/Head 5 */
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 132%;
  /* 26.4px */
  letter-spacing: -0.4px;
}

.h6,
.text h6 {
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
  /* color: var(--sg-gris-hard, #505050); */

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
}

.body section {
  @apply mt-4 mb-6 pb-6 pt-4;
}



/* FIXES */

.container {
  @apply mt-4 mb-6 pb-6 pt-4 px-16;
  /* à voir*/
  max-width: 1440px;
  margin: auto;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
li,
button,
span,
a {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-smooth: never;
}

/*forcing*/
.p1.text-white,
.p2.text-white,
.text.text-white p, 
.text.text-white h2,
.text.text-white h3,
.text.text-white h4,
.text.text-white h5,
.text.text-white h6 {
  color : white;
}

</style>