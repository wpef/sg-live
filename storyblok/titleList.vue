<template>
  <section class="titleList_section container flex flex-row flex-wrap justify-end">
    <!-- <h1>Foulqui</h1> -->
    <div v-for="blok in blok.Items" :key="blok._uid" class="flex-col w-2/3">
      <h3 class="border-b">{{ blok.Title }}</h3>
      <p class="w-2/3 float-right">{{ blok.content }}</p>
    </div>
  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object })
</script>

<style scoped>
section.titleList_section {
  margin-top: 2.5rem;
}

section.titleList_section div {
  margin-top: 17px;
}

.titleList_section h3 {
  padding-bottom: 10px;
  margin-bottom: 31px;
}
</style>