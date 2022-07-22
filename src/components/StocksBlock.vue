<template>

      <div class="stocks-block__items">
        <a class="stocks-block__item" href="#" v-for="(item, i) in items" :key="i">
          <div class="image">
            <img class="lazyload" loading="lazy" width="64" height="64" v-bind:src="item.image">
          </div>
          <div class="text">{{item.name}}</div>
        </a>
      </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'StocksBlock',
  data: function () {
    return {
      items: []
    }
  },
  mounted() {
  },
  created(){
    let site_url = localStorage.getItem('site_url');
    //stocks
    axios.get(site_url + '/wp-json/lk/v1/stocks/','',{
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then((res) => {
          if(res.status === 200) {
            this.items = res.data
          }
        })
        .finally(() => {
    });
  }
}
</script>

<style lang="scss">
@import "blocks/modules/stocks/stocks.scss";
</style>