<template>
  <div class="appoint-page">
    <AppointmentBlock></AppointmentBlock>
    <MapPopup></MapPopup>
  </div>
</template>

<script>
import AppointmentBlock from "@/components/AppointmentBlock";
import MapPopup from "@/components/MapPopup";
export default {
  name: 'AppointmentView',
  components: {
    AppointmentBlock,
    MapPopup
  }
}
</script>

<style lang="scss">
@import "styles/appoint.scss";
</style>
