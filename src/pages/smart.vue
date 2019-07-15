<!-- 阅读器页面 -->
<template>
  <div class="index-bg">
    <lemon-head></lemon-head>
    <img src="http://website.lemonread.com/smartBanner.png" class="banner-bg">
    <div class="app-box-relative" id="studentTop">
      <div class="app-box">
        <p class="app-titile">
          学生专用护眼<span class="client">阅读器</span>
        </p>
        <p class="app-content">采用电子墨水，永久不伤眼</p>
        <div class="speciality-box">
          <div class="speciality-item">
            <img src="../images/index/speciality.png" class="speciality-icon" />
            智能应用阅读系统
          </div>
          <div class="speciality-item speciality-center">
            <img src="../images/index/speciality.png" class="speciality-icon" />
            习惯养成系统
          </div>
          <div class="speciality-item">
            <img src="../images/index/speciality.png" class="speciality-icon" />
            能力提升系统
          </div>
        </div>
        <div class="speciality-box">
          <div class="speciality-item">
            <img src="../images/index/speciality.png" class="speciality-icon" />
            智能语音助读
          </div>
          <div class="speciality-item speciality-center">
            <img src="../images/index/speciality.png" class="speciality-icon" />
            精选分级书城
          </div>
          <div class="speciality-item">
            <img src="../images/index/speciality.png" class="speciality-icon" />
            5本中英词典
          </div>
        </div>
        <div class="speciality-box">
          <div class="speciality-item">
            <img src="../images/index/speciality.png" class="speciality-icon" />
            一键关联APP
          </div>
        </div>
      </div>
      <div class="phone-box-backgroud">
        <div class="phone-box">
          <img src="http://website.lemonread.com/lemonBg.png" class="phone-bg" />
          <div class="phone-screen-box">
            <swiper class="swiper-box" :options="studentPhoneOption" ref="studentPhoneSwiper">
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/lemon01.png" class="phone-item" />
              </swiper-slide>
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/lemon02.png" class="phone-item" />
              </swiper-slide>
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/lemon03.png" class="phone-item" />
              </swiper-slide>
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/lemon04.png" class="phone-item" />
              </swiper-slide>
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/lemon05.png" class="phone-item" />
              </swiper-slide>
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/lemon06.png" class="phone-item" />
              </swiper-slide>
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/lemon07.png" class="phone-item" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="state-box-absolute">
        <div class="state-box-relative state-box-right">
          <swiper class="swiper-box state-swiper-box" :options="studentStateOption" ref="studentStateSwiper">
            <swiper-slide class="state-swiper-item">
              <div class="state-item" style="left: 90%; text-align: left">
                <p class="state-title">阅读测评</p>
                <p class="state-content">基于阅读测评结果</p>
                <p class="state-content">按能力、兴趣定制计划与推荐书籍</p>
              </div>
            </swiper-slide>
            <swiper-slide class="state-swiper-item">
              <div class="state-item">
                <p class="state-title">精选分级书城</p>
                <p class="state-content">10000余本多方权威机构推荐</p>
              </div>
            </swiper-slide>
            <swiper-slide class="state-swiper-item">
              <div class="state-item">
                <p class="state-title">作业</p>
                <p class="state-content">一键关联老师APP</p>
                <p class="state-content">阅读/朗读作业实时同步</p>
              </div>
            </swiper-slide>
            <swiper-slide class="state-swiper-item">
              <div class="state-item">
                <p class="state-title">词典</p>
                <p class="state-content">内置5本中英词典</p>
                <p class="state-content">遇到难点一键查询</p>
              </div>
            </swiper-slide>
            <swiper-slide class="state-swiper-item">
              <div class="state-item">
                <p class="state-title">语音</p>
                <p class="state-content">录音、复读、跟读、语音输入</p>
                <p class="state-content">语音查词、语音求助，让一切变的更简单</p>
              </div>
            </swiper-slide>
            <swiper-slide class="state-swiper-item">
              <div class="state-item">
                <p class="state-title">任务中心</p>
                <p class="state-content">签到、任务激励</p>
                <p class="state-content">助力阅读习惯养成</p>
              </div>
            </swiper-slide>
            <swiper-slide class="state-swiper-item">
              <div class="state-item">
                <p class="state-title">社圈交流</p>
                <p class="state-content">随时随地与老师</p>
                <p class="state-content">同学在线效流分享阅读心得</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="app-box-relative" id="studentTop">
      <img src="http://website.lemonread.com/sunBg.png" class="banner-bg">
      <div class="sun-box-absolute sun-top">
        <div class="sum-titile">健康护眼，舒适阅读</div>
        <div class="sum-tips">采用电子墨水屏，无背光、无蓝光，健康不伤眼，适合长时间阅读</div>
        <div class="sum-eink-box">
          <img src="http://website.lemonread.com/theory.png" alt="" class="sum-theory" />
          <div class="eink-content">
            <p>
              电子墨水显示技术系通过排列“墨滴”来显示文字，显示效果接近纸张，在强光或背光下阅读不会反光，能有效保护学生视力健康，同时阅读无辐射，可安全使用
            </p>
          </div>
          <img src="http://website.lemonread.com/eink.png" alt="" class="sum-theory sum-eink" />
        </div>
      </div>
      <div class="sun-box-absolute sun-bottom">
        <div class="sum-titile">任意光线，静享阅读</div>
        <div class="sum-tips">阅读器在昏暗环境下可调节导光片，于太阳直射下屏幕无反光，不刺眼</div>
        <div class="sum-lemon-box">
          <div class="lemon-item">
            <div class="lemon-content">
              <p>昏暗环境下可调节导光片</p>
            </div>
            <img src="http://website.lemonread.com/sun01.png" alt="" class="lemon-sun-img" />
          </div>
          <div class="lemon-item">
            <div class="lemon-content">
              <p>太阳直射下屏幕无反光，不刺眼</p>
            </div>
            <img src="http://website.lemonread.com/sun02.png" alt="" class="lemon-sun-img" />
          </div>
        </div>
      </div>
    </div>
    <lemon-foot class="foot"></lemon-foot>
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  import LemonHead from '../components/LemonHead';
  import LemonFoot from '../components/LemonFoot';

  export default {
    name: 'smart',
    components: {
      LemonHead,
      LemonFoot,
      swiper,
      swiperSlide,
    },
    data() {
      let that = this
      return {
        studentPhoneIndex: 0,
        studentTouchIndex: 0,
        studentPhoneOption: {
          speed: 1000,
          loop: true,
          autoplay: true,
          autoHeight: true,
          grabCursor: true,
          on: {
            slideChange: function() {
              that.studentPhoneIndex = this.activeIndex
            },
            touchEnd: function(event) {
              that.studentTouchIndex++
              setTimeout(function() {
                let interval = setInterval(() => {
                  that.studentTouchIndex--;
                  if (that.studentTouchIndex >= 0) {
                    clearInterval(interval);
                    if (that.studentTouchIndex === 0) {
                      that.studentPhoneSwiper.autoplay.start()
                    }
                  }
                }, 10);
              }, 2000)
            },
          },
        },
        isStateLeft: true,
        studentStateOption: {
          speed: 1000,
          mousewheelControl: false,
          effect: 'fade',
          fadeEffect: {
            crossFade: true,
          },
          on: {
            slideChange: function() {
              that.isStateLeft = !that.isStateLeft
              let newstyle = "";
              if(that.isStateLeft) {
                newstyle = "left: 90%; text-align: left";
                that.studentStateSwiper.$wrapperEl.children()[this.activeIndex].getElementsByClassName('state-item')[0].removeAttribute("style");
                that.studentStateSwiper.$wrapperEl.children()[this.activeIndex].getElementsByClassName('state-item')[0].setAttribute("style", newstyle);
              }else {
                newstyle = "right: 90%; text-align: right";
                that.studentStateSwiper.$wrapperEl.children()[this.activeIndex].getElementsByClassName('state-item')[0].removeAttribute("style");
                that.studentStateSwiper.$wrapperEl.children()[this.activeIndex].getElementsByClassName('state-item')[0].setAttribute("style", newstyle);
              }
            },
          }
        },
        studentTop: 0,
        studentNum: 0,
        screenHalf: 300,
      }
    },
    created() {

    },
    beforeMount() {

    },
    computed: {
      studentPhoneSwiper() {
        return this.$refs.studentPhoneSwiper.swiper
      },
      studentStateSwiper() {
        return this.$refs.studentStateSwiper.swiper
      },
    },
    mounted: function() {

    },
    methods: {

    },
    watch: {
      studentPhoneIndex(val, oldValue) {
        let that = this
        if (val == 1 || val == 8) {
          that.studentStateSwiper.slideTo(0)
        }
        if (val == 2) {
          that.studentStateSwiper.slideTo(1)
        }
        if (val == 3) {
          that.studentStateSwiper.slideTo(2)
        }
        if (val == 4) {
          that.studentStateSwiper.slideTo(3)
        }
        if (val == 5) {
          that.studentStateSwiper.slideTo(4)
        }
        if (val == 6) {
          that.studentStateSwiper.slideTo(5)
        }
        if (val == 7 || val == 0) {
          that.studentStateSwiper.slideTo(6)
        }
      },
    }
  }

