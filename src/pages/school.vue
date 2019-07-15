<template>
  <section class="page-box">
    <section class="model model1">
      <article class="text">
        <header>柠檬悦读校管端</header>
        <p>利用大数据，对全校学生阅读情况、老师阅读教学情况进行统计、分析，</p>
        <p>为老师制定教学策略提供数据支撑，为学校制定阅读能力提高解决方案提供科学依据。柠檬悦读校管端产品的推出，</p>
        <p>将为学校书香校园建设、校园数字化建设和信息化改造提供有效支持。</p>
      </article>
      <section class="pc-box">
        <img src="../images/index/pc.png" class="pc-bg" />
        <div class="pc-list">
          <img src="http://website.lemonread.com/master01.png" class="pc-item item1" />
          <img src="http://website.lemonread.com/master02.png" class="pc-item item2" />
        </div>

      </section>
    </section>
    <section class="model model2">
      <div class="list">
        <article class="item" v-for="item in list" :key="item.title" :style="{'background-color': item.color}">
          <img :src="item.img" alt="" :style="{'background-color': item.color}">
          <header>{{item.title}}</header>
          <p v-for="p in item.content" :key="p">{{p}}</p>
        </article>
      </div>
    </section>
  </section>
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
      index: 0,
      keydownTime: 0,
      mousewheelTime: 0,
      aDom: null
    };
  },

  components: {},

  computed: {},

  mounted () {
    window.addEventListener('scroll', this.windowScroll)
    this.aDom = document.querySelectorAll('.model')
    window.addEventListener('keydown', this.keydown)
    window.addEventListener('mousewheel', this.mousewheel)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.windowScroll)
    window.removeEventListener('keydown', this.keydown)
    window.removeEventListener('mousewheel', this.mousewheel)
  },

  methods: {
    windowScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 30 && scrollTop < 830) {
        this.aDom[1].classList.add('active')
      } else if (scrollTop > 900) {
        this.aDom[2].classList.add('active')
      }
    },
    keydown (ev) {
      const now = Date.now()
      if (now - this.keydownTime < 300) return
      this.keydownTime = now
      console.log(ev.keyCode)
      if (ev.keyCode == 38) {
        // 上
        ev.preventDefault()
        if (this.index == 0) return
        this.aDom[--this.index].scrollIntoView({ behavior: 'smooth', block: 'center' })
      } else if (ev.keyCode == 40) {
        // 下
        ev.preventDefault()
        if (this.index == this.aDom.length - 1) return
        this.aDom[++this.index].scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    },
    mousewheel (ev) {
      ev.preventDefault()
      const now = Date.now()
      if (now - this.mousewheelTime < 300) return
      this.mousewheelTime = now
      if (ev.wheelDeltaY > 0) {
        // 上
        if (this.index == 0) return
        this.aDom[--this.index].scrollIntoView({ behavior: 'smooth', block: 'center' })
      } else if (ev.wheelDeltaY < 0) {
        // 下
        if (this.index == this.aDom.length - 1) {
          document.querySelector('.footer').scrollIntoView({ behavior: 'smooth', block: 'center' })
        } else
          this.aDom[++this.index].scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }
  }
}

</script>
<style lang='less' scoped>
.model {
  height: 1000px;
}
.model1 {
  background-color: #f9f9f9;
  height: 880px;
  .text {
    padding: 100px 0 80px 0;
    header {
      font-size: 45px;
      font-weight: 700;
      line-height: 100px;
    }
    p {
      font-size: 20px;
      line-height: 30px;
    }
  }
  .pc-box {
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    .pc-list {
      position: absolute;
      width: 666px;
      height: 416px;
      background-color: #aaa;
      overflow: hidden;
      left: 50%;
      margin: -331px;
      top: 366px;
      // margin: 0 auto;
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
    width: 1210px;
    display: flex;
    padding: 130px 0;
    flex-wrap: wrap;
    margin: 0 auto;
    .item {
      margin: 2px;
      width: 600px;
      height: 350px;
      img {
        margin: 30px 0;
      }
      header {
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