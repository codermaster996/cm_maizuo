<template>
  <div>
    <!-- <div class="box">111111111111</div> -->
    <!-- 路由容器 -->
    <section>
      <router-view></router-view>
    </section>
    <tarbar ref="mytarbar" v-show="$store.state.isTarbarShow"></tarbar>
  </div>
</template>

<script>
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import Tarbar from '@/mycomponents/Tarbar'

Vue.use(Vant) // Vue.compoent(全局定义组件)
export default {
  data () {
    return {

    }
  },
  mounted () {
    // console.log(this.$refs.mytarbar.$el.offsetHeight)
  },
  components: {
    Tarbar
  }
}
</script>
<style lang="scss">
  *{
    padding: 0;
    margin: 0;
  }
  html,body{
    width: 100%;
  }
  ul{
    list-style: none;
  }
  // .box{
  //   width: 46.875rem;
  //   height: 12.5rem;
  //   background-color: aqua;
  // }
  section{
    padding-bottom: 3.0625rem;
  }
</style>
