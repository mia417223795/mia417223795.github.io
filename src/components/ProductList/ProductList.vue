<template>
  <div class="product-list">
    <div class="product-list-title">{{item.name}}</div>
    <div class="product-list-content-wrap">
      <ul class="product-list-content">
        <li v-for="(list,index) in item.itemList" :key="index">
          <img :src="list.listPicUrl">
          <div class="product-list-content-text-top">{{list.name}}</div>
          <div class="product-list-content-text-middle">{{list.simpleDesc}}</div>
          <div class="product-list-content-text-bottom">￥{{list.couponPrice}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
  /* mounted () {
    console.log(this.item)
  } */
}
</script>

<style lang="less" scoped>
@import "../../common/less/less";
.product-list{
  .product-list-title{
    width: 100%;
    height: 120/@rem;
    color: #333;
    font-size: .37333rem;
    text-align: center;
    line-height: 120/@rem;
  }
  .product-list-content-wrap{
    width: 100%;
    height: 2198/@rem;
    .product-list-content{
      >li{
        width: 5rem;
        height: 537/@rem;
        padding: 0rem 0.2rem 0.44rem 0.2rem;
        float: left;
        box-sizing: border-box;
        div{
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
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
        }
        .product-list-content-text-bottom{
          font-size: .42667rem;
          color: #b4282d;
        }
      }
    }
  }
}
</style>
