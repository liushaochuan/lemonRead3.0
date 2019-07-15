<!-- 首页 -->
<template>
  <div class="index-bg">
    <lemon-head></lemon-head>
    <div class="banner-box">
      <img src="http://website.lemonread.com/banner-bg.png" class="banner-bg">
      <transition name="banner-fade">
        <img v-if="shoadowShow" src="http://website.lemonread.com/lemonShadow.png" class="banner" />
      </transition>
      <transition name="banner-fade">
        <img v-if="bookShow" src="http://website.lemonread.com/lemonBook.png" class="banner" />
      </transition>
      <transition name="banner-fade">
        <img v-if="eyeshieldShow" src="http://website.lemonread.com/eyeshield.png" class="banner" />
      </transition>
      <transition name="banner-fade">
        <img v-if="lineShow" src="../images/index/line.png" class="banner" />
      </transition>
      <transition name="banner-fade">
        <img v-if="platformShow" src="../images/index/platform.png" class="banner" />
      </transition>
      <img src="http://website.lemonread.com/paper.png" class="banner" />
      <transition name="banner-fade">
        <img v-if="studentShow" src="../images/index/studentsIcon.png" class="banner"/>
      </transition>
      <transition name="banner-fade">
        <img v-if="teacherShow" src="../images/index/teachersIcon.png" class="banner" />
      </transition>
      <transition name="banner-fade">
        <img v-if="parentsShow" src="../images/index/parentsIcon.png" class="banner" />
      </transition>
      <transition name="banner-fade">
        <img v-if="rectorsShow" src="../images/index/rectorsIcon.png" class="banner" />
      </transition>
    </div>
    <div class="app-box-relative" id="studentTop">
      <img src="../images/index/student-relative.png" class="banner-bg" />
      <img src="http://website.lemonread.com/student-bg.png" class="student-bg" />
      <div class="state-box-absolute">
        <div class="state-box-relative state-box-right">
          <swiper class="swiper-box state-swiper-box" :options="studentStateOption" ref="studentStateSwiper">
            <swiper-slide class="state-swiper-item">
              <div class="state-item">
                <p class="state-title">阅读测评</p>
                <p class="state-content">基于阅读测评结果</p>
                <p class="state-content">按能力推荐适合书籍</p>
              </div>
            </swiper-slide>
            <swiper-slide class="state-swiper-item">
              <div class="state-item">
                <p class="state-title">精选分级书城</p>
                <p class="state-content">10000余本多方权威机构推荐书单</p>
              </div>
            </swiper-slide>
            <swiper-slide class="state-swiper-item">
              <div class="state-item">
                <p class="state-title">训练与作业</p>
                <p class="state-content">帮助巩固与提升阅读能力</p>
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
                <p class="state-title">书圈互动</p>
                <p class="state-content">随时随地与老师</p>
                <p class="state-content">同学在线效流分享阅读心得</p>
              </div>
            </swiper-slide>
          </swiper>
          <div class="app-content-absolute">
            <div class="app-content-relative">
              <div class="app-content-box">
                <p class="content-title">贯穿阅读学习闭环，智适应阅读</p>
                <p class="content-content">1、学生进行阅读能力测评定位能力</p>
                <p class="content-content">2、基于能力，智适应阅读内容与计划</p>
                <p class="content-content">3、训练、闯关、柠檬树等激励体系培养阅读习惯</p>
                <p class="content-content">4、根据阅读轨迹分析阅读行为</p>
                <p class="content-content">5、根据阅读行为调整阅读计划</p>
                <p class="content-content">6、提供名师阅读指导</p>
                <a class="download" v-bind:href="studentDownloadUrl">
                  学生端APP下载
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="phone-box-absolute">
        <div class="phone-box phone-left">
          <img src="../images/index/phone.png" class="phone-bg" />
          <div class="phone-screen-box">
            <swiper class="swiper-box" :options="studentPhoneOption" ref="studentPhoneSwiper">
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/student01.png" class="phone-item" />
              </swiper-slide>
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/student02.png" class="phone-item" />
              </swiper-slide>
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/student03.png" class="phone-item" />
              </swiper-slide>
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/student04.png" class="phone-item" />
              </swiper-slide>
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/student05.png" class="phone-item" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="app-box-absolute">
        <div class="app-box">
          <p class="app-titile">
            柠檬悦读<span class="client">学生端</span>
          </p>
          <p class="app-content">贯穿阅读学习闭环，基于阅读能力与兴趣，智能匹配适应内容</p>
          <div class="speciality-box">
            <div class="speciality-item">
              <img src="../images/index/speciality.png" class="speciality-icon" />
              激发阅读兴趣
            </div>
            <div class="speciality-item">
              <img src="../images/index/speciality.png" class="speciality-icon" />
              提升阅读能力
            </div>
            <div class="speciality-item">
              <img src="../images/index/speciality.png" class="speciality-icon" />
              培养阅读习惯
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-box-relative" id="teacherTop">
      <img src="http://website.lemonread.com/teacher-relative.png" class="banner-bg" />
      <div class="phone-box-absolute">
        <div class="phone-box phone-right">
          <img src="../images/index/phone.png" class="phone-bg" />
          <div class="phone-screen-box">
            <swiper class="swiper-box" :options="teacherPhoneOption" ref="teacherPhoneSwiper">
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/teacher01.png" class="phone-item" />
              </swiper-slide>
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/teacher02.png" class="phone-item" />
              </swiper-slide>
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/teacher03.png" class="phone-item" />
              </swiper-slide>
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/teacher04.png" class="phone-item" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="state-box-absolute">
        <div class="state-box-relative state-box-left">
          <swiper class="swiper-box state-swiper-box" :options="teacherStateOption" ref="teacherStateSwiper">
            <swiper-slide class="state-swiper-item">
              <div class="state-item">
                <p class="state-title">布置作业</p>
                <p class="state-content">10万道精编阅读</p>
                <p class="state-content">朗读作业题库，一键发布</p>
              </div>
            </swiper-slide>
            <swiper-slide class="state-swiper-item">
              <div class="state-item">
                <p class="state-title">多维度阅读报告</p>
                <p class="state-content">学生的阅读与测评数据一目了然</p>
              </div>
            </swiper-slide>
            <swiper-slide class="state-swiper-item">
              <div class="state-item">
                <p class="state-title">精选分级书城</p>
                <p class="state-content">10000余本多方权威机构推荐书单</p>
              </div>
            </swiper-slide>
            <swiper-slide class="state-swiper-item">
              <div class="state-item">
                <p class="state-title">班级管理</p>
                <p class="state-content">一键查看与管理班级学生阅读进展</p>
              </div>
            </swiper-slide>
          </swiper>
          <div class="app-content-absolute">
            <div class="app-content-relative">
              <div class="app-content-box">
                <p class="content-title">阅读教学管理与学情监测平台</p>
                <p class="content-content">1、10万题本一键布置作业（阅读/朗读）</p>
                <p class="content-content">2、系统自动判题，老师无须批改</p>
                <p class="content-content">3、学生阅读进度实时监管</p>
                <p class="content-content">4、班级阅读数据实时查看</p>
                <p class="content-content">5、阅读学情管理一目了然</p>
                <a class="download" v-bind:href="teacherDownloadUrl">
                  教师端APP下载
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="app-box-absolute">
        <div class="app-box">
          <p class="app-titile">
            柠檬悦读<span class="client">教师端</span>
          </p>
          <p class="app-content">一键轻松布置与批改作业，学生阅读数据一目了然</p>
          <div class="speciality-box">
            <div class="speciality-item">
              <img src="../images/index/speciality.png" class="speciality-icon" />
              精编阅读作业题库
            </div>
            <div class="speciality-item">
              <img src="../images/index/speciality.png" class="speciality-icon" />
              多维度阅读分析报告
            </div>
            <div class="speciality-item">
              <img src="../images/index/speciality.png" class="speciality-icon" />
              师生同读在线交流
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-box-relative" id="parentTop">
      <img src="http://website.lemonread.com/parent-relative.png" class="banner-bg" />
      <div class="phone-box-absolute">
        <div class="phone-box phone-left">
          <img src="../images/index/phone.png" class="phone-bg" />
          <div class="phone-screen-box">
            <swiper class="swiper-box" :options="parentPhoneOption" ref="parentPhoneSwiper">
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/parent01.png" class="phone-item" />
              </swiper-slide>
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/parent02.png" class="phone-item" />
              </swiper-slide>
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/parent03.png" class="phone-item" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="state-box-absolute">
        <div class="state-box-relative state-box-right">
          <swiper class="swiper-box state-swiper-box" :options="parentStateOption" ref="parentStateSwiper">
            <swiper-slide class="state-swiper-item">
              <div class="state-item">
                <p class="state-title">家长管控</p>
                <p class="state-content">关爱孩子的视力健康</p>
                <p class="state-content">屏蔽不良图书</p>
              </div>
            </swiper-slide>
            <swiper-slide class="state-swiper-item">
              <div class="state-item">
                <p class="state-title">精选书单</p>
                <p class="state-content">10000余本多方权威机构推荐书单</p>
              </div>
            </swiper-slide>
            <swiper-slide class="state-swiper-item">
              <div class="state-item">
                <p class="state-title">阅读报告</p>
                <p class="state-content">实时查看孩子的阅读报告</p>
                <p class="state-content">陪伴孩子每一次的成长</p>
              </div>
            </swiper-slide>
          </swiper>
          <div class="app-content-absolute">
            <div class="app-content-relative">
              <div class="app-content-box">
                <p class="content-title">实时监测与管控</p>
                <p class="content-content">1、孩子阅读情况实时监管</p>
                <p class="content-content">2、孩子阅读轨迹实时查看</p>
                <p class="content-content">3、掌握孩子阅读能力变化</p>
                <p class="content-content">4、管控购书与阅读时间</p>
                <a class="download" v-bind:href="parentDownloadUrl">
                  家长端APP下载
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="app-box-absolute">
        <div class="app-box">
          <p class="app-titile">
            柠檬悦读<span class="client">家长端</span>
          </p>
          <p class="app-content">同步孩子的阅读轨迹，陪伴成长</p>
          <div class="speciality-box">
            <div class="speciality-item">
              <img src="../images/index/speciality.png" class="speciality-icon" />
              实时掌握孩子的阅读进展
            </div>
            <div class="speciality-item">
              <img src="../images/index/speciality.png" class="speciality-icon" />
              家长管控，陪伴成长
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-box-relative" id="masterTop">
      <img src="http://website.lemonread.com/master-relative.png" class="banner-bg" />
      <div class="phone-box-absolute pc-box-absolute">
        <div class="phone-box">
          <img src="../images/index/pc.png" class="pc-bg" />
          <div class="phone-screen-box pc-screen-box">
            <swiper class="swiper-box" :options="masterPhoneOption" ref="masterPhoneSwiper">
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/master01.png" class="phone-item" />
              </swiper-slide>
              <swiper-slide class="phone-swiper-item">
                <img src="http://website.lemonread.com/master02.png" class="phone-item" />
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
      <div class="app-box-absolute">
        <div class="app-box">
          <p class="app-titile">
            柠檬悦读<span class="client">校管端</span>
          </p>
          <p class="app-content">精准大数据分析系统助力学校高效掌握全校学生阅读情况</p>
          <div class="speciality-box">
            <div class="speciality-item">
              <img src="../images/index/speciality.png" class="speciality-icon" />
              一键查阅全校、班级多维度阅读数据
            </div>
            <div class="speciality-item">
              <img src="../images/index/speciality.png" class="speciality-icon" />
              一键查阅老师阅读任务发布情况
            </div>
          </div>
        </div>
      </div>
    </div>
    <lemon-foot></lemon-foot>
  </div>
