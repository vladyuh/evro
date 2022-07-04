<template>
  <div class="services-sections__section">
    <div class="block-title">{{this.title}}</div>
    <ul class="services-sections__items">
      <li class="services-sections__item" v-for="(service,i) in this.services" :key="i" v-bind:class="{'has-submenu': service.items}">
        <router-link v-bind:to="service.link">{{service.name}}</router-link>
        <ul class="services-sections__submenu" v-if="service.items">
          <li class="services-sections__item services-sections__subitem" v-for="(item,i) in service.items" :key="i">
            <router-link v-bind:to="item.link">{{item.name}}</router-link>
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