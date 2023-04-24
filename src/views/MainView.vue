<template>
  <div>
    <Filter
      @change-filter="changeFilterHandler"
      @remove-ing="removeIngHandler"
      :removedIng="currentRemovedIng" />

    <div class="content pb-20">
      <div class="flex flex-col md:justify-between md:flex-row md:items-center gap-2">
        <div>
          <p class="text-[18px] font-medium">Найдено: {{ sortedItems.length }}</p>
          <h1 class="title">Все коктейли</h1>
        </div>
        <div class="space-y-3 mx-auto md:mx-0">
          <input
            class="mx-auto border-[1px] rounded-lg md:rounded-br-[0px] md:rounded-tr-[0px] border-black p-3 pl-12 md:mx-0 bg-searchIcon bg-no-repeat bg-[length:30px] bg-[center_left_7px]"
            type="text"
            placeholder="Введите название..."
            v-model="searchValue" />

          <ul class="flex flex-col text-center gap-5 md:flex-row">
            <li
              @click="changeSortHandler(item)"
              :class="currentSortType === item ? 'active' : ''"
              v-for="item in sortTypes">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <ItemList :cocktails="sortedItems" />
    </div>

    <Pagination />
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

import Filter from '../components/Filter.vue';
import ItemList from '../components/ItemList.vue';
import Pagination from '../components/Pagination.vue';

export interface Cocktail {
  id: number;
  title: string;
  image: string;
  price: number;
  pop: number;
  compound: Array<String>;
  deg: string;
  taste: Array<String>;
  base: string;
}

export interface CartCocktail {
  parent_id: number;
  title: string;
  image: string;
  price: number;
  pop: number;
  compound: Array<String>;
}

export default defineComponent({
  data: function () {
    return {
      items: [],
      cartItems: [],
      searchValue: '',
      sortTypes: ['А-Я', 'По цене', 'По популярности'],
      currentSortType: 'По популярности',

      currentDeg: '',
      currentBase: '',
      currentTaste: '',
      currentRemovedIng: [] as Array<String>,
    };
  },

  components: {
    Filter,
    ItemList,
    Pagination,
  },

  methods: {
    getItems: async function () {
      try {
        const { data } = await axios.get('https://6445bebaee791e1e29f08dfb.mockapi.io/cocktails');
        this.items = data;
      } catch (err) {
        console.log(err);
      }
    },

    changeSortHandler: function (type: string) {
      this.currentSortType = type;
    },

    changeFilterHandler: function (filterTitle: string, filterType: string) {
      if (filterTitle === 'Крепкость') {
        filterType === 'Все' ? (this.currentDeg = '') : (this.currentDeg = filterType);
      }

      if (filterTitle === 'База') {
        filterType === 'Все' ? (this.currentBase = '') : (this.currentBase = filterType);
      }

      if (filterTitle === 'Вкус') {
        filterType === 'Все' ? (this.currentTaste = '') : (this.currentTaste = filterType);
      }

      if (filterTitle === 'Ингридиент') {
        this.currentRemovedIng.some((item) => item.includes(filterType))
          ? ''
          : (this.currentRemovedIng = [...this.currentRemovedIng, filterType]);
        console.log(this.currentRemovedIng);
      }
    },
    removeIngHandler: function (ing: string) {
      this.currentRemovedIng = this.currentRemovedIng.filter((item: String) => item !== ing);
      console.log(this.currentRemovedIng);
    },
  },

  computed: {
    sortedItems: function () {
      if (this.currentSortType === 'А-Я') {
        this.items.sort((a: Cocktail, b: Cocktail) => a.title.localeCompare(b.title));
      }
      if (this.currentSortType === 'По цене') {
        this.items.sort((a: Cocktail, b: Cocktail) => b.price - a.price);
      }
      if (this.currentSortType === 'По популярности') {
        this.items.sort((a: Cocktail, b: Cocktail) => b.pop - a.pop);
      }

      return this.items.filter(
        (item: Cocktail) =>
          item.title.trim().toLowerCase().includes(this.searchValue.trim().toLowerCase()) &&
          (item.deg.includes(this.currentDeg) || '') &&
          (item.base.includes(this.currentBase) || '') &&
          (item.taste.some((item: String) => item.includes(this.currentTaste)) || '') &&
          !(item.compound.some((item: String) => this.currentRemovedIng.includes(item)) || ''),
      );
    },
  },

  created: function () {
    this.getItems();
  },
});
</script>
