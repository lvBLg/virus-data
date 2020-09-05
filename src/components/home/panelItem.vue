<template>
    <div class="panel-item">
        <p class="title">{{title}}</p>
        <p class="today" :style="{color: color}">{{tdNum}}</p>
        <p class="relative" >昨日<span :style="{color: color}">{{rltvnum}}</span></p>
    </div>
</template>

<script>
export default {
  props: ['title', 'tdNum', 'rltv', 'color'],
  data() {
    return {
    }
  },
  computed: {
    rltvnum() {
      return this.rltv ? (this.rltv > -1 ? '+' + this.rltv : this.rltv) : '+0'
    }
  }
}
</script>

<style lang="scss" scoped>
    .title{
        font-size: 11px;
    }
    .today{
        font-size: 16px;
        color: #ff6a57;
        font-weight: bold;
        margin: 5px 0 1px
    }
    .relative{
        font-size: 9px;
        color: #999;
        margin-bottom: 15px;
    }
</style>
