<template>
    <div class="home-title">
        <h1>国内疫情</h1>
        <p>数据更新至 {{updateDate | dateformat}}</p>
        <div class="data-tip" @click="showPop">
            <svg-icon icon-class="qst"></svg-icon>
            <span> 数据说明</span>
        </div>
        <!-- data illustrate popup -->
        <van-popup class="data-illus" v-model="popShow" bind:close="onClose">
          <div>
            <div class="close" @click="popShow=false">
              <svg-icon icon-class="close" ></svg-icon>
            </div>
            <div class="title">数据说明</div>
            <div class="content">
              <p>1、数据来源：<br>来自国家卫健委、各省市区卫健委、各省市区政府、港澳台官方渠道公开数据；<br><br>2、数据统计原则：<br>a) 每日上午全国数据会优先使用国家卫健委公布的数据（此时各省市数据尚未及时更新，会出现全国数据大于各省份合计数的情况）；<br>b) 当各省公布数据总和大于国家卫健委公布的数据时，则全国数据切换为各省合计数；<br>c) 全国数据含港澳台地区数据；<br><br>3、数据更新时间：<br>实时更新全国、各省市区数据，因需要核实计算，与官方发布的时间相比，将有一定的时间延迟；<br><br>4、全国疫情总数中「昨日+」的数据来源于每天上午卫建委发布的上一日的新增病例数，其含义是上一天24小时内新增的病例数：<br>a)&nbsp;「昨日+」新增疑似病例数据，代表当日新被诊断为疑似病例的人数。而累计疑似病例数除了当日新增之外，还会随着历史疑似病例的确诊和解除疑似而减少，所以累计增加的疑似病例数一般会比「昨日+」疑似病例数小。疑似数据按日更新，仅同步全国总数；<br>b)&nbsp;「昨日+」新增确诊人数在经过核查后，可能会有少量排除确诊而减少；<br><br>5、国外数据说明：<br>a) 数据来源：国外疫情数据来自权威机构的公开报道、世卫组织（WHO）、各国官方通报；<br>b) 统计口径：因各国分不同时区，疫情数据日期统一采用北京时间的日期；新增数据与趋势图数据为昨日数据与前日数据相减的结果，每天更新一次；<br>c) 更新时间：国外疫情数据因追踪、核实需要，与各国官方的发布时间相比较有一定的延迟。<br></p>
            </div>
          </div>
        </van-popup>
    </div>
</template>

<script>
import { dateFormat } from '@/utils/dateFormat.js'
export default {
  data() {
    return {
      updateDate: new Date(),
      popShow: false
    }
  },
  filters: {
    dateformat(value) {
      return dateFormat('yyyy-MM-dd hh:mm:ss', value)
    }
  },
  methods: {
    showPop() {
      this.popShow = true
    }
  }
}
</script>

<style lang="scss" scoped>
    .home-title{
      position: relative;
    }
    h1{
        font-size: 14px;
    }
    p{
        margin-top: 5px;
        font-size: 10px;
        color: #999;
    }
    .data-tip{
      font-size: 10px;
      color: #999;
      position: absolute;
      right: 0;
      bottom: 0;
      svg{
        vertical-align: middle;
      }
    }
    .data-illus{
      height: 350px;
      width: 300px;
      border-radius: 2px;
      .close{
        position: absolute;
        font-size: 20px;
        right: 5px;
        top: 5px;
        color: #fff;
      }
      .title{
        background-color: #3CB0BE;
        height: 50px;
        line-height: 50px;
        text-align: center;
        color: #fff;
        font-size: 18px;
        font-weight: bold;
      }
      .content{
        height: 300px;
        padding: 10px 15px 18px;
        overflow-y: scroll;
        p{
          color: #555;
          font-size: 11px;
        }
      }
    }
</style>
