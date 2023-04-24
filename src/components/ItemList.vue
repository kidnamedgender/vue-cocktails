<template>
  <div>
    <div class="flex justify-center flex-wrap pt-20 gap-20">
      <Item
        v-for="cocktail in cocktails"
        :key="cocktail.id"
        @add-to-cart="addToCartHandler"
        :parent_id="cocktail.id"
        :title="cocktail.title"
        :image="cocktail.image"
        :price="cocktail.price"
        :pop="cocktail.pop"
        :compound="cocktail.compound"
        :cartCocktails="cartItems" />
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
import { PropType, defineComponent } from 'vue';
import axios from 'axios';

import Item from './Item.vue';

import { Cocktail } from '../views/MainView.vue';
import { CartCocktail } from '../views/MainView.vue';

export default defineComponent({
  data: function () {
    return {
      cartItems: [] as Array<CartCocktail>,
    };
  },

  props: {
    cocktails: Array as PropType<Cocktail[]>,
    cartCocktails: Array as PropType<CartCocktail[]>,
  },
  components: {
    Item,
  },
  methods: {
    addToCartHandler: async function (item: CartCocktail) {
      try {
        if (!this.cartItems?.some((cocktail) => cocktail.parent_id === item.parent_id)) {
          await axios.post('https://6445bebaee791e1e29f08dfb.mockapi.io/cart', item);
          this.cartItems = [...this.cartItems, item];
        } else {
          console.log('no');
        }
      } catch (err) {
        console.log(err);
      }
    },

    getCartItems: async function () {
      try {
        const { data } = await axios.get('https://6445bebaee791e1e29f08dfb.mockapi.io/cart');
        this.cartItems = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  created: function () {
    this.getCartItems();
  },
});
</script>
