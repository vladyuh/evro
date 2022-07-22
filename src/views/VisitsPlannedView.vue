<template>
  <div class="visits-page visits-page--detail">
    <div class="top-bar">
      <div class="container">
        <router-link class="top-bar__back" to="/lk/visits/">
          <svg width="28" height="28">
            <use v-bind:xlink:href = "`${this.theme_path}img/sprites/sprite.svg#icon_chevron_left_small_border`"></use>
          </svg>
        </router-link>
        <div class="top-bar__title">{{pageTitle}}</div>
      </div>
    </div>
    <div class="visits-detail">
      <div class="container">
        <div class="visits-detail__date">
          <div class="date-item">
            <div class="date-item__caption">Запланирован на</div>
            <div class="date-item__value">{{datePlanned}}</div>
          </div>
        </div>
        <div class="visits-detail__desc">{{descText}}</div>
        <div class="visits-detail__links">
          <button class="btn btn-transparent" v-on:click="cancel()">Отменить визит</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'VisitsPlannedView',
  components: {},
  data: function () {
    return {
      theme_path: "",
      pageTitle: "",
      datePlanned: "",
      descText: "",
    }
  },
  methods: {
    cancel(){
      var documentId = this.$route.query.document;
      axios.post('https://api.evromedica.by/cabinet/cancel/'+documentId,'',{
        headers: {
          'X-Pin': localStorage.getItem('code')
        }
      }).then((res) => {
        if(res.status === 200) {
          this.$router.push({path: '/lk/visits/'});
        }
      });
    }
  },
  created() {

    this.theme_path = localStorage.getItem('theme_path');
    var documentId = this.$route.query.document;

    axios.get('https://api.evromedica.by/cabinet/appointment/'+localStorage.getItem('patientId')+'/0','',{
        headers: {
          'X-Pin': localStorage.getItem('code')
        }
    })
    .then((res) => {
      if(res.status === 200) {
        res.data.forEach(element => {
          if(element.documentId == documentId) {
            this.pageTitle = element.services[0].servicename,
            this.datePlanned = element.visitdate_start,
            this.descText = element.services[0].memo
          }
        });
        if(this.pageTitle == "") {
          this.$router.push({path: '/lk/'});
        }
      }
    });
  }
}
</script>

<style lang="scss">
@import "styles/visits.scss";
</style>