<template>

  <div class="preFooter bg-[#191919] py-12">
    <div class="container">
      <div class="w-1/2 flex flex-row gap-4">
        <div class="w-1/2">
          <div class="cardGridItem" :style="{
            borderColor: blok1.white ? 'rgba(255, 255, 255, 0.20)' : '',
            backgroundColor: blok1.backgroundColor
          }">
            <div class="content">
              <!-- TODO : handle CTA -->
              <h4 v-if="blok1.title" class="h5 pb-4" :class="blok1.white ? 'text-white' : null">{{ blok1.title }}</h4>
              <p v-if="blok1.description" class="p2" :class="blok1.white ? 'text-white' : null">{{ blok1.description }}</p>
            </div>
            <CTA v-if="blok1.cta[0]" :blok="blok1.cta[0]" />
          </div>
        </div>
        <div class="sBloks w-1/2 flex flex-wrap flex-row gap-4">
          <div v-for="blok in sbloks" class="footerblok">
            <!-- TODO : handle CTA -->
            <div class="content">
              <h4 v-if="blok.title" class="h5 pb-4 text-white">{{ blok.title }}</h4>
              <p v-if="blok.description" class="p2 text-white">{{ blok.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.preFooter .container {
  @apply flex flex-row-reverse;
}

.cardGridItem {
  @apply h-60 p-6;
  @apply relative;
}

.footerblok {
  @apply w-full;
  @apply p-6;
  border : 1px solid #333333;
}

.sBloks .content {
  @apply flex flex-col;
}

.sBloks .content > p {
  color : #666;
}
</style>

<script setup>
const props = defineProps({ bloks: Array });
const blok1 = props.bloks[0];
const sbloks = [props.bloks[1], props.bloks[2]];
</script>