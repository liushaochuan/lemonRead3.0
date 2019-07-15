<!-- 头部页面 -->
<template>
  <div class="layout">
    <!-- 导航条小屏下弹框显示 -->
    <!-- <div class="modal" v-if="showModal">
      <div class="mask" @click="closeModal"></div>
      <div class="modal-content">
        <ul class="head-huge">
          <li v-for="(item,index) in linkListReverse" :key="index" class="head-item head-link-item click-hover" @click="goLink(item.link)" @mouseover='headOverReverse(index)' @mouseout='headOutReverse(index)'>
            <div class="link-title-reverse">
              <b v-if="item.activeBorder" class="link-border"></b>
              <transition name="fade-large">
                <b v-if="item.border" class="link-border"></b>
              </transition>
              <p>{{item.title}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div> -->
    <div class="head-box">
      <router-link class="left" :to="{path: '/'}">
        <img src="http://website.lemonread.com/logo.png" class="head-item head-item-huge" alt="柠檬,博阅,柠檬悦读,柠檬阅读,阅读,学生阅读,分级阅读,阅读习惯,K12教育,小柠檬教育科技,让孩子爱上阅读">
        <img src="http://website.lemonread.com/slogan.png" class="head-item head-item-huge" style="margin-left: 20px;" alt="柠檬,博阅,柠檬悦读,柠檬阅读,阅读,学生阅读,分级阅读,阅读习惯,K12教育,小柠檬教育科技,让孩子爱上阅读">
        <img :src="logoV" class="head-item head-item-large">
      </router-link>
        <ul class="head-huge">
          <!-- 登录注册单独开发申请ICP证书 -->
          <!-- <li is="user-interaction" class="head-item head-link-item  click-hover right user-interaction"></li> -->
          <li v-for="(item,index) in linkList" :key="index" class="head-item head-link-item  click-hover right" @click="goLink(item.link)" @mouseover='headOver(index)' @mouseout='headOut(index)'>
            <div class="link-title">
              {{item.title}}
              <b v-if="item.activeBorder" class="link-border"></b>
              <transition name="fade">
                <b v-if="item.border" class="link-border"></b>
              </transition>
            </div>
          </li>
        </ul>
        <div class="head-large">
          <p>
            <router-link class="head-large-router left" :to="{path: '/'}">
              <p>
                小柠檬教育科技
              </p>
            </router-link>
            <i class="iconfont icon-weibiaoti12 click-hover right" @click="menuModal"></i>
          </p>
        </div>
        <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import userInteraction from './userInteraction';
import logoV from '@/images/index/logo-v.png';

export default {
  name: 'LemonHead',
  components: {
    userInteraction,
  },
  data() {
    return {
      showModal: false,
      logoV: logoV,
      linkList: [
        // 游戏模块单独开发申请ICP证书
        // { link: "game", title: "游戏产品", activeBorder: false, border: false },
        // { link: "download", title: "APP下载", activeBorder: false, border: false },
        // { link: "join", title: "加入我们", activeBorder: false, border: false },
        // { link: "about", title: "关于我们", activeBorder: false, border: false },
        // 新闻模块暂时隐藏
        // {link: "news", title:"新闻", activeBorder: false, border: false},
        // { link: "trial", title: "申请试用", activeBorder: false, border: false },
        // { link: "smart", title: "护眼阅读器", activeBorder: false, border: false },
        // { link: "product", title: "产品概念", activeBorder: false, border: false },
        // { link: "index", title: "APP客户端", activeBorder: false, border: false }
        { link: "about", title: "关于我们", activeBorder: false, border: false },
        { link: "school", title: "校园方案", activeBorder: false, border: false },
        { link: "app", title: "APP客户端", activeBorder: false, border: false },
        { link: "smart2", title: "柠檬阅读器", activeBorder: false, border: false },
        { link: "index", title: "首页", activeBorder: false, border: false }
      ]
    }
  },
  beforeMount() {

  },
  mounted() {
    // 导航列表遍历
    this.linkList.forEach(item => {
      if (this.$router.history.current.name.indexOf(item.link) != -1) {
        item.activeBorder = true
      } else {
        item.activeBorder = false
      }

    });
    if (this.$router.history.current.name == 'layout') {
      this.linkList[this.linkList.length - 1].activeBorder = true
    }
  },
  computed: {
    // 小屏下导航顺序倒叙
    // linkListReverse() {
    //   // return this.linkList.concat().reverse()
    // },
  },
  methods: {
    // 导航跳转
    goLink: function(link) {
      this.$router.push({ path: link })
      // this.linkList.forEach(item => {
      //   if(item.link == link) {
      //     item.activeBorder = true
      //   } else {
      //     item.activeBorder = false
      //   }
      // })
      console.log(this.linkList.map(item => item.activeBorder))
    },
    // 鼠标移入边框激活
    headOver: function(index) {
      this.linkList.forEach(item => {
        if (this.linkList[index].activeBorder) {
          return
        } else {
          this.linkList[index].border = true
        }
      });
    },
    // 鼠标移出所有边框置否
    headOut: function(index) {
      this.linkList.forEach(item => {
        item.border = false
      });
    },
    // 小屏下模态框打开方法
    menuModal: function() {
      this.showModal = true;
    },
    // closeModal() {
    //   this.showModal = false;
    // },
    // 小屏下鼠标移入边框激活
    // headOverReverse: function(index) {
    //   this.linkListReverse.forEach(item => {
    //     if (this.linkListReverse[index].activeBorder) {
    //       return
    //     } else {
    //       this.linkListReverse[index].border = true
    //     }
    //   });
    // },
    // 小屏下鼠标移入边框置否
    // headOutReverse: function(index) {
    //   this.linkListReverse.forEach(item => {
    //     item.border = false
    //   });
    // },
  }
}

</script>
<style lang="less" scoped>
.layout {
  position: fixed;
  background-color: #fff;
  height: 90px;
  top: 0;
  z-index: 2019;
}
.modal {
  position: relative;

  .modal-content {
    position: fixed;
    box-sizing: border-box;
    width: 160px;
    height: 100%;
    right: 0;
    top: 0;
    background: rgba(0, 0, 0, .7);
    z-index: 50002;

    p {
      text-align: center;
      color: #fff;
      padding: 8px 0;
    }

    .link-title-reverse {
      letter-spacing: 2px;
      font-weight: 100;
      position: relative;

      .link-border {
        display: block;
        width: 8px;
        height: 100%;
        border-left: 8px solid #FECC01;
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 50001;
  }
}

.layout {
  width: 100%;
  background-color: #FFFFFF;
}

.head-box {
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0;

  .head-item {
    /* color: #5A5A5A; */
    height: 50px;
    line-height: 50px;
    cursor: pointer;
  }

  .link-title {
    padding: 0 20px;
    /* color: #5A5A5A; */
    font-family:"Noto Sans CJK SC DemiLight", "Source Han Sans CN DemiLight";
    color: #5A5A5A;
    letter-spacing: 2px;
    font-weight: 100;
  }

  .link-border {
    display: block;
    width: 100%;
    height: 3px;
    border-bottom: 3px solid #FECC01;
  }

  .head-link-item:first-child {
    .link-title {
      padding-right: 0;
    }
  }

  .head-large {
    display: none;

    p {
      height: 40px;
      line-height: 40px;
      color: #fff;
      letter-spacing: 2px;
      font-weight: 100;

      .head-large-router {
        width: 70%;
      }
    }
  }

  .head-item-large {
    display: none;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: transform .5s;
}

.fade-enter,
.fade-leave-to {
  transform: scaleX(0);
}

.fade-large-enter-active,
.fade-large-leave-active {
  transition: transform .5s;
}

.fade-large-enter,
.fade-large-leave-to {
  transform: scaleY(0);
}

@media only screen and (max-width: 1320px) {
  .head-box {
    width: 1024px;

    .link-title {
      padding: 0 10px;
    }
  }

  .user-interaction {
    display: none;
  }
}

/* 960 */
@media only screen and (max-width: 1080px) {
  .layout{
    width: 1200px;
  }
}
</style>
