<template lang="pug">
.cta-form
  .cta-form__image
    img(src="/img/form.jpg" alt="#")
  form.cta-form__form
    h2.cta-form__title Стань участником проекта
    input(type="text" placeholder="Имя").app-input
    input(type="tel" placeholder="Телефон").app-input
    input(type="email" placeholder="Email").app-input
    button(type="submit").app-button._contrast Присоединиться

</template>

<script setup>

</script>

<style lang="scss">
.cta-form {
  display: flex;
  gap: 6rem;
  padding: 6rem;
  background: var(--text-color);

  @include --tablet {
    flex-direction: column;
    gap: 2rem;
  }

  @include --mobile {
    padding: 2rem;
  }

  &__image {
    width: 54.5rem;
    height: 32.6rem;
    overflow: hidden;

    @include --tablet {
      width: 100%;
      height: 25rem;
    }

    @include --mobile {
      height: 15rem;
    }

    img {
      @include box(100%);
      object-fit: cover;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .app-button {
      margin-top: 3rem;

      @include --tablet {
        margin-top: 1rem;
      }
    }

    .app-input {
      width: 35.3rem;
      margin-bottom: 2.5rem;

      @include --tablet {
        width: 100%;
        margin-bottom: 2rem;
      }
    }
  }

  &__title {
    @include h2;
    color: var(--contrast-color);
    margin-top: 0;
    margin-bottom: 5rem;

    @include --tablet {
      margin-bottom: 3rem;
    }
  }
}
</style>
