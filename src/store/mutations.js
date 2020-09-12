import {
  RECORD_ADDRESS,
  ADD_CART,
  REDUCE_CART,
  INIT_BUYCART,
  CLEAR_CART,
  RECORD_SHOPDETAIL,
  RECORD_USERINFO,
  GET_USERINFO,
  CONFIRM_REMARK,
  CONFIRM_INVOICE,
  CHOOSE_SEARCH_ADDRESS,
  SAVE_GEOHASH,
  CONFIRM_ADDRESS,
  CHOOSE_ADDRESS,
  NEED_VALIDATION,
  SAVE_CART_ID_SIG,
  SAVE_ORDER_PARAM,
  CHANGE_ORDER_PARAM,
  ORDER_SUCCESS,
  SAVE_SHOPID,
  SAVE_ORDER,
  OUT_LOGIN,
  RETSET_NAME,
  SAVE_AVANDER,
  SAVE_ADDRESS,
  SAVE_ADDDETAIL,
  SAVE_QUESTION,
  ADD_ADDRESS,
  BUY_CART,
} from './mutation-types.js'

import {setStore, getStore} from '@/utils/mUils'

export default {

  //获取用户信息存入vuex
  [GET_USERINFO](state, info){
    if(state.userInfo && (state.userInfo.username !== info.username)){
      return
    }
    if(!state.login){
      return
    }
    if(!info.message){
      state.userInfo = {...info}
    }else{
      state.userInfo = null
    }
  },
  // 记录用户信息
  [RECORD_USERINFO](state, info){
    state.userInfo = info
    state.login = true
    setStore('user_id', info.user_id)
  },
  // 记录当前经度纬度
  [RECORD_ADDRESS](state, {
    latitude,
    longitude
  }){
    state.latitude = latitude
    state.longitude = longitude
  },
  // 保存geohash
  [SAVE_GEOHASH](state, geohash){
    state.geohash = geohash
  }
}