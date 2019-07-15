<!-- 游戏页面 -->
<template>
    <div>
        <lemon-head class="head-bg"></lemon-head>
        <div class="head-box"></div>
        <div class="game-content" v-bind:style="{height:clientHeight}">
            <div class="game-name">
                <div class="game-title">
                    <img src="../images/game/game.jpg" alt="">
                    <div class="title-box">
                        <p class="game-name-title">疯狂填字</p>
                        <p>类型：休闲益智&nbsp;&nbsp;&nbsp;&nbsp;大小：5.76MB</p>
                    </div>
                </div>
                <div class="game-download">
                    <div class="game-download-border">
                        <a href="http://oyu1dprzo.bkt.clouddn.com/fengkuangtianzi.apk">安卓下载</a>
                    </div>
                </div>
            </div>
            <div class="game-box">
                <div class="game-introduce">
                    <p class="introduce-title">游戏介绍</p>
                    <b class="game-border"></b>
                    <p>疯狂填字是一款趣味益智填字游戏。本款疯狂填字游戏共包括600期填字游戏，是你打发闲暇时间最佳选择。疯狂填字游戏操作简单可玩性不错,可以挑战你的知识面，是您打发时间，增长知识的好选择，快来下载挑战一下把!</p>
                </div>
                <div class="game-img">
                    <p class="introduce-title">游戏截图</p>
                    <b class="game-border"></b>
                    <div class="game-img-box">
                        <img src="../images/game/game01.jpg" alt="">
                        <img src="../images/game/game02.jpg" alt="">
                        <img src="../images/game/game03.jpg" alt="">
                        <img src="../images/game/game04.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <lemon-foot class="foot"></lemon-foot>
    </div>
</template>
<script>
import LemonHead from '../components/LemonHead';
import LemonFoot from '../components/LemonFoot';

export default {
    name: 'game',
    components: {
        LemonHead,
        LemonFoot,
    },
    // metaInfo: {
    //   title: '柠檬悦读-中小学生分级阅读平台',
    //   meta: [{
    //     name: 'keyWords',
    //     content: '柠檬,博阅,柠檬悦读,柠檬阅读,阅读,学生阅读,分级阅读,阅读习惯,K12教育,小柠檬教育科技,让孩子爱上阅读'
    //   }],
    // },
    data() {
        return {
            clientWidth: 0,
            clientHeight: 0,
            resizeData: {
                screenWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                screenHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            }
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
        if (h < 770) {
            this.clientHeight = '680px'
        }
    },
    mounted() {
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
    methods: {
        userForget() {
            console.log('this', this.message)
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
                    if (h < 770) {
                        that.clientHeight = '680px'
                    }
                    that.timer = false
                }, 100)
            }
        }
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.head-bg {
    background-color: #474747;
}

.head-box {
    height: 90px;
}

.game-content {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    .game-name {
        height: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .game-title {
            height: 50%;
            width: 50%;
            text-align: left;
            position: relative;
            img {
                height: 100%;
                border-radius: 15px;
            }
            .title-box {
                position: absolute;
                top: 50%;
                left: 25%;
                transform: translateY(-50%);
                p {
                    color: #8C8C8C;
                    text-align: left;
                }
                .game-name-title {
                    font-size: 2rem;
                    color: #000;
                    margin-bottom: 10px;
                    letter-spacing: 2px;
                }
            }
        }
        .game-download {
            margin-right: 100px;
        }
        .game-download-border {
            height: 60px;
            line-height: 60px;
            border-radius: 30px;
            background-color: #FDCC04;
            font-size: 2rem;
            padding: 0 40px;
            cursor: pointer;
            a {
                color: #fff;
            }
        }
    }
    .game-box {
        height: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow-y: hidden;
        p {
            text-align: left;
            line-height: 26px;
            color: #363636;
            letter-spacing: 1px;
        }
        .game-border {
            display: block;
            width: 100%;
            height: 1px;
            border-bottom: 1px solid #BBBBBB;
            margin-top: 10px;
            margin-bottom: 20px;
        }
        .game-img-box {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            img {
                width: 20%;
                margin-bottom: 30px;
            }
        }
    }
}


@media only screen and (max-width: 1220px) {
    .game-content {
        width: 900px;
    }
}

@media only screen and (max-width: 992px) {
    .head-box {
        height: 80px;
    }
    .bannerbg {
        top: 80px;
    }
    .game-content {
        width: 700px;
    }
}

@media only screen and (max-width: 768px) {
    .head-box {
        height: 70px;
    }
    .bannerbg {
        top: 70px;
    }
    .game-content {
        width: 500px;
    }
}

@media only screen and (max-width: 540px) {
    .head-box {
        height: 56px;
    }
    .bannerbg {
        top: 56px;
    }
    .game-content {
        width: 460px;
    }
}

@media only screen and (max-width: 460px) {
    .head-box {
        height: 54px;
    }
    .bannerbg {
        top: 54px;
    }
    .game-content {
        width: 400px;
    }
}

@media only screen and (max-width: 400px) {
    .head-box {
        height: 40px;
    }
    .bannerbg {
        top: 40px;
    }
    .game-content {
        width: 320px;
    }
}

@media only screen and (max-width: 320px) {
    .head-box {
        height: 36px;
    }
    .bannerbg {
        top: 36px;
    }
}

</style>
