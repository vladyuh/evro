<template>
  <div class="services-sections__section">
    <div class="block-title">{{title}}</div>
    <ul class="services-sections__items">
      <li class="services-sections__item" v-for="(service,i) in services" :key="i" v-bind:class="{'has-submenu': service.items}">
        <a v-bind:href="service.link">{{service.name}}</a>
        <ul class="services-sections__submenu" v-if="service.items">
          <li class="services-sections__item services-sections__subitem" v-for="(item,i) in service.items" :key="i">
            <a v-bind:href="item.link">{{item.name}}</a>
          </li>
        </ul>
        <div class="services-sections__toggle" v-if="service.items" @click="clicked($event)"></div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'ServicesSection',
  props: ['title', 'services'],
  data: function () {
    return {
      name: this.title,
      items: this.services,
    }
  },
  methods: {
    clicked: function (event){
      let parent = event.target.parentElement;
      parent.classList.toggle('is-active')
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss">
@import "blocks/modules/services-section/services-section.scss";
</style>