<template>
  <div class="wrap">
    <header>
      <i class="iconfont icon-shouye1 header-icon" @click="$router.replace('/main')"></i>
      网易严选
      <i class="iconfont icon-gouwuche header-icon"></i>
      <i class="iconfont icon-sousuo header-icon"></i>
    </header>
    <div class="content">
      <div class="main-logo">
        <img src="./images/1.png">
      </div>
      <div class="login-content">
        <form>
          <section>
            <input type="tel" placeholder="请输入手机号" value="">
          </section>
          <section>
            <div class="message-wrap">
              <input class="message" type="tel" placeholder="请输入短信验证码" value="">
              <button class="get_verification">获取验证码</button>
            </div>
          </section>
          <div class="phone-login">
            <div class="phone-login-wrap">
              <span>注册</span>
            </div>
          </div>
          <div class="others">
            <div class="others-wrap" @click="$router.push('/login')">
              <span>已有账号</span>
            </div>
          </div>
        </form>
      </div>
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
    .content{
      width: 10rem;
      height: 720/@rem;
      padding: 0 48/@rem;
      box-sizing: border-box;
      .main-logo{
        width: 8rem;
        height: 62/@rem;
        display: flex;
        justify-content:center;
        align-items: center;
        margin-top: 160/@rem;
        margin-bottom: 90/@rem;
        img{
          width: 192/@rem;
          height: 64/@rem;
        }
      }
      .login-content{
        width: 100%;
        font-size: 0.4rem;
        line-height: 0.6rem;
        color: #333;
        >form{
          width: 100%;
          box-sizing: border-box;
          input{
            padding: 0.39rem 0;
            width: 100%;
            outline: none;
            .bottom-border-1px()
          }
          .message-wrap{
            .bottom-border-1px();
            .message{
              width: 65%;
              border: none;
            }
          }
          .get_verification{
            box-sizing: border-box;
            width: 30%;
            height: 0.75rem;
            text-align: center;
            color: #333;
            font-size: 14px;
            background: #fff;
            line-height: 0.75rem;
            border: 1px solid #7F7F7F;
            border-radius: 4px;
          }
          .phone-login{
            width: 100%;
            height: 94/@rem;
            color: #fff;
            border: 1px solid #b4282d;
            background-color: #b4282d;
            font-size: .37333rem;
            display: flex;
            justify-content:center;
            align-items: center;
            margin-bottom: 24/@rem;
            margin-top: 48/@rem;
            text-align: center;
            .phone-login-wrap{
              width: 240/@rem;
              height: 98/@rem;
              line-height: 98/@rem;
            }
          }
          .others{
            width: 100%;
            height: 94/@rem;
            color: #b4282d;
            border: 1px solid #b4282d;
            font-size: .37333rem;
            display: flex;
            justify-content:center;
            align-items: center;
            text-align: center;
            .others-wrap{
              width: 240/@rem;
              height: 98/@rem;
              line-height: 98/@rem;
            }
          }
        }
      }
    }
  }
</style>
