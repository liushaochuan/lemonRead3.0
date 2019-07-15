<!-- 下载页面 -->
<template>
    <div>
        <lemon-head></lemon-head>
        <div class="head-box"></div>
        <div class="bannerbg" v-bind:style="{height:clientHeight}">
            <div class="leftbg">
                <img :src="leftbg">
            </div>
            <div class="rightbg">
                <img :src="rightbg">
            </div>
        </div>
        <div class="app-content" v-bind:style="{height:clientHeight}">
            <ul class="app-name">
                <li v-for="(app,index) in appList" :key="index" class="app-name-itme" @click="selectApp(index)">
                    <p>{{app.name}}</p>
                    <div class="border-box border-box-left">
                        <b class="border border-left"></b>
                        <transition name="fade">
                            <b v-if="app.active" class="border-incline border-incline-left"></b>
                        </transition>
                        <transition name="fade">
                            <b v-if="!app.active" class="border-line border-line-left"></b>
                        </transition>
                    </div>
                    <div class="border-box border-box-right">
                        <b class="border border-right"></b>
                        <transition name="fade">
                            <b v-if="app.active" class="border-incline border-incline-right"></b>
                        </transition>
                        <transition name="fade">
                            <b v-if="!app.active" class="border-line border-line-right"></b>
                        </transition>
                    </div>
                </li>
            </ul>
            <swiper :options="swiperOption" ref="mySwiper" class="app-box">
                <swiper-slide v-for="(item,index) in appList" :key="index" class="app-item">
                    <div class="box-item">
                        <img class="item-img" :src="item.imgUrl" :class="{ safariActive: isSafari }">
                    </div>
                    <div class="box-item item-content">
                        <p class="content-title content-title-huge">{{item.title}}</p>
                        <p class="content-title content-title-big">{{item.title.substring(0,4)}}</p>
                        <p class="content-title content-title-big">{{item.title.substring(4)}}</p>
                        <p class="content-text ">{{item.content}}</p>
                        <div class="code-box">
                            <img class="code-img" :src="item.codeUrl">
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        <lemon-foot class="foot"></lemon-foot>
    </div>
</template>
<script>
import LemonHead from '../components/LemonHead';
import LemonFoot from '../components/LemonFoot';

import banner from '@/images/download/banner.jpg';
import studentsCode from '@/images/download/studentsCode.png';
import parentsCode from '@/images/download/parentsCode.png';
import teachersCode from '@/images/download/teachersCode.png';
import leftbg from '@/images/download/left.png';
import rightbg from '@/images/download/right.png';
import teacher from '@/images/download/teacher.png';
import parents from '@/images/download/parents.png';
import students from '@/images/download/students.png';

