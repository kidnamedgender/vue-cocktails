<template>
  <div class="card min-w-[300px]">
    <div class="max-w-[100px] mx-auto flex-1 flex items-end">
      <img class=" max-h-[150px]" :src="image" :alt="title"/>
    </div>
    <div class="space-y-10 ">
      <div class="space-y-3 min-h-[140px]">
        <div class="text-center md:text-left ">
          <h1 class="text-[24px]">{{ title as string }}</h1>
          <p class="text-[14px] font-light"> {{ (compound as Array<String>).slice(0, 3).join(', ').toLowerCase() }} ... </p>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <p class="flex flex-col">
          Цена: <strong class="text-[24px]">{{ price as number }} руб.</strong>
        </p>
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
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    title: String,
    image: String,
    price: Number,
    pop: Number,
    compound: Array<String>,
  },
};
</script>
