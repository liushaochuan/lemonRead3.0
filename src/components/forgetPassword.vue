<!-- 忘记密码组件 -->
<template>
	<el-form :model="forgetForm" :rules="forgetRules" ref="forgetForm" status-icon>
		<el-form-item class="input-box" prop="forgetName">
			<el-input placeholder="请输入手机号" v-model="forgetForm.forgetName" class="input-field" clearable>
			</el-input>
			<i class="iconfont iconfont-login icon-my"></i>
		</el-form-item>
		<el-form-item class="input-box input-box-code" prop="forgetVer">
			<el-input placeholder="输入验证码" v-model.number="forgetForm.forgetVer" class="input-field" clearable>
			</el-input>
			<i class="iconfont iconfont-login icon-yanzhengma"></i>
		</el-form-item>
		<el-form-item class="input-box input-box-code">
			<button type="button" class="login-button click-hover input-code-button" @click="getVerCode">
				获取验证码
			</button>
		</el-form-item>
		<el-form-item class="input-box" prop="forgetPassword">
			<el-input type="password" placeholder="输入密码" v-model="forgetForm.forgetPassword" class="input-field" clearable>
			</el-input>
			<i class="iconfont iconfont-login icon-lock"></i>
		</el-form-item>
		<el-form-item class="input-box" prop="reForgetPassword">
			<el-input type="password" placeholder="再次输入密码" v-model="forgetForm.reForgetPassword" class="input-field" clearable>
			</el-input>
			<i class="iconfont iconfont-login icon-lock"></i>
		</el-form-item>
		<el-form-item class="input-box">
			<button type="button" class="login-button click-hover" @click="userForget">确定</button>
		</el-form-item>
	</el-form>
</template>
<script>
import fetch from '../util/fetch'
export default {
	name: 'forgetPassword',
	props: ['forgetForm'],
	data() {
		var validateName = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('手机不能为空'));
			}
			if (value.length != 11) {
				return callback(new Error('手机号长度为11位'));
			}
			var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if (!myreg.test(value)) {
				return callback(new Error('手机格式不对'));
			} else {
				callback();
			}
		};

		var checkVer = (rule, value, callback) => {
			if (!value) {
				return callback(new Error('验证码不能为空'));
			}
			if (value.toString().length != 6) {
				return callback(new Error('验证码长度为6位'));
			}
			if (!Number.isInteger(value)) {
				callback(new Error('请输入数字'));
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
		var reCheckPassword = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请再次输入密码'));
			} else if (value !== this.forgetForm.forgetPassword) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		};
		return {
			forgetRules: {
				forgetName: [
					{ validator: validateName, trigger: 'blur' },
				],
				forgetVer: [
					{ validator: checkVer, trigger: 'blur' },
				],
				forgetPassword: [
					{ validator: checkPassword, trigger: 'blur' },
				],
				reForgetPassword: [
					{ validator: reCheckPassword, trigger: 'blur' },
				],
			},
		}
	},
	mounted() {

	},
	methods: {
		getVerCode() {
			const reqData = {
				type: 2,
				userName: this.forgetForm.forgetName
			}
			fetch.getVerCode(reqData).then(response => {
				const resData = response;
				if (resData.errcode) {
					this.$message({
						showClose: true,
						message: '',
						type: 'warning',
						duration: 0
					});
					return;
				}
				this.$message({
					message: '验证码发送成功',
					type: 'success'
				});
			}).catch(err => {
				console.log('err', err)
				this.$message({
					showClose: true,
					message: err.data.errmsg,
					type: 'warning',
					duration: 0
				});
			});
		},
		userForget() {
			this.$refs.forgetForm.validate((valid) => {
				if (valid) {
					const reqData = {
						code: this.forgetForm.forgetVer.toString(),
						userName: this.forgetForm.forgetName,
						password1: this.forgetForm.forgetPassword,
						password2: this.forgetForm.reForgetPassword,
					}
					// console.log('reqData', reqData)
					fetch.userForget(reqData).then(response => {
						const resData = response;
						if (resData.errcode) {
							// 失败提示
							this.$message({
								showClose: true,
								message: resData.errmsg,
								type: 'warning',
								duration: 200
							});
							return;
						}
						this.$message({
							message: '重置密码成功,已返回登录页面',
							type: 'success'
						});
						let userPhone = this.forgetForm.forgetName
						this.$emit('userIsForget', userPhone)
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
