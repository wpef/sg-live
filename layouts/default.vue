<template>
  <main>
    <Header />
    <slot />
    <Footer />
    <Whatsapp class="fixed bottom-4 right-4"/>
  </main>
</template>

<style>
/*global*/

.textImage .text p {
  @apply p1;
}

/* GENERAL */

.h1,
.text h1 {
  /* SG/Head 1 */
  @apply text-4xl md:text-[4rem];
  @apply tracking-[-.12rem] lg:tracking-[-.24rem];
  line-height: 112%;
}

.h2,
.text h2 {
  /* SG/Head 2 */
  @apply  text-3xl md:text-[2.5rem];
  @apply tracking-[-.08125rem] lg:tracking-[-.125rem];
  line-height: 124%;
}

.h3,
.text h3 {
  /* SG/Head 3 */
  font-size: 1.625rem;
  line-height: 124%;
  letter-spacing: -0.065rem;
}

.h4,
.text h4 {
  /* SG/Head 4 */
  @apply text-xl; 
  line-height: 132%;
  font-weight: 500;
  letter-spacing: -0.05rem;
}

.h5,
.text h5 {
  /* SG/Head 5 */
  @apply text-xl; 
  line-height: 132%;
  letter-spacing: -0.025rem;
}

.h6,
.text h6 {
  /* SG/Head 6 */
  @apply text-base;
  font-weight: 500;
  line-height: 132%;
  letter-spacing: -0.02rem;
}

.page p, .page li,
.p1, .p1 p {
  color: #505050;
  @apply text-base;
  line-height: 140%;
  letter-spacing: -0.02rem;
}

.p2 , .p2 p {
  @apply text-sm;
  line-height: 132%;
  letter-spacing: -0.0175rem;
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
p {
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  color: var(--sg-color-styles-noir-texte, #1E1E1E);
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
.p1.text-white, .p2.text-white,
.text.text-white p, .text-white p,
.text-white h1, .text.text-white h1,
.text.text-white h2, .text-white h2,
.text.text-white h3, .text-white h3,
.text.text-white h4, .text-white h4,
.text.text-white h5, .text-white h5,
.text.text-white h6, .text-white h6
{
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