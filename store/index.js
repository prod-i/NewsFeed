export const state = () => ({
    posts: [],
})

export const mutations = {
    setUsers(state, posts) {
        state.posts = [...state.posts, posts]
    },
}

export const actions = {
    async fetchMoc({ commit }) {
        const response = await this.$axios.$get(`https://www.mos.ru/rss`)
        const posts = response
        commit("setUsers", posts)
    },
    async fetchLenta({ commit }) {
        const response = await this.$axios.$get('https://lenta.ru/rss/news')
        const posts = response
        commit("setUsers", posts)
    },
}

export const getters = {
    posts: s => s.posts
}