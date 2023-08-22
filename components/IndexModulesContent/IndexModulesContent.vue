<template>
	<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="swiperBox">
				<swiper-item>
					<view class="swiper-item">
						2
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						29
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						26
					</view>
				</swiper-item>
			</swiper>
</template>

<script>
	export default {
		name:"IndexModulesContent",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.swiperBox{
		width: 100%;
	}
	.swiperItemImg {
		width: 100%;
		height: 400rpx;
	}
</style>