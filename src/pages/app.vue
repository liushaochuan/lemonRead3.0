<template>
  <section class="page-box">
    <article class="model model1">
      <div class="window">
        <img class="window-img blue_3" :src="img.red_3" alt="">
        <img class="window-img blue_2" :src="img.red_2" alt="">
        <img class="window-img blue_4" :src="img.red_2" alt="">
        <img class="window-img blue_1" :src="img.blue_1" alt="">
        <div class="content">
          <p class="title">中英文智能分级阅读平台</p>
          <p class="list">
            <span class="item">学生端</span>
            <span class="item">家长端</span>
            <span class="item">教师端</span>
            <span class="item">PC校管端</span>
          </p>
        </div>
      </div>
    </article>

    <article class="model model2">
      <article class="text-box">
        <header>柠檬悦读学生端</header>
        <p class="intordution">以智能分级阅读为核心，语文英语两手抓，课内课外同步提升</p>
        <p class="intorItem">
          <span>
            <img src="../images/index/speciality.png" class="speciality-icon" />
            智能分级书城
          </span>
          <span>
            <img src="../images/index/speciality.png" class="speciality-icon" />
            教材同步学习
          </span>
          <span>
            <img src="../images/index/speciality.png" class="speciality-icon" />
            拓展分级阅读训练
          </span>
        </p>
        <div class="download">
          <el-popover placement="right" trigger="hover">
            <img style="width: 200px" src="http://website.lemonread.com/studentsCode.png" alt="">
            <el-button type="text" slot="reference">
              <span class="btn-text">柠檬悦读学生端下载</span>
            </el-button>
          </el-popover>
        </div>
        <p class="header2">智能分级阅读，课内课外同步提升</p>
        <el-row class="item" v-for="(item, index) in studentList" :key="index">
          <el-col class="item1" :span="6">
            <span>({{index + 1}}) &nbsp; {{item[0]}}</span>
          </el-col>
          <el-col class="item2" :span="item[2] ? 6 : 18">
            <span>{{item[1]}}</span>
          </el-col>
          <el-col class="item2" :span="12" v-if="item[2]">
            <span>{{item[2]}}</span>
          </el-col>
        </el-row>
      </article>
      <div class="img-box">
        <img class="backgroundImg" src="http://webview.lemonread.com/APP-4.png" alt="">
        <el-carousel class="imgs" height="616px" interval="1500" indicator-position="none" arrow="never">
          <el-carousel-item v-for="url in studentImgs" :key="url">
            <img :src="url" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </article>

    <article class="model model3">
      <div class="img-box">
        <img class="backgroundImg" src="http://webview.lemonread.com/APP-4.png" alt="">
        <el-carousel class="imgs" height="616px" interval="2000" indicator-position="none" arrow="never">
          <el-carousel-item v-for="url in parentImgs" :key="url">
            <img :src="url" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <article class="text-box">
        <header>柠檬悦读家长端</header>
        <p class="intordution">以智能分级阅读为核心，语文英语两手抓，课内课外同步提升</p>
        <p class="intorItem">
          <span>
            <img src="../images/index/speciality.png" class="speciality-icon" />
            智能分级书城
          </span>
          <span>
            <img src="../images/index/speciality.png" class="speciality-icon" />
            教材同步学习
          </span>
          <span>
            <img src="../images/index/speciality.png" class="speciality-icon" />
            拓展分级阅读训练
          </span>
        </p>
        <div class="download">
          <el-popover placement="right" trigger="hover">
            <img style="width: 200px" src="http://website.lemonread.com/parentsCode.png" alt="">
            <el-button type="text" slot="reference">
              <span class="btn-text">柠檬悦读家长端下载</span>
            </el-button>
          </el-popover>
          <el-popover placement="right" trigger="hover">
            <img style="width: 200px" src="http://webview.lemonread.com/%E5%AE%B6%E9%95%BF%E7%AB%AF%E5%85%AC%E4%BC%97%E5%8F%B7.jpg" alt="">
            <el-button type="text" slot="reference">
              <span class="btn-text">柠檬悦读家长端公众号</span>
            </el-button>
          </el-popover>
        </div>
        <p class="header2">实时监测与管控</p>
        <p class="item" v-for="(item, index) in parentList" :key="index">
          <span class="item1">({{index + 1}}) {{item}}</span>
        </p>
      </article>
    </article>

  </section>
</template>

