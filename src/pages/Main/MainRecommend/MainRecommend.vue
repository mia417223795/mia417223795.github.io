<template>
  <div class="recommend-wrap">
    <!--轮播图-->
    <div>
      <swiper></swiper>
    </div>
    <!--main 特有标签-->
    <div class="content-text-title">
      <div class="content-text-title-item">
        <i class="iconfont icon-Shapecopy"></i>
        <span>网易自营品牌</span>
      </div>
      <div class="content-text-title-item">
        <i class="iconfont icon-Shapecopy"></i>
        <span>30天无忧退货</span>
      </div>
      <div class="content-text-title-item">
        <i class="iconfont icon-Shapecopy"></i>
        <span>48小时快速退款</span>
      </div>
    </div>
    <div>
      <cut-off></cut-off>
    </div>
    <div class="recommend-wrap-title">
      <div class="recommend-wrap-title-text">
        <span>品牌制造商直供</span>
        <i class="iconfont icon-right-circle"></i>
      </div>
    </div>
    <ul class="recommend-wrap-list" v-if="tagLists.length">
      <li class="recommend-wrap-list-first">
        <div>
          <div>{{tagLists[0].name}}</div>
          <div>{{tagLists[0].floorPrice}}元起</div>
        </div>
      </li>
      <li class="recommend-wrap-list-second">
        <div>
          <div>{{tagLists[1].name}}</div>
          <div>{{tagLists[1].floorPrice}}元起</div>
        </div>
      </li>
      <li class="recommend-wrap-list-third">
        <div>
          <div>{{tagLists[2].name}}</div>
          <div>{{tagLists[2].floorPrice}}元起</div>
        </div>
      </li>
      <li class="recommend-wrap-list-fourth">
        <div>
          <div>{{tagLists[3].name}}</div>
          <div>{{tagLists[3].floorPrice}}元起</div>
        </div>
      </li>
    </ul>
    <cut-off></cut-off>
    <div v-for="index in 2">
      <cut-off-text></cut-off-text>
      <swiper-list :index="index"></swiper-list>
      <cut-off></cut-off>
    </div>
    <!--
    <cut-off-text></cut-off-text>
    <swiper-list title="scroll-daily-use"></swiper-list>
    <cut-off></cut-off>-->
    <div class="flash-sale">
      <div class="flash-sale-left">
        <div>严选限时购</div>
        <div class="flash-sale-time">
          <span>01</span>:
          <span>54</span>:
          <span>02</span>
        </div>
        <div>
          <span>下一场</span>
          <span>22:00</span>
          <span>开始</span>
        </div>
      </div>
      <img class="flash-sale-left" :src="flashSaleIndexVO.primaryPicUrl">
    </div>
    <cut-off></cut-off>
    <div v-if="flashSaleIndexVO.length">
      <img class="image-text" :src="flashSaleIndexVO.saleIndexVO.picUrl">
    </div>
    <cut-off></cut-off>
    <swiper-two-images></swiper-two-images>
    <div v-for="(item, index) in cateLists" :key="index">
      <product-list :item="item"></product-list>
      <cut-off></cut-off>
    </div>
    <div class="recommend-footer">
      <div class="recommend-footer-button">
        <div>下载APP</div>
        <div>电脑板</div>
      </div>
      <div class="recommend-footer-text">
        <div class="recommend-footer-text-copyright">
          <span>网易公司版权所有 © 1997-</span>
          <span>2018</span>
        </div>
        <div>食品经营许可证：JY13301080111719</div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '../../../components/Swiper/Swiper'
import CutOff from '../../../components/CutOff/CutOff'
import SwiperList from '../../../components/SwiperList/SwiperList'
import CutOffText from '../../../components/CutOffText/CutOffText'
import SwiperTwoImages from '../../../components/SwiperTwoImages/SwiperTwoImages'
import ProductList from '../../../components/ProductList/ProductList'

