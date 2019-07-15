<!-- 加入我们 -->
<template>
    <div>
        <lemon-head></lemon-head>
        <div class="banner">
            <img class="banner-img" :src="banner">
            <div class="banner-title">
                <div class="banner-title-content">
                    <p class="bold-title">Join US</p>
                    <div class="chinese">
                        <span>
                            <b class="border border-left"></b>
                            加入我们
                            <b class="border border-right"></b>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="join-top">
            <div class="join-top-left">
                <img :src="kexing">
            </div>
            <div class="join-top-right">
                <div class="right-box">
                    <div class="right-top right-top-huge">
                        <p>小柠檬教育科技位于创新企业汇聚的高科技创新中心——深圳南山科技园，与中国的最大互联网企业之一腾讯同住一幢楼-科兴科学园，园内有各种高档次的美食，舒适悠闲，让你满血迎接工作挑战。</p>
                    </div>
                    <div class="right-bottom">
                        <img :src="floor">
                        <img :src="boyue">
                    </div>
                </div>
            </div>
        </div>
        <div class="right-top-large">
            <p>小柠檬教育科技位于创新企业汇聚的高科技创新中心——深圳南山科技园，与中国的最大互联网企业之一腾讯同住一幢楼-科兴科学园，园内有各种高档次的美食，舒适悠闲，让你满血迎接工作挑战。</p>
        </div>

        <div class="join-bottom join-bottom-huge">
            <div class="join-bottom-side">
                <img :src="bottom01">
            </div>
            <div class="join-bottom-middle">
                <div class="middle-box">
                    <img :src="bottom02">
                    <div class="middle-box-content">
                        <p>小柠檬教育一月两次团队活动，每个季度一次集体生日会，让您感受集体的团结与氛围的温暖。同时为员工提供一个施展自己能力的发展平台，让您成为“互联网教育”的牛人。</p>
                    </div>
                    <img :src="bottom03">
                </div>
            </div>
            <div class="join-bottom-side">
                <img :src="bottom04">
            </div>
        </div>

        <div class="join-bottom join-bottom-large">
            <img class="bottom-lerge-img" :src="bottom02">
            <div class="middle-large-box">
                <img :src="bottom01">
                <div class="middle-box-content middle-box-content-big">
                    <p>小柠檬教育一月两次团队活动，每个季度一次集体生日会，让您感受集体的团结与氛围的温暖。同时为员工提供一个施展自己能力的发展平台，让您成为“互联网教育”的牛人。</p>
                </div>
                <img :src="bottom04">
            </div>
            <img class="bottom-lerge-img" :src="bottom03">
            <div class="middle-box-content-little">
                <p>小柠檬教育一月两次团队活动，每个季度一次集体生日会，让您感受集体的团结与氛围的温暖。同时为员工提供一个施展自己能力的发展平台，让您成为“互联网教育”的牛人。</p>
            </div>
        </div>
        <lemon-foot class="foot"></lemon-foot>
    </div>
</template>
<script>

import LemonHead from '../components/LemonHead';
import LemonFoot from '../components/LemonFoot';

import banner from '@/images/join/banner.jpg';
import kexing from '@/images/join/kexing.jpg';
import floor from '@/images/join/floor.jpg';
import boyue from '@/images/join/boyue.jpg';
import bottom01 from '@/images/join/bottom01.jpg';
import bottom02 from '@/images/join/bottom02.jpg';
import bottom03 from '@/images/join/bottom03.jpg';
import bottom04 from '@/images/join/bottom04.jpg';

