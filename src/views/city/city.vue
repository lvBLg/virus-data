<template>
    <div class="city">
        <div class="title">
            <h1>{{this.$route.query.province}}</h1>
            <p>数据更新至 {{updateDate | dateformat}}</p>
        </div>
        <div class="panel">
            <panel-item title="现有确诊" :tdNum="currConfirm" :color="'#ff6a57'" ></panel-item>
            <panel-item title="累计确诊" :tdNum="totalConfirm" :color="'#e83132'" ></panel-item>
            <panel-item title="累计治愈" :tdNum="totalCured" :color="'#10aeb5'"></panel-item>
            <panel-item title="累计死亡" :tdNum="totalDeath" :color="'#4d5054'"></panel-item>
        </div>
    </div>
</template>

<script>
import { dateFormat } from '@/utils/dateFormat.js'
import panelItem from '@/components/home/panelItem.vue'
export default {
  components: {
    panelItem
  },
  data() {
    return {
      updateDate: new Date(),
      currConfirm: 0,
      totalConfirm: 0,
      totalCured: 0,
      totalDeath: 0
    }
  },
  filters: {
    dateformat(value) {
      return dateFormat('yyyy-MM-dd hh:mm:ss', value)
    }
  },
  mounted () {
    this.getData()
    console.log(this.$store.state.aliData)
  },
  watch: {
    $route() {
      this.getData()
    }
  },
  methods: {
    getData() {
      this.$store.state.currData.forEach(element => {
        if (element.name === this.$route.query.province) {
          this.currConfirm = element.value
        }
      })
      this.$store.state.aliData.provinceArray.forEach(item => {
        if (item.childStatistic.indexOf(this.$route.query.province) !== -1) {
          this.totalConfirm = item.totalConfirmed
          this.totalCured = item.totalCured
          this.totalDeath = item.totalDeath
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.city{
    padding: 0 15px;
    .title{
        h1{
            margin-top: 15px;
            font-size: 12px;
        }
        p{
            font-size: 8px;
            color: #999;
            margin-top: 5px;
        }
    }
    .panel{
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        border-radius: 4px;
        background-color: #F5F6F7;
        .panel-item{
            padding: 10px 0;
            width: 25%;
            text-align: center;
            font-weight: 300;
        }
    }
}

</style>
