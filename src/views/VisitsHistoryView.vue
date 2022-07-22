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
            <div class="date-item__caption">Дата приема</div>
            <div class="date-item__value">{{dateHistory}}</div>
          </div>
        </div>
        <div class="visits-detail__desc">{{descText}}</div>
        <div class="visits-detail__links">
          <a class="btn btn-cyan" href="/lk/appointment/">Записаться повторно</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'VisitsHistoryView',
  components: {},
  data: function () {
    return {
      theme_path: "",
      pageTitle: "",
      dateHistory: "",
      descText: "",
    }
  },
  methods: {},
    created() {

    this.theme_path = localStorage.getItem('theme_path');
    var documentId = this.$route.query.document;

    axios.get('https://api.evromedica.by/cabinet/history/'+localStorage.getItem('patientId'),'',{
        headers: {
          'X-Pin': localStorage.getItem('code')
        }
    })
    .then((res) => {
      if(res.status === 200) {
        res.data.forEach(element => {
          if(element.documentId == documentId) {
            this.pageTitle = element.services[0].servicename,
            this.dateHistory = element.visitdate_start,
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