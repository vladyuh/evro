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
              <label class="checkbox" v-for="(direction,i) in directions" :key="i">
                <input type="checkbox" v-model="chosenDir" v-bind:value="direction.name" name="directions">
                <span class="checkbox__elem"></span>
                <span class="checkbox__text">{{direction.name}}</span>
              </label>
            </div>
          </div>
          <div class="popup-filters__section">
            <div class="title">Сортировать по</div>
            <div class="popup-filters__sort">
              <label class="radio">
                <input type="radio" checked="" value="Алфавиту" name="sort">
                <span class="radio__elem"></span>
                <span class="radio__text">Алфавиту</span>
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
  props: ['directions', 'sortBy','dirChosen'],
  data: function () {
    return {
      direct: this.directions,
      sort: this.sortBy,
      chosenDir: this.dirChosen
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
</style>