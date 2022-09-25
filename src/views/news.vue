<template>
  <div>
    <div class="top">私聊</div>
    <div class="uni">
      <img src="https://m.buyonepet.com/static/img/icon-notice.eacee134.svg" />
      <div class="right">
        <div>系统消息</div>
        <div>消息推送、平台通知、状态通知</div>
      </div>
    </div>
     <div class="uni">
      <img src="https://assets.buyonepet.com/04c0ed10925d313a35e9020788334921_528_528.jpg" />
      <div class="right">
        <div>官方客服 <span>官方</span></div>
        <div>宝宝在此恭候主人来撩~</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top{
    width: 100%;
    height: 48px;
    text-align: center;
    line-height: 48px;
}
.uni {
  display: flex;
  padding: 10px 20px;
  height: 54px;
  img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }
  .right{
    margin-left: 10px;
    line-height: 27px;
    >div:nth-child(1){
        font-size: 14px;
        font-weight: bolder;
        span{
            background-color:rgb(255,208,0);
            padding: 2px 2px;
            font-size: 12px;
        }
    }
    >div:nth-child(2){
        color: rgb(153,153,153);
        font-size: 12px;
    }
  }
}
</style>
