<template>
	<view class="commodity" :style="'flex-wrap: '+wrap+''">
		<view class="commodityItem" v-for="(item, index) in dataList"  :style="'width: '+itemW+';'" :key="index">
			<image class="commodityImg" :src="item.imgurl" :style="'height: '+imageH+';'"></image>
			<view class="commodityContext">
				<text class="commodityTitle" :style="'font-size: '+goodsFontSize+';'">{{item.name}}</text>
				<view class="price">
					<text class="nowPrice">${{item.nowPrice}}</text>
					<text class="odlePrice">${{item.odlePrice}}</text>
				</view>
				<text class="discount">{{item.discount}}折</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Commodity",
		props:{
			dataList: Array,
			itemW: {
					type: String,
					default: "375rpx"
			},
			imageH: {
					type: String,
					default: "375rpx"
			},
			wrap: {
				type: String,
				default: "wrap"
			},
			goodsFontSize: {
				type: String,
				default: "26rpx"
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.commodity{
		display: flex;
	}
	.commodityItem{
		padding-bottom: 20rpx;
	}
	.commodityImg{
		width: 100%;
	}
	.commodityContext{
		text-align: center;
	}
	.commodityTitle{
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		word-break: break-all;
		padding: 6rpx 20rpx;
		color: #333;
	}
	.price{
		
	}
	.nowPrice{
		
	}
	.odlePrice{
		text-decoration: line-through;
		font-size: 24rpx;
		color: #999;
	}
	.discount{
		/* width: 60rpx; */
		border-radius: 4rpx;
		border:2rpx solid pink;
		font-size: 20rpx;
		color: red;
		padding: 2rpx 10rpx;
	}
	
</style>