import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'download',
    components: {
        LemonHead,
        LemonFoot,
        swiper,
        swiperSlide,
    },
    data() {
        return {
            banner: banner,
            leftbg: leftbg,
            rightbg: rightbg,
            clientWidth: 0,
            clientHeight: 0,
            appList: [{
                name: "教师端APP",
                active: true,
                title: "柠檬悦读教师端",
                content: "阅读教学好帮手：精编阅读作业题库、一键布置、自动批改、学生阅读能力值评估、学生阅读进度跟踪、学生阅读作业评测总结。",
                imgUrl: teacher,
                codeUrl: teachersCode
            }, {
                name: "学生端APP",
                active: false,
                title: "柠檬悦读学生端",
                content: "一起读好书、教你会读书：海量书库、智能分级、智能推荐、名师导读、智能助读、社区分享、多种能力提升。 ",
                imgUrl: students,
                codeUrl: studentsCode
            }, {
                name: "家长端APP",
                active: false,
                title: "柠檬悦读家长端",
                content: "掌握孩子的阅读情况，关注孩子的阅读成长：学生阅读能力值评估、学生阅读进度跟踪、家长助读、点赞评论、打卡奖励。",
                imgUrl: parents,
                codeUrl: parentsCode
            }],
            swiperOption: {
                speed: 1000,
                autoplay: {
                    disableOnInteraction: true,
                },
                loop: true,
                grabCursor: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                hideOnClick: true,
                mousewheelControl: true,
            },
            resizeData: {
                screenWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                screenHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            },
            codeIsDone: false,
            isSafari: false,
        }
    },
    created() {
        let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        // 导航条高度
        let headHeight = 90
        if (w <= 992) {
            headHeight = 80
        }
        if (w <= 768) {
            headHeight = 70
        }
        if (w <= 540) {
            headHeight = 56
        }
        if (w <= 460) {
            headHeight = 54
        }
        if (w <= 400) {
            headHeight = 40
        }
        if (w <= 320) {
            headHeight = 36
        }
        this.clientWidth = w + 'px'
        // 背景图高度设置
        this.clientHeight = (h - headHeight) + 'px'
        if ((navigator.userAgent.indexOf("Safari") > -1) && (navigator.userAgent.indexOf("Chrome") == -1)) {
            this.isSafari = true
        }
    },
    mounted() {
        // this._getQart()
        const that = this
        // 屏幕大小变化监听
        window.onresize = () => {
            return (() => {
                window.screenWidth = document.body.clientWidth
                window.screenHeight = document.body.clientHeight
                that.resizeData = {
                    screenWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                    screenHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                }
            })()
        }
    },
    beforeMount() {
        let that = this
        this.swiperOption.on = {
            // 标题下三角跟随轮播图变化,在轮播图过渡结束时执行
            slideChangeTransitionEnd: function() {
                // 全置否
                for (var i = that.appList.length - 1; i >= 0; i--) {
                    that.appList[i].active = false
                }
                // 轮播图当前项目为首位复制后项目
                if (this.activeIndex == 1 || this.activeIndex == 4) {
                    that.appList[0].active = true
                }
                if (this.activeIndex == 2) {
                    that.appList[1].active = true
                }
                if (this.activeIndex == 0 || this.activeIndex == 3) {
                    that.appList[2].active = true
                }
            },
        }
    },
    computed: {
        // 轮播图赋值
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    methods: {
        // 标题点击轮播图跳转
        selectApp: function(index) {
            this.swiper.slideTo(index + 1)
        },
    },
    watch: {
        // 屏幕大小变化监听
        resizeData(val, oldValue) {
            if (!this.timer) {
                this.resizeData = val
                this.timer = true
                let that = this
                // 延时解决卡顿
                setTimeout(function() {
                    let h = window.innerHeight
                    let w = window.innerWidth
                    let headHeight = 90
                    if (w <= 992) {
                        headHeight = 90
                    }
                    if (w <= 768) {
                        headHeight = 70
                    }
                    if (w <= 540) {
                        headHeight = 56
                    }
                    if (w <= 460) {
                        headHeight = 54
                    }
                    if (w <= 400) {
                        headHeight = 40
                    }
                    if (w <= 320) {
                        headHeight = 36
                    }
                    that.clientHeight = (h - headHeight) + 'px'
                    that.timer = false
                }, 100)
            }
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
#qrcode {
    height: 200px;
    width: 200px;
    margin: auto;
}

.head-box {
    height: 90px;
}

.bannerbg {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    z-index: -10;
    top: 90px;
    .leftbg {
        width: 50%;
        height: 100%;
        overflow: hidden;
        background-image: linear-gradient(left, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1) 100%);
        text-align: left;
        position: relative;
        img {
            left: 0;
        }
    }
    .rightbg {
        width: 50%;
        height: 100%;
        overflow: hidden;
        background-image: linear-gradient(right, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1) 100%);
        text-align: right;
        position: relative;
        img {
            right: 0;
        }
    }
    img {
        height: 100%;
        box-sizing: border-box;
        mix-blend-mode: overlay;
        position: absolute;
        top: 0;
    }
}

.banner-height {
    position: absolute;
    width: 100%;
    z-index: -10;
    .banner-box {
        height: 100%;
        overflow-x: hidden;
        img {
            height: 100%;
        }
    }
}

