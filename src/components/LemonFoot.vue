<!-- 底部页面 -->
<template>
  <div class="layout">
    <img src="http://website.lemonread.com/footerBg.png" class="footer-bg" />
    <div class="foot-box-absolute">
      <div class="foot-box">
        <div class="foot-item left">
          <img class="foot-logo" src="http://website.lemonread.com/foot-logo.png" alt="">
        </div>
        <div class="foot-item foot-item-margin left">
          <p class="foot-title">
            <b class="foot-border"></b>
            关注我们
          </p>
          <a class="sina-hover" target="_blank" href="https://weibo.com/6563412120/profile?topnav=1&wvr=6">
            <p class="item-center">
              新浪微博
            </p>
            <p class="item-center">
              <i class="iconfont icon-weibo"></i>
            </p>
          </a>
          <p class="item-center">
            合作招商
          </p>
          <p class="item-center">
            <i class="iconfont icon-zhaoshanghezuo"></i>
          </p>
        </div>
        <div class="foot-item foot-item-margin left">
          <p class="foot-title">
            <b class="foot-border"></b>
            联系我们
          </p>
          <p>
            <i class="iconfont icon-dianhua"></i>
            0755-86667517
          </p>
          <p>
            周一至周五
          </p>
          <p>
            9:00-12:00
          </p>
          <p>
            14:00-18:00
          </p>
        </div>
        <div class="foot-item foot-item-margin item-weixin left">
          <p>
            扫码关注
          </p>
          <p class="click-hover">
            微信公众号
          </p>
          <p>
            <img class="foot-weixin" src="http://website.lemonread.com/weixin.jpg" alt="">
          </p>
        </div>
        <div class="foot-item right">
          <a class="" target="_blank" href="http://www.miitbeian.gov.cn">
            <p class="foot-surveillance click-hover">
              <img src="../images/index/surveillance.png">
              网站备案：粤ICP备18007912号-1
            </p>
          </a>
          <div class="foot-line">
            <a class="right" target="_blank" href="http://website.lemonread.com/lemomPublicationBusinessLicense.png">
              <p class="foot-surveillance click-hover">出版物经营许可证</p>
            </a>
            <b class="foot-border-vertical right"></b>
            <a class="right" target="_blank" href="http://website.lemonread.com/lemomInternetCultureLicense.png">
              <p class="foot-surveillance click-hover">网络文化经营许可证</p>
            </a>
          </div>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LemonFoot',
  data () {
    return {

    }
  },
}

</script>
<style lang="less" scoped>
p {
  height: 26px;
  line-height: 26px;
  color: #939393;
  font-size: 0.8rem;
  text-align: left;
  padding: 2px 0;
}

.layout {
  width: 100%;
  position: relative;

  .footer-bg {
    width: 100%;
  }
}

.foot-box-absolute {
  width: 100%;
  position: absolute;
  top: 15%;
  left: 0;
}

.foot-box {
  width: 1200px;
  margin: 0 auto;
}

.foot-item {
  padding: 20px 0;
}

.foot-item-margin {
  margin-left: 100px;
}

.item-weixin {
  p {
    text-align: center;
  }
}

.item-center {
  text-align: center;
}

.foot-title {
  height: 30px;
  line-height: 30px;
  font-size: 0.9rem;
}

.foot-border {
  height: 26px;
  width: 4px;
  border-left: 4px solid #fdcc05;
  margin-right: 5px;
}

.foot-surveillance {
  text-align: center;

  img {
    height: 16px;
    vertical-align: middle;
  }
}

.foot-border-vertical {
  height: 20px;
  width: 1px;
  border-left: 1px solid #5a5a5a;
  margin: 3px 20px;
}

.foot-logo {
  width: 130px;
}

.foot-weixin {
  width: 100px;
}

.icon-weibo,
.icon-zhaoshanghezuo {
  text-align: center;
  font-size: 2rem;
}

.sina-hover:hover {
  cursor: pointer;

  p {
    color: #fff;
  }
}

@media only screen and (max-width: 1320px) {
  .foot-box {
    width: 1024px;
    margin: 0 auto;
  }

  .foot-item-margin {
    margin-left: 80px;
  }
}

/* 960 */
@media only screen and (max-width: 1080px) {
  .layout {
    width: 1200px;
  }

  .foot-box {
    width: 900px;
    margin: 0 auto;
  }

  .foot-item-margin {
    margin-left: 60px;
  }
}
</style>
