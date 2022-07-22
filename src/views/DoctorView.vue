<template>
  <div class="doctors-page doctors-page--detail">
    <div class="top-bar">
      <div class="container">
        <router-link class="top-bar__back" to="/lk/doctors">
          <svg width="28" height="28">
            <use v-bind:xlink:href = "`${this.theme_path}img/sprites/sprite.svg#icon_chevron_left_small_border`"></use>
          </svg>
        </router-link>
        <div class="top-bar__title">{{name}}</div>
      </div>
    </div>
    <div class="doctors-detail">
      <div class="container">
        <div class="doctors-detail__image" v-if="image">
          <img v-bind:src="image" width="328" height="328">
        </div>
        <div class="doctors-detail__spec" v-if="job">
          <div class="caption">Специализация</div>
          <div class="value">{{job}}</div>
        </div>
        <div class="doctors-detail__text" v-if="text" v-html="text"></div>
        <div class="doctors-detail__features" v-if="text2" v-html="text2"></div>
        <div class="doctors-detail__links">
          <a class="btn btn-cyan" v-bind:href="link">Записаться на прием</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'DoctorView',
  components: {
  },
  data: function () {
    return {
      theme_path: '',
      site_url: '',
      doctor: "",
      name: "",
      image: "",
      job: "",
      text: "",
      text2: "",
      link: "/lk/appointment/",
    }
  },
  methods: {},
  watch: {
    doctor: function(){
      axios.get(this.site_url+'/wp-json/lk/v1/doctors/','',{
          headers: {
            'Content-Type': 'application/json',
          }
      })
      .then((res) => {
        if(res.status === 200) {
          res.data.forEach(element => {
            if(element.name == this.doctor.name) {
              this.name = element.name;
              this.image = element.image;
              this.job = element.job;
              this.text = element.description;
              this.text2 = element.description2;
            }
          });
        }  
      });
    }
  },
  computed: {
  },
  created(){
    this.site_url = localStorage.getItem('site_url');
    this.theme_path = localStorage.getItem('theme_path');

    axios.get('https://api.evromedica.by/cabinet/staff/'+this.$route.params.id,'',{
        headers: {
          'X-Pin': localStorage.getItem('code')
        }
    })
    .then((res) => {
      if(res.status === 200) {
        res.data.forEach(element => {
          if(element.id == this.$route.params.id) {
            this.doctor = element;
          }
        });
      }
    });
  }
}
</script>

<style lang="scss">
@import "styles/doctors.scss";
</style>