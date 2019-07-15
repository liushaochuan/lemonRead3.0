<!-- 新闻列表页面 -->
<template>
    <div>
        <lemon-head></lemon-head>
        <div class="banner">
            <img class="banner-img" :src="banner">
            <div class="banner-title">
                <div class="banner-title-img">
                    <img :src="title"> 
                </div>
            </div>
        </div>
        <div class="news">
            <waterfall :line-gap="fallWidth" :watch="newsList" :auto-resize="true">
                <waterfall-slot v-for="(item, index) in newsList" :width="item.width" :height="item.height" :order="index" :key="item.id" class="fall-box">
                    <div class="fall-item" :class="{newsItemActive: item.border}" @mouseover='newsOver(index)' @mouseout='newsOut()' @click="goNewsDetail(index)">
                        <img :src="item.imgUrl">
                        <div class="content">
                            <p class="title content-margin">{{item.title}}</p>
                            <p class="content-margin">{{item.content}}</p>
                            <b class="news-line content-margin"></b>
                            <p class="time content-margin">{{item.time}}</p>
                        </div>
                    </div>
                </waterfall-slot>
            </waterfall>
        </div>
        <div class="clearfix"></div>
        <div class="idot-box">
            <span v-for="item in numList" class="idot" v-bind:class="{ active: item == page }" @click="goPage(item)">{{item}}</span>
            <span v-if="numList.length>1">...</span>
            <span class="idot" @click="nextPage" v-if="numList.length>1">
                <i class="iconfont icon-jiantou"></i>
            </span>
        </div>
        <lemon-foot class="foot"></lemon-foot>
    </div>
</template>

<script>

import Waterfall from 'vue-waterfall/lib/waterfall'
import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'

import LemonHead from '../components/LemonHead';
import LemonFoot from '../components/LemonFoot';

import banner from '@/images/news/banner.jpg';
import title from '@/images/news/title.png';
import ad01 from '@/images/news/ad01.jpg';
import ad02 from '@/images/news/ad02.jpg';
import ad03 from '@/images/news/ad03.jpg';
import ad04 from '@/images/news/ad04.jpg';
import ad05 from '@/images/news/ad05.jpg';
import ad06 from '@/images/news/ad06.jpg';

