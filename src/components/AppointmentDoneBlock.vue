<template>
  <div class="appoint-page appoint-page--success">
    <div class="top-bar">
      <div class="container">
        <div class="top-bar__title">Вы успешно<br> записаны на:</div>
      </div>
    </div>
    <div class="appointment-block__success">
      <div class="container">
        <div class="name">
          {{ serviceSelected }}<br>
          {{ serviceChosen }},<br>
          врач {{ doctorChosen }}<br>
          {{ datetime }}
        </div>
        <div class="caption">С вами свяжется наш специалист для подтверждения записи!</div>
        <router-link class="btn btn-cyan" to="/">Вернуться на главный экран</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppointmentDoneBlock',
  data: function () {
    return {
      doctorChosen:"",
      serviceSelected:"",
      serviceChosen:"",
      datetime:"",
    }
  },
  created() {
    let order = localStorage.getItem('order');
    if(order === null) {
      this.$router.push({path: '/lk/'})
    }

    order = JSON.parse(order);

    this.serviceChosen = order.serviceChosen;
    this.doctorChosen = order.doctorChosen;
    this.serviceSelected = order.serviceSelected;
    this.datetime = order.datetime;
   
  }
}
</script>

<style lang="scss">
</style>