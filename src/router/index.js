import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Quotes from '@/components/quote/MainQuote'
import Form from '@/components/forms/MainForm'
import Directives from '@/components/directives/MainDirectives'
import Filters from '@/components/filters/Filters'
import Animations from '@/components/animations/MainAnimations'
import Rest from '@/components/http/RestVueResources'
import NotFound from '@/components/NotFound'
import Vuex from '@/components/vuex/vuexSample'

// Webpack routes optimize - use only if needed
const Sample = resolve => {
  require.ensure(['@/components/status/MainStatus'], () => {
    resolve(require('@/components/status/MainStatus'))
  })
}
const User = resolve => {
  require.ensure(['@/components/user/User'], () => {
    resolve(require('@/components/user/User'))
  }, 'User')
}
const UserStart = resolve => {
  require.ensure(['@/components/user/UserStart'], () => {
    resolve(require('@/components/user/UserStart'))
  }, 'User')
}
const UserDetail = resolve => {
  require.ensure(['@/components/user/UserDetail'], () => {
    resolve(require('@/components/user/UserDetail'))
  }, 'User')
}
const UserEdit = resolve => {
  require.ensure(['@/components/user/UserEdit'], () => {
    resolve(require('@/components/user/UserEdit'))
  }, 'User')
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/NotFound',
      component: NotFound
    }, {
      path: '*',
      redirect: '/NotFound'
    }, {
      path: '/redirect-me',
      redirect: '/user'
    }, {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          path: '',
          component: UserStart,
          name: 'userStart'
        }, {
          path: ':id',
          component: UserDetail,
          name: 'userDetail'
        }, {
          path: ':id/edit',
          component: UserEdit,
          name: 'userEdit'
        }
      ]
    }, {
      path: '/Sample',
      name: 'Sample',
      component: Sample,
      beforeEnter: (to, from, next) => {
        console.log(to)
        next()
      }
    }, {
      path: '/quotes',
      name: 'Quotes',
      component: Quotes
    }, {
      path: '/form',
      name: 'form',
      component: Form
    }, {
      path: '/directives',
      name: '/directives',
      component: Directives
    }, {
      path: '/filters',
      name: 'filters',
      component: Filters
    }, {
      path: '/animations',
      name: 'animations',
      component: Animations
    }, {
      path: '/rest',
      name: 'rest',
      component: Rest
    }, {
      path: '/vuex',
      name: 'vuex',
      component: Vuex
    }
  ]
})