export default {
    name: 'news',
    components: {
        LemonHead,
        LemonFoot,
        Waterfall,
        WaterfallSlot
    },
    // metaInfo: {
    //   title: '柠檬悦读-中小学生分级阅读平台',
    //   meta: [{
    //     name: 'keyWords',
    //     content: '柠檬,博阅,柠檬悦读,柠檬阅读,阅读,学生阅读,分级阅读,阅读习惯,K12教育,小柠檬教育科技,让孩子爱上阅读'
    //   }],
    // },
    data () {
        return {
            banner: banner,
            title: title,
            page: 1,
            numList: [1],
            // 新闻较多时每页6个新闻
            // numList: [1,2,3],
            fallWidth: 400,
            newsList: [
            {
                width: 380,
                height: 560,
                title: "读书月“博悦”智慧阅读活动--柠檬悦读走进南外滨海分校",
                content: "以“博阅图书 快乐成长——博悦”为主题的2017南外滨海小学读书月智慧阅读活动，于11月10日成功矩形。学校领导，家长团体和博阅科技代表等，出席了活动",
                imgUrl: ad01,
                time: "2017.11.10",
                border: false
            },{
                width: 380,
                height: 445,
                title: "柠檬悦读教师端全新上线",
                content: "2018年1月，柠檬悦读教师端全新上线，页面改版、添新功能，更加方便老师的教学。",
                imgUrl: ad02,
                time: "2017.11.11",
                border: false
            }
            ],
            screenWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        }
    },
    created() {
        let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        // 不同屏幕下列表的宽高设置,宽度已经设置完成,新增新闻时由于设计需要瀑布流布局,所以需要繁琐的手动调整设置
        if(w <= 1200){
            this.fallWidth = 300
            this.newsList[0].height = 670
            this.newsList[1].height = 500
        }
        if(w <= 992){
            this.fallWidth = 233
            this.newsList[0].height = 790
            this.newsList[1].height = 540
        }
        if(w <= 768){
            this.fallWidth = 250
            this.newsList[0].height = 650
            this.newsList[1].height = 500
        }
        if(w <= 540){
            this.fallWidth = 230
            this.newsList[0].height = 640
            this.newsList[1].height = 490
        }
        if(w <= 460){
            this.fallWidth = 200
            this.newsList[0].height = 740
            this.newsList[1].height = 505
        }
        if(w <= 400){
            this.fallWidth = 160
            this.newsList[0].height = 870
            this.newsList[1].height = 560
        }
        if(w <= 320){
            this.fallWidth = 139
            this.newsList[0].height = 1000
            this.newsList[1].height = 670
        }
    },
    mounted() {
        const that = this
        window.onresize = () => {
            return (() => {
                that.screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
            })()
        }
    },
    methods: {
        // 新闻页面跳转
        goNewsDetail: function (index) {
            if(index === 0){
                // 特殊页面
                this.$router.push({path: "newsDtailImg"})
            }else {
                // 常规页面,新增新闻时以此页面为模板,传入参数
                this.$router.push({path: "newsDtail"})
            }
        },
        // 多页时列表页面跳转
        goPage: function(item){
            this.page = item
        },
        // 下一页
        nextPage: function(){
            if(this.page >= this.numList.length){
                return
            }
            this.page++
        },
        // 列表项目移入交互效果
        newsOver:function (index) {
            this.newsList[index].border = true;
        },
        newsOut:function () {
            this.newsList.forEach( item => {
                item.border = false
            });
        },
    },
    watch: {
        // 屏幕大小变化监听
        screenWidth(val,oldValue){
            if (!this.timer) {
                this.screenWidth = val
                this.timer = true
                let that = this
                setTimeout(function () {
                    let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    if(w > 1200){
                        that.fallWidth = 400
                        that.newsList[0].height = 560
                        that.newsList[1].height = 437
                    }
                    if(w <= 1200){
                        that.fallWidth = 300
                        that.newsList[0].height = 670
                        that.newsList[1].height = 500
                    }
                    if(w <= 992){
                        that.fallWidth = 233
                        that.newsList[0].height = 790
                        that.newsList[1].height = 540
                    }
                    if(w <= 768){
                        that.fallWidth = 250
                        that.newsList[0].height = 650
                        that.newsList[1].height = 500
                    }
                    if(w <= 540){
                        that.fallWidth = 230
                        that.newsList[0].height = 640
                        that.newsList[1].height = 490
                    }
                    if(w <= 460){
                        that.fallWidth = 200
                        that.newsList[0].height = 740
                        that.newsList[1].height = 505
                    }
                    if(w <= 400){
                        that.fallWidth = 160
                        that.newsList[0].height = 870
                        that.newsList[1].height = 560
                    }
                    if(w <= 320){
                        that.fallWidth = 139
                        that.newsList[0].height = 1000
                        that.newsList[1].height = 670
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
.banner{
    width: 100%;
    position: relative;
}
.banner-img{
    width: 100%;
}
.banner-title{
    width: 100%;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .banner-title-img{
        text-align: left;
        img{
            width: 25%;
        }
    }
}
.news,.idot-box,.banner-title .banner-title-img{
    width: 1200px;
    margin: 0 auto;
}

.idot-box{
    span{
        margin: 20px 5px;
    }
    .idot{
        display: inline-block;
        width: 26px;
        height: 26px;
        line-height: 26px;
        border: 1px solid #A0A0A0;
        border-radius: 50%;
        cursor: pointer;
        .iconfont{
            font-size: .5rem;
        }
    }
    .active{
        background-color: #FECC01;
    }
}

.fall-box{
    padding: 10px;
    margin-top: 10px;
    .fall-item{
        width: 100%;
        box-sizing: border-box;
        border: 1px solid rgba(0,0,0,0.1);
        padding-bottom: 20px;
        cursor: pointer;
        img{
            width: 100%;
        }
        .content{
            width: 90%;
            margin: 0 auto;
            p{
                text-align: left;
                color: #9A9A9A;
                line-height: 24px;
            }
            .title{
                font-size: 1.1rem;
                color: #000;
            }
            .news-line{
                display: block;
                width: 100%;
                height: 1px;
                border-bottom: 1px solid #CECECE;
            }
            .content-margin{
                margin-top: 20px;
            }
        }
    }
}
.fall-box .newsItemActive{
    box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.1);
}
@media only screen and (max-width: 1220px) {
    .news,.idot-box,.banner-title .banner-title-img{
        width: 900px;
    }
    .fall-box{
        padding: 9px;
        margin-top: 9px;
        .fall-item{
            padding-bottom: 18px;
            .content .content-margin{
                margin-top: 18px;
            }
        }
    }
}

@media only screen and (max-width: 992px) {
    .news,.idot-box,.banner-title .banner-title-img{
        width: 700px;

    }
    .fall-box{
        padding: 8px;
        margin-top: 8px;
        .fall-item{
            padding-bottom: 16px;
            .content{
                .content-margin{
                    margin-top: 16px;
                    line-height: 22px;
                }
            }
        }
    }
}

@media only screen and (max-width: 768px) {
    .news,.idot-box,.banner-title .banner-title-img{
        width: 500px;

    }
    .fall-box{
        padding: 7px;
        margin-top: 7px;
        .fall-item{
            padding-bottom: 14px;
            .content{
                .content-margin{
                    margin-top: 14px;
                    line-height: 20px;
                }
            }
        }
    }
}

@media only screen and (max-width: 540px) {
    .news,.idot-box,.banner-title .banner-title-img{
        width: 460px;
    }
    .fall-box{
        padding: 6px;
        margin-top: 6px;
        .fall-item{
            padding-bottom: 12px;
            .content{
                .content-margin{
                    margin-top: 12px;
                    line-height: 18px;
                }
            }
        }
    }
}

@media only screen and (max-width: 460px) {
    .news,.idot-box,.banner-title .banner-title-img{
        width: 400px;
    }
    .fall-box{
        padding: 5px;
        margin-top: 5px;
        .fall-item{
            padding-bottom: 10px;
            .content{
                .content-margin{
                    margin-top: 10px;
                }
            }
        }
    }
}

@media only screen and (max-width: 400px) {
    .news,.idot-box,.banner-title .banner-title-img{
        width: 320px;
    }
    .fall-box{
        padding: 4px;
        margin-top: 4px;
        .fall-item{
            padding-bottom: 8px;
            .content{
                .content-margin{
                    margin-top: 8px;
                }
            }
        }
    }
}

@media only screen and (max-width: 320px) {
    .news,.idot-box,.banner-title .banner-title-img{
        width: 278px;
    }
}
</style>