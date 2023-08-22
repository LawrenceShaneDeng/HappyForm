<template>
	<view style="width: 100%;">
		<view style="width: 100%;text-align: center;">-<slot><text class="titleCard">{{cardTitle}}</text>-</slot></view>
	</view>
</template>

<script>
	export default {
		props:{
			cardTitle:String
		},
		name:"Card",
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
	.titleCard{
		text-align: center;
		padding:20rpx;
	}
</style>