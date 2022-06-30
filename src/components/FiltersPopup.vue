<template>
  <div class="popup__wrp" id="filters">
    <div class="popup popup-filters">
      <div class="popup-close"><a href="#close">
        <svg width="24" height="24">
          <use xlink:href="/img/sprites/sprite.svg#ic_close"></use>
        </svg></a></div>
      <div class="popup-content">
        <div class="popup-content__title">Фильтр</div>
        <form class="popup-filter-form">
          <div class="popup-filters__section">
            <div class="title">Направления</div>
            <div class="popup-filters__directions">
              <label class="checkbox" v-for="(direction,i) in direct" :key="i">
                <input type="checkbox" v-model="dirChosen" v-bind:value="direction.value" name="directions">
                <span class="checkbox__elem"></span>
                <span class="checkbox__text">{{direction.name}}</span>
              </label>
            </div>
          </div>
          <div class="popup-filters__section">
            <div class="title">Сортировать по</div>
            <div class="popup-filters__sort">
              <label class="radio" v-for="(sortItem,i) in sort" :key="i">
                <input type="radio" v-bind:value="sortItem.name" name="sort">
                <span class="radio__elem"></span>
                <span class="radio__text">{{sortItem}}</span>
              </label>
            </div>
          </div>
          <div class="popup-filters__submit">
            <button class="btn btn-cyan" type="submit">Подобрать врача</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FiltersPopup',
  props: ['directions', 'sortBy'],
  data: function () {
    return {
      direct: this.directions,
      sort: this.sortBy,
      dirChosen: [],
    }
  },
  mounted() {
  },
  watch: {
    dirChosen: function (){
      this.$emit('onChange',{
        dirChosen: this.dirChosen
      })
    }
  }
}
</script>

<style lang="scss">
</style>