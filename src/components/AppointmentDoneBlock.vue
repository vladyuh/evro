<template>
  <div class="appoint-page appoint-page--success">
    <div class="top-bar">
      <div class="container">
        <div class="top-bar__title">Вы успешно<br> записаны на:</div>
        <a href="/" class="top-bar__close">
          <svg width="28" height="28">
            <use xlink:href="/img/sprites/sprite.svg#icon_x_small_border"></use>
          </svg>
        </a>
      </div>
    </div>
    <div class="appointment-block__success">
      <div class="container">
        <div class="name">
          Гинекология<br>
          Кардиотокограмма плода,<br>
          врач Басенко Татьяна Валерьевна<br>
          26.05.22, 18:50
        </div>
        <div class="caption">С вами свяжется наш специалист для подтверждения записи!</div>
        <a class="btn btn-cyan" href="/">Вернуться на главный экран</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppointmentDoneBlock',
  data: function () {
    return {}
  },
}
</script>

<style lang="scss">
</style>