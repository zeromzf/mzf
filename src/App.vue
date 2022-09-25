<template>
  <div>
    <router-view></router-view>
      <van-tabbar
        v-model="active"
        active-color="rgb(255, 208, 0)"
        inactive-color="rgb(175,175,175)"
        route
      >
        <van-tabbar-item icon="home-o" to="/pet">买只宠物</van-tabbar-item>
        <van-tabbar-item icon="shop-collect-o" to="/merchants">商家</van-tabbar-item>
        <van-tabbar-item icon="chat-o" to="/news">消息</van-tabbar-item>
        <van-tabbar-item icon="user-o" to="/ucenter">我的</van-tabbar-item>
      </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue"
import {Tabbar,TabbarItem} from "vant"
Vue.use(Tabbar)
Vue.use(TabbarItem)
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.van-tabbar{
  width: 100%;
  height: 40px;
  font-size: 14px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
