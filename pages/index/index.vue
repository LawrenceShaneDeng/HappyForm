<template>
	<!-- 首页 -->
	<view class="content">
		<!-- #ifdef MP-WEIXIN -->
		<view style="display: flex;justify-content: space-between; width: 100%;">
			<view class="iconfont">&#xe6ac;</view>
			<text>Happay Form</text>
			<view class="iconfont">&#xe61d;</view>
		</view>
		<!--  #endif -->
		<!-- 顶部导航菜单 -->
		<scroll-view class="scrollViewContent" scroll-x="true" :scroll-into-view="scrollIntoViewIndex">
			<view :id="'menu'+index" class="scrollViewItem" v-for="(item, index) in topBarList" :key="index">
				<text 
					:class='selectMenuIndex=== index ? "topBarMenuTitle" :"defaultFontColor"'
					@tap="changeTab(index)"
					>{{item.name}}</text> 
			</view>
		</scroll-view>
		<!-- todo  -->
		<swiper class="switchoverModules" :style="'height: '+ clentHeight +'px;'"  @change="onChangeTab" :current="selectMenuIndex" >
			<swiper-item v-for="(item, index) in summaryArr" :key="index">
				<!-- <view class="IndexContent" > -->
					<scroll-view scroll-y="true" :style="'height: '+ clentHeight +'px;'" @scrolltolower="loadingMore(index)">
						<block v-if="item.data.length>0">
							<block v-for="(k, i) in item.data" :key="i">
								<!-- 推荐模块 -->
								<IndexSwiper v-if="k.type === 'indexSwiperList'" :dataList="k.data"/>
								<text>{{k.type}}</text>
								<template v-if="k.type === 'recommendList'">
									<Recommend  :dataList="k.data"/>
									<Card cardTitle="猜你喜欢"  />
								</template>
								
								<!-- 运动户外... -->
								<Banner v-if="k.type === 'bannerList'" :imgurl="k.imgurl"/>
								<template v-if="k.type === 'iconsList'" >
									<Icons :dataList="k.data"/>
									<Card cardTitle="热销产品"/>
								</template>
								<template v-if="k.type === 'hotList'" >
									<Hot :dataList="k.data"/>
									<Card cardTitle="推荐店铺"/>
								</template>
								<template v-if="k.type === 'shopList'" >
									<text>555</text>
									<Shop :dataList="k.data"/>
									<Card cardTitle="为你推荐"/>
									<text>555</text>
								</template>
								
								<CommodityList v-if="k.type === 'commodityList'" :dataList="k.data"/>
							</block>
						</block>
						<view v-else>暂无数据...</view>
						<view class="loadingTips">{{item.loadingTips}}</view>
					</scroll-view>
					
				<!-- </view> -->
			</swiper-item>
		</swiper>
		<!-- 其他模版： 运动户外 美妆。。。 -->
	</view>
	
</template>

<script>
	import $http from "@/common/api/request.js"
	import IndexSwiper from "@/components/IndexSwiper/IndexSwiper.vue"
	import Recommend from "@/components/Recommend/Recommend.vue"
	import Card from "@/components/Card/Card.vue"
	import CommodityList from "@/components/CommodityList/CommodityList.vue"
	import Banner from "@/components/Banner/Banner.vue"
	import Icons from "@/components/Icons/Icons.vue"
	import Hot from "@/components/Hot/Hot.vue"
	import Shop from "@/components/Shop/Shop.vue"
	import IndexModulesContent from "@/components/IndexModulesContent/IndexModulesContent.vue"
