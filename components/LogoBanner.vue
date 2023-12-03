<template>
  <div class="PartnerBanner wrapper flex flex-row gap-8" v-if="logos && logos[0]">
    <div class="item flex items-center w-28" v-for="item in logos">
      <img :src="item.filename" :alt="item.alt"/>
    </div>
  </div>
</template>
 
<script setup>
const props = defineProps({
  logos: Object
})
</script>