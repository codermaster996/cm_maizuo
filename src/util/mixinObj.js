const obj = {
  destroyed () {
    this.$store.commit('show')
  },
  created () {
    this.$store.commit('hide')
  }
}

export default obj
