<!-- 忘记密码组件 -->
<template>
	<el-form :model="updateForm" :rules="updateRules" ref="updateForm" status-icon>
		<el-form-item class="input-box" prop="updatePassword">
			<el-input type="password" placeholder="输入密码" v-model="updateForm.updatePassword" class="input-field" clearable>
			</el-input>
			<i class="iconfont iconfont-login icon-lock"></i>
		</el-form-item>
		<el-form-item class="input-box" prop="reUpdatePassword">
			<el-input type="password" placeholder="再次输入密码" v-model="updateForm.reUpdatePassword" class="input-field" clearable>
			</el-input>
			<i class="iconfont iconfont-login icon-lock"></i>
		</el-form-item>
		<el-form-item class="input-box">
			<button type="button" class="login-button click-hover" @click="userUpdate">确定</button>
		</el-form-item>
	</el-form>
</template>
<script>
import fetch from '../util/fetch'
export default {
	name: 'updatePassword',
	props: ['updateForm'],
	data() {
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
			} else if (value !== this.updateForm.updatePassword) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		};
		return {
			updateRules: {
				updatePassword: [
					{ validator: checkPassword, trigger: 'blur' },
				],
				reUpdatePassword: [
					{ validator: reCheckPassword, trigger: 'blur' },
				],
			},
		}
	},
	mounted() {

	},
	methods: {
		userUpdate() {
			this.$refs.updateForm.validate((valid) => {
				if (valid) {
					const reqData = {
						password1: this.updateForm.updatePassword,
						password2: this.updateForm.reUpdatePassword,
						token: this.sessionGetObj("token")
					}
					// console.log('reqData', reqData)
					fetch.userUpdate(reqData).then(response => {
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
							message: '密码修改成功',
							type: 'success'
						});
						this.$emit('userIsUpdate')
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
