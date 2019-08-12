<template>
  <div class="page-box">
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
export default {
  name: "webkite",
  data () {
    return {
      content: ''
    };
  },


  created () {
    this.content = this.$route.params.content
  },

  methods: {}
}

</script>
<style lang='less' scoped>
.page-box {
  text-align: left;
  background-color: #f3f3f3;
  padding: 100px;
  .content {
    padding: 65px;
    max-width: 1200px;
    margin: 0 auto;
    padding-top: 55px;
    line-height: 24px;
    background-color: #fff;
  }
}
</style>