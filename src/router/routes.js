import store from '@state/store'

// auth related routes
const authRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => lazyLoadView(import('@views/pages/account/login')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        if (store.getters['auth/loggedIn']) {
          next({ name: 'dashboard' })
        } else {
          next()
        }
      },
    },
  },
  {
    path: '/forgot-password',
    name: 'Forgotpassword',
    header: 'Apps',
    icon: 'user',
    component: () => lazyLoadView(import('@views/pages/inview/forgotpassword')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        if (store.getters['auth/loggedIn']) {
          next({ name: 'dashboard' })
        } else {
          next()
        }
      },
    },
  },
  {
    path: '/register',
    name: 'Forgotusername',
    header: 'Apps',
    icon: 'user',
    component: () => lazyLoadView(import('@views/pages/inview/register')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        if (store.getters['auth/loggedIn']) {
          next({ name: 'dashboard' })
        } else {
          next()
        }
      },
    },
  },
  {
    path: '/change-password/:id/:key',
    name: 'Changepassword',
    header: 'Apps',
    icon: 'user',
    component: () => lazyLoadView(import('@views/pages/inview/changepassword')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        if (store.getters['auth/loggedIn']) {
          next({ name: 'dashboard' })
        } else {
          next()
        }
      },
    },
  },

  {
    path: '/topup-customer',
    name: 'TopupCustomer',
    header: 'Apps',
    icon: 'user',
    component: () => lazyLoadView(import('@views/pages/inview/topupCustomerDetails')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        if (store.getters['auth/loggedIn']) {
          next({ name: 'dashboard' })
        } else {
          next()
        }
      },
    },
  },
  {
    path: '/renewal-customer',
    name: 'RenewalCustomer',
    header: 'Apps',
    icon: 'user',
    component: () => lazyLoadView(import('@views/pages/inview/renewalcustomer')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        if (store.getters['auth/loggedIn']) {
          next({ name: 'dashboard' })
        } else {
          next()
        }
      },
    },
  },
  {
    path: '/renewal-customer/:id',
    name: 'RenewalCustomer',
    header: 'Apps',
    icon: 'user',
    component: () => lazyLoadView(import('@views/pages/inview/renewalcustomer')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        if (store.getters['auth/loggedIn']) {
          next({ name: 'dashboard' })
        } else {
          next()
        }
      },
    },
  },
  // {
  //   path: '/movie-purchase',
  //   name: 'Moviepurchase',
  //   header: 'Apps',
  //   icon: 'user',
  //   component: () => lazyLoadView(import('@views/pages/inview/moviepurchase')),
  //   meta: {
  //     beforeResolve(routeTo, routeFrom, next) {
  //       if (store.getters['auth/loggedIn']) {
  //         next({ name: 'dashboard' })
  //       } else {
  //         next()
  //       }
  //     },
  //   },
  // },
  // {
  //   path: '/movie-purchase/:id',
  //   name: 'Moviepurchase',
  //   header: 'Apps',
  //   icon: 'user',
  //   component: () => lazyLoadView(import('@views/pages/inview/moviepurchase')),
  //   meta: {
  //     beforeResolve(routeTo, routeFrom, next) {
  //       if (store.getters['auth/loggedIn']) {
  //         next({ name: 'dashboard' })
  //       } else {
  //         next()
  //       }
  //     },
  //   },
  // },


  {
    path: '/make-payment',
    name: 'MakePaymentReturn',
    header: 'Apps',
    icon: 'user',
    component: () => lazyLoadView(import('@views/pages/inview/PaymentSuccess')),
  }
]

