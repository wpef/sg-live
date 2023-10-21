<template>
  <div class="grid wrapper" :class="'grid-cols-' + cols">
    <!-- {{ menu }} -->
    <div class="col" v-for="col in menu">
      <NuxtLink class="h6"
      :to="col.titleLink?.url === '' ? '/' + col.titleLink.cached_url : col.titleLink?.url">
      {{ col.title ?? titleLink?.story.name }}
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
  menu: Object,
  cols: { type: Number, required: false, default: 2 },
})
</script>

<style scoped>
.wrapper {
  @apply md:gap-x-12;
}

.listWrapper {
  @apply py-4 md:pb-11;
}
</style>