<template>
  <div class="doctors-block__items">
        <div class="doctors-block__item" v-for="(item, i) in doctors" :key="i" v-bind:class="{'doctors-block__item--directions': item.text || item.features}">
          <div class="text">
            <a class="text-name" v-bind:href="item.withLink">{{item.name}}</a>
            <div class="text-caption">{{item.job}}</div>
            <a class="text-link" href="#">{{item.link}}</a>
            <div class="text-toggle" v-if="item.text" @click="toggle($event)"></div>
          </div>
          <div class="image">
            <img class="lazyload" loading="lazy" v-bind:src="item.image" width="80"
                                  height="104"/>
          </div>
          <div class="features" v-show="item.text || item.features">
            <div class="features-text" v-html="item.text">
            </div>
            <ul class="features-list">
              <li v-for="(li,i) in item.features" :key="i">{{li}}</li>
            </ul>
            <a class="features-link" href="#">{{item.link}}</a>
          </div>
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
  methods: {
    toggle: function (event){
      let text = event.target.parentElement;
      let item = text.parentElement;
      item.classList.toggle('is-active');
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import "blocks/modules/favorites/favorites.scss";
</style>