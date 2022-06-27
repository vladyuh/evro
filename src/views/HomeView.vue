<template>
  <div class="mainpage">
    <UserBlock></UserBlock>
    <AdBanner></AdBanner>
    <FavoriteDoctors></FavoriteDoctors>
    <VisitsBlock></VisitsBlock>
    <ServicesBlock></ServicesBlock>
    <StocksBlock></StocksBlock>
    <AnalyzesBlock></AnalyzesBlock>
    <BottomAppbar></BottomAppbar>
  </div>
</template>

<script>

import UserBlock from '@/components/UserBlock.vue'
import AdBanner from '@/components/AdBanner.vue'
import FavoriteDoctors from "@/components/Favorites";
import VisitsBlock from "@/components/VisitsBlock";
import ServicesBlock from "@/components/ServicesBlock";
import StocksBlock from "@/components/StocksBlock";
import AnalyzesBlock from "@/components/AnalyzesBlock";
import BottomAppbar from "@/components/BottomAppbar";

export default {
  name: 'HomeView',
  components: {
    BottomAppbar,
    UserBlock,
    AdBanner,
    FavoriteDoctors,
    VisitsBlock,
    ServicesBlock,
    StocksBlock,
    AnalyzesBlock,
  }
}
</script>

<style lang="scss">
@import "styles/index.scss";
.mainpage{
  padding: 16px 0 100px;
}
</style>
