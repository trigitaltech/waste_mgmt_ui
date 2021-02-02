import {
    serviceMaker,
    methods,
    api
} from "./index.js"

export const authAPI = (payload) => serviceMaker(`/auth/login`, methods.POST, api.NGB,payload)

export const dumpinglocation = () => serviceMaker(`/dumpinglocation/all`, methods.GET, api.NGB)

export const Attendance = () => serviceMaker(`/attendence/employee/admin`, methods.GET, api.NGB)

export const hauleremployee = () => serviceMaker(`/haulermaster/employees/all`, methods.GET, api.NGB)

export const lguemployee = () => serviceMaker(`/LGU/employee/all`, methods.GET, api.NGB)

export const classmaster = () => serviceMaker(`/trips/class/all`, methods.GET, api.NGB)

export const statess = () => serviceMaker(`/location/states`, methods.GET, api.NGB)

export const days = () => serviceMaker(`/trips/days/all`, methods.GET, api.NGB)

export const type = () => serviceMaker(`/trips/type/all`, methods.GET, api.NGB)


export const districtsbylgu = (id) => serviceMaker(`/LGU/districts/${id}`, methods.GET, api.NGB)

export const statebylgu = (state) => serviceMaker(`/LGU/lgu/${state}`, methods.GET, api.NGB)

export const stagingarea = () => serviceMaker(`/stagingarea/all`, methods.GET, api.NGB)

export const address = () => serviceMaker(`/location/addressmaster`, methods.GET, api.NGB)

export const countries = () => serviceMaker(`/location/countries`, methods.GET, api.NGB)

export const states = (countryCode) => serviceMaker(`/location/states/${countryCode}`, methods.GET, api.NGB)

export const districts = (stateCode) => serviceMaker(`/location/district/${stateCode}`, methods.GET, api.NGB)

export const permissions = () => serviceMaker(`/permissions/admin/all`, methods.GET, api.NGB)

export const roles = () => serviceMaker(`/roles/admin/all`, methods.GET, api.NGB)

export const users = () => serviceMaker(`/users/admin/readAll`, methods.GET, api.NGB)

export const payrollequipment = () => serviceMaker(`/payroll/rate/equipment/all`, methods.GET, api.NGB)

export const payrollSoilTruck = () => serviceMaker(`/payroll/rate/soiltruck/all`, methods.GET, api.NGB)

export const payrollpalero = () => serviceMaker(`/payroll/rate/palero/all`, methods.GET, api.NGB)

export const payrolldriver = () => serviceMaker(`/payroll/rate/driver/all`, methods.GET, api.NGB)

export const payrollhelper = () => serviceMaker(`/payroll/rate/helper/all`, methods.GET, api.NGB)

export const routemaster = () => serviceMaker(`/routemaster/all `, methods.GET, api.NGB)

export const servicerequests = () => serviceMaker(`/serviceticket/system/all `, methods.GET, api.NGB)

export const incomingtrips = () => serviceMaker(`/tripincoming/all`, methods.GET, api.NGB)

export const equipment = () => serviceMaker(`/equipment/admin/encoders/owner`, methods.GET, api.NGB)

export const vehicle = () => serviceMaker(`/vehicles/admin/encoders/owner `, methods.GET, api.NGB)

export const vehicleTypes = () => serviceMaker(`/vehicles/vehicletypes`, methods.GET,api.NGB)

export const simpleactivation = (payload) => serviceMaker(`/auth/signup`, methods.POST, api.NGB, payload)

export const reviewAttendance = (payload) => serviceMaker('/attendence/checker/admin/review',methods.POST,api.NGB,payload)

