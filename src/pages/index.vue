<template>
  <div class="page-box">
    <div class="modle modle1">
      <div>
        <img src="http://advert.lemonread.com/%E7%BD%91%E7%AB%99%E9%A6%96%E9%A1%B5-1.png" alt="">
        <article class="text">
          <header>
            <h3>柠檬悦读</h3>
            <h1>21天，让孩子爱上阅读</h1>
            <p>——中英文智能分级阅读</p>
          </header>
          <div></div>
        </article>
      </div>
    </div>
    <div class="modle modle2">
      <article>
        <header>
          <h3>柠檬悦读器</h3>
          <h1>孩子必备学习神器</h1>
          <p><a target="_blank" href="https://mall.jd.com/view_search-1048329.html">了解详情></a> <a target="_blank" href="https://mall.jd.com/view_search-1048329.html">购买></a></p>
        </header>
      </article>
      <img class="img1" src="http://webview.lemonread.com/%E7%BD%91%E7%AB%99%E9%A6%96%E9%A1%B5-2.png" alt="">
      <img class="img2" src="http://webview.lemonread.com/%E7%BD%91%E7%AB%99%E9%A6%96%E9%A1%B5-3.png" alt="">
    </div>
    <div class="modle modle3">
      <div class="left">
        <h1>柠檬悦读微信家长端</h1>
        <p>同步孩子的阅读轨迹，陪伴成长</p>
        <img @click="goApp" src="http://webview.lemonread.com/%E7%BD%91%E7%AB%99%E9%A6%96%E9%A1%B5-4.png" alt="">
      </div>
      <div class="right">
        <article>
          <header>
            <h1>企业动态</h1>
            <h3>{{news.title}}</h3>
          </header>
          <p>{{news.previewContent}}</p>
          <a href="" @click.prevent="goMovement">更多资讯 >>></a>
        </article>
        <div class="img-box">
          <img :src="news.coverKey" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "index2",
  data () {
    return {
      news: {
        title: '',
        previewContent: '',
        coverKey: ''
      },
      index: 0,
      keydownTime: 0,
      mousewheelTime: 0,
      aDom: null
    };
  },

  components: {},

  computed: {},

  created () {
    this.search()
  },

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
    search () {
      let url = 'http://121.199.24.124:3300/website/getCompanyNewList?isIndex=1'
      // let url = 'http://api.lemonread.com/website/getCompanyNewList?isIndex=1'

      axios.get(url).then(data => {
        if (data.errcode) return
        if (data.retobj.rows.length) this.news = data.retobj.rows[0]
      })
    },
    goMovement () {
      this.$parent.$children.forEach(item => {
        if (item.goLink) item.goLink({ link: "movement" })
      })
    },
    goApp() {
      this.$parent.$children.forEach(item => {
        if (item.goLink) item.goLink({ link: "app" })
      })
    },
    windowScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 30) {
        // this.aDom[1].getElementsByTagName
        this.aDom[1].classList.add('active')
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
.page-box {
  overflow: hidden;
}
.modle1 {
  height: 796px;
  background-color: #f2f2f2;
  div {
    position: relative;
    width: 1200px;
    height: 796px;
    margin: 0 auto;
  }
  img {
    position: absolute;
    bottom: 0;
    left: 0;
    animation: img1 2s;
  }
  @keyframes img1 {
    0% {
      bottom: -30px;
    }
  }
  .text {
    position: absolute;
    right: 0px;
    top: 285px;
    text-align: left;
    animation: textbox 2s;
    h3 {
      font-size: 50px;
      line-height: 60px;
    }
    h1 {
      font-size: 50px;
      line-height: 100px;
      font-weight: 700;
    }
    p {
      font-size: 30px;
      line-height: 48px;
    }
    div {
      position: absolute;
      width: 520px;
      height: 210px;
      background-color: rgba(242, 242, 242, 0);
      top: 0;
      right: 0;
      animation: textshow 1s;
    }
    @keyframes textshow {
      from {
        background-color: rgba(242, 242, 242, 1);
      }
    }
  }
  @keyframes textbox {
    from {
      top: 315px;
    }
  }
}
.modle2 {
  background-color: #fafafa;
  height: 791px;
  position: relative;
  overflow: hidden;
  article {
    padding-top: 40px;
    header {
      h3 {
        font-size: 40px;
        line-height: 60px;
      }
      h1 {
        font-size: 40px;
        font-weight: 700;
        line-height: 60px;
      }
      p {
        padding-top: 10px;
        a {
          color: #047F9F;
          font-size: 18px;
        }
      }
    }
  }
  .img1 {
    position: absolute;
    top: 185px;
    left: 33%;
    transition: 1s;
    -webkit-transition: 1s;
  }
  .img1:hover {
    left: 30%;
  }

  .img2 {
    position: absolute;
    top: 333px;
    left: 45.6%;
    transition: 1s;
    -webkit-transition: 1s;
  }
  .img2:hover {
    left: 50%;
    top: 300px;
  }
}
.modle2.active {
  article {
    animation: article2 2s;
  }
  .img1 {
    animation: img2_1 2s;
  }
  .img2 {
    animation: img2_2 2s;
  }
}
@keyframes article2 {
  from {
    padding-top: 300px;
  }
}
@keyframes img2_1 {
  from {
    top: 100%;
  }
}
@keyframes img2_2 {
  from {
    top: 100%;
  }
}
.modle3 {
  height: 600px;
  display: flex;
  justify-content: space-between;
  div {
    background-color: #fafafa;
    margin: 20px;
    height: 600px;
    width: 50%;
  }
  .left {
    margin-right: 10px;
    overflow: hidden;
    h1 {
      font-size: 40px;
      line-height: 60px;
      font-weight: 700;
      margin-top: 75px;
    }
    p {
      font-size: 20px;
      line-height: 60px;
    }
    img {
      margin-top: 24px;
      cursor: pointer;
    }
  }
  .right {
    overflow: hidden;
    margin-left: 10px;
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    // align-items: center;
    article {
      padding: 65px 130px 30px 130px;
      box-sizing: border-box;
      height: 50%;
      header {
        h1 {
          font-size: 34px;
          line-height: 64px;
          font-weight: 700;
          height: 64px;
          overflow: hidden;
          color: #131313;
        }
        h3 {
          font-size: 20px;
          line-height: 30px;
          font-weight: 700;
          height: 30px;
          overflow: hidden;
          color: #111;
          // white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      p {
        font-size: 18px;
        line-height: 30px;
        height: 90px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box; /*元素作为box伸缩盒子*/
        -webkit-line-clamp: 3; /*设置文本行数限制*/
        -webkit-box-orient: vertical; /*设置文本排列方式*/
        text-align: left;
        text-indent: 2em;
        margin-top: 20px;
      }
      a {
        color: #047F9F;
        font-size: 18px;
        line-height: 45px;
      }
    }
    .img-box {
      width: 80%;
      height: 260px;
      min-width: 500px;
      margin: 20px auto 0;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      img {
        width: 100%;
      }
    }
  }
}
</style>