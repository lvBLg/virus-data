<template>
    <div id="home">
        <home-title></home-title>
        <home-panel></home-panel>
        <home-map></home-map>
    </div>
</template>

<script>
import homeTitle from './children/title'
import homePanel from './children/panel'
import homeMap from './children/map'
export default {
  components: {
    homeTitle,
    homePanel,
    homeMap
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
#home{
    padding: 15px 0px;
    font-size: 14px;
}
</style>
