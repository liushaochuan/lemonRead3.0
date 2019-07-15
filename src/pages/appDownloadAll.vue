<!-- 下载页面 -->
<template>
  <div class="all-background">
     <div class="ckeck-box">
      <div class="ckeck-item" :class="currentTab == 'studentsDownload' ?'tabActive':''" @click="toggleTab('studentsDownload')">
        <p>学生端</p>
      </div>
      <div class="ckeck-item" :class="currentTab == 'parentsDownload' ?'tabActive':''" @click="toggleTab('parentsDownload')">
        <p>家长端</p>
      </div>
      <div class="ckeck-item" :class="currentTab == 'teachersDownload' ?'tabActive':''" @click="toggleTab('teachersDownload')">
        <p>教师端</p>
      </div>
    </div>
    <div :is="currentTab" class="scroll" keep-alive></div>
  </div>
</template>
<script>
import studentsDownload from './studentsDownload'
import parentsDownload from './parentsDownload'
import teachersDownload from './teachersDownload'
export default {
  components: {
    studentsDownload,
    parentsDownload,
    teachersDownload,
  },
  data() {
    let that = this
    return {
      currentTab: 'studentsDownload', //默认标签页
    };
  },
  methods: {
    toggleTab: function(tab) {
      this.currentTab = tab; // tab 为当前触发标签页的组件名
    },
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.ckeck-box {
  width: 100%;
  display: flex;
  justify-content: space-around;
  z-index: 5;
}

.ckeck-item {
  width: 33.33%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 1.5rem;
  background-color: #eee;
}

.tabActive {
  color: #fff;
  background-color: rgba(69, 154, 233, 1);
}
</style>
