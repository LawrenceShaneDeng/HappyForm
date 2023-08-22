<template>
	<view class="icons">
		<view class="iconsItem" v-for="(item,index) in dataList" :key="index">
			<image class="iconsImg" :src="item.imgurl"></image>
			<text class="defaultFontColor iconTitle">{{item.name}}</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"Icons",
		props:{
			dataList:{
				type: Array
			},
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.icons{
		display: flex;
		flex-wrap: wrap;
	}	
	.iconsImg{
		width: 110rpx;
		height: 110rpx;
	}
	.iconsItem{
		width: 25%;
		display: flex; 
		flex-direction: column; 
		justify-content: center;
		align-items: center;
		padding-top: 20rpx;
	}
	.iconsTitle{
		
	}
</style>