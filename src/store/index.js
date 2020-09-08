import Vue from 'vue'
import Vuex from 'vuex'
import { getVirusData, getHomeData, getMapData, getAliData, getAboardData } from '@/http/api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    yyData: {},
    txData: {},
    currData: [],
    totalData: [],
    aliData: [],
    aboardData: [],
    LOADING: false
  },
  mutations: {
    setYyDataMutation(state, data) {
      state.yyData = data
    },
    setTxDataMutation(state, data) {
      state.txData = data
    },
    setCurrDataMutation(state, data) {
      state.currData = data
    },
    setTotalDataMutation(state, data) {
      state.totalData = data
    },
    setAliDataMutation(state, data) {
      state.aliData = data
    },
    setAboardMutation(state, data) {
      state.aboardData = data
    },
    showLoading(state) {
      state.LOADING = true
    },
    hideLoading(state) {
      state.LOADING = false
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
    },
    async getMapData({ commit }) {
      await getMapData().then(res => {
        const data = res.data.newslist
        const currArr = []
        const totalArr = []
        data.forEach(item => {
          const cobj = {}
          const tobj = {}
          tobj.name = item.provinceShortName
          tobj.value = item.confirmedCount
          totalArr.push(tobj)
          cobj.name = item.provinceShortName
          cobj.value = item.currentConfirmedCount
          currArr.push(cobj)
        })
        commit('setCurrDataMutation', currArr)
        commit('setTotalDataMutation', totalArr)
        console.log('mapactions cplt')
      }).catch(err => {
        console.log(err)
      })
    },
    async getAliData({ commit }) {
      await getAliData().then(res => {
        commit('setAliDataMutation', res.data)
        console.log('aliactions cplt')
      }).catch(err => {
        console.log(err)
      })
    },
    async getAboardData({ commit }) {
      await getAboardData().then(res => {
        commit('setAboardMutation', res.data.data)
        console.log('aboardactions cplt')
      }).catch(err => {
        console.log(err)
      })
    }
  },
  modules: {
  }
})
