<!-- 产品概念页面 -->
<template>
    <div>
        <lemon-head></lemon-head>
        <div class="banner">
            <img class="banner-img" :src="banner">
            <div class="banner-title">
                <div class="banner-title-content">
                    <p>中文智能分级系统</p>
                    <div class="subhead">
                        <b class="border">智能分级</b><b class="border">智能匹配</b><b class="border border-none">帮助成长</b>
                    </div>
                </div>
            </div>
        </div>
        <div class="contrast">
            <!-- 描述过于详细暂隐藏 -->
            <!--             <div class="contrast-title">
                非平衡语料库
            </div>
            <div class="contrast-table">
                <table>
                    <tr>
                        <th>字</th>
                        <th>词</th>
                        <th>句</th>
                        <th>段</th>
                        <th>篇</th>
                    </tr>
                    <tr>
                        <td>
                            <div class="shadow-box">
                                <div class="shadow">
                                    <div class="border character-border"></div>
                                    <div class="border character-border"></div>
                                    <div class="border character-border"></div>
                                    <p>频率</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="shadow-box">
                                <div class="shadow">
                                    <div class="border word-border"></div>
                                    <div class="border word-border"></div>
                                    <div class="border word-border"></div>
                                    <p>频率</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="shadow-box">
                                <div class="shadow">
                                    <div class="border sentence-border"></div>
                                    <div class="border sentence-border"></div>
                                    <div class="border sentence-border"></div>
                                    <p>句式</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="shadow-box">
                                <div class="shadow">
                                    <div class="border paragraph-border"></div>
                                    <div class="border paragraph-border"></div>
                                    <p>段落</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="shadow-box">
                                <div class="shadow">
                                    <div class="border semantic-border"></div>
                                    <p>语义</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="line-box">
                            <div class="border border-line-right right">
                            </div>
                            <b class="border-patch"></b>
                        </td>
                        <td class="line-box">
                            <div class="border border-line-left left">
                            </div>
                            <div class="border border-line-right right">
                            </div>
                            <b class="border-patch"></b>
                        </td>
                        <td class="line-box">
                            <div class="border border-line-left left">
                            </div>
                            <div class="border border-line-right right">
                            </div>
                            <b class="border-patch"></b>
                        </td>
                        <td class="line-box">
                            <div class="border border-line-left left">
                            </div>
                            <div class="border border-line-right right">
                            </div>
                            <b class="border-patch"></b>
                        </td>
                        <td class="line-box end-box">
                            <div class="border border-line-left left">
                            </div>
                            <div class="border border-line-right right">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="line-box"></td>
                        <td class="line-box"></td>
                        <td class="line-box line-center">
                            <div class="border border-line-right right">
                                <b class="border-patch"></b>
                            </div>
                        </td>
                        <td class="line-box"></td>
                        <td class="line-box"></td>
                    </tr>
                </table>
            </div>
            <div class="contrast-title professor">
                专家标记
            </div>
            <div class="arrows">
                <img :src="arrows">
            </div>
            <div class="contrast-title result-title">
                平衡语料库
            </div>
            <div class="contrast-table result-table">
                <table>
                    <tr>
                        <th>字</th>
                        <th>词</th>
                        <th>句</th>
                        <th>段</th>
                        <th>篇</th>
                    </tr>
                    <tr>
                        <td>
                            <div class="shadow-box">
                                <div class="shadow">
                                    <div class="frequency-result">
                                        <div class="border frequency-border"></div>
                                        <div class="border frequency-border"></div>
                                        <div class="border frequency-border"></div>
                                    </div>
                                    <div class="frequency-result">
                                        <div class="border frequency-border"></div>
                                        <div class="border frequency-border"></div>
                                        <div class="border frequency-border"></div>
                                    </div>
                                    <div class="frequency-result">
                                        <div class="border frequency-border"></div>
                                        <div class="border frequency-border"></div>
                                        <div class="border frequency-border"></div>
                                    </div>
                                    <p>频率</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="shadow-box">
                                <div class="shadow">
                                    <div class="frequency-result">
                                        <div class="border frequency-border word-border"></div>
                                        <div class="border frequency-border word-border"></div>
                                    </div>
                                    <div class="frequency-result">
                                        <div class="border frequency-border word-border"></div>
                                        <div class="border frequency-border word-border"></div>
                                    </div>
                                    <div class="frequency-result">
                                        <div class="border frequency-border word-border"></div>
                                        <div class="border frequency-border word-border"></div>
                                    </div>
                                    <p>频率</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="shadow-box">
                                <div class="shadow sentence-result">
                                    <div class="sentence-result">
                                        <div class="border sentence-border"></div>
                                    </div>
                                    <div class="sentence-result">
                                        <div class="border sentence-border"></div>
                                    </div>
                                    <div class="sentence-result">
                                        <div class="border sentence-border"></div>
                                    </div>
                                    <div class="sentence-result">
                                        <div class="border sentence-border"></div>
                                    </div>
                                    <p>句式</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="shadow-box">
                                <div class="shadow">
                                    <div class="sentence-result">
                                        <div class="border sentence-border paragraph-border"></div>
                                    </div>
                                    <div class="sentence-result">
                                        <div class="border sentence-border paragraph-border"></div>
                                    </div>
                                    <div class="sentence-result">
                                        <div class="border sentence-border paragraph-border"></div>
                                    </div>
                                    <p>段落</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="shadow-box">
                                <div class="shadow">
                                    <div class="sentence-result">
                                        <div class="border semantic-border"></div>
                                    </div>
                                    <p>语义</p>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="line-box">
                            <div class="border border-line-right right">
                            </div>
                            <b class="border-patch"></b>
                        </td>
                        <td class="line-box">
                            <div class="border border-line-left left">
                            </div>
                            <div class="border border-line-right right">
                            </div>
                            <b class="border-patch"></b>
                        </td>
                        <td class="line-box">
                            <div class="border border-line-left left">
                            </div>
                            <div class="border border-line-right right">
                            </div>
                            <b class="border-patch"></b>
                        </td>
                        <td class="line-box">
                            <div class="border border-line-left left">
                            </div>
                            <div class="border border-line-right right">
                            </div>
                            <b class="border-patch"></b>
                        </td>
                        <td class="line-box end-box">
                            <div class="border border-line-left left">
                            </div>
                            <div class="border border-line-right right">
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="line-box"></td>
                        <td class="line-box"></td>
                        <td class="line-box line-center">
                            <div class="border border-line-right right">
                                <b class="border-patch"></b>
                            </div>
                        </td>
                        <td class="line-box"></td>
                        <td class="line-box"></td>
                    </tr>
                </table>
            </div> -->
            <div class="contrast-title professor appraisal">
                <p>评测学生阅读能力值</p>
            </div>
            <div class="arrows">
                <img :src="arrows">
            </div>
            <div class="arithmetic-result arithmetic-line">
                <div class="result-box result-left">
                    <line-scroll :colorNum="colorNumOne">
                        <div class="result-number">
                            <div>
                                0 C
                            </div>
                            <div>
                                <number-one :initializeNumber="initializeOne" :resultNumber="initializeTwo" @numberOne="numberOneIsDone"></number-one>
                            </div>
                        </div>
                    </line-scroll>
                </div>
                <div class="result-box result-middle">
                    <transition name="numberAnimationTwo">
                        <div class="result-line-two" v-if="lineOneIsDone" style="borderBottom: '8px solid #FFDF6E'">
                            <animation-two class="result-number" :initialize="initializeTwo" :result="initializeThree" @numberTwo="numberTwoIsDone">
                            </animation-two>
                        </div>
                    </transition>
                </div>

                <div class="result-box result-right">
                    <transition name="numberAnimationThree">
                        <div class="result-line-three" v-if="lineTwoIsDone" style="borderBottom: '8px solid #FD9603'">
                            <animation-three class="result-number" :initialize="initializeThree" :result="initializeFour">
                            </animation-three>
                        </div>
                    </transition>
                </div>
            </div>
            <div class="contrast-title professor appraisal">
                <p>按学生阅读能力值匹配相应图书</p>
            </div>
            <div class="arrows">
                <img :src="arrows">
            </div>
            <div class="arithmetic-result">
                <div class="result-box result-left">
                    <div class="result-img-box">
                        <div class="result-img-item">
                            <div class="result-img-number">
                                <number-scroll :initializeNumber="initializeOne" :resultNumber="resultOne"></number-scroll>
                            </div>
                        </div>
                        <div class="result-img-item result-img02">
                            <div class="result-img-number">
                                <number-scroll :initializeNumber="initializeOne" :resultNumber="resultTwo"></number-scroll>
                            </div>
                        </div>
                        <div class="result-img-item result-img03">
                            <div class="result-img-number">
                                <number-scroll :initializeNumber="initializeOne" :resultNumber="resultThree"></number-scroll>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="result-box result-middle">
                    <div class="result-img-box">
                        <div class="result-img-item result-img04">
                            <div class="result-img-number">
                                <number-scroll :initializeNumber="initializeTwo" :resultNumber="resultFour"></number-scroll>
                            </div>
                        </div>
                        <div class="result-img-item result-img05">
                            <div class="result-img-number">
                                <number-scroll :initializeNumber="initializeTwo" :resultNumber="resultFive"></number-scroll>
                            </div>
                        </div>
                        <div class="result-img-item result-img06">
                            <div class="result-img-number">
                                <number-scroll :initializeNumber="initializeTwo" :resultNumber="resultSix"></number-scroll>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="result-box result-right">
                    <div class="result-img-box">
                        <div class="result-left-img">
                            <div class="result-img-item result-img07">
                                <div class="result-img-number">
                                    <number-scroll :initializeNumber="initializeThree" :resultNumber="resultSeven"></number-scroll>
                                </div>
                            </div>
                            <div class="result-img-item result-img08">
                                <div class="result-img-number">
                                    <number-scroll :initializeNumber="initializeThree" :resultNumber="resultEight"></number-scroll>
                                </div>
                            </div>
                            <div class="result-img-item result-img09">
                                <div class="result-img-number">
                                    <number-scroll :initializeNumber="initializeThree" :resultNumber="resultNine"></number-scroll>
                                </div>
                            </div>
                        </div>
                        <div class="result-right-img">
                            <div class="result-img-item result-img10">
                                <div class="result-img-number">
                                    <number-scroll :initializeNumber="initializeFour" :resultNumber="resultTen"></number-scroll>
                                </div>
                            </div>
                            <div class="result-img-item result-img11">
                                <div class="result-img-number">
                                    <number-scroll :initializeNumber="initializeFour" :resultNumber="resultEleven"></number-scroll>
                                </div>
                            </div>
                            <div class="result-img-item result-img12">
                                <div class="result-img-number">
                                    <number-scroll :initializeNumber="initializeFour" :resultNumber="resultTwelve"></number-scroll>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner outside">
            <img class="banner-img" :src="outside">
            <div class="banner-title">
                <div class="banner-title-content">
                    <p>中小学课外阅读解决方案</p>
                    <div class="subhead">
                        读前、读中、读后全程多方位保障阅读效果
                    </div>
                </div>
            </div>
        </div>
        <div class="banner teaching">
            <img class="banner-img" :src="teaching">
            <div class="banner-title">
                <div class="banner-title-content">
                    <p>阅读教学解决方案</p>
                    <div class="subhead">
                        老师轻松进行全班阅读教学
                    </div>
                </div>
            </div>
        </div>
        <ul class="teach-box">
            <li v-for="(item,index) in teachList" class="teach-item left" @mouseover='iconOver(index)' @mouseout='iconOut(index)'>
                <div class="icon-box">
                    <img v-if="!item.activeIcon" :src="item.iconImg">
                    <img v-else :src="item.activeIconImg">
                </div>
                <p>{{item.title}}</p>
            </li>
        </ul>
        <div class="clearfix"></div>
        <lemon-foot class="foot"></lemon-foot>
    </div>
