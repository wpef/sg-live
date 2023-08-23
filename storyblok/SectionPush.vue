<template>
  <section class="push_section flex flex-wrap flex-row">
    <div class="flex flex-wrap flex-row">

      <h2 class="h2 border-b" v-if="blok.title">{{ blok.title }}</h2>
      <h3 class="h4" v-if="blok.subtitle">{{ blok.subtitle }}</h3>
    </div>

    <div v-if="blok.pushs.length > 0" class="w-full flex space-x-4">
      <div v-for="push in blok.pushs" :key="blok._uid"
        :style="{ backgroundImage: `url(${push.background.filename})`, minHeight: '420px' }"
        class="push w-1/3 h-auto relative">
        <div class="push_content absolute left-6 bottom-6">
          <h4 class="text-white h3 mb-4">{{ push.title }}</h4>
          <CTA class="text-white" :blok="{ label: 'Découvrir', white: true, ...push }" />
        </div>
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
section.push_section {
  margin-top: 2.5rem;
  padding-top: 39px;
  margin-bottom: 1rem;
}

.push_section .h2 {
  margin-bottom: 31px;
  padding-bottom: 36px;

  padding-right: 40%;
}

.push_section .h4 {
  padding-bottom: 18px;
}

</style>