<template>
  <div class="mainpage">
    <UserBlock></UserBlock>
    <AdBanner></AdBanner>
    <div class="doctors-block" v-if="doctors.length > 0">
      <div class="container">
        <div class="block-title doctors-block__title">
          <span>Любимые врачи</span>
          <router-link to="/lk/doctors/" class="block-title__link">
            <span>Все</span>
            <svg width="24" height="24">
              <use v-bind:xlink:href = "`${this.theme_path}img/sprites/sprite.svg#icon_chevron_right`"></use>
            </svg>
          </router-link>
        </div>
        <FavoriteDoctors :doctors="doctors"></FavoriteDoctors>
      </div>
    </div>
    <div class="visits-block">
      <div class="container">
        <div class="block-title visits-block__title">
          <span>План визитов</span>
          <router-link class="block-title__link" to="/lk/visits/"><span>Все</span>
            <svg width="24" height="24">
              <use v-bind:xlink:href = "`${this.theme_path}img/sprites/sprite.svg#icon_chevron_right`"></use>
            </svg>
          </router-link>
        </div>
        <VisitsBlock :visits="visits"></VisitsBlock>
      </div>
    </div>
    <div class="services-block">
      <div class="container">
        <div class="block-title services-block__title"><span>Наши услуги</span></div>
        <ServicesBlock :services="services"></ServicesBlock>
      </div>
    </div>
    <div class="stocks-block">
      <div class="container">
        <div class="block-title stocks-block__title">
          <span>Акции</span>
          <a class="block-title__link" href="#"><span>Все</span>
            <svg width="24" height="24">
              <use v-bind:xlink:href = "`${this.theme_path}img/sprites/sprite.svg#icon_chevron_right`"></use>
            </svg>
          </a>
        </div>
        <StocksBlock></StocksBlock>
      </div>
    </div>
    <div class="analyzes-block">
      <div class="container">
        <div class="block-title analyzes-block__title">
          <span>Новые анализы</span>
          <router-link class="block-title__link" to="/lk/analyzes/">
            <span>Все</span>
            <svg width="24" height="24">
              <use v-bind:xlink:href = "`${this.theme_path}img/sprites/sprite.svg#icon_chevron_right`"></use>
            </svg>
          </router-link>
        </div>
        <AnalyzesBlock :analyzes="analyzes"></AnalyzesBlock>
      </div>
    </div>
    <BottomAppbar :bottom_items="menuItems"></BottomAppbar>
  </div>
</template>

<script>
import axios from 'axios';
import UserBlock from '@/components/UserBlock.vue'
import AdBanner from '@/components/AdBanner.vue'
import FavoriteDoctors from "@/components/Favorites";
import VisitsBlock from "@/components/VisitsBlock";
import ServicesBlock from "@/components/ServicesBlock";
import StocksBlock from "@/components/StocksBlock";
import AnalyzesBlock from "@/components/AnalyzesBlock";
import BottomAppbar from "@/components/BottomAppbar";

