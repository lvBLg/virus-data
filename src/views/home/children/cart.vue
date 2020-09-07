<template>
    <div class="carts">
        <h1>国内疫情数据</h1>
        <van-swipe @change="onChange">
            <van-swipe-item>
                <highcharts :options='options'></highcharts>
            </van-swipe-item>
            <van-swipe-item>
                 <highcharts :options='spreadOptions'></highcharts>
            </van-swipe-item>
            <van-swipe-item>
                <highcharts :options='totalConfirmOptions'></highcharts>
            </van-swipe-item>
            <van-swipe-item>
                <highcharts :options='diedOptions'></highcharts>
            </van-swipe-item>
            <template #indicator>
                <div class="custom-indicator">
                {{ current + 1 }}/4
                </div>
            </template>
        </van-swipe>
    </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      spreadOptions: {
        chart: {
          type: 'column'
        },
        title: {
          text: '全国现存确诊分布',
          style: {
            fontSize: '13px',
            fontWeight: 'bold'
          }
        },
        legend: {
          enabled: false
        },
        xAxis: { // x轴显示的内容
          categories: this.$store.state.currData.filter(item => {
            return item.value < 100 && item.value > 0
          }).map(item => item.name)
        },
        yAxis: { // y轴显示的内容
          title: false
        },
        plotOptions: {
          line: {
            dataLabels: {
              enabled: true // 开启数据标签
            },
            enableMouseTracking: false // 关闭鼠标跟踪，对应的提示框、点击事件会失效
          }
        },
        series: [{
          data: this.$store.state.currData.filter(item => {
            return item.value < 100 && item.value > 0
          }).map(item => item.value)
        }]
      },
      totalConfirmOptions: {
        chart: {
          type: 'line'
        },
        title: {
          text: '全国累计确诊趋势',
          style: {
            fontSize: '13px',
            fontWeight: 'bold'
          }
        },
        legend: {
          enabled: false
        },
        xAxis: {
          tickInterval: 20,
          categories: this.$store.state.aliData.trend.map(item => item.day).reverse(),
          reversed: true
        },
        yAxis: {
          title: false
        },
        series: [{
          data: this.$store.state.aliData.trend.map(item => item.sure_cnt).reverse()
        }]
      },
      diedOptions: {
        chart: {
          type: 'line'
        },
        title: {
          text: '全国累计死亡趋势',
          style: {
            fontSize: '13px',
            fontWeight: 'bold'
          }
        },
        legend: {
          enabled: false
        },
        xAxis: {
          tickInterval: 20,
          categories: this.$store.state.aliData.trend.map(item => item.day).reverse(),
          reversed: true
        },
        yAxis: {
          title: false
        },
        series: [{
          data: this.$store.state.aliData.trend.map(item => item.die_cnt).reverse()
        }]
      },
      options: {
        chart: {
          type: 'column'
        },
        title: {
          text: '全国疫情数据统计',
          style: {
            fontSize: '13px',
            fontWeight: 'bold'
          }
        },
        legend: {
          enabled: false
        },
        xAxis: {
          categories: ['累计确诊', '累计疑似', '累计治愈', '累计死亡', '境外输入']
        },
        yAxis: {
          title: false
        },
        plotOptions: {
          column: {
            dataLabels: {
              enabled: true
            }
          }
        },
        series: [{
          data: [
            this.$store.state.yyData.confirmedCount,
            this.$store.state.yyData.suspectedCount,
            this.$store.state.yyData.curedCount,
            this.$store.state.yyData.deadCount,
            this.$store.state.txData.suspectedCount
          ]
        }]
      }
    }
  },
  created() {
    console.log()
  },
  methods: {
    onChange(index) {
      this.current = index
    }
  }
}
</script>

<style lang="scss" scoped>
.carts{
    margin-top: 20px;
    .custom-indicator {
        position: absolute;
        right: 50px;
        top: 5px;
        padding: 2px 5px;
        font-size: 12px;
        background: #999;
        color: #fff
    }
    h1{
      padding: 0 15px;
      font-size: 17px;
      margin-bottom: 10px;
    }
}
</style>
