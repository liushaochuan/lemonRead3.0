<!-- 登录按钮组件 -->
<template>
	<div class="box" :class="{ boxActive: isUser }">
		<b v-if="!isUser" class="signup-box" @click="signupOpen">
			登录
		</b>
		<transition name="fade">
			<div class="modal" v-if="showSignup">
				<div class="modal-content">
					<i class="iconfont icon-guanbi" @click="signupClose"></i>
					<div class="form-box">
						<!-- <img src="../images/index/lemonBlack.png"> -->
						<sign-up v-if="formState == 1" :signupForm="signupForm" @userIsSignup="userSignuped">
							<el-form-item class="input-box input-box-forget">
								<b class="input-forget click-hover" @click="goUserForget">忘记密码</b>
								<b class="input-border"></b>
								<b class="input-register click-hover" @click="goUserSignip">立即注册</b>
							</el-form-item>
						</sign-up>
						<sign-in v-if="formState == 2" :signinForm="signinForm" @userIsSignin="userSignined">
						</sign-in>
						<forget-password v-if="formState == 3" :forgetForm="forgetForm" @userIsForget="userForgeted">
						</forget-password>
					</div>
				</div>
			</div>
		</transition>
		<div v-if="isUser" class="user-navbar-box" @mouseover='userOpen' @mouseout='userClose'>
			<b class="signup-box user-box">{{signupName}}</b>
			<transition name="fade">
				<ul v-show="showUserNavbar" class="user-navbar">
					<li class="user-navbar-item" @click="goAdmin">进入管理</li>
					<li class="user-navbar-item" @click="updatePassword">修改密码</li>
					<li class="user-navbar-item" @click="userQuit">退出</li>
				</ul>
			</transition>
		</div>
		<transition name="fade">
			<div class="modal" v-if="showUpdate">
				<div class="modal-content">
					<i class="iconfont icon-guanbi" @click="updateClose"></i>
					<div class="form-box">
						<!-- <img src="../images/index/lemonBlack.png"> -->
						<update-password :updateForm="updateForm" @userIsUpdate="userUpdated"></update-password>
					</div>
				</div>
			</div>
		</transition>
		<transition name="fade">
			<div class="modal" v-if="showNotify">
				<div class="modal-content">
					<i class="iconfont icon-guanbi" @click="notofyClose"></i>
					<div class="form-box">
						<!-- <img src="../images/index/lemonBlack.png"> -->
						<p class="notify-title">您不是我们的管理员,进入管理请联系我们</p>
						<p class="notify-title notify-bottom">客服电话：400-6610606</p>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>
<script>
import signIn from './signIn';
import signUp from './signUp';
import forgetPassword from './forgetPassword';
import updatePassword from './updatePassword';

