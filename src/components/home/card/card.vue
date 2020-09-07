<template>
    <div class="card" ref="container">
      <van-sticky :container="container">
        <div class="title">
          <div v-for="(value,key,index) in map" :key="key" :style="{backgroundColor: color[index]}">{{value}}</div>
        </div>
      </van-sticky>
        <slot></slot>
    </div>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array
    },
    map: {
      type: Object
    },
    color: {
      type: Array
    }
  },
  provide() {
    return {
      arr: this.arr,
      map: this.map
    }
  },
  data() {
    return {
      container: null
    }
  },
  mounted () {
    this.container = this.$refs.container
  }
}
</script>

<style lang="scss" scoped>
  .title{
    display: flex;
    >div{
      flex: 1;
      text-align: center;
      font-size: 9px;
      font-weight: bold;
      height: 25px;
      line-height: 25px;
    }
  }
</style>
