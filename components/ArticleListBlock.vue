<template lang="pug">
.article-list
  h2(v-if="data.title" ).article-list__title {{data.title}}
  .article-list__articles-container
    article(v-for="(article, index) in data.articles" :key="index" ).article-list__article
      .article-list__img
        img(:src="article.image" alt="#")
      h3.article-list__card-title {{ article.title }}
      a(:href="article.link").app-button Читать
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss">
.article-list {
  &__title {
    @include h2;
    margin-top: 0;
    margin-bottom: 5rem;

    @include --tablet {
      margin-bottom: 3rem;
    }
  }

  &__articles-container {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
  }

  &__article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% / 3 - 2rem);

    @include --tablet {
      width: calc(100% / 2 - 3rem);
    }

    @include --mobile {
      width: 100%;
    }
  }

  &__img {
    width: 100%;
    height: 32rem;
    overflow: hidden;

    @include --tablet {
      height: 25rem;
    }

    @include --mobile {
      height: 20rem;
    }

    img {
      @include box(100%);
      object-fit: cover;
    }
  }

  &__card-title {
    @include h3;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .app-button {
    margin-top: auto;
  }
}
</style>
