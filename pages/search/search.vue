<template>
	<view class="search">
		<Lines/>
		<view class="searchItem">
			<view class="searchTitleContent">
				<view class="searchTitle defaultFontColor">热门搜索</view>
				<view class="iconfont icon-lajitong"></view>
			</view>
			<view >
				<view class="searchGoods defaultFontColor">四件套</view>
				<view class="searchGoods defaultFontColor">面膜</view>
			</view>
		</view>
		<view class="searchItem">
			<view class="searchTitleContent">
				<view class="searchTitle defaultFontColor">最近搜索</view>
				<view class="iconfont"></view>
			</view>
			<view>
				<view class="searchGoods defaultFontColor">四件套</view>
				<view class="searchGoods defaultFontColor">面膜</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Lines from "../../components/Line/Line.vue"
	
	export default {
		components:{
			Lines
		},
		data() {
			return {
				
			}
		},
		onNavigationBarButtonTap(e){
			if(e.float === "right"){
				uni.navigateTo({
					url: "../searchLists/searchLists"
				})
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.search{
		
	}
	.searchItem{
		padding: 20rpx;
	}
	.searchTitleContent{
		display: flex;
		justify-content: space-between;
	}
	.searchGoods{
		padding: 4rpx 24rpx;
		background-color: #e1e1e1;
		display: inline-block;
		border-radius: 26rpx;
		margin: 10rpx;
	}
</style>
