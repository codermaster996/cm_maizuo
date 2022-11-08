<template>
  <div>
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
    <!-- <cinemas-list v-if="value"></cinemas-list> -->
    <ul v-if="value">
      <li v-for="data in computedList" :key="data.cinemaId">
        <div class="left">
          <div class="cinemas_name">{{ data.name }}</div>
          <div class="cinemas_address">{{ data.address }}</div>
        </div>

        <div class="right cinemas_name">
          <div style="color: #ff5f16">￥{{ data.lowPrice / 100 }}起</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
// import cinemasList from '@/mycomponents/cinemas/CinemasList'
import { mapActions, mapState } from 'vuex'
import obj from '@/util/mixinObj'
export default {
  mixins: [obj],
  //   components: {
  //     cinemasList
  //   },
  computed: {
    ...mapState(['cinemasList', 'cityId']),

    computedList () {
      return this.cinemasList.filter(
        (item) =>
          item.name.toUpperCase().includes(this.value.toUpperCase()) ||
          item.address.toUpperCase().includes(this.value.toUpperCase())
      )
    }
  },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    ...mapActions(['getCinemasData']),
    onSearch () {},
    onCancel () {
      this.$router.back()
    }
  },
  mounted () {
    if (this.cinemasList.length === 0) {
      this.getCinemasData(this.cityId)
    } else {
      console.log('缓存')
    }
  }
}
</script>
<style lang="scss" scoped>
li {
  padding: 0.9375rem;

  display: flex;
  justify-content: space-between;
  .left {
    width: 13.25rem;
  }
  .cinemas_name {
    font-size: 15px;
  }
  .cinemas_address {
    color: #797d82;
    font-size: 12px;
    margin-top: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
