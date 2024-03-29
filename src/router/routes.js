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
        path: 'ClassMaster',
        name: 'Class Master',
        
        icon: 'clipboard',
        component: () => lazyLoadView(import('@views/pages/inview/class')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'TypeMaster',
        name: 'Type Master',
        
        icon: 'arrow-up',
        component: () => lazyLoadView(import('@views/pages/inview/type')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'DaysMaster',
        name: 'Days Master',
        
        icon: 'file',
        component: () => lazyLoadView(import('@views/pages/inview/days')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
     
      {
        path: 'AddressMaster',
        name: 'Address Master',
        
        icon: 'check-square',
        component: () => lazyLoadView(import('@views/pages/inview/address')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
     
      {
        path: 'AreaMaster',
        name: 'Baranggay Master',
        
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
     
      // {
      //   path: 'Notification Template',
      //   name: 'Notification Template',
        
      //   icon: 'bell',
      //   component: () => lazyLoadView(import('@views/pages/inview/Notificationtemplate')),
      //   meta: { authRequired: true },
      //   props: (route) => ({ user: store.state.auth.currentUser || {} }),
      // },



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
  // {
  //   path: '/Employee',
  //   name: 'Employee',
    
  //   icon: 'users',
  //   component: () => lazyLoadView(import('@views/pages/inview/employement')),
  //   meta: { label: 'Users' },
  //   props: (route) => ({ user: store.state.auth.currentUser || {} }),
  // },
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
      // {
      //   path: 'Tripdetails',
      //   name: 'Trip Details',
      //   icon: 'file-plus',
      //   component: () => lazyLoadView(import('@views/pages/employee/Tripdetail')),
      //   meta: { authRequired: true },
      //   props: (route) => ({ user: store.state.auth.currentUser || {} }),
      // },
      // {
      //   path: 'Servicerequest',
      //   name: 'Service Request',
      //   icon: 'alert-circle',
      //   component: () => lazyLoadView(import('@views/pages/employee/servicerequest')),
      //   meta: { authRequired: true },
      //   props: (route) => ({ user: store.state.auth.currentUser || {} }),
      // },
    ]
  },
  
  {

    path: '/LGU',
    name: 'LGU',
    
    icon: 'user-plus',
    meta: { label: 'LGU' },
    component: {
      render(c) { return c('router-view') }
    },
    children: [
      {
        path: 'Lgu',
        name: 'Lgu',
        icon: 'user',
        component: () => lazyLoadView(import('@views/pages/inview/lgu')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'LguEmployee',
        name: 'LguEmployee',
        icon: 'users',
        component: () => lazyLoadView(import('@views/pages/inview/lguemployee')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
    ]
  },
  {

    path: '/Hauler',
    name: 'HAULERS',
    
    icon: 'user-check',
    meta: { label: 'Hauler' },
    component: {
      render(c) { return c('router-view') }
    },
    children: [
      {
        path: 'Haulers',
        name: 'Haulers',
        icon: 'user',
        component: () => lazyLoadView(import('@views/pages/inview/haulers')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'HaulerEmployees',
        name: 'HaulerEmployees',
        icon: 'users',
        component: () => lazyLoadView(import('@views/pages/inview/hauleremployee')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
     
  
  {
    path: 'Equipment',
    name: 'Equipment',
    
    icon: 'layout',
    component: () => lazyLoadView(import('@views/pages/inview/Equipment')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  

  {
    path: 'Vehicle',
    name: 'Vehicles',
    
    icon: 'truck',
    component: () => lazyLoadView(import('@views/pages/inview/vehicle')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  }
    ]
  },
  {
    path: '/Payroll',
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
        component: {
          render(c) { return c('router-view') }
        },
    
    children: [
      {
        path: 'PayrollDriver',
        name: 'Payroll Driver',
        icon: 'check-square',
        component: () => lazyLoadView(import('@views/pages/inview/payrolldriver')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'PayrollHelper',
        name: 'Payroll Helper',
        icon: 'check-square',
        component: () => lazyLoadView(import('@views/pages/inview/payrollhelper')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'PayrollPalero',
        name: 'Payroll Palero',
        icon: 'check-square',
        component: () => lazyLoadView(import('@views/pages/inview/payrollpalero')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'PayrollSoilTruck',
        name: 'Payroll Service Request SoilTruck',
        icon: 'check-square',
        component: () => lazyLoadView(import('@views/pages/inview/payrollsoiltruck')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
        path: 'PayrollEquipment',
        name: 'Payroll Service Request Equipment',
        icon: 'check-square',
        component: () => lazyLoadView(import('@views/pages/inview/payrollequipment')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
    ]
    },
      {
        path: 'Billing',
        name: 'Billing',
        icon: 'check-square',
        component: {
          render(c) { return c('router-view') }
        },
        children: [

          {
            path: 'TripBilling',
            name: 'Trips Billing',
            icon: 'check-square',
            component: () => lazyLoadView(import('@views/pages/Payrol/billingtrip')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
          },
          {
            path: 'ServicerequestBilling',
            name: 'ServicerequestBilling',
            icon: 'check-square',
            component: () => lazyLoadView(import('@views/pages/Payrol/billingsrequest')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
          },
        ]

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
        component: () => lazyLoadView(import('@views/pages/inview/Outgoingtrip.vue')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
      },
      {
          path: 'DirectTrips',
          name: 'DirectTrips',
          icon: 'check-square',
          component: () => lazyLoadView(import('@views/pages/inview/Tripdetails.vue')),
          meta: { authRequired: true },
          props: (route) => ({ user: store.state.auth.currentUser || {} }),
        },
    ]
  },
  {
    path: '/Servicerequest',
    name: 'ServiceRequest',
    
    icon: 'folder',
    meta: { label: 'Servicerequests' },
    component: {
      render(c) { return c('router-view') }
    },

    children: [
  {
    path: 'Truck',
    name: 'Truck',
    component: () => lazyLoadView(import('@views/pages/inview/servicerequesttruck')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: 'Equipment',
    name: 'Equipment',
    component: () => lazyLoadView(import('@views/pages/inview/srequipment')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
],
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
    path: 'Haulingmonthlysummary',
    name: 'Haulingmonthlysummary Expenses',
    component: () => lazyLoadView(import('@views/pages/reports/haulingmonthlysummary')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: 'Haulingmonthly',
    name: 'Haulingmonthly Expenses',
    component: () => lazyLoadView(import('@views/pages/reports/haulingmonthly')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: 'Haulingweekly',
    name: 'Haulingweekly Expenses',
    component: () => lazyLoadView(import('@views/pages/reports/haulingweekly')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: 'Haulingbilling',
    name: 'Haulingbilling Summary',
    component: () => lazyLoadView(import('@views/pages/reports/haulingbilling')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
]
},
  
  

]

// pageRoute
const pagesRoutes = [
  {
    path: '/Encoder',
    name: 'Encoder',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/encoder/encoder')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Controlchecker',
    name: 'Controlchecker',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/controlchecker/controlchecker')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Volumechecker',
    name: 'Volumechecker',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/volumechecker/volumechecker')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/EditVolumechecker',
    name: 'EditVolumechecker',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/volumechecker/editvolumechecker')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Billingperson',
    name: 'Billingperson',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/billingperson/billingperson')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/UpdateBillingperson',
    name: 'UpdateBillingperson',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/billingperson/updatebilling')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Treeview',
    name: 'Treeview',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/inview/tree')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreatePayrollEquipment',
    name: 'CreatePayrollEquipment',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/createpayrollequipment')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreatePayrollSoilTruck',
    name: 'CreatePayrollSoilTruck',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/createpayrollsoiltruck')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreatePayrollPalero',
    name: 'CreatePayrollPalero',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/createpayrollpalero')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreatePayrollDriver',
    name: 'CreatePayrollDriver',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/createpaydriver')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreatePayrollHelper',
    name: 'CreatePayrollHelper',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/createpayrollhelper')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Createaddress',
    name: 'Createaddress',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createaddress')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreateSRTruck',
    name: 'CreateSRTruck',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/createsrtruck')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  
  {
    path: '/CreateClass',
    name: 'CreateClass',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createclass')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreateDays',
    name: 'CreateDays',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createdays')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreateType',
    name: 'CreateType',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createtype')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreateSREquipment',
    name: 'CreateSREquipment',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/createSRequipment')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
        path: '/CreateLgu',
        name: 'CreateLgu',
        icon: 'users',
        component: () => lazyLoadView(import('@views/pages/account/Createlgu')),
        meta: { authRequired: true },
        props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Createservicerequest',
    name: 'Createservicerequest',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/servicerequest/createservicerequest')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Servicerequestmmda',
    name: 'Servicerequestmmda',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/servicerequest/mmdasr')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Servicerequestbilling',
    name: 'Servicerequestbilling',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/servicerequest/billingsr')),
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
    path: '/Createhauler',
    name: 'Createhauler',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createhauler')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Createhauleremployee',
    name: 'Createhauleremployee',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createhauleremployee')),
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
    path: '/Createlguemployee',
    name: 'Createlguemployee',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/Createlguemployee')),
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
    name: 'CreateUser',
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
    path: '/CreateOutgoingTrip',
    name: 'CreateOutgoingTrip',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/CreateOutgoingTrip')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/CreateLandfillTrip',
    name: 'CreateLandfillTrip',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/account/CreateLandfillTrip')),
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
    path: '/Edithauleremployee',
    name: 'Edithauleremployee',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/edithauleremployee')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Editpayrolldriver',
    name: 'Editpayrolldriver',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editpayrolldriver')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Editpayrollhelper',
    name: 'Editpayrollhelper',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editpayrollhelper')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Editpayrollpalero',
    name: 'Editpayrollpalero',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editpayrollpalero')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/EditpayrollSoilTruck',
    name: 'EditpayrollSoilTruck',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editpayrollsoiltruck')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/EditpayrollEquipment',
    name: 'EditpayrollEquipment',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editpayrollequipment')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/EditClass',
    name: 'Editclass',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editclass')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/EditType',
    name: 'EditType',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/edittype')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/EditSRTruck',
    name: 'EditSRTruck',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editsrtruck')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/EditDays',
    name: 'EditDays',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editdays')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Editlguemployee',
    name: 'Editlguemployee',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editlguemployee')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Edithauler',
    name: 'Edithauler',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/edithauler')),
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
    path: '/EditincomingtripByChecker',
    name: 'EditIncomingTrip',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/volumechecker/editincomingtrip')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/EditincomingtripByBilling',
    name: 'EditIncomingTrip',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/billingperson/editincomingtrip')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/EditdirecttripByBilling',
    name: 'EditdirecttripByBilling',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/billingperson/editdirecttripbilling')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/EditoutgoingtripByVolumeChecker',
    name: 'EditoutgoingtripByVolumeChecker',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/volumechecker/editOutgoingTripByVolumeChecker')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/EditIncomingTripByAdmin',
    name: 'EditIncomingTripByAdmin',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/EditIncomingTripByAdmin')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/EditOutgoingTrip',
    name: 'EditOutgoingTrip',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/EditOutgoingTripByAdmin')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/EditlandfilltripByVolumeChecker',
    name: 'EditlandfilltripByVolumeChecker',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/volumechecker/editLandfillTripByVolumeChecker')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/EditoutgoingtripByControlChecker',
    name: 'EditoutgoingtripByControlChecker',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/controlchecker/editOutgoingTripByControlChecker')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/EditdirecttripByControlChecker',
    name: 'EditdirecttripByControlChecker',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/controlchecker/editdirecttripcontrolchecker')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/EditoutgoingtripByBilling',
    name: 'EditoutgoingtripByBilling',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/billingperson/EditOutgoingTrip')),
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
    path: '/Editlgu',
    name: 'Editlgu',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editlgu')),
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
    path: '/EditSRTruck',
    name: 'EditSRTruck',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/edit/editsrtruck')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
 
  {
    path: '/Viewhauleremployee',
    name: 'Viewhauleremployee',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewhauleremployee')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewservicerequest',
    name: 'Viewservicerequest',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewservicerequest')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/ViewserviceTruck',
    name: 'ViewserviceTruck',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewsrtruck')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/ViewpayrollEquipment',
    name: 'ViewpayrollEquipment',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewpayrollequipment')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
 
  {
    path: '/ViewpayrollSoilTruck',
    name: 'ViewpayrollSoilTruck',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewpayrollsoiltruck')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
 
  {
    path: '/Viewpayrollpalero',
    name: 'Viewpayrollpalero',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewpayrollpalero')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewpayrolldriver',
    name: 'Viewpayrolldriver',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewpayrolldriver')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewpayrollhelper',
    name: 'Viewpayrollhelper',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewpayrollhelper')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewtripincoming',
    name: 'Viewtripincoming',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewtripincoming')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewtripoutgoing',
    name: 'Viewtripoutgoing',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewtripoutgoing')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewdirecttrip',
    name: 'Viewdirecttrip',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewdirecttrip')),
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
    path: '/Viewclass',
    name: 'Viewclass',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewclass')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewtype',
    name: 'Viewtype',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewtype')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewhauler',
    name: 'Viewhauler',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewhauler')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewdays',
    name: 'Viewdays',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewdays')),
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
    path: '/Viewlgu',
    name: 'Viewlgu',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewlgu')),
    meta: { authRequired: true },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/Viewlguemployee',
    name: 'Viewlguemployee',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/views/viewlguemployee')),
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
  {
    path: '/ViewOutgoingTrip',
    name: 'ViewOutgoingTrip',
    icon: 'check-square',
    component: () => lazyLoadView(import('@views/pages/encoder/ViewOutgoingTrip')),
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
