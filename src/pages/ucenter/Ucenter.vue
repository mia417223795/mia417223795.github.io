<template>
  <div class="wrap">
    <div class="header-title">
      个人主页
      <div class="userPhone">16619xxxxxx</div>
      <div class="userName">mia</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  @import "../../common/less/less";
  .wrap {
    .header-title{
      width: 10rem;
      height: 270/@rem;
      background-color: darkgoldenrod;
      display: flex;
      align-items:center;
      flex-wrap: wrap;
      box-sizing: border-box;
      padding: 0 36/@rem;
      .userPhone{
        width: 10rem;
        height: 48/@rem;
        color: white;
        font-size: .48rem;
        margin: 48/@rem 0;
      }
      .userName{
        width: 10rem;
        height: 48/@rem;
        color: white;
        font-size: .48rem;
      }
    }
  }
</style>
