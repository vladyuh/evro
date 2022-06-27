<template>
  <div class="stocks-block">
    <div class="container">
      <div class="block-title stocks-block__title">
        <span>Акции</span>
        <a class="block-title__link" href="#"><span>Все</span>
          <svg width="24" height="24">
            <use xlink:href="/img/sprites/sprite.svg#icon_chevron_right"></use>
          </svg>
        </a>
      </div>
      <div class="stocks-block__items">
        <a class="stocks-block__item" href="#" v-for="(item, i) in items" :key="i">
          <div class="image">
            <img class="lazyload" loading="lazy" width="64" height="64" v-bind:src="item.image">
          </div>
          <div class="text">{{item.name}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'StocksBlock',
  data: function () {
    return {
      items: [
        {
          name: "Вакцинация против COVID-19",
          image: "/img/common/st-1.jpg"
        },
        {
          name: "Проверить уровень витаминов со скидкой!",
          image: "/img/common/st-2.jpg"
        },
      ]
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import "blocks/modules/stocks/stocks.scss";
</style>