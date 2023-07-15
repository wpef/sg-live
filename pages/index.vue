<script setup>
const story = await useStoryblok('home', { version: 'draft' })
</script>
 
<template>
  <section>
    <StoryblokComponent v-if="story" :blok="story.content" />
  </section>
</template>