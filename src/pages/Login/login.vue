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
   <!--登录-->
    <div class="person_content">
      <div class="logoImg">
        <img src="./images/1.png" alt="">
      </div>
      <div class="loginType">
        <div class="phone"  >
          <input type="text" placeholder="请输入手机号" v-model="phone">
        </div>
        <div class="phone"  >
          <input type="text" placeholder="请输入邮箱账号" v-model="email">
        </div>
        <div class="phone">
          <input type="password" placeholder="请输入密码" v-model="pwd">
      </div>
        <div class="loginType_test" @click="$router.push('/login')">
          <span :style="{color: isCorrect}">登录</span>
        </div>
        <div class="loginType_phone"  @click="$router.push('/person')">
          <span>其他登录方式</span>
        </div>
        </div>
      </div>





</div>
</template>
<script>
  import {Toast, MessageBox} from 'mint-ui'
  export default {
    data () {
      return {
        loginWay: true, // true代表手机号登陆, false 邮箱登陆
        phone: '', //手机号
        email: '', //邮箱账号
        pwd: '', // 密码
      }
    },
    computed: {
      rightPhone () {// 以1开头的11数字
        return /^1\d{10}$/.test(this.phone)
      },
      // 212p56871@qq.com
      rightEmail () {
        return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(this.email)
      },
      //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
      rightPwd () {
        const pattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
        return pattern.test(this.pwd)
      },
      // 计算出来的控制字体颜色变化的
      isCorrect () {
        if (this.rightPhone && this.rightPwd) {
          console.log(this)
          return '#fff'
        } else {
          return 'grey'
        }
      }
    },
    methods: {
      setLoginWay (loginWay) {
        this.loginWay = loginWay
      },
      // 登陆
      login () {
        if(this.loginWay) { // 手机号登录
          const {phone, pwd} = this
          if (!phone) {
            Toast({
              message: '手机号不能为空',
              className: 'toast'
            })
            return
          } else if (!pwd) {
            Toast({
              message: '密码不能为空',
              className: 'toast'
            })
            return
          }
          const {rightPhone, rightPwd} = this
          // 表单验证
          if(!rightPhone) { // 手机号
            Toast({
              message: '请输入正确的手机号',
              className: 'toast'
            })
            return
          } else if(!rightPwd) { // 验证码
            Toast({
              message: '请输入正确的密码',
              className: 'toast'
            })
            return
          }
          Toast({
            message: '登录成功',
            className: 'toast'
          })
        } else {// 邮箱登录
          const {email, pwd} = this
          if (!email) {
            Toast({
              message: '邮箱不能为空',
              className: 'toast'
            })
            return
          } else if (!pwd) {
            Toast({
              message: '密码不能为空',
              className: 'toast'
            })
            return
          }
          const {rightEmail, rightPwd} = this
          // 表单验证
          if(!rightEmail) { // 邮箱格式
            Toast({
              message: '请输入正确的邮箱',
              className: 'toast'
            })
            return
          } else if(!rightPwd) { // 密码
            Toast({
              message: '请输入正确的密码',
              className: 'toast'
            })
            return
          }
          Toast({
            message: '登录成功',
            className: 'toast'
          })
        }
      }
    },
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
        .phone
          width 80%
          height: 48px
          line-height 48px
          /*background darkred*/
          margin 20px
          input
            width: 100%
            margin 7px
            display block
            height: 100%;
            font-size: 18px

        .loginType_test
          width 80%
          height: 48px
          line-height 48px
          background darkred
          margin 20px
          span
            position absolute
            top 224px
            left 156px
            height: 48px
            line-height 48px
            text-align center
            font-size 16px
            color #ffffff

        .loginType_phone
          width 80%
          height: 48px
          line-height 48px
          background darkred
          margin 20px
          span
            position absolute
            bottom -134px
            left 116px
            height: 48px
            line-height 48px
            text-align center
            font-size 16px
            color #fff
</style>
