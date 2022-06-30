<template>
  <div class="page-title">
    <div class="container">
      <div class="page-title__text">{{this.title}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PageTitle',
  props: ['title'],
  data: function () {
    return {
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
</style>