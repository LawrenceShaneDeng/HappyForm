<template>
	<view>
		<view class="searchList">
			<view class="shopTile" v-for="(item,index) in screeningConditionList.data" :key="index" @tap="changTab(item,index)">
				<view :class="index === screeningConditionList.screeningConditionListIndex? 'defaultSelectFontColor' : '' ">{{item.name}}</view>
				<view class="iconTitle">
					<view class="iconfont icon-shangjiantou1 up"
							:class="item.status===1? 'defaultSelectFontColor':''"
						></view>
					<view class="iconfont icon-xiajiantou down" :class="item.status===2? 'defaultSelectFontColor':''"></view>
				</view>
			</view>
		</view>
		<Lines/>
		<CommodityList  :dataList="dataList"/>
	</view>
	
</template>

<script>
	import Lines from "../../components/Line/Line.vue"
	import CommodityList from "@/components/CommodityList/CommodityList.vue"
	export default {
		components:{
			Lines
		},
		data() {
			return {
				
				screeningConditionList:{
					screeningConditionListIndex:null,
					data:[
						{name:'价格',status:0},
						{name:'折扣',status:0},
						{name:'品牌',status:0},
						]
				},
				dataList: [
														{	
															id:1,
															imgurl: "../../static/swiper/commodity1.jpg",
															name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
															nowPrice: "299",
															odlePrice: "529",
															discount: "4.3"
														},
														{
															id:2,
															imgurl: "../../static/swiper/commodity2.jpg",
															name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
															nowPrice: "299",
															odlePrice: "529",
															discount: "4.3"
														},
														{
															id:3,
															imgurl: "../../static/swiper/commodity3.jpg",
															name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
															nowPrice: "299",
															odlePrice: "529",
															discount: "4.3"
														},
														{
															id:4,
															imgurl: "../../static/swiper/commodity4.jpg",
															name: "户外折叠桌椅套装露营蛋卷桌便携式折叠椅摆摊凳子野餐桌椅钓鱼椅",
															nowPrice: "299",
															odlePrice: "529",
															discount: "4.3"
														},
													]
			}
		},
		methods: {
			changTab(item,index){
				this.screeningConditionList.screeningConditionListIndex=index;
				console.log(item)
				if(index==this.screeningConditionList.screeningConditionListIndex){
					return this.screeningConditionList.data[index]={...item, status: itme.status===1 ? 2 : 1};
				}else{
					this.screeningConditionList.data=this.screeningConditionList.data.map((item,i)=>{
						item.status=i!==index ? 0 : 1; 
						return item;
					})
				}
				
			}
		}
	}
</script>

<style scoped>
	.searchList{
		display: flex;
		justify-content: space-around;
		align-items: center;
		text-align: center;
	}
	.iconTitle{
		padding-left: 6rpx;
	}
	.shopTile{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.up{
		margin-bottom: -16rpx;
	}
	.down{
		margin-top: -16rpx;
	}

</style>
