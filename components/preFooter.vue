<template>
  <div class="preFooter bg-[#191919] py-12">
    <div class="container">
      <div class="w-full lg:w-1/2 flex flex-col md:flex-row gap-4">
        <NuxtLink :to="toUrl(blok1.cta[0])" class="w-full lg:w-1/2">
          <div class="cardGridItem" :style="style">
            <div class="content">
              <h4 v-if="blok1.title" class="h5 pb-1" :class="blok1.white ? 'text-white' : null">{{ blok1.title }}</h4>
              <p v-if="blok1.description" class="p2" :class="blok1.white ? 'text-white' : null">{{ blok1.description }}
              </p>
            </div>
          </div>
        </NuxtLink>
        
        <sBloks :sbloks="sbloks"/>
      </div>

    
    </div>
  </div>
</template>

<style scoped>
.preFooter .container {
  @apply flex flex-row-reverse;
}

.cardGridItem {
  @apply h-full p-6;
  @apply relative;
  background-color: var(--bg-color);
  border-color: var(--border-color);
}
</style>

<script setup>
const props = defineProps({ bloks: Array });
const blok1 = props.bloks[0];
const sbloks = [props.bloks[1], props.bloks[2]];

const style = computed(() => {
  return { 
    '--bg-color' : blok1.backgroundColor,
    '--border-color' :  blok1.white ? 'rgba(255, 255, 255, 0.20)' : '',
  }
})

const toUrl = function (blokCta) {
  const link = blokCta.link;
  const https = "https://";

  if (link.linktype === 'story') {
    return '/' + link.cached_url
  }
  if (link.linktype == 'url') {
    if (link.url.startsWith(https))
      return link.url
    return https + link.url
  }
}
// console.log(sbloks);
</script>