<template>
  <div class="project-selection-wrap">
    <div class="project-selection-title-wrap">
      <div class="project-selection-title">
        <span>专题精选</span>
        <i class="iconfont icon-right-circle"></i>
      </div>
    </div>
    <div class="project-selection-content-wrap" v-if="topicLists.length">
      <ul class="project-selection">
        <li class="project-selection-content" v-for="index in 2" :key="index">
          <img :src="topicLists[0].itemPicUrl">
          <div></div>
          <div></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        /* eslint-disable no-new */
        new BScroll('.project-selection-content-wrap', {
          scrollX: true,
          click: true
        })
      }, 1000)
    })
    this.$store.dispatch('getTopicList')
  },
  // itemPicUrl
  computed: {
    ...mapState(['topicLists'])
  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/less";
.project-selection-wrap{
  width: 100%;
  height: 563/@rem;
  .project-selection-title-wrap{
    width: 100%;
    height: 110/@rem;
    display: flex;
    justify-content:center;
    align-items:center;
    .project-selection-title{
      font-size: .42667rem;
      color: #333;
    }
  }
  .project-selection-content-wrap{
    width: 10rem;
    height: 453/@rem;
    padding: 0 .4rem .48rem;
    overflow: hidden;
    box-sizing: border-box;
    .project-selection{
      float: left;
      white-space: nowrap;
      li{
        display: inline-block;
        margin-right: .4rem;
        img{
          width: 575/@rem;
          height: 391/@rem;
        }
        div:first-child{
          font-size: .37333rem;
          width: 575/@rem;
          height: 41/@rem;
        }
        div:last-child{
          font-size: 0.32rem;
          color: #7F7F7F;
          width: 575/@rem;
          height: 36/@rem;
        }
      }
    }
  }
}
</style>
