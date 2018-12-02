/*
直接更新state的多个方法的对象
 */
import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA
} from './mutation-type'
export default {
  [RECEIVE_HOMEDATA] (state, {homeData}) {
    state.homeData = homeData
  },
  [RECEIVE_TOPICDATA] (state, {topicData}) {
    state.topicData = topicData
  },
  [RECEIVE_NAVDATA] (state,{navData}){
    state.navData = navData
  }


}
