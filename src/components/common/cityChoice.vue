<template>
    <div class="select">
        <div class="back">
            <div class="icon" @click="back">
                <svg-icon icon-class="left" ></svg-icon>
            </div>
            选择地区
        </div>
        <van-tree-select
        :items="items"
        :active-id.sync="activeId"
        :main-active-index.sync="activeIndex" @click-item="chooseCity" @click-nav="chooseProvince"
        />
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeId: '',
      activeIndex: '',
      items: [],
      province: '北京'
    }
  },
  created() {
    this.$axios.get('../../../data/city.json').then(res => {
      this.items = res.data
    })
  },
  methods: {
    chooseCity(data) {
      this.$parent._data.cityPanel = false
      console.log(data)
      this.$router.push({ path: '/city', query: { city: data.text, province: this.province } })
    },
    chooseProvince(index) {
      this.province = this.items[index].text
      console.log(this.province)
    },
    back() {
      this.$parent._data.cityPanel = false
    }
  }
}
</script>

<style lang="scss" scoped>
.select{
    height: 100%;
    .van-tree-select{
        height: 100% !important;
    }
    .back{
        background-color: #fff;
        text-align: center;
        height: 40px;
        line-height: 50px;
        font-weight: bold;
        svg{
            font-size: 20px;
            float: left;
            margin: 15px 0 0 15px;
        }
    }
}
</style>
