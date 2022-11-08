import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/util/http'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    reducer: (state) => {
      return {
        cityId: state.cityId,
        cityName: state.cityName
      }
    }
  })],
  // state 公共状态
  state: {
    cityName: '北京',
    cityId: 110100,
    cinemasList: [],
    isTarbarShow: true
  },
  // 支持异步和同步
  actions: {
    getCinemasData (store, cityId) {
      return http({
        url: `/gateway?cityId=${cityId}&ticketFlag=1&k=590702`,
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        // console.log(res.data.data.cinemas)
        store.commit('changeCinemasData', res.data.data.cinemas)
      })
    }
  },
  // 统一管理，被devtools记录状态的修改
  // 只能支持同步
  mutations: {
    clickCityName (state, cityName) {
      // console.log(cityName)
      state.cityName = cityName
    },
    clickCityId (state, cityId) {
      state.cityId = cityId
    },
    changeCinemasData (state, data) {
      state.cinemasList = data
    },
    clearCinemas (state) {
      state.cinemasList = []
    },
    show (state) {
      state.isTarbarShow = true
    },
    hide (state) {
      state.isTarbarShow = false
    }

  }
})

// vuex 管理保存公共状态 ，(分散在各个组件内的状态，统一管理)

// vuex 默认是管理在内存 ， 一刷新页面， 公共状态就丢失了
// vuex 持久化 - todo

/* vuex 项目应用

1.非父子的通信
2.后端数据的缓存快照，减少重复数据请求，减轻服务器压力，提高用户体验

*/
