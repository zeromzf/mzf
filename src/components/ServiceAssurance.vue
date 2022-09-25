
<template>
	<div class="serve_box">
		<div class="serve">
		<div>服务保障</div><div>请使用<span>担保交易</span>,交易全程保障!</div><div>详情 &gt;</div>
		</div>
		<div class="serve_icon">
			<div>
			<img src="https://m.buyonepet.com/static/img/bz-danbaojiaoyi.b8574754.svg" alt=""><span>担保交易</span>
			</div>
			<div>
			<img src="https://m.buyonepet.com/static/img/bz-10tian.3f7efb84.svg" alt=""><span>10天保障</span>
			</div>
			<div>
			<img src="https://m.buyonepet.com/static/img/bz-xianxingpeifu.442aa9f4.svg" alt=""><span>先行赔付</span>
			</div>
			<div>
			<img src="https://m.buyonepet.com/static/img/bz-shipai.ceac4579.svg" alt=""><span>100%实拍</span>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
	}
</script>

<style lang="scss" scoped>
.serve_box{
	background: #ccc;
	padding: 18px;
	border-radius: 6px;
.serve{
	display: flex;
	justify-content: space-between;

	div:first-child{
	padding-right: 10px;
	font-weight: bold;
	}
	div:nth-child(2){
		font-size: 12px;
		color: rgba(153,153,153);
		>span{
			color: rgb(179, 128, 45);
		}
	}
	div:nth-child(3){
		font-size: 12px;
		color: rgba(102,102,102)
	}
}
.serve_icon{
	display: flex;
	justify-content: space-between;
	padding-top: 10px;
	>div{
		display: flex;
		flex-flow: column;
		align-items: center;
		font-size: 12px;
	 color: rgba(102,102,102);
	}
	img{
		margin-bottom:10px;
		width: 40px;
		height: 40px;
	}
}
}
</style>