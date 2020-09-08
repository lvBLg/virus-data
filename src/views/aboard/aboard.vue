<template>
    <div class="aboard">
        <div class="title">
            <h1>国外疫情</h1>
            <p>数据更新至 {{updateDate | dateformat}}</p>
        </div>
        <div class="panel">
            <panel-item title="累计确诊" :tdNum="totalConfirm" :color="'#ff6a57'" ></panel-item>
            <panel-item title="累计治愈" :tdNum="totalCured" :color="'#10aeb5'"></panel-item>
            <panel-item title="累计死亡" :tdNum="totalDeath" :color="'#4d5054'"></panel-item>
        </div>
        <div class="aboard-card">
            <v-card :arr="province" :map="nameMap" :color='colorList'>
                <v-card-item></v-card-item>
            </v-card>
        </div>
    </div>
</template>

<script>
import { dateFormat } from '@/utils/dateFormat.js'
import panelItem from '@/components/home/panelItem.vue'
import vCard from '@/components/home/card/card'
import vCardItem from '@/components/home/card/cardItem'
export default {
  components: {
    panelItem,
    vCard,
    vCardItem
  },
  data() {
    return {
      updateDate: new Date(),
      totalConfirm: this.$store.state.aboardData.confirmedCount,
      totalCured: this.$store.state.aboardData.curedCount,
      totalDeath: this.$store.state.aboardData.deadCount,
      nameMap: {
        childStatistic: '地区',
        totalConfirmed: '累计确诊',
        totalDeath: '累计死亡',
        totalCured: '累计治愈'
      },
      colorList: ['#E4E7F3', '#EEB9B1', '#E0998E', '#9ADD9B'],
      province: this.getAboard()
    }
  },
  filters: {
    dateformat(value) {
      return dateFormat('yyyy-MM-dd hh:mm:ss', value)
    }
  },
  methods: {
    getdata() {
      const data = this.$store.state.aliData.provinceArray
      data.forEach(element => {
        if (element.childStatistic !== '中国香港' && element.childStatistic !== '中国台湾' && element.childStatistic !== '中国澳门') {
          element.childStatistic = element.childStatistic.slice(0, 2)
        } else {
          element.childStatistic = element.childStatistic.slice(2, 4)
        }
      })
      return data
    },
    getAboard() {
      // [{childStatistic: '亚洲',totalConfirmed: 123,totalCured:123,totalDeath:123,
      // cityArray:[{childStatistic: '中国',totalConfirmed: 123,totalCured:123,totalDeath:123 }]]
      const data = this.$store.state.aboardData.continent
      const newArr = []
      data.forEach(item => {
        const country = []
        item.country.forEach(ctry => {
          country.push({
            childStatistic: ctry.provinceName,
            totalConfirmed: ctry.confirmedCount,
            totalCured: ctry.curedCount,
            totalDeath: ctry.deadCount
          })
        })
        newArr.push({
          childStatistic: item.continentName,
          totalConfirmed: item.confirmedCount,
          totalCured: item.curedCount,
          totalDeath: item.deadCount,
          cityArray: country
        })
      })
      return newArr
    }
  },
  mounted () {
    console.log(this.province)
    console.log(this.$store.state.aboardData.continent)
  }
}
</script>

<style lang="scss" scoped>
.aboard{
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
            flex: 1;
            text-align: center;
            font-weight: 300;
        }
    }
    .aboard-card{
        margin-top: 20px;
    }
}
</style>
