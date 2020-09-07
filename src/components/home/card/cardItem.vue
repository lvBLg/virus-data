<template>
<div >
    <div class="card-item" v-for="(item,index) in fold" :key="item.key" @click="toggleExpand(index)">
        <div class="fold">
            <span v-for="(value,key) in map" :key="key">{{item[key]}}</span>
        </div>
        <div v-if="expandList.indexOf(index)!==-1">
          <div class="expand" v-for="city in arr[index].cityArray" :key="city.childStatistic">
            <span v-for="(value,key) in map" :key="key">
              {{city[key]}}
            </span>
          </div>
        </div>
    </div>
    <div class="more" @click="showMore">{{showAll?'收起':'展开更多'}}</div>
</div>
</template>

<script>
export default {
  inject: ['arr', 'map'],
  data() {
    return {
      expandList: [],
      showAll: false
    }
  },
  computed: {
    fold() {
      const foldArr = []
      const showList = []
      for (let i = 0; i < this.arr.length; i++) {
        // 过滤数组中的子数组
        const obj = {}
        for (const k in this.arr[i]) {
          if (typeof this.arr[i][k] !== 'object') {
            obj[k] = this.arr[i][k]
          }
        }
        foldArr.push(obj)
      }
      if (this.showAll) {
        return foldArr
      } else {
        for (let index = 0; index < foldArr.length / 2; index++) {
          showList.push(foldArr[index])
        }
        return showList
      }
    }
  },
  created () {
    console.log(this.arr)
  },
  filters: {
    province: function(value) {
      return value
    }
  },
  methods: {
    toggleExpand(index) {
      if (this.expandList.indexOf(index) !== -1) {
        const del = this.expandList.indexOf(index)
        this.expandList.splice(del, 1)
      } else {
        this.expandList.push(index)
      }
    },
    showMore() {
      this.showAll = !this.showAll
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-item{
    .fold{
      display: flex;
      height: 25px;
      line-height: 25px;
      background-color: #F7F7F7;
    }
    .expand{
      display: flex;
      height: 20px;
      line-height: 20px;
    }
    span{
      flex: 1;
      text-align: center;
      font-size: 8px;
    }
  }
  .more{
    margin-top: 5px;
    text-align: center;
    font-size: 10px;
    color: #4169e2;
  }
</style>
