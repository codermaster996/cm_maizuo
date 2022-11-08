<template>
    <div class="swiper-container dashi">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
// import Swiper from 'swiper/bundle'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    new Swiper('.dashi', {
      // direction: 'vertical', // 垂直切换选项
      loop: this.loop, // 循环模式选项

      // 自动轮播
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>
