<template>
  <div class="PartnerBanner wrapper flex flex-row gap-8">
    <div class="item flex items-center w-28" v-for="item in logos">
      <img :src="item.filename" :alt="item.alt"/>
    </div>
  </div>
</template>

<style scoped>
.PartnerBanner.wrapper {
  /* @apply flex flex-row gap-8; DONT WORK FOR SOME REASON */
}
</style>
 
<script setup>
const props = defineProps({
  logos: Object
})
</script>