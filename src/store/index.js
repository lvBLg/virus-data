import Vue from 'vue'
import Vuex from 'vuex'
import { getVirusData, getHomeData } from '@/http/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    yyData: {},
    txData: {}
  },
  mutations: {
    setYyDataMutation(state, data) {
      state.yyData = data
    },
    setTxDataMutation(state, data) {
      state.txData = data
    }
  },
  actions: {
    async getTxData({ commit }) {
      await getVirusData().then(res => {
        commit('setTxDataMutation', res.data.newslist[0].desc)
        console.log('txactions cplt')
      }).catch(err => {
        console.log(err)
      })
    },
    async getYyData({ commit }) {
      await getHomeData().then(res => {
        commit('setYyDataMutation', res.data.data)
        console.log('yyactions cplt')
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
