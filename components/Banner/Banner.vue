<template>
	<view class="banner">
		<image class="bannerImg" :src="imgurl"></image>
	</view>
</template>

<script>
	export default {
		name:"Banner",
		props:{
			imgurl:{
				type: String
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.banner{
		width: 100%;
		height: 300rpx;
	}
	.bannerImg{
		width: 100%;
		height: 300rpx;
	}
</style>