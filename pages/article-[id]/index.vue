<template lang="pug">
main
  section.section(v-for="block in store.getArticle.body" :key="block.id")
    .container
      ArticleIntroBlock(v-if="block.type === 'article_intro_block'" :data="block.data")
      TextBlock(v-if="block.type === 'text_block'" :data="block.data")
      ImageBlock(v-if="block.type === 'image_block'" :data="block.data")
      SliderBlock(v-if="block.type === 'slider_block'" :data="block.data")
      SubscribeFormBlock(v-if="block.type === 'subscribe_form_block'")
      CtaFormBlock(v-if="block.type === 'cta_form_block'")
      ArticleListBlock(v-if="block.type === 'article_list_block'" :data="block.data")
</template>

<script setup>
import {useArticleStore} from "../../store/article";

const route = useRoute()
const store = useArticleStore()

store.resetArticle()

const request = await store.setArticle(route.params.id)

useHead({
  title: store.getArticle.meta.title,
  meta: [
    { name: 'description', content: store.getArticle.meta.description }
  ],
})
</script>

<style lang="scss">
.section {
  margin-bottom: 10rem;

  @include --tablet {
    margin-bottom: 6rem;
  }
}
</style>
