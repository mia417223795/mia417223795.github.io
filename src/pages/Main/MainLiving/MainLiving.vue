<template>
  <section class="living" v-if="shortList[mainIndex]">
    <img class="top-image" :src="shortList[mainIndex].imgUrl">
    <cut-off></cut-off>
    <living-product :item="shortList[mainIndex].subCateList" :titleItem="shortList[mainIndex]"></living-product>
  </section>
</template>

<script>
import CutOff from '../../../components/CutOff/CutOff'
import PubSub from 'pubsub-js'
import LivingProduct from '../../../components/LivingProduct/LivingProduct'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      items: [],
      mainIndex: Number
    }
  },
  components: {
    CutOff,
    LivingProduct
  },
  mounted () {
    // 订阅消息
    PubSub.subscribe('setIndex', (msg, index) => {
      this.mainIndex = index
    })
    // 发送消息
    PubSub.publish('setIndex', (this.index))
    console.log(this.shortList, this)
  },
  computed: {
    ...mapState(['newItemNewUserList', 'headCates']),
    nowIndex () {
      return this.$route.params
    },
    index () {
      return this.$route.params.index
    },
    shortList () {
      return this.headCates.slice(1, -1)
    }
  },
  watch: {
    index (val) {
      this.mainIndex = val
      console.log(this.val)
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../../common/less/less";
.living{
  /*margin-top: 87.98/@rem;*/
  margin-bottom: 1.306rem;
  .top-image{
    width: 100%;
    height: 420/@rem;
  }
}
</style>
