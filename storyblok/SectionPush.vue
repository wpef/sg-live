<template>
  <section class="push_section flex flex-wrap flex-row">
    <div class="flex flex-wrap flex-row">

    <h2 v-if="blok.title">{{ blok.title }}</h2>
    <h3 v-if="blok.subtitle">{{ blok.subtitle }}</h3>
    </div>

    <div v-if="blok.pushs.length > 0" class="w-full flex space-x-4">
      <div v-for="push in blok.pushs" :key="blok._uid"
        :style="{ backgroundImage: `url(${push.background.filename})`, minHeight: '420px' }"
        class="flex-grow"
      >
        <h4>{{ push.title }}</h4>
        <NuxtLink
        class="CTA"
        :to="push.link.url"
        >
          Découvrir
        </NuxtLink>
      </div>
    </div>

  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object })
 
// const sectionClasses = computed(() => {
//   return 
//   //   (props.blok.line === true ? 'border-t' :  "") + 
//   //   (props.blok.right.length > 0 ? '' : 'flex-wrap flex-row')
// })

// // const titleClasses = computed(() => {
// //   return  props.blok.right.length === 0 ? "border-b" : ""
// // })
</script>

<style scoped>
section.text_section {
  margin-top: 2.5rem;
  padding-top : 39px;
  margin-bottom: 1rem;
}

.text_section h2 {
  padding-bottom: 35px;
}
</style>