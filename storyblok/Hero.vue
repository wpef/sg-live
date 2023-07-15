<template>
  <div
    v-editable="blok"
    class="w-full h-1/2 p-0 bg-[#f7f6fd] overflow-hidden"
    :style="{ backgroundImage: `url(${blok.background.filename})`, minHeight: '50vh' }"
  >
    <StoryblokComponent
      v-for="blok in blok.content"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>