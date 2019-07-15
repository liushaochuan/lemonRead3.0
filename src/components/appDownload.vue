<!-- APP下载页面 -->
<template>
	<div>
		<div v-if="isDownload" class="down-box">
			<div class="down-head">
				<div class="head-top">
					<img class="left" :src="appInformation.roleLogo">
					<div class="head-content left">
						<p class="head-title">柠檬悦读{{appInformation.roleTypeStr}}</p>
						<p class="head-attribute">大小:&nbsp; {{appSize}}MB</p>
						<p class="head-attribute">版本:&nbsp; {{appVersion}}</p>
						<p class="head-icon">
							<i class="iconfont icon-safe"></i>安全&nbsp;&nbsp;&nbsp;&nbsp;
							<i class="iconfont icon-safe"></i>免费
						</p>
					</div>
					<div class="clearfix"></div>
				</div>
				<div class="head-bottom">
					<a v-if="appDownloadUrl" type="button" class="down-button" v-bind:href="appDownloadUrl" @click="appDownloadWX">{{buttonStr}}</a>
					<button v-else type="button" class="down-button">敬请期待</button>
				</div>
			</div>
			<div class="down-body">
				<swiper :options="swiperOption" ref="mySwiper" class="img-box">
					<swiper-slide v-for="item in appInformation.roleImgList" :key="item.index" class="img-item">
						<img class="item-img" :src="item.img">
					</swiper-slide>
				</swiper>
				<div class="body-presentation">
					<div class="presentation-titile">
						<p>应用简介:</p>
					</div>
					<div class="presentation">
						<p v-for="(item,index) in appInformation.rolePresentation" :key="item.index" :class="item.textIndent == 1 ? 'textIndex' : ''">{{item.str}}</p>
					</div>
				</div>
			</div>
		</div>
		<div v-else class="error-box">
			<img src="../images/download/error.png" class="error-img">
			<p>暂无数据</p>
		</div>
		<div class="foot-fill"></div>
		<div class="modal-box" v-if="showModal">
			<div class="modal-content">
				<img src="../images/download/windowsOpen.png" class="modal-img">
			</div>
		</div>
		<div class="mask" v-if="showModal" @click="closeModal" v-bind:style="{ height: clientHeight + 'px', width: clientWidth + 'px'}">
		</div>
	</div>
</template>
<script>
import fetch from '../util/fetch'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	name: 'appDownload',
	props: ['appInformation'],
	components: {
		swiper,
		swiperSlide,
	},
	data() {
		return {
      queryData: { // APK请求参数
      	baseUrl: 'http://lemonread.com/',
        client_type: 2, // 安装包类型,默认安卓
        role_type: 0 // 客户端类型
      },
      appSize: "0",
      appVersion: "v0.0.0",
      appDownloadUrl: "",
      buttonStr: "敬请期待",
      swiperOption: {
      	slidesPerView: 2,
      	slidesPerGroup: 2,
      	speed: 1000,
      },
      isDownload: true,
      showModal: false,
      clientWidth: 0,
      clientHeight: 0,
    }
  },
  mounted() {
  	this.clientWidth = window.innerWidth
  	this.clientHeight = window.innerHeight
  	if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      // iOS
      this.queryData.client_type = 3
    } else {
      // 安卓
      this.queryData.client_type = 2
    }
    this.getApkList()
  },
  methods: {
  	getApkList() {
  		this.queryData.role_type = this.appInformation.role_type
  		fetch.getApkList(this.queryData).then(response => {
  			const resData = response;
  			if (resData.errcode || resData.length == 0) {
  				return;
  			}
  			this.buttonStr = "立即下载"
  			this.appSize = (resData[0].apksize / 1024).toFixed(2)
  			this.appVersion = resData[0].version.slice(0, 6)
        //判断iPhone|iPad|iPod|iOS
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
          // IOS下载安装包直接跳转APPstore
          this.appDownloadUrl = this.appInformation.appDownloadUrl
        } else {
        	this.appDownloadUrl = resData[0].url
        }
      });
  	},
  	appDownloadWX() {
      //判断iPhone|iPad|iPod|iOS
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { // ios返回
      	return
        // IOS下载安装包直接跳转APPstore
      }
      if (/micromessenger/i.test(navigator.userAgent)) { // 微信内置浏览器打开提示浏览器打开
      	this.showModal = true;
      	return
      }
    },
    closeModal() {
    	this.showModal = false;
    },
  }
}

</script>
<style lang="less" scoped>
.down-box {
	padding: 16px;
	background-color: #eee;
}

.down-head,
.down-body {
	border: 1px solid #ccc;
	background-color: #fff;
}

.down-head {
	margin-bottom: 16px;
}

.head-top,
.head-bottom,
.down-body {
	padding: 16px;
}

.head-top {
	height: 80px;
	img {
		height: 100%;
		border-radius: 15px;
		border: 1px solid #E7EAEE;
	}

	.head-content {
		margin-left: 16px;

		p {
			text-align: left;
			color: #888;
		}

		.head-title {
			height: 30px;
			line-height: 30px;
			font-size: 1.5rem;
			color: #000;
		}

		.head-attribute {
			height: 15px;
			line-height: 15px;
		}

		.head-icon {
			height: 20px;
			line-height: 20px;
		}

		.iconfont {
			color: green;
		}
	}
}

.head-bottom {
	border-top: 1px solid #ccc;

	.down-button {
		display: block;
		width: 100%;
		height: 40px;
		line-height: 40px;
		background-color: green;
		border: none;
		outline: none;
		color: #fff;
		font-size: 1.5rem;
	}
}

.img-box {
	.img-item {
		width: 50%
	}

	img {
		width: 92%
	}
}

.body-presentation {
	margin-top: 24px;

	p {
		margin-top: 20px;
		line-height: 24px;
		text-align: left;
		font-size: 1.5rem;
	}

	.presentation-titile {
		margin-bottom: 10px;
	}

	.presentation {
		.textIndex {
			text-indent: 30px;
			margin-top: 0;
		}
	}
}

.foot-fill {
	height: 100%;
	width: 100%;
	background-color: #eee;
	position: fixed;
	top: 0;
	z-index: -10;
}

.error-box {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);

}

.error-img {
	width: 50%;
	margin: 20px auto;
}

.error-img+p {
	margin-top: 20px;
	font-size: 1.5rem;
}

.modal-box {
	width: 100%;
	position: absolute;
	top: 40px;
	left: 0;
	z-index: 11;

	.modal-content {
		display: inline-block;
		border-radius: 5px;
		padding: 0 30px;
		position: relative;
	}

	.modal-img {
		width: 90%;
	}
}

.mask {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	background: #FFFFFF;
}

</style>
