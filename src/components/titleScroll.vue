<!-- 阅读器页面标题离开底部距离判断 -->
<template>
	<div ref="titleBox">
		<transition name="fade">
			<div class="result-title" v-if="isBottom">
				<slot></slot>
			</div>
		</transition>
	</div>
</template>

<script>

export default {
	name: 'titleScroll',
	data () {
		return {
			isBottom: false,
			windowHeight: 0,
			domTop: 0,
			domBottom: 0,
		} 
	},
	mounted() {
		this.windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
		this.domTop = this.$refs.titleBox.getBoundingClientRect().top
		this.domBottom = this.domTop - this.windowHeight
		if(this.domBottom < -200){
			this.isBottom = true
		}else {
			window.addEventListener('scroll', this.handleScroll)
		}
	},
	methods: {
		handleScroll () {
			this.windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
			this.domTop = this.$refs.titleBox.getBoundingClientRect().top
			this.domBottom = this.domTop - this.windowHeight
			if(this.domBottom < -300){
				this.isBottom = true
			}
		},
	}
}

</script>
<style lang="less" scoped>
.result-title{
	width: 100%;
	position: relative;
}
.fade-enter-active ,.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter, .fade-leave-to{
  transform: translate(0,100px);
  opacity: 0;
}
</style>