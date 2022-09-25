<template>
  <div>
    <div class="serch">
      <img
        src="https://m.buyonepet.com/static/img/logo-with-text.db23e7b4.svg"
      />
      <input type="text" placeholder="搜宠物" v-model="value" />
    </div>
    <div class="top">
      <div>
        <div class="item"  @click="skip">
          <img
            src="https://m.buyonepet.com/static/img/icon-near.32e30551.svg"
            alt=""
          />
          <div>附近</div>
        </div>
        <div class="item"  @click="skip">
          <img
            src="https://m.buyonepet.com/static/img/icon-dog.1f9966fe.svg"
            alt=""
          />
          <div>狗狗</div>
        </div>
        <div class="item"  @click="skip">
          <img
            src="https://m.buyonepet.com/static/img/icon-cat.222099dd.svg"
            alt=""
          />
          <div>猫猫</div>
        </div>
        <div class="item"  @click="skip">
          <img
            src="https://m.buyonepet.com/static/img/icon-other.60e80348.svg"
            alt=""
          />
          <div>异宠</div>
        </div>
      </div>
    <div class="swipe_wrap">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
        <van-swipe-item>
          <img src="https://assets.buyonepet.com/ad_f2b090f7324d6f72c38cb2b155845189.jpg"/>
        </van-swipe-item>
        <van-swipe-item>
          <img src="https://assets.buyonepet.com/ad_ada1171f2c663ca1e05cf32a470cec2d.png"/>
        </van-swipe-item>
      </van-swipe>
      </div>
    </div>
    <div class="uni">
      <div>
        <img
          src="	https://m.buyonepet.com/static/img/bz-shangjiayanshen.307226e3.svg"
        /><span>商家严选</span>
      </div>
      <div>
        <img
          src="	https://m.buyonepet.com/static/img/bz-shangjiayanshen.307226e3.svg"
        /><span>100%实拍</span>
      </div>
      <div>
        <img
          src="	https://m.buyonepet.com/static/img/bz-shangjiayanshen.307226e3.svg"
        /><span>担保交易</span>
      </div>
      <div>
        <img
          src="	https://m.buyonepet.com/static/img/bz-shangjiayanshen.307226e3.svg"
        /><span>平台担保</span>
      </div>
    </div>
    <!-- 特惠专区 -->
    <div class="preference">
      <div><span>特惠专区</span><span @click="skip">查看全部&gt;</span></div>
    </div>
    <!-- 最新上架 -->
    <div class="new">
    <div><span>最新上架</span><span @click="skip">查看全部&gt;</span></div>
    </div>
    <!-- 优宠精选 -->
     <div class="choiceness">
    <div><span>优宠精选</span><span @click="skip">查看全部&gt;</span></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import {Search,Grid,GridItem,Swipe,SwipeItem} from 'vant'
import Commodity from '@/components/Commodity.vue'
Vue.use(Search);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Grid);
Vue.use(GridItem);
export default {
  component:{Commodity},
  data() {
    return {
      value: '',
    }
  },
  methods:{
    skip(){
      this.$router.push({path:'/lookatall'})
    }
  }
}
</script>

<style lang="scss" scoped>
.serch {
  display: flex;
  justify-content: space-around;
  align-content: center;
  background-color: rgb(255, 208, 0);
  img {
    width: 135px;
    height: 46px;
  }
  :deep(input) {
    width: 190px;
    height: 32px;
    outline: none;
    border-radius: 30px;
    border: none;
    margin-top: 7px;
    padding-left: 20px;
  }
}
.top {
  height: 145px;
  background-color: rgb(255, 208, 0);
  border-radius: 0 0 20px 20px;
  > div:nth-child(1) {
    height: 106px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14px;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      > div {
        margin-top: 10px;
      }
      img {
        width: 40px;
      }
    }
  }
.swipe_wrap{
  width: 359px;
  height: 90px;
  overflow:hidden;
  .my-swipe {
    .van-swipe-item{
    float: left;
    img {
      width: 359px;
      height: 90px;;
      border-radius: 20px;
      } 
    }
  }
  }
}
.uni {
  margin-top: 60px;
  height: 40px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #666666;
  > div {
    display: flex;
    vertical-align: center;
    margin-right: 5px;
    img {
      width: 20px;
      height: 20px;
    }
  }
}
// 特惠专区
.preference{
  padding:10px;
  div:first-child{
    display: flex;
    justify-content: space-between;
    span:first-child{
      font-weight: bold;
      font-size: 17px;
    }
    span:nth-child(2){
      font-size: 12px;
      color: #666666;
    }
  }
}
// 最新上架
.new{
  padding:10px;
  div:first-child{
    display: flex;
    justify-content: space-between;
    span:first-child{
      font-weight: bold;
      font-size: 17px;
    }
    span:nth-child(2){
      font-size: 12px;
      color: #666666;
    }
  }
}
.choiceness{
  padding:10px;
  div:first-child{
    display: flex;
    justify-content: space-between;
    span:first-child{
      font-weight: bold;
      font-size: 17px;
    }
    span:nth-child(2){
      font-size: 12px;
      color: #666666;
    }
  }
}
</style>
