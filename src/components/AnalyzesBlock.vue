<template>
  <div class="analyzes-block__items">
    <router-link class="analyzes-block__item with-dot" v-for="(item, i) in this.analyzes" :key="i" v-bind:to="item.link">
      <div class="date">{{ item.date }}</div>
      <div class="title">{{ item.title }}</div>
      <div class="ready-date">{{ item.ready }}</div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'AnalyzesBlock',
  props: ['analyzes'],
  data: function () {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import "blocks/modules/analyzes/analyzes.scss";
</style>