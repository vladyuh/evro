<template>
  <div class="doctors-block__items">
        <div class="doctors-block__item" v-for="(item, i) in items" :key="i">
          <div class="text" v-if="item.withLink">
            <a class="text-name" v-bind:href="item.withLink">{{item.name}}</a>
            <div class="text-caption">{{item.job}}</div>
            <a class="text-link" href="#">{{item.link}}</a>
          </div>
          <div class="text" v-else>
            <div class="text-name">{{item.name}}</div>
            <div class="text-caption">{{item.job}}</div>
            <a class="text-link" href="#">{{item.link}}</a>
          </div>
          <div class="image">
            <img class="lazyload" loading="lazy" v-bind:src="item.image" width="80"
                                  height="104"/></div>
        </div>
      </div>
</template>

<script>

export default {
  name: 'FavoriteDoctors',
  props: ['doctors'],
  data: function () {
    return {
      items: this.doctors
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import "blocks/modules/favorites/favorites.scss";
</style>