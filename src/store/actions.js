import {
  reqFocusList,
  reqHeadCates,
  reqTagList,
  reqNewItemList,
  reqPopularItemList,
  reqFlashSaleIndexVO,
  reqTopicList,
  reqCateList,
  reqBanner,
  reqColumn,
  reqRecommend,
  reqTenfifteen,
  reqZhenpin,
  reqFindMore,
  reqCategoryData,
  reqUser,
  reqNewItemNewUserList
} from '../api'
import {
  RECEIVE_FOCUSLIST,
  RECEIVE_HEADCATES,
  RECEIVE_TAGLIST,
  RECEIVE_NEWITEMLIST,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_TOPICLIST,
  RECEIVE_CATELIST,
  RECEIVE_BANNER,
  RECEIVE_COLUMN,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEEN,
  RECEIVE_ZHENPIN,
  RECEIVE_FINDMORE,
  RECEIVE_CATEGORYDATA,
  RECEIVE_USER,
  RECEIVE_NEWITEMNEWUSERLIST
} from './mutation_type'

export default {
  // 异步获取轮播图
  async getFocusList ({commit}, cd) {
    const result = await reqFocusList()
    if (result.code === 0) {
      commit(RECEIVE_FOCUSLIST, {focusList: result.data})
    }
    cd && cd()
  },

  // 异步获取头部导航列表
  async getHeadCates ({commit}, cd) {
    const result = await reqHeadCates()
    if (result.code === 0) {
      commit(RECEIVE_HEADCATES, {headCates: result.data})
    }
    cd && cd()
  },

  // 异步获取品牌制造商
  async getTagList ({commit}) {
    const result = await reqTagList()
    if (result.code === 0) {
      commit(RECEIVE_TAGLIST, {tagLists: result.data})
    }
  },

  // 新品首发NewItemList
  async getNewItemList ({commit}) {
    const result = await reqNewItemList()
    if (result.code === 0) {
      commit(RECEIVE_NEWITEMLIST, {newItemLists: result.data})
    }
  },
  async getPopularItemList ({commit}) {
    const result = await reqPopularItemList()
    if (result.code === 0) {
      commit(RECEIVE_POPULARITEMLIST, {popularItemLists: result.data})
    }
  },
  async getFlashSaleIndexVO ({commit}) {
    const result = await reqFlashSaleIndexVO()
    if (result.code === 0) {
      commit(RECEIVE_FLASHSALEINDEXVO, {flashSaleIndexVO: result.data})
    }
  },
  // reqTopicList
  async getTopicList ({commit}) {
    const result = await reqTopicList()
    if (result.code === 0) {
      commit(RECEIVE_TOPICLIST, {topicLists: result.data})
    }
  },
  // reqCateList
  async getCateList ({commit}) {
    const result = await reqCateList()
    if (result.code === 0) {
      commit(RECEIVE_CATELIST, {cateLists: result.data})
    }
  },
  // reqBanner
  async getBanner ({commit}) {
    const result = await reqBanner()
    if (result.code === 0) {
      commit(RECEIVE_BANNER, {banners: result.data})
    }
  },
  // reqColumn
  async getColumn ({commit}) {
    const result = await reqColumn()
    if (result.code === 0) {
      commit(RECEIVE_COLUMN, {columns: result.data})
    }
  },
  // reqRecommend
  async getRecommend ({commit}) {
    const result = await reqRecommend()
    if (result.code === 0) {
      commit(RECEIVE_RECOMMEND, {recommend: result.data})
    }
  },
  // reqTenfifteen
  async getTenfifteen ({commit}) {
    const result = await reqTenfifteen()
    if (result.code === 0) {
      commit(RECEIVE_TENFIFTEEN, {tenfifteens: result.data})
    }
  },
  // reqZhenpin
  async getZhenpin ({commit}) {
    const result = await reqZhenpin()
    if (result.code === 0) {
      commit(RECEIVE_ZHENPIN, {zhenpin: result.data})
    }
  },
  // reqFindMore
  async getFindMore ({commit}) {
    const result = await reqFindMore()
    if (result.code === 0) {
      commit(RECEIVE_FINDMORE, {findMores: result.data})
    }
  },
  // reqCategoryData
  async getCategoryData ({commit}) {
    const result = await reqCategoryData()
    if (result.code === 0) {
      commit(RECEIVE_CATEGORYDATA, {categorys: result.data})
    }
  },
  // reqUser
  async getUser ({commit}) {
    const result = await reqUser()
    if (result.code === 0) {
      commit(RECEIVE_USER, {user: result.data})
    }
  },
  // reqNewItemNewUserList
  async getNewItemNewUserList ({commit}) {
    const result = await reqNewItemNewUserList()
    if (result.code === 0) {
      commit(RECEIVE_NEWITEMNEWUSERLIST, {newItemNewUserList: result.data})
    }
  }
}
