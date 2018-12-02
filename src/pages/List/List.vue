<template>
    <div class="list">
      <!--上方-->
       <header class="search">
         <div class="inner">
           <div class="ipt">
             <!--<i class="icon icon-duigou01"></i>-->
             <input  placeholder="搜索商品, 共9723款好物">
           </div>
         </div>
       </header>
      <!--下方滑动-->
      <section class="main">
     <!--   左列-->
        <div class="leftMenu">
          <div class="inner"  >
            <ul>
              <li class="item" v-for="(name,index) in navData" :key="index" :class="{'active' : navIndex === index}" @click="currentIndex(index)">
                <span>{{name.name}}</span>
              </li>
            </ul>
          </div>
        </div>
<!--          右列-->
        <div class="rightMenu">
          <div class="wrap" v-for="(nav,index) in navData" :key="index" v-if="index===navIndex">
            <div class="banner" >
              <img v-lazy="nav.bannerUrl" alt="">
            </div>
            <section class="bellow">
              <ul class="list">
                <li class="item" v-for="(item,index) in nav.subCateList" :key="index">
                    <a href="javascript:;">
                  <img v-lazy="item.wapBannerUrl" alt="">
                  <span>{{item.name}}</span>
                </a>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>
</template>
<script>
import {mapState} from  'Vuex'
import BScroll from 'better-scroll'
  export default {
    data () {
      return {
        navIndex:0,
      }
    },
    mounted(){
    /*  this.$store.dispatch('getNavData.leftMenu',()=>{
        this.$nextTick(()=>{ //列表更新后显示
          this.init_scroll
        })
      })*/
      this.$store.dispatch('getNavData')

      new BScroll('.leftMenu',{click:true,scrollY:true})

    },
    computed:{
      ...mapState(['navData']),
    },
    methods:{
      currentIndex(index){
        this.navIndex=index;
      },
    }

  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .list
    overflow hidden
    .search
      /*background pink*/
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;

      .inner

        width: 80%
        padding 10px
        height 20px
        display flex
        .ipt
          display flex
          width: 100%
          text-align center
          .icon
            width: 4px
            height: 4px
            background  red
          input
            background #969896
            text-align center
            font-size 20px
            font-size black
            border-radius 6px
            padding 0  34px 0 36px
            font-size 20px
    .main
      border-top 2px solid  #ccc
      margin-top 40px
      .leftMenu
        overflow hidden
        float left
        top 53px
        left 0
        bottom 0
        width 66px
        height 539px
        border-right 2px solid #CCC
        .inner
          width: 100%;
          .item
            width: 100%;
            height:  64px
            line-height: 64px
            text-align: center;
            span
              font-size 12px
            &.active
              color #ff0000
              border-left 4px solid #ff0000
              font-size 18px
      .rightMenu
        overflow hidden
        float left
        height 539px
        width: 280px
        overflow hidden
        .wrap
          padding 10px
          height: 800px
          .banner
            img
              width: 100%
              height: 100%
          .bellow
            width: 300px
            height: 300px
            .list
              clearFix()
              .item
                float left
                margin-right: 3px
                width: 91px
                a
                  color black
                  font-size:18px
                  span
                    display: block
                    height:59px
                    text-align: center
                img
                  width: 100%
                  height: 100%




</style>
