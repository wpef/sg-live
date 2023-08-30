<template>

  <div class="preFooter bg-[#191919]">
    <div class="container">
      <div class="w-1/2 flex flex-row gap-4">
        <div class="w-1/2">
          <CardGridItem :blok="blok1" :white="true" />
        </div>
        <div class="w-1/2 flex flex-wrap flex-row gap-4">
          <div v-for="blok in sbloks" class="footerblok">
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
.footerblok {
  @apply w-full;
  @apply p-6;
  border : 1px solid #333333;
}

.content {
  @apply flex flex-col;
}

.content > p {
  color : #666;
}
</style>

<script setup>
const props = defineProps({ bloks: Array });
const blok1 = props.bloks[0];
const sbloks = [props.bloks[1], props.bloks[2]];
</script>