export const dashboardbrgy = () => serviceMaker('/dashboard/baranggay/count',methods.GET,api.NGB)
export const dashboardlgu = () => serviceMaker('/dashboard/lgu/count',methods.GET,api.NGB)
export const dashboardhauler = () => serviceMaker('/dashboard/hauler/count',methods.GET,api.NGB)
export const dashboardroute = () => serviceMaker('/dashboard/route/count',methods.GET,api.NGB)
export const dashboardvehicle = () => serviceMaker('/dashboard/vehicle/count',methods.GET,api.NGB)
export const dashboardequipment = () => serviceMaker('/dashboard/equipment/count',methods.GET,api.NGB)
export const dashboardincoming = () => serviceMaker('/dashboard/incomingtrip/count',methods.GET,api.NGB)
export const dashboardoutgoing = () => serviceMaker('/dashboard/outgoingtrip/count',methods.GET,api.NGB)
export const dashboarddirect = () => serviceMaker('/dashboard/directtrip/count',methods.GET,api.NGB)
export const dashboardemployee = () => serviceMaker('/dashboard/employee/count',methods.GET,api.NGB)
export const dashboardsrequipment = () => serviceMaker('/dashboard/srequipment/count',methods.GET,api.NGB)
export const dashboardsrtruck = () => serviceMaker('/dashboard/srtruck/count',methods.GET,api.NGB)
export const dashboarddumping = () => serviceMaker('/dashboard/dumping/count',methods.GET,api.NGB)

export const deletepayrollsoiltruck = (id) => serviceMaker(`/payroll/rate/soiltruck/delete/${id}`, methods.DELETE, api.NGB)

export const deletepayrollequipment = (id) => serviceMaker(`/payroll/rate/equipment/delete/${id}`, methods.DELETE, api.NGB)

export const deletepayrollpalero = (id) => serviceMaker(`/payroll/rate/palero/delete/${id}`, methods.DELETE, api.NGB)

export const deletepayrollhelper = (id) => serviceMaker(`/payroll/rate/helper/delete/${id}`, methods.DELETE, api.NGB)

export const deletepayrolldriver = (id) => serviceMaker(`/payroll/rate/driver/delete/${id}`, methods.DELETE, api.NGB)

export const deletedistrict = (id) => serviceMaker(`/location/district/${id}`, methods.DELETE, api.NGB)

export const deletedirectrip = (id) => serviceMaker(`/routetolandfilling/deleteByid/${id}`, methods.DELETE, api.NGB)

export const deletetripoutgoing = (id) => serviceMaker(`/tripoutgoing/admin/${id}`, methods.DELETE, api.NGB)

export const deletehauleremployee = (id) => serviceMaker(`/haulermaster/employees/admin/${id}`, methods.DELETE, api.NGB)

export const deletelguemployee = (id) => serviceMaker(`/LGU/employee/${id}`, methods.DELETE, api.NGB)

export const deletedays = (id) => serviceMaker(`/trips/days/admin/${id}`, methods.DELETE, api.NGB)

export const deletetype = (id) => serviceMaker(`/trips/type/admin/${id}`, methods.DELETE, api.NGB)

export const deleteclass = (id) => serviceMaker(`/trips/class/admin/${id}`, methods.DELETE, api.NGB)

export const deletetripincoming = (id) => serviceMaker(`/tripincoming/admin/${id}`, methods.DELETE, api.NGB)

export const deletevehicle = (id) => serviceMaker(`/vehicles/admin/encoders/${id}`, methods.DELETE, api.NGB) 

export const deletepermission = (id) => serviceMaker(`/permissions/admin/${id}`, methods.DELETE, api.NGB) 
 
export const deleteattendance = (id) => serviceMaker(`/attendence/admin/${id}`, methods.DELETE, api.NGB)

export const deletearea = (id) => serviceMaker(`/areamaster/admin/${id}`, methods.DELETE, api.NGB)

export const deleteroute = (id) => serviceMaker(`/routemaster/admin/${id}`, methods.DELETE, api.NGB)

export const deletelgu = (id) => serviceMaker(`/LGU/${id}`, methods.DELETE, api.NGB)

export const deletehauler = (id) => serviceMaker(`/haulermaster/admin/${id}`, methods.DELETE, api.NGB)

