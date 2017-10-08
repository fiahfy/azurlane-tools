import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  title: 'Azurlane tools'
})

export const mutations = {
  setTitle (state, { title }) {
    state.title = title
  }
}
