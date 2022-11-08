<template>
    <div>
        <van-nav-bar title="影院" ref="navbar" @click-left="handleLeft" @click-right="handleRight">
          <template #left>
            {{cityName}}<van-icon name="arrow-down" size="3" color="black" />
          </template>
          <template #right>
              <van-icon name="search" size="24" color="black" />
          </template>
        </van-nav-bar>
        <div class="box" :style="{ height:height }">
           <cinemas-list></cinemas-list>
        </div>
    </div>
</template>
<script>
import BetterScroll from 'better-scroll'
import cinemasList from '@/mycomponents/cinemas/CinemasList'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  components: {
    cinemasList
  },

  computed: {
    ...mapState(['cinemasList', 'cityId', 'cityName'])

  },

  data () {
    return {
      height: '0px'
    }
  },
  mounted () {
    // console.log(this.$refs.navbar.$el.offsetHeight)
    // 动态结算高度
    this.height = document.documentElement.clientHeight -
    this.$refs.navbar.$el.offsetHeight -
    document.querySelector('footer').offsetHeight + 'px'

    // 分发
    if (this.cinemasList.length === 0) {
      this.getCinemasData(this.cityId).then(res => {
        this.$nextTick(() => {
          new BetterScroll('.box', {
            scrollbar: {
              fade: true
            }
          })
        // this.BetterScroll = new BetterScroll('.box')
        })
      })
    }

    // http({
    //   url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=590702`,
    //   headers: {
    //     'X-Host': 'mall.film-ticket.cinema.list'
    //   }
    // }).then(res => {
    // //   console.log(res.data.data.cinemas)
    //   this.cinemaslist = res.data.data.cinemas
    //   //   console.log(document.getElementsByTagName('li').length)
    //   this.$nextTick(() => {
    //     new BetterScroll('.box', {
    //       scrollbar: {
    //         fade: true
    //       }
    //     })
    //     // this.BetterScroll = new BetterScroll('.box')
    //   })
    // })
  },
  methods: {
    ...mapActions(['getCinemasData']),
    ...mapMutations(['clearCinemas']),
    handleLeft () {
      this.$router.push('/city')

      // 清空cinemas
      this.clearCinemas()
    },
    handleRight () {
      this.$router.push('/cinemas/search')
    }
  }
}
</script>
<style lang="scss" scoped>
.box{
    // height: 38.625rem;
    overflow: hidden;
    // 高度相对定位
    // 修正滚动条的位置
    position: relative;
}
</style>
