<template>
    <div class="list">
      <v-card :arr="province" :map="nameMap" :color='colorList'>
        <v-card-item></v-card-item>
      </v-card>
    </div>
</template>

<script>
import vCard from '@/components/home/card/card'
import vCardItem from '@/components/home/card/cardItem'
export default {
  components: {
    vCard,
    vCardItem
  },
  data() {
    return {
      nameMap: {
        childStatistic: '地区',
        totalConfirmed: '累计确诊',
        totalDeath: '累计死亡',
        totalDoubtful: '累计疑似',
        totalCured: '累计治愈'
      },
      colorList: ['#E4E7F3', '#EEB9B1', '#E0998E', '#B6BFD5', '#9ADD9B'],
      province: this.getdata()
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
    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
.list{
  margin-top: 20px;
  padding: 0 15px;
}
</style>
