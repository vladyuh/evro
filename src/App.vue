<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>


window.onload = function () {
  document.querySelector("body").classList.remove("perf-no-animation");
};


export default {
  data: function (){
    return {
      site_url: "https://evromedica.fvds.ru",
      theme_path: "/",
      code: "",
      patientId: "",
      expireDate: "",
      user:{},
    }
  },
  created() {
    localStorage.setItem('theme_path',this.theme_path);
    localStorage.setItem('site_url',this.site_url);
  },
}

</script>
<style lang="scss">
@import "styles/main.scss";

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