export const deleteemployee = (id) => serviceMaker(`/employees/admin/delete/${id}`, methods.DELETE, api.NGB)

export const deletestagingarea = (id) => serviceMaker(`/stagingarea/admin/${id}`, methods.DELETE, api.NGB) 

export const deletedumping = (id) => serviceMaker(`/dumpinglocation/admin/${id}`, methods.DELETE, api.NGB)

export const deleteuser = (id) => serviceMaker(`/users/admin/delete/${id}`, methods.DELETE, api.NGB)

export const deleteequipment = (id) => serviceMaker(`/equipment/admin/encoders/${id}`, methods.DELETE, api.NGB)

export const deleteservicerequest = (id) => serviceMaker(`/serviceticket/encoder/admin/${id}`, methods.DELETE, api.NGB)

export const deleterole = (id) => serviceMaker(`/roles/admin/${id}`, methods.DELETE, api.NGB)

export const Createpayrollequipment = (payload) => serviceMaker(`/payroll/rate/equipment/create`, methods.POST, api.NGB, payload)

export const Createpayrollsoiltruck= (payload) => serviceMaker(`/payroll/rate/soiltruck/create`, methods.POST, api.NGB, payload)

export const Createpayrollpalero= (payload) => serviceMaker(`/payroll/rate/palero/create`, methods.POST, api.NGB, payload)

export const Createpayrollhelper= (payload) => serviceMaker(`/payroll/rate/helper/create`, methods.POST, api.NGB, payload)

export const Createpayrolldriver= (payload) => serviceMaker(`/payroll/rate/driver/create`, methods.POST, api.NGB, payload)

export const createpermission = (payload) => serviceMaker(`/permissions/admin`, methods.POST, api.NGB, payload)

export const createroute = (payload) => serviceMaker(`/routemaster/admin/create`, methods.POST, api.NGB, payload)

export const createstaging = (payload) => serviceMaker(`/stagingarea/admin`, methods.POST, api.NGB, payload)

export const createdumping = (payload) => serviceMaker(`/dumpinglocation/admin`, methods.POST, api.NGB, payload)

export const createarea = (payload) => serviceMaker(`/areamaster/admin/create`, methods.POST, api.NGB, payload)

export const createuser = (payload) => serviceMaker(`/users/admin/create`, methods.POST, api.NGB, payload)

 export const createattendance = (payload) => serviceMaker(`/attendence/checker/admin/checkin`, methods.POST, api.NGB, payload)

 export const createservicerequest = (payload) => serviceMaker(`/serviceticket/encoder/admin`, methods.POST, api.NGB, payload)

 export const editpayrollequipment = (payload) => serviceMaker(`/payroll/rate/equipment/update`, methods.PUT, api.NGB, payload)
 

 export const editpayrollpalero = (payload) => serviceMaker(`/payroll/rate/palero/update`, methods.PUT, api.NGB, payload)

 export const  editpayrollsoiltruck = (payload) => serviceMaker(`/payroll/rate/soiltruck/update`, methods.PUT, api.NGB, payload)


 export const editpayrollhelper = (payload) => serviceMaker(`/payroll/rate/helper/update`, methods.PUT, api.NGB, payload)

 export const editpayrolldriver = (payload) => serviceMaker(`/payroll/rate/driver/update`, methods.PUT, api.NGB, payload)

 export const checkout = (payload) => serviceMaker(`/attendence/checker/admin/checkout/`, methods.PUT, api.NGB, payload)

export const createrole = (payload) => serviceMaker(`/roles/admin`, methods.POST, api.NGB, payload)

export const createemployee = (payload) => serviceMaker(`/employees/admin/create`, methods.POST, api.NGB, payload)

export const createhauler = (payload) => serviceMaker(`/haulermaster/admin`, methods.POST, api.NGB, payload)

export const createLGU = (payload) => serviceMaker(`/LGU/create`, methods.POST, api.NGB, payload)

export const createhauleremployee = (payload) => serviceMaker(`/haulermaster/employees/admin`, methods.POST, api.NGB, payload)

