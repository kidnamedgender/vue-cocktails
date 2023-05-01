<template>
  <div class="content border-t-[1px] border-t-black pb-10">
    <ul class="pag flex gap-6 justify-center md:justify-end">
      <li
        @click="changePage(page)"
        v-for="page of pages"
        :class="currentPage === page ? 'active' : ''">
        {{ page }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data: function () {
    return {
      pages: [] as Array<string>,
    };
  },
  props: {
    currentPage: String,
    currentLimit: Number,
  },
  methods: {
    changePage: function (page: string) {
      this.$emit('change-page', page);
    },
    pagesQuantityHandler: function () {
      this.pages = [];
      for (let i = 0; i <= Math.floor(20 / (this.currentLimit as number)); i++) {
        this.pages = [...this.pages, String(i + 1)];
      }
    },
  },
  created: function () {
    this.pagesQuantityHandler();
  },
  watch: {
    currentLimit() {
      this.pagesQuantityHandler();
    },
  },
});
</script>
