<template>
  <div class="user-block">
    <div class="container">
      <a class="user-block__image" v-bind:class="{'with-notification':isNotification}" href="/">
        <img v-bind:src="userImage" width="40" height="40"/></a>
      <div class="user-block__name">Здравствуйте, <strong>{{userName}}</strong></div>
      <a class="user-block__callback" v-bind:href="telNumber">
        <svg width="18" height="18">
          <use xlink:href="/img/sprites/sprite.svg#icon_phone"></use>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserBlock',
  data: function (){
    return {
      isNotification: true,
      userImage: "/img/common/user.jpg",
      userName: "Константин Алексеевич",
      telNumber: "tel:+375291800044"
    }
  }
}
</script>

<style lang="scss">
@import "blocks/modules/user-block/user-block.scss";
</style>