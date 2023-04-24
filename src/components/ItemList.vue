<template>
  <div>
    <div class="flex justify-center flex-wrap pt-20 gap-20">
      <Item
        v-for="cocktail in cocktails"
        :title="cocktail.title"
        :image="cocktail.image"
        :price="cocktail.price"
        :pop="cocktail.pop"
        :compound="cocktail.compound" />
    </div>
    <div class="content flex justify-center">
      <button
        class="border-[1px] border-black px-20 py-3 rounded-xl md:px-40 uppercase hover:rounded-lg transition-all hover:bg-[rgba(0,0,0,0.1)]">
        Показать еще
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import Item from './Item.vue';

import { Cocktail } from '../App.vue';

export default {
  props: {
    cocktails: Array as PropType<Cocktail[]>,
  },
  components: {
    Item,
  },
};
</script>