const inviewRoutes = [
  {
    path: '/Setup',
    name: 'Setup',
    header: 'Apps',
    icon: 'check-square',
    meta: { label: 'Permissions' },
    component: {
      render(c) { return c('router-view') }
    },
    
    children: [

      {
        path: 'Permissions',
        name: 'Permission',
        icon: 'check-square',
        component: () => lazyLoadView(import('@views/pages/account/permission')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
     
      {
        path: 'Roles',
        name: 'Roles',
        header: 'Apps',
        icon: 'user',
        component: () => lazyLoadView(import('@views/pages/inview/Roles')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      // {
      //   path: 'City',
      //   name: 'City',
      //   header: 'Apps',
      //   icon: 'home',
      //   component: () => lazyLoadView(import('@views/pages/inview/city')),
      //   meta: { authRequired: true },
      //   props: (route) => ({ user: store.state.auth.currentUser || {} }),
      // },
      // {
      //   path: 'State',
      //   name: 'State',
      //   header: 'Apps',
      //   icon: 'home',
      //   component: () => lazyLoadView(import('@views/pages/inview/state')),
      //   meta: { authRequired: true },
      //   props: (route) => ({ user: store.state.auth.currentUser || {} }),
      // },
      // {
      //   path: 'Country',
      //   name: 'Country',
      //   header: 'Apps',
      //   icon: 'home',
      //   component: () => lazyLoadView(import('@views/pages/inview/Country')),
      //   meta: { authRequired: true },
      //   props: (route) => ({ user: store.state.auth.currentUser || {} }),
      // },
      {
        path: 'StagingArea',
        name: 'Staging Area',
        header: 'Apps',
        icon: 'clipboard',
        component: () => lazyLoadView(import('@views/pages/inview/Stagingarea')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'DumpingLocation',
        name: 'Dumping Location',
        header: 'Apps',
        icon: 'archive',
        component: () => lazyLoadView(import('@views/pages/inview/Dumpinglocation')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'RootMaster',
        name: 'Route Master',
        header: 'Apps',
        icon: 'arrow-up',
        component: () => lazyLoadView(import('@views/pages/inview/RootMaster')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'AreaMaster',
        name: 'Area Master',
        header: 'Apps',
        icon: 'loader',
        component: () => lazyLoadView(import('@views/pages/inview/Areamaster')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'Notification Template',
        name: 'Notification Template',
        header: 'Apps',
        icon: 'bell',
        component: () => lazyLoadView(import('@views/pages/inview/Notificationtemplate')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },



    ]
  },
  
  // {
  //   path: '/permissions',
  //   name: 'Permission',
  //   header: 'Apps',
  //   icon: 'check-square',
  //   component: () => lazyLoadView(import('@views/pages/account/permission')),
  //   meta: { authRequired: true },
  //   props: (route) => ({ user: store.state.auth.currentUser || {} }),
  //   children:[
  //   {
  //     path:'/permissions/create',

  //     component: () => lazyLoadView(import('@views/pages/inview/forgotpassword')),
  //   },
  // ]
  // },






  {
    path: '/Users',
    name: 'Users',
    header: 'Apps',
    icon: 'users',
    component: () => lazyLoadView(import('@views/pages/inview/users')),
    meta: { label: 'Users' },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {

    path: '/Employee',
    name: 'Employee',
    header: 'Apps',
    icon: 'user-plus',
    meta: { label: 'Employee' },
    component: {
      render(c) { return c('router-view') }
    },
    children: [
      {
        path: 'Employees',
        name: 'Employees',
        icon: 'users',
        component: () => lazyLoadView(import('@views/pages/inview/employement')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'Attendance',
        name: 'Attendance',
        icon: 'minus-square',
        component: () => lazyLoadView(import('@views/pages/employee/attendance')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'Tripdetails',
        name: 'Trip Details',
        icon: 'file-plus',
        component: () => lazyLoadView(import('@views/pages/employee/Tripdetail')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'Servicerequest',
        name: 'Service Request',
        icon: 'alert-circle',
        component: () => lazyLoadView(import('@views/pages/employee/servicerequest')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
    ]
  },
  
  {
    path: '/Equipment',
    name: 'Equipment',
    header: 'Apps',
    icon: 'layout',
    component: () => lazyLoadView(import('@views/pages/inview/Equipment')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  

  {
    path: '/Vehicle',
    name: 'Vehicles',
    header: 'Apps',
    icon: 'truck',
    component: () => lazyLoadView(import('@views/pages/inview/vehicle')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Payroll ',
    name: 'Payroll Management',
    header: 'Apps',
    icon: 'credit-card',
    meta: { label: 'Permissions' },
    component: {
      render(c) { return c('router-view') }
    },

    children: [

      {
        path: 'Redcard',
        name: 'Payroll red card',
        icon: 'check-square',
        component: () => lazyLoadView(import('@views/pages/Payrol/redcard')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },

      {
        path: 'Billing',
        name: 'Payroll billing',
        icon: 'check-square',
        component: () => lazyLoadView(import('@views/pages/Payrol/billing')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'Settlement',
        name: 'Payroll settlement',
        icon: 'check-square',
        component: () => lazyLoadView(import('@views/pages/Payrol/settlement')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
    ]
  },
  {
    path: '/Tripdetails',
    name: 'Trip Details',
    header: 'Apps',
    icon: 'book',
    component: () => lazyLoadView(import('@views/pages/inview/Tripdetails')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Service request details',
    name: 'Service Request Details',
    header: 'Apps',
    icon: 'folder',
    component: () => lazyLoadView(import('@views/pages/inview/Servicerequestdetails.vue')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },

]

// pageRoute
const pagesRoutes = [
  {
    path: '/CreateStaging',
    name: 'CreateStaging',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createstaging')),
    // meta: { authRequired: true },
    // props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreateArea',
    name: 'CreateArea',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createareamaster')),
    // meta: { authRequired: true },
    // props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreateRoute',
    name: 'CreateRoute',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createroute')),
    // meta: { authRequired: true },
    // props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreateDumpinglocation',
    name: 'CreateDumpinglocation',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createdumping')),
    // meta: { authRequired: true },
    // props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreatePermissions',
    name: 'CreatePermission',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/CreatePermission')),
    // meta: { authRequired: true },
    // props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreateUser',
    name: 'CreateUsers',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/CreateUser')),
    // meta: { authRequired: true },
    // props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreateRole',
    name: 'CreateRole',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createrole')),
    // meta: { authRequired: true },
    // props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  
  {
    path: '/profile',
    name: 'Profile',
    component: () => lazyLoadView(import('@views/pages/inview/profile')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },

  {
    path: '/voucher-management-details-view/:id',
    name: 'Voucher Management Details',
    component: () => lazyLoadView(import('@views/pages/inview/voucherManagementDetailsView')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/voucher-management-details/:id',
    name: 'Voucher Management Details',
    component: () => lazyLoadView(import('@views/pages/inview/voucherManagementDetails')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  }
]

// error pages
const errorRoutes = [
  {
    path: '/404',
    name: '404',
    component: require('@views/pages/error-404').default,
    props: true,
  },
  {
    path: '/500',
    name: '500',
    component: require('@views/pages/error-500').default,
    props: true,
  },
  {
    path: '*',
    redirect: '404',
  },
]

// dashboard
const dashboardRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    header: 'Navigation',
    icon: 'home',
    badge: {
      text: '1',
      varient: 'success',
    },
    component: () => lazyLoadView(import('@views/pages/dashboard/dashboard')),
    // meta: { authRequired: true },
    // props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
]

const authProtectedRoutes = [
  ...dashboardRoutes,
  ...inviewRoutes,
]

const allRoutes = [
  ...authRoutes,
  ...errorRoutes,
  ...authProtectedRoutes,
  ...pagesRoutes,
]

export { allRoutes, authProtectedRoutes }

function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    loading: require('@components/_loading').default,
    delay: 400,
    timeout: 10000,
  })

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      return h(AsyncHandler, data, children)
    },
  })
}
