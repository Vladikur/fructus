<template lang="pug">
footer.footer
  .footer__inner.container
    .footer__logo-container
      .footer__logo
        svg-icon(name="logo")
      p.footer__text Cтатьи о дизайне и искусстве, которые исследуют творческие вдохновения и актуальные тенденции, раскрывая мир эстетики и креативности
    .footer__info-container
      span.footer__sign email
      a(href="mailto:testblogsupport@gmail.com").footer__link testblogsupport@gmail.com

      ul.footer__nav-container
        li.footer__nav-item
          a(href="#")
            svg-icon(name="fb")
        li.footer__nav-item
          a(href="#")
            svg-icon(name="vk")
        li.footer__nav-item
          a(href="#")
            svg-icon(name="in")
        li.footer__nav-item
          a(href="#")
            svg-icon(name="tg")
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
  padding: 5rem 0;
  border-top: 1px solid var(--text-secondary-color);

  @include --tablet {
    padding: 3rem 0;
  }

  &__inner {
    &.container {
      display: flex;
      justify-content: space-between;

      @include --mobile {
        flex-direction: column;
        gap: 2rem;
      }
    }
  }

  &__logo-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  &__logo {
    display: block;
    width: 13.3rem;
    height: 3.2rem;

    svg {
      @include box(100%);
    }
  }

  &__text {
    @include text-body-small;
    max-width: 42.6rem;
    color: var(--text-secondary-color);

    @include --tablet {
      max-width: 30rem;
    }
  }

  &__info-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 2px;
  }

  &__sign {
    @include text-body-small;
    display: inline-block;
    color: var(--text-secondary-color);
  }

  &__link {
    @include hover-lighten;
    @include text-lg;
    text-decoration: none;
    color: var(--text-color);
  }

  &__nav-container {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 2.4rem 0 0 0;
    padding: 0;
  }

  &__nav-item {
    @include hover-lighten;
    @include box(3rem);

    svg {
      @include box(100%);
    }
  }
}
</style>
