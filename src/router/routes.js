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
  //   
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
  //   
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
    
    icon: 'user',
    component: () => lazyLoadView(import('@views/pages/inview/PaymentSuccess')),
  }
]

const inviewRoutes = [
  {
    path: '/Setup',
    name: 'Setup',
    
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
        
        icon: 'user',
        component: () => lazyLoadView(import('@views/pages/inview/Roles')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
     
      {
        path: 'AreaMaster',
        name: 'Area Master',
        
        icon: 'loader',
        component: () => lazyLoadView(import('@views/pages/inview/Areamaster')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'RouteMaster',
        name: 'Route Master',
        
        icon: 'arrow-up',
        component: () => lazyLoadView(import('@views/pages/inview/RootMaster')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      // {
      //   path: 'City',
      //   name: 'City',
      //   
      //   icon: 'home',
      //   component: () => lazyLoadView(import('@views/pages/inview/city')),
      //   meta: { authRequired: true },
      //   props: (route) => ({ user: store.state.auth.currentUser || {} }),
      // },
      // {
      //   path: 'State',
      //   name: 'State',
      //   
      //   icon: 'home',
      //   component: () => lazyLoadView(import('@views/pages/inview/state')),
      //   meta: { authRequired: true },
      //   props: (route) => ({ user: store.state.auth.currentUser || {} }),
      // },
      // {
      //   path: 'Country',
      //   name: 'Country',
      //   
      //   icon: 'home',
      //   component: () => lazyLoadView(import('@views/pages/inview/Country')),
      //   meta: { authRequired: true },
      //   props: (route) => ({ user: store.state.auth.currentUser || {} }),
      // },
      {
        path: 'StagingArea',
        name: 'Staging Area',
        
        icon: 'clipboard',
        component: () => lazyLoadView(import('@views/pages/inview/Stagingarea')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'DumpingLocation',
        name: 'Dumping Location',
        
        icon: 'archive',
        component: () => lazyLoadView(import('@views/pages/inview/Dumpinglocation')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
     
      {
        path: 'Notification Template',
        name: 'Notification Template',
        
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
  //   
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
    
    icon: 'users',
    component: () => lazyLoadView(import('@views/pages/inview/users')),
    meta: { label: 'Users' },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {

    path: '/Employee',
    name: 'Employee',
    
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
    
    icon: 'layout',
    component: () => lazyLoadView(import('@views/pages/inview/Equipment')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  

  {
    path: '/Vehicle',
    name: 'Vehicles',
    
    icon: 'truck',
    component: () => lazyLoadView(import('@views/pages/inview/vehicle')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Payroll ',
    name: 'Payroll',
    
    icon: 'credit-card',
    meta: { label: 'Permissions' },
    component: {
      render(c) { return c('router-view') }
    },

    children: [

      {
        path: 'Ratecard',
        name: 'Rate card',
        icon: 'check-square',
        component: () => lazyLoadView(import('@views/pages/Payrol/redcard')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },

      {
        path: 'Billing',
        name: 'Billing',
        icon: 'check-square',
        component: () => lazyLoadView(import('@views/pages/Payrol/billing')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'Settlement',
        name: 'Settlement',
        icon: 'check-square',
        component: () => lazyLoadView(import('@views/pages/Payrol/settlement')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
    ]
  },
  {
    path: '/Trips',
    name: 'Trips',
    header: 'Apps',
    icon: 'credit-card',
    meta: { label: 'Permissions' },
    component: {
      render(c) { return c('router-view') }
    },

    children: [

      {
        path: 'IncomingTrips',
        name: 'Incoming Trips',
        icon: 'check-square',
        component: () => lazyLoadView(import('@views/pages/inview/Incomingtrip.vue')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },

      {
        path: 'OutgoingTrips',
        name: 'Outgoing Trips',
        icon: 'check-square',
        component: () => lazyLoadView(import('@views/pages/inview/Tripoutgoingdetails.vue')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      }
    ]
  },
  {
    path: '/Servicerequestdetails',
    name: 'ServiceRequest',
    
    icon: 'folder',
    component: () => lazyLoadView(import('@views/pages/inview/Servicerequestdetails.vue')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Reports',
    name: 'Reports',
    
    icon: 'credit-card',
    meta: { label: 'Trip Reports' },
    component: {
      render(c) { return c('router-view') }
    },

    children: [
  {
    path: 'Tripincomingdetails',
    name: 'Tripincomingdetails',
    component: () => lazyLoadView(import('@views/pages/inview/Tripincomingdetails')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: 'Tripoutgoingdetails',
    name: 'Tripoutgoingdetails',
    component: () => lazyLoadView(import('@views/pages/inview/Tripoutgoingdetails')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  }
]
},
  
  

]

// pageRoute
const pagesRoutes = [
  {
    path: '/Createservicerequest',
    name: 'Createservicerequest',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/servicerequest/createservicerequest')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Createattendance',
    name: 'Createattendance',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createattendance')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Createemployee',
    name: 'Createemployee',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createemployee')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Createequipment',
    name: 'Createequipment',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createequipment')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Createvehicle',
    name: 'Createvehicle',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createvehicle')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreateStaging',
    name: 'CreateStaging',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createstaging')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreateArea',
    name: 'CreateArea',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createareamaster')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreateRoute',
    name: 'CreateRoute',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createroute')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreateDumpinglocation',
    name: 'CreateDumpinglocation',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createdumping')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreatePermissions',
    name: 'CreatePermission',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/CreatePermission')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreateUser',
    name: 'CreateUsers',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/CreateUser')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreateRole',
    name: 'CreateRole',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createrole')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreateIncomingTrip',
    name: 'CreateIncomingTrip',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/CreateIncomingTrip')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => lazyLoadView(import('@views/pages/inview/profile')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },

  {
    path: '/Editpermission',
    name: 'Editpermission',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editpermission')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Editincomingtrip',
    name: 'EditIncomingTrip',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editincomingtrip')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Editrole',
    name: 'Editrole',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editrole')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Editarea',
    name: 'Editarea',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editarea')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Editstaging',
    name: 'Editstaging',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editstaging')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Editroute',
    name: 'Editroute',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editroute')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
 
  {
    path: '/Editdumping',
    name: 'Editdumping',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editdumping')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },

  {
    path: '/Editrole',
    name: 'Editrole',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editrole')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },

  {
    path: '/Editservicerequest',
    name: 'Editservicerequest',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editservicerequest')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Editattendance',
    name: 'Editattendance',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editattendance')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Reviewattendance',
    name: 'Reviewattendance',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/reviewAttendance')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Edituser',
    name: 'Edituser',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/edituser')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Editemployee',
    name: 'Editemployee',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editemployee')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Editequipment',
    name: 'Editequipment',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editequipment')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Editvehicle',
    name: 'Editvehicle',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editvehicle')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewincomingtrip',
    name: 'Viewincomingtrip',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/ViewIncomingTrip')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewattendance',
    name: 'Viewattendance',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewattendance')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewuser',
    name: 'Viewuser',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewuser')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewpermission',
    name: 'Viewpermission',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewpermission')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewrole',
    name: 'Viewrole',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewrole')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewarea',
    name: 'Viewarea',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewarea')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewstaging',
    name: 'Viewstaging',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewstaging')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewroute',
    name: 'Viewroute',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewroute')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
 
  {
    path: '/Viewdumping',
    name: 'Viewdumping',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewdumping')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewvehicle',
    name: 'Viewvehicle',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewvehicle')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },

  {
    path: '/Viewequipment',
    name: 'Viewequipment',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewequipment')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },

  {
    path: '/Viewemployee',
    name: 'Viewemployee',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewemployee')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
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
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
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
