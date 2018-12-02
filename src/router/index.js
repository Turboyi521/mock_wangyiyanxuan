import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import List from '../pages/List/List.vue'
import Person from '../pages/Person/Person.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Topic from '../pages/Topic/Topic.vue'
import Login from '../pages/Login/Login.vue'
import Fengmian from '../components/Fengmian/Fengmian.vue'

Vue.use(VueRouter)

export default   new VueRouter({
  routes:[
    {
      path:'/fengmian',
      component:Fengmian
    },
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true // 标识需要显示footer
      }
    },
    {
      path: '/list',
      component: List,
      meta: {
        showFooter: true // 标识需要显示footer
      }
    },
    {
      path: '/person',
      component: Person,
      meta: {
        showFooter: true // 标识需要显示footer
      }

    },
    {
      path: '/shopCart',
      component: ShopCart,
      meta: {
        showFooter: true // 标识需要显示footer
      }
    },
    {
      path: '/topic',
      component: Topic,
      meta: {
        showFooter: true // 标识需要显示footer
      }
    },
    {
      path: '/login',
      component: Login,
    },

    {
      path: '/',
      redirect:'/msite'
    },

  ]

})
