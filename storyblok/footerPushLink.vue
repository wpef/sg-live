<template>
  <section class="footerPush container" v-editable="blok">

    <footerPushItem v-for="(push, index) in [data1, data2]" :key="index" v-if="push?.content?.footerPush" :push="push.content.footerPush[0]" :index="index"/>

  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object });

// I know... I've tried... 
// const data = await Promise.all(
//   props.blok.items.map(async (item) => {
//     const story = await useAsyncStoryblok(item, {
//       version: 'draft',
//       find_by: 'uuid'
//     });
//     console.log(story);
//     return story;
//   })
// );

const data1 = await useAsyncStoryblok(props.blok.items[0], {
      version: 'draft',
      find_by: 'uuid'
  });

  const data2 = await useAsyncStoryblok(props.blok.items[1], {
      version: 'draft',
      find_by: 'uuid'
  });

</script>

<style scoped>
section.footerPush {
  @apply flex flex-row gap-6 flex-wrap md:flex-nowrap;
  @apply py-16;
}
</style>