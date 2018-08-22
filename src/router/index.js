import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../pages/Main/Main'
import Topic from '../pages/Topic/Topic'
import Item from '../pages/Item/Item'
import Cart from '../pages/Cart/Cart'
import Login from '../pages/Login/Login'
import Phone from '../pages/Phone/Phone'
import Email from '../pages/Email/Email'
import Register from '../pages/Register/Register'
import MainRecommend from '../pages/Main/MainRecommend/MainRecommend'
import MainLiving from '../pages/Main/MainLiving/MainLiving'
import Ucenter from '../pages/Ucenter/Ucenter'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: Main,
      redirect: '/main/recommend',
      meta: {
        showFooter: true
      },
      children: [
        {
          path: '/main/recommend',
          component: MainRecommend,
          meta: {
            showFooter: true
          }
        },
        {
          path: '/main/living:index',
          // params: ,
          // component: require('../components'),
          component: MainLiving,
          meta: {
            showFooter: true
          }
        }
      ]
    },
    {
      path: '/topic',
      component: Topic,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/item',
      component: Item,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/cart',
      component: Cart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/phone',
      component: Phone,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/email',
      component: Email,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/register',
      component: Register,
      meta: {
        showFooter: false
      }
    },
    {
      path: '/ucenter',
      component: Ucenter,
      meta: {
        showFooter: true
      }
    }
  ]
})
