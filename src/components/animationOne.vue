<!-- 数字动态加载 -->
<template>
	<div>
		<div>{{initialValue}} C</div>
	</div>
</template>

<script>

export default {
	name: 'animationOne',
	props: ['initialize','result'],
	data () {
		return {
			initialValue: this.initialize
		}
	},
	mounted() {
		// 定时加载
		let interval = setInterval(() => {
			this.initialValue += 12;
			if (this.initialValue === this.result) {
				clearInterval(interval);
				this.$emit('animationOne')
			}
		}, 50);
	},
}

</script>
<style lang="less" scoped>

</style>