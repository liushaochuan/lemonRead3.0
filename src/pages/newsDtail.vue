<!-- 新闻常规页面 -->
<template>
    <div>
        <lemon-head class="head-bg"></lemon-head>
        <div class="news">
            <div class="news-box news-detail left">
                <p class="news-title">
                    柠檬悦读教师端全新上线
                </p>
                <p class="news-time">
                    2017.11.11
                </p>
                <b class="news-line"></b>
                <p class="news-content">
                    2018年1月，柠檬悦读教师端全新上线，页面改版、添新功能，更加方便老师的教学。
                </p>
                <p>
                    1.作业功能： <br>
                    提供发布与检查班级阅读、朗读和作业公告功能.系统自动生成作业报告，减轻老师批改工作量。<br>
                    2.阅读报告： <br>
                    配合学生端的数据统计。向老师提供班级的整体阅读和学生个人的阅读详情，满足老师阅读教学需求。<br>
                    3.阅读社圈： <br>
                    学生、老师可以在社圈中发表阅读笔记、日记、交流、点赞对方的想法，分享阅读的喜悦。<br>
                </p>
                <div class="news-img">
                    <img :src="detail01" class="left"> 
                    <img :src="detail02" class="left"> 
                    <img :src="detail03" class="left"> 
                    <img :src="detail04" class="left"> 
                </div>
                <div class="clearfix"></div>
                <b class="news-line"></b>
                <div class="news-page">
                    <div class="news-btn news-hover-color" @click="newsChange">
                        <img :src="left" class="btn-img"> 
                    </div>
                    <div class="news-btn news-hover-color" @click="goBack">
                        返回
                    </div>
                    <div class="news-btn news-hover-color" @click="newsChange">
                        <img :src="right" class="btn-img"> 
                    </div>
                </div>
            </div>
            <div class="news-box news-list right">
                <p class="news-title">
                    新闻 <span>News</span>
                </p>
                <b class="news-line"></b>
                <ul class="news-list-box">
                    <li v-for="(item,index) in newsList" class="news-item" @click="goNewsDetail">
                        <div class="news-img">
                            <img :src="item.imgUrl">  
                        </div>
                        <div class="title">{{item.title}}</div>
                    </li>
                </ul>
                <b class="news-line"></b>
                <div class="news-btn news-hover-color" @click="goBack">
                    更多
                </div>
            </div>
            <div class="clearfix"></div>
        </div>
        <lemon-foot class="foot"></lemon-foot>
    </div>
</template>

<script>

import LemonHead from '../components/LemonHead';
import LemonFoot from '../components/LemonFoot';

import detail01 from '@/images/newsDetail/detail01.jpg';
import detail02 from '@/images/newsDetail/detail02.jpg';
import detail03 from '@/images/newsDetail/detail03.jpg';
import detail04 from '@/images/newsDetail/detail04.jpg';
import left from '@/images/newsDetail/left.png';
import right from '@/images/newsDetail/right.png';
import ad01 from '@/images/news/ad01.jpg';
import ad02 from '@/images/news/ad02.jpg';
import ad03 from '@/images/news/ad03.jpg';
import ad04 from '@/images/news/ad04.jpg';

