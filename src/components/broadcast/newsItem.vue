<template>
    <div class="news-item" @click="jump">
        <h1 class="title">{{news.title}}</h1>
        <p class="content">{{news.summary}}</p>
        <div class="bottom">
            <div class="date"><p style="color: #999">{{new Date(news.pubDate) | dateformat}}</p><p style="font-weight:bold">{{news.pubDateStr}}</p></div>
            <div class="source">信息来源：{{news.infoSource}}</div>
        </div>
    </div>
</template>

<script>
import { dateFormat } from '@/utils/dateFormat.js'
export default {
  props: ['news'],
  filters: {
    dateformat(value) {
      return dateFormat('MM-dd hh:mm', value)
    }
  },
  methods: {
    jump() {
      window.location.href = this.news.sourceUrl
    }
  }
}
</script>

<style lang="scss" scoped>
    .news-item{
        padding: 10px;
        width: 80%;
        margin: 0 auto 20px;
        background-color: #fff;
        border-radius: 5px;
        .title{
            font-size: 14px;
        }
        .content{
            margin-top: 5px;
            font-size: 12px;
            color: #999;
            line-height: 18px;
        }
        .bottom{
            display: flex;
            margin-top: 10px;
            div{
                flex: 1;
            }
            .date{
                font-size: 10px;
            }
            .source{
                font-size: 12px;
                text-align: right;
                color: #999;
                padding-top: 10px;
            }
        }
    }
</style>