export default {
  name: 'HomeView',
  components: {
    BottomAppbar,
    UserBlock,
    AdBanner,
    FavoriteDoctors,
    VisitsBlock,
    ServicesBlock,
    StocksBlock,
    AnalyzesBlock,
  },
  data: function (){
    return {
      theme_path: '',
      site_url: '',
      favDoctors: [],
      siteDoctors: null,
      doctors: [],
      visits: [],
      services: [
        {
          name: "Записаться на прием",
          image: localStorage.getItem('theme_path')+"img/sprites/sprite.svg#ser-1"
        },
        {
          name: "Мой паспорт здоровья",
          image: localStorage.getItem('theme_path')+"img/sprites/sprite.svg#ser-2"
        },
        {
          name: "Записаться на диагностику",
          image: localStorage.getItem('theme_path')+"img/sprites/sprite.svg#ser-3"
        },
        {
          name: "Сдать        анализы",
          image: localStorage.getItem('theme_path')+"img/sprites/sprite.svg#ser-4"
        },
        {
          name: "Хирургия",
          image: localStorage.getItem('theme_path')+"img/sprites/sprite.svg#ser-5"
        },
        {
          name: "Программы",
          image: localStorage.getItem('theme_path')+"img/sprites/sprite.svg#ser-6"
        },
      ],
      analyzes: [],
      menuItems: [
        {
          icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
              "            <path d=\"M3 12H17M3 6H21M3 18H21\" stroke=\"black\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "</svg>",
          name: "Услуги",
          isCenter: false,
          link: "/lk/services/",
        },
        {
          icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
              "<path d=\"M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z\" stroke=\"#242629\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "<path d=\"M14 2V8H20\" stroke=\"#242629\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "<path d=\"M16 13H8\" stroke=\"#242629\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "<path d=\"M16 17H8\" stroke=\"#242629\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "<path d=\"M10 9H9H8\" stroke=\"#242629\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "</svg>",
          name: "Анализы",
          isCenter: false,
          link: "/lk/analyzes/",
        },
        {
          icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
              "<path d=\"M12 5V19\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "<path d=\"M5 12H19\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "</svg>",
          name: "Запись",
          isCenter: true,
          link: "/lk/appointment/",
        },
        {
          icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
              "<path d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\" stroke=\"#242629\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "<path d=\"M12 6V12L16 14\" stroke=\"#242629\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "</svg>",
          name: "Визиты",
          isCenter: false,
          link: "/lk/visits/",
        },
        {
          icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
              "<path d=\"M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21\" stroke=\"#242629\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "<path d=\"M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z\" stroke=\"#242629\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "<path d=\"M23 20.9999V18.9999C22.9993 18.1136 22.7044 17.2527 22.1614 16.5522C21.6184 15.8517 20.8581 15.3515 20 15.1299\" stroke=\"#242629\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "<path d=\"M16 3.12988C16.8604 3.35018 17.623 3.85058 18.1676 4.55219C18.7122 5.2538 19.0078 6.11671 19.0078 7.00488C19.0078 7.89305 18.7122 8.75596 18.1676 9.45757C17.623 10.1592 16.8604 10.6596 16 10.8799\" stroke=\"#242629\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "</svg>",
          name: "Врачи",
          isCenter: false,
          link: "/lk/doctors/",
        }
      ]
    }
  },
  watch: {
    favDoctors: function () {
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
    siteDoctors: function () {
      var allDoctors = [];
      axios.get('https://api.evromedica.by/cabinet/staff/0','',{
          headers: {
            'X-Pin': localStorage.getItem('code')
          }
      })
      .then((res) => {
        if(res.status === 200) {
          res.data.forEach(element => {
            allDoctors.push(element);
          });

          this.favDoctors.forEach(name => {
            var doctor = {
              name: "",
              job: "",
              link: "Записаться на прием",
              image: "",
              withLink: ""
            };

            doctor.name = name;
            allDoctors.forEach(doc => {
              if(doc.name == name) {
                doctor.withLink = "/lk/doctors/doctor/"+doc.id
              }
            });

            this.siteDoctors.forEach(doc => {
              if(doc.name == name) {
                doctor.job = doc.job;
                doctor.image = doc.image;
              }
            });
            this.doctors.push(doctor);
          });
        }
      });
    }
  },
  created() {
    this.site_url = localStorage.getItem('site_url');
    this.theme_path = localStorage.getItem('theme_path');


    //fav doctors
    var favDoctors = [];
    axios.get('https://api.evromedica.by/cabinet/history/'+localStorage.getItem('patientId'),'',{
        headers: {
          'X-Pin': localStorage.getItem('code')
        }
    })
    .then((res) => {
      if(res.status === 200) {
        res.data.forEach(element => {
          let found = false;
          favDoctors.forEach((fav,i) => {
            if(fav.name == element.doctor) {
              favDoctors[i].count++;
              found = true;
            }
          });
          if(!found) {
            favDoctors.push({
              name: element.doctor,
              count: 1
            });
          }
        });
        favDoctors.sort((a, b) => (a.count > b.count) ? 1 : -1);
        var sortedDoctors = [];
        favDoctors.forEach((fav) => {
          sortedDoctors.push(fav.name);
        });
        this.favDoctors = sortedDoctors;
      }
    });

    //visits
    axios.get('https://api.evromedica.by/cabinet/appointment/'+localStorage.getItem('patientId')+'/0','',{
        headers: {
          'X-Pin': localStorage.getItem('code')
        }
    })
    .then((res) => {
      if(res.status === 200) {
        res.data.forEach(element => {
            this.visits.push(
              {
                link: "/lk/visits/planned/?document="+element.documentId,
                name: element.services[0].servicename,
                planned: "Запланировано на "+element.visitdate_start,
                image: (element.gender == 'Женский') ? this.theme_path+"img/common/vis-2.jpg" : this.theme_path+"img/common/vis-1.jpg"
              }
            );
        });
      }
    });


    //analyzis
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
          if(element.status == 'Готов') {
            this.analyzes.push(
              {
                link: "/lk/analyzes/view/?document="+element.documentId,
                date: element.visitdate,
                title: element.analyzes[0].servicename,
                ready: 'Готов '+element.resultsdate
              }
            );
          }
        });
      }
    });
  },
}
</script>

<style lang="scss">
@import "styles/index.scss";
</style>
