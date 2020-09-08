<template>
    <div class="loading">
        <img src="../../assets/load.gif" alt="">
    </div>
</template>

<script>
export default {
  name: 'LOADING'
}
</script>

<style lang="scss" scoped>
.loading{
    position: fixed;
    top:0;
    left:0;
    z-index:121;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  .loading img{
      width: 20px;
      height: 20px;
    margin:400px auto;
  }
</style>
