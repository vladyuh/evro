<template>
  <div class="doctors-block__items">
        <div class="doctors-block__item" v-for="(item, i) in this.doctors" :key="i" v-bind:class="{'doctors-block__item--directions': item.text || item.features}">
          <div class="text">
            <router-link class="text-name" v-bind:to="item.withLink">{{item.name}}</router-link>
            <div class="text-caption">{{item.job}}</div>
            <a class="text-link" href="/lk/appointment/">{{item.link}}</a>
            <a href="#view" class="text-toggle" v-if="item.text" @click="toggle(item.name)"></a>
          </div>
          <div class="image">
            <img class="lazyload" loading="lazy" v-bind:src="item.image" width="80"
                                  height="104"/>
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
      doctorName: '',
    }
  },
  methods: {
    toggle: function (name){
      this.doctorName = name
      this.$emit('onClick', {
        doctorClicked: this.doctorName
      })
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@import "blocks/modules/favorites/favorites.scss";
</style>