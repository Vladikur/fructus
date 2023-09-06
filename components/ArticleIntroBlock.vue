<template lang="pug">
.article-intro
  .article-intro__image
    img(:src="data.image" alt="#")
  .article-intro__content
    h1.article-intro__title {{ data.title }}
    span.article-intro__info
      svg-icon(name="clock")
      span {{ data.reading_time }} мин время чтения
    span.article-intro__info
      svg-icon(name="eye")
      span {{ data.views_count }} прочитали статью
    p.article-intro__description {{ data.short_description }}
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
.article-intro {
  display: flex;
  gap: 3rem;
  align-items: center;

  @include --mobile {
    flex-direction: column-reverse;
    gap: 1rem;
  }

  &__image {
    flex-shrink: 0;
    width: 54.1rem;
    height: 58rem;
    border-radius: 0 22rem 0 0;
    overflow: hidden;

    @include --tablet {
      @include box(30rem);
      border-radius: 0 10rem 0 0;
    }

    @include --mobile {
      width: 100%;
    }

    img {
      @include box(100%);
      object-fit: cover;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__title {
    @include h1;
    margin-bottom: 3rem;
  }

  &__info {
    @include text-body-small;
    display: flex;
    gap: 0.8rem;
    color: var(--text-secondary-color);
    margin-bottom: 4px;

    svg {
      @include box(1.6rem);
    }
  }

  &__description {
    margin-top: 5rem;

    @include --tablet {
      margin-top: 2rem;
    }
  }
}
</style>
