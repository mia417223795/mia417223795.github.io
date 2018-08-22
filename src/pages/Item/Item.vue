<template>
  <div class="wrap">
    <div class="header" >
      <div class="header-inside">
        <i class="top-search-icon iconfont icon-search1187938easyiconnet"></i>
        <span>搜索商品, 共10739款好物</span>
      </div>
    </div>
    <div class="content">
      <div class="content-left">
        <ul ref="content">
          <li v-for="(item,index) in categorys" :key="index" @click="showData(index)" :class="{on:index === liIndex}">
            {{item.name}}
          </li>
        </ul>
      </div>
      <div class="content-right-wrap" v-if="categorys.length">
        <div class="content-right">
          <img class="content-right-images" :src="categorys[liIndex].wapBannerUrl">
          <div class="content-right-title">{{categorys[liIndex].name}}</div>
          <div class="content-right-content">
            <ul>
              <li v-for="(item,i) in categorys[liIndex].subCateList"
                  :key="i"
                  :style="i % 3===2?'margin-right: 0':'margin-right: 0.6rem'">
                <img :src="item.wapBannerUrl">
                <div class="content-right-content-text">{{item.name}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      // 当前的index
      liIndex: 0
    }
  },
  mounted () {
    this.$store.dispatch('getCategoryData')
  },
  computed: {
    ...mapState(['categorys'])
  },
  methods: {
    showData (i) {
      this.liIndex = i
    }
  },
  watch: {
    categorys () {
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BScroll('.content-left', {
          scrollX: true,
          click: true
        })
      })
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BScroll('.content-right-wrap', {
          scrollX: true,
          click: true
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import "../../common/less/less";
  .wrap{
    width: 100%;
    height: 100%;
    .header{
      z-index: 20;
      background-color: white;
      height: 87.98/@rem;
      padding: 0 .4rem;
      color: #666;
      font-size: .37333rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      background-color: white;
      .bottom-border-1px();
      .header-inside{
        width: 690/@rem;
        height: 56/@rem;
        background-color: #ededed;
        margin: auto 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .content{
      margin-top: 87.98/@rem;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding-bottom: 2.5rem;
      .clearFix();
      .content-left{
        width: 162/@rem;
        height: 100%;
        box-sizing: border-box;
        float: left;
        color: #333;
        font-size: .37333rem;
        .right-border-1px();
        &>ul{
          width: 100%;
          &>li{
            width: 162/@rem;
            height: 50/@rem;
            text-align: center;
            margin: 50/@rem 0;
            line-height: 50/@rem;
            &.on{
              font-size: 0.5rem;
              color: #ab2b2b;
              border-left: 2px solid #ab2b2b;
            }
          }
          &>li:last-child{
            margin-bottom: 0.5rem;
          }
          /*&>li:not(:first-child){
            margin-top: 50/@rem;
          }*/
        }
      }
      .content-right-wrap{
        width: 588/@rem;
        height: 100%;
        float: left;
        padding: .4rem .4rem 0 .4rem;
        box-sizing: border-box;
        .content-right{
          overflow: hidden;
          .content-right-images{
            width: 528/@rem;
            height: 192/@rem;
          }
          .content-right-title{
            width: 528/@rem;
            height: 108/@rem;
            text-align: center;
            line-height: 108/@rem;
            font-size: .32rem;
            color: #333;
          }
          .content-right-content{
            width: 100%;
            box-sizing: border-box;
            ul{
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              /*justify-content: space-between;*/
              align-content: flex-start;
              li{
                width: 144/@rem;
                height: 216/@rem;
                img{
                  width: 144/@rem;
                  height: 144/@rem;
                }
                .content-right-content-text{
                  text-align: center;
                  font-size: .32rem;
                  color: #333;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
