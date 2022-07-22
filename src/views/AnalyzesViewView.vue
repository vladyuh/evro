<template>
  <div class="analyzes-page analyzes-page--detail">
    <div class="top-bar">
      <div class="container">
        <router-link class="top-bar__back" to="/lk/analyzes">
          <svg width="28" height="28">
            <use v-bind:xlink:href = "`${this.theme_path}img/sprites/sprite.svg#icon_chevron_left_small_border`"></use>
          </svg>
        </router-link>
        <div class="top-bar__title">{{ pageTitle }}</div>
      </div>
    </div>
    <div class="analyzes-detail">
      <div class="container">
        <div class="analyzes-detail__date">
          <div class="date-item">
            <div class="date-item__caption">Сделан</div>
            <div class="date-item__value">{{ dateMade }}</div>
          </div>
          <div class="date-item">
            <div class="date-item__caption">Готов</div>
            <div class="date-item__value">{{ dateReady }}</div>
          </div>
        </div>
        <div class="analyzes-detail__desc">{{ descText }}</div>
        <div class="analyzes-detail__links" v-if="downloadLink">
          <a class="btn btn-transparent" v-bind:href="downloadLink" download="result.pdf">
            <svg width="24" height="24">
              <use v-bind:xlink:href = "`${this.theme_path}img/sprites/sprite.svg#icon-download`"></use>
            </svg>
            <span>Скачать результат</span>
          </a>
          <a class="btn btn-cyan" v-bind:href="repeatLink">Записаться повторно</a></div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'AnalyzesViewView',
  components: {},
  data: function () {
    return {
      pageTitle: "",
      dateMade: "",
      dateReady: "",
      descText: "",
      downloadLink: "",
      repeatLink: "/lk/appointment/"
    }
  },
  methods: {},
  created() {
    this.theme_path = localStorage.getItem('theme_path');

    var documentId = this.$route.query.document;

    //new
    var startDate = new Date().getTime() - 86400000*30;
    startDate = new Date(startDate);
    var endDate = new Date();

    axios.get('https://api.evromedica.by/cabinet/analyzes/'+localStorage.getItem('patientId')+'/'+
    startDate.toISOString().slice(0, 10)+'/'+endDate.toISOString().slice(0, 10),'',{
        headers: {
          'X-Pin': localStorage.getItem('code')
        }
    })
    .then((res) => {
      if(res.status === 200) {

        res.data.forEach(element => {
          if(element.documentId == documentId) {
            this.pageTitle = element.analyzes[0].servicename;
            this.dateMade = element.visitdate;
            this.dateReady = element.resultsdate;
            this.downloadLink = element.analyzes[0].protocol;
          }
        });
      }
    });


    //history
    startDate = new Date().getTime() - 86400000*60;
    startDate = new Date(startDate);
    endDate = new Date().getTime() - 86400000*30;
    endDate = new Date(endDate);

    axios.get('https://api.evromedica.by/cabinet/analyzes/'+localStorage.getItem('patientId')+'/'+
    startDate.toISOString().slice(0, 10)+'/'+endDate.toISOString().slice(0, 10),'',{
        headers: {
          'X-Pin': localStorage.getItem('code')
        }
    })
    .then((res) => {
      if(res.status === 200) {
        res.data.forEach(element => {
          if(element.status == 'Готов') {
            this.history.push(
              {
                link: "/lk/analyzes/view/?document="+element.documentId,
                date: element.resultsdate,
                name: element.analyzes[0].servicename,
              }
            );
          }
        });
      }
    });
  }
}
</script>

<style lang="scss">
@import "styles/analyzes.scss";
</style>