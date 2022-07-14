<template>
  <div class="visits-page visits-page--detail">
    <div class="top-bar">
      <div class="container">
        <router-link class="top-bar__back" to="/visits/">
          <svg width="28" height="28">
            <use xlink:href="img/sprites/sprite.svg#icon_chevron_left_small_border"></use>
          </svg>
        </router-link>
        <div class="top-bar__title">{{pageTitle}}</div>
      </div>
    </div>
    <div class="visits-detail">
      <div class="container">
        <div class="visits-detail__date">
          <div class="date-item">
            <div class="date-item__caption">Запланирован на</div>
            <div class="date-item__value">{{datePlanned}}</div>
          </div>
        </div>
        <div class="visits-detail__desc">{{descText}}</div>
        <div class="visits-detail__links">
          <button class="btn btn-transparent">Отменить визит</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VisitsPlannedView',
  components: {},
  data: function () {
    return {
      pageTitle: "Ортопантомограмма",
      datePlanned: "20.04.2022",
      descText:
          "Клинический анализ кроки – это наиболее доступный метод первичной оценки " +
          "состояния организма, результаты которого, наряду с общим анализом мочи и " +
          "биохимическим анализом крови, входят в алгоритмы диагностики большинства заболеваний.",
    }
  },
  methods: {},
}
</script>

<style lang="scss">
@import "styles/visits.scss";
</style>