import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sample from '@/components/status/MainStatus'
import Quotes from '@/components/quote/MainQuote'
import Form from '@/components/forms/MainForm'
import Directives from '@/components/directives/MainDirectives'
import Filters from '@/components/filters/Filters'
import Animations from '@/components/animations/MainAnimations'
import Rest from '@/components/http/RestVueResources'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Sample',
      name: 'Sample',
      component: Sample
    },
    {
      path: '/quotes',
      name: 'Quotes',
      component: Quotes
    },
    {
      path: '/form',
      name: 'form',
      component: Form
    },
    {
      path: '/directives',
      name: 'directives',
      component: Directives
    },
    {
      path: '/filters',
      name: 'filters',
      component: Filters
    },
    {
      path: '/animations',
      name: 'animations',
      component: Animations
    },
    {
      path: '/rest',
      name: '/rest',
      component: Rest
    }
  ]
})
