<template>
  <main>
    <lemon-head></lemon-head>
    <article class="content">
      <router-view></router-view>
    </article>
    <lemon-foot class="foot"></lemon-foot>
  </main>
</template>

<script>
import LemonHead from '@/components/LemonHead';
import LemonFoot from '@/components/LemonFoot2';
export default {
  name: "layout",
  data () {
    return {
    };
  },

  components: { LemonHead, LemonFoot },

  computed: {},

  mounted () {},

  methods: {}
}

</script>
<style lang='less' scoped>
.content {
  margin-top: 90px;
}
</style>