export const createlguemployee = (payload) => serviceMaker(`/LGU/employee`, methods.POST, api.NGB, payload)

export const createvehicle = (payload) => serviceMaker(`/vehicles/admin/encoders`, methods.POST, api.NGB, payload)

export const createequipment = (payload) => serviceMaker(`/equipment/admin/encoders/`, methods.POST, api.NGB, payload)

export const createcountry = (payload) => serviceMaker(`/location/createcountry`, methods.POST, api.NGB, payload)

export const createcity = (payload) => serviceMaker(`/location/createState`, methods.POST, api.NGB, payload)

export const createarea1 = (payload) => serviceMaker(`/location/createDistrict`, methods.POST, api.NGB, payload)

export const editservicerequest = (payload) => serviceMaker(`/serviceticket/system/issue`, methods.PUT, api.NGB, payload)


export const edithauler = (payload) => serviceMaker(`/haulermaster/admin`, methods.PUT, api.NGB, payload)

export const Editclass = (payload) => serviceMaker(`/trips/class/admin`, methods.PUT, api.NGB, payload)


export const editrole = (payload) => serviceMaker(`/roles/admin`, methods.PUT, api.NGB, payload)

export const editarea = (payload) => serviceMaker(`/areamaster/admin`, methods.PUT, api.NGB, payload)

export const editattendance = (payload) => serviceMaker(`/attendence/checker/admin/`, methods.PUT, api.NGB, payload)

export const Editpermission = (payload) => serviceMaker (`/permissions/admin`, methods.PUT, api.NGB, payload)

export const Edituser = (payload,id) => serviceMaker (`/users/admin/edit/${id}`, methods.PUT, api.NGB, payload)

export const Editemployee = (payload) => serviceMaker (`/employees/admin/edit`, methods.PUT, api.NGB, payload)

export const editroute = (payload) => serviceMaker (`/routemaster/admin`, methods.PUT, api.NGB, payload)   

export const Editequipment = (payload) => serviceMaker (`/equipment/admin/encoders/owner`, methods.PUT, api.NGB, payload)

export const Editlgu = (payload) => serviceMaker (`/LGU/update`, methods.PUT, api.NGB, payload)

export const editstaging = (payload) => serviceMaker (`/stagingarea/admin`, methods.PUT, api.NGB, payload)

export const editdumping = (payload) => serviceMaker (`/dumpinglocation/admin`, methods.PUT, api.NGB, payload)

export const editvehicle = (payload) => serviceMaker (`/vehicles/admin/encoders/owner`, methods.PUT, api.NGB, payload)

export const plandetails = () => serviceMaker(`/chargecode/template`, methods.GET, api.NGB)

export const employees = () => serviceMaker(`/employees/admin/readAll`, methods.GET, api.NGB)

export const haulers = () => serviceMaker(`/haulermaster/all`, methods.GET, api.NGB)

export const haulerEmployees = () => serviceMaker(`/haulermaster/employees/all`, methods.GET, api.NGB)

export const lgus = () => serviceMaker(`/LGU/all`, methods.GET, api.NGB)

export const Areamasters = () => serviceMaker(`/areamaster/all`, methods.GET, api.NGB)



export const servicetruck = () => serviceMaker(`serviceticket/all`, methods.GET, api.NGB)

export const serviceequipment = () => serviceMaker(`serviceticket/equipment/all`, methods.GET, api.NGB)

export const planprice = (id) => serviceMaker(`/prices/${id}?template=true`, methods.GET, api.NGB)

export const  redeem = (payload) =>
serviceMaker(`/redemption`, methods.POST, api.NGB, payload)
export const plandata = (id,cid,sid) => serviceMaker(`/salescataloge/salescataloges/${id}?clientId=${cid}&clientServiceId=${sid}&planId=0`, methods.GET, api.NGB)

export const addplan = (id,payload) => serviceMaker(`/multipleorders/${id}`, methods.POST, api.NGB,payload)


