<template>
    <div class="data-panel">
      <panel-item title="现有确诊" :tdNum="yy.currentConfirmedCount" :color="'#ff6a57'" :rltv="yy.currentConfirmedAdd"></panel-item>
      <panel-item title="无症状" :tdNum="tx.seriousCount" :color="'#e86d48'" :rltv="tx.seriousIncr"></panel-item>
      <panel-item title="累计疑似" :tdNum="yy.suspectedCount" :color="'#ec9217'" :rltv="yy.suspectedAdd"></panel-item>
      <panel-item title="现有重症" :tdNum="yy.severecasesCount" :color="'#545499'" :rltv="yy.severecasesAdd"></panel-item>
      <panel-item title="累计确诊" :tdNum="yy.confirmedCount" :color="'#e83132'" :rltv="yy.confirmedAdd"></panel-item>
      <panel-item title="境外输入" :tdNum="tx.suspectedCount" :color="'#476da0'" :rltv="tx.suspectedIncr"></panel-item>
      <panel-item title="累计治愈" :tdNum="yy.curedCount" :color="'#10aeb5'" :rltv="yy.curedAdd"></panel-item>
      <panel-item title="累计死亡" :tdNum="yy.deadCount" :color="'#4d5054'" :rltv="yy.deathAdd"></panel-item>
    </div>
</template>

<script>
import panelItem from '@/components/home/panelItem.vue'
export default {
  components: {
    panelItem
  },
  data() {
    return {
      yy: this.$store.state.yyData,
      tx: this.$store.state.txData
    }
  }
}
</script>

<style lang="scss" scoped>
.data-panel{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    .panel-item{
      margin-bottom: 10px;
        width: 25%;
        text-align: center;
    }
}
</style>
