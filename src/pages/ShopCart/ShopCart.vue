<template>
  <div class="shopCart_container">
    <div class="person_header">
      <span class="text">网易严选</span>
    </div>
    <!--三个列表-->
    <div class="msite_smallList">
      <div class="smallList_item">
        <img src="./images/smallList.png" alt="">
        <span class="text">30天无忧退换货</span>
      </div>
      <div class="smallList_item">
        <img src="./images/smallList.png" alt="">
        <span class="text">30天无忧退换货</span>
      </div>
      <div class="smallList_item">
        <img src="./images/smallList.png" alt="">
        <span class="text">30天无忧退换货</span>
      </div>
    </div>
    <!--图片-->
    <div class="shopCart_img">
      <img src="./images/cart.png" alt="">
      <span>去添加点什么吧</span>
    </div>
    <!--登录-->
    <a href="javascript:;" @click="$router.push('/person')">
      <div class="shopCart_login">登录</div>
    </a>
  </div>
</template>
<script>
  export default {
    data () {
      return {}
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import  '../../common/stylus/mixins.styl'
.shopCart_container
  overflow hidden

  .person_header
    width: 100%
    height: 60px
    background #ffffff
    display flex
    align-items center
    border-bottom 1px  solid #969896
    .text
      position absolute
      top 15px
      left 113px
      font-size 22px
      font-weight bold

  .msite_smallList
    width: 100%
    height 30px
    /*background green*/
    display flex
    .smallList_item
      width: 100%
      /*background red*/
      position relative
      border-right 1px solid  #969896
      border-bottom 1px solid  #969896

      img
        position absolute
        top 1px
        left 13px
        width 13%
        font-size 12px
        margin 6px
      .text
        position absolute
        top 8px
        left 33px
        font-size 12px
  .shopCart_img
    width: 200px
    height: 200px
    img
      position absolute
      top 218px
      left 114px
      width: 34%
      height: 25%
    span
      position absolute
      top 384px
      left 121px
      font-size 16px
      opacity 0.5

  a
    .shopCart_login
      width: 197px
      height: 46px
      line-height 46px
      text-align center
      font-size 18px
      background #ab2b2b
      position fixed
      bottom 180px
      left 94px

</style>
