<template>
    <div id="#app" >
      <router-view/>
      <FooterGuide v-if="$route.meta.showFooter"/>
      <Fengmian/>
    </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import Fengmian from './components/Fengmian/Fengmian.vue'
  export default {
     components:{
       FooterGuide,
       Fengmian
     }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import './common/stylus/mixins.styl'
  @import '../static/css/react.css'
  body
    background-color #f4f4f4
  #app
    width 100%
    height 100%
</style>
