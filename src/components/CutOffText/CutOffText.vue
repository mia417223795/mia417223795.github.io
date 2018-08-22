<template>
  <div class="new-goods-wrap">
    <a class="new-goods" href="/">
      <div>新品发售</div>
      <div>查看全部></div>
    </a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
@import "../../common/less/less";
.new-goods-wrap{
  background-image: url("./images/5.png");
  background-size: cover;
  width: 100%;
  height: 260/@rem;
  margin-bottom: .42667rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .new-goods{
    width: 240/@rem;
    height: 126/@rem;
    div:first-child{
      font-size: .48rem;
      color: #8BA0B6;
      text-align: center;
    }
    div:last-child{
      font-size: .37333rem;
      background-color: #D8E5F1;
      text-align: center;
      height: 56/@rem;
      margin-top: .31333rem;
      line-height: .74667rem;
    }
  }
}
</style>
