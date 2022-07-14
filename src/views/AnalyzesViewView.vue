<template>
  <div class="analyzes-page analyzes-page--detail">
    <div class="top-bar">
      <div class="container">
        <router-link class="top-bar__back" to="/analyzes">
          <svg width="28" height="28">
            <use xlink:href="/img/sprites/sprite.svg#icon_chevron_left_small_border"></use>
          </svg>
        </router-link>
        <div class="top-bar__title">{{ pageTitle }}</div>
      </div>
    </div>
    <div class="analyzes-detail">
      <div class="container">
        <div class="analyzes-detail__date">
          <div class="date-item">
            <div class="date-item__caption">Сделан</div>
            <div class="date-item__value">{{ dateMade }}</div>
          </div>
          <div class="date-item">
            <div class="date-item__caption">Готов</div>
            <div class="date-item__value">{{ dateReady }}</div>
          </div>
        </div>
        <div class="analyzes-detail__desc">{{ descText }}</div>
        <div class="analyzes-detail__links">
          <a class="btn btn-transparent" v-bind:href="downloadLink">
            <svg width="24" height="24">
              <use xlink:href="/img/sprites/sprite.svg#icon-download"></use>
            </svg>
            <span>Скачать результат</span>
          </a>
          <a class="btn btn-cyan" v-bind:href="repeatLink">Записаться повторно</a></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AnalyzesViewView',
  components: {},
  data: function () {
    return {
      pageTitle: "Клинический анализ крови",
      dateMade: "14.04.2022",
      dateReady: "18.04.2022",
      descText:
          "Клинический анализ кроки – это наиболее доступный метод" +
          " первичной оценки состояния организма, результаты которого, " +
          "наряду с общим анализом мочи и биохимическим анализом крови, " +
          "входят в алгоритмы диагностики большинства заболеваний.",
      downloadLink: "#",
      repeatLink: "#"
    }
  },
  methods: {},
}
</script>

<style lang="scss">
@import "styles/analyzes.scss";
</style>