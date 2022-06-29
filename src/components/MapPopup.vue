<template>
  <div class="popup__wrp" id="map">
    <div class="popup popup-map">
      <div class="popup-close">
        <a href="#close">
        <svg width="24" height="24">
          <use xlink:href="/img/sprites/sprite.svg#ic_close"></use>
        </svg></a></div>
      <div class="popup-content">
        <div class="popup-content__title">Карта</div>
        <div class="map-wrapper">
          <yandex-map :coords="coords" :settings="settings" :controls="settings.controls">
            <ymap-marker marker-id="1" :coords="coords"/>
          </yandex-map>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  name: 'MapBanner',
  components: { yandexMap, ymapMarker },
  data: function () {
    return {
      coords: [53.919643, 30.284813],
      settings: {
        apiKey: 'cfedee88-5af1-40dd-9b38-2b53e120a6ff',
        controls: [],
      }
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
  .popup__wrp .popup-map{
    padding-bottom: 0;

    @media screen and (min-width: 480px) {
      padding-bottom: 40px;
    }

  }
  .map-wrapper{
    position: relative;
    padding-top: 400px;
    margin: 0 -16px;
    overflow: hidden;

    @media screen and (min-width: 480px) {
      margin: 0;
    }

    .ymap-container{
      padding: 0;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;

      & > div > ymaps,
      & > div > ymaps > ymaps{
        width: 100% !important;
      }

    }

  }
</style>