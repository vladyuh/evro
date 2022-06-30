<template>
  <div class="services-block__items">
    <a class="services-block__item" href="#" v-for="(item, i) in this.services" :key="i">
      <div class="icon">
        <svg width="64" height="64">
          <use :xlink:href="item.image"></use>
        </svg>
      </div>
      <div class="name">{{ item.name }}</div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'ServicesBlock',
  props: ['services'],
  data: function () {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import "blocks/modules/services/services.scss";
</style>