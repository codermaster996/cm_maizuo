<template>
  <div v-if="filmInfo">
    <detail-hearder v-detailScroll="50">
      {{ filmInfo.name }}
    </detail-hearder>
    <!-- <img  :src="filmInfo.poster"/> -->
    <div
      :style="{
        backgroundImage: 'url(' + filmInfo.poster + ')',
      }"
      class="poster"
    ></div>
    <div class="content">
      <div class="contert-top">
        {{ filmInfo.name }}
        <span class="name-right">{{ filmInfo.filmType.name }}</span>
      </div>
      <div>
        <div class="datail-text">{{ filmInfo.category }}</div>
        <div class="datail-text">
          {{ filmInfo.premiereAt | deatilFilm }}上映
        </div>
        <div class="datail-text">
          {{ filmInfo.nation }} | {{ filmInfo.runtime }}分钟
        </div>
        <div
          class="datail-text"
          style="line-height: 15px; padding-top: 15px"
          :class="isHidden ? 'hidden' : ''"
        >
          {{ filmInfo.synopsis }}
        </div>
        <div style="text-align: center">
          <i
            class="iconfont"
            @click="isHidden = !isHidden"
            :class="isHidden ? 'icon-moreunfold' : 'icon-less'"
          ></i>
        </div>
      </div>
    </div>

    <!-- 演职人员 -->
    <div class="kongdang"></div>
    <div class="middle">
      <div>演职人员</div>
      <detail-swiper :PerView="3.8" name="actors">
        <detail-swiper-item
          v-for="(data, index) in filmInfo.actors"
          :key="index"
        >
          <div
            :style="{
              backgroundImage: 'url(' + data.avatarAddress + ')',
            }"
            class="avatar"
          ></div>
          <div style="text-align: center; font-size: 12px; margin-top: 10px">
            {{ data.name }}
          </div>
          <div style="text-align: center; font-size: 13px; color: #797d82">
            {{ data.role }}
          </div>
        </detail-swiper-item>
      </detail-swiper>
    </div>

    <!-- 剧照 -->
    <div class="kongdang"></div>
    <div class="foot">
      <div>剧照</div>
      <detail-swiper :PerView="2.2" name="photos">
        <detail-swiper-item
          v-for="(data, index) in filmInfo.photos"
          :key="index"
        >
          <div
            :style="{
              backgroundImage: 'url(' + data + ')',
            }"
            class="avatar"
            @click="hanlePhotos(index)"
          ></div>
        </detail-swiper-item>
      </detail-swiper>
    </div>
  </div>
</template>
<script>
import http from '@/util/http'
import obj from '@/util/mixinObj'
import moment from 'moment'
import Vue from 'vue'
import detailSwiper from '@/mycomponents/detail/DetailSwiper'
import detailSwiperItem from '@/mycomponents/detail/DetailSwiperItem'
import detailHearder from '@/mycomponents/detail/DetailHearder'
import { ImagePreview } from 'vant'

moment.locale('zh-cn')
// console.log(moment().format('YYYY-MM-DD'))
Vue.filter('deatilFilm', (data) => {
  return moment(data * 1000).format('YYYY-MM-DD')
})

Vue.directive('detailScroll', {
  inserted (el, binding) {
    console.log(binding.value)
    el.style.display = 'none'

    window.onscroll = () => {
      if (
        (document.documentElement.scrollTop || document.body.scrollTop) >
        binding.value
      ) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  // 指令的销毁执行生命周期
  unbind () {
    window.onscroll = null
  }
})

export default {
  mixins: [obj],
  components: {
    detailSwiper,
    detailSwiperItem,
    detailHearder
  },
  data () {
    return {
      filmInfo: null,
      isHidden: true
    }
  },
  methods: {
    hanlePhotos (index) {
      ImagePreview({
        images: this.filmInfo.photos,
        startPosition: index,
        closeable: true,
        closeIconPosition: 'to-left'
      })
    }
  },
  mounted () {
    // 当前匹配的路由
    console.log('created', this.$route.params.id)

    // axios 利用 id 发送请求到详情接口 ，获取详细数据 ，布局页面
    http({
      url: `/gateway?filmId=${this.$route.params.id}&k=2292727`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then((res) => {
      console.log(res.data.data.film)
      this.filmInfo = res.data.data.film
    })
  }
}
</script>
<style lang="scss" scoped>
.poster {
  width: 100%;
  height: 13.125rem;
  background-position: center;
  background-size: cover;
}
.content {
  padding: 0.9375rem;
  background-color: #fff;
  .contert-top {
    font-size: 18px;
  }
  .datail-text {
    margin-top: 0.25rem;
    color: #797d82;
    font-size: 13px;
  }
}
.middle {
  padding: 0.9375rem;
  background-color: #fff;
}
.foot {
  padding: 0.9375rem;
  background-color: #fff;
}
.hidden {
  overflow: hidden;
  height: 30px;
}
.avatar {
  width: 100%;
  height: 5.3125rem;
  margin-top: 15px;
  background-position: center;
  background-size: cover;
}
.kongdang {
  padding-top: 10px;
  margin-top: 10px;
  background-color: #f4f4f4;
}
.name-right {
  height: 14px;
  padding: 0 2px;
  color: #fff;
  font-size: 9px;
  line-height: 14px;
  background-color: #d2d6dc;
  border-radius: 2px;
}
</style>
