<template>
  <!-- header -->
  <div id="header">
    <div class="header-top">
      <van-row type="flex" justify="space-between">
        <van-col span="12">
          <img class="logo" src="../assets/baidu-logo.png" alt="" />
        </van-col>
        <van-col span="6" class="ctg-loc">
          <div>
            <van-button color="#BDEBED" round size="mini"
              >切换地区 <van-icon name="arrow-down"
            /></van-button>
          </div>
        </van-col>
      </van-row>
    </div>
    <div class="header-text">
      <h2>新型冠状病毒肺炎</h2>
      <h1>疫情实时大数据报告</h1>
      <p>共 {{ browseNum | numFormat}} 人次已浏览</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      browseNum: 7831379880
    }
  },
  filters: {
    // number formater: x,xxx,xxx
    numFormat(value) {
      if (!value) return '0.00'
      const intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
      return intPartFormat
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  padding: 20px 20px;
  height: 170px;
  background: url("../assets/bg-header.jpg") no-repeat top center;
  background-size: 100% 100%;
  .header-top {
    margin-bottom: 20px;
    .logo {
      height: 24px;
      vertical-align: middle;
    }
  }

  .van-button__content {
    color: #104345;
    font-size: 10px;
    width: 80px;
  }
  .header-text {
    h2 {
      letter-spacing: 2px;
      font-size: 12px;
      color: #c4faff;
      font-weight: normal;
    }
    h1 {
      font-size: 20px;
      color: #fff;
      mask-image: -webkit-gradient(
        linear,
        0 0,
        0 bottom,
        from(rgba(0, 0, 255, 0)),
        to(#afdade)
      );
    }
    p{
      background-color: #349BA8;
      margin-top: 10px;
      color: #fff;
      font-size: 10px;
      height: 20px;
      width: 200px;
      border-radius: 10px;
      text-align: center;
      line-height: 20px;

    }
  }
}
</style>