.app-content {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .app-name {
        width: 900px;
        height: 20%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        .app-name-itme {
            height: 100%;
            width: 33.33%;
            position: relative;
            p {
                width: 100%;
                position: absolute;
                bottom: 40px;
                letter-spacing: 2px;
            }
            .border-box {
                width: 50%;
                height: 100%;
                position: absolute;
                top: 0;
            }
            .border-box-left {
                left: 0;
            }
            .border-box-right {
                right: 0;
            }
            .border {
                width: 100%;
                height: 1px;
                position: absolute;
                border-bottom: 1px solid #918F8F;
                bottom: 0;
            }
            .border-left {
                right: 10px;
            }
            .border-right {
                left: 10px;
            }
            .border-incline {
                width: 14px;
                height: 14px;
                transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                -moz-transform: rotate(45deg);
                -webkit-transform: rotate(45deg);
                -o-transform: rotate(45deg);
                position: absolute;
            }
            .border-incline-left {
                border-left: 1px solid #918F8F;
                bottom: -6px;
                right: -7px;
            }
            .border-incline-right {
                border-top: 1px solid #918F8F;
                bottom: -7px;
                left: -7px;
            }
            .border-line {
                width: 12px;
                height: 1px;
                position: absolute;
                border-bottom: 1px solid #918F8F;
                bottom: 0;
            }
            .border-line-left {
                right: -1px;
            }
            .border-line-right {
                left: -1px;
            }
        }
    }
    .app-box {
        width: 900px;
        height: 80%;
        margin: 0 auto;
        .app-item {
            padding-top: 30px;
            display: flex;
            justify-content: space-between;
            .box-item {
                width: 50%;
                overflow-y: hidden;
                .item-img {
                    height: 80%;
                }
                .safariActive{
                    height: auto;
                    width: 50%;
                }
            }
            .item-content {
                height: 100%;
                text-align: left;
                display: flex;
                flex-direction: column;
                overflow-y: visible;
                p {
                    line-height: 26px;
                    color: #939393;
                    letter-spacing: 2px;
                }
                .content-title {
                    font-size: 2.5rem;
                    color: #363636;
                    letter-spacing: 4px;
                    font-weight: 100;
                    margin: 20px 0;
                }
                .code-box {
                    width: 180px;
                    padding-top: 10px;
                    .code-img {
                        width: 100%;
                    }
                }
            }
        }
    }
    .content-title-big {
        display: none;
    }
}

.swiper-button-prev,
.swiper-button-next {
    top: 55%;
}

@media only screen and (max-width: 1220px) {
    .app-content {
        width: 900px;
        .app-name,
        .app-box {
            width: 850px;
        }
    }
}

@media only screen and (max-width: 992px) {
    .head-box {
        height: 80px;
    }
    .bannerbg {
        top: 80px;
    }
    .app-content {
        width: 700px;
        .app-name,
        .app-box {
            width: 700px;
        }
    }
    .app-content .app-box .app-item .item-content .code-box {
        width: 160px;
    }
    .swiper-button-prev,
    .swiper-container-rtl .swiper-button-next {
        left: -27px;
    }
    .swiper-button-next,
    .swiper-container-rtl .swiper-button-prev {
        right: -27px;
    }
    .app-content .app-box .app-item .box-item {
        position: relative;
        .item-img {
            height: auto;
            width: 90%;
            margin: 0 auto;
        }
    }
}

@media only screen and (max-width: 768px) {
    .head-box {
        height: 70px;
    }
    .bannerbg {
        top: 70px;
    }
    .app-content {
        width: 500px;
        .app-name,
        .app-box {
            width: 500px;
        }
        .content-title-huge {
            display: none;
        }
    }
    .app-content .app-box .app-item .item-content .content-title-big {
        display: block;
        margin: 10px 0;
    }
    .app-content .app-box .app-item .item-content .code-box {
        width: 150px;
    }
}

@media only screen and (max-width: 540px) {
    .head-box {
        height: 56px;
    }
    .bannerbg {
        top: 56px;
    }
    .app-content {
        width: 460px;
        .app-name,
        .app-box {
            width: 460px;
        }
    }
    .app-content .app-box .app-item .item-content .code-box {
        width: 140px;
    }
    .swiper-button-prev,
    .swiper-container-rtl .swiper-button-next {
        left: 10px;
    }
    .swiper-button-next,
    .swiper-container-rtl .swiper-button-prev {
        right: 10px;
    }
}

@media only screen and (max-width: 460px) {
    .head-box {
        height: 54px;
    }
    .bannerbg {
        top: 54px;
    }
    .app-content {
        width: 400px;
        .app-name,
        .app-box {
            width: 400px;
        }
    }
    .app-content .app-box .app-item .item-content .code-box {
        width: 130px;
    }
    .app-content .app-box .app-item .item-content .code-box {
    }
}

@media only screen and (max-width: 400px) {
    .head-box {
        height: 40px;
    }
    .bannerbg {
        top: 40px;
    }
    .app-content {
        width: 320px;
        .app-name,
        .app-box {
            width: 320px;
        }
    }
    .app-content .app-box .app-item .item-content{
        height: 80%;
    }
    .app-content .app-box .app-item .item-content .code-box {
        width: 120px;
    }
}

@media only screen and (max-width: 320px) {
    .head-box {
        height: 36px;
    }
    .bannerbg {
        top: 36px;
    }
    .app-content {
        width: 278px;
        .app-name,
        .app-box {
            width: 278px;
        }
    }
    .app-content .app-box .app-item .item-content .code-box {
        width: 100px;
    }
}

</style>
