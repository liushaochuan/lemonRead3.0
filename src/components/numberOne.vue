<!-- 判断数字离开底部距离 -->
<template>
	<div ref="numBox">
		<div v-if="isBottom">
			<animation-one :initialize="initializeNumber" :result="resultNumber" @animationOne="animationOneIsDone"></animation-one>
		</div>
		<div v-else>{{initializeNumber}} C</div>
	</div>
</template>
<script>
import animationOne from './animationOne';

export default {
	name: 'numberOne',
	props: ['initializeNumber', 'resultNumber'],
	components: {
		animationOne,
	},
	data() {
		return {
			isBottom: false,
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
	},
	methods: {
		handleScroll() {
			let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
			let domTop = this.$refs.numBox.getBoundingClientRect().top
			let domBottom = domTop - windowHeight
			if (domBottom < -100) {
				this.isBottom = true
			}
		},
		animationOneIsDone() {
			this.$emit('numberOne')
		}
	}
}

</script>
<style lang="less" scoped>


</style>
