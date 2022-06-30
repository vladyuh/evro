<template>
  <div class="visits-block__items">
    <a class="visits-block__item" v-for="(item, i) in items" :key="i" v-bind:href="item.link">
      <div class="image">
        <img class="lazyload" loading="lazy" v-bind:src="item.image" width="48" height="64">
      </div>
      <div class="text">
        <div class="text-title">{{item.name}}</div>
        <div class="text-caption">{{item.planned}}</div>
      </div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'VisitsBlock',
  props: ['visits'],
  data: function () {
    return {
      items: this.visits
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import "blocks/modules/visits/visits.scss";
</style>