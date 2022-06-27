<template>
  <div class="appoint-page">
    <AppointmentBlock></AppointmentBlock>
  </div>
</template>

<script>
import AppointmentBlock from "@/components/AppointmentBlock";
export default {
  name: 'AppointmentView',
  components: {
    AppointmentBlock,
  }
}
</script>

<style lang="scss">
@import "styles/appoint.scss";
</style>
