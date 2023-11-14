<template>

<PageHero v-if="blok.title || blok.subtitle" :blok="blok"/>
<div class="body">
  <section class="textImage" :style="{ backgroundColor : blok.backgroundColor }">
    <div class="container" v-editable="blok">
    <div class="text">
      <div class="info-wrapper">

        <div class="infos lg:w-1/2"  v-for="blok in blok.infos" :key="blok._uid" :blok="blok">
          <TitleItem :blok="blok"/>
        </div>
      
      </div>
      <div class="booking-wrapper flex flex-col lg:w-1/2">
        <div class="content">
          <TitleItem class="content" :blok="blok.booking[0]"/>
        </div>
        <CTA :blok="blok.booking[1]"/>
      </div>
    </div>
    <div class="image w-full lg:w-1/2"  data-aos="fade-up" data-aos-delay="500">
      <NuxtImg
        v-if="blok.image"
        provider="storyblok"
        :src="blok.image?.filename" 
        :alt="blok.image?.alt"
        :modifiers="{ filters: { focal: blok.image?.focus } }"
        height="680"
        width="648"
      />
    </div>
  </div>
  </section>
</div>
</template>

<script setup>
const props = defineProps({ blok: Object });
const content = computed(() => renderRichText(props.blok.body));
</script>

<style scoped>
.container {
  @apply flex flex-wrap flex-row;
  @apply py-6 lg:py-12;
}

.text {
  @apply flex flex-wrap flex-row content-between;
  @apply lg:w-1/2;
  @apply pb-14 md:pb-0;
}

.text .p {
  @apply pb-0;
}

.info-wrapper {
  @apply w-full flex flex-row flex-wrap lg:flex-nowrap gap-4;
}

.booking-wrapper .content {
  @apply  py-8 lg:pt-16
}

</style>