<script>
export default {
  name: "index",
  data () {
    return {
      img: {
        red_1: 'http://webview.lemonread.com/red_%E6%AD%A3.png',
        red_2: 'http://webview.lemonread.com/red_%E5%8F%8D.png',
        red_3: 'http://webview.lemonread.com/red_%E4%BE%A7.png',
        blue_1: 'http://webview.lemonread.com/blue_%E6%AD%A3.png',
        blue_2: 'http://webview.lemonread.com/blue_%E5%8F%8D.png',
        blue_3: 'http://webview.lemonread.com/blue_%E4%BE%A7.png',
      },
      studentImgs: [
        'http://website.lemonread.com/student01.png',
        'http://website.lemonread.com/student02.png',
        'http://website.lemonread.com/student03.png',
        'http://website.lemonread.com/student04.png',
        'http://website.lemonread.com/student05.png',
      ],
      studentList: [
        ['阅读测评', '根据测评结果', '推荐合适书籍'],
        ['精选分级书城', '万余本精选多方权威机构推荐书单'],
        ['训练与作业', '帮助巩固和提升阅读能力'],
        ['任务中心', '签到、阅读激励', '助力阅读习惯养成'],
        ['书圈互动', '随时随地与教师、同学在级交流，分享阅读心得'],
      ],
      parentImgs: ["http://website.lemonread.com/parent01.png",
        "http://website.lemonread.com/parent02.png",
        "http://website.lemonread.com/parent03.png"],
      parentList: [
        '孩子阅读情况时实监管',
        '孩子阅读轨迹实时查看',
        '掌握孩子阅读能力变化',
        '管控购书与阅读时间'
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
  width: 100%;
  height: 794px;
  position: relative;
  box-sizing: border-box;
}
.model1 {
  background-color: #cce9f1;
  overflow: hidden;
  padding-top: 42px;
  .window {
    width: 100%;
    height: 100%;
    perspective: 1600;
    -webkit-perspective: 1600;
    -webkit-transform: translateY(0px);
    transform-style: preserve-3d;
    -webkit-perspective-origin: center center;
    perspective-origin: center center;
    animation: window 1s;
    .window-img {
      position: absolute;
      height: 90%;
    }
    .blue_3 {
      left: 100%;
      animation: blue_3 4s;
    }
    @keyframes blue_3 {
      0% {
        left: 50%;
      }
      75% {
        left: 50%;
      }
    }
    .blue_2 {
      left: 97%;
      top: 300px;
      margin-left: 20px;
      transform-origin: left;
      -webkit-transform-origin: left;
      transform: rotateZ(-35deg);
      -webkit-transform: rotateZ(-35deg);
      animation: blue_2 4s linear;
    }
    @keyframes blue_2 {
      0% {
        transform: rotateY(90deg);
        -webkit-transform: rotateY(90deg);
        left: 50%;
        top: 0px;
      }
      25% {
        transform: rotateY(90deg);
        -webkit-transform: rotateY(90deg);
        left: 50%;
        top: 0px;
      }
      50% {
        transform: rotateY(0deg);
        -webkit-transform: rotateY(0deg);
        left: 50%;
        top: 0px;
      }
      75% {
        transform: rotateZ(0deg);
        -webkit-transform: rotateZ(0deg);
        left: 80%;
        top: 300px;
      }
      100% {
        transform: rotateZ(-35deg);
        -webkit-transform: rotateZ(-35deg);
        left: 97%;
        top: 300px;
      }
    }
    .blue_4 {
      left: 50%;
      margin-left: 20px;
      transform-origin: left;
      -webkit-transform-origin: left;
      transform: rotateZ(-215deg);
      -webkit-transform: rotateZ(-215deg);
      top: -500px;
      animation: blue_4 4s linear;
    }
    @keyframes blue_4 {
      0% {
        transform: rotateY(90deg);
        -webkit-transform: rotateY(90deg);
        top: 0px;
      }
      25% {
        transform: rotateY(90deg);
        -webkit-transform: rotateY(90deg);
        top: 0px;
      }
      50% {
        transform-origin: left;
        -webkit-transform-origin: left;
        transform: rotateY(0deg);
        -webkit-transform: rotateY(0deg);
        top: 0px;
      }
      75% {
        transform: rotateZ(-180deg);
        -webkit-transform: rotateZ(-180deg);
        top: -250px;
      }
      100% {
        transform: rotateZ(-215deg);
        -webkit-transform: rotateZ(-215deg);
        top: -500px;
      }
    }
    .blue_1 {
      right: 50%;
      transform-origin: right;
      -webkit-transform-origin: right;
      transform: rotateZ(-35deg);
      -webkit-transform: rotateZ(-35deg);
      right: 60%;
      top: 200px;
      animation: blue_1 4s linear;
    }
    @keyframes blue_1 {
      0% {
        transform: rotateY(-90deg);
        -webkit-transform: rotateY(-90deg);
        right: 50%;
        top: 0;
      }
      25% {
        transform: rotateY(-90deg);
        -webkit-transform: rotateY(-90deg);
        right: 50%;
        top: 0;
      }
      50% {
        transform: rotateY(0deg);
        -webkit-transform: rotateY(0deg);
        right: 50%;
        top: 0;
      }
      75% {
        transform: rotateZ(0deg);
        -webkit-transform: rotateZ(0deg);
        right: 55%;
        top: 100px;
      }
    }
  }
  @keyframes window {
    from {
      transform: translateY(-860px);
      -webkit-transform: translateY(-860px);
    }
    to {
      transform: translateY(0px);
      -webkit-transform: translateY(0px);
    }
  }
  .content {
    position: absolute;
    top: 400px;
    left: 50%;
    width: 50%;
    text-align: left;
    overflow: hidden;
    color: #323031;
    animation: classcontent 4s;
    .title {
      height: 100px;
      font-size: 50px;
      font-weight: 700;
      line-height: 100px;
      letter-spacing: 5px;
      overflow: hidden;
    }
    .list {
      box-sizing: border-box;
      font-size: 25px;
      height: 50px;
      line-height: 50px;
      .item {
        border: 1px solid #323031;
        margin-right: 20px;
        padding: 0 15px;
      }
    }
  }
  @keyframes classcontent {
    0% {
      width: 0;
    }
    75% {
      width: 0;
    }
    100% {
      width: 50%;
    }
  }
  .model1-img_1 {
  }
  .model1-img_1 {
  }
}
.model2 {
  height: 746px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 90px 0;
  overflow: hidden;
  .text-box {
    width: 800px;
    flex-shrink: 0;
    text-align: left;
    header {
      font-size: 40px;
      font-weight: 600;
      line-height: 80px;
      height: 80px;
      color: #313131;
    }
    .intordution {
      font-size: 20px;
      line-height: 40px;
      color: #838383;
    }
    .intorItem {
      font-size: 20px;
      color: #838383;
    }
    .download {
      margin: 80px 0;
      .btn-text {
        color: #100806;
        font-size: 20px;
        background-color: #ffe226;
        line-height: 50px;
        display: inline-block;
        padding: 0 25px;
        border-radius: 25px;
      }
    }
    .header2 {
      font-size: 27px;
      letter-spacing: 1px;
      line-height: 50px;
      color: #303030;
    }
    .item {
      font-size: 20px;
      line-height: 40px;
      .item1 {
        color: #585858;
      }
      .item2 {
        color: #8b8b8b;
      }
    }
  }
  .img-box {
    width: 400px;
    flex-shrink: 0;
    position: relative;
    .backgroundImg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1;
    }
    .imgs {
      position: absolute;
      top: 50px;
      left: 20px;
      width: 90%;
      img {
        width: 95%;
      }
      z-index: 0;
    }
  }
}
.model3 {
  height: 746px;
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  padding: 90px 0;
  overflow: hidden;
  .text-box {
    width: 800px;
    box-sizing: border-box;
    padding-left: 60px;
    flex-shrink: 0;
    text-align: left;
    header {
      font-size: 40px;
      font-weight: 600;
      line-height: 80px;
      height: 80px;
      color: #313131;
    }
    .intordution {
      font-size: 20px;
      line-height: 40px;
      color: #838383;
    }
    .intorItem {
      font-size: 20px;
      color: #838383;
    }
    .download {
      margin: 80px 0;
      .btn-text {
        color: #100806;
        font-size: 20px;
        background-color: #ffe226;
        line-height: 50px;
        display: inline-block;
        padding: 0 25px;
        border-radius: 25px;
      }
    }
    .header2 {
      font-size: 27px;
      letter-spacing: 1px;
      line-height: 50px;
      color: #303030;
    }
    .item {
      font-size: 20px;
      line-height: 40px;
      .item1 {
        color: #585858;
      }
      .item2 {
        color: #8b8b8b;
      }
    }
  }
  .img-box {
    width: 400px;
    flex-shrink: 0;
    position: relative;
    .backgroundImg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1;
    }
    .imgs {
      position: absolute;
      top: 50px;
      left: 20px;
      width: 90%;
      img {
        width: 95%;
      }
      z-index: 0;
    }
  }
}
</style>