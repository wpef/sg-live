<template>
  <div
    v-editable="blok"
    class="w-full h-1/2 p-0 bg-[#f7f6fd] overflow-hidden"
    :style="{ backgroundImage: `url(${blok.background.filename})`, minHeight: '50vh' }"
  >
    <StoryblokComponent
      class="mx-4"
      v-for="blok in blok.content"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>

<style scoped>
.text h1 {
  font-size: 6em;
}
.text h2 {
  font-size: 4em;
}
.text h3 {
  font-size: 3.5em;
}
.text h4 {
  font-size: 3.1em;
}
.text h5, .text h6 {
  font-size: 2em;
}
</style>