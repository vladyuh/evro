<template>
  <div class="visits-page">
    <UserBlock></UserBlock>
    <PageTitle :title="pageTitle"></PageTitle>
    <div class="tab-block">
      <div class="container">
        <div class="tab-block__toggles">
          <div class="tab-block__toggle" v-bind:class="{'is-active': currentTab===0}" v-on:click="currentTab=0">
            Запланировано
          </div>
          <div class="tab-block__toggle" v-bind:class="{'is-active': currentTab===1}" v-on:click="currentTab=1">История
            визитов
          </div>
        </div>
        <div class="tab-block__contents">
          <div class="tab-block__content" v-bind:class="{'is-active': currentTab===0}">
            <VisitsBlock :visits="visits"></VisitsBlock>
          </div>
          <div class="tab-block__content" v-bind:class="{'is-active': currentTab===1}">
            <HistoryBlock :history="history"></HistoryBlock>
          </div>
        </div>
      </div>
    </div>
    <BottomAppbar :bottom_items="menuItems"></BottomAppbar>
  </div>
</template>

<script>
import UserBlock from "@/components/UserBlock";
import BottomAppbar from "@/components/BottomAppbar";
import PageTitle from "@/components/PageTitle";
import VisitsBlock from "@/components/VisitsBlock";
import HistoryBlock from "@/components/HistoryBlock";

export default {
  name: 'VisitsView',
  components: {
    HistoryBlock,
    VisitsBlock,
    PageTitle,
    UserBlock,
    BottomAppbar
  },
  data: function () {
    return {
      pageTitle: "Визиты",
      currentTab: 0,
      visits: [
        {
          link: "/visits/planned/",
          name: "Ортопантомограмма",
          planned: "Запланировано на 20.04.22, 9:00",
          image: "/img/common/vis-1.jpg"
        },
        {
          link: "#",
          name: "Ортопантомограмма",
          planned: "Запланировано на 20.04.22, 9:00",
          image: "/img/common/vis-2.jpg"
        },
      ],
      history: [
        {
          link: "#",
          name: "Оториноларингология",
          date: "22 марта"
        },
        {
          link: "/visits/history/",
          name: "Рентгенологические исследования (ортопантомограмма)",
          date: "12 февраля"
        },
        {
          link: "#",
          name: "МРТ",
          date: "29 декабря 2021"
        },
      ],
      menuItems: [
        {
          icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
              "            <path d=\"M3 12H17M3 6H21M3 18H21\" stroke=\"black\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "          </svg>",
          name: "Услуги",
          isCenter: false,
          link: "/services/",
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
          link: "/analyzes/",
        },
        {
          icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
              "<path d=\"M12 5V19\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "<path d=\"M5 12H19\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "</svg>",
          name: "Запись",
          isCenter: true,
          link: "/appointment/",
        },
        {
          icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
              "<path d=\"M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z\" stroke=\"#242629\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "<path d=\"M12 6V12L16 14\" stroke=\"#242629\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n" +
              "</svg>",
          name: "Визиты",
          isCenter: false,
          isActive: true,
          link: "/visits/",
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
          link: "/doctors/",
        }
      ]
    }
  },
  methods: {},
}
</script>

<style lang="scss">
@import "styles/visits.scss";
</style>