</script>
<style lang='less' scoped>
.banner-bg {
  width: 100%;
}

.app-box-relative {
  position: relative;
}

.phone-box-backgroud {
  background-image: url('../images/index/twillTop.png');
  background-size: 6px 4px;
  padding-bottom: 50px;
}

.phone-box {
  display: inline-block;
  position: relative;
}

.phone-bg {
  width: 750px;
  margin: 0 auto;
  position: relative;
}

.phone-screen-box {
  width: 376px;
  height: 490px;
  margin: auto;
  position: absolute;
  top: 62px;
  left: 50%;
  transform: translate(-50%);
  overflow: hidden;
}

.phone-swiper-item {
  width: 100% !important;
  position: relative;
}

.phone-item {
  width: 100%;
  height: 100%;
}

.app-box{
  background-image: url('../images/index/twillBottom.png');
  background-size: 4px 6px;
  padding-bottom: 20px;
  padding-top: 50px;
}

.app-titile {
  line-height: 50px;
  font-size: 2.2rem;
  letter-spacing: 3px;

  .client {
    color: #019988;
  }
}

.app-content {
  font-size: 1rem;
  margin: 5px 0;
}

.speciality-box {
  width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  justify-content: flex-start;
}

.speciality-item {
  width: 200px;
  height: 20px;
  line-height: 20px;
  font-size: 1.2rem;
  margin: 10px;
  margin-top: 15px;
  text-align: left;

  .speciality-icon {
    height: 80%;
    vertical-align: middle;
  }
}