import { colors } from "debug/src/browser"
	export default {
		data() {
			return {
				selectMenuIndex:0,
				scrollIntoViewIndex:'meun0',
				topBarList: [],
				indexSwiperList: [],
				recommendList: [],
				commodityList: [],
				clentHeight: 0,
				summaryArr: []
				
			}
		},
		components:{
			IndexSwiper,
			Recommend,
			Card,
			Banner,
			Icons,
			Hot,
			Shop
			// IndexModulesContent
		},
		onLoad() {
			this.__init()
		},
		onReady(){
			// let view = uni.createSelectorQuery().select(".IndexContent");
			// view.boundingClientRect(data => {
			//   // console.log("得到布局位置信息" + JSON.stringify(data));
			//   // console.log("节点离页面顶部的距离为" + data.top);
			//   // this.clentHeight=data.height;
			//   this.clentHeight=1500;
			// }).exec();
			
			uni.getSystemInfo({
				success:(res)=> {
					this.clentHeight=res.windowHeight - uni.upx2px(80)-this.getClentHeight()+92;
				}
			})
			
		}, 
		onNavigationBarButtonTap(e){
			if(e.float === "left"){
			console.log('5555')
				uni.navigateTo({
					url: "../search/search"
				})
			}
		},
		methods: {
			__init(){
				console.log($http)
				$http.request({
					url:"/indexList/data"
				}).then((res)=>{
					console.log(res,'res')
					this.topBarList=res.topBar;
					this.summaryArr=this.initData(res);
					console.log('请求成功',res);
					uni.showToast({
						title:'请求成功',
						icon: 'none'
					})
				}).catch(()=>{
					console.log('请求失败');
					uni.showToast({
						title:'请求失败',
						icon: 'none'
					})
				})
				// uni.request({
				// 	url: "http://192.168.1.102:3000/api/indexList/data",
				// 	success:(res)=> {
				// 		// console.log(res.data.data.topBar);
				// 		// console.log(res.data.data.data);
				// 		this.topBarList=res.data.data.topBar;
				// 		this.summaryArr=this.initData(res.data.data);
				// 		// console.log(JSON.stringify(this.initData(res.data.data)))
				// 		// res.data.data.data.map(item=>{
				// 		// 	console.log(item.type,item.data)
				// 		// 	if(item.type === 'indexSwiperList'){
				// 		// 		console.log(item.data)
				// 		// 		this.indexSwiperList=item.data;
				// 		// 	}else if(item.type === 'recommendList'){
				// 		// 		this.recommendList=item.data;
				// 		// 	}else if(item.type === 'commodityList'){
				// 		// 		this.commodityList=item.data;
				// 		// 	}
				// 		// });
				// 	}
				// })
			},
			initData(res){
				let arr=[];
				for (let i=0;i < this.topBarList.length; i++ ) {
									let	obj={
											data: [],
											load: true,
											loadingTips:'上拉加载更多...'
										};
									if(i === 0){
										obj.data=res.data
									}
									arr.push(obj);
				}
				return arr;
			},
			changeTab(index){
				if(this.selectMenuIndex === index){
					return;
				}
				this.selectMenuIndex=index;
				this.scrollIntoViewIndex='menu'+index;
				if(this.summaryArr[this.selectMenuIndex].load){
					this.addData();
				}
				
			},
			onChangeTab(e){
				// console.log(e.detail.current)
				this.changeTab(e.detail.current);
			},
			
			// 获取可视区域高度
			getClentHeight(){
				const res=uni.getSystemInfoSync();
			    // console.log(res.platform);
			    // console.log(res.statusBarHeight);
				if(res.platform==="ios"){
					return 44+res.statusBarHeight;
				}else if(res.platform==="android"){
					return 48+res.statusBarHeight;
				}else{
					return 0;
				}
			},
			addData(callback){
				let id=this.topBarList[this.selectMenuIndex].id
				const page=Math.ceil(this.summaryArr[this.selectMenuIndex].data.length / 5) + 1;
				console.log(page,'page')
				// uni.request({
				// 	url: `http://192.168.1.102:3000/api/classify/${id}/data/${page}`,
				// 	success:(res)=> {
				// 			console.log(res)
				// 			if(res.statusCode!==200){
				// 				return;
				// 			}else{
				// 				console.log(res.data.data)
				// 				this.summaryArr[this.selectMenuIndex].data=[...this.summaryArr[this.selectMenuIndex].data, ...res.data.data];
				// 			}
				// 	}
				// });
				$http.request({
					url: `/classify/${id}/data/${page}`
				}).then((res)=>{
					this.summaryArr[this.selectMenuIndex].data=[...this.summaryArr[this.selectMenuIndex].data, ...res];
				}).catch(()=>{
					uni.showToast({
									title:'请求失败',
									icon: 'none'
								})
				})
				this.summaryArr[this.selectMenuIndex].load=false;
				if(typeof callback === 'function'){
					callback();
				}
			},
			// 加载更多数据
			loadingMore(index){
				console.log(index);
				this.summaryArr[this.selectMenuIndex].loadingTips='加载中...';
				this.addData(()=>{
					this.summaryArr[this.selectMenuIndex].loadingTips='上拉加载更多...';
				});
			}
		}
	}
</script>

<style scoped>
	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}
	.switchoverModules{
		width: 100%;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
	.scrollViewContent{
		width: 100%;
		height: 80rpx;
		white-space: nowrap;
	}
	.scrollViewItem{
		display: inline-block;
		padding: 10rpx 30rpx;
		font-size: 32rpx;  
	}
	.topBarMenuTitle{
		padding: 10rpx 0;
		border-bottom: 10rpx solid red;
	}
	.loadingTips{
		height: 60rpx;
		width: 100%;
	}
</style>
