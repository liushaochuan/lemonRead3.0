<!-- 判断数字离开底部距离 -->
<template>
	<div ref="numBox">
		<div v-if="isBottom">
			<number-animation :initialize="initializeNumber" :result="resultNumber"></number-animation>
		</div>
		<div v-else>{{initializeNumber}} C</div>
	</div>
</template>

<script>

import numberAnimation from './numberAnimation';

export default {
	name: 'numberScroll',
	props: ['initializeNumber','resultNumber'],
	components: {
        numberAnimation,
    },
	data () {
		return {
			isBottom: false,
		} 
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
	},
	methods: {
		handleScroll () {
			let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
			let domTop = this.$refs.numBox.getBoundingClientRect().top
			let domBottom = domTop - windowHeight
			if(domBottom < -100){
				this.isBottom = true
			}
		},
	}
}

</script>
<style lang="less" scoped>

</style>