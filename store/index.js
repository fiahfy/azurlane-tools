import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  title: 'Azurlane tools',
  message: ''
})

export const mutations = {
  setTitle (state, { title }) {
    state.title = title
  },
  setMessage (state, { message }) {
    state.message = message
  }
}
