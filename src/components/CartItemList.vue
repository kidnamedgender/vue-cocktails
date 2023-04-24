<template>
  <div class="pt-20 space-y-10">
    <CartItem
      v-for="cocktail in cocktails"
      :key="cocktail.parent_id"
      :title="cocktail.title"
      :image="cocktail.image"
      :price="cocktail.price"
      :pop="cocktail.pop"
      :compound="cocktail.compound" />
  </div>
</template>
<script lang="ts">
import { PropType } from 'vue';

import CartItem from './CartItem.vue';
import { CartCocktail } from '../views/MainView.vue';

export default {
  components: {
    CartItem,
  },
  props: {
    cocktails: Array as PropType<CartCocktail[]>,
  },
};
</script>