</template>
<script>
import LemonHead from '../components/LemonHead';
import LemonFoot from '../components/LemonFoot';
// 数字动态加载组件
import numberScroll from '../components/numberScroll';
// 线条动态架加载组件
import lineScroll from '../components/lineScroll';
import numberOne from '../components/numberOne';
import animationTwo from '../components/animationTwo';
import animationThree from '../components/animationThree';

import banner from '@/images/product/banner.jpg';
import arrows from '@/images/product/arrows.png';
import outside from '@/images/product/outside.jpg';
import out from '@/images/product/out.jpg';
import teaching from '@/images/product/teaching.jpg';
import icon01 from '@/images/product/icon01.png';
import icon02 from '@/images/product/icon02.png';
import icon03 from '@/images/product/icon03.png';
import icon04 from '@/images/product/icon04.png';
import icon05 from '@/images/product/icon05.png';
import icon06 from '@/images/product/icon06.png';
import icon11 from '@/images/product/icon11.png';
import icon12 from '@/images/product/icon12.png';
import icon13 from '@/images/product/icon13.png';
import icon14 from '@/images/product/icon14.png';
import icon15 from '@/images/product/icon15.png';
import icon16 from '@/images/product/icon16.png';

export default {
    name: 'about',
    components: {
        LemonHead,
        LemonFoot,
        numberScroll,
        lineScroll,
        numberOne,
        animationTwo,
        animationThree,
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
            banner: banner,
            arrows: arrows,
            outside: outside,
            out: out,
            teaching: teaching,
            initializeOne: 0,
            initializeTwo: 600,
            initializeThree: 800,
            initializeFour: 1000,
            resultOne: 150,
            resultTwo: 230,
            resultThree: 300,
            resultFour: 620,
            resultFive: 650,
            resultSix: 700,
            resultSeven: 840,
            resultEight: 910,
            resultNine: 980,
            resultTen: 1100,
            resultEleven: 1200,
            resultTwelve: 1300,
            lineOneIsDone: false,
            lineTwoIsDone: false,
            colorNumOne: 'E1E1E1',
            colorNumTwo: 'FFDF6E',
            colorNumThree: 'FD9603',
            teachList: [
                { title: "精编阅读作业题库", iconImg: icon01, activeIconImg: icon11, activeIcon: false },
                { title: "教师一键发布班级阅读作业", iconImg: icon02, activeIconImg: icon12, activeIcon: false },
                { title: "自动批改，老师轻松检查学生完成情况", iconImg: icon03, activeIconImg: icon13, activeIcon: false },
                { title: "自动统计，学生阅读效果量化", iconImg: icon04, activeIconImg: icon14, activeIcon: false },
                { title: "实时数据跟踪，学生阅读学情全掌握", iconImg: icon05, activeIconImg: icon15, activeIcon: false },
                { title: "学生求助、老师点评、互动交流读书圈", iconImg: icon06, activeIconImg: icon16, activeIcon: false }
            ]
        }
    },
    methods: {
        // 教学列表移入
        iconOver: function(index) {
            this.teachList[index].activeIcon = true
        },
        iconOut: function(index) {
            this.teachList.forEach(item => {
                item.activeIcon = false
            });
        },
        numberOneIsDone: function() {
            this.lineOneIsDone = true
        },
        numberTwoIsDone: function() {
            this.lineTwoIsDone = true
            // console.log('this.lineTwoIsDone',this.lineTwoIsDone)
        },
    }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.banner {
    width: 100%;
    position: relative;
}