export default {
    name: 'join',
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
            banner: banner,
            kexing: kexing,
            floor: floor,
            boyue: boyue,
            bottom01: bottom01,
            bottom02: bottom02,
            bottom03: bottom03,
            bottom04: bottom04,
        }
    },
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
    .banner-title-content{
        width: 1200px;
        margin: 0 auto;
        p{
            font-size: 5.5rem;
            font-weight: bold;
            color: #FFFFFF;
            font-family: Arial;
        }
        .bold-title{
            font-weight: 900;
            margin-bottom: 20px;
        }
        .chinese span{
            position: relative;
            font-size: 2rem;
            color: #FFFFFF;
            .border{
                display: inline-block;
                width: 50px;
                height: 1px;
                border-top: 1px solid #fff;
                position: absolute;
            }
            .border-left{
                top: 50%;
                left: -50%;
            }
            .border-right{
                top: 50%;
                right: -50%;
            }
        }
    }
}
.join-top,.join-bottom{
    width: 1200px;
    margin: 100px auto;
    display: flex;
    justify-content: space-between;
    .join-top-left{
        width: 45%;
        img{
            width: 100%;
        }
    }
    .join-top-right{
        width: 55%;
        .right-box{
            height: 334px;
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            .right-top{
                flex-grow:1;
                background-color: #FECC01;
                position: relative;
                p{
                    line-height: 30px;
                    text-align: left;
                    text-indent:30px;
                    color: #FFFFFF;
                    padding: 10px;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    
                }
            }
            .right-bottom{
                display: flex;
                justify-content: space-between;
                margin-top: 2%;
                img{
                    width: 49%;
                }
            }
        }
    }
}
.join-bottom-side{
    width: 22%;
    img{
        width: 100%;
    }
}
.join-bottom-middle{
    width: 66%;
    .middle-box{
        height: 457px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
.right-top,.middle-box-content{
    flex-grow:1;
    background-color: #FECC01;
    position: relative;
    p{
        line-height: 30px;
        text-align: left;
        text-indent:30px;
        color: #FFFFFF;
        padding: 10px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
}
.middle-box-content{
    background-color: #383838;
}
.right-top-large{
    display: none;
}
.join-bottom-large{
    display: none;
}
.middle-box-content-little{
    display: none;
}

@media only screen and (max-width: 1220px) {
    .banner-title .banner-title-content,.join-top,.join-bottom{
        width: 900px;
    }
    .banner-title .banner-title-content p{
        font-size: 5rem;
    }
    .banner-title .banner-title-content .chinese span{
        font-size: 1.9rem;
    }
    .join-top, .join-bottom{
        margin: 70px auto;
    }
    .join-top .join-top-left, .join-bottom .join-top-left{
        width: 50%;
    }
    .join-top .join-top-right .right-box .right-top p, .join-bottom .join-top-right .right-box .right-top p{
        line-height: 26px;
    }
    .join-top .join-top-right .right-box, .join-bottom .join-top-right .right-box{
        height: 265px;
        .right-bottom{
            height: 120px;
        }
    }
    .join-bottom-side{
        width: 23%;
    }
    .join-bottom-middle{
        width: 54%;
        .middle-box{
            height: 395px;
            img{
                width: 100%;
            }
        }
    }
}

@media only screen and (max-width: 992px) {
    .banner-title .banner-title-content,.join-top,.join-bottom{
        width: 700px;
    }
    .banner-title .banner-title-content p{
        font-size: 4.5rem;
    }
    .banner-title .banner-title-content .chinese span{
        font-size: 1.8rem;
    }
    .join-top, .join-bottom{
        margin: 60px auto;
    }
    .join-top .join-top-left, .join-bottom .join-top-left{
        width: 48%;
        display: flex;
        justify-content: space-between;
        img{
            height: 210px;
            width: 100%;
            margin-right: 5px;
        }
    }
    .join-top .join-top-right .right-box, .join-bottom .join-top-right .right-box{
        height: 210px;
        margin-left: 5px;
    }
    .join-top .join-top-right .right-box .right-top p, .join-bottom .join-top-right .right-box .right-top p{
        padding: 5px;
        line-height: 20px;
    }
    .join-bottom-side{
        width: 23%;
    }
    .join-bottom-middle{
        width: 54%;
        .middle-box{
            height: 307px;
        }
    }
    .right-top p, .middle-box-content p{
        line-height: 20px;
    }
}

@media only screen and (max-width: 768px) {
    .banner-title .banner-title-content,.join-top,.join-bottom{
        width: 500px;
    }
    .banner-title .banner-title-content .bold-title{
        margin-bottom: 16px;
    }
    .banner-title .banner-title-content p{
        font-size: 4rem;
    }
    .banner-title .banner-title-content .chinese span{
        font-size: 1.7rem;
    }
    .banner-title .banner-title-content .chinese span .border-right{
        right: -70%;
    }
    .banner-title .banner-title-content .chinese span .border-left{
        left: -70%;
    }
    .join-top, .join-bottom{
        margin: 50px auto;
    }
    .join-top .join-top-left, .join-bottom .join-top-left{
        img{
            height: 180px;
            margin-right: 5px;
        }
    }
    .join-top .join-top-right .right-box, .join-bottom .join-top-right .right-box{
        height: 180px;
        margin-left: 5px;
        .right-bottom{
            height: 75px;
        }
    }
    .join-top .join-top-right .right-box .right-top p, .join-bottom .join-top-right .right-box .right-top p{
        padding: 5px;
        line-height: 18px;
    }

    .join-bottom-side{
        width: 25%;
    }
    .join-bottom-middle{
        width: 50%;
        .middle-box{
            height: 238px;
        }
    }
    .right-top p, .middle-box-content p{
        line-height: 18px;
        padding: 5px;
    }
}

@media only screen and (max-width: 540px) {
    .banner-title .banner-title-content,.join-top,.join-bottom{
        width: 460px;
    }
    .banner-title .banner-title-content .bold-title{
        margin-bottom: 12px;
    }
    .banner-title .banner-title-content p{
        font-size: 3.2rem;
    }
    .banner-title .banner-title-content .chinese span{
        font-size: 1.3rem;
    }
    .banner-title .banner-title-content .chinese span .border{
        width: 40px;
    }
    .banner-title .banner-title-content .chinese span .border-right{
        right: -80%;
    }
    .banner-title .banner-title-content .chinese span .border-left{
        left: -80%;
    }
    .join-top, .join-bottom{
        margin: 50px auto;
    }
    .join-top .join-top-left, .join-bottom .join-top-left{
        width: 45%;
    }
    .join-bottom-side{
        width: 28%;
    }
    .join-bottom-middle{
        width: 50%;
        .middle-box{
            height: 232px;
        }
    }
}

@media only screen and (max-width: 460px) {
    .banner-title .banner-title-content,.join-top,.join-bottom{
        width: 400px;
    }
    .banner-title .banner-title-content .bold-title{
        margin-bottom: 10px;
    }
    .banner-title .banner-title-content p{
        font-size: 3rem;
    }
    .banner-title .banner-title-content .chinese span{
        font-size: 1rem;
    }
    .banner-title .banner-title-content .chinese span .border{
        width: 30px;
    }
    .banner-title .banner-title-content .chinese span .border-right{
        right: -90%;
    }
    .banner-title .banner-title-content .chinese span .border-left{
        left: -90%;
    }
    .join-top, .join-bottom{
        margin: 40px auto;
    }
    .join-top .join-top-left, .join-bottom .join-top-left{
        width: 80%;
        img{
            height: 165px;
        }
    }
    .join-top .join-top-right, .join-bottom .join-top-right{
        width: 45%;
    }
    .join-top .join-top-right .right-box, .join-bottom .join-top-right .right-box{
        height: 165px;
    }
    .join-top .join-top-left img, .join-bottom .join-top-left img{
        margin-right: 0;
    }
    .join-top .join-top-right .right-box .right-bottom, .join-bottom .join-top-right .right-box .right-bottom{
        flex-direction: column;
        align-items: flex-end;
        height: 165px;
        margin-top: 0;
    }
    .join-top .join-top-right .right-box .right-bottom img, .join-bottom .join-top-right .right-box .right-bottom img{
        width: 96%;
    }
    .join-top{
        margin-bottom: 5px;
    }
    .right-top-huge{
        display: none;
    }
    .right-top-large{
        width: 400px;
        margin: 0 auto;
        display: block;
        background-color: #FECC01;
        position: relative;
        p{
            line-height: 16px;
            text-align: left;
            text-indent:16px;
            color: #FFFFFF;
            padding: 10px;
        }
    }
    .join-bottom-huge{
        display: none;
    }
    .join-bottom-large{
        display: block;
        .bottom-lerge-img{
            width: 100%;
        }
        .middle-large-box{
            display: flex;
            justify-content: space-between;
            img{
                width: 25%;
                height: 190px;
            }
        }
    }
}

@media only screen and (max-width: 400px) {
    .banner-title .banner-title-content,.join-top,.join-bottom{
        width: 320px;
    }
    .banner-title .banner-title-content .bold-title{
        margin-bottom: 6px;
    }
    .banner-title .banner-title-content p{
        font-size: 2.5rem;
    }
    .banner-title .banner-title-content .chinese span{
        font-size: 1rem;
    }
    .join-top, .join-bottom{
        margin: 30px auto;
    }
    .join-top .join-top-left, .join-bottom .join-top-left{
        width: 85%;
        img{
            height: 129px;
        }
    }
    .join-top .join-top-right .right-box, .join-bottom .join-top-right .right-box{
        height: 129px;
    }
    .join-top .join-top-right .right-box .right-bottom, .join-bottom .join-top-right .right-box .right-bottom{
        height: 129px;
    }
    .join-top .join-top-right .right-box .right-bottom img, .join-bottom .join-top-right .right-box .right-bottom img{
        width: 96%;
    }
    .join-top{
        margin-bottom: 5px;
    }
    .right-top-large{
        width: 320px;
    }
    .join-bottom-large .middle-large-box img{
        height: 152px;
    }
}

@media only screen and (max-width: 320px) {
    .banner-title .banner-title-content,.join-top,.join-bottom{
        width: 278px;
    }
    .banner-title .banner-title-content .bold-title{
        margin-bottom: 4px;
    }
    .banner-title .banner-title-content p{
        font-size: 2.3rem;
    }
    .join-top, .join-bottom{
        margin: 20px auto;
    }
    .join-top .join-top-left, .join-bottom .join-top-left{
        width: 70%;
    }
    .join-top .join-top-right .right-box .right-bottom img, .join-bottom .join-top-right .right-box .right-bottom img{
        width: 100%;
    }
    .join-top{
        margin-bottom: 5px;
    }
    .right-top-large{
        width: 278px;
    }
    .join-bottom-large .middle-large-box img{
        width:50%;
        height: 265px;
    }
    .middle-box-content-big{
        display: none;
    }
    .middle-box-content-little{
        background-color: #383838;
        display: block;
        p{
            line-height: 30px;
            text-align: left;
            text-indent:30px;
            color: #FFFFFF;
            padding: 10px;
        }
    }
}
</style>