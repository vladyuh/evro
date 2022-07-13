<template>
  <div class="login-block">
    <div class="container">
      <div class="login-block__logo"><img src="/img/common/logo.svg" width="188" height="68"></div>
      <form class="login-block__form" action="/code/">
        <div class="form__field">
          <div class="input input-tel">
            <span class="label">Ваш номер телефона</span>
            <input type="tel" name="phone" v-model="phoneNumber" placeholder="Найти врача или услугу" required="required"  v-maska="'+7 (###) ###-##-##'"/>
          </div>
        </div>
        <div class="form__submit">
          <button class="btn btn-cyan" @click="submit($event)">Получить код по СМС</button>
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


import { maska } from 'maska';

export default {
  name: 'LoginView',
  components: {},
  directives: { maska },
  data: function () {
    return {
      phoneNumber: null,
    }
  },
  methods: {
    submit: function (e){
      e.preventDefault();
      this.$router.push({path: '/code', query:{"phone": this.phoneNumber}})
    }
  }
}
</script>

<style lang="scss">
@import "styles/login.scss";
</style>
