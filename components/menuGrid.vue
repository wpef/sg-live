<template>
  <div class="wrapper ">
    <!-- {{ menu }} -->
    <div class="col" v-for="col in menu">
      <NuxtLink class="h6"
      :to="col.titleLink.url === '' ? '/' + col.titleLink.cached_url : col.titleLink.url">
      {{ col.title ?? titleLink.story.name }}
      </NuxtLink>
      <div class="listWrapper">
        <CTA class="item  text-[#666] p1 pb-1" v-for="(item, index) in col.items" :key="col._uid"
          :blok="{label : item.title ?? item.link.story?.name, ...item, icon:false}"
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
  @apply sm:grid sm:grid-cols-2 md:gap-x-12;
}

.listWrapper {
  @apply py-4 md:pb-11;
}
</style>