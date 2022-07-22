<template>
  <div class="register-block">
    <div class="container">
      <div class="login-block__desc register-block__desc">
        <div class="title">Здравствуйсте!</div>
        <div class="text">Вы входите в личный кабинет «Евромедики» впервые. Пожалуйста, заполните данные ниже</div>
      </div>
      <form class="register-block__form" method="POST" enctype="multipart/form-data" @submit="submit($event)">
        <div class="form__field photo">
          <label class="photo-placeholder" for="photo">
            <svg width="40" height="40">
              <use v-bind:xlink:href = "`${this.theme_path}img/sprites/sprite.svg#icon_camera`"></use>
            </svg>
          </label>
          <div class="photo-caption">Добавить фото (необязательно)</div>
          <input type="file" id="photo" name="photo" accept="image/jpeg,image/png">
        </div>
        <div class="form__caption">Личные данные</div>
        <div class="form__field">
          <div class="input input-text"><span class="label">Фамилия, без сокращений *</span>
            <input type="text" name="lastname" v-model="form.lastname" placeholder="" required="required"/>
          </div>
        </div>
        <div class="form__field">
          <div class="input input-text"><span class="label">Имя, без сокращений *</span>
            <input type="text" name="firstname" v-model="form.firstname" placeholder="" required="required"/>
          </div>
        </div>
        <div class="form__field">
          <div class="input input-text"><span class="label">Отчество, без сокращений *</span>
            <input type="text" name="patronymic" v-model="form.patronymic" placeholder="" required="required"/>
          </div>
        </div>
        <div class="form__field">
          <div class="input input-date"><span class="label">Дата рождения</span>
            <input type="date" name="date" v-model="form.date" placeholder="дд.мм.гг" required="required"/>
          </div>
        </div>
        <div class="form__field">
          <div class="select"><span class="label">Ваш пол</span>
            <select data-title="Не выбран" name="sex" v-model="form.sex">
              <option value="" disabled="disabled" selected="selected">Не выбран</option>
              <option value="item">Мужской</option>
              <option value="item">Женский</option>
            </select>
          </div>
        </div>
        <div class="form__field">
          <div class="input input-tel"><span class="label">Ваш номер телефона</span>
            <input type="tel" name="phone" placeholder="" v-model="form.phone" required="required" v-maska="'+375(##)###-##-##'"/>
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
            <router-link to="/lk/login/">
              <svg width="24" height="24">
                <use v-bind:xlink:href = "`${this.theme_path}img/sprites/sprite.svg#icon_chevron_left`"></use>
              </svg>
              <span>Изменить телефон</span>
            </router-link>
          </div>
        </div>
        <div class="form__submit">
          <button class="btn btn-cyan">Завершить регистрацию</button>
        </div>
        <div class="form__error" v-if="errors">
          <p>{{errors}}</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { maska } from 'maska';
import axios from "axios";

export default {
  name: 'RegisterView',
  components: {},
  directives: { maska },
  data: function () {
    return {
      errors: "",
      form: {
        phone: "",
        lastname: "",
        firstname: "",
        patronymic: "",
        photo: "",
        date: ""
      }
    }
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
  },
  methods: {
    submit: function (e){
      e.preventDefault();
      
      let data = {
        phone: this.form.phone,
        birthdate: this.form.date,
        fullname: this.form.lastname+' '+this.form.firstname+' '+this.form.patronymic,
      };

      let photo = document.querySelector(".register-block .form__field.photo input");

      axios.post('https://api.evromedica.by/cabinet/register', data)
          .then((res) => {
            if(res.status === 200) {
              
              localStorage.setItem('patientId', res.data.patientId);

              if(photo.files[0] !== undefined) {
                var formData = new FormData();
                formData.append("photo", photo.files[0]);
                formData.append("patientId", res.data.patientId);

                axios.post(this.site_url + '/wp-json/lk/v1/photo/',formData,{
                    headers: {
                      'Content-Type': 'multipart/form-data',
                      'Access-Control-Allow-Origin': '*',
                    }
                })
                .then((res) => {
                  if(res.status === 200) {
                    //this.$router.push({path: 'code', query:{"phone": this.form.phone}})
                  }
                });
              }
              else{
                //this.$router.push({path: 'code', query:{"phone": this.form.phone}})
              }
            }
          })
          .catch((error) => {
            console.log(error.response.status)
          }).finally(() => {
            


      });

    }
  },
  created() {
    this.site_url = localStorage.getItem('site_url');
    this.theme_path = localStorage.getItem('theme_path');
  },
}
</script>

<style lang="scss">
@import "styles/login.scss";
</style>
