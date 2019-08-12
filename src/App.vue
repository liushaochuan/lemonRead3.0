
<template>
	<div id="app">
		<router-view v-if="showRouter"></router-view>
	</div>
</template>
<script>
import fetch from './util/fetch'
export default {
	name: 'app',
    data () {
		return {
			showRouter: false,
		}
	},
    created () { 
        setTimeout(() => { 
            this.showRouter = true; 
        }, 0); 
    },
	watch: {
		'$route' (to, from) {
			if (this.sessionGetObj("user").userPhone) {
				const reqData = {
					ip: this.sessionGetObj("userIp"),
					url: to.fullPath,
					token: this.sessionGetObj("token")
				}
				// console.log('reqData',reqData)
				fetch.userLog(reqData).then(response => {
					// console.log('resData==>存入操作成功')
				}).catch(err => {
					// this.$message.error(err.data.errmsg);
				});
			}
		}
	},
}

</script>
<style>
@import 'common/less/base.css';
@import 'assets/iconfont/iconfont';
#app {
	text-align: center;
	color: #0F1215;
}

.click-hover {
	cursor: pointer;
}

.click-hover:hover {
	color: #fff;
}

@media only screen and (max-width: 1220px) {
	html {
		font-size: .95rem;
	}
}

@media only screen and (max-width: 992px) {
	html {
		font-size: .9rem;
	}
}

@media only screen and (max-width: 768px) {
	html {
		font-size: .85rem;
	}
}

@media only screen and (max-width: 540px) {
	html {
		font-size: .8rem;
	}
}

@media only screen and (max-width: 460px) {
	html {
		font-size: .75rem;
	}
}

@media only screen and (max-width: 400px) {
	html {
		font-size: .7rem;
	}
}

@media only screen and (max-width: 320px) {
	html {
		font-size: .65rem;
	}
}

</style>
