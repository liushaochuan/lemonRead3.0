<!-- admin导航页面 -->
<template>
	<div class="navbar-box">
		<router-link :to="{path: '/admin'}">
			<!-- <img src="../images/index/logoBlack.png" class="admin-img"> -->
		</router-link>
		<ul class="head-huge">
			<li v-for="(item,index) in linkList" class="head-item head-link-item click-hover" :class="{ adminActive: item.activeBorder }" @click="goLink(item.link)" @mouseover='navbarOver(index)' @mouseout='navbarOut(index)'>
				<div class="link-title">
					{{item.title}}
					<b v-if="item.activeBorder" class="link-border"></b>
					<transition name="fade">
						<b v-if="item.border" class="link-border"></b>
					</transition>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	name: 'adminNavbar',
	data() {
		return {
			linkList: [
				{ link: "sensitiveWord", title: "敏感词列表", activeBorder: false, border: false },
				{ link: "signupLog", title: "用户登录日志", activeBorder: false, border: false },
				{ link: "accessLog", title: "访问日志", activeBorder: false, border: false },
				{ link: "signout", title: "退出管理", activeBorder: false, border: false },
			]
		}
	},
	mounted() {
		// 导航列表遍历
		this.linkList.forEach(item => {
			// 所有激活边框置否
			item.activeBorder = false
			if (this.$router.history.current.name.indexOf(item.link) != -1) {
				item.activeBorder = true
			}
		});
	},
	methods: {
		// 导航跳转
		goLink: function(link) {
			if (link == "signout") {
				this.$router.push({ path: "index" })
			} else {
				this.$router.push({ path: link })
			}
		},
		// 鼠标移入边框激活
		navbarOver: function(index) {
			this.linkList.forEach(item => {
				if (this.linkList[index].activeBorder) {
					return
				} else {
					this.linkList[index].border = true
				}
			});
		},
		// 鼠标移出所有边框置否
		navbarOut: function(index) {
			this.linkList.forEach(item => {
				item.border = false
			});
		},
	}
}

</script>
<style lang="less" scoped>
.navbar-box {
	width: 200px;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	color: #fff;
	background: #267CB7;
}

.admin-img {
	padding: 40px 0;
	cursor: pointer;
}

.head-item {
	height: 50px;
	line-height: 50px;
	text-align: left;
	padding-left: 30px;
}

.adminActive {
	background-color: rgba(254, 204, 1, .3);
}

.link-title {
	position: relative;
}

.link-border {
	display: block;
	width: 8px;
	height: 100%;
	border-right: 8px solid #FECC01;
	position: absolute;
	right: 0;
	top: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: transform .5s;
}

.fade-enter,
.fade-leave-to {
	transform: scaleY(0);
}

</style>