.speciality-center {
  text-align: center;
}

.state-box-absolute {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.state-box-relative {
  /* 1200 / 2 */
  width: 600px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  .state-swiper-box {
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    left: 50%;
    overflow: visible;
    transform: translate(-50%);

    .state-swiper-item {
      width: 100%;
      height: 100%;
      position: relative;
    }
  }

  .state-item {
    width: 50%;
    display: inline-block;
    position: absolute;
    top: 50%;
  }

  .state-left {
    left: 50%;
  }

  .state-right {
    left: 50%;
  }

  .state-title {
    font-size: 1.3rem;
    color: #019988;
    margin-bottom: 10px;
    
  }

  .state-content {
    line-height: 26px;
  }
}

.sun-box-absolute{
  width: 100%;
  position: absolute;
  left: 0;
}

.sun-top{
  top: 4%;
}

.sun-bottom{
  bottom: 5%;
}

.sum-titile{
  line-height: 50px;
  font-size: 2.2rem;
  letter-spacing: 3px;
}

.sum-tips{
  font-size: 1rem;
  margin: 5px 0;
}

.sum-eink-box{
  width: 1080px;
  margin: 20px auto;
  border: 2px solid #000000;
  padding: 30px 0;
  .eink-content{
    width: 100%;
    margin: 20px auto;
    padding: 20px 0;
    background-color: #25B399;
    p{
      width: 80%;
      margin: 0 auto;
      line-height: 26px;
      text-align: left;
      font-size: 1.3rem;
      letter-spacing: 2px;
    }
  }
  .sum-theory{
    width: 100%;
  }
}

.sum-lemon-box{
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  .lemon-item{
    width: 48%;
    .lemon-content{
      width: 100%;
      padding: 20px 0;
      margin-top: 20px;
      background-color: #25B399;
      p{
        margin: 0 auto;
        line-height: 26px;
        font-size: 1.3rem;
        letter-spacing: 2px;
      }
    }
    .lemon-sun-img{
      width: 100%;
    }
  }
}

/* 1680 */
@media only screen and (max-width: 1800px) {
  .phone-bg {
    width: 680px;
  }

  .phone-screen-box {
    width: 340px;
    height: 443px;
    top: 56px;
  }
  .sum-eink-box,.sum-lemon-box{
    width: 900px;
  }
}


/* 1440 */
@media only screen and (max-width: 1560px) {
  .phone-bg {
    width: 548px;
  }

  .phone-screen-box {
    width: 274px;
    height: 357px;
    top: 45px;
  }
  .sum-eink-box,.sum-lemon-box{
    width: 720px;
  }
}

/* 1200 */
@media only screen and (max-width: 1320px) {
  .phone-bg {
    width: 510px;
  }

  .phone-screen-box {
    width: 256px;
    height: 334px;
    top: 42px;
  }
  .sum-eink-box,.sum-lemon-box{
    width: 560px;
  }

  .sum-eink-box{
    padding: 20px 0;
  }

  .sun-top{
    top: 3%;
  }
  .app-titile {
    line-height: 40px;
    font-size: 2rem;
    letter-spacing: 2px;
  }

  .speciality-item {
    font-size: 1.1rem;
    margin-top: 5px;
  }

  .sum-eink-box .eink-content{
    margin: 15px auto;
    padding: 15px 0;
    p{
      width: 90%;
      line-height: 20px;
      font-size: 1.1rem;
      letter-spacing: 1px;
    }
  }
  .sum-lemon-box .lemon-item .lemon-content {
    padding: 15px 0 ;
    p{
      line-height: 20px;
      font-size: 1.1rem;
      letter-spacing: 1px;
    }
  }
}

/* 960 */
@media only screen and (max-width: 1080px) {
  .index-bg {
    width: 1200px;
  }
  .sun-top{
    top: 5%;
  }
  .sun-bottom{
    bottom: 8%;
  }
}

</style>
