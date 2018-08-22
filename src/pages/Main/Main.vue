<template>
  <section class="main">

    <!--头部固定定位-->
    <div class="header-wrap">
      <!--首页头部布局-->
      <div class="header-top">
        <div class="top-main"></div>
        <div class="top-search">
          <i class="top-search-icon iconfont icon-search1187938easyiconnet"></i>
          <span>搜索商品, 共10719款好物</span>
        </div>
      </div>
      <!--内容布局-->
      <div class="tab-shop-wrap" v-if="headCates.length">
        <ul class="tab-shop" >
          <li class="tab-item"
              :class="{on:isRoute('/main/recommend')}"
              @click="clearIndex()"
          >
            <router-link to="/main/recommend">{{headCates[0].name}}</router-link>
          </li>
          <li class="tab-item"
              @click="showData({mainIndex,item})"
              :class="{on:routeIndex === mainIndex}"
              v-for="(item, mainIndex) in shortList"
              :key="(mainIndex)"
              :shortList="shortList"
          >
            <router-link :to="`/main/living${mainIndex}`" v-if="shortList.length">{{item.name}}</router-link>
          </li>
          <!--<li class="tab-item" :class="{on:isRoute('/main/living')}">
            <router-link to="/main/living">{{headCates[2].name}}</router-link>
          </li>
          <li class="tab-item" :class="{on:isRoute('/main/living')}">
            <router-link to="/main/living">{{headCates[3].name}}</router-link>
          </li>
          <li class="tab-item" :class="{on:isRoute('/main/living')}">
            <router-link to="/main/living">{{headCates[4].name}}</router-link>
          </li>
          <li class="tab-item" :class="{on:isRoute('/main/living')}">
            <router-link to="/main/living">{{headCates[5].name}}</router-link>
          </li>
          <li class="tab-item" :class="{on:isRoute('/main/living')}">
            <router-link to="/main/living">{{headCates[6].name}}</router-link>
          </li>
          <li class="tab-item" :class="{on:isRoute('/main/living')}">
            <router-link to="/main/living">{{headCates[7].name}}</router-link>
          </li>
          <li class="tab-item" :class="{on:isRoute('/main/living')}">
            <router-link to="/main/living">{{headCates[8].name}}</router-link>
          </li>
          <li class="tab-item" :class="{on:isRoute('/main/living')}">
            <router-link to="/main/living">{{headCates[9].name}}</router-link>
          </li>-->
        </ul>
      </div>
    </div>

    <div class="content-wrap-main">
      <!--内容可滑动-->
      <div class="content-wrap">
        <!--路由显示，懒加载-->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
    <!--置顶-->
    <div class="stick"></div>
  </section>
</template>

<script>
import BScroll from 'better-scroll'
import PubSub from 'pubsub-js'
import CutOff from '../../components/CutOff/CutOff'
import MainLiving from './MainLiving/MainLiving'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      listIndex: '',
      mainIndex: Number
    }
  },
  mounted () {
    this.$store.dispatch('getHeadCates', () => {
      this.$nextTick(() => {
        this._swiper()
      })
    })
    /* eslint-disable no-new */
    new BScroll('.content-wrap-main', {
      scrollX: true,
      click: true,
      bounce: {
        top: false,
        bottom: false,
        left: false,
        right: false
      }
    })
    this.$store.dispatch('getTagList')
    this.$store.dispatch('getNewItemList')
  },
  methods: {
    isRoute (path) {
      return this.$route.path === path
    },
    _swiper () {
      /* eslint-disable no-new */
      new BScroll('.tab-shop-wrap', {
        scrollX: true,
        click: true
      })
    },
    showData ({mainIndex, item}) {
      console.log(mainIndex, this.$route.params.index)
      PubSub.publish('setMainIndex', {mainIndex, item})
      this.listIndex = mainIndex
      this.$router.replace('')
    },
    clearIndex () {
      this.listIndex = ''
    }
  },
  computed: {
    ...mapState(['headCates']),
    shortList () {
      return this.headCates.slice(1, -1)
    },
    routeIndex () {
      return this.$route.params.index * 1
    }
  },
  /* watch: {
    shortList () {
      if (this.listIndex.length) {
        this.$store.state.mainIndex = this.listIndex
      }
    }
  }, */
  components: {
    CutOff,
    MainLiving
  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/less";
.main{
  width: 100%;
  height: 100%;
  .header-wrap{
    position: fixed;
    top: 0;
    z-index: 20;
    .header-top{
      background-color: white;
      z-index: 10;
      width: 100%;
      height: 87.98/@rem;
      padding: 0.21333rem 0.32rem;
      box-sizing:border-box;
      vertical-align:middle;
      .top-main{
        display: inline-block;
        width: 138/@rem;
        height: 39.984/@rem;
        background-image: url("./images/icon.png");
        background-position: 0 2.9rem;
        background-size: cover;
        margin-right: 20/@rem;
        float: left;
      }
      .top-search{
        width: 532/@rem;
        height: 56/@rem;
        background-color: #ededed;
        float: left;
        text-align: center;
        line-height: 28/rem;
        padding: 0.21333rem 1rem;
        box-sizing: border-box;
        .top-search-icon{
          display: inline-block;
          width: 27.98/@rem;
          height: 27.98/@rem;
          float: left;
          margin-right: .13333rem;
        }
        span{
          display: block;
          font-size: 28/@rem;
          color: #666;
          float: left;
        }
      }
    }
    .tab-shop-wrap{
      width: 10rem;
      height: 60/@rem;
      background-color: white;
      .tab-shop{
        height: 60/@rem;
        font-size: 28/@rem;
        padding: 0.21333rem 0.3rem;
        box-sizing: border-box;
        float: left;
        white-space: nowrap;
        .tab-item{
          height: 40/@rem;
          display: inline-block;
          text-align: center;
          margin-right: 30/@rem;
          &.on{
            color: #b4282d;
            border-bottom: 2px solid #b4282d;
            a{
              color: #b4282d;
            }
          }
        }
      }
      }
  }
  .content-wrap-main{
    width: 100%;
    height: 100%;
    .content-wrap{
      margin-top: 148/@rem;
      margin-bottom: 1.306rem;
      width: 10rem;
      overflow: hidden;
    }
  }
  .stick{
    width: 82/@rem;
    height: 82/@rem;
    background-image: url("./images/1.png");
    background-size: cover;
    position: fixed;
    right: .30667rem;
    bottom: 1.6rem;
  }
}
</style>
