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
          component: resolve => require(['@/pages/smart'], resolve)
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
  ],
})
