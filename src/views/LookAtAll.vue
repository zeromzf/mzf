<template>
	<div>
		<div class="title">
		<van-nav-bar
		title="专区"
		left-text="<"
		@click-left="onClickLeft"
		/>		
		</div>	
		<!-- 商品列表 -->
		<Commodity :list="Commodity"></Commodity>
	</div>
</template>

<script>
import Vue from 'vue';
import url from '@/config/url.js'
import Commodity from '@/components/Commodity.vue'
import { NavBar } from 'vant';
Vue.use(NavBar);
	export default {
		components:{Commodity},
		data(){
			return{
				Commodity:[],
				total:0
			}
		},
		created(){
			this.$http.get(url.lookatall).then((res)=>{
				this.Commodity.push(...res.preference,...res.newReleases,...res.preferentialSelection)
				this.total = this.Commodity.length
			})
		},
		setup() {
    const onClickLeft = () => history.back();
    return {
      onClickLeft,
    };
  },
	}
</script>

<style lang="scss" scoped>
</style>