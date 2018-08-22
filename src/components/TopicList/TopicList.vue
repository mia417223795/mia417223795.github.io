<template>
  <div v-if="newRecommend.length">
    <div class="wrap">
      <header >{{recommend.recommendBanner}}</header>
      <div>
        <div class="topic-list-wrap">
          <img :src="recommend.recommendBanner.picUrl">
          <div class="topic-list-title">{{recommend.recommendBanner.title}}</div>
          <div class="topic-list-text">{{recommend.recommendBanner.subtitle}}</div>
        </div>
        <div>
          <div class="topic-small-wrap" v-for="(item,index) in recommend.recommends" :key="index">
            <div class="topic-small-left">
              <div class="topic-small-left-title">
                <img :src="item.picUrl">
                <span>{{item.nickname}}</span>
              </div>
              <div class="topic-small-left-content">{{item.title}}</div>
              <div class="topic-small-left-annotation">{{item.subtitle}}</div>
            </div>
            <img :src="item.picUrl">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      newRecommend: []
    }
  },
  computed: {
    ...mapState(['recommend'])
  },
  watch: {
    recommend (vel) {
      this.newRecommend = vel.recommends
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/less";
.wrap{
  box-sizing: border-box;
  padding: 0 .4rem .53333rem;
  header{
    width: 690/@rem;
    height: 120/@rem;
    text-align: center;
    line-height: 120/@rem;
    font-size: .42667rem;
  }
  .topic-list-wrap{
    width: 690/@rem;
    height: 574/@rem;
    box-sizing: border-box;
    border: 1px solid #d9d9d9;
    img{
      width: 688/@rem;
      height: 386/@rem;
    }
    div{
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
    .topic-list-title{
      font-size: .48rem;
      margin: 24/@rem 0 24/@rem 24/@rem;
    }
    .topic-list-text{
      margin-left: 24/@rem;
      font-size: .36rem;
      color: #7f7f7f;
    }
  }
  .topic-small-wrap{
    width: 690/@rem;
    height: 274/@rem;
    border: 1px solid #d9d9d9;
    box-sizing: border-box;
    margin-top: 24/@rem;
    .clearFix();
    .topic-small-left{
      width: 405/@rem;
      height: 272/@rem;
      float: left;
      box-sizing: border-box;
      padding: 48/@rem 24/@rem;
      .topic-small-left-title{
        width: 358/@rem;
        height: 48/@rem;
        .clearFix();
        img{
          width: 46/@rem;
          height: 46/@rem;
          border-radius: 50%;
          float: left;
        }
        span{
          font-size: 0.32rem;
          line-height: 1.5;
          color: #7f7f7f;
          float: left;
        }
      }
      div{
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      .topic-small-left-content{
        font-size: .42667rem;
        margin: 24/@rem 0;
      }
      .topic-small-left-annotation{
        font-size: .32rem;
        line-height: 1.5;
        color: #7f7f7f;
      }
    }
    img{
      width: 280/@rem;
      height: 272/@rem;
      float: right;
    }
  }
}
</style>
