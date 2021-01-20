import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'
const baseURL = "https://jsonplaceholder.typicode.com/todos";

export const state = () => ({
    token: null,
    users: [] 
})

export const mutations = {
    setToken(state, token) {
        state.token = token
    },
    clearToken(state) {
        state.token = null
    },
    SET_USER(state, users) {
        state.users = users
    },
}

export const actions = {
    login({ commit }) {
        commit('setToken', 'true')
    },
    logout({ commit }) {
        commit('clearToken')
    },
    getUser({ commit }) {
        axios.get(baseURL) //получение контактов 
            .then(response => {
                commit('SET_USER', response.data) //вызов мутаций 
            })
    },
}

export const getters = {
    hasToken: s => !!s.token,
}