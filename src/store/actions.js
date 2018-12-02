import {
  RECEIVE_HOMEDATA,
  RECEIVE_TOPICDATA,
  RECEIVE_NAVDATA
} from './mutation-type'

import {
  reqHomeData,
  reqTopicData,
  reqNavData
} from '../api'

export default {
  async getHomeData ({commit}, callback) {
    const result = await reqHomeData()
    // console.log(result)
    if (result.code === 0) {
      const homeData = result.data
      commit(RECEIVE_HOMEDATA, {homeData})
    }
  },
  async getTopicData ({commit}) {
    const result = await reqTopicData()
    if (result.code === 0) {
      const topicData = result.data
      commit(RECEIVE_TOPICDATA, {topicData})
    }
  },
  async getNavData ({commit},callback) {
    const result = await reqNavData()
    if (result.code === 0) {
      const navData = result.data
      commit(RECEIVE_NAVDATA, {navData})
    }
  },

}
