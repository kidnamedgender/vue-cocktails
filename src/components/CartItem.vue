<template>
  <div class="card flex-row max-w-[80%] mx-auto items-center">
    <div class="max-w-[150px]">
      <img class="max-h-[150px]" :src="image" alt="title" />
    </div>

    <div class="space-y-3 min-h-[140px] flex items-center">
      <div class="text-center md:text-left">
        <h1 class="text-[24px]">{{ title }}</h1>
        <p class="text-[14px] font-light">{{ (compound as Array<String>).slice(0, 2).join(', ').toLowerCase() }}...</p>
      </div>
    </div>
    <div class="flex items-center gap-5">
      <div>
        <p class="flex flex-col"><strong class="text-[24px]">{{ price }} руб.</strong></p>
      </div>
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <strong class="py-2 px-4 text-white font-bold rounded-[100px] bg-[#2f2832]">1</strong>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    parent_id: Number,
    title: String,
    image: String,
    price: Number,
    pop: Number,
    compound: Array<String>,
  },
});
</script>
