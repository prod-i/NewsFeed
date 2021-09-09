export const state = () => ({
    posts: [],
})

export const mutations = {
    setUsers(state, posts) {
        state.posts = [...state.posts, ...posts]
    },
}

export const actions = {
    async fetchMoc({ commit }) {
        const response = await this.$axios.$get(`https://www.mos.ru/rss`)
        console.log(response);
    },
    async fetchLenta({ commit }) {
        const feed = 'https://lenta.ru/rss/news';
        const response = await this.$axios.$get(`https://api.rss2json.com/v1/api.json?rss_url=${feed}`)
        const posts = response.items
        commit("setUsers", posts)
    },
}

export const getters = {
    posts: s => s.posts
}