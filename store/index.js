import { API } from '@/API/api.js'
export const state = () => ({
    posts: [],
    sortedPosts: [],
    listDisplayType: 'line',

})

export const mutations = {
    AddPosts(state, posts) {
        state.posts = [...state.posts, ...posts]
    },
    setPosts(state, posts) {
        state.posts = posts
    },
    setSortedPosts(state, posts) {
        state.sortedPosts = posts
    },
    setListDisplayType(state, listDisplayType) {
        state.listDisplayType = listDisplayType
    },
    clearPosts(state) {
        state.posts = []
    },
}

export const actions = {
    async fetchMoc({ commit }) {
        commit("AddPosts", await API.fetchMoc())
    },
    async fetchLenta({ commit }) {
        commit("AddPosts", await API.fetchLenta())
    },
}

export const getters = {
    posts: s => s.posts,
    sortedPosts: s => s.sortedPosts,
    listDisplayType: s => s.listDisplayType,
}