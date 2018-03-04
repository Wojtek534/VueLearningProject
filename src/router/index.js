import Vue from 'vue'
import Router from 'vue-router'
import Sample from '@/components/status/Home'
import Quotes from '@/components/quote/MainQuote'
import Form from '@/components/forms/MainForm'
import Directives from '@/components/directives/MainDirectives'
import Filters from '@/components/filters/Filters'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
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
    }
  ]
})
