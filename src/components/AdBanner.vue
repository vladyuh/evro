<template>
  <div class="banner-block">
    <div class="container">
      <div class="banner-block__slider splide">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide" v-for="(item, i) in items" :key="i">
              <div class="banner-block__text">{{ item.title }}</div>
              <div class="banner-block__link">{{ item.price }}</div>
              <picture>
                <img :src="item.image" width="100%" height="100%">
              </picture>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Splide from '@splidejs/splide';

export default {
  name: 'AdBanner',
  data: function () {
    return {
      items: [
        {
          title: "Лазерное лечение изменений кожи на аппарате Vbeam Prima",
          price: "280 руб.",
          image: "/img/common/banner.jpg"
        },
        {
          title: "Лазерное лечение изменений кожи на аппарате Vbeam Prima",
          price: "300 руб.",
          image: "/img/common/banner.jpg"
        }
      ]
    }
  },
  mounted() {
    new Splide(".banner-block__slider", {
      type: "carousel",
      perPage: 2,
      gap: 16,
      arrows: false,
      breakpoints: {
        1023: {
          perPage: 1,
        }
      }
    }).mount();
  }
}
</script>

<style lang="scss">
@import "blocks/modules/ad-banner/ad-banner.scss";
</style>