import { defineStore } from 'pinia'

export const useArticleStore = defineStore({
    id: 'article-store',
    state: () => {
        return {
            article: {}
        }
    },
    actions: {
        async setArticle(id) {
            try {
                this.article = await $fetch(`https://devtwit8.ru/api/v1/page/?path=/article-${id}`)
            } catch (error) {
                console.log(error)
            }
        },
        resetArticle() {
            this.article = {}
        }
    },
    getters: {
        getArticle: state => state.article,
    },
})
