<template>
  <div :class="darkTheme ? 'dark' : ''">
    <Header @change-theme="themeHandler" :darkTheme="darkTheme" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Header from './components/Header.vue';

export default defineComponent({
  data: function () {
    return {
      darkTheme: false,
    };
  },
  components: {
    Header,
  },
  methods: {
    themeHandler: function () {
      this.darkTheme = !this.darkTheme;
    },
  },
  watch: {
    darkTheme: function (current) {
      localStorage.darkTheme = current;
    },
  },
  created: function () {
    if (localStorage.darkTheme === 'false') {
      this.darkTheme = false;
    } else {
      this.darkTheme = true;
    }
  },
});
</script>
