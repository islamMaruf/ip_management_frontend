import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        authenticate_user: {}
    },
    mutations: {
        setAuthenticateUser(state, user) {
            state.authenticate_user = user;
        }
    }
})