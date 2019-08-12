<template>
  <div class="page-box">
    <div class="model model1">
      <div class="text">
        <div class="header">柠檬悦读校管端</div>
        <div class="hr"></div>
        <p>利用大数据，对全校学生阅读情况、老师阅读教学情况进行统计、分析，</p>
        <p>为老师制定教学策略提供数据支撑，为学校制定阅读能力提高解决方案提供科学依据。柠檬悦读校管端产品的推出，</p>
        <p>将为学校书香校园建设、校园数字化建设和信息化改造提供有效支持。</p>
      </div>
      <div class="pc-box">
        <img src="../images/index/pc.png" class="pc-bg" />
        <el-carousel class="imgs" height="617px" interval="2000" indicator-position="none" arrow="never">
          <el-carousel-item class="list" v-for="url in parentImgs" :key="url">
            <img :src="url" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="model model2">
      <div class="list">
        <div class="item" v-for="item in list" :key="item.title" :style="{'background-color': item.color}">
          <img :src="item.img" alt="" :style="{'background-color': item.color}">
          <header>{{item.title}}</header>
          <p v-for="p in item.content" :key="p">{{p}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: "school",
  data () {
    return {
      list: [
        { title: '学情侦测', content: ['一键查阅全校、班级多维度阅读数据'], color: '#d8e8f7', img: 'http://webview.lemonread.com/%E6%A0%A1%E5%9B%AD%E6%96%B9%E6%A1%88-1.png' },
        { title: '教情侦测', content: ['一键查阅老师阅读任务发布情况'], color: '#fcf0a4', img: 'http://webview.lemonread.com/%E6%A0%A1%E5%9B%AD%E6%96%B9%E6%A1%88-2.png' },
        { title: '决策支持', content: ['根据数据表现，', '老师为学生提供更具针对性的阅读指导和规划'], color: '#fdd6d7', img: 'http://webview.lemonread.com/%E6%A0%A1%E5%9B%AD%E6%96%B9%E6%A1%88-3.png' },
        { title: '信息中台', content: ['在校园数字化过程中，', '成为全校师生阅读数据汇总和处理中台'], color: '#e5e5e5', img: 'http://webview.lemonread.com/%E6%A0%A1%E5%9B%AD%E6%96%B9%E6%A1%88-4.png' },
      ],
      parentImgs: ['http://website.lemonread.com/master01.png', 'http://website.lemonread.com/master02.png'],
      index: 0,
      keydownTime: 0,
      mousewheelTime: 0,
      aDom: null
    };
  },

  components: {},

  computed: {},

  methods: {
  }
}

</script>
<style lang='less' scoped>
.model {
  // height: 1000px;
}
.model1 {
  background-color: #f9f9f9;
  // padding-top: 128px;
  .text {
    padding: 128px 0 70px 0;
    .header {
      font-size: 50px;
      font-weight: 700;
      line-height: 50px;
    }
    .hr {
      width: 74px;
      height: 5px;
      background-color: #f3d724;
      margin: 28px auto;
    }
    p {
      font-size: 18px;
      line-height: 30px;
    }
  }
  .pc-box {
    margin: 0 auto;
    height: 698px;
    // overflow: hidden;
    position: relative;
    .pc-bg {
      position: absolute;
      top: 0px;
      width: 1200px;
      left: 50%;
      margin-left: -600px;
    }
    .imgs {
      width: 910px;
      height: 570px;
      position: absolute;
      top: 48px;
      left: 50%;
      margin-left: -453px;
      background-color: #aaa;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    // .list {
    //   width: 910px;
    //   height: 570px;
    // }
    .pc-list {
      position: absolute;
      width: 910px;
      height: 570px;
      background-color: #aaa;
      overflow: hidden;
      left: 50%;
      margin-left: -453px;
      top: 48px;
      .pc-item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .item2 {
        left: 0;
        animation: item2 6s infinite;
      }
      .item1 {
        left: 100%;
        animation: item1 6s infinite;
      }
      @keyframes item2 {
        0% {
          left: 0;
          top: 0;
        }
        45% {
          left: 0;
          top: 0;
        }
        50% {
          left: -100%;
          top: 0;
        }
        55% {
          left: -100%;
          top: 100%;
        }
        60% {
          left: 100%;
          top: 100%;
        }
        65% {
          left: 100%;
          top: 0;
        }
        95% {
          left: 100%;
          top: 0;
        }
        100% {
          left: 0;
          top: 0;
        }
      }
      @keyframes item1 {
        0% {
          left: -100%;
          top: 0;
        }
        5% {
          left: -100%;
          top: 100%;
        }
        10% {
          left: 100%;
          top: 100%;
        }
        15% {
          left: 100%;
          top: 0;
        }
        45% {
          left: 100%;
          top: 0;
        }
        50% {
          left: 0;
          top: 0;
        }
        95% {
          left: 0;
          top: 0;
        }
        100% {
          left: -100%;
          top: 0;
        }
      }
    }
  }
}
.model2 {
  background-color: #f5f5f5;
  .list {
    width: 80%;
    max-width: 1210px;
    display: flex;
    padding: 125px 0;
    flex-wrap: wrap;
    margin: 0 auto;
    .item {
      box-sizing: border-box;
      border: 2px solid #f5f5f5;
      width: 50%;
      max-width: 600px;
      height: 350px;
      img {
        margin: 30px 0;
      }
      .header {
        font-size: 30px;
        line-height: 50px;
      }
      p {
        font-size: 18px;
        line-height: 30px;
      }
    }
  }
}
</style>