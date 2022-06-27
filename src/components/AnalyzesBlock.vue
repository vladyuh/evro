<template>
  <div class="analyzes-block">
    <div class="container">
      <div class="block-title analyzes-block__title">
        <span>Новые анализы</span>
        <a class="block-title__link" href="#">
          <span>Все</span>
          <svg width="24" height="24">
            <use xlink:href="/img/sprites/sprite.svg#icon_chevron_right"></use>
          </svg>
        </a>
      </div>
      <div class="analyzes-block__items">
        <a class="analyzes-block__item with-dot" href="#" v-for="(item, i) in items" :key="i">
          <div class="date">{{ item.date }}</div>
          <div class="title">{{ item.title }}</div>
          <div class="ready-date">{{ item.ready }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VisitsBlock',
  data: function () {
    return {
      items: [
        {
          date: "14 апреля",
          title: "Клинический анализ крови",
          ready: "Готов 18 апреля"
        },
        {
          date: "13 апреля",
          title: "Определение уровня АЛТ в крови",
          ready: "Готов 17 апреля"
        },
      ]
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import "blocks/modules/analyzes/analyzes.scss";
</style>