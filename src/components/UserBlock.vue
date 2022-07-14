<template>
  <div class="user-block">
    <div class="container">
      <router-link class="user-block__image" v-bind:class="{'with-notification':isNotification}" to="/">
        <img v-bind:src="userImage" width="40" height="40"/></router-link>
      <div class="user-block__name">Здравствуйте, <strong>{{ userName }}</strong></div>
      <a class="user-block__callback" v-bind:href="telNumber">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20" id="icon_phone">
          <path d="M19 14.476v2.71a1.803 1.803 0 01-1.23 1.719c-.24.08-.492.11-.744.088a17.933
          17.933 0 01-7.81-2.773 17.63 17.63 0 01-5.43-5.42 17.853 17.853 0 01-2.779-7.83A1.803 1.803
          0 012.08 1.153c.23-.101.478-.154.73-.154h2.714a1.812 1.812 0 011.81 1.554c.115.867.328 1.718.634
          2.538a1.803 1.803 0 01-.407 1.906L6.41 8.145a14.466 14.466 0 005.43 5.42l1.15-1.148a1.811 1.811
          0 011.91-.406c.82.305 1.674.518 2.543.632a1.81 1.81 0 011.556 1.833z" stroke="#08C" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UserBlock',
  data: function () {
    return {
      isNotification: true,
      userImage: "img/common/user.jpg",
      userName: "Константин Алексеевич",
      telNumber: "tel:+375291800044"
    }
  }
}
</script>

<style lang="scss">
@import "blocks/modules/user-block/user-block.scss";
</style>