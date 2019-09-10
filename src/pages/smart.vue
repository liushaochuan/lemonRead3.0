<template>
  <div class="page-box">
    <div class="modle modle1">
      <div class="content-box">
        <img class="img1" src="http://webview.lemonread.com/%E6%9F%A0%E6%AA%AC%E6%82%A6%E8%AF%BB%E5%99%A8-1.png" alt="">
        <img class="img2" src="http://webview.lemonread.com/%E6%9F%A0%E6%AA%AC%E6%82%A6%E8%AF%BB%E5%99%A8-2.png" alt="">
        <div class="article">
          <div class="header">
            <h1>柠檬悦读1</h1>
            <h3>超值好礼，黑马神器</h3>
          </div>
          <p>经典黑，线条流畅圆润，电子墨水屏，双语书城，</p>
          <p>中英文移动课堂</p>
          <div class="btn" @click="goBuy('https://item.jd.com/38606608398.html')">购买</div>
          <a target="_blank" href="https://mall.jd.com/view_search-1048329.html">进一步了解></a>
        </div>
      </div>
    </div>
    <div class="modle modle2">
      <div class="content-box">
        <img class="img1" src="http://webview.lemonread.com/blue_%E5%8F%8D.png" alt="">
        <img class="img2" src="http://webview.lemonread.com/%E6%9F%A0%E6%AA%AC%E6%82%A6%E8%AF%BB%E5%99%A8-4.png" alt="">
        <div class="article">
          <div class="header">
            <h1>柠檬悦读L2</h1>
            <h3>时尚阅读，学习升级</h3>
          </div>
          <p>时尚蓝、时尚粉，6英寸纯平，300ppi超清电子墨水屏，</p>
          <p>1G+16G超大内存，双语书城，中英文移动课堂</p>
          <div class="btn" @click="goBuy('https://item.jd.com/38605642289.html')">购买</div>
          <a target="_blank" href="https://mall.jd.com/view_search-1048329.html">进一步了解></a>
        </div>
      </div>
    </div>
    <div class="modle modle3">
      <div class="content-box">
        <img class="img3" src="http://webview.lemonread.com/%E6%9F%A0%E6%AA%AC%E6%82%A6%E8%AF%BB%E5%99%A8-7.png" alt="">
        <img class="img2" src="http://webview.lemonread.com/%E6%9F%A0%E6%AA%AC%E6%82%A6%E8%AF%BB%E5%99%A8-6.png" alt="">
        <img class="img1" src="http://webview.lemonread.com/%E6%9F%A0%E6%AA%AC%E6%82%A6%E8%AF%BB%E5%99%A8-5.png" alt="">
        <div class="article">
          <div class="header">
            <h1>柠檬悦读PLUS</h1>
            <h3>超大屏，读出大视界</h3>
          </div>
          <p>时尚蓝、时尚粉，7.8英寸纯平，300ppi超清电子墨水屏，</p>
          <p>16G超大内存，双语书城，中英文移动课堂</p>
          <div class="btn" @click="goBuy('https://item.jd.com/40939561083.html#crumb-wrap')">购买</div>
          <a target="_blank" href="https://mall.jd.com/view_search-1048329.html">进一步了解></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data () {
    return {
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
    this.aDom = document.querySelectorAll('.modle')
    // window.addEventListener('keydown', this.keydown)
    // window.addEventListener('mousewheel', this.mousewheel)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.windowScroll)
    // window.removeEventListener('keydown', this.keydown)
    // window.removeEventListener('mousewheel', this.mousewheel)
  },

  methods: {
    goBuy (url) {
      const oA = document.createElement('a')
      oA.setAttribute('href', url)
      oA.setAttribute('target', '_blank')
      document.body.appendChild(oA)
      oA.click()
    },
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
.modle {
  width: 100%;
  height: 794px;
  margin-bottom: 10px;
  position: relative;
  overflow: hidden;
  .content-box {
    position: relative;
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    // overflow: hidden;
  }
  img {
    position: absolute;
  }
  .article {
    position: absolute;
    text-align: left;
    .header {
      h1 {
        font-size: 50px;
        font-weight: 700;
        line-height: 100px;
      }
      h3 {
        font-size: 30px;
        line-height: 60px;
        font-weight: 700;
        margin-bottom: 50px;
      }
    }
    p {
      font-size: 18px;
      line-height: 30px;
      white-space: nowrap;
      overflow: hidden;
    }
    a {
      color: #2889A6;
    }
    .btn {
      width: 75px;
      padding:  8px 5px;
      background-color: #FFE225;
      font-size: 20px;
      color: #303030;
      text-align: center;
      border-radius: 10px;
      margin: 50px 0 15px 0;
    }
    .btn:hover {
      cursor: pointer;
    }
  }
}
.modle1 {
  background-color: #f9f9f9;
  .img1 {
    top: 115px;
    left: 20px;
    animation: img1_1 2s;
    transition: 1s;
    -webkit-transition: 1s;
  }
  .img1:hover {
    left: 0px;
  }
  @keyframes img1_1 {
    0% {
      top: 1000px;
      left: 40%;
    }
    50% {
      top: 115px;
      left: 40%;
    }
  }
  .img2 {
    top: 315px;
    left: 180px;
    animation: img1_2 2s;
    transition: 1s;
    -webkit-transition: 1s;
  }
  .img2:hover {
    top: 260px;
  }
  @keyframes img1_2 {
    0% {
      top: -500px;
      left: 50%;
    }
    50% {
      top: 315px;
      left: 50%;
    }
  }
  .article {
    top: 250px;
    right: 0;
    animation: article1 2s;
  }
  @keyframes article1 {
    0% {
      right: -100%;
    }
    50% {
      right: -100%;
    }
  }
}
.modle2 {
  background-color: #dff3f4;
  .img1 {
    top: 146px;
    right: 200px;
    transition: 1s;
    -webkit-transition: 1s;
  }
  .img1:hover {
    right: 220px;
  }
  .img2 {
    top: 74px;
    right: 0;
    transition: 1s;
    -webkit-transition: 1s;
  }
  .img2:hover {
    right: -20px;
  }
  .article {
    top: 250px;
    left: 0;
  }
}
.modle2.active {
  .img1 {
    animation: img2_1 1s;
  }
  @keyframes img2_1 {
    from {
      right: -30%;
    }
  }
  .img2 {
    animation: img2_2 2s;
  }
  @keyframes img2_2 {
    0% {
      right: 200%;
    }
  }
  .article {
    animation: article2 2s;
  }
  @keyframes article2 {
    0% {
      left: -100%;
    }
    50% {
      left: -100%;
    }
  }
}
.modle3 {
  background-color: #f9f9f9;
  .content-box {
    width: 1320px;
  }
  img {
    width: 750px;
  }
  .img1 {
    top: -160px;
    left: 0;
    transition: 1s;
    -webkit-transition: 1s;
  }
  // .img1:hover {
  //   top: 0px;
  //   transform: rotate(33.5deg);
  //   -webkit-transform: rotate(33.5deg);
  // }
  .img2 {
    top: -220px;
    left: 50px;
  }
  .img3 {
    top: -250px;
    left: 70px;
  }
  .article {
    top: 250px;
    right: 0;
  }
}
.modle3.active {
  .img1 {
    animation: img3_1 1.5s;
  }
  @keyframes img3_1 {
    0% {
      left: 200%;
    }
    66% {
      left: 200%;
    }
  }
  .img2 {
    animation: img3_2 1s;
  }
  @keyframes img3_2 {
    0% {
      left: 200%;
    }
    50% {
      left: 200%;
    }
  }
  .img3 {
    animation: img3_3 0.6s;
  }
  @keyframes img3_3 {
    0% {
      left: 200%;
    }
  }
  .article {
    animation: article3 2s;
  }
  @keyframes article3 {
    0% {
      top: 100%;
    }
    70% {
      top: 100%;
    }
  }
}
</style>