export default {
    name: 'newsDtail',
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
    data () {
        return {
            detail01: detail01,
            detail02: detail02,
            detail03: detail03,
            detail04: detail04,
            left: left,
            right: right,
            newsList: [
            {
                title: "读书月“博悦”智慧阅读活动--柠檬悦读走进南外滨海分校",
                content: "以“博阅图书 快乐成长——博悦”为主题的2017南外滨海小学读书月智慧阅读活动，于11月10日成功矩形。学校领导，家长团体和博阅科技代表等，出席了活动",
                imgUrl: ad01,
                time: "2017.11.10"
            },{
                title: "柠檬悦读教师端全新上线",
                content: "2018年1月，柠檬悦读教师端全新上线，页面改版、添新功能，更加方便老师的教学。",
                imgUrl: ad02,
                time: "2017.11.11"
            },
            ]
        }
    },
    methods: {
        // 右侧新闻列表进入
        goNewsDetail: function () {
            this.$router.push({path: "newsDtail"})
        },
        // 返回新闻页面
        goBack:function () {
            this.$router.push({path: "news"})
        },
        // 上下新闻页面,需调整
        newsChange: function () {
            if(this.$router.history.current.name.indexOf("newsDtailImg") != -1){
                this.$router.push({path: "newsDtail"})
            }else {
                this.$router.push({path: "newsDtailImg"})
            }
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.head-bg{
    background-color: #474747;
}
p{
    text-align: left;
}
.news{
    width: 1200px;
    margin: 0 auto;
    margin-top: 150px;
    margin-bottom: 50px;
    .news-box{
        border: 1px solid #eee;
        padding: 20px;
        box-sizing: border-box;
        background-color: rgba(0,0,0,0.01);
    }
    p{
        line-height: 30px;
        margin: 20px 0;
    }
    .news-title{
        font-size: 1.8rem;
        text-indent: 0;
        span{
            color: #DDDDDD;
        }
    }
    .news-line{
        display: block;
        width: 100%;
        height: 1px;
        border-bottom: 1px solid #CECECE;
    }
    .news-btn{
        width: 90px;
        height: 40px;
        line-height: 40px;
        margin: 0 auto;
        margin-top: 20px;
        border: 1px solid #CECECE;
        border-radius: 20px;
        cursor: pointer;
        overflow: hidden;
        .btn-img{
            width: 50%;
            vertical-align: middle;
            position: relative;
            top: -2px;
        }
    }
    .news-hover-color:hover{
        background-color: #F9CB00;
        color: #fff;
        .btn-img{
            position: relative;
            left: -68px;
            border-right: 90px solid transparent;
            -webkit-filter: drop-shadow(90px 0);
            filter: drop-shadow(90px 0); 
        }
    }
    .news-detail{
        width: 70%;
        .news-time{
            margin-bottom: 0;
            text-indent: 0;
        }
        .news-img{
            width: 100%;
            img{
                width: 50%;
                padding: 20px;
                box-sizing: border-box;
            }
        }
        .news-page{
            width: 100%;
            display: flex;
            justify-content: space-around;
        }
    }
    .news-list{
        width: 28%;
        .news-list-box{
            .news-item{
                margin: 20px 0;
                width: 100%;
                display: flex;
                justify-content: space-between;
                cursor: pointer;
                .news-img{
                    width: 35%;
                    img{
                        width: 100%;
                    }
                }
                .title{
                    width: 60%;
                    text-align: left;
                    line-height: 20px;
                }
            }
        }
    }
}
@media only screen and (max-width: 1220px) {
    .news{
        width: 900px;
        margin-top: 130px;
        margin-bottom: 40px;
        .news-box{
            padding: 18px;
        }
        p{
            line-height: 28px;
            margin: 18px 0;
        }
        .news-title{
            font-size: 1.7rem;
        }
        .news-list .news-list-box .news-item{
            flex-direction: column;
            .news-img{
                width: 100%;
                img{
                    width: 80%;
                }
            }
            .title{
                width: 100%;
                margin-top: 20px;
            }
        }
        .news-btn{
            width: 80px;
            height: 38px;
            line-height: 38px;
            margin-top: 19px;
            border-radius: 19px;
        }
        .news-hover-color:hover .btn-img{
            left: -70px;
        }
        .news-detail .news-img img{
            padding: 18px;
        }
    }
}
@media only screen and (max-width: 992px) {
    .news{
        width: 700px;
        margin-top: 110px;
        margin-bottom: 30px;
        .news-box{
            padding: 16px;
        }
        p{
            line-height: 26px;
            margin: 16px 0;
        }
        .news-title{
            font-size: 1.6rem;
        }
        .news-list .news-list-box .news-item{
            .title{
                line-height: 18px;
                margin-top: 18px;
            }
        }
        .news-btn{
            width: 70px;
            height: 36px;
            line-height: 36px;
            margin-top: 18px;
            border-radius: 18px;
        }
        .news-hover-color:hover .btn-img{
            left: -72px;
        }
        .news-detail .news-img img{
            padding: 16px;
        }
    }
}

@media only screen and (max-width: 768px) {
    .news{
        width: 500px;
        margin-top: 100px;
        margin-bottom: 40px;
        .news-box{
            padding: 14px;
        }
        p{
            line-height: 24px;
            margin: 14px 0;
        }
        .news-title{
            font-size: 1.5rem;
        }
        .news-detail{
            width: 100%;
        }
        .news-list{
            display: none;
        }
        .news-btn{
            width: 60px;
            height: 34px;
            line-height: 34px;
            margin-top: 17px;
            border-radius: 17px;
        }
        .news-hover-color:hover .btn-img{
            left: -74px;
        }
        .news-detail .news-img img{
            padding: 14px;
        }
    }
}

@media only screen and (max-width: 540px) {
    .news{
        width: 460px;
        margin-top: 86px;
        margin-bottom: 30px;
        .news-box{
            padding: 12px;
        }
        p{
            line-height: 22px;
            margin: 12px 0;
        }
        .news-title{
            font-size: 1.4rem;
        }
        .news-btn{
            width: 50px;
            height: 32px;
            line-height: 32px;
            margin-top: 16px;
            border-radius: 16px;
        }
        .news-hover-color:hover .btn-img{
            left: -76px;
        }
        .news-detail .news-img img{
            padding: 12px;
        }
    }

}

@media only screen and (max-width: 460px) {
    .news{
        width: 400px;
        margin-top: 74px;
        margin-bottom: 20px;
        .news-box{
            padding: 10px;
        }
        p{
            line-height: 20px;
            margin: 10px 0;
        }
        .news-title{
            font-size: 1.3rem;
        }
        .news-btn{
            width: 40px;
            height: 30px;
            line-height: 30px;
            margin-top: 15px;
            border-radius: 15px;
        }
        .news-hover-color:hover .btn-img{
            left: -78px;
        }
        .news-detail .news-img img{
            padding: 10px;
        }
    }
}

@media only screen and (max-width: 400px) {
    .news{
        width: 320px;
    }
}

@media only screen and (max-width: 320px) {
    .news{
        width: 278px;
    }
}
</style>