.banner-img {
    width: 100%;
}

.banner-title {
    width: 100%;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    .banner-title-content {
        width: 1200px;
        margin: 0 auto;
        p {
            font-size: 2.8rem;
            color: #FFFFFF;
            letter-spacing: 6px;
            font-weight: 100;
        }
        .subhead {
            font-size: 1.5rem;
            color: #FFFFFF;
            margin-top: 30px;
            letter-spacing: 4px;
            font-weight: 100;
            .border {
                display: inline-block;
                border-right: 2px solid #fff;
                margin-left: 15px;
                margin-right: 0;
                padding-right: 15px;
            }
            .border-none {
                border-right: none;
            }
        }
    }
}

.contrast {
    width: 1200px;
    margin: 50px auto;
    .contrast-title {
        display: inline-block;
        font-size: 1.3rem;
        color: #fff;
        padding: 15px;
        background-color: #A0A0A0;
        border-radius: 10px;
        letter-spacing: 4px;
    }
    .contrast-table {
        width: 900px;
        margin: 20px auto;
        table {
            width: 100%;
            th {
                color: #A0A0A0;
                line-height: 50px;
                font-size: 1.2rem;
            }
            th,
            td {
                width: 20%;
                .shadow-box {
                    width: 80%;
                    margin: 0 auto;
                    border-radius: 10px;
                    box-shadow: 6px 6px 0 #E2DEDE;
                    .shadow {
                        color: #fff;
                        padding: 10px 30px;
                        background-color: #A0A0A0;
                        border-radius: 10px;
                        box-shadow: 3px 3px 0 #B7B7B7;
                        .border {
                            border-radius: 5px;
                            margin: 20px auto;
                            background-color: #fff;
                        }
                        .character-border {
                            width: 40px;
                            height: 40px;
                        }
                        .word-border {
                            width: 60px;
                            height: 40px;
                        }
                        .sentence-border {
                            width: 100%;
                            height: 40px;
                        }
                        .paragraph-border {
                            width: 100%;
                            height: 70px;
                        }
                        .semantic-border {
                            width: 100%;
                            height: 160px;
                        }
                        p {
                            line-height: 30px;
                            letter-spacing: 4px;
                        }
                    }
                }
            }
            .line-box {
                height: 50px;
                position: relative;
                .border {
                    width: 50%;
                    height: 100%;
                    box-sizing: border-box;
                }
                .border-line-left {
                    border-bottom: 1px solid #A0A0A0;
                }
                .border-line-right {
                    border-bottom: 1px solid #A0A0A0;
                    border-left: 1px solid #A0A0A0;
                }
                .border-patch {
                    width: 2px;
                    height: 1px;
                    border-bottom: 1px solid #A0A0A0;
                    position: absolute;
                    bottom: 0;
                    right: -2px;
                }
            }
            .end-box .border-line-right {
                border-bottom: none;
            }
            .line-center {
                .border-line-right {
                    border-bottom: none;
                    position: relative;
                }
                .border-patch {
                    width: 1px;
                    height: 2px;
                    border-bottom: none;
                    border-left: 1px solid #A0A0A0;
                    left: -1px;
                    top: -2px;
                }
            }
        }
    }
    .professor {
        padding: 0;
        display: block;
        background-color: #fff;
        color: #666666;
    }
    .arrows {
        width: 40px;
        margin: 20px auto;
        img {
            width: 100%;
        }
    }
    .result-title {
        background-color: #FDC503;
        color: #fff;
    }
    .result-table table {
        td {
            vertical-align: middle;
            .shadow-box {
                box-shadow: 6px 6px 0 #FFF1B7;
                .shadow {
                    padding: 10px;
                    background-color: #FDC503;
                    box-shadow: 3px 3px 0 #FFDF5D;
                    .frequency-result {
                        width: 100%;
                        height: 40px;
                        margin: 20px 0;
                        .frequency-border {
                            display: inline-block;
                            width: 30%;
                            height: 100%;
                            margin: 0;
                        }
                        .word-border {
                            width: 40%;
                        }
                    }
                    .sentence-result {
                        margin: 20px 20px;
                        .sentence-border {
                            height: 25px;
                        }
                        .paragraph-border {
                            height: 40px;
                        }
                        .semantic-border {
                            margin: 0;
                        }
                    }
                }
            }
        }
        .line-box {
            .border-line-left {
                border-bottom: 1px solid #FDC503;
            }
            .border-line-right {
                border-bottom: 1px solid #FDC503;
                border-left: 1px solid #FDC503;
            }
            .border-patch {
                border-bottom: 1px solid #FDC503;
            }
        }
        .end-box .border-line-right {
            border-bottom: none;
        }
        .line-center {
            .border-line-right {
                border-bottom: none;
            }
            .border-patch {
                border-bottom: none;
                border-left: 1px solid #FDC503;
            }
        }
    }
    .arithmetic-result {
        width: 1000px;
        height: 500px;
        margin: 50px auto;
        display: flex;
        justify-content: space-between;
        .result-left {
            width: 30%;
            .result-line {
                border-bottom: 8px solid #E1E1E1;
            }
        }
        .result-middle {
            width: 30%;
            .result-line-two {
                border-bottom: 8px solid #FFDF6E;
            }
        }
        .result-right {
            width: 40%;
            display: flex;
            justify-content: space-between;
            .result-line-three {
                border-bottom: 8px solid #FD9603;
            }
            .result-img-box {
                display: flex;
                justify-content: space-between;
            }
        }
        .result-box {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .result-line {
                width: 100%;
                position: relative;
                .result-number {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    font-size: 1.3rem;
                    color: #A0A0A0;
                    position: absolute;
                    top: -30px;
                    left: 0;
                }
            }
            .result-img-box {
                .result-img-item {
                    width: 93px;
                    height: 122px;
                    margin-top: 30px;
                    background-image: url('../images/product/background.jpg');
                    background-position: 0 0;
                    background-repeat: no-repeat;
                    position: relative;
                    .result-img-number {
                        color: #363636;
                        padding: 5px;
                        background-color: #FFDF6E;
                        position: absolute;
                        right: -10px;
                        bottom: 0;
                    }
                }
                .result-img02 {
                    background-position: 0 -122px;
                }
                .result-img03 {
                    background-position: 0 -244px;
                }
                .result-img04 {
                    background-position: -93px 0;
                }
                .result-img05 {
                    background-position: -93px -122px;
                }
                .result-img06 {
                    background-position: -93px -244px;
                }
                .result-img07 {
                    background-position: -186px 0;
                }
                .result-img08 {
                    background-position: -186px -122px;
                }
                .result-img09 {
                    background-position: -186px -244px;
                }
                .result-img10 {
                    background-position: -279px 0;
                }
                .result-img11 {
                    background-position: -279px -122px;
                }
                .result-img12 {
                    background-position: -279px -244px;
                }
            }
        }
    }
    .arithmetic-line {
        height: 10px !important;
    }
}

