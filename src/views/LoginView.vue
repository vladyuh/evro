<template>
  <div class="login-block">
    <div class="container">
      <div class="login-block__logo">
        <img src="img/common/logo.svg" width="188" height="68">
      </div>
      <form class="login-block__form" @submit="submit($event)">
        <div class="form__field">
          <div class="input input-tel">
            <span class="label">Ваш номер телефона</span>
            <input type="tel" name="phone" v-model="form.phone" placeholder="" required="required"  v-maska="'+7 (###) ###-##-##'"/>
          </div>
        </div>
        <div class="form__field">
          <div class="input input-date">
            <span class="label">Дата рождения</span>
            <input type="date" name="date" v-model="form.birthDate" placeholder="" required="required"/>
          </div>
        </div>
        <div class="form__submit">
          <button class="btn btn-cyan">Получить код по СМС</button>
        </div>
        <div class="form__error" v-if="errors">
          <p>{{errors}}</p>
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
import axios from "axios";

export default {
  name: 'LoginView',
  components: {},
  directives: { maska },
  data: function () {
    return {
      errors: "",
      form: {
        phone: "",
        birthDate: ""
      }
    }
  },
  methods: {
    submit: function (e){
      e.preventDefault();

      axios.post('/', this.form)
          .then((res) => {
            console.log(res);
            if(res.status === 200){
              this.$router.push({path: 'code', query:{"phone": this.form.phone}})
            }
          })
          .catch((error) => {
            alert(error.response.status)
          }).finally(() => {
      });


    }
  }
}
</script>

<style lang="scss">
@import "styles/login.scss";
</style>
