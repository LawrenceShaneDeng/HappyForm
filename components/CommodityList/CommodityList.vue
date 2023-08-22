<template>
	<view class="commodityList">
		<Commodity :dataList="dataList" wrap="wrap"/>
	</view>
</template>

<script>
	import Commodity from "../Commodity/Commodity.vue"
	export default {
		name:"CommodityList",
		props:{
			dataList: {
				type: Array
			}
		},
		components:{
			Commodity
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>

</style>