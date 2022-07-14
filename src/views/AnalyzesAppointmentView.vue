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
        <div class="analyzes-detail__desc" v-html="descText"></div>
        <div class="analyzes-detail__links">
          <a class="btn btn-cyan" v-bind:href="repeatLink">Записаться на анализ</a></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AnalyzesAppointmentView',
  components: {},
  data: function () {
    return {
      pageTitle: "Гематологические исследования",
      descText:
          "<p>Это исследования крови, как капиллярной, взятой из пальца, так и венозной.</p>" +
          "<p>Это комплекс исследований, в результате которого получают информацию о " +
          "количественном и качественном составе клеточных элементов крови. Важнейшее " +
          "исследование для диагностики-клинический анализ крови (общий анализ крови), " +
          "включающий набор тестов по определению количества клеток крови, их вид, " +
          "размеры, соотношение и функционирование.</p>",
      repeatLink: "#"
    }
  },
  methods: {},
}
</script>

<style lang="scss">
@import "styles/analyzes.scss";
</style>