// 对外暴露配置的常量路由
import { RouteRecordRaw } from 'vue-router'
export const constantRoute: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login', // 命名路由
    meta: {
      title: '登录',
      hidden: true, // 代表路由标题在菜单中是否隐藏
      icon: 'House'
    }
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout', // 命名路由
    meta: {
      title: 'layout',
      hidden: false, // 代表路由标题在菜单中是否隐藏
      icon: 'Loading'
    },
    // 重定向
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          hidden: false, // 代表路由标题在菜单中是否隐藏
          icon: 'Setting'
        }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404', // 命名路由
    meta: {
      title: '404',
      hidden: true, // 代表路由标题在菜单中是否隐藏
      icon: 'Position'
    }
  },
  {
    path: '/screen',
    component: () => import('@/views/screen/index.vue'),
    name: 'screen',
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: 'View'
    }
  },
  {
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'acl',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'Lock'
    },
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user/index.vue'),
        name: 'Acl',
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'User'
        }
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/index.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'Avatar'
        }
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/index.vue'),
        name: 'Permission',
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'Grid'
        }
      },

    ]
  },
  {
    path: '/product',
    component: () => import('@/layout/index.vue'),
    name: 'Product',
    meta: {
      title: '商品管理',
      hidden: false,
      icon: 'Goods'
    },
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/product/trademark/index.vue'),
        name: 'Trademark',
        meta: {
          title: '品牌管理',
          icon: 'UserFilled'
        }
      },
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr/index.vue'),
        name: 'Attr',
        meta: {
          title: '属性管理',
          icon: 'HelpFilled'
        }
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu/index.vue'),
        name: 'Spu',
        meta: {
          title: 'SPU管理',
          icon: 'ForkSpoon'
        }
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku/index.vue'),
        name: 'Sku',
        meta: {
          title: 'SKU管理',
          icon: 'Basketball'
        }
      },

    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any', // 命名路由
    meta: {
      title: '任意路由',
      hidden: true,
      icon: 'View'
    }
  }
]
