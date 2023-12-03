<template>
  <div class="SocialBar wrapper">
    <div class="item" v-for="item in iconLinks">
    <NuxtLink class="text-white" :to="item.link?.url" target="_blank" :title="item.label">
      <Icon :name="item.icon" :size="20" color="white" />
    </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.SocialBar.wrapper {
  @apply flex flex-row gap-8;
}

.SocialBar .item {
  @apply w-5 h-auto;
}
</style>
 
<script setup>
const props = defineProps({
  iconLinks: Object
})
</script>