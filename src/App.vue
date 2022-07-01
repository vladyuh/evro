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
//100vh hack
var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
window.addEventListener("resize", function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", "".concat(vh, "px"));
});

//Browser-level image lazy-loading
if ("loading" in HTMLImageElement.prototype) {
  const images = document.querySelectorAll("img[loading=\"lazy\"]");
  for (var i = 0; i < images.length; i++) {
    images[i].src = images[i].dataset.src;
  }
} else {
  const script = document.createElement("script");
  script.src = "/js/lazysizes.min.js";
  document.body.appendChild(script);
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
