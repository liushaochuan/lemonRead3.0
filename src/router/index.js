import Vue from 'vue'
import Router from 'vue-router'
import {
  Z_FIXED
} from 'zlib';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'layout',
      component: resolve => require(['@/pages/layout/index'], resolve),
      children: [{
          path: 'index',
          name: 'index',
          component: resolve => require(['@/pages/index'], resolve)
        },
        {
          path: 'download',
          name: 'download',
          component: resolve => require(['@/pages/download'], resolve)
        },
        {
          path: 'smart',
          name: 'smart',
          component: resolve => require(['@/pages/smart2'], resolve)
        },
        {
          path: 'trial',
          name: 'trial',
          component: resolve => require(['@/pages/trial'], resolve)
        },
        {
          path: 'app',
          name: 'app',
          component: resolve => require(['@/pages/app'], resolve)
        },
        {
          path: 'movement',
          name: 'movement',
          component: resolve => require(['@/pages/movement'], resolve)
        },
        {
          path: 'school',
          name: 'school',
          component: resolve => require(['@/pages/school'], resolve)
        },{
          path: 'me',
          name: 'me',
          component: resolve => require(['@/pages/me'], resolve)
        },{
          path: 'webkite',
          name: 'webkite',
          component: resolve => require(['@/pages/webkite'], resolve)
        },{
          path: '*',
          component: resolve => require(['@/pages/index'], resolve)
        }
      ]
    },
    
    // {
    //   path: '/index',
    //   name: 'index',
    //   component: resolve => require(['@/pages/index'], resolve)
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: resolve => require(['@/pages/about'], resolve)
    // },
    // {
    //   path: '/download',
    //   name: 'download',
    //   component: resolve => require(['@/pages/download'], resolve)
    // },
    // {
    //   path: '/smart',
    //   name: 'smart',
    //   component: resolve => require(['@/pages/smart'], resolve)
    // },
    // {
    //   path: '/trial',
    //   name: 'trial',
    //   component: resolve => require(['@/pages/trial'], resolve)
    // },
    {
      path: '/studentsDownload',
      name: 'studentsDownload',
      component: resolve => require(['@/pages/studentsDownload'], resolve)
    }, {
      path: '/parentsDownload',
      name: 'parentsDownload',
      component: resolve => require(['@/pages/parentsDownload'], resolve)
    }, {
      path: '/teachersDownload',
      name: 'teachersDownload',
      component: resolve => require(['@/pages/teachersDownload'], resolve)
    }, {
      path: '/parents/childrenBind',
      name: 'parents/childrenBind',
      component: resolve => require(['@/pages/parentWeb/childrenBind'], resolve)
    }, {
      path: '/downloadTxt',
      name: 'downloadTxt',
      component: resolve => require(['@/pages/downloadTxt'], resolve)
    }, {
      path: '/appDownloadAll',
      name: 'appDownloadAll',
      component: resolve => require(['@/pages/appDownloadAll'], resolve)
    },



    // {
    //     path: '/news',
    //     name: 'news',
    //     component: resolve => require(['@/pages/news'], resolve)
    // }, 
    // {
    //     path: '/newsDtail',
    //     name: '/newsDtail',
    //     component: resolve => require(['@/pages/newsDtail'], resolve)
    // }, 
    // {
    //     path: '/newsDtailImg',
    //     name: '/newsDtailImg',
    //     component: resolve => require(['@/pages/newsDtailImg'], resolve)
    // }, 
    // {
    //     path: '/join',
    //     name: 'join',
    //     component: resolve => require(['@/pages/join'], resolve)
    // }, 
    // {
    //     path: '/product',
    //     name: 'product',
    //     component: resolve => require(['@/pages/product'], resolve)
    // }, 
    // {
    //     path: '/guide',
    //     name: 'guide',
    //     component: resolve => require(['@/pages/guide'], resolve)
    // },
    // {
    // 	path: '/game',
    // 	name: 'game',
    // 	component:resolve=>require(['@/pages/game'],resolve)
    // }, {
    // 	path: '/admin',
    // 	name: 'admin',
    // 	component:resolve=>require(['@/pages/admin/admin'],resolve)
    // }, {
    // 	path: '/sensitiveWord',
    // 	name: 'sensitiveWord',
    // 	component:resolve=>require(['@/pages/admin/sensitiveWord'],resolve)
    // }, {
    // 	path: '/signupLog',
    // 	name: 'signupLog',
    // 	component:resolve=>require(['@/pages/admin/signupLog'],resolve)
    // }, {
    // 	path: '/accessLog',
    // 	name: 'accessLog',
    // 	component:resolve=>require(['@/pages/admin/accessLog'],resolve)
    // },
  ],
})
