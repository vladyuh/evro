<template>
  <div class="services-page services-detail">
    <div class="top-bar">
      <div class="container">
        <router-link class="top-bar__back" to="/lk/services/">
          <svg width="28" height="28">
            <use v-bind:xlink:href = "`${this.theme_path}img/sprites/sprite.svg#icon_chevron_left_small_border`"></use>
          </svg>
        </router-link>
        <div class="top-bar__title">{{pageTitle}}</div>
      </div>
    </div>
    <div class="services-description">
      <div class="container">
        <div class="services-description__highlight">{{highlight}}</div>
        <div class="services-description__text">
          <div v-html="text"></div>
          <label v-if="text" class="services-description__readmore" for="expand" @click="toggle($event)">
            <input type="checkbox" id="expand" name="expand">
            <span class="expand">Читать подробнее</span>
            <span class="collapse">Свернуть</span>
          </label>
        </div>
        <div class="services-description__btn">
          <a class="btn btn-cyan" href="/lk/appointment/">Записаться к свободному врачу</a>
        </div>
      </div>
    </div>
    <div class="doctors-block doctors-block--directions">
      <div class="container">
        <div class="block-title doctors-block__title"><span>Врачи по направлению</span></div>
        <FavoriteDoctors :doctors="docs" @onClick="onDocClicked($event)"></FavoriteDoctors>
      </div>
    </div>
    <div class="popup__wrp" id="view">
      <div class="popup popup-docs">
        <div class="popup-close"><a href="#close">
          <svg width="24" height="24">
            <use v-bind:xlink:href = "`${this.theme_path}img/sprites/sprite.svg#ic_close`"></use>
          </svg></a></div>
        <div class="popup-content">
          <div class="popup-content__title">О докторе</div>
          <div class="text">
            <div class="text-name">{{clickedDoc.name}}</div>
            <div class="text-job">{{clickedDoc.job}}</div>
          </div>
          <div class="image" v-if="clickedDoc.image">
            <img class="lazyload" loading="lazy" v-bind:src="clickedDoc.image" width="80"
                 height="104"/>
          </div>
          <div class="features" v-if="clickedDoc.text || clickedDoc.features">
            <div class="features-text" v-html="clickedDoc.text">
            </div>
            <div class="features-list" v-if="clickedDoc.text2" v-html="clickedDoc.text2">
            </div>
            <a class="features-link" href="/lk/appointment/">{{clickedDoc.link}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import FavoriteDoctors from "@/components/Favorites";
export default {
  name: 'ServicesDetailView',
  components: {
    FavoriteDoctors
  },
  data: function () {
    return {
      pageTitle: "",
      highlight:"",
      text:"",
      siteDoctors: null,
      docs: [],
      clickedDoc: []
    }
  },
  methods: {
    toggle: function (event){
      let parent = event.target.parentElement
      parent.querySelectorAll('.hidden').forEach(function (el){
        el.classList.toggle('visible')
      })
    },
    onDocClicked: function (event){
      let name = event.doctorClicked;
      let doc = this.docs.find((item) =>{
        if(item.name.toLowerCase().includes(name.toLowerCase())){
          return true
        }
      })
      this.clickedDoc = doc
    }
  },
  watch: {
    siteDoctors: function () {
      
      axios.get('https://api.evromedica.by/cabinet/staff/'+this.$route.params.id,'',{
          headers: {
            'X-Pin': localStorage.getItem('code')
          }
      })
      .then((res) => {
        if(res.status === 200) {
          res.data.forEach(element => {

            var doctor = {
              name: element.name,
              job: "",
              link: "Записаться на прием",
              image: "",
              withLink: "/lk/doctors/doctor/"+element.id,
              text:"",
              text2:""
            };
            this.siteDoctors.forEach(doc => {
              if(doc.name == element.name) {
                doctor.job = doc.job;
                doctor.image = doc.image;
                doctor.text = doc.description;
                doctor.text2 = doc.description2;
              }
            });

            this.docs.push(doctor);

          });
        }
      });
    }
  },
  created() {
    this.theme_path = localStorage.getItem('theme_path');
    this.site_url = localStorage.getItem('site_url');
    
    axios.get('https://api.evromedica.by/cabinet/services/categories/'+this.$route.params.id+'/0/','',{
      headers: {
        'X-Pin': localStorage.getItem('code')
      }
    })
    .then((res) => {
      if(res.status === 200) {
        res.data.forEach(element => {
          if(element.id == this.$route.params.id) {
            this.pageTitle = element.title;
          }
        });
      }
    });


    axios.get(this.site_url+'/wp-json/lk/v1/doctors/','',{
        headers: {
          'Content-Type': 'application/json',
        }
    })
    .then((res) => {
      if(res.status === 200) {
        var siteDoctors = [];
        res.data.forEach(element => {
          siteDoctors.push(element);
        });
        this.siteDoctors = siteDoctors;
      }
    });


  },
}
</script>

<style lang="scss">
@import "styles/services.scss";
</style>
