<template>
  <div class="login-block">
    <div class="container">
      <div class="login-block__logo"><img src="/img/common/logo.svg" width="188" height="68"></div>
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
      </form>
      <div class="login-block__back">
        <router-link to="/login/">
        <svg width="24" height="24">
          <use xlink:href="img/sprites/sprite.svg#icon_chevron_left"></use>
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
      form: {
        number: "",
        code: "",
      }
    }
  },
  methods: {
    sendCode: function (e){
      e.preventDefault()
      axios.post('/', this.form)
          .then((res) => {
            console.log(res);
            this.$router.push({path: '/register'})
          })
          .catch((error) => {
            alert(error.response.status)
          }).finally(() => {
      });
    }
  },
  created() {
    if(this.$route.query.phone) {
      this.form.number = this.$route.query.phone;
    }
  },
}
</script>

<style lang="scss">
@import "styles/login.scss";
</style>