import {mapState} from 'vuex'
export default {
  mounted () {
    this.$store.dispatch('getPopularItemList')
    this.$store.dispatch('getFlashSaleIndexVO')
    this.$store.dispatch('getCateList')
  },
  computed: {
    ...mapState(['tagLists', 'flashSaleIndexVO', 'cateLists'])
  },
  components: {
    CutOff,
    SwiperList,
    CutOffText,
    SwiperTwoImages,
    ProductList,
    Swiper
  }
}
</script>

<style lang="less" scoped>
@import "../../../common/less/less";
.recommend-wrap{
  width: 100%;
  .content-text-title{
      width: 100%;
      box-sizing: border-box;
      display: flex;
      .content-text-title-item{
        flex: 1;
        font-size: 24/@rem;
        height: 72/@rem;
        width: 100%;
        line-height: 72/@rem;
        i{
          color: #b4282d;
        }
        span{
          font-size: .32rem;
        }
      }
    }
  .recommend-wrap-title{
    width: 100%;
    height: 110/@rem;
    padding: 40/@rem;
    box-sizing: border-box;
    .recommend-wrap-title-text{
      height: 48/@rem;
      width: 270/@rem;
     /* justify-content: center;
      align-items: center;*/
      margin: auto;
      >span{
        color: #333;
        font-size: .42667rem;
        text-align: center;
        float: left;
      }
      >i{
        float: left;
      }
    }
  }
  .recommend-wrap-list{
    width: 718/@rem;
    height: 468/@rem;
    margin: 0 auto;
    margin-bottom: 0.3rem;
    li{
      width: 355/@rem;
      height: 236/@rem;
      background-color: #ededed;
      margin-bottom: .10667rem;
      background-size: cover;
      font-size: .37333rem;
      >div{
        width: 100%;
        height: 93/@rem;
        padding: 0.26667rem 0 0 0.26667rem;
      }
      div:first-child{
        margin-bottom: 0.26667rem;
      }
    }
    .recommend-wrap-list-first{
      float: left;
      background-image: url("./images/1.png");
    }
    .recommend-wrap-list-second{
      float:right;
      background-image: url("./images/2.png");
    }
    .recommend-wrap-list-third{
      float: left;
      background-image: url("./images/3.png");
    }
    .recommend-wrap-list-fourth{
      float:right;
      background-image: url("./images/4.png");
    }
  }
  .flash-sale{
    width: 100%;
    height: 380/@rem;
    padding: .4rem .53333rem .4rem .74667rem;
    .flash-sale-left{
      width: 334/@rem;
      height: 320/@rem;
      float: left;
      div:first-child{
        font-size: 0.48rem;
        margin: 1.06667rem 0 0.3rem 0;
      }
      .flash-sale-time{
        font-size: .42667rem;
        span{
          display: inline-block;
          font-size: .42667rem;
          width: 62/@rem;
          height: 56/@rem;
          background-color: #444;
          color: white;
          text-align: center;
          line-height: 56/@rem;
      }
      }
      div:last-child{
        span{
          font-size: .32rem;
        }
      }
    }
    .flash-sale-left{
      width: 320/@rem;
      height: 320/@rem;
      float: left;
    }
  }
  .image-text{
    width: 100%;
    height: 300/@rem;
  }
  .recommend-footer{
    background-color: #414141;
    border-top: 1px solid rgba(0,0,0,.15);
    box-sizing: border-box;
    font-size: 24px;
    color: #333;
    width: 100%;
    height: 245/@rem;
    padding: .72rem .26667rem .37333rem;
    .recommend-footer-button{
      width: 710/@rem;
      height: 62/@rem;
      display: flex;
      justify-content: center;
      div:first-child{
        margin-right: .66667rem;
      }
      div{
        width: 172/@rem;
        height: 62/@rem;
        border-radius: 4px;
        border: 1px solid #999;
        font-size: .32rem;
        color: #fff;
        text-align: center;
        line-height: 62/@rem;
      }
    }
    .recommend-footer-text{
      font-size: .32rem;
      line-height: .42667rem;
      color: #999;
      div{
        text-align: center;
      }
      .recommend-footer-text-copyright{
        margin: .48rem 0 .06rem;
      }
    }
  }
}
</style>
