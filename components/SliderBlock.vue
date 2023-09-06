<template lang="pug">
.slider
  Swiper(:space-between="20" @swiper="getRef" @slideChange="current = $event.activeIndex;")
    SwiperSlide(v-for="(img, index) in data" :key="index")
      img(:src="img" alt="#")
  button(@click="onPrev").slider__button._left
    svg-icon(name="arrow")
  button(@click="onNext").slider__button._right
    svg-icon(name="arrow")
  .slider__counter
    span {{ current+1 }} / {{ data.length }}
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
})
const current = useState('current', () => 0)
const swiper = ref(null)
function getRef (swiperInstance) {
  swiper.value = swiperInstance
}
const onPrev = () => swiper.value.slidePrev()
const onNext = () => swiper.value.slideNext()
</script>

<style lang="scss">
.slider {
  position: relative;
  padding: 0 10rem;

  @include --tablet {
    padding: 0;
  }

  .swiper-slide {
    img {
      @include box(100%);
      object-fit: cover;
    }
  }

  &__button {
    @include hover-lighten;
    @include box(6rem);
    position: absolute;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;

    @include --mobile {
      @include box(4rem);
    }

    &._left {
      left: 0;
    }

    &._right {
      right: 0;

      svg {
        transform: rotate(180deg);
      }
    }

    svg {
      @include box(100%);
    }
  }

  &__counter {
    @include text-lg;
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;

    @include --mobile {
      margin-top: 1rem;
    }
  }
}
</style>
