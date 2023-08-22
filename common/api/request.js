export default {
	common:{
		baseUrl: "192.168.1.102:3000/api",
		data: {},
		header: {
			'content-type': "application/json",
			'content-type': "application/x-www-form-urlencoded"
		},
		method: "GET",
		dataType: "json"
	},
	request(optinons={}){
		optinons.url=this.common.baseUrl + optinons.url;
		optinons.data=optinons.data || this.common.data;
		optinons.header=optinons.header || this.common.header;
		optinons.method=optinons.method || this.common.method;
		optinons.dataType=optinons.dataType || this.common.dataType;
		uni.showLoading({
			title: '加载中'
		})
		return new Promise((res,rej)=>{
			uni.request({
				...optinons,
				success:(result)=>{
					if(result.statusCode!==200){
						rej();
					}else{
						const data = result.data.data;
						res(data);
						setTimeout(()=>{
							uni.hideLoading();
						},2000)
					}
				}
			})
		})
	}
}
// 因为服务器地址可能会更换，如果写在页面，api多的时候就要一个个更改，把他写在这里会更好只需改一次，不会改漏