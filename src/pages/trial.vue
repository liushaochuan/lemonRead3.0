<!-- 申请试用页面 -->
<template>
  <div class="index-bg">
    <lemon-head></lemon-head>
    <div class="banner-box">
      <img src="http://website.lemonread.com/trialBanner.png" class="banner-bg">
      <div class="click-box" @click="goTrial"></div>
    </div>
    <div class="trial-top">
      <p class="trial-content">柠檬悦读是小柠檬教育科技旗下的国内领先的中小学智能分级阅读平台，平台提供“软件+硬件、智能+互动、能力+兴趣”的自适应阅读整体解决方案。产品包括：柠檬悦读APP（老师、家长、学生）、学生专用护眼阅读器。</p>
      <p class="trial-content">老师可利用平台的精编阅读作业题库，一键发布阅读/朗读作业，基于阅读测评报告，直观了解每位孩子的真实阅读能力，同时可实时监测孩子的课外阅读情况。平台在帮助老师提高阅读教学效率外，真正为老师解决阅读教学监测难、量化难等问题。</p>
      <p class="trial-content">孩子可通过平台的阅读能力测评，实现阅读能力精准定位，基于能力智能匹配适应书籍与制定阅读计划，通过平台激励机制与助学功能，可有效帮助孩子培养良好的阅读习惯，提升阅读能力。孩子专用的护眼阅读器系采用电子墨水屏，无背光/蓝光，适合各种光线下阅读，能有效保护孩子视力。</p>
      <p class="trial-content">目前，国内孩子的平均阅读量与阅读能力普遍低下，如何有效的激发孩子的阅读兴趣，培养孩子的阅读习惯，营造良好的阅读氛围是我们作为教育从业者一直奋力想解决的难题。柠檬悦读系列产品将分级阅读、助学功能、激励机制等功能有效结合，并以此打造一个始终贯穿阅读学习闭环的分级平台，同时联合三方跨屏互动，为孩子解决兴趣与习惯问题，从而改变孩子的阅读现状。</p>
    </div>
    <div class="trial-bootom" id="trialBox">
      <p class="trial-titile">学校试用申请</p>
      <p class="trial-subhead">Application for school trial</p>
      <div class="trial-box title-box">
        <p class="table-title">《智适应阅读实验班》申请表</p>
        <!-- <p class="table-date">申请日期： {{getFullYear}} 年 {{getMonth}} 月 {{getDate}} 日</p> -->
      </div>
      <div class="form-box">
        <label class="form-input form-input3">
          <span class="input-span">所在省份</span>
          <span class="input-span input-required">*</span>
          <input class="input-box" type="text" v-model="formInfo.province">
        </label>
        <label class="form-input form-input3">
          <span class="input-span">所在市/区/县</span>
          <span class="input-span input-required">*</span>
          <input class="input-box" type="text" v-model="formInfo.city">
        </label>
        <label class="form-input form-input3">
          <span class="input-span">学校名称</span>
          <span class="input-span input-required">*</span>
          <input class="input-box" type="text" v-model="formInfo.trialSchool">
        </label>
      </div>
      <div class="form-box">
        <label class="form-input form-input3">
          <span class="input-span">申请人姓名</span>
          <span class="input-span input-required">*</span>
          <input class="input-box" type="text" v-model="formInfo.trialName">
        </label>
        <label class="form-input form-input3">
          <span class="input-span">申请人职务</span>
          <input class="input-box" type="text" v-model="formInfo.trialDuty">
        </label>
        <label class="form-input form-input3">
          <span class="input-span">电话/邮箱</span>
          <span class="input-span input-required">*</span>
          <input class="input-box" type="text" v-model="formInfo.trialPhone">
        </label>
      </div>
      <div class="form-box">
        <label class="form-input form-input3">
          <span class="input-span">实验年级</span>
          <span class="input-span input-required">*</span>
          <input class="input-box" type="text" v-model="formInfo.trialGrade">
        </label>
        <label class="form-input form-input3">
          <span class="input-span">实验班级</span>
          <span class="input-span input-required">*</span>
          <input class="input-box" type="text" v-model="formInfo.trialClass">
        </label>
        <label class="form-input form-input3">
          <span class="input-span">班级学生人数</span>
          <span class="input-span input-required">*</span>
          <input class="input-box" type="text" v-model="formInfo.trialNum">
        </label>
      </div>
      <div class="form-box">
        <label class="form-input form-input2">
          <span class="input-span">学校地址</span>
          <span class="input-span input-required">*</span>
          <input class="input-box" type="text" v-model="formInfo.trialAddress">
        </label>
        <label class="form-input form-input2">
          <span class="input-span">学校网址</span>
          <input class="input-box" type="text" v-model="formInfo.trialSite">
        </label>
      </div>
      <div class="form-box">
        <label class="form-input form-input1">
          <span class="input-span">学校简介</span>
          <textarea class="input-box area-box" v-model="formInfo.trialIntroduce"></textarea>
        </label>
      </div>
      <div class="form-submit" @click="trialSubmit">提交申请</div>
      <!-- <p class="trial-titile">个人试用申请</p>
      <p class="trial-subhead subhead-phone">Personal trial application</p>
      <p class="trial-phone">请致电：0755-86667073</p> -->
    </div>
    <lemon-foot class="foot"></lemon-foot>
  </div>
