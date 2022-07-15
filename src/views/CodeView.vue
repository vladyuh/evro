<template>
  <div class="login-block">
    <div class="container">
      <div class="login-block__logo">
        <img v-bind:src = "`${this.theme_path}img/common/logo.svg`" width="188" height="68">
      </div>
      <div class="login-block__desc">
        <div class="title">Код доступа</div>
        <div class="text">На номер <span class="number">{{form.number}}</span> было отправлено СМС с кодом доступа</div>
      </div>
      <form class="login-block__form" @submit="sendCode($event)">
        <div class="form__field pincode">
          <PincodeInput
              v-model="form.code"
              placeholder="0"
          />
        </div>
        <div class="form__submit">
          <button class="btn btn-transparent">Отправить</button>
        </div>
        <div class="form__error" v-if="errors">
          <p>{{errors}}</p>
        </div>
      </form>
      <div class="login-block__back">
        <router-link to="/lk/login/">
        <svg width="24" height="24">
          <use v-bind:xlink:href = "`${this.theme_path}img/sprites/sprite.svg#icon_chevron_left`"></use>
        </svg><span>Изменить телефон</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import PincodeInput from 'vue-pincode-input';

export default {
  name: 'CodeView',
  components: {
    PincodeInput
  },
  data: function () {
    return {
      errors: "",
      form: {
        number: "",
        code: "",
      }
    }
  },
  methods: {
    sendCode: function (e){
      e.preventDefault();
      axios.get('https://api.evromedica.by/cabinet/validate/'+localStorage.getItem('patientId'), this.form)
          .then((res) => {
            if(res.data.validate) {
              localStorage.setItem('code', this.form.code);
              localStorage.setItem('expireDate', res.data.expiredate);
              this.$router.push({path: '/lk/'})
            }
            else{
              this.errors = 'Неверный код';
            }
            //this.$router.push({path: '/lk/'})
          })
          .catch((error) => {
            this.errors = error.response.status;
          }).finally(() => {
      });
    }
  },
  created() {
    this.theme_path = localStorage.getItem('theme_path');
    if(this.$route.query.phone) {
      this.form.number = this.$route.query.phone;
    }
  },
}
</script>

<style lang="scss">
@import "styles/login.scss";
</style>
