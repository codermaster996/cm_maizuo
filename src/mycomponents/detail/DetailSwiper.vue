<template>
    <div class="swiper-container" :class="name">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
// import Swiper from 'swiper/bundle'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
export default {
  props: {
    PerView: {
      type: Number,
      default: 1
    },
    name: {
      type: String,
      default: 'dashi'
    }
  },
  mounted () {
    new Swiper('.' + this.name, {
      slidesPerView: this.PerView,
      spaceBetween: 30,
      freeMode: true

    })
  }
}
</script>
