<!-- 头部页面 -->
<template>
  <div class="layout">
    <div class="head-box">
      <div class="left" @click="goLink(linkList[0])">
        <img src="http://website.lemonread.com/logo.png" class="head-item head-item-huge">
      </div>
        <ul class="link-ul">
          <li v-for="(item,index) in linkList" :key="index" class="link-item" @click="goLink(item)">
            <div class="link-title" :class="{active: item.active}"> {{item.title}}</div>
          </li>
        </ul>
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
        { link: "index", title: "首页", active: false },
        { link: "smart", title: "柠檬阅读器", active: false },
        { link: "app", title: "APP客户端", active: false },
        { link: "movement", title: "柠檬动态", active: false },
        { link: "school", title: "校园方案", active: false },
        { link: "me", title: '关于我们', active: false}
      ]
    }
  },
  beforeMount() {

  },
  mounted() {
    // 导航列表遍历
    this.linkList.forEach(item => {
      if (this.$router.history.current.name && this.$router.history.current.name == item.link) {
        item.active = true
      } else {
        item.active = false
      } 
    });
    if (this.$router.history.current.name == 'layout') {
      this.linkList[this.linkList.length - 1].activeBorder = true
    }
  },
  computed: {
  },
  methods: {
    // 导航跳转
    goLink(linkItem) {
      this.linkList.forEach(item => {
        item.active = false;
      })
      this.$router.push({ path: linkItem.link })
      this.linkList.filter(item => item.link == linkItem.link)[0].active = true
      document.documentElement.scrollIntoView()
    },
    // 鼠标移入边框激活
    // headOver: function(index) {
    //   this.linkList.forEach(item => {
    //     if (this.linkList[index].activeBorder) {
    //       return
    //     } else {
    //       this.linkList[index].border = true
    //     }
    //   });
    // },
    // // 鼠标移出所有边框置否
    // headOut: function(index) {
    //   this.linkList.forEach(item => {
    //     item.border = false
    //   });
    // },
    // // 小屏下模态框打开方法
    // menuModal: function() {
    //   this.showModal = true;
    // },
  }
}

</script>
<style lang="less" scoped>
.layout {
  position: fixed;
  background-color: #fff;
  height:84px;
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
  display: flex;
  justify-content: space-between;

  .head-item {
    /* color: #5A5A5A; */
    height: 43px;
    width: 120px;
    // line-height: 50px;
    cursor: pointer;
  }
  .link-ul {
    display: flex;
    .link-item {
      height: 50px;
      line-height: 50px;
    }
  }

  .link-title {
    padding: 0 20px;
    box-sizing: border-box;
    /* color: #5A5A5A; */
    font-family:"Noto Sans CJK SC DemiLight", "Source Han Sans CN DemiLight";
    color: #7E7E7E;
    letter-spacing: 2px;
    font-weight: 300;
    font-size: 18px;
  }
  .link-title:hover {
    color: #000;
    transition: .5s;
    cursor: pointer;
  }
  .link-title.active {
    color: #000;
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