export const Tripdownload = (id) => serviceMaker(`/tripincoming/system/${id}`, methods.GET, api.NGB)

export const CreateIncomingTrip = (payload) => serviceMaker(`/tripincoming/createtrip`,methods.POST,api.NGB,payload)

export const CreateOutgoingTrip = (payload) => serviceMaker(`/tripoutgoing/admin`,methods.POST,api.NGB,payload)

export const Createdays = (payload) => serviceMaker(`/trips/days/admin`,methods.POST,api.NGB,payload)


export const Createclass = (payload) => serviceMaker(`/trips/class/admin`,methods.POST,api.NGB,payload)

export const Createtype = (payload) => serviceMaker(`/trips/type/admin`,methods.POST,api.NGB,payload)

export const editdays = (payload) => serviceMaker(`/trips/days/admin`,methods.POST,api.NGB,payload)

export const edittype = (payload) => serviceMaker(`/trips/type/admin`,methods.POST,api.NGB,payload)

export const Createsrtruck = (payload) => serviceMaker(`/serviceticket/details`,methods.POST,api.NGB,payload)


export const Createsrequipment = (payload) => serviceMaker(`/serviceticket/equipment/details`,methods.POST,api.NGB,payload)

export const Tripoutgoing = (id) => serviceMaker(`/tripoutgoing/system/${id}`, methods.GET, api.NGB)
 
export const getAllOutgoingTrip = () =>  serviceMaker(`/tripoutgoing/all`,methods.GET,api.NGB)

export const getVehiclesByhauler = (id) => serviceMaker(`/vehicles/vehiclebyhauler/${id}`, methods.GET, api.NGB)

export const searchvoucher = (id) => serviceMaker(`/vouchers/verify?pinNumber=${id}`, methods.GET, api.NGB)

export const getRoutesByBaranggayId = (id) => serviceMaker(`/areamaster/baranggay/${id}`,methods.GET,api.NGB);

export const getoutgoingtrip = (id,payload) => serviceMaker(
    `/getoutgoingtripbydatefilter/${id}`,
    methods.POST,
    api.NGB,payload
  );

  export const getincomingtrip = (id,payload) => serviceMaker(
    `/getincomingtripbydatefilter/${id}`,
    methods.POST,
    api.NGB,payload
  );
 
  export const   equipmentby = () => serviceMaker(`equipment/admin/encoders/owner`,methods.GET,api.NGB);

  
  // export const updatesrtruck = (id) => serviceMaker(`assigntruckreport/${id}`,methods.GET,api.NGB);

  export const assignequipsrtruck = (id,payload) => serviceMaker(`serviceticket/assiningDetails/${id}`,methods.POST,api.NGB,payload);

  
  export const assignequipsrequipment = (id,payload) => serviceMaker(`serviceticket/assiningequipmentdetails/${id}`,methods.POST,api.NGB,payload);

  export const getdumpdata = (id) => serviceMaker(`/dumpinglocation/dumping/${id}`,methods.GET,api.NGB);


export const getVehiclesByHaulerId = (id) => serviceMaker(`vehicles/vehiclebyhauler/${id}`,methods.GET,api.NGB);

export const getBaraggayByLguId = (id) => serviceMaker(`/LGU/baranggay/lgu/${id}`,methods.GET,api.NGB)

export const getHaulerByBaranggayId = (id) => serviceMaker(`haulermaster/hauler/brgy/${id}`,methods.GET,api.NGB)

export const addpermissiontorole = (id,payload) => serviceMaker(`/roles/assigningpermissions/${id}`, methods.PUT, api.NGB,payload)


export const getnameByLguId = (id) => serviceMaker(`/LGU/${id}`,methods.GET,api.NGB)

export const getEMPByLguId = (id,id2) => serviceMaker(`haulermaster/employees/getbytype/${id}/${id2}`,methods.GET,api.NGB)

 export const getEMPhelpByLguId = (id,id3) => serviceMaker(`haulermaster/employees/getbytype/${id}/${id3}`,methods.GET,api.NGB)

