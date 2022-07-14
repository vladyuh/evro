<template>
  <div class="register-block">
    <div class="container">
      <div class="login-block__desc register-block__desc">
        <div class="title">Здравствуйсте!</div>
        <div class="text">Вы входите в личный кабинет «Евромедики» впервые. Пожалуйста, заполните данные ниже</div>
      </div>
      <form class="register-block__form">
        <div class="form__field photo">
          <label class="photo-placeholder" for="photo">
            <svg width="40" height="40">
              <use xlink:href="img/sprites/sprite.svg#icon_camera"></use>
            </svg>
          </label>
          <div class="photo-caption">Добавить фото (необязательно)</div>
          <input type="file" id="photo" name="photo">
        </div>
        <div class="form__caption">Личные данные</div>
        <div class="form__field">
          <div class="input input-text"><span class="label">Фамилия, без сокращений *</span>
            <input type="text" name="lastname" placeholder="Найти врача или услугу" required="required"/>
          </div>
        </div>
        <div class="form__field">
          <div class="input input-text"><span class="label">Имя, без сокращений *</span>
            <input type="text" name="firstname" placeholder="Найти врача или услугу" required="required"/>
          </div>
        </div>
        <div class="form__field">
          <div class="input input-text"><span class="label">Отчество, без сокращений *</span>
            <input type="text" name="patronymic" placeholder="Найти врача или услугу" required="required"/>
          </div>
        </div>
        <div class="form__field">
          <div class="input input-date"><span class="label">Дата рождения</span>
            <input type="date" name="date" placeholder="дд.мм.гг"/>
          </div>
        </div>
        <div class="form__field">
          <div class="select"><span class="label">Ваш пол</span>
            <select data-title="Не выбран">
              <option value="" disabled="disabled" selected="selected">Не выбран</option>
              <option value="item">Мужской</option>
              <option value="item">Женский</option>
            </select>
          </div>
        </div>
        <div class="form__field">
          <div class="input input-tel"><span class="label">Ваш номер телефона</span>
            <input type="tel" name="phone" placeholder="Найти врача или услугу" required="required" v-maska="'+7 (###) ###-##-##'"/>
          </div>
        </div>
        <div class="form__field confirm">
          <label class="checkbox">
            <input type="checkbox" name="directions" required checked>
            <span class="checkbox__elem"></span>
            <span class="checkbox__text">Согласен на обработку персональных данных</span>
          </label>
        </div>
        <div class="form__field">
          <div class="login-block__back register-block__back">
            <router-link to="/login/">
              <svg width="24" height="24">
                <use xlink:href="img/sprites/sprite.svg#icon_chevron_left"></use>
              </svg>
              <span>Изменить телефон</span>
            </router-link>
          </div>
        </div>
        <div class="form__submit">
          <button class="btn btn-cyan">Завершить регистрацию</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { maska } from 'maska';

export default {
  name: 'RegisterView',
  components: {},
  directives: { maska },
  data: function () {
    return {}
  },
  mounted() {
    let photo = document.querySelector(".register-block .form__field.photo input");
    if(photo){
      photo.addEventListener("change",function (event){

        var parent = this.parentElement;
        var photo = parent.querySelector(".photo-placeholder");

        if(event.target.files[0]){
          photo.classList.add("uploaded");
          photo.style.backgroundImage = "url(" + URL.createObjectURL(event.target.files[0]) + ")";
        }
        else{
          photo.classList.remove("uploaded");
          photo.removeAttribute("style");
        }


      });
    }
  }
}
</script>

<style lang="scss">
@import "styles/login.scss";
</style>
