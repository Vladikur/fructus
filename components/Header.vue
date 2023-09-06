<template lang="pug">
header.header.container
  NuxtLink(to="/").header__logo
    svg-icon(name="logo")
</template>

<script setup>

</script>

<style lang="scss">
.header {
  padding: 2.8rem 0;
  margin-bottom: 4rem;

  &.container {
    display: flex;
    justify-content: center;
  }

  &__logo {
    @include hover-lighten;
    display: block;
    width: 13.3rem;
    height: 3.2rem;

    svg {
      @include box(100%);
    }
  }
}
</style>
