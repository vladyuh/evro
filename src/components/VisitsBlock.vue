<template>
  <div class="visits-block__items">
    <router-link class="visits-block__item" v-for="(item, i) in this.visits" :key="i" v-bind:to="item.link">
      <div class="image">
        <img class="lazyload" loading="lazy" v-bind:src="item.image" width="48" height="64">
      </div>
      <div class="text">
        <div class="text-title">{{item.name}}</div>
        <div class="text-caption">{{item.planned}}</div>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'VisitsBlock',
  props: ['visits'],
  data: function () {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import "blocks/modules/visits/visits.scss";
</style>