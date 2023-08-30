<template>
  <div class="wrapper text-white">
    <!-- {{ menu }} -->
    <div class="col" v-for="col in menu">
      <NuxtLink class="h6"
      :to="col.titleLink.url === '' ? '/' + col.titleLink.cached_url : col.titleLink.url">
      {{ col.title ?? titleLink.story.name }}
      </NuxtLink>
      <div class="listWrapper pt-3 pb-11">
        <CTA class="item p1 pb-1" v-for="(item, index) in col.items" :key="col._uid"
          :blok="{label : item.title, ...item, icon:false}"
        /> 
      </div>
    </div>
  </div>
</template>
 
<script setup>
const props = defineProps({
  menu: Object
})
</script>

<style scoped>
.wrapper {
  @apply grid grid-cols-2 gap-x-12;
}
</style>