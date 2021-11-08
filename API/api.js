import axios from 'axios'
import { XmlParser } from '@/plugins/XmlParser.js'

export const API = {

    async fetchMoc() {
        const response = await axios.get('https://www.mos.ru/rss')
        const result = XmlParser(response.data, (posts) => {
            return posts
        });

        return result;
    },

    async fetchLenta() {
        const response = await axios.get('https://lenta.ru/rss/news')
        const result = XmlParser(response.data, (posts) => {
            posts.forEach((post) => post.description = post.description.__cdata)
            return posts
        });
        return result;
    },
}