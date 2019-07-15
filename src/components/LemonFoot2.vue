<!-- 底部页面 -->
<template>
  <div class="layout">
    <div class="content">
      <div class="item">
        <p class="title">柠檬悦读学生端APP</p>
        <div class="down-btn">
          <el-popover placement="top" trigger="hover" :enterable="false">
            <img style="width: 200px; margin: 0 auto" src="http://website.lemonread.com/studentsCode.png" alt="">
            <el-button type="text" slot="reference">
              <span class="btn-text">立即下载</span>
            </el-button>
          </el-popover>
        </div>
      </div>
      <div class="item">
        <p class="title">柠檬悦读教师端APP</p>
        <div class="down-btn">
          <el-popover placement="top" trigger="hover" :enterable="false">
            <img style="width: 200px; margin: 0 auto" src="http://website.lemonread.com/teachersCode.png" alt="">
              <span class="btn-text" slot="reference">立即下载</span>
          </el-popover>
        </div>
      </div>
      <div class="item">
        <p class="title">柠檬悦读家长端APP</p>
        <div class="down-btn">
          <el-popover placement="top" trigger="hover" :enterable="false">
            <img style="width: 200px; margin: 0 auto" src="http://website.lemonread.com/parentsCode.png" alt="">
            <el-button type="text" slot="reference">
              <span class="btn-text">立即下载</span>
            </el-button>
          </el-popover>
        </div>
      </div>
      <div class="item2">
        <p class="title">联系我们</p>
        <p class="phone">0755-86667517</p>
        <p class="day">周一到周五</p>
        <p>
          <span class="time">09:00-12:00</span>
          <span> &nbsp; &nbsp; </span>
          <span class="time">14:00-18:00</span>
        </p>
      </div>
    </div>
    <div class="footer">
      <div></div>
      <div class="center">
        <p class="link">
          <span>网站备案：<a target="_blank" href="http://www.miitbeian.gov.cn">粤ICP备18007912号-1</a></span>
          <span class="jiange">|</span>
          <span><a target="_blank" href="http://website.lemonread.com/lemomInternetCultureLicense.png">网络文化经营许可证</a></span>
          <span class="jiange">|</span>
          <span><a target="_blank" href="http://website.lemonread.com/lemomPublicationBusinessLicense.png">出版物经营许可证</a></span>
        </p>
        <div class="about">
          <div>关注我们</div>
          <el-popover v-model="show" placement="top" trigger="click" width="150" :enterable="false">
            <img style="width: 150px;" src="http://website.lemonread.com/weixin.jpg" alt="">
            <div class="weixin wei" slot="reference" @hover="show = true"></div>
          </el-popover>
          <a target="_blank" href="https://weibo.com/6563412120/profile?topnav=1&wvr=6"><div class="weibo wei"></div></a>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LemonFoot',
  data () {
    return {
      show: false
    }
  },
}

</script>
<style lang="less" scoped>
.layout {
  width: 100%;
  height: 270px;
  position: relative;
  background-color: #eee;
  .content {
    height: 210px;
    width: 1200px;
    margin: 0 auto;
    // margin-top: 80px;
    display: flex;
    justify-content: space-between;
    .item {
      height: 100%;
      .title {
        font-size: 18px;
        font-weight: 700;
        line-height: 40px;
        margin-top: 70px;
        color: #292929;
      }
      .down-btn {
        font-size: 16px;
        height: 22px;
        line-height: 22px;
        color: #2a2a2a;
        border: 1px solid #2a2a2a;
        width: 120px;
        border-radius: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn-text {
          color: #100806;
        }
      }
      .down-btn:hover {
        border: 1px solid #ffe226;
        background-color: #ffe226;
      }
    }
    .item2 {
      text-align: left;
      padding-top: 30px;
      .title {
        color: #565656;
        font-weight: 700;
        line-height: 40px;
      }
      .phone {
        font-size: 25px;
        font-weight: 700;
        color: #a8a8a8;
        line-height: 40px;
        margin-bottom: 10px;
      }
      .time {
        line-height: 40px;
        color: #575757;
      }
    }
  }
  .footer {
    height: 70px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .center {
      width: 1200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .link {
      font-size: 16px;
      color: #666;
      a {
        color: #666;
      }
      .jiange {
        padding: 0 10px;
      }
    }
    .about {
      display: flex;
      justify-content: space-around;
      align-items: center;
      color: #aaa;
      width: 210px;
      .wei {
        width: 47px;
        height: 47px;
        border-radius: 50%;
      }
      .weixin {
        background: url(http://webview.lemonread.com/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png) no-repeat;
        background-position: -94px 0px;
      }
      .weixin:hover {
        background-position: -141px 0px;
        cursor: pointer;
      }
      .weibo {
        background: url(http://webview.lemonread.com/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png) no-repeat;
        background-position: -0px 0px;
      }
      .weibo:hover {
        background-position: -47px 0px;
      }
    }
  }
}
</style>
