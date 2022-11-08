<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="到底了,还拉呐"
      @load="onLoad"
      :immediate-check="false"
    >
      <van-cell
        v-for="data in datalist"
        :key="data.filmId"
        @click="handleDeatil(data.filmId)"
      >
        <div class="lest-right">购票</div>
        <img :src="data.poster" />
        <div>
          <div class="title">
            {{ data.name }}
            <span class="name-right">{{data.filmType.name}}</span>
          </div>
          <div class="content">
            <div :class="data.grade ? '' : 'hidden'">
              观众评分:<span style="color: orange">{{ data.grade }}</span>
            </div>
            <div class="actors">主演: {{ data.actors | actorsFilter }}</div>
            <div>{{ data.nation }} | {{ data.runtime }}分钟</div>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
import http from '@/util/http'
import Vue from 'vue'
// import http from '@/util/http'
Vue.filter('actorsFilter', (data) => {
  // console.log(data.map(item => item.name).join(' '))
  if (data === undefined) return '暂无主演'
  return data.map((item) => item.name).join(' ')
})
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      finished: false,
      curren: 1,
      total: 0
    }
  },
  mounted () {
    http({
      url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=2&k=8014509`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then((res) => {
      console.log(res.data.data.films)
      this.datalist = res.data.data.films

      this.total = res.data.data.total
    })
  },
  methods: {
    onLoad () {
      // 总长度匹配 禁用 懒加载
      if (this.datalist.length === this.total && this.total !== 0) {
        this.finished = true
        return
      }

      console.log('到底了')
      this.curren++
      http({
        url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.curren}&pageSize=10&type=2&k=8014509`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((res) => {
        // console.log(res.data.data.films)
        this.datalist = [...this.datalist, ...res.data.data.films]

        // 数据更新完毕后，将 loading 设置成 false
        this.loading = false
        // 若数据已全部加载完毕，则直接将 finished 设置成 true 即可。
      })
    },
    handleDeatil (id) {
      // 编程式导航
      //  location.href = '#/detail'
      // 1-通过路径跳转
      // this.$router.push(`/detail/${id}`)

      // 2-通过命名路由来跳转
      this.$router.push({
        name: 'dashiDetail',
        params: {
          id
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.van-list {
  .van-cell {
    overflow: hidden;
    padding: 0.9375rem;
    img {
      width: 4.125rem;
      float: left;
    }
    .title {
      padding-left: 75px;
      font-size: 16px;
      .name-right {
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
      }
    }
    .content {
      padding-left: 75px;
      font-size: 13px;
      color: #797d82;
      .actors {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 12.5rem;
      }
    }
  }
}
.lest-right {
  font-size: 13px;
  margin-top: 38px;
  float: right;
  border: 1px solid #ff5f16;
  text-align: center;
  border-radius: 4px;
  color: #ff5f16;
  height: 28px;
  width: 56px;
}
.hidden {
  visibility: hidden;
}
</style>