</template>
<script>
  import fetch from '../util/fetch'
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  import LemonHead from '@/components/LemonHead';
  import LemonFoot from '@/components/LemonFoot';

  export default {
    name: 'index',
    components: {
      LemonHead,
      LemonFoot,
      swiper,
      swiperSlide,
    },
    data() {
      let that = this
      return {
        studentDownloadUrl: '',
        teacherDownloadUrl: '',
        parentDownloadUrl: '',
        studentPhoneIndex: 0,
        studentTouchIndex: 0,
        studentPhoneOption: {
          speed: 1000,
          loop: true,
          autoHeight: true,
          grabCursor : true,
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
                    if(that.studentTouchIndex === 0) {
                      that.studentPhoneSwiper.autoplay.start()
                    }
                  }
                }, 10);
              }, 2000)
            },
          },
        },
        studentStateOption: {
          speed: 1000,
          mousewheelControl: false,
          effect: 'fade',
          fadeEffect: {
            crossFade: true,
          },
        },
        teacherPhoneIndex: 0,
        teacherTouchIndex: 0,
        teacherPhoneOption: {
          speed: 1000,
          loop: true,
          autoHeight: true,
          grabCursor : true,
          on: {
            slideChange: function() {
              that.teacherPhoneIndex = this.activeIndex
            },
            touchEnd: function(event) {
              that.teacherTouchIndex++
              setTimeout(function() {
                let interval = setInterval(() => {
                  that.teacherTouchIndex--;
                  if (that.teacherTouchIndex >= 0) {
                    clearInterval(interval);
                    if(that.teacherTouchIndex === 0) {
                      that.teacherPhoneSwiper.autoplay.start()
                    }
                  }
                }, 10);
              }, 2000)
            },
          },
        },
        teacherStateOption: {
          speed: 1000,
          effect: 'fade',
          initialSlide: 2,
          fadeEffect: {
            crossFade: true,
          },
        },
        parentPhoneIndex: 0,
        parentTouchIndex: 0,
        parentPhoneOption: {
          speed: 1000,
          loop: true,
          autoHeight: true,
          grabCursor : true,
          on: {
            slideChange: function() {
              that.parentPhoneIndex = this.activeIndex
            },
            touchEnd: function(event) {
              that.parentTouchIndex++
              setTimeout(function() {
                let interval = setInterval(() => {
                  that.parentTouchIndex--;
                  if (that.parentTouchIndex >= 0) {
                    clearInterval(interval);
                    if(that.parentTouchIndex === 0) {
                      that.parentPhoneSwiper.autoplay.start()
                    }
                  }
                }, 10);
              }, 2000)
            },
          },
        },
        parentStateOption: {
          speed: 1000,
          effect: 'fade',
          fadeEffect: {
            crossFade: true,
          },
        },
        masterPhoneOption: {
          speed: 1000,
          loop: true,
          autoHeight: true,
          grabCursor : true,
        },
        clientWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        clientHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        rotateYNum: 0,
        rotateXNum: 0,
        shoadowShow: false,
        bookShow: false,
        rectorsShow: false,
        parentsShow: false,
        teacherShow: false,
        studentShow: false,
        eyeshieldShow: false,
        lineShow: false,
        platformShow: false,
        studentTop: 0,
        studentNum: 0,
        isStudentOver: false,
        studentStateLeft: true,
        teacherTop: 0,
        teacherNum: 0,
        isTeacherOver: false,
        parentTop: 0,
        parentNum: 0,
        isParentOver: false,
        parentStateLeft: true,
        masterTop: 0,
        masterNum: 0,
        isMasterOver: false,
        screenHalf: 300,
      }
    },
    created() {
    // console.log('this.clientWidth', this.clientWidth)
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    const that = this
    that.appDownloadAll()
    setTimeout(() => {
      that.bookShow = true
    }, 500);
    setTimeout(() => {
      that.shoadowShow = true
    }, 1000);
    setTimeout(() => {
      that.rectorsShow = true
    }, 1400);
    setTimeout(() => {
      that.parentsShow = true
    }, 1600);
    setTimeout(() => {
      that.teacherShow = true
    }, 1800);
    setTimeout(() => {
      that.studentShow = true
    }, 2000);
    setTimeout(() => {
      that.eyeshieldShow = true
    }, 2200);
    setTimeout(() => {
      that.lineShow = true
    }, 2400);
    setTimeout(() => {
      that.platformShow = true
    }, 2600);

  },
  computed: {
    studentPhoneSwiper() {
      return this.$refs.studentPhoneSwiper.swiper
    },
    studentStateSwiper() {
      return this.$refs.studentStateSwiper.swiper
    },
    teacherPhoneSwiper() {
      return this.$refs.teacherPhoneSwiper.swiper
    },
    teacherStateSwiper() {
      return this.$refs.teacherStateSwiper.swiper
    },
    parentPhoneSwiper() {
      return this.$refs.parentPhoneSwiper.swiper
    },
    parentStateSwiper() {
      return this.$refs.parentStateSwiper.swiper
    },
    masterPhoneSwiper() {
      return this.$refs.masterPhoneSwiper.swiper
    },
  },
  methods: {
    handleScroll() {
      this.studentTop = document.getElementById('studentTop').getBoundingClientRect().top
    },
    appDownloadAll() {
      this.appDownload(1)
      this.appDownload(2)
      this.appDownload(3)
    },
    appDownload(num) {
      let queryData = { // APK请求参数
        baseUrl: 'http://lemonread.com/',
        client_type: 2, // 安装包类型,默认安卓
        role_type: num // 客户端类型
      }
      fetch.getApkList(queryData).then(response => {
        const resData = response;
        if (num == 1) {
          this.studentDownloadUrl = resData[0].url
        }
        if (num == 2) {
          this.teacherDownloadUrl = resData[0].url
        }
        if (num == 3) {
          this.parentDownloadUrl = resData[0].url
        }
      });
    },
  },
  watch: {
    studentPhoneIndex(val, oldValue) {
      let that = this
      if (that.isStudentOver) {
        return
      }
      if (val == 1 || val == 6) {
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
      if (val == 5 || val == 0) {
        that.studentStateSwiper.slideTo(4)
      }
    },
    teacherPhoneIndex(val, oldValue) {
      let that = this
      let sliderUp = 0
      if (that.isTeacherOver) {
        return
      }
      if (val == 1 || val == 5) {
        that.teacherStateSwiper.slideTo(0)
      }
      if (val == 2) {
        that.teacherStateSwiper.slideTo(1)
      }
      if (val == 3) {
        that.teacherStateSwiper.slideTo(2)
      }
      if (val == 4 || val == 0) {
        that.teacherStateSwiper.slideTo(3)
      }
    },
    parentPhoneIndex(val, oldValue) {
      let that = this
      let sliderUp = 0
      if (that.isParentOver) {
        return
      }
      if (val == 4 || val == 1) {
        that.parentStateSwiper.slideTo(0)
      }
      if (val == 2) {
        that.parentStateSwiper.slideTo(1)
      }
      if (val == 3 || val == 0) {
        that.parentStateSwiper.slideTo(2)
      }
    },
    studentTop(val, oldValue) {
      this.teacherTop = document.getElementById('teacherTop').getBoundingClientRect().top
      this.parentTop = document.getElementById('parentTop').getBoundingClientRect().top
      this.masterTop = document.getElementById('masterTop').getBoundingClientRect().top
      let isUp = val - oldValue > 0 ? true : false
      if (!isUp) {
        if (this.studentTop < this.screenHalf) {
          if (this.studentNum < 1) {
            this.studentPhoneSwiper.autoplay.start()
            this.isStudentOver = false
          }
          this.studentNum++
        } else {
          this.studentPhoneSwiper.autoplay.stop()
          this.studentNum = 0
          this.isStudentOver = true
        }
        if (this.teacherTop < this.screenHalf) {
          if (this.teacherNum < 1) {
            this.teacherPhoneSwiper.autoplay.start()
            this.studentPhoneSwiper.autoplay.stop()
            this.isTeacherOver = false
            this.isStudentOver = true
          }
          this.teacherNum++
        } else {
          this.teacherPhoneSwiper.autoplay.stop()
          this.teacherNum = 0
          this.isTeacherOver = true
        }
        if (this.parentTop < this.screenHalf) {
          if (this.parentNum < 1) {
            this.parentPhoneSwiper.autoplay.start()
            this.teacherPhoneSwiper.autoplay.stop()
            this.isParentOver = false
            this.isTeacherOver = true
          }
          this.parentNum++
        } else {
          this.parentPhoneSwiper.autoplay.stop()
          this.parentNum = 0
          this.isParentOver = true
        }
      } else {
        if (this.masterTop > this.screenHalf) {
          if (this.parentNum < 1) {
            this.masterPhoneSwiper.autoplay.stop()
            this.parentPhoneSwiper.autoplay.start()
            this.isMasterOver = true
            this.isParentOver = false
          }
          this.parentNum++
        } else {
          this.parentPhoneSwiper.autoplay.stop()
          this.parentNum = 0
          this.isParentOver = true
        }
        if (this.parentTop > this.screenHalf) {
          if (this.teacherNum < 1) {
            this.parentPhoneSwiper.autoplay.stop()
            this.teacherPhoneSwiper.autoplay.start()
            this.isParentOver = true
            this.isTeacherOver = false
          }
          this.teacherNum++
        } else {
          this.teacherPhoneSwiper.autoplay.stop()
          this.teacherNum = 0
          this.isTeacherOver = true
        }
        if (this.teacherTop > this.screenHalf) {
          if (this.studentNum < 1) {
            this.teacherPhoneSwiper.autoplay.stop()
            this.studentPhoneSwiper.autoplay.start()
            this.isTeacherOver = true
            this.isStudentOver = false
          }
          this.studentNum++
        } else {
          this.studentPhoneSwiper.autoplay.stop()
          this.studentNum = 0
          this.isStudentOver = true
        }
        if (this.studentTop > this.screenHalf) {
          this.studentPhoneSwiper.autoplay.stop()
          this.studentNum = 0
          this.isStudentOver = true
        }
      }
      if (this.masterTop < this.screenHalf) {
        if (this.masterNum < 1) {
          this.masterPhoneSwiper.autoplay.start()
          this.parentPhoneSwiper.autoplay.stop()
          this.isMasterOver = false
          this.isParentOver = true
        }
        this.masterNum++
      } else {
        this.masterPhoneSwiper.autoplay.stop()
        this.masterNum = 0
        this.isMasterOver = true
      }
    }
  }
}

