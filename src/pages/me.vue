<template>
  <div class="page-box">
    <div class="modle modle1">
      <!-- <img src="http://advert.lemonread.com/%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC.jpg" alt=""> -->
      <div class="zezao">
        <p class="header">21天，<span>让孩子</span>爱上阅读</p>
        <p class="content">中英文智能分级阅读</p>
      </div>
    </div>
    <div class="modle modle2">
      <div class="header">
        <h1>柠檬悦读简介</h1>
        <h3>ABOUT US</h3>
      </div>
      <div>
        <p>柠檬悦读是国内领先的中小学智能分级阅读平台，致力于为广大中小学生中英文学习提供强大助力。</p>
        <p>平台结合多年为欧洲3000余所中小学提供分级阅读解决方案的实践经验，利用AI智能技术进行创新拟合，研发了一套适用于国内中小学的智能分级阅读体系，体系涵盖阅读能力测评、自适应学习系统、精选分级书城三大版块，产品包括：柠檬悦读APP系列、柠檬悦读器、柠檬悦读校园管理平台。</p>
        <p>柠檬悦读为学生、老师、家长开创了多元化互动式的阅读模式，支持关联式群文阅读、主题式阅读等创新阅读方式。学生通过阅读能力测评，平台智能匹配适应内容，能有效培养阅读习惯、提升阅读能力。老师与家长通过多维度阅读报告，实时掌握孩子阅读成长数据；平台的作业系统还可助力老师高效教学，最终实现自适应阅读教学的愿景。</p>
        <p>平台课外阅读内容精选自多方权威机构推荐书目，涵盖各类体裁与题材，课内阅读与教材同步，可满足中小学全面阅读需求。目前已于北京、上海、深圳、广州等地的多所重点中小学开展了教育合作，并帮助建立了“分级阅读实验班”及“数字图书阅览室”。</p>
        <p>柠檬悦读由一群深耕教育事业、对教育怀惴着改革创新梦想的年轻团队组成，旨在全方位助力中小学学生培养阅读习惯、提升阅读能力。柠檬的核心技术团队来自于腾讯、华为、中兴等知名科技公司，分级阅读研究中心核心成员来自于在智能分级阅读领域中拥有丰硕研究成果的美国蓝思教育公司，教研核心团队由知名学校语文教研员、特级语文教师组成。</p>
      </div>
    </div>
    <div class="modle modle3">
      <img src="http://advert.lemonread.com/justOne.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "me",
  data () {
    return {
      index: 0,
      keydownTime: 0,
      mousewheelTime: 0,
      aDom: null
    };
  },

  components: {},

  computed: {},

  methods: {
  }
}

</script>
<style lang='less' scoped>
.page-box {
  background-color: #f3f3f3;
}
.modle{
  width: 100%;
}
.modle1 {
  height: 612px;
  background: url(http://advert.lemonread.com/%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC.jpg) no-repeat;
  img {
    width: 100%;
  }
  .zezao {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    position: relative;
    .header {
      font-size: 50px;
      padding: 12.5px;
      // line-height: 75px;
      // height: 75px;
      background-color: #ffe226;
      width: 660px;
      position: absolute;
      left: 50%;
      top: 280px;
      margin-left: -330px;
      span {
        font-weight: 700;
      }
    }
    .content {
      font-size: 30px;
      line-height: 75px;
      color: #fff;
      font-weight: 100;
      position: absolute;
      top: 370px;
      left: 50%;
      margin-left: -135px;
    }
  }
}
.modle2 {
  width: 1070px;
  height: 780px;
  background-color: #fff;
  margin: 20px auto 0;
  padding: 65px;
  .header {
    h1 {
      font-size: 40px;
      line-height: 60px;
      font-weight: 700;
      color: #1e1e1e;
    }
    h3 {
      font-size: 30px;
      line-height: 40px;
      color: #898989;
      font-weight: lighter;
    }
  }
  p {
      font-size: 18px;
      line-height: 35px;
      margin-top: 35px;
      text-align: left;
      text-indent: 2em;
      font-weight: lighter;
    }
}
.modle3 {
  margin-top: 20px;
}
</style>