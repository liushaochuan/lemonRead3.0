<template>
  <div class="page-box">
    <div class="model model1">
      <div class="window">
        <!-- <img class="window-img blue_3" :src="img.red_3" alt="">
        <img class="window-img blue_2" :src="img.red_2" alt="">
        <img class="window-img blue_4" :src="img.red_2" alt="">
        <img class="window-img blue_1" :src="img.blue_1" alt=""> -->
        <img class="window-img img0" :src="img2[0]" alt="">
        <img class="window-img img1" :src="img2[1]" alt="">
        <img class="window-img img2" :src="img2[1]" alt="">
        <div class="content">
          <img src="http://webview.lemonread.com/txt.png" alt="">
          <!-- <p class="title">中英文智能分级阅读平台</p>
          <p class="list">
            <span class="item">学生端</span>
            <span class="item">家长端</span>
            <span class="item">教师端</span>
            <span class="item">PC校管端</span>
          </p> -->
        </div>
      </div>
    </div>

    <div class="model model2">
      <div class="text-box">
        <div class="header">柠檬悦读学生端</div>
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
            <img style="width: 150px; height: 150px;" src="http://website.lemonread.com/studentsCode.png" alt="">
            <el-button type="text" slot="reference">
              <span class="btn-text">柠檬悦读学生端下载</span>
            </el-button>
          </el-popover>
          <!-- <el-tooltip placement="right" effect="light">
            <div slot="content">
              <img style="width: 80px; margin: -8px" src="http://website.lemonread.com/studentsCode.png" alt="">
            </div>
            <span class="btn-text">柠檬悦读学生端下载</span>
          </el-tooltip> -->
        </div>
        <p class="header2">智能分级阅读，课内课外同步提升</p>
        <p class="item">同步中小学教材，稳步提升</p>
        <p class="item">精选分级书城，提供中小学专属优质书单</p>
        <p class="item">个性化阅读，为孩子找到适合自己的读物</p>
        <p class="item">精品名著导读课，为阅读指引方向</p>
        <p class="item">中英文百科阅读，送给孩子一个良好的阅读习惯</p>

      </div>
      <div class="img-box">
        <img class="backgroundImg" src="http://webview.lemonread.com/APP-4.png" alt="">
        <el-carousel class="imgs" height="680px" interval="1500" indicator-position="none" arrow="never">
          <el-carousel-item v-for="url in studentImgs" :key="url">
            <img :src="url" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>

    <div class="model model3">
      <div class="img-box">
        <img class="backgroundImg" src="http://webview.lemonread.com/APP-4.png" alt="">
        <el-carousel class="imgs" height="680px" interval="2000" indicator-position="none" arrow="never">
          <el-carousel-item v-for="url in parentImgs" :key="url">
            <img :src="url" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="text-box">
        <div class="header">柠檬悦读家长端</div>
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
            <img style="width: 150px" src="http://webview.lemonread.com/parentsPublicCode.jpg" alt="">
            <el-button type="text" slot="reference">
              <span class="btn-text">柠檬悦读家长端公众号</span>
            </el-button>
          </el-popover>
        </div>
        <p class="header2">实时监测与管控，共享亲子互动好时光</p>
        <p class="item" v-for="(item, index) in parentList" :key="index">
          <span class="item1">{{item}}</span>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
