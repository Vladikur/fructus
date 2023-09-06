<template lang="pug">
.image-block
  .image-block__image
    img(:src="data.src" :alt="data.caption")
  .image-block__caption(v-if="data.caption" )
    span {{data.caption}}
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
.image-block {
  &__image {
    width: 100%;
    height: 55rem;
    margin-bottom: 1.5rem;
    overflow: hidden;
    border-radius: 0 22rem 0 0;

    @include --tablet {
      height: 30rem;
      border-radius: 0 10rem 0 0;
    }

    @include --mobile {
      height: 15rem;
      border-radius: 0 5rem 0 0;
    }

    img {
      @include box(100%);
      object-fit: cover;
    }
  }

  &__caption {
    display: flex;
    justify-content: flex-end;

    span {
      @include text-body-small;
      color: var(--text-secondary-color);
    }
  }
}
</style>
