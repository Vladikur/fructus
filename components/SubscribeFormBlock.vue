<template lang="pug">
.subscribe-form
  h3.subscribe-form__title Подпишись на рассылку
  form.subscribe-form__form
    input(type="email" placeholder="Email").app-input
    button(type="submit").app-button._contrast Подписаться
</template>

<script setup>

</script>

<style lang="scss">
.subscribe-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
  background: var(--text-color);

  @include --tablet {
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem;
  }

  &__title {
    @include h3;
    margin: 0;
    color: var(--contrast-color);
  }

  &__form {
    display: flex;
    align-items: center;
    gap: 3.7rem;

    @include --tablet {
      width: 100%;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
    }

    .app-input {
      width: 35.3rem;

      @include --tablet {
        width: 100%;
      }
    }
  }
}
</style>
