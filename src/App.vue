<template>
  <div class="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Header from './components/Header.vue';
import MainView from './views/MainView.vue';

export default defineComponent({
  components: {
    Header,
    MainView,
  },
});
</script>
