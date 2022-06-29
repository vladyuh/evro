<template>
  <div class="bottom-bar">
    <div class="container">
      <a class="bottom-bar__item" v-bind:href="item.link" v-for="(item, i) in items" :key="i" v-bind:class="{'center': item.isCenter, 'is-active': item.isActive}">
        <div class="icon" v-html="item.icon">
        </div>
        <div class="caption">{{item.name}}</div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BottomAppbar',
  props: ['bottom_items'],
  data: function (){
    return {
      items: this.bottom_items
    }
  },
}
</script>

<style lang="scss">
@import "blocks/modules/app-bar/app-bar.scss";
</style>