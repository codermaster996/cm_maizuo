<template>
    <div class="hearder">
        <i class="iconfont icon-back" @click="hanleBack"></i>
        <slot></slot>
    </div>
</template>
<script>
export default {
  methods: {
    hanleBack () {
      this.$router.back() // 返回上一个页面
    }
  }
}
</script>
<style lang="scss" scoped>
.hearder{
    font-size: 17px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2.75rem;
    line-height: 2.75rem;
    background-color: white;
    text-align: center;
    i{
        font-size: 30px;
        position: fixed;
        left: .5rem;
        top: 0;
        height: 2.75rem;
        line-height: 2.75rem;
    }
}
</style>
