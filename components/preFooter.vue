<template>

  <div class="preFooter container">
    <div class="w-1/2 flex flex-row">
      <div class="w-1/2">
        <CardGridItem :blok="blok1" :white="true" />
      </div>
      <div class="w-1/2 flex flex-wrap flex-row">
        <div v-for="blok in sbloks" class="footerblok">
          <div class="content">
            <h4 v-if="blok.title" class="h5 pb-4 text-white">{{ blok.title }}</h4>
            <p v-if="blok.description" class="p2 text-white">{{ blok.description }}</p>
          </div>
        </div>
        <CardGridItem :blok="sbloks[0]" :white="true"/>
        <CardGridItem :blok="sbloks[1]" :white="true"/>
      </div>
    </div>
  </div>

</template>

<style scoped>
.preFooter{
  @apply flex flex-row-reverse;
  background-color: #191919;;
}
</style>

<script setup>
const props = defineProps({ bloks: Array });
const blok1 = props.bloks[0];
const sbloks = [props.bloks[1], props.bloks[2]];
</script>