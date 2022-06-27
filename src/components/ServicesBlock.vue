<template>
  <div class="services-block">
    <div class="container">
      <div class="block-title services-block__title"><span>Наши услуги</span></div>
      <div class="services-block__items">
        <a class="services-block__item" href="#" v-for="(item, i) in items" :key="i">
          <div class="icon">
            <svg width="64" height="64">
              <use :xlink:href="item.image"></use>
            </svg>
          </div>
          <div class="name">{{item.name}}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ServicesBlock',
  data: function () {
    return {
      items: [
        {
          name: "Записаться на прием",
          image: "/img/sprites/sprite.svg#ser-1"
        },
        {
          name: "Мой паспорт здоровья",
          image: "/img/sprites/sprite.svg#ser-2"
        },
        {
          name: "Записаться на диагностику",
          image: "/img/sprites/sprite.svg#ser-3"
        },
        {
          name: "Сдать        анализы",
          image: "/img/sprites/sprite.svg#ser-4"
        },
        {
          name: "Хирургия",
          image: "/img/sprites/sprite.svg#ser-5"
        },
        {
          name: "Программы",
          image: "/img/sprites/sprite.svg#ser-6"
        },
      ]
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import "blocks/modules/services/services.scss";
</style>