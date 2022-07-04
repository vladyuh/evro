<template>
  <div class="bottom-bar">
    <div class="container">
      <router-link class="bottom-bar__item" v-for="(item, i) in this.bottom_items" :key="i" v-bind:title="item.name"
                   v-bind:class="{'center': item.isCenter, 'is-active': item.isActive}" v-bind:to="item.link">
        <div class="icon" v-html="item.icon">
        </div>
        <div class="caption">{{ item.name }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BottomAppbar',
  props: ['bottom_items'],
  data: function () {
    return {
      isActive: false,
    }
  },
}
</script>

<style lang="scss">
@import "blocks/modules/app-bar/app-bar.scss";
</style>