<!-- 数字动态加载 -->
<template>
	<div>
		<div class="animation-tow-number">{{initialValue}} C</div>
	</div>
</template>

<script>

export default {
	name: 'animationTwo',
	props: ['initialize','result'],
	data () {
		return {
			initialValue: this.initialize
		}
	},
	mounted() {
		// 定时加载
		let interval = setInterval(() => {
			this.initialValue += 4;
			if (this.initialValue === this.result) {
				clearInterval(interval);
				this.$emit('numberTwo')
			}
		}, 50);
	},
}

</script>
<style lang="less" scoped>
.animation-tow-number{
	position: absolute;
	top: 0;
	right: 0;
}
</style>