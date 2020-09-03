<template>
    <div>
实时播报{{panelData}}
    </div>
</template>

<script>
export default {
  data() {
    return {
      panelData: {}
    }
  },
  mounted() {
    this.$bus.$on('getData', data => {
      this.panelData = data
      console.log(this.panelData)
      console.log(11111)
    })
    console.log(111)
  }
}
</script>

<style lang="scss" scoped>

</style>
