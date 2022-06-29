<template>
  <div class="page-title">
    <div class="container">
      <div class="page-title__text">{{pageTitle}}</div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'PageTitle',
  props: ['title'],
  data: function () {
    return {
      pageTitle: this.title,
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
</style>