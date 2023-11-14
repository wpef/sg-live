<template>
  <div class="page">
    <PageHero v-if="blok.title || blok.subtitle" :blok="blok"/>
    <div class="body">
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
    </div>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>