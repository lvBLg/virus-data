<template>
    <div class="broadcast" v-if="show">
      <div class="tap"><span>实时播报</span></div>
      <news-item v-for="news in newsList" :key="news.id" :news="news" ></news-item>
    </div>
</template>

<script>
import { getNewsData } from '@/http/api'
import newsItem from '@/components/broadcast/newsItem.vue'
export default {
  components: {
    newsItem
  },
  data() {
    return {
      newsList: [],
      show: false
    }
  },
  async mounted() {
    await getNewsData().then(res => {
      this.newsList = res.data.newslist[0].news
    })
    this.show = true
    console.log(this.newsList)
  }
}
</script>

<style lang="scss" scoped>
.broadcast{
  padding: 20px 0;
  background-color: #F7F7F7;
  .tap{
    background-color: #fff;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    position: relative;
    font-weight: bold;
    margin-bottom: 20px;
    span{
      margin-left: 20px;
    }
  }
  .tap::before{
    content: '';
    display: block;
    width: 5px;
    height:18px;
    background-color: #5063E0;
    position: absolute;
    top: 15px;
  }
}
</style>
