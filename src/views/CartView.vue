<template>
  <div class="content pb-20">
    <div class="flex flex-col md:justify-between md:flex-row md:items-center gap-2">
      <div>
        <h1 class="title">Корзина</h1>
        <p>Всего: {{ cartItems?.reduce((acc, _) => (acc += 1), 0) }}</p>
      </div>
      <p @click="$router.back()" class="cursor-pointer">Назад</p>
    </div>
    <CartItemList :cocktails="cartItems" />
  </div>
</template>
<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

import CartItemList from '../components/CartItemList.vue';

export default defineComponent({
  components: {
    CartItemList,
  },

  data: function () {
    return {
      cartItems: [],
    };
  },
  methods: {
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
