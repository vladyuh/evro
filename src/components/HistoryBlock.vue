<template>
  <div class="history-block__items">
    <a class="history-block__item" v-for="(item, i) in items" :key="i" v-bind:href="item.link">
      <div class="date">{{item.date}}</div>
      <div class="title">{{item.name}}</div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'HistoryBlock',
  props: ['history'],
  data: function () {
    return {
      items: this.history
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import "blocks/modules/history/history.scss";
</style>