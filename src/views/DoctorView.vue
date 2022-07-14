<template>
  <div class="doctors-page doctors-page--detail">
    <div class="top-bar">
      <div class="container">
        <router-link class="top-bar__back" to="/doctors">
          <svg width="28" height="28">
            <use xlink:href="/img/sprites/sprite.svg#icon_chevron_left_small_border"></use>
          </svg>
        </router-link>
        <div class="top-bar__title">{{name}}</div>
      </div>
    </div>
    <div class="doctors-detail">
      <div class="container">
        <div class="doctors-detail__image">
          <img v-bind:src="image" width="328" height="328">
        </div>
        <div class="doctors-detail__spec">
          <div class="caption">Специализация</div>
          <div class="value">{{job}}</div>
        </div>
        <div class="doctors-detail__text" v-if="scopes">
          <p>Сферы врачебной деятельности:</p>
          <ul>
            <li v-for="(scope, i) in scopes" :key="i">{{scope}}</li>
          </ul>
        </div>
        <div class="doctors-detail__text" v-if="text" v-html="text"></div>
        <ul class="doctors-detail__features" v-if="features">
          <li v-for="(feature, i) in features" :key="i">{{feature}}</li>
        </ul>
        <div class="doctors-detail__links">
          <a class="btn btn-cyan" v-bind:href="link">Записаться на прием</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DoctorView',
  components: {
  },
  data: function () {
    return {
      name: "Голубенко Виталий Иванович",
      image: "img/common/doc-big.jpg",
      job: "Врач сосудистый хирург",
      scopes: ['Консультативный прием','Хирургическое лечение'],
      text: "<p>Врач постоянно повышающий свою квалификацию, регулярно посещает курсы, семинары. Активный участник конференций, проходящих как в Беларуси, так и за рубежом.</p>",
      features: ['1 квалификационная категория','Стаж работы 13 лет.'],
      link: "#",
    }
  },
  methods: {},
  watch: {
  },
  computed: {
  }
}
</script>

<style lang="scss">
@import "styles/doctors.scss";
</style>