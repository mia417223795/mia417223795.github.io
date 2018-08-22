<template>
  <div class="wrap">
    <header>
      <i class="iconfont icon-shouye1 header-icon"
         @click="$router.replace('/main')"></i>
      网易严选
      <i class="iconfont icon-gouwuche header-icon"
         @click="$router.replace('/cart')"></i>
      <i class="iconfont icon-sousuo header-icon"></i>
    </header>
    <div class="content">
      <div class="main-logo">
        <img src="./images/1.png">
      </div>
      <div class="login-content">
        <form @submit.prevent="login">
          <section>
            <div class="message-wrap">
              <input class="message-code"
                     type="tel"
                     maxlength="11"
                     placeholder="请输入手机号"
                     v-model="phone"
              >
              <button class="get_verification"
                      :class="{get_verification_initial:isRightPhone}"
                      @click.prevent="sendCode">
                {{countDown>0?`已发送${countDown}s`:'获取验证码'}}
              </button>
            </div>
            <div class="enter-phone-number"
                 v-show="!isRightPhone && phone.length===11">
                  请输入正确手机号!
            </div>
          </section>
          <section>
            <input type="tel"
                   maxlength="8"
                   placeholder="请输入短信验证码"
                   v-model="code"
            >
            <div class="enter-code"
                 v-show="isRightPhone && code.length===4">
              请输入正确短信验证码!
            </div>
          </section>
          <div class="hint-text">
            <span class="account">遇到问题？</span>
            <span class="password">使用密码验证登陆</span>
          </div>
          <div class="phone-login">
            <button class="phone-login-wrap">
              <span>登陆</span>
            </button>
          </div>
        </form>
        <div class="others">
          <button class="others-wrap"
                  @click="$router.replace('/email')"
          >
            <span>其他方式登陆</span>
          </button>
        </div>
        <div class="register"
             @click="$router.replace('/register')">
          注册账号>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reqSendCode, reqSmsLogin} from '../../api'
export default {
  data () {
    return {
      phone: '',
      code: '',
      countDown: 0
    }
  },
  computed: {
    isRightPhone () {
      return /^1\d{10}$/.test(this.phone)
    }
  },
  methods: {
    async sendCode () {
      if (this.isRightPhone && this.countDown === 0) {
        this.countDown = 3
        const intervalId = setInterval(() => {
          this.countDown--
          if (this.countDown <= 0) {
            clearInterval(intervalId)
            this.countDown = 0
          }
        }, 1000)
        const result = await reqSendCode(this.phone)
        if (result.code === 1) {
          this.countDown = 0
          console.log('验证码发送失败')
        } else {
          console.log('验证码发送成功')
        }
      }
    },
    async login () {
      const result = await reqSmsLogin(this.phone, this.code)
      if (result.code === 0) {
        this.$router.replace('/ucenter')
      } else {
        console.log('登陆失败')
      }
    }
  }
}
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
            .message-code{
              width: 65%;
              border: none;
            }
          }
          .enter-phone-number{
            color: #b4282d;
            font-size: 0.2rem;
          }
          .enter-code{
            color: #b4282d;
            font-size: 0.2rem;
          }
          .get_verification{
            box-sizing: border-box;
            width: 30%;
            height: 0.75rem;
            text-align: center;
            color: #eee;
            font-size: 14px;
            background: #fff;
            line-height: 0.75rem;
            border: 1px solid #7F7F7F;
            border-radius: 4px;
          }
          .get_verification_initial{
            color: #000;
            box-sizing: border-box;
            width: 30%;
            height: 0.75rem;
            text-align: center;
            font-size: 14px;
            background: #fff;
            line-height: 0.75rem;
            border: 1px solid #7F7F7F;
            border-radius: 4px;
          }
          .hint-text{
            width: 100%;
            height: 40/@rem;
            margin: 48/@rem 0;
            .password{
              float: right;
            }
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
            text-align: center;
            .phone-login-wrap{
              width: 240/@rem;
              height: 98/@rem;
              line-height: 98/@rem;
              background-color: #b4282d;
              border: none;
              color: #fff;
            }
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
            background-color: #fff;
            border: none;
            border-top: 1px solid #b4282d;
            border-bottom: 1px solid #b4282d;
          }
        }
        .register{
          width: 100%;
          height: 48/@rem;
          margin-top: 36/@rem;
          text-align: center;
        }
      }
    }
  }
</style>