</template>
<script>
import fetch from "../util/fetch";
import LemonHead from "../components/LemonHead";
import LemonFoot from "../components/LemonFoot";

export default {
  name: "smart",
  components: {
    LemonHead,
    LemonFoot
  },
  data() {
    return {
      baseUrl: "http://lemonread.com/",
      getFullYear: null,
      getMonth: null,
      getDate: null,
      formInfoStr: {
        province: "所在省份:",
        city: "所在市/区/县:",
        trialSchool: "学校名称:",
        trialName: "申请人姓名:",
        trialDuty: "申请人职务:",
        trialPhone: "电话/邮箱:",
        trialGrade: "实验年级:",
        trialClass: "实验班级:",
        trialNum: "班级学生人数:",
        trialAddress: "学校地址:",
        trialSite: "学校网址:",
        trialIntroduce: "学校简介:"
      },
      formInfo: {
        province: "",
        city: "",
        trialSchool: "",
        trialName: "",
        trialDuty: "",
        trialPhone: "",
        trialGrade: "",
        trialClass: "",
        trialNum: "",
        trialAddress: "",
        trialSite: "",
        trialIntroduce: ""
      }
    };
  },
  created() {
    let myDate = new Date();
    this.getFullYear = myDate.getFullYear();
    this.getMonth = myDate.getMonth() + 1;
    this.getDate = myDate.getDate();
  },
  beforeMount() {},
  computed: {},
  mounted: function() {},
  methods: {
    trialSubmit() {
      for (var key in this.formInfo) {
        let isCheck =
          key == "trialDuty" || key == "trialSite" || key == "trialIntroduce";
        if (this.formInfo[key] == "" && !isCheck) {
          this.$notify({
            title: "失败",
            message: "信息未完整,请检查填写信息",
            type: "error",
            duration: 2000
          });
          return;
        }
        if (this.formInfo[key] == "") {
          this.formInfo[key] = "无";
        }
      }
      let reqData = {
        baseUrl: "http://lemonread.com/",
        subject: this.formInfo.trialSchool,
        content: ""
      };
      if (this.formInfo.trialGrade.indexOf("年级") == -1) {
        reqData.subject = reqData.subject + this.formInfo.trialGrade + "年级";
      }
      if (this.formInfo.trialClass.indexOf("班") == -1) {
        reqData.subject = reqData.subject + this.formInfo.trialClass + "班";
      }
      reqData.subject = reqData.subject + "《智适应阅读实验班》申请表";
      for (var key in this.formInfo) {
        reqData.content += this.formInfoStr[key] + this.formInfo[key] + "\n";
      }
      // console.log("reqData", reqData);
      // return;
      fetch
        .sendEmail(reqData)
        .then(response => {
          const resData = response;
          if (resData.errcode) {
            this.$notify({
              title: "失败",
              message: resData.errmsg,
              type: "error",
              duration: 2000
            });
            return;
          }
          this.$notify({
            title: "操作成功",
            message: "申请发送成功",
            type: "success",
            duration: 2000
          });
        })
        .catch(err => {
          this.$notify({
            title: "失败",
            message: err,
            type: "error",
            duration: 2000
          });
        });
    },
    goTrial() {
      document.getElementById("trialBox").scrollIntoView();
    },
    triadlError() {
      this.$notify({
        title: "失败",
        message: resData.errmsg,
        type: "error",
        duration: 2000
      });
      return;
    }
  },
  watch: {}
};
</script>
<style lang='less' scoped>
.banner-box {
  position: relative;
}
.click-box {
  width: 18%;
  height: 60%;
  position: absolute;
  top: 20%;
  right: 20%;
  cursor: pointer;
}
.banner-bg {
  width: 100%;
}

