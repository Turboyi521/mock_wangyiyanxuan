<template>
  <div class="person_container">
    <!--头部区域-->
    <div class="person_header">
      <div class="icon_left" @click="$router.push('/msite')">
        <i class="iconfont icon-shouye"></i>
      </div>
      <span class="text">网易严选</span>
      <div class="icon_right">
        <i class="iconfont icon-sousuo" ></i>
        <i class="iconfont icon-gouwuche" @click="$router.push('/shopCart')"></i>
      </div>
    </div>
    <!--logo 正则验证-->
    <div class="person_content">
      <div class="logoImg">
        <img src="./images/1.png" alt="">
      </div>
      <div class="loginType">
        <div class="loginType_test"@click="$router.push('/login')">
          <i class="iconfont icon-mine"></i>
          <span>账号登录</span>
        </div>
        <div class="loginType_phone" @click="$router.push('/login')">
          <i class="iconfont icon-mobilephone"></i>
          <span>短信登录</span>
        </div>
        <span class="loginType_phoneNumber">手机号快速注册 ></span>
      </div>
    </div>
    <!--三小标-->
    <div class="msite_smallList">
      <div class="smallList_item">
        <i class="iconfont icon-weixin"></i>
        <span class="text">微信|</span>
      </div>
      <div class="smallList_item">
        <i class="iconfont icon-qq"></i>
        <span class="text">QQ      |</span>
      </div>
      <div class="smallList_item">
        <i class="iconfont icon-weibo-copy"></i>
        <span class="text">微博</span>
      </div>
    </div>



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
.person_container
  overflow hidden
  position relative
  .person_header
    width: 100%
    height: 60px
    background #ffffff
    display flex
    align-items center
    .icon_left
      position absolute
      top 10px
      left 10px
      .iconfont
        font-size 35px
        opacity 0.5
    .text
      position absolute
      top 15px
      left 113px
      font-size 22px
      font-weight bold
    .icon_right
      display flex
      position absolute
      top 10px
      right 20px
      .iconfont
        margin 0 4px
        font-size 35px
        opacity 0.5


  .person_content
    width: 100%
    height: 600px
    .logoImg
      position absolute
      top 134px
      left 94px
      width: 80%
      height: 80%
    .loginType
      width: 400px
      height: 200px

      position absolute
      top 245px
      /*bottom 10px*/
      .loginType_test
        width 80%
        height: 48px
        line-height 48px
        background darkred
        margin 20px
        .iconfont
          position absolute
          top 19px
          left 107px
          font-size 26px
        span
          /*position absolute*/
          /*top 19px*/
          /*left 156px*/
          /*height: 48px*/
          line-height 48px
          text-align center
          margin 0  122px
          font-size 16px
          color  #fff
      .loginType_phone
        margin-top 10px
        width 80%
        height: 48px
        line-height 48px
        background darkred
        margin 20px
        .iconfont
          position absolute
          top 87px
          left 107px
          font-size 26px
        span
          /*position absolute*/
          /*top 87px*/
          /*left 152px*/
          height: 48px
          line-height 48px
          text-align center
          font-size 16px
          color #fff
          margin 0  122px
      .loginType_phoneNumber
        position absolute
        top 138px
        left 123px
        width: 100%
        height: 30px
        line-height 30px
        font-size 12px


  .msite_smallList
    position absolute
    bottom 59px
    left 58px
    width: 61%
    height 30px
    display flex
    .smallList_item
      width: 100%
      position relative
      opacity 0.5
      .iconfont
        position absolute
        top 1px
        left 5px
        width 13%
        font-size 17px
        margin 6px
      .text
        position absolute
        top 8px
        left 33px
        font-size 17px
</style>