export const getlgubyId = (id) => serviceMaker(`/LGU/${id}`,methods.GET,api.NGB)


export const getgarbagebyId = (id,id2) => serviceMaker(`/employees/details/${id}/${id2}`,methods.GET,api.NGB)

export const getgarbagebystate = (type,state) => serviceMaker(`/employees/all/${type}/${state}`,methods.GET,api.NGB)

export const getnameByBRGY = (id) => serviceMaker(`/areamaster/baranggay/${id}`,methods.GET,api.NGB)

export const getvolumebyId = (id,id3) => serviceMaker(`/LGU/employee/lgu/${id}/${id3}`,methods.GET,api.NGB)

export const getTripsdetailsbyId = (id) => serviceMaker(`/LGU/trips/${id}`,methods.GET,api.NGB)

export const getTripsvolumebyId = (id) => serviceMaker(`/tripincoming/getincomingtripforvolumechecker/${id}`,methods.GET,api.NGB)

export const edithauleremployee = (payload) => serviceMaker (`/haulermaster/employees/admin`, methods.PUT, api.NGB, payload)

export const editlguemployee = (payload) => serviceMaker (`/LGU/employee`, methods.PUT, api.NGB, payload)

export const editvolumechecker = (payload) => serviceMaker (`tripincoming/updatetripvolume`, methods.PUT, api.NGB, payload)

export const editdirecttripvolumechecker = (payload) => serviceMaker (`/routetolandfilling/volumeChecker`, methods.PUT, api.NGB, payload)


export const BILLINGTRIPS = (payload) => serviceMaker (`tripincoming/all`, methods.GET, api.NGB, payload)


export const approveincomingtrip = (payload) => serviceMaker (`tripincoming/approveincomingtrip`, methods.PUT, api.NGB,payload)

export const editOutgoingTripByVolumeChecker = (payload) => serviceMaker(`tripoutgoing/volumeChecker`,methods.PUT,api.NGB,payload) 

export const editOutgoingTripByControlChecker1 = (payload) => serviceMaker(`tripoutgoing/controlChecker/complete`,methods.PUT,api.NGB,payload)

export const editOutgoingTripByControlChecker2 = (payload) => serviceMaker(`tripoutgoing/controlChecker/verified`,methods.PUT,api.NGB,payload)

export const editDirectTripByControlTrip = (payload) => serviceMaker(`/routetolandfilling/controlChecker/tripCompleted`,methods.PUT,api.NGB,payload)

export const editDirectTripByControldump = (payload) => serviceMaker(`/routetolandfilling/controlChecker/dumpingCompleted`,methods.PUT,api.NGB,payload)


export const outgoingTripApprove = (payload) => serviceMaker(`tripoutgoing/billing/approve`,methods.PUT,api.NGB,payload)

// export const incomingbytstatus = (status) => serviceMaker (`/tripincoming/billing/${status}`, methods.GET, api.NGB)
export const incomingbytstatus = () => serviceMaker (`/tripincoming/all`, methods.GET, api.NGB)

export const checkerupdatebystatus = (payload) => serviceMaker (`/tripincoming/completetrip`, methods.PUT, api.NGB,payload)


export const getLguById = (id) => serviceMaker(`/LGU/${id}`,methods.GET,api.NGB)

export const CreateDirectTrip = (payload) => serviceMaker(`/routetolandfilling/admin/create`,methods.POST,api.NGB,payload)

export const getAllDirectTrips = () => serviceMaker(`/routetolandfilling/all`,methods.GET,api.NGB)

export const getBrgysByRoute = (id) => serviceMaker(`/routemaster/getBrgysByRoute/${id}`,methods.GET,api.NGB)

export const deleteRoad = (id) => serviceMaker(`/routemaster/roads/${id}`,methods.DELETE,api.NGB)

export const editRoads = (payload) => serviceMaker('/routemaster/roads/update',methods.PUT,api.NGB,payload)