.outside {
    .banner-title-content {
        text-align: right;
    }
}

.teaching {
    .banner-title-content {
        text-align: left;
        .subhead,
        p {
            color: #000;
        }
    }
}

.teach-box {
    width: 1000px;
    margin: 100px auto;
    .teach-item {
        width: 33.33%;
        margin-bottom: 90px;
        .icon-box {
            width: 170px;
            margin: 0 auto;
            img {
                width: 100%;
            }
        }
        p {
            text-align: center;
            margin-top: 30px;
            letter-spacing: 2px;
            color: #A0A0A0;
        }
    }
}

.appraisal p {
    font-size: 2.8rem;
    letter-spacing: 6px;
    font-weight: 100;
    color: #666666;
}

.result-line-two,
.result-line-three {
    width: 100%;
    position: relative;
    .result-number {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 1.3rem;
        color: #A0A0A0;
        position: absolute;
        top: -30px;
        left: 0;
    }
}

.numberAnimationTwo-enter-active,
.numberAnimationTwo-leave-active {
    transition: all 1.5s ease-in
}

.numberAnimationTwo-enter,
.numberAnimationTwo-leave-to {
    width: 0;
}


.numberAnimationThree-enter-active,
.numberAnimationThree-leave-active {
    transition: all 1.5s ease-in
}

