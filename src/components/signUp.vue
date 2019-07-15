<!-- 登录组件 -->
<template>
	<el-form :model="signupForm" :rules="signupRules" ref="signupForm" status-icon>
		<el-form-item class="input-box" prop="signupName">
			<el-input placeholder="请输入手机号" v-model="signupForm.signupName" class="input-field" clearable>
			</el-input>
			<i class="iconfont iconfont-login icon-my"></i>
		</el-form-item>
		<el-form-item class="input-box" prop="signupPassword">
			<el-input type="password" placeholder="输入密码,6到20个数字和字母组成" v-model="signupForm.signupPassword" class="input-field" clearable>
			</el-input>
			<i class="iconfont iconfont-login icon-lock"></i>
		</el-form-item>
		<slot class=""></slot>
		<el-form-item class="input-box">
			<button type="button" class="login-button click-hover" @click="userSignup">登录</button>
		</el-form-item>
	</el-form>
</template>
<script>

import fetch from '../util/fetch'

export default {
	name: 'signUp',
	props: ['signupForm'],
	data() {
		var validateName = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('手机不能为空'));
			}
			// 管理员登录
			if (value != 'admin') {
				if (value.length != 11) {
					return callback(new Error('手机号长度为11位'));
				}
				var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
				if (!myreg.test(value)) {
					return callback(new Error('手机格式不对'));
				} else {
					callback();
				}
			} else {
				callback();
			}

		};

		var checkPassword = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'));
			}
			var myreg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
			if (!myreg.test(value)) {
				return callback(new Error('密码格式不对,由6到20个数字和字母组成'));
			} else {
				callback();
			}
		};
		return {
			signupIp: '',
			signupRules: {
				signupName: [
					{ validator: validateName, trigger: 'blur' },
				],
				signupPassword: [
					{ validator: checkPassword, trigger: 'blur' }
				],
			},
		}
	},
	mounted() {

	},
	methods: {
		userSignup() {
			this.$refs.signupForm.validate((valid) => {
				if (valid) {
					const reqData = {
						ip: this.sessionGetObj("userIp"),
						userName: this.signupForm.signupName,
						password: this.signupForm.signupPassword
					}
					// console.log('reqData', reqData)
					fetch.userSignup(reqData).then(response => {
						const resData = response;
						if (resData.errcode) {
							// 失败提示
							this.$message({
								showClose: true,
								message: err.data.errmsg,
								type: 'warning',
								duration: 200
							});
							return;
						}
						this.$message({
							message: '登录成功',
							type: 'success'
						});
						this.sessionSetObj("user", { userPhone: this.signupForm.signupName })
						this.sessionSetObj("token", response.token)
						let userPhone = this.signupForm.signupName
						this.$emit('userIsSignup', userPhone)
					}).catch(err => {
						this.$message.error(err.data.errmsg);
					});
				} else {
					this.$message.error('信息有误,请重新输入');
					return false;
				}
			});
		},
	}
}

</script>
<style>
@import '../common/less/form.less';

</style>
