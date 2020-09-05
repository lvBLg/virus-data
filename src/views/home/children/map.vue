<template>
    <div class="map">
       <van-tabs class="tab" type="card" color="#3DBFC6" v-model="active" @click="tabClick">
        <van-tab title="现有确诊" title-style="color: #000;font-size:16px">
          <p>现有确诊病例数，排除治愈、死亡</p>
          <highcharts :constructor-type="'mapChart'" :options="options"></highcharts>
        </van-tab>
        <van-tab title="累计确诊" title-style="color: #000;font-size:16px">
          <p>累计确诊病例数，包含治愈、死亡</p>
          <highcharts :constructor-type="'mapChart'" :options="options"></highcharts>
        </van-tab>
       </van-tabs>
    </div>
</template>

<script>
import mapData from '@/js/chinaMap.js'
export default {
  data() {
    return {
      data: this.active,
      active: 0

    }
  },
  computed: {
    options() {
      const options = {
        title: false,
        chart: {
          backgroundColor: '#F8F9FA'
        },
        legend: {
          itemStyle: {
            fontSize: '8px',
            fontWeight: '400',
            fontFamily: 'Microsoft YaHei',
            color: '#999'
          },
          floating: true,
          align: 'left',
          verticalAlign: 'bottom',
          layout: 'vertical',
          valueDecimals: 0,
          symbolRadius: 2,
          symbolWidth: 10,
          symbolHeight: 10,
          itemMarginTop: 1,
          squareSymbol: false,
          symbolPadding: 8
        },
        colorAxis: {
          dataClasses: [{
            from: 10000,
            color: '#B10013'
          }, {
            from: 1000,
            to: 9999,
            color: '#DE3F49'
          }, {
            from: 100,
            to: 999,
            color: '#ED7269'
          }, {
            from: 10,
            to: 99,
            color: '#F89887'
          }, {
            from: 1,
            to: 9,
            color: '#FDE5DB'
          }, {
            name: 0,
            from: 0,
            to: 0,
            color: '#fff'
          }]
        },
        tooltip: {
          // headerFormat是默认的有显示的格式，所以将它改为空字符串不显示
          headerFormat: '',
          pointFormat: '{point.name}<br/>确诊 {point.value} 例',
          backgroundColor: 'rgba(0,0,0,.5)',
          borderColor: 'null',
          borderRadius: '10',
          style: {
            color: '#fff',
            fontSize: '12px'
          }
        },
        series: [{
          data: this.active === 1 ? this.$store.state.totalData : this.$store.state.currData,
          borderColor: '#999',
          borderWidth: 0.5,
          cursor: 'pointer',
          dataLabels: {
            overflow: 'none',
            crop: 'false',
            align: 'center',
            // enabled为true才能显示地图上你需要显示的数据
            enabled: true,
            color: '#000',
            // 显示数据的格式
            format: '{point.name}',
            style: {
              fontSize: '8px',
              'text-align': 'center',
              textOutline: '0px 0px contrast',
              'font-weight': 'bold'
            }
          },
          // 当鼠标划过时，设置相应区域的颜色
          states: {
            hover: {
              color: '#CDFFFD'
            }
          },
          mapData: mapData,
          joinBy: 'name',
          name: '中国地图'
        }]
      }
      return options
    }
  },
  created() {
  },
  methods: {
    tabClick(name, title) {
      this.active = name
    }
  }
}
</script>

<style lang="scss" scoped>
.map{
    background-color: #F8F9FA;
    .tab{
      padding-top: 15px;
    }
    p{
      text-align: center;
      font-size: 9px;
      color:#999;
      margin: 10px 0;
    }
}
</style>
