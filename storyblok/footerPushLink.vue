<template>
  <section class="footerPush container" v-editable="blok">

    <footerPushItem v-for="(push, index) in [data1, data2]"
      :key="index"
      :push="push.content.footerPush ? push.content.footerPush[0] : null"
      :index="index"
      @click="push.full_slug ? navigateTo('/' + push.full_slug) : '' "
    />

  </section>
</template>
 
<script setup>
const props = defineProps({ blok: Object });

const redirect = (link) => console.log('redirect : ', link)

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