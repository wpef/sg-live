<template>
  <div class="sBloks md:w-1/2 flex flex-wrap flex-row gap-4">
    <NuxtLink :to="'/'" v-for="blok in sbloks" class="footerblok">
      <div :to="'/'" class="content">
        <h4 v-if="blok.title" class="h5 pb-1 text-white">{{ blok.title }}</h4>
        <p v-if="blok.description" class="p2 text-white">{{ blok.description }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({ sbloks : Array })
</script>

<style scoped>
.sBloks .content {
  @apply flex flex-col;
}

.sBloks .content>p {
  color: #666;
}

.footerblok {
  @apply w-full;
  @apply p-6;
  border: 1px solid #333333;
}
</style>