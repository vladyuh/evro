<template>
  <div class="login-block">
    <div class="container">
      <div class="login-block__logo"><img src="/img/common/logo.svg" width="188" height="68"></div>
      <div class="login-block__desc">
        <div class="title">Код доступа</div>
        <div class="text">На номер<span class="number">+375 (29) 444-**-**</span>было отправлено СМС с кодом доступа</div>
      </div>
      <form class="login-block__form" action="">
        <div class="form__field pincode">
          <input type="number">
          <input type="number">
          <input type="number">
          <input type="number">
          <input type="hidden" name="pincode">
        </div>
        <div class="form__submit">
          <button class="btn btn-transparent">Получить код по СМС</button>
        </div>
      </form>
      <div class="login-block__back">
        <router-link to="/login/">
        <svg width="24" height="24">
          <use xlink:href="/img/sprites/sprite.svg#icon_chevron_left"></use>
        </svg><span>Изменить телефон</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'CodeView',
  components: {},
  data: function () {
    return {}
  },
  methods: {
  },
  mounted() {
    let pincode = document.querySelectorAll(".pincode input");
    pincode.forEach(function (el){
      el.addEventListener("keydown", function (){
        el.value = "";
      });
      el.addEventListener("keyup", function (){
        var parent = el.parentElement;
        var val = el.value;
        var inputs = el.parentNode.querySelectorAll("input[type=\"number\"]");

        if(val === val.replace(/[0-9]/, "")) {
          el.value= "";
          return false;
        }

        el.nextElementSibling.focus();

        var fullval = "";
        inputs.forEach(function (elem){
          fullval = fullval + (parseInt(elem.value) || "0");
        });

        parent.querySelector("input[type=\"hidden\"]").value= fullval;

      });
    });
  }
}
</script>

<style lang="scss">
@import "styles/login.scss";
</style>
