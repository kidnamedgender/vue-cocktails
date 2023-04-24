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
          @click="addHandler(title as string, price as number, pop as number, compound as Array<String>, image as string, parent_id as Number)"
          xmlns="http://www.w3.org/2000/svg"
          :fill="isAdded?'#c491cc':'none'"
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
import { defineComponent, PropType } from 'vue'
import { CartCocktail } from '../views/MainView.vue';

export default defineComponent({

data: function (){
  return {
    isAdded: false
  }
},

  props: {
    parent_id: Number,
    title: String,
    image: String,
    price: Number,
    pop: Number,
    compound: Array<String>,
    cartCocktails: Array as PropType<CartCocktail[]>,
  },

  methods:{
    addHandler:function(title:String, price:Number, pop:Number, compound:Array<String>, image:String,  parent_id: Number,){
      const item = {parent_id, title, image, price, pop, compound};
      if (!this.cartCocktails?.some((cocktail) => cocktail.parent_id === item.parent_id)) {
          this.isAdded = true;
        } 
      this.$emit('add-to-cart', item)
    }
  },
});
</script>
