<template>
    <div class="msite_container">
      <!--头部-->
      <div class="msite_header">
        <div class="msite_header_space">
          <div class="logo">
            <img src="./image/logo.png" alt="">
          </div>
          <div class="search">
            <i class="iconfont icon-sousuo"></i>
            <span class="text"> 搜索商品，共16706款好物</span>
          </div>
        </div>
      </div>
      <!--滑动-->
      <div class="msite_scroll">
        <ul class="lists">
          <li v-for="(itemList,index) in homeData.cateList" :key="index">{{itemList.name}}</li>
        </ul>
      </div>
      <!--轮播图 三个小列表-->
      <div class="msite_content">
        <!--轮播图-->
        <div class="swiper-container">
          <div class="swiper-wrapper" >
            <div class="swiper-slide" v-for="(item ,index) in homeData.cateList " :key="index"  >
              <img :src="item.bannerUrl " alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          <!-- 如果需要滚动条 -->
          <div class="swiper-scrollbar"></div>
        </div>
        <!--三个小列表-->
        <div class="msite_smallList">
          <div class="smallList_item" v-for="(item ,index) in homeData.policyDescList " :key="index" >
            <img src="./image/smallList.png" alt="">
            <span class="text">{{item.desc}}</span>
          </div>


        </div>
      </div>
        <!--品牌制造商直供-->
      <div class="msite_list">
        <div class="msite_list_header">
          <div class="list_header_item">
            <span class="text">品牌制造商直供</span>
            <i class="iconfont icon-right-circle"></i>
          </div>
        </div>
          <!--四个制造商-->
        <div class="msite_list_content">
          <div class="content_item" v-if="index<4"   v-for="(item,index) in homeData.tagList" :key="index">
            <img v-lazy="item.appListPicUrl "alt="">
          <div class="left">
            <h4>{{item.name}}</h4>
            <div class="price">{{item.floorPrice}}元起</div>
            <i class="iconfont icon-shangxin"></i>
          </div>
        </div>

        </div>
      </div>
      <!--新品首发-->
       <div class="newList">
         <div class="newList_title">
           <span>新品首发</span>
           <div class="title_test">查看全部</div>
         </div>
         <div class="newList_content">
           <ul class="contentLists">
             <li class="item" v-for="(item,index) in homeData.newItemList" :key="index">
               <img v-lazy="item.listPicUrl" alt="">
               <div class="list_title">{{item.name}}</div>
               <div class="list_content">夏季爆品，媲美现煮</div>
               <div class="list_price">{{item.retailPrice}}￥</div>
             </li>

           </ul>
         </div>
       </div>
      <!--福利社-->
      <div class="msite_cheep">
        <img src="./image/fuli.jpg" alt="">
      </div>
      <!--专题精选-->
      <div class="msite_special_list">
        <div class="msite_list_header">
          <div class="list_header_item">
            <span class="text">专题精选</span>
            <i class="iconfont icon-right-circle"></i>
          </div>
        </div>
        <!--轮播图-->
        <div class="swiper-container2">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in homeData.topicList">
              <img v-lazy="item.itemPicUrl " alt="">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          <!-- 如果需要滚动条 -->
          <div class="swiper-scrollbar"></div>
        </div>
      </div>
      <!--居家好物-->
      <div class="footer" v-for="(item,index) in homeData.cateList">
        <div class="msite_footer_list">
          <div class="msite_list_header">
            <div class="list_header_item">
              <span class="text">{{item.name}}好物</span>
            </div>

          </div>

          <div class="footer_list">
            <div class="footer_list_item" v-for="(i,index) in item.itemList">
              <img v-lazy="i.listPicUrl " alt="">
              <div class="footer_list_title">{{i.simpleDesc}}</div>
              <div class="footer_list_content">{{i.name}}</div>
              <div class="footer_list_price">{{i.retailPrice}}￥</div>
            </div>

          </div>

        </div>
      </div>


    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState,mapGetters} from 'Vuex'
  export default {
    data() {
      return {}
    },
    mounted(){
      new BScroll('.msite_scroll',{
        scrollX: true,
        click: true
      })
      new BScroll('.newList_content',{
        scrollX: true,
        click: true
      })

      this.$store.dispatch('getHomeData')
    },
    computed:{
      ...mapState(['homeData']),
      ...mapGetters(['newHome']),
    },
    watch:{
      homeData(value){
        this.$nextTick(() =>{
          new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true
          })
          new Swiper('.swiper-container2', {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true
          })
        })
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
  .msite_container
    width 100%
    height 100%
    overflow hidden
    background #f4f4f4;
    .msite_header
      position relative
      width 100%
      height 60px
      background #fff
      border-bottom 1px #eee solid
      .msite_header_space
        position absolute
        top 7px
        left 15px
        width 95%
        height 90%
        /*background blue*/
        display flex
        flex 4
        .logo
          flex 1
          img
            width 80%
            height 90%
            align-items center
        .search
          background #999
          flex 3
          display flex
          align-items center
          margin auto 0
          border-radius 5px
          .iconfont
            font-size 24px
          .text
            font-size 18px
    .msite_scroll
      width: 100%
      height: 40px
      background #fff
      .lists
        width 200%
        display flex
        padding 8px 0
        li
          width: 15%
          font-size 20px
          text-align center
          margin 0 6px
    .msite_content
      margin-bottom 10px
  /*    height: 250px*/
      .swiper-container
        width 100%
        height 200px
        margin 0 auto
        position relative
        overflow hidde
        list-style none
        padding 0
        z-index 1
        .swiper-slide
          width 375px
          height 100%
          position relative
          img
            width 100%;
            height 100%;
      .msite_smallList
        width: 100%
        height 30px
        background #fff
        display flex

        .smallList_item
          width: 100%
          position relative
          img
            position absolute
            top 0
            left 3px
            width 15%
            font-size 12px
            margin 6px
          .text
            position absolute
            top 8px
            left 38px
            font-size 10px
            opacity 0.5
    .msite_list
      width 100%
      background #fff
      margin-top 30px
      .msite_list_header
        width 100%
        height 50px
        position relative
        .list_header_item
          position absolute
          top 3px
          left 23px
          width 90%
          height 90%
          display flex
          .text
            position absolute
            top 14px
            left 79px
            font-size 18px
          .iconfont
            position absolute
            top 14px
            right 94px
            font-size 19px
      .msite_list_content
        .content_item
          float left
          width 171px
          height 120px
          background #e9e9e9
          padding 10px
          box-sizing border-box
          position relative
          margin-left 11px
          margin-bottom 8px
          img
            width: 100%
            height: 100%
          .left
            position absolute
            top 3px
            left 17px
            width 92%
            font-size 17px
            padding  12px 0
            .price
              margin 6px 0
            .iconfont
              font-size 30px
    .newList
      width: 100%
      margin-top 30px
      background #fff
      .newList_title
        position relative
        width: 100%
        height: 123px
        background-image: url(./image/new.png)
        span
          position absolute
          top 24px
          left 133px
          font-size 27px
          color : #8ba0b6;
        .title_test
          position absolute
          top 64px
          left 138px
          width: 100px
          height: 36px
          line-height 36px
          text-align center
          background #969896
          fon-size 16px
          opacity 0.3
      .newList_content
        margin-top 30px
        padding-bottom 30px

        .contentLists
          width: 400%
          height: 100%
          background #fff
          margin-top 10px
          .item
            width: 153px
            height: 235px
            background #fff
            margin-left 20px
            float left
            img
              width: 153px
              height: 153px
              background #EEe

            .list_title
              width: 153px
              font-size 16px
              font-weight bold
              color black
              margin-top 3px

              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            .list_content
              width: 153px
              font-size 14px
              opacity 0.5
              margin 5px 0
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            .list_price
              color red
              font-size  16px

    .msite_cheep
      width: 100%
      height: 197px
      margin-top 30px
      img
       width: 100%
       height: 100%
    .msite_special_list
      background: #fff
      margin-top 30px
      .msite_list_header
        width 100%
        height 50px
        position relative
        .list_header_item
          position absolute
          top 3px
          left 23px
          width 90%
          height 90%
          display flex
          .text
            position absolute
            top 14px
            left 98px
            font-size 22px
          .iconfont
            position absolute
            top 14px
            right 118px
            font-size 19px
      .swiper-container2
        width 100%
        margin 0 auto
        position relative
        overflow hidde
        list-style none
        padding 0
        z-index 1
        .swiper-wrapper
          width: 200%
          .swiper-slide
            width 375px
            height 200px
            position relative
            margin-top 10px
            margin-right 10px
            img
              width 100%;
              height 100%;

    .footer
      .msite_footer_list
        width: 100%
        /*height: 2000px*/
        background #fff
        margin-top 30px
        .msite_list_header
          width 100%
          height 50px
          position relative
          /*background green*/
          .list_header_item
            position absolute
            top 3px
            left 23px
            width 90%
            height 100%
            background #fff
            display flex
            .text
              position absolute
              top 14px
              left 98px
              font-size 22px
        .footer_list
          width: 100%
          /*height: 600px*/
          /*background red*/
          margin-top 10px
          .footer_list_item
            width: 175px
            height: 235px
            background #fff
            /*box-sizing border-box*/
            /*padding 10px*/
            margin 6px
            float left
            img
              width: 175px
              height: 153px
              background #EEe
            .footer_list_title
              width: 175px
              height: 30px
              line-height 30px
              text-align center
              background: #f1ece2;
              color   #9f8a60;
              box-sizing border-box
              /*padding 5px*/
              font-size 12px
            .footer_list_content
              font-size  15px
              margin-top 3px
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            .footer_list_price
              font-size  18px
              color red
              margin-top 6px








</style>
