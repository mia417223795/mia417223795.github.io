<template>
  <div class="wrap">
    <header>
      <i class="iconfont icon-shouye1 header-icon" @click="$router.replace('/main')"></i>
      网易严选
      <i class="iconfont icon-gouwuche header-icon" @click="$router.replace('/cart')"></i>
      <i class="iconfont icon-sousuo header-icon"></i>
    </header>
    <div class="main-logo">
      <img src="./images/1.png">
    </div>
    <div class="login">
      <div class="phone-login" @click="$router.push('/phone')">
        <div class="phone-login-wrap">
          <i class="iconfont icon-shouji"></i>
          <span>手机号码登陆</span>
        </div>
      </div>
      <div class="e-mail" @click="$router.push('/email')">
        <div class="e-mail-wrap">
          <i class="iconfont icon-youjian"></i>
          <span>邮箱账号登陆</span>
        </div>
      </div>
      <div class="phone-register" @click="$router.push('/register')">手机号快速注册></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
  @import "../../common/less/less";
  .wrap {
    header {
      position: fixed;
      top: 0;
      z-index: 20;
      .bottom-border-1px();
      background-color: #fafafa;
      height: 87.98/@rem;
      width: 100%;
      padding: 0 .21333rem 0 .32rem;
      box-sizing: border-box;
      font-size: 0.6rem;
      font-family: 楷体;
      text-align: center;
      line-height: 87.98/@rem;
      .header-icon {
        font-size: 0.7rem;
        display: inline-block;
      }
      i:first-child {
        text-align: left;
        float: left;
      }
      i:not(:first-child) {
        float: right;
      }
      .icon-gouwuche {
        margin-left: 0.5rem;
      }
    }
    .main-logo{
      width: 100%;
      height: 410/@rem;
      display: flex;
      justify-content:center;
      align-items: center;
      margin-top: 87.98/@rem;
      img{
        width: 268/@rem;
        height: 90/@rem;
      }
    }
    .login{
      width: 100%;
      height: 292/@rem;
      box-sizing: border-box;
      padding: 0 .53333rem;
      .phone-login{
        width: 670/@rem;
        height: 94/@rem;
        color: #fff;
        border: 1px solid #b4282d;
        background-color: #b4282d;
        font-size: .37333rem;
        display: flex;
        justify-content:center;
        align-items: center;
        margin-bottom: 24/@rem;
        .phone-login-wrap{
          width: 240/@rem;
          height: 98/@rem;
          line-height: 98/@rem;
        }
      }
      .e-mail{
        width: 670/@rem;
        height: 94/@rem;
        color: #b4282d;
        border: 1px solid #b4282d;
        font-size: .37333rem;
        display: flex;
        justify-content:center;
        align-items: center;
        .e-mail-wrap{
          width: 240/@rem;
          height: 98/@rem;
          line-height: 98/@rem;
        }
      }
      .phone-register{
        font-size: .37333rem;
        text-align: center;
        line-height: 98/@rem;
      }
    }
  }
</style>
