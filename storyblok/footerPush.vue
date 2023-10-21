<template>
  <section class="footerPush container" v-editable="blok">

    <footerPushItem v-for="(push, index) in blok.items" :key="blok._uid" :push="push" :index="index"/>

  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped>
section.footerPush {
  @apply flex flex-row gap-6 flex-wrap md:flex-nowrap;
  @apply py-16;
}

</style>