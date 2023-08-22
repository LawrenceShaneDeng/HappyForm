<template>
	<view class="defaultbackgroundColor recommend ">
		<view class="recommendItem" v-for="(item, index) in dataList" :key="index">
			<image class="bigImg" :src="item.bigImg"></image>
			<view class="itemSmall" >
				<block  v-for="(item, index) in item.data" :key="index">
					<image class="smallImg" :src="item.imgurl"></image>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Recommend",
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
	.recommend {
		width: calc(100% - 40rpx);
		padding: 20rpx;
	}
	.recommendItem{
		display: flex;
		flex-direction: column;
		border-radius: 20rpx;
		border: 2rpx solid #ccc;
		overflow: hidden;
		margin: 20rpx 0;
	}
	.bigImg{
		width: 100%;
		height: 300rpx;
	}
	.itemSmall{
		width: 100%;
		height: 240rpx;
	}
	.smallImg{
		width: 33.3333%;
		height: 240rpx;
	}
</style>