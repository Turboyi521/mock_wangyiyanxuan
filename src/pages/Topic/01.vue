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
      <!--  想一下结构，Item中有三个元素，元素一，元素二，元素三；元素一用点取得方式元素二元素三的样式一样，单独遍历Item,那如何只获取元素而三的数据
        采用下标，结合v-if；当Item下标为一的时候，删除元素一；v-if为false的时候才会删除，v-if="index!===0"-->
        <div class="recommend" >
          <h3 class="title" v-if="topicData.recommend">{{topicData.recommend.name}}</h3>
          <div class="box">
            <div class="itemMajor"  >
              <a href="javascript:;">
                <img :src="Item.picUrl" alt="">
                <div class="info">
                  <div class="line1">
                    <div class="Linetitle">{{item.title }}</div>
                    <div class="price">{{item.priceInfo}}元起</div>
                  </div>
                  <div class="lin2">{{item.subTitle}}</div>
                </div>
              </a>
            </div>
            <div class="bottom"  v-if="index!==0"   v-for="(item,index) in topicData.recommend.Item" :key="index"><!--拿到三个对象-->
              <div class="items">
                <div class="topicInfo" >
                  <div class="line1">
                    <div class="topicTitle">{{item.title}}</div>
                  </div>
                  <div class="line2">
                    <div class="cont">{{item.subTitle}}</div>
                  </div>
                </div>
                <div class="topicPic">
                  <img :src="item.picUrl" alt="">
                  <div class="topicTag">
                    <div class="tag">{{item.nickname}}</div>
                  </div>
                </div>
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

