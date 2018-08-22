<template>
  <div class="wrap">
    <header>
      购物车
      <span>领券</span>
    </header>
    <div class="title">
      <span>30天无忧退货</span>
      <span>48小时快速退款</span>
      <span>满88元免邮费</span>
    </div>
    <div class="main">
      <div class="mian-content">
        <img src="./images/1.png">
        <div @click="$router.replace('/login')">登陆</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
  @import "../../common/less/less";
  .wrap{
    background-color: #f4f4f4;
    header{
      width: 100%;
      height: 87.98/@rem;
      text-align: center;
      line-height: 87.98/@rem;
      font-size: .48rem;
      background-color: white;
      position: relative;
      span{
        display: block;
        width: 60/@rem;
        height: 33/@rem;
        color: #B4282D;
        font-size: .36rem;
        position: absolute;
        right: 36/@rem;
        top: 2/@rem;
      }
    }
    .title{
      height: 70/@rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      span{
        font-size: .32rem;
        color: #666;
      }
    }
    .main{
      width: 100%;
      height: 14.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .mian-content{
        height: 400/@rem;
        width: 400/@rem;
        text-align: center;
        img{
          width: 248/@rem;
          height: 248/@rem;
          display: inline-block;
        }
        div{
          width: 400/@rem;
          height: 92/@rem;
          background-color: #b4282d;
          text-align: center;
          font-size: .4rem;
          line-height: 1.22667rem;
          color: #fff;
        }
      }
    }
  }
</style>
