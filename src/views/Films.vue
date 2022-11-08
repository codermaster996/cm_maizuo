<template>
    <div>
        <films-swiper :key="datalist.length">
            <films-swiper-item v-for="data in datalist" :key="data.id" class="filmsswiperitem">
              <img :src="data.imgUrl" />
            </films-swiper-item>
        </films-swiper>

        <films-hearder class="sticky"></films-hearder>

        <router-view></router-view>
    </div>
</template>
<script>
import filmsSwiper from '@/mycomponents/films/FilmsSwiper'
import filmsSwiperItem from '@/mycomponents/films/FilmsSwiperItem'
import filmsHearder from '@/mycomponents/films/FilmsHearder'
import axios from 'axios'
export default {
  components: {
    filmsSwiper,
    filmsSwiperItem,
    filmsHearder
  },
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.get('/banner.json').then(res => {
      // console.log(res.data)
      this.datalist = res.data.banner
    })
  }
}
</script>
<style lang="scss" scoped>
.filmsswiperitem{
  img{
    width: 100%;
  }
}
.sticky{
  position: sticky;
  background: white;
  z-index: 100;
  top: -1px;
}
</style>
