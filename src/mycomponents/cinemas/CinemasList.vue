<template>
  <ul>
    <li v-for="data in cinemasList" :key="data.cinemaId">
      <div class="left">
        <div class="cinemas_name">{{ data.name }}</div>
        <div class="cinemas_address">{{ data.address }}</div>
      </div>

      <div class="right cinemas_name">
        <div style="color: #ff5f16">￥{{ data.lowPrice / 100 }}起</div>
      </div>
    </li>
  </ul>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['cinemasList'])
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
