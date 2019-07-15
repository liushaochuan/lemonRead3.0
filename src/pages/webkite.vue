<template>
  <article class="page-box">
    <main v-html="content"></main>
  </article>
</template>

<script>
export default {
  name: "webkite",
  data () {
    return {
      content: ''
    };
  },

  components: {},

  computed: {},

  created () {
    this.content = this.$route.params.content
  },

  methods: {}
}

</script>
<style lang='less' scoped>
.page-box {
  width: 1200px;
  margin: 0 auto;
  text-align: left;
  main {
    padding-top: 55px;
    line-height: 24px;
  }
}
</style>