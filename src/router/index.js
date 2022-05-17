import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cssContent from '@/components/cssContent'
import Parent from '@/components/parent'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/css',
      name: 'CSS',
      component: cssContent
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent
    }
  ]
})
