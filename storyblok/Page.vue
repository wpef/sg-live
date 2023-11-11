<template>
  <div class="page">
    <div v-editable="blok" class="hero" v-if="blok.title || blok.subtitle" :class="blok.fullHeight ? 'h-screen' : 'h-[30rem]'" :style="{
      backgroundColor: blok.heroBgColor !== '' ? blok.heroBgColor : '#003966',
      backgroundImage: `url(${blok.heroImage?.filename})`,
    }">
      <div class="container">
        <div class="heroTitle text-white">
          <h1 class="h1" 
            v-if="blok.title" 
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-anchor-placement="bottom"
          >{{ blok.title }}</h1>
          <h2 class="h4" v-if="blok.subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-once="true"
            data-aos-anchor-placement="bottom"
          >{{ blok.subtitle }}</h2>
        </div>
      </div>
    </div>
    <div class="body">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
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
  @apply relative bg-cover bg-center;
  margin-top: 0 !important;
}

.hero .heroTitle {
  @apply pr-12 lg:pr-48 xl:pr-[42rem];
  @apply absolute bottom-12;
  max-width: 1440px;
}

.hero .heroTitle h1 {
  @apply pb-6;
}


/*global*/

.textImage .text p {
  @apply p1;
}

/* GENERAL */
/* Tailwind = lg: */ 
@media (min-width: 1024px) {
  .h1,
  .text h1 {
    letter-spacing: -.24rem;
  }

  .h2,
  .text h2 {
    font-weight: 400;
    line-height: 120%;
    letter-spacing: -2px;
  }

  .h3,
  .text h3 {
    /* SG/Head 3 */
    font-size: 26px;
    font-weight: 400;
    line-height: 124%;
    /* 32.24px */
    letter-spacing: -1.04px;
  }

  .h4,
  .text h4 {
    /* SG/Head 4 */
    font-size: 20px;
    font-weight: 500;
    line-height: 132%;
    /* 26.4px */
    letter-spacing: -0.8px;
  }

  .h5,
  .text h5 {
    /* SG/Head 5 */
    font-size: 20px;
    font-weight: 400;
    line-height: 132%;
    /* 26.4px */
    letter-spacing: -0.4px;
  }

  .h6,
  .text h6 {
    /* SG/Head 6 */
    font-size: 16px;
    font-weight: 500;
    line-height: 132%;
    /* 21.12px */
    letter-spacing: -0.32px;
  }

  .p1, .p1 p {

    /* SG/Body 1 */
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    /* 22.4px */
    letter-spacing: -0.32px;
  }

  .p2 , .p2 p {

    /* SG/Body 2 */
    font-size: 14px;
    font-weight: 400;
    line-height: 132%;
    /* 18.48px */
    letter-spacing: -0.28px;
  }

  .button1 {

    /* SG/Bouton 1 */
    font-size: 16px;
    font-weight: 500;
    line-height: 100%;
    /* 16px */
    letter-spacing: -0.32px;
  }

  .button2 {

    /* SG/Bouton 2 */
    font-size: 16px;
    font-weight: 400;
    line-height: 100%;
    /* 16px */
    letter-spacing: -0.32px;
  }

  .quote {
    /* SG/Quote 1 */
    font-size: 5rem;
    font-weight: 300;
    line-height: 120%;
    /* 96px */
  }

  p,
  li {
    font-size: 16px;
    font-weight: 400;
    line-height: 132%;
    /* 18.48px */
    letter-spacing: -0.28px;
  }
  
}

.h1,
.text h1 {
  /* SG/Head 1 */
  font-family: Inter;
  @apply text-4xl md:text-6xl;
  font-style: normal;
  font-weight: 400;
  line-height: 112%;
  /* 71.68px */
  letter-spacing: -.12rem;
}

.h2,
.text h2 {
  /* SG/Head 2 */
  font-family: Inter;
  @apply  md:text-[2.5rem] text-3xl;
  font-style: normal;
  font-weight: 400;
  line-height: 124%;
  /* 48px */
  letter-spacing: -1.3px;
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

.p1, .p1 p {
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

.p2 , .p2 p {
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
  color: var(--sg-noir-texte, #666);

  /* SG/Quote 1 */
  font-family: Inter;
  font-size: 5rem;
  font-style: normal;
  font-weight: 300;
  line-height: 120%;
  /* 96px */
}

blockquote h4:before, 
blockquote h4:after {
  @apply quote;
}

.page p,
.page li {
  color: var(--sg-gris-texte, #505050);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 132%;
  letter-spacing: -0.28px;
}



/* FIXES */

.container {
  @apply mt-4 mb-6 pb-6 pt-4 px-6 lg:px-16;
  /* à voir*/
  max-width: 1440px !important;
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

.text-white li {
  color : white !important;
  background-image: url("/icons/see-white.svg") !important;
}

/* glbal components */

.footerBody a.h6 {
  @apply !text-white;
}

.burgerMenu .navHead {
  @apply h4;
}


</style>