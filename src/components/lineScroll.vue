<!-- 判断线条离开底部距离 -->
<template>
	<div ref="lineBox">
		<transition name="fade">
			<div class="result-line" v-if="isBottom" v-bind:style="{borderBottom: '8px solid #' + colorNum}">
				<slot class="result-number"></slot>
			</div>
		</transition>
	</div>
</template>
<script>
export default {
	name: 'lineScroll',
	props: ['colorNum'],
	data() {
		return {
			isBottom: false,
			windowHeight: 0,
			domTop: 0,
			domBottom: 0,
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
	},
	methods: {
		handleScroll() {
			this.windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
			this.domTop = this.$refs.lineBox.getBoundingClientRect().top
			this.domBottom = this.domTop - this.windowHeight
			if (this.domBottom < -300) {
				this.isBottom = true
			}
		},
	}
}

</script>
<style lang="less" scoped>
.solt-box {
	height: 8px;
}

.result-line {
	width: 100%;
	position: relative;
	.result-number {
		width: 100%;
		display: flex;
		justify-content: space-between;
		font-size: 1.3rem;
		color: #A0A0A0;
		position: absolute;
		top: -30px;
		left: 0;
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: all 1.5s ease-in
}

.fade-enter,
.fade-leave-to {
	width: 0;
}

</style>