</script>
<style lang='less' scoped>
.banner-box {
  position: relative;
  overflow: hidden;

  .banner {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;

  }
}

.banner-img-box {
  width: 100%;
}

.banner-bg {
  width: 100%;
}

.app-box-relative {
  position: relative;

  .student-bg {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}

.phone-box-absolute {
  width: 100%;
  position: absolute;
  bottom: 5%;
  left: 0;
  z-index: 10;
}

.pc-box-absolute {
  bottom: 14%;
}

.phone-box {
  display: inline-block;
  position: relative;
}

.phone-bg {
  width: 408px;
  height: 680px;
  margin: 0 auto;
  position: relative;
}

.pc-bg {
  width: 900px;
  height: 476px;
  margin: 0 auto;
  position: relative;
  z-index: 5;
}

.phone-screen-box {
  width: 282px;
  height: 502px;
  margin: auto;
  position: absolute;
  top: 69px;
  left: 50%;
  transform: translate(-50%);
  overflow: hidden;
}

.pc-screen-box {
  width: 684px;
  top: 31px;
  left: 452px;
}

.phone-swiper-item {
  width: 100% !important;
  position: relative;
}

.phone-item {
  width: 100%;
  height: 100%;
}

.app-box-absolute {
  width: 100%;
  position: absolute;
  top: 8%;
  left: 0;
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
  font-size: .9rem;
  margin: 5px 0;
}

.speciality-box {
  display: flex;
  justify-content: center;
}

.speciality-item {
  height: 20px;
  line-height: 20px;
  font-size: 1.2rem;
  margin: 10px;
  margin-top: 15px;

  .speciality-icon {
    height: 80%;
    vertical-align: middle;
  }
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

  .state-swiper-box {
    width: 100%;
    height: 100%;
    margin: auto;
    position: absolute;
    left: 50%;
    overflow: hidden;
    transform: translate(-50%);

    .state-swiper-item {
      width: 100%;
      height: 100%;
      position: relative;
    }
  }

  .state-item {
    display: inline-block;
    position: absolute;
    top: 45%;
    transform: translate(-50%, -50%)
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

.app-content-absolute {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.app-content-relative {
  width: 100%;
  height: 100%;
  position: relative;
}

.app-content-box {
  display: inline-block;
  text-align: left;
  position: absolute;
  top: 50%;
  z-index: 50;
}

.content-title {
  line-height: 30px;
  font-size: 1.3rem;
  color: #019988;
}

.content-content {
  line-height: 24px;
  font-size: .9rem;
}

.download {
  display: block;
  width: 180px;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 1.1rem;
  text-align: center;
  background-color: #02BAA1;
  border-radius: 15px;
  margin-top: 10px;
}

.state-box-right {
  left: 50%;

  .state-item {
    left: 50%;
    transform: translate(-50%, -50%)
  }

  .app-content-absolute {
    left: -100%;

    .app-content-box {
      right: 30%;
      transform: translate(0, -50%)
    }
  }
}

.state-box-left {
  right: 50%;

  .state-item {
    right: 50%;
    transform: translate(50%, -50%);
  }

  .app-content-absolute {
    left: 50%;

    .app-content-box {
      right: -30%;
      transform: translate(0, -50%)
    }
  }
}

.banner-fade-enter-active {
  transition: all 1s ease-out;
}

.banner-fade-enter {
  transform: translate(0, -100px);
  opacity: 0;
}


/* 1680 */
@media only screen and (max-width: 1800px) {
  .phone-bg {
    width: 348px;
    height: 580px;
  }

  .pc-bg {
    width: 900px;
    height: 476px;
  }

  .phone-screen-box {
    width: 240px;
    height: 426px;
    top: 60px;
  }

  .pc-screen-box {
    width: 684px;
    top: 31px;
    left: 452px;
  }

  .pc-box-absolute {
    bottom: 14%;
  }
}


/* 1440 */
@media only screen and (max-width: 1560px) {
  .app-box-absolute {
    top: 5%;
  }

  .phone-box-absolute {
    bottom: 4%;
  }

  .phone-bg {
    width: 300px;
    height: 500px;
  }

  .pc-bg {
    width: 800px;
    height: 426px;
  }

  .phone-screen-box {
    width: 69%;
    height: 368px;
    top: 52px;
  }

  .pc-screen-box {
    width: 610px;
    top: 28px;
    left: 402px;
  }

  .pc-box-absolute {
    bottom: 8%;
  }
}

/* 1200 */
@media only screen and (max-width: 1320px) {
  .app-box-absolute {
    top: 2%;
  }

  .phone-box-absolute {
    bottom: 3%;
  }

  .phone-bg {
    width: 264px;
    height: 440px;
  }

  .pc-bg {
    width: 710px;
    height: 378px;
  }

  .phone-screen-box {
    width: 182px;
    height: 324px;
    top: 46px;
  }

  .pc-screen-box {
    width: 542px;
    top: 25px;
    left: 357px;
  }

  .pc-box-absolute {
    bottom: 6%;
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

}

/* 960 */
@media only screen and (max-width: 1080px) {
  .index-bg {
    width: 1200px;
  }
}

</style>