.trial-top {
  background-image: url("../images/index/twillTop.png");
  background-size: 6px 4px;
  padding: 30px 0;
}

.trial-content {
  width: 960px;
  margin: 15px auto;
  padding: 0 15px;
  line-height: 26px;
  text-align: left;
  font-size: 1.05rem;
  letter-spacing: 1px;
  text-indent: 38px;
  color: #696969;
  box-sizing: border-box;
}

.trial-bootom {
  background-image: url("../images/index/twillBottom.png");
  background-size: 4px 6px;
  p {
    line-height: 26px;
    font-size: 1rem;
    letter-spacing: 1px;
    text-indent: 26px;
  }
  .trial-titile {
    line-height: 40px;
    font-size: 2.5rem;
    color: #292929;
  }
  .trial-subhead {
    line-height: 30px;
    margin-top: 10px;
    font-size: 1.5rem;
    letter-spacing: 0;
    color: #696969;
    text-transform: Uppercase;
    margin-bottom: 30px;
  }
  .subhead-phone {
    margin-bottom: 0;
  }
  .trial-phone {
    line-height: 30px;
    font-size: 1.5rem;
    letter-spacing: 0;
    color: #696969;
    padding: 70px 0;
    margin-bottom: 0;
  }
}

.trial-box {
  width: 960px;
  margin: 0 auto;
}
.title-box {
  height: 140px;
  position: relative;
  background-color: #fff;
  p {
    line-height: 30px;
    font-size: 1.5rem;
    letter-spacing: 0;
    color: #696969;
    position: absolute;
  }
  .table-title {
    color: #292929;
    letter-spacing: 1px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .table-date {
    font-size: 1rem;
    bottom: 10px;
    right: 10px;
  }
}

.form-box {
  width: 960px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.form-input {
  height: 50px;
  line-height: 50px;
  margin-top: 7px;
  border: none;
  outline: none;
  line-height: 40px;
  font-size: 1rem;
  padding-left: 10px;
  box-sizing: border-box;
  background-color: #fff;
  text-align: left;
  overflow: hidden;
  display: flex;
}

.form-input3 {
  width: 315px;
}

.form-input2 {
  width: 477px;
}
.form-input1 {
  line-height: 26px;
  width: 100%;
  height: 200px;
}

.input-span {
  height: 100%;
  line-height: 50px;
}

.input-required {
  color: red;
  height: 50px;
  line-height: 50px;
}

.input-box {
  flex-grow: 1;
  height: 100%;
  line-height: 50px;
  border: none;
  outline: none;
  font-size: 1rem;
  padding-left: 10px;
  padding: 0;
  box-sizing: border-box;
  padding-left: 5px;
  position: relative;
  top: -1px;
}

.area-box {
  line-height: 26px;
  margin-top: 13px;
}

.form-submit {
  width: 960px;
  margin: 0 auto;
  height: 50px;
  line-height: 50px;
  margin-top: 7px;
  margin-bottom: 70px;
  font-size: 1.3rem;
  color: #292929;
  background-color: #02c0a2;
  letter-spacing: 2px;
  cursor: pointer;
}

/* 960 */
@media only screen and (max-width: 1080px) {
  .index-bg {
    width: 1200px;
  }
}
</style>