<template>
  <div id="app">
    <!-- header -->
    <page-header></page-header>
    <!-- navbar -->
    <page-navbar></page-navbar>
    <!-- content -->
    <keep-alive>
      <router-view v-if="show"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import pageHeader from './views/header'
import pageNavbar from './views/navbar'
export default {
  components: {
    pageHeader,
    pageNavbar
  },
  data() {
    return {
      show: false
    }
  },
  async created() {
    await this.$store.dispatch('getTxData')
    await this.$store.dispatch('getYyData')
    await this.$store.dispatch('getMapData')
    await this.$store.dispatch('getAliData')
    this.show = true
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import "../public/css/base.css";
</style>
