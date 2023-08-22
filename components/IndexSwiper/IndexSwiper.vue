<template>
		<swiper :indicator-dots="true" 
				:autoplay="true" 
				:interval="3000" 
				:duration="1000" 
		        class="swiperBox">
			<swiper-item  v-for=" (item,index) in dataList" :key="'index-swiper-item'+index">
				<view :key="'index-swiper-item'+index" class="swiper-item">
					<image class="swiperItemImg" :src="item.imgurl"></image>
				</view>
			</swiper-item>
		</swiper>
</template>

<script>
	export default {
		name:"IndexSwiper",
		props:{
			dataList: {
				type: Array
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.swiperBox{
		width: 100%;
		height: 400rpx;
	}
	.swiperItemImg {
		width: 100%;
		height: 400rpx;
	}
</style>