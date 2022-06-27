<template>
  <div class="doctors-block">
    <div class="container">
      <div class="block-title doctors-block__title"><span>Любимые врачи</span>
        <a class="block-title__link" href="#"><span>Все</span>
        <svg width="24" height="24">
          <use xlink:href="/img/sprites/sprite.svg#icon_chevron_right"></use>
        </svg>
      </a></div>
      <div class="doctors-block__items">
        <div class="doctors-block__item" v-for="(item, i) in items" :key="i">
          <div class="text">
            <div class="text-name">{{item.name}}</div>
            <div class="text-caption">{{item.job}}</div>
            <a class="text-link" href="#">{{item.link}}</a>
          </div>
          <div class="image">
            <img class="lazyload" loading="lazy" v-bind:src="item.image" width="80"
                                  height="104"/></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FavoriteDoctors',
  data: function () {
    return {
      items: [
        {
          name: "Чудовский Олег Анатольевич",
          job: "Врач-реабилитолог",
          link: "Записаться на прием",
          image: "/img/common/doc-1.jpg"
        },
        {
          name: "Козакова Оксана Григорьевна",
          job: "Терапевт",
          link: "Записаться на прием",
          image: "/img/common/doc-2.jpg"
        },
        {
          name: "Козакова Оксана Григорьевна",
          job: "Терапевт",
          link: "Записаться на прием",
          image: "/img/common/doc-3.jpg"
        },
      ]
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import "blocks/modules/favorites/favorites.scss";
</style>