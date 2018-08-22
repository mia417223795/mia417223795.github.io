<template>
  <div class="goods-scroll-wrap" :class="index === 1 ? 'firstSwiper' : 'secondSwiper'">
    <ul class="goods-scroll">
      <li v-for="(item, i) in list" :key="i">
        <img :src="item.primaryPicUrl">
        <div class="goods-scroll-title">{{item.name}}</div>
        <div class="goods-scroll-content">{{item.simpleDesc}}</div>
        <div class="goods-scroll-price">￥{{item.retailPrice}}</div>
      </li>
      <!--<li class="goods-scroll-last">
        <div class="look-at-all">查看全部</div>
      </li>-->
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  props: {
    index: Number
  },
  computed: {
    ...mapState(['newItemLists', 'popularItemLists']),
    list () {
      if (this.index === 1) {
        return this.newItemLists
      } else {
        return this.popularItemLists
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        /* eslint-disable no-new */
        new BScroll(this.index === 1 ? '.firstSwiper' : '.secondSwiper', {
          scrollX: true,
          click: true
        })
      }, 1000)
    })
    // console.log(typeof this.index, this.index, this.list, this.newItemLists)
  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/less";
.goods-scroll-wrap{
  width: 10rem;
  height: 480/@rem;
  overflow: hidden;
  .goods-scroll{
    float: left;
    white-space: nowrap;
    li{
      display: inline-block;
      width: 280/@rem;
      height: 414/@rem;
      margin-left: .42667rem;
      img{
        width: 280/@rem;
        height: 280/@rem;
        background-color: #f4f4f4;
      }
      div{
        width: 287/@rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .goods-scroll-title{
        height: 31/@rem;
        font-size: .37333rem;
      }
      .goods-scroll-content{
        height: 30/@rem;
        color: #7f7f7f;
        font-size: .32rem;
        margin: .18667rem 0;
      }
      .goods-scroll-price{
        height: 31/@rem;
        font-size: .37333rem;
        color: #b4282d;
      }
      .look-at-all{
        width: 280/@rem;
        height: 280/@rem;
        margin-right: 0.42667rem;
        font-size: .37333rem;
        color: #666;
        text-align: center;
        line-height: 300/@rem;
        border: solid 4px #f4f4f4;
      }
    }
  }
}
</style>
