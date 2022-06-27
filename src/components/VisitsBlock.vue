<template>
  <div class="visits-block">
    <div class="container">
      <div class="block-title visits-block__title">
        <span>План визитов</span>
        <a class="block-title__link" href="#"><span>Все</span>
          <svg width="24" height="24">
            <use xlink:href="/img/sprites/sprite.svg#icon_chevron_right"></use>
          </svg>
        </a></div>
      <div class="visits-block__items">
        <a class="visits-block__item" href="#" v-for="(item, i) in items" :key="i">
          <div class="image">
            <img class="lazyload" loading="lazy" v-bind:src="item.image" width="48" height="64">
          </div>
          <div class="text">
            <div class="text-title">{{item.name}}</div>
            <div class="text-caption">{{item.planned}}</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'VisitsBlock',
  data: function () {
    return {
      items: [
        {
          name: "Ортопантомограмма",
          planned: "Запланировано на 20.04.22, 9:00",
          image: "/img/common/vis-1.jpg"
        },
        {
          name: "Ортопантомограмма",
          planned: "Запланировано на 20.04.22, 9:00",
          image: "/img/common/vis-2.jpg"
        },
      ]
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
.visits-block{
  margin-bottom: 24px;
  &__items{
    display: flex;
    flex-wrap: wrap;
  }
  &__item{
    width: 100%;
    background: #FFFFFF;
    border-radius: 12px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    position: relative;

    &::after{
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      right: 8px;
      top: 8px;
      background: #EB8D2F;
      border-radius: 4px;
    }

    &:last-child{
      margin-bottom: 0px;
    }

    .image{
      width: 48px;
      height: 64px;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .text{
      margin-left: 16px;
      padding: 8px 0;

      &-title{
        font-weight: 600;
        font-size: 16px;
        line-height: 150%;
        color: #242629;
        margin-bottom: 4px;
      }

      &-caption{
        font-weight: 400;
        font-size: 14px;
        line-height: 145%;
        color: #7F8185;
      }

    }

  }
}
</style>