// import apn from '../images/index/微信图片(1)'
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
      img2: [
        'http://webview.lemonread.com/%E6%9F%A0%E6%AA%AC%E6%82%A6%E8%AF%BB%E5%99%A8-5.png',
        'http://webview.lemonread.com/APP-1.png'
      ],
      studentImgs: [
        'http://website.lemonread.com/students00.jpg',
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
        '孩子阅读情况实时监管',
        '孩子阅读轨迹实时查看',
        '掌握孩子阅读能力变化',
        '管控购书与阅读时间',
        '孩子分享内容及时互动',
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
    // window.addEventListener('keydown', this.keydown)
    // window.addEventListener('mousewheel', this.mousewheel)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.windowScroll)
    // window.removeEventListener('keydown', this.keydown)
    // window.removeEventListener('mousewheel', this.mousewheel)
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
  .intordution {
    font-size: 18px;
    line-height: 40px;
  }
  .intorItem {
    font-size: 18px;
    display: flex;
    span {
      margin-right: 30px;
      display: flex;
      align-items: center;
    }
  }
}
.model1 {
  height: 41vw;
  background-color: #cce9f1;
  overflow: hidden;
  .window {
    // width: 100%;
    // height: 100%;
    // perspective: 1600;
    // -webkit-perspective: 1600;
    // -webkit-transform: translateY(0px);
    // transform-style: preserve-3d;
    // -webkit-perspective-origin: center center;
    // perspective-origin: center center;
    .window-img {
      position: absolute;
      // height: 35vw;
    }
    .img0 {
      left: 5.5vw;
      top: 11.9vw;
      width: 51.25vw;
      animation: img0 1s;
    }
    @keyframes img0 {
      0% {
        top: 100%
      }
    }
    .img1 {
      left: 19vw;
      top: -26vw;
      width: 47.24vw;
      animation: img1 1s;
    }
    @keyframes img1 {
      0% {
        top: -100%
      }
    }
    .img2 {
      transform: rotate(180deg);
      left: 87vw;
      top: 4vw;
      width: 47.24vw;
      animation: img2 1s;
    }
    @keyframes img2 {
      0% {
        left: 100%
      }
    }
    
    /*
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
          transform: rotateY(89deg);
          -webkit-transform: rotateY(89deg);
          left: 50%;
          top: 0px;
        }
        25% {
          transform: rotateY(89deg);
          -webkit-transform: rotateY(89deg);
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
        // }
        0% {
          top: -1000px;
        }
        75% {
          top: -1000px;
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
  */
  }
  .content {
    position: absolute;
    top: 21.72vw;
    left: 50.42vw;
    overflow: hidden;
    img {
      width: 30.73vw;
      animation: img3 1s
    }
    @keyframes img3 {
      0% {
        width: 0;
      }
    }
    // animation: classcontent 4s;
    // .title {
    //   height: 100px;
    //   font-size: 54px;
    //   font-weight: 700;
    //   line-height: 100px;
    //   letter-spacing: 5px;
    //   overflow: hidden;
    // }
    // .list {
    //   box-sizing: border-box;
    //   font-size: 20px;
    //   height: 34px;
    //   line-height: 34px;
    //   .item {
    //     border: 1px solid #434343;
    //     margin-right: 14px;
    //     padding: 0 11px;
    //     font-family: SourceHanSansCN-Normal;
    //   }
    // }
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
  height: 793px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 90px 0;
  overflow: hidden;
  .text-box {
    width: 800px;
    flex-shrink: 0;
    text-align: left;
    .header {
      font-size: 50px;
      font-weight: 700;
      line-height: 80px;
      height: 80px;
    }
    .download {
      margin: 80px 0 46px 0;
      .btn-text {
        color: #100806;
        font-size: 18px;
        background-color: #ffe225;
        // line-height: 54px;
        display: inline-block;
        padding: 18px 23px;
        border-radius: 27px;
      }
    }
    .item {
      font-size: 20px;
      line-height: 38px;
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
      top: 25px;
      left: 20px;
      width: 90%;
      img {
        width: 100%;
        // margin-top: -20px;
      }
      z-index: 0;
    }
  }
}
.header2 {
  font-size: 30px;
  line-height: 88px;
  font-weight: 700;
}
.model3 {
  height: 793px;
  background-color: #f6f6f6;
  display: flex;
  justify-content: center;
  padding: 90px 0;
  overflow: hidden;
  .text-box {
    width: 700px;
    box-sizing: border-box;
    padding-left: 60px;
    flex-shrink: 0;
    text-align: left;
    .header {
      font-size: 40px;
      font-weight: 600;
      line-height: 80px;
      height: 80px;
      color: #313131;
    }
    // .intorItem {
    //   font-size: 20px;
    //   color: #838383;
    // }
    .download {
      margin: 80px 0 46px 0;
      .btn-text {
        color: #100806;
        font-size: 20px;
        background-color: #ffe225;
        line-height: 54px;
        display: inline-block;
        padding: 0 23px;
        border-radius: 27px;
      }
    }
    .item {
      font-size: 20px;
      line-height: 40px;
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
      top: 25px;
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