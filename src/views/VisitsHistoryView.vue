<template>
  <div class="visits-page visits-page--detail">
    <div class="top-bar">
      <div class="container">
        <a class="top-bar__back" href="/visits/">
          <svg width="28" height="28">
            <use xlink:href="/img/sprites/sprite.svg#icon_chevron_left_small_border"></use>
          </svg>
        </a>
        <div class="top-bar__title">{{pageTitle}}</div>
      </div>
    </div>
    <div class="visits-detail">
      <div class="container">
        <div class="visits-detail__date">
          <div class="date-item">
            <div class="date-item__caption">Дата приема</div>
            <div class="date-item__value">{{dateHistory}}</div>
          </div>
        </div>
        <div class="visits-detail__desc">{{descText}}</div>
        <div class="visits-detail__links">
          <a class="btn btn-cyan" href="#">Записаться повторно</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VisitsHistoryView',
  components: {},
  data: function () {
    return {
      pageTitle: "Рентгенологические исследования (ортопантомограмма)",
      dateHistory: "22.03.2022",
      descText:
          "Особая опасность ЛОР-заболеваний заключается в том, что" +
          "человек привыкает жить с болезнями со слабо выраженными симптомами." +
          "Тем не менее, запущенные болезни ЛОР-органов провоцируют развитие" +
          "легочных заболеваний и нарушений в работе нервной и сердечно-сосудистой систем." +
          "Кроме того, хроническая бесконтрольная болезнь нередко приводит к" +
          "возникновению осложнений, требующих немедленного хирургического вмешательства.",
    }
  },
  methods: {},
}
</script>

<style lang="scss">
@import "styles/visits.scss";
</style>