.numberAnimationThree-enter,
.numberAnimationThree-leave-to {
    width: 0;
}

@media only screen and (max-width: 1220px) {
    .banner-title .banner-title-content,
    .contrast,
    .teach-box {
        width: 900px;
    }
    .banner-title .banner-title-content p,
    .appraisal p {
        font-size: 2.6rem;
    }
    .banner-title .banner-title-content {
        .subhead {
            font-size: 1.4rem;
            margin-top: 28px;
            .border {
                margin-left: 14px;
                padding-right: 14px;
            }
        }
    }
    .outside,
    .teaching {
        .banner-title .banner-title-content {
            p {
                letter-spacing: 4px;
            }
            .subhead {
                letter-spacing: 2px;
            }
        }
    }
    .contrast {
        margin: 35px auto;
        .contrast-table,
        .arithmetic-result {
            width: 100%;
        }
        .arrows {
            width: 34px;
            margin: 16px auto;
        }
        .arithmetic-result {
            height: 460px;
        }
    }
    .teach-box {
        margin: 90px auto;
        .teach-item {
            margin-bottom: 70px;
            p {
                margin-top: 25px;
            }
            .icon-box {
                width: 150px;
            }
        }
    }
}

@media only screen and (max-width: 992px) {
    .banner-title .banner-title-content,
    .contrast,
    .teach-box {
        width: 700px;
    }
    .banner-title .banner-title-content p,
    .appraisal p {
        font-size: 2.4rem;
    }
    .banner-title .banner-title-content {
        .subhead {
            font-size: 1.3rem;
            margin-top: 26px;
            .border {
                margin-left: 13px;
                padding-right: 13px;
            }
        }
    }
    .outside,
    .teaching {
        .banner-title .banner-title-content {
            p {
                letter-spacing: 2px;
            }
            .subhead {
                letter-spacing: 1px;
            }
        }
    }
    .contrast {
        margin: 35px auto;
        .arithmetic-result {
            height: 460px;
        }
    }
    .teach-box {
        margin: 70px auto;
        .teach-item {
            margin-bottom: 50px;
            p {
                margin-top: 20px;
                letter-spacing: 0;
                padding: 0 10px;
            }
            .icon-box {
                width: 130px;
            }
        }
    }
}

