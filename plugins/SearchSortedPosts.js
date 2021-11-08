export default {
    searchSortedPost: (store, getPosts, searchQuery, selectedSort) => {
        const searchPosts = () => {
            if (getPosts.length > 0) {
                return [...getPosts].filter(post => {
                    if (post.title && post.description) {
                        return post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.description.toLowerCase().includes(searchQuery.toLowerCase())
                    }
                })
            } else {
                return []
            }
        }
        const sortedPosts = () => {
            const sortDate = [...searchPosts()].sort((a, b) => {
                const dataA = new Date(a.pubDate);
                const dataB = new Date(b.pubDate);
                if (dataA < dataB) return -1;
                if (dataA > dataB) return 1;
                return 0;
            }).reverse()
            const sortedPosts = [...sortDate.filter(p => p.link.includes(selectedSort) === true && p.pubDate)]
            return sortedPosts
        }
        store.commit('setSortedPosts', sortedPosts())

    }
}