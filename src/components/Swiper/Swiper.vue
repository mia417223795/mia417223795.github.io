<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in focusList" :key="index">
          <img :src="item.picUrl">
        </div>
        <!--<div class="swiper-slide" v-for="index in 4" :key="index">
          <img src="./images/1.png">
        </div>-->
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>

</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import {mapState} from 'vuex'
export default {
  mounted () {
    this.$store.dispatch('getFocusList', () => {
      /* eslint-disable no-new */
      this.$nextTick(() => {
        this._swiper()
      })
    })
  },
  methods: {
    _swiper () {
      new Swiper('.swiper-container', {
        pagination: { // 圆点指示器的容器div
          el: '.swiper-pagination'
        },
        loop: true, // 可以循环轮播
        autoplay: true
      })
    }
  },
  computed: {
    ...mapState(['focusList'])
  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/less";
.swiper-container{
  width: 100%;
  height: 400/@rem;
  .swiper-wrapper{
    .swiper-slide{
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  .swiper-pagination{
  }
}
</style>
