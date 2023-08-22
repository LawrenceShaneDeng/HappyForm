<template>
	<view>
		<Commodity :dataList="dataList" itemW="250rpx"  imageH="220rpx" wrap="wrap"/>
	</view>
</template>

<script>
	import Commodity from "../Commodity/Commodity.vue"
	export default {
		name:"Hot",
		components:{
			Commodity
		},
		props:{
			dataList:{
				type: Array
			}
		},
		data() {
			return {
			};
		}
	}
</script>

<style>

</style>