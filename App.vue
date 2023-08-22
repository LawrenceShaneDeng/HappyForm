<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/* 重置默认的标签样式样式 */
	@import 'common/uni.css';
	@import 'common/iconfont.css';
	@import 'common/common.css';
	
	    ::-webkit-scrollbar {  
	        display: none;  
	        width: 0 !important;  
	        height: 0 !important;  
	        -webkit-appearance: none;  
	        background: transparent;  
	        color: transparent;  
	    } 
</style>
