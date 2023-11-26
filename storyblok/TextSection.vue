<template>
  <section class="textSection" :class="bgClasses" :style="{
    backgroundColor : blok.backgroundColor,
    backgroundImage : `url(${blok.backgroundImage?.filename})`,
  }">
  <div class="container" v-editable="blok">
    <div v-if="blok.line === true" class="line"></div>
    <div class="textSectionContainer" :class="sectionClasses">      
      <div class="textSectionTitle lg:w-1/2" :class="blok.white ? 'text-white' : '' + !blok.title && !blok.subtitle ? 'hidden lg:block' : ''" >
        <h2 v-if="blok.title" class="h2"  data-aos="fade-up">{{ blok.title }}</h2>
        <h3 v-if="blok.subtitle" :class="blok.title ? 'h5' : 'h4'"  data-aos="fade-up">{{ blok.subtitle }}</h3>
      </div>
      <div v-if="!isTitle" class="textSectionRight lg:w-1/2" :class="blok.white ? 'text-white' : ''" data-aos="fade-up" data-aos-delay='300'>
        <StoryblokComponent v-for="(textBlok, index) in blok.right" v-editable="blok" :key="textBlok._uid" :blok="textBlok" data-aos="fade-up"/>
      </div>
      
      <div v-if="isTitle" class="w-full border-b"></div>
      
    </div> 
  </div>
  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object })
 
const sectionClasses = computed(() => {
  let ret = ''
  if (props.blok.backgroundColor !== undefined && props.blok.backgroundColor !== '' && props.backgroundImage?.filename !== '')
    ret += 'hasBg '
  else 
    ret += 'isWhite '

  if (props.blok.right.length === 0)
    ret += 'isTitle'
  else
    ret += 'isText'


    return ret;
  })

const bgClasses = computed(() => {
  return props.blok.backgroundImage ? 'bg-cover bg-local bg-clip-border	bg-cover bg-center' : '';
})

const isTitle =  computed(()=>{
  return props.blok.right.length ===   0
})

</script>

<style scoped>&

.textSectionContainer {
  @apply flex flex-wrap md:flex-nowrap py-10;
  border-color: rgba(255, 255, 255, 0.20);  
}

.textSectionContainer.isText {
  @apply flex-col lg:flex-row gap-4 lg:gap-12;
}
.textSectionContainer.isTitle {
 @apply flex-row gap-4;   /* A voir : flex-col */
 @apply pb-2;
}

.textSectionContainer.hasBg {
  @apply lg:pt-14 lg:pb-14;
}

.textSectionContainer.textSectionContainer.isText.isWhite {
  @apply py-20 lg:pt-32;
}

.textSectionTitle > * {
  @apply max-w-lg;
}
.textSectionContainer h2 {
  @apply pb-6;
}

.textSectionContainer h3 {
  @apply pb-4;
}

.line {
  height : 1px;
  background-color: #CCCCCC;
  @apply -mb-0 md:-mb-20;
}
</style>