<template>
  <div class="login-block">
    <div class="container">
      <div class="login-block__logo"><img src="/img/common/logo.svg" width="188" height="68"></div>
      <form class="login-block__form" action="code.html">
        <div class="form__field">
          <div class="input input-tel"><span class="label">Ваш номер телефона</span>
            <input type="tel" name="phone" placeholder="Найти врача или услугу" required="required"/>
          </div>
        </div>
        <div class="form__submit">
          <button class="btn btn-cyan">Получить код по СМС</button>
        </div>
      </form>
      <div class="login-block__back">
        <a href="#">
          <svg width="24" height="24">
            <use xlink:href="/img/sprites/sprite.svg#icon_chevron_left"></use>
          </svg>
          <span>Назад на сайт</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginView',
  components: {},
  data: function () {
    return {}
  }
}
</script>

<style lang="scss">
@import "styles/login.scss";
</style>
