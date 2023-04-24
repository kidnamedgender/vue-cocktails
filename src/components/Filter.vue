<template>
  <div class="content border-b-black pb-10t border-b-[1px] flex flex-col gap-6 pb-10">
    <div class="flex justify-center gap-16 flex-wrap flex-col md:flex-row md:justify-normal">
      <div v-for="filter in filterList" class="flex flex-col gap-2">
        <p class="text-[21px]">{{ filter.title }}:</p>
        <select
          @change="(e) => changeHandler(filter.title, (e?.target as HTMLSelectElement).value)"
          class="rounded-[5px] border-[1px] border-black p-3">
          <option disabled value="">Выберите...</option>
          <option v-for="item of filter.list">{{ item }}</option>
        </select>
      </div>
    </div>
    <div class="flex gap-4 flex-wrap">
      <p
        class="bg-red-600 text-white p-2 rounded-xl cursor-pointer"
        v-for="ing in removedIng"
        @click="removeHandler(ing as string)">
        {{ ing }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    removedIng: Array<String>,
  },

  data: function () {
    return {
      filterList: [
        { title: 'Крепкость', list: ['Все', 'Слабоалкогольное', 'Крепкое', 'Безалкогольное'] },
        {
          title: 'Вкус',
          list: [
            'Все',
            'Кислый',
            'Горький',
            'Цитрусовый',
            'Мятный',
            'Сладкий',
            'Сухой',
            'Травяной',
            'Ягодный',
            'Пикантный',
            'Тропический',
            'Фруктовый',
            'Пряный',
            'Соленый',
            'Сливочный',
          ],
        },
        {
          title: 'База',
          list: [
            'Все',
            'Текила',
            'Джин',
            'Ром',
            'Сок',
            'Игристое',
            'Водка',
            'Бурбон',
            'Вермут',
            'Виски',
          ],
        },
        {
          title: 'Ингридиент',
          list: [
            'Серебряная текила',
            'Трипл сек Fruko Schulz',
            'Сахарный сироп',
            'Лаймовый сок',
            'Лайм',
            'Соль',
            'Лед в кубиках',
            'Лондонский сухой джин',
            'Красный вермут',
            'Красный биттер',
            'Апельсиновая цедра',
            'Белый ром',
            'Содовая',
            'Мята',
            'Дробленый лед',
            'Тоник',
            'Апероль',
            'Просекко',
            'Апельсин',
            'Белый вермут',
            'Италикус',
            'Лаймовые листья',
            'Ледяная сфера',
            'Ликер голубики De Kuyper',
            'Лимонный сок',
            'Сыр салерс',
            'Пюре голубики',
            'Китайский перец молотый',
            'Абрикосовый ликер Fruko Schulz',
            'Медовый сироп',
            'Маракуйя',
            'Ананасовые листья',
            'Клюквенный сок',
            'Вода без газа',
            'Ежевика',
            'Мед',
            'Гвоздика',
            'Тростниковый сахарный песок',
            'Корица в палочках',
            'Лимонная цедра',
            'Фисташковый сироп',
            'Розовая соль',
          ],
        },
      ],
    };
  },
  methods: {
    changeHandler: function (title: string, selected: string) {
      this.$emit('change-filter', title, selected);
    },
    removeHandler: function (ing: string) {
      this.$emit('remove-ing', ing);
    },
  },
};
</script>
