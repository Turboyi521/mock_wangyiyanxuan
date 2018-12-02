<template>
    <div class="topicContainer">
      <!--头部-->
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
      <!--轮播图-->
      <div class="person_content">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in topicData.banner" :key="index">
              <img :src="item.picUrl" alt="">
              <div class="banner_items"  >
                <div class="banner_items_title">{{item.subTitle}}</div>
                <div class="banner_items_midlle">{{item.title}}</div>
                <div class="banner_items_test">{{item.desc}}</div>
              </div>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          <!-- 如果需要滚动条 -->
          <div class="swiper-scrollbar"></div>
        </div>
        <!--第二个轮播图-->
        <div class="content_headerList">
          <div class="headerList_items_content">
            <div class="headerList_item"  v-for="(item,index) in topicData.column" :key="index">
              <div class="listImg">
                <img :src="item.picUrl" alt="">
              </div>
              <div class="listText">
                <div class="text">{{item.articleCount}}</div>
              </div>
              <div class="listFoot">
                <div class="listFoot_content">{{item.title}}</div>
              </div>
            </div>
          </div>
        </div>
        <!--严选推荐-->
        <div class="recommend"><!--v-for="(item,index) in topicData.recommend" :key="index"-->
          <h3 class="title">为你推荐</h3><!--item.name-->
          <div class="itemMajor">
            <a href="javascript:;">
              <img src="./images/3.jpg" alt="">    <!--item.Item[0].picUrl-->
              <div class="info">
                <div class="line1">
                  <div class="Linetitle">如何做清新的白衣少年</div>  <!--item.Item[0].title-->
                  <div class="price">9.9元起</div><!--item.Item[0].priceInfo-->
                </div>
                <div class="lin2">少年感养成必备好物，每满149立减20元</div> <!--item.Item[0].subTitle-->
              </div>
            </a>
          </div>
          <div class="items">
            <div class="topicInfo">
              <div class="line1">
                <div class="topicTitle">今年世界杯喝什么？</div>
              </div>
              <div class="line2">
                <div class="cont">拉格啤酒8.5折特价，买即赠小龙虾优惠券</div>
              </div>
            </div>
            <div class="topicPic">
              <img src="./images/r.jpg" alt="">
              <div class="topicTag">
                <div class="tag">丁磊的好货推荐</div>
              </div>
            </div>
          </div>
          <div class="items">
            <div class="topicInfo">
              <div class="line1">
                <div class="topicTitle">今年世界杯喝什么？</div>
              </div>
              <div class="line2">
                <div class="cont">拉格啤酒8.5折特价，买即赠小龙虾优惠券</div>
              </div>
            </div>
            <div class="topicPic">
              <img src="./images/r.jpg" alt="">
              <div class="topicTag">
                <div class="tag">丁磊的好货推荐</div>
              </div>
            </div>
          </div>
        </div>

        <!--十点一刻-->
        <div class="ten_time">
          <div class="name">
            <div>十点一刻</div>
          </div>
          <div class="swiper-container_two">
            <div class="swiper-wrapper">
              <div class="swiper-slide" >
                <img src="./images/qipao.png" alt="">
                <div class="banner_items"v-for="(item,index) in topicData.tenfifteen" :key="index">
                  <div class="banner_items_title">今日话题</div>
                  <div class="banner_items_midlle">{{item.title}}</div>
                  <div class="banner_items_test">{{item.desc}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--严选look-->
        <div class="yanxuanlook">
          <div class="name">
            <div>严选look</div>
          </div>
          <div class="lookContent">
            <img src="./images/look.jpg" alt="">
            <div class="bottom">
              <div class="bottom_text">
                <div class="person">
                  <img src="./images/l.png" alt="">
                </div>
                <div class="name">一****。</div>
              </div>
            </div>
          </div>
        </div>
        <!--更多精彩-->
        <div class="moreNice">
          <div class="m_moreNice">
            <div class="name">
              <div>更多精彩</div>
            </div>
            <a href="javascript:;" v-for="(item,index) in topicData.yxWeek">
              <img :src="item.itemPicUrl" alt="">
              <div class="desc">{{item.title}}</div>
            </a>

          </div>
        </div>
      </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'Vuex'
  export default {
    data () {
      return {}
    },
    mounted(){
      this.$store.dispatch('getTopicData')
    },
    computed:{
      ...mapState(['topicData'])
    },
    watch:{
      topicData(value){
        this.$nextTick(() =>{
          new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
            },
            loop: true
          })
          new BScroll('.content_headerList',{
            scrollX: true,
            click: true
          })
          new Swiper('.swiper-container_two', {
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
.topicContainer
  overflow hidden
  background #f4f4f4;
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
    margin-bottom 10px
    height: 20000px
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
        position relative
        margin-top 10px
        margin-right 10px
        img
          width 100%;
          height 100%;
        .banner_items
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
          margin: auto;
          display: flex;
          flex-direction: column;
          justify-content: center
          align-items: center;
          width: 242px
          height: 109px;
          background-color: rgba(255,255,255,0.9);
          .banner_items_title
            position absolute
            top 10px
            left 68px
            font-size 14px
            color #999
          .banner_items_midlle
            position absolute
            top 39px
            left 68px
            font-size 23px
            font-weight bold
            color #000
          .banner_items_test
            position absolute
            top 78px
            left 50px
            font-size 14px
            color #999
    .content_headerList
      width: 375px
      height: 142px
      background #fff
      margin-bottom 20px
      /*float left*/
      display block
      .headerList_items_content
        width: 220%
        height 80%
        padding 13px
        margin-left 10px
        background #fff
        .headerList_item
          width: 12%
          height: 100%
          margin-right 4px
          position relative
          display block
          float left
          .listImg
            width: 100%
            height: 80%
            img
              width: 100%
              height: 100%
          .listText
            position absolute
            top 2px
            left 28px
            background #666
            .text
              font-size 12px
              color #fff
          .listFoot
            width: 100%
            position absolute
            bottom 0px
            left 0px
            margin-top 6px
            .listFoot_content
              font-size 13px
              color #000
              opacity 0.7


    .recommend
      width: 100%
      background pink
      box-sizing border-box
      padding 0 15px
      .title
        width: 100%
        height: 40px
        line-height 40px
        text-align center
        font-size 21px
        background green
      .itemMajor
        width: 100%
        margin-bottom 20px
        border 1px solid #999
        background red
        img
          width: 100%
          height: 100%
        .info
          padding  8px 8px 23px 8px
          background #fff
          .line1
            display flex
            width: 100%
            background green
            margin-bottom 13px
            height 30px
            line-height 30px
            text-align center
            .Linetitle
              font-size 22px
              margin-right 34px
            .price
              font-size 18px
              opacity 0.5


          .lin2
            width: 100%
            font-size 18px
            background pink



      .items
        display flex
        width: 100%
        height: 130px
        background red
        position relative
        margin-bottom 20px
        .topicInfo
          box-sizing border-box
          padding 0 6px
          width: 65%
          height: 100%
          background orange
          .line1
            width: 100%
            margin-top 20px
            margin-bottom 22px
            background bisque
            .topicTitle
              font-size 20px

          .line2
            width: 100%

            margin-bottom 6px
            background brown
            .cont
              font-size 18px
              color #666666
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;

        .topicPic
          width: 35%
          height: 100%
          img
            width: 100%
            height: 100%
          .topicTag
            position absolute
            top 10px
            left 228px
            /*width: 30px*/
            /*height: 15px*/
            background #eee
            .tag
              font-size 13px
              color black
              opacity:0.5
              border-radius 6px

    .ten_time
      width: 100%
      /*height: 1200px*/
      /*background #02a774*/
      margin-bottom 18px

      .name
        height: 35px
        line-height 35px
        text-align center
        font-size 20px
        /*background pink*/
      .swiper-container_two
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
          position relative
          margin-top 10px
          margin-right 10px
          img
            width 100%;
            height 100%;
          .banner_items
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            display: flex;
            flex-direction: column;
            justify-content: center
            align-items: center;
            width: 242px
            height: 109px;
            background-color: rgba(255,255,255,0.9);
            .banner_items_title
              position absolute
              top 10px
              left 86px
              font-size 14px
              color #999
            .banner_items_midlle
              position absolute
              top 39px
              left 12px
              font-size 23px
              font-weight bold
              color #000
            .banner_items_test
              position absolute
              top 78px
              left 12px
              font-size 14px
              color #999
    .yanxuanlook
      width: 100%
      /*height: 800px*/
      /*background pink*/
      .name
        height: 35px
        line-height 35px
        text-align center
        font-size 20px
      .lookContent
        width: 100%
        /*height: 30px*/
        /*background orange*/
        img
          width: 100%
          height: 100%
        .bottom
          width: 100%
          height: 60px
          /*padding 10px 10px 10px 10px*/
          background #fff
          .bottom_text
            width: 100%
            height: 100%
            padding 10px
            /*background orange*/
            box-sizing border-box
            display flex
            .person
              width: 36 px
              height: 36px
              img
                width: 100%
                height: 100%
                border-radius 50%
            .name
              width: 77 px
              height: 36px
              line-height 36px
              text-align center
              margin-left 10px

    .moreNice
      width: 100%
      margin-top 20px
      /*height: 800px*/
      /*background pink*/
      .m_moreNice
        box-sizing border-box
        width: 100%
        height: 100%
        /*background red*/
        padding 0 10px
        .name
          height: 35px
          line-height 35px
          text-align center
          font-size 20px
        a
          background #fff
          display block
          box-sizing border-box
          padding 10px
          width: 100%
          margin-top 20px
          img
            width: 100%
            height: 100%
          .desc
            font-size: 14px
            padding: 17px 0;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;




</style>
