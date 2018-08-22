<template>
  <div class="wrap">
    <div class="content-title-wrap">
      <div class="content-title">
        <div>{{titleItem.name}}</div>
        <div>{{titleItem.frontName}}</div>
      </div>
      <div class="living-list-content">
        <ul>
          <li v-for="(acc,index) in item" :key="index">
            <img :src="acc.wapBannerUrl">
            <div class="product-list-content-text-top">{{acc.frontDesc}}}</div>
            <div class="product-list-content-text-middle">{{acc.frontName}}}</div>
            <div class="product-list-content-text-bottom">￥599</div>
          </li>
        </ul>
      </div>
    </div>
    <cut-off></cut-off>
  </div>
</template>

<script>
import CutOff from '../../components/CutOff/CutOff'
export default {
  props: {
    item: Array,
    titleItem: ''
  },
  components: {
    CutOff
  }
}
</script>

<style lang="less" scoped>
  @import "../../common/less/less";
  .wrap{
    .content-title-wrap{
      .content-title{
        width: 100%;
        height: 120/@rem;
        div{
          width: 100%;
          text-align: center;
          padding-top: 16/@rem;
        }
        div:first-child{
          height: 32/@rem;
          font-size: .42667rem;
        }
        div:last-child{
          height: 24/@rem;
          color: #999;
          font-size: .32rem;
        }
      }
      .living-list-content{
        width: 100%;
        /*<!--height: 2198/@rem;-->*/
        >ul{
          .clearFix();
          >li{
            width: 5rem;
            height: 537/@rem;
            padding: 0rem 0.2rem 0.44rem 0.2rem;
            float: left;
            box-sizing: border-box;
            img{
              width: 345/@rem;
              height: 345/@rem;
              background-color: #f4f4f4;
            }
            .product-list-content-text-top{
              width: 345/@rem;
              height: 69/@rem;
              color: #9F8A60;
              background-color: #F1ECE2;
              border-radius: 0 0 .05333rem .05333rem;
              font-size: .32rem;
              padding: .26667rem .13333rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              box-sizing: border-box;
            }
            .product-list-content-text-middle{
              font-size: .37333rem;
              color: #333;
              height: 48/@rem;
              line-height: 48/@rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            .product-list-content-text-bottom{
              font-size: .42667rem;
              color: #b4282d;
            }
          }
          .product-list-content-last{
            background-color: #f4f4f4;
            padding: 1.7rem 0;
            height: 416/@rem;
            div{
              color: #333;
              font-size: .42667rem;
              text-align: center;
            }
            .arrow{
              width: 67/@rem;
              height: 67/@rem;
              background-image: url("./images/2.png");
              background-size: cover;
              margin: .8rem auto 0;
            }
          }
        }
      }
    }
  }
</style>
