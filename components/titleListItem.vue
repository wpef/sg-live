<template>
  <div class="item" v-editable="blok" :class="'item-' + index">
    <div class="itemTitle w-full lg:w-3/4" @click="isOpen = !isOpen" data-aos="fade-up">
      <h3 class="h4" :class="white ? 'text-white' : ''">{{ blok.title }}</h3>
      <svg  v-if="expand" class="icon"  :class="isOpen ? 'open' : 'closed'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
        fill="none">
        <path d="M13 10.5L8 5.5L3 10.5" :stroke="white ? '#FFF' : '#0B1B33'" />
      </svg>

    </div>
    <div class="border-t w-full lg:w-3/4" data-aos="fade-up"></div>
    <p v-if="!expand || (expand && isOpen)" class="lg:w-1/2 float-right transition-all" :class="white ? 'text-white ' : ''"  data-aos="fade-up" data-aos-delay='500'>{{ blok.content }}</p>
  </div>
</template>

<style scoped>
.item {
  @apply flex flex-col justify-end items-end;
  @apply pb-14;
}

.itemTitle {
  @apply flex flex-row justify-between;
}

.item h3 {
  @apply pb-3;
}

.item p {
  @apply pt-8;
}

.icon {
  @apply rotate-90;
}

.icon.open {
  @apply rotate-180;
}
</style>
 
<script setup>
const props = defineProps({
  blok: Object,
  expand: Boolean,
  white: Boolean,
  index: Number,
  isOpen: Boolean
})
</script>