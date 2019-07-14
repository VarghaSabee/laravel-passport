import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    strict: debug,
    state: {
        auth: null,
        token: null,
        check:false
    },
    getters: {
        auth: state => state.auth,
        token: state => state.token,
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token
        },

        FETCH_auth_SUCCESS(state, auth) {
            state.auth = auth
            state.check = true
        },

        FETCH_auth_FAILURE(state) {
            state.token = null
        },

        LOGOUT(state) {
            state.auth = null
            state.token = null
            state.check = false
        },

        UPDATE_auth(state, { auth }) {
            state.auth = auth
        }
    },

    actions: {
        saveToken({ commit, dispatch }, { token, remember }) {
            commit('SET_TOKEN', token)

            // if you need store token in cookie (remember me option)
            // Cookies.set('token', token, { expires: remember ? 365 : null })
        },

        async fetchauth({ commit,state }) {
            try {
                axios.defaults.headers.common.Authorization = `Bearer ${state.token}`;
                const { data } = await axios.get('/api/user')

                commit('FETCH_auth_SUCCESS', data)
            } catch (e) {
                //   Cookies.remove('token')
                commit('FETCH_auth_FAILURE')
            }
        },

        updateauth({ commit }, payload) {
            commit('UPDATE_auth', payload)
        },

        async logout({ commit,state }) {
            try {
                axios.defaults.headers.common.Authorization = `Bearer ${state.token}`;
                await axios.get('/api/logout')
            } catch (e) {console.log(e) }

            // Cookies.remove('token')
            commit('LOGOUT')
        },
    }
});