@media only screen and (max-width: 768px) {
    .banner-title .banner-title-content,
    .contrast,
    .teach-box {
        width: 500px;
    }
    .banner-title .banner-title-content p,
    .appraisal p {
        font-size: 2.2rem;
    }
    .banner-title .banner-title-content {
        .subhead {
            font-size: 1.2rem;
            margin-top: 24px;
            .border {
                margin-left: 11px;
                padding-right: 11px;
            }
        }
    }
    .outside,
    .teaching {
        .banner-title .banner-title-content {
            p {
                letter-spacing: 1px;
            }
            .subhead {
                letter-spacing: 0;
            }
        }
    }
    .contrast {
        margin: 35px auto;
        .arithmetic-result {
            margin: 40px auto;
        }
    }
    .teach-box {
        margin: 50px auto;
        .teach-item {
            margin-bottom: 40px;
            p {
                margin-top: 18px;
            }
            .icon-box {
                width: 110px;
            }
        }
    }
}

@media only screen and (max-width: 540px) {
    .banner-title .banner-title-content,
    .contrast,
    .teach-box {
        width: 460px;
    }
    .banner-title .banner-title-content p,
    .appraisal p {
        font-size: 2rem;
    }
    .banner-title .banner-title-content {
        .subhead {
            font-size: 1.1rem;
            margin-top: 20px;
            letter-spacing: 1px;
            .border {
                margin-left: 10px;
                padding-right: 10px;
            }
        }
    }
    .outside,
    .teaching {
        .banner-title .banner-title-content p {
            letter-spacing: 0;
        }
    }
    .contrast {
        .arrows {
            width: 26px;
        }
        margin: 35px auto;
        .arithmetic-result {
            margin: 30px auto;
            .result-left,
            .result-middle {
                width: 25%;
            }
            .result-right {
                width: 50%;
                .result-img-box>div {
                    width: 50%;
                    overflow: hidden;
                }
            }
            .result-box .result-img-box .result-img-item .result-img-number {
                right: 0;
            }
        }
    }
    .teach-box {
        margin: 40px auto;
        .teach-item {
            margin-bottom: 30px;
            p {
                margin-top: 16px;
            }
            .icon-box {
                width: 90px;
            }
        }
    }
}

