<template>
  <div id="app">
    <!-- header -->
    <page-header></page-header>
    <!-- navbar -->
    <page-navbar></page-navbar>
    <!-- content -->
    <keep-alive>
      <router-view v-if="show && !LOADING"></router-view>
    </keep-alive>
    <!-- loading -->
    <loading v-show="LOADING"></loading>
  </div>
</template>

<script>
import pageHeader from './views/header'
import pageNavbar from './views/navbar'
import loading from '@/components/common/loading.vue'
import { mapState } from 'vuex'
export default {
  components: {
    pageHeader,
    pageNavbar,
    loading
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapState(['LOADING'])
  },
  async created() {
    await this.$store.dispatch('getTxData')
    await this.$store.dispatch('getYyData')
    await this.$store.dispatch('getMapData')
    await this.$store.dispatch('getAliData')
    await this.$store.dispatch('getAboardData')
    console.log(this.$store.state.aboardData)
    this.show = true
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import "../public/css/base.css";
</style>
