<template>
  <div
    class="content flex justify-between mt-10 py-5 items-center border-b-black border-b-[1px] rounded-t-lg">
    <router-link to="/">
      <div class="flex items-center gap-x-5 cursor-pointer">
        <img
          class="max-w-[80px] sm:max-w-[100px]"
          :src="darkTheme ? '/img/dark-logo.png' : '/img/logo.png'"
          alt="logo" />
        <h1
          v-if="!darkTheme"
          class="text-[#2f2832] dark:text-white sm:flex flex-col sm:text-[26px] md:text-[32px] hidden gap uppercase font-semibold sm:tracking-widest md:tracking-[7.8px]">
          Масьтейли<span class="hidden text-base lowercase font-normal md:flex tracking-normal"
            >коктейли с масюней - масьтейли</span
          >
        </h1>
        <h1
          v-else
          class="text-[#2f2832] dark:text-white sm:flex flex-col sm:text-[26px] md:text-[32px] hidden gap uppercase font-semibold sm:tracking-widest md:tracking-[7px]">
          Симтейли<span class="hidden text-base lowercase font-normal md:flex tracking-normal"
            >коктейли с симой - симтейли</span
          >
        </h1>
      </div>
    </router-link>
    <div class="flex gap-x-5 lg:gap-x-10 dark:text-white">
      <router-link to="/cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      </router-link>
      <svg
        @click="changeTheme"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor">
        <path
          v-if="darkTheme"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        <path
          v-else
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    darkTheme: Boolean,
  },
  methods: {
    changeTheme: function () {
      this.$emit('change-theme');
    },
  },
});
</script>
