<template>
  <div class="services-page services-detail">
    <div class="top-bar">
      <div class="container">
        <router-link class="top-bar__back" to="/services/">
          <svg width="28" height="28">
            <use xlink:href="img/sprites/sprite.svg#icon_chevron_left_small_border"></use>
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
          <label class="services-description__readmore" for="expand" @click="toggle($event)">
            <input type="checkbox" id="expand" name="expand">
            <span class="expand">Читать подробнее</span>
            <span class="collapse">Свернуть</span>
          </label>
        </div>
        <div class="services-description__btn">
          <a class="btn btn-cyan" href="#">Записаться к свободному врачу</a>
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
            <use xlink:href="img/sprites/sprite.svg#ic_close"></use>
          </svg></a></div>
        <div class="popup-content">
          <div class="popup-content__title">О докторе</div>
          <div class="text">
            <div class="text-name">{{clickedDoc.name}}</div>
            <div class="text-job">{{clickedDoc.job}}</div>
          </div>
          <div class="image">
            <img class="lazyload" loading="lazy" v-bind:src="clickedDoc.image" width="80"
                 height="104"/>
          </div>
          <div class="features" v-if="clickedDoc.text || clickedDoc.features">
            <div class="features-text" v-html="clickedDoc.text">
            </div>
            <ul class="features-list">
              <li v-for="(li,i) in clickedDoc.features" :key="i">{{li}}</li>
            </ul>
            <a class="features-link" v-bind:href="clickedDoc.withLink">{{clickedDoc.link}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import FavoriteDoctors from "@/components/Favorites";
export default {
  name: 'ServicesDetailView',
  components: {
    FavoriteDoctors
  },
  data: function () {
    return {
      pageTitle: "Ортопедия и травматология",
      highlight:
          "Врачи ортопеды и врачи травматологи специализируются на диагностике, " +
          "лечении травм, их последствий и заболеваниях опорно-двигательного аппарата.",
      text:
          "<p>При возникновении, у Вас или у Ваших близких, каких либо травм, по разным причинам, " +
          "обязательно обращайтесь к специалистам. В клинике «Евромедика» Вас примут высококвалифицированные " +
          "доктора, которые окажут Вам необходимую помощь. Важно пройти консультацию и осмотр, так как " +
          "травмы бывают разных видов, и при каждом своя схема лечения.</p>\n" +
          "<p class=\"hidden\">В травматологии также очень явно работает " +
          "правило, что правильная и своевременная диагностика — залог успешного лечения " +
          "и выздоровления. При проведении диагностики заболеваний опорно-двигательного " +
          "аппарат и суставов врачи травматологи-ортопеды клиники «Евромедика» проводят " +
          "все доступные инструментальные методы диагностики. При необходимости врач назначает " +
          "все необходимые для пациента диагностические процедуры, чтобы поставить точный диагноз.</p>\n" +
          "<p class=\"hidden\">При выборе лечения травм и заболеваний опорно-двигательного " +
          "аппарата врач выбирает сугубо индивидуальную программу для каждого пациента, в " +
          "зависимости от сложности травмы/заболевания, состояния пациента и других факторов.</p>",
      docs: [
        {
          name: "Околелов Юрий Вячеславович",
          job: "Врач травматолог-ортопед",
          image: "img/common/doc-4.jpg",
          link: "Записаться на прием",
          withLink: "#",
          text:
              "<p>Врач с опытом работы:</p>\n" +
              "<ul>\n" +
              "<li>Врач травматолог-ортопед</li>\n" +
              "<li>Врач травматолог-ортопед для детей раннего возраста с поражением центральной нервной системы и нарушением функции опорно-двигательного аппарата</li>\n" +
              "<li>Врач реабилитолог для реабилитации больных неврологического и травматологического профиля</li>\n" +
              "<li>Тренер-врач</li>\n" +
              "</ul>\n" +
              "<p>Врач постоянно повышает свою квалификацию, проходит курсы, семинары, является активным участником конференций, изучает современную медицинскую литературу.</p>",
          features: ['1 квалификационная категория','Стаж работы 13 лет.']
        },
        {
          name: "Бабров Артем Александрович",
          job: "Врач травматолог-ортопед",
          image: "img/common/doc-5.jpg",
          link: "Записаться на прием",
          withLink: "#"
        },
        {
          name: "Муха Михаил Михайлович",
          job: "Врач травматолог-ортопед",
          image: "img/common/doc-6.jpg",
          link: "Записаться на прием",
          withLink: "#",
          text: ""
        },
        {
          name: "Чудовский Олег Анатольевич",
          job: "Врач-реабилитолог",
          image: "img/common/doc-7.jpg",
          link: "Записаться на прием",
          withLink: "#"
        }
      ],
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
}
</script>

<style lang="scss">
@import "styles/services.scss";
</style>
