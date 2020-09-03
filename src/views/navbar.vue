<template>
    <!-- navbar -->
    <ul id="navbar">
      <router-link tag="li" to="/home"><span>国内疫情</span></router-link>
      <router-link tag="li" to="/aboard"><span>国外疫情</span></router-link>
      <router-link tag="li" to="/broadcast"><span>实时播报</span></router-link>
    </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    #navbar{
        margin-top: -10px;
        background-color: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        padding-top: 15px;
        text-align: center;
        display: flex;
        padding-bottom: 8px;
        border-bottom: 1px solid #f5f6f7;
        li{
            flex: 1;
        }
        span{
            font-weight: bold;
            font-size: 80%;
            padding-bottom: 8px;
        }
        .router-link-active span{
            border-bottom: 3px solid #10aeb5;
            font-weight: bold;
            color: #10aeb5;
        }
    }
</style>
