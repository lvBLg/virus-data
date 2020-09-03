<template>
    <div id="home">
        <home-title></home-title>
        <home-panel></home-panel>
    </div>
</template>

<script>
import homeTitle from './children/title'
import homePanel from './children/panel'
export default {
  components: {
    homeTitle,
    homePanel
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
#home{
    padding: 15px 15px;
    font-size: 14px;
}
</style>
