<template>
  <div class="hello">
    <ul>
      <li v-for="item,index in list" :key="index">
        <div><img :src="item.img"/></div>
        <div><span>{{item.name}}</span><span>￥{{item.price}}</span></div>
        <div>{{item.Businessinformation}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    list:{
      type:Array,
      require:true
    }
  },
created(){
//  this.list.forEach(item => {
//  });
}

}
</script>
<style  lang="scss" scoped>
.hello{
  >ul{
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  >li{
    width: 46%;
    >div:first-child{
      //  width: 162px;
      //  height: 162px;
      >img{
        width: 100%;
        border-radius: 16px;
      }
    }
    >div:nth-child(2){
      display: flex;
      justify-content: space-between;
      height: 40px;
      align-items: center;
    >span:first-child{
      font-size: 14px;
    }
      >span:nth-child(2){
      font-size: 15px;
      color: #FD8712;
      font-weight: bold;
      }
    }
    >div:nth-child(3){
      font-size: 12px;
      color: gray;
    }
  }
}
}

</style>
