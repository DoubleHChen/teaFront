<template>
	<div class="bg">
	</div>
	<span class="glyphicon glyphicon-menu-down"></span>
</template>

<script>
	export default {
		name: 'HelloWorld',
		props: {}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.bg {
		height: 100vh;
		background: radial-gradient(circle, rgba(0, 0, 0, 0.6), rgba(251, 251, 251,.1) 60%);
	}

	.glyphicon-menu-down {
		position: fixed;
		top: 90%;
		left: calc(50% - 15px);
		animation: myanimation 2s infinite;
		transform-origin: center center;
	}

	@keyframes myanimation {
		0% {
			transform: scale(3);
			opacity: .3;
		}

		50% {
			transform: scale(1);
			opacity: 1;
		}

		100% {
			transform: scale(3);
			opacity: .3;
		}
	}
</style>
