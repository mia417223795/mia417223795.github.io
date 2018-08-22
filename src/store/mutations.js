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
  RECEIVE_CATEGORYDATA, RECEIVE_NEWITEMNEWUSERLIST
} from './mutation_type'
export default {
  [RECEIVE_FOCUSLIST] (state, {focusList}) {
    state.focusList = focusList
  },
  [RECEIVE_HEADCATES] (state, {headCates}) {
    state.headCates = headCates
  },
  [RECEIVE_TAGLIST] (state, {tagLists}) {
    state.tagLists = tagLists
  },
  [RECEIVE_NEWITEMLIST] (state, {newItemLists}) {
    state.newItemLists = newItemLists
  },
  [RECEIVE_POPULARITEMLIST] (state, {popularItemLists}) {
    state.popularItemLists = popularItemLists
  },
  [RECEIVE_FLASHSALEINDEXVO] (state, {flashSaleIndexVO}) {
    state.flashSaleIndexVO = flashSaleIndexVO
  },
  [RECEIVE_TOPICLIST] (state, {topicLists}) {
    state.topicLists = topicLists
  },
  [RECEIVE_CATELIST] (state, {cateLists}) {
    state.cateLists = cateLists
  },
  // RECEIVE_BANNER
  [RECEIVE_BANNER] (state, {banners}) {
    state.banners = banners
  },
  [RECEIVE_COLUMN] (state, {columns}) {
    state.columns = columns
  },
  [RECEIVE_RECOMMEND] (state, {recommend}) {
    console.log(recommend)
    state.recommend = recommend
  },
  [RECEIVE_TENFIFTEEN] (state, {tenfifteens}) {
    state.tenfifteens = tenfifteens
  },
  [RECEIVE_ZHENPIN] (state, {zhenpin}) {
    state.zhenpin = zhenpin
  },
  [RECEIVE_FINDMORE] (state, {findMores}) {
    state.findMores = findMores
  },
  [RECEIVE_CATEGORYDATA] (state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_NEWITEMNEWUSERLIST] (state, {newItemNewUserList}) {
    state.newItemNewUserList = newItemNewUserList
  }
}