export default {
	name: 'userInteraction',
	components: {
		signIn,
		signUp,
		forgetPassword,
		updatePassword,
	},
	data() {
		return {
			formState: 1,
			isUser: false,
			showUserNavbar: false,
			showSignup: false,
			showUpdate: false,
			showNotify: false,
			user: null,
			signupName: '',
			signupForm: {
				signupName: '',
				signupPassword: '',
			},
			signinForm: {
				signinName: '',
				signinVer: '',
				signinPassword: '',
			},
			forgetForm: {
				forgetName: '',
				forgetVer: '',
				forgetPassword: '',
				reForgetPassword: '',
			},
			updateForm: {
				updatePassword: '',
				reUpdatePassword: '',
			},
		}
	},
	mounted() {
		let that = this
		that.isUser = that.sessionGetObj("user").userPhone
		that.signupName = that.sessionGetObj("user").userPhone
		//创建RTCPeerConnection接口
		let conn = new RTCPeerConnection({
			iceServers: []
		})
		let noop = function() {}
		conn.onicecandidate = function(ice) {
			if (ice.candidate) {
				//使用正则获取ip
				let ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/
				let ip_addr = ip_regex.exec(ice.candidate.candidate)[1];
				that.sessionSetObj("userIp", ip_addr)
				conn.onicecandidate = noop
			}
		}
		//随便创建一个叫狗的通道(channel)
		conn.createDataChannel('dog')
		//创建一个SDP协议请求
		conn.createOffer(conn.setLocalDescription.bind(conn), noop)
		if (that.isUser == "admin") {
			that.isAdmin = true
		}
	},
	methods: {
		signupOpen: function() {
			this.formState = 1
			this.showSignup = true;
		},
		signupClose() {
			this.showSignup = false;
		},
		goUserSignip() {
			this.formState = 2
		},
		goUserForget() {
			this.formState = 3
		},
		userOpen() {
			this.showUserNavbar = true;
		},
		userClose() {
			this.showUserNavbar = false;
		},
		updatePassword() {
			this.showUpdate = true
		},
		updateClose() {
			this.showUpdate = false
		},
		goAdmin() {
			if (this.signupName == "admin") {
				this.$router.push({ path: "admin" })
			}else {
				this.showNotify = true
			}
		},
		notofyClose() {
			this.showNotify = false
		},
		userSignuped(userPhone) {
			this.isUser = true
			this.showSignup = false;
			this.signupName = userPhone;
		},
		userSignined(userPhone) {
			this.formState = 1
			this.signupForm.signupName = userPhone;
		},
		userForgeted(userPhone) {
			this.formState = 1
			this.signupForm.signupName = userPhone;
		},
		userUpdated() {
			this.showUpdate = false
		},
		userQuit() {
			this.sessionSetObj("user", "")
			this.sessionSetObj("token", "")
			this.showUserNavbar = false;
			this.isUser = false
		},
	},
}

</script>
<style>
.input-box {
	display: block;
	width: 300px;
	margin: 0 auto;
	margin-top: 20px;
	position: relative;
}

.input-border {
	display: inline-block;
	width: 1px;
	height: 10px;
	border-right: 1px solid #939393;
	margin: 0 10px;
}

.signup-button {
	font-size: 1rem;
	background: #FDCC04;
	border: 1px solid #FDCC04;
	padding-left: 0;
}

.signup-button:hover {
	color: #fff;
}

</style>
<style type="text/css" scoped>
.box {
	height: 100%;
	width: 70px;
	position: relative;
}

.boxActive{
	width: 130px;
}

.signup-box {
	display: block;
	height: 30px;
	line-height: 30px;
	width: 60px;
	border-radius: 15px;
	background: #FDCC04;
	color: #fff;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}

.modal {
	position: relative;
	position: fixed;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	right: 0;
	top: 0;
	background: rgba(225, 225, 225, .95);
	z-index: 5;
	cursor: auto;
}

.modal-content {
	width: 1200px;
	height: 100%;
	margin: 0 auto;
	position: relative;
}

.icon-guanbi {
	font-size: 2.5rem;
	color: #636363;
	position: absolute;
	top: 10px;
	right: 0;
	cursor: pointer;
}

.form-box {
	width: 100%;
	position: absolute;
	top: 40%;
	transform: translateY(-50%);
}

.user-navbar-box {
	width: 130px;
	height: 40px;
	line-height: 40px;
}

.user-box {
	width: 130px;
}

.user-navbar {
	border-radius: 15px;
	background: #FDCC04;
	z-index: -1;
	padding-top: 30px;
	padding-bottom: 10px;
	background: rgba(253, 204, 4, .8);
	margin-top: 10px;
}

.user-navbar-item {
	height: 30px;
	line-height: 30px;
	color: #fff;
}

.notify-title {
	height: 30px;
	line-height: 30px;
	margin-top: 30px;
	font-size: 1.3rem;
	color: #636363;
	letter-spacing: 2px;
}

.notify-bottom {
	margin-top: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: all .3s ease-out;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}

</style>