@media only screen and (max-width: 460px) {
    .banner-title .banner-title-content,
    .contrast,
    .teach-box {
        width: 400px;
    }
    .banner-title .banner-title-content p,
    .appraisal p {
        font-size: 1.8rem;
    }
    .banner-title .banner-title-content {
        .subhead {
            font-size: 1rem;
            margin-top: 18px;
            letter-spacing: 0;
            .border {
                margin-left: 8px;
                padding-right: 8px;
            }
        }
    }
    .contrast {
        .arrows {
            width: 18px;
        }
        margin: 30px auto;
        .arithmetic-result {
            margin: 25px auto;
            .result-left,
            .result-middle {
                width: 25%;
            }
            .result-right {
                width: 50%;
            }
        }
    }
    .teach-box {
        margin: 30px auto;
        .teach-item {
            margin-bottom: 20px;
            p {
                margin-top: 14px;
            }
            .icon-box {
                width: 70px;
            }
        }
    }
}

@media only screen and (max-width: 400px) {
    .banner-title .banner-title-content,
    .contrast,
    .teach-box {
        width: 320px;
    }
    .banner-title .banner-title-content p,
    .appraisal p {
        font-size: 1.7rem;
    }
    .banner-title .banner-title-content {
        .subhead {
            margin-top: 16px;
            .border {
                margin-left: 6px;
                padding-right: 6px;
            }
        }
    }
    .contrast {
        .arithmetic-result {
            margin: 20px auto;
            .result-box .result-img-box .result-img-item .result-img-number {
                right: 10px;
            }
        }
    }
    .teach-box {
        margin: 28px auto;
        .teach-item {
            margin-bottom: 18px;
            p {
                margin-top: 14px;
            }
            .icon-box {
                width: 60px;
            }
        }
    }
}

@media only screen and (max-width: 320px) {
    .banner-title .banner-title-content,
    .contrast,
    .teach-box {
        width: 278px;
    }
    .banner-title .banner-title-content p,
    .appraisal p {
        font-size: 1.5rem;
    }
    .banner-title .banner-title-content {
        .subhead {
            margin-top: 14px;
            .border {
                margin-left: 6px;
                padding-right: 6px;
            }
        }
    }
    .contrast .arithmetic-result .result-box .result-img-box .result-img-item .result-img-number {
        right: 20px;
    }
    .teach-box {
        margin: 26px auto;
        .teach-item {
            margin-bottom: 16px;
            p {
                margin-top: 10px;
            }
        }
    }
}

</style>
