<template>
	<view class="shop">
		<view class="shopItem" v-for="(item, index) in dataList" :key="index">
			<view class="shopImg">
				<image class="shopImg" :src="item.bigImg"></image>
			</view>
			<scroll-view scroll-x="true" class="scrollViewContent ">
				<view class="scrollViewItem" ><Commodity :dataList="item.data" wrap="nowrap" itemW="200rpx"  imageH="200rpx" goodsFontSize="20rpx"/></view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import Commodity from "../Commodity/Commodity.vue"
	export default {
		name:"Shop",
		components:{
			Commodity
		},
		props: {
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
	.shop{
		width: 100%;
	}
	.shopItem{
		
	}
	.shopImg{
		width: 100%;
		height: 350rpx;
	}
	.scrollViewContent{
		width: 100%;
		white-space: nowrap;
	}
	.scrollViewItem{
		display: inline-block;
		width: 375rpx;
	}
</style>