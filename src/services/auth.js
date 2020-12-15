import {
    serviceMaker,
    methods,
    api
} from "./index.js"

export const authAPI = (payload) => serviceMaker(`/auth/login`, methods.POST, api.NGB,payload)

export const dumpinglocation = () => serviceMaker(`/dumpinglocation/all`, methods.GET, api.NGB)

export const Attendance = () => serviceMaker(`/attendence/employee/admin`, methods.GET, api.NGB)

export const classmaster = () => serviceMaker(`/trips/class/all`, methods.GET, api.NGB)

export const days = () => serviceMaker(`/trips/days/all`, methods.GET, api.NGB)

export const type = () => serviceMaker(`/trips/type/all`, methods.GET, api.NGB)

export const stagingarea = () => serviceMaker(`/stagingarea/all`, methods.GET, api.NGB)

export const address = () => serviceMaker(`/location/addressmaster`, methods.GET, api.NGB)

export const countries = () => serviceMaker(`/location/countries`, methods.GET, api.NGB)

export const states = (countryCode) => serviceMaker(`/location/states/${countryCode}`, methods.GET, api.NGB)

export const districts = (stateCode) => serviceMaker(`/location/district/${stateCode}`, methods.GET, api.NGB)

export const permissions = () => serviceMaker(`/permissions/admin/all`, methods.GET, api.NGB)

export const roles = () => serviceMaker(`/roles/admin/all`, methods.GET, api.NGB)

export const users = () => serviceMaker(`/users/admin/readAll`, methods.GET, api.NGB)

export const routemaster = () => serviceMaker(`/routemaster/all `, methods.GET, api.NGB)

export const servicerequests = () => serviceMaker(`/serviceticket/system/all `, methods.GET, api.NGB)

export const incomingtrips = () => serviceMaker(`/tripincoming/all`, methods.GET, api.NGB)

export const equipment = () => serviceMaker(`/equipment/admin/encoders/owner`, methods.GET, api.NGB)

export const vehicle = () => serviceMaker(`/vehicles/admin/encoders/owner `, methods.GET, api.NGB)

export const vehicleTypes = () => serviceMaker(`/vehicles/vehicletypes`, methods.GET,api.NGB)

export const simpleactivation = (payload) => serviceMaker(`/auth/signup`, methods.POST, api.NGB, payload)

export const reviewAttendance = (payload) => serviceMaker('/attendence/checker/admin/review',methods.POST,api.NGB,payload)

export const deletetripincoming = (id) => serviceMaker(`/tripincoming/admin/${id}`, methods.DELETE, api.NGB)

export const deletevehicle = (id) => serviceMaker(`/vehicles/admin/encoders/${id}`, methods.DELETE, api.NGB) 

export const deletepermission = (id) => serviceMaker(`/permissions/admin/${id}`, methods.DELETE, api.NGB) 
 
export const deleteattendance = (id) => serviceMaker(`/attendence/admin/${id}`, methods.DELETE, api.NGB)

export const deletearea = (id) => serviceMaker(`/areamaster/admin/${id}`, methods.DELETE, api.NGB)

export const deleteroute = (id) => serviceMaker(`/routemaster/admin/${id}`, methods.DELETE, api.NGB)

export const deletelgu = (id) => serviceMaker(`/LGU/admin/${id}`, methods.DELETE, api.NGB)


export const deleteemployee = (id) => serviceMaker(`/employees/admin/delete/${id}`, methods.DELETE, api.NGB)

export const deletestagingarea = (id) => serviceMaker(`/stagingarea/admin/${id}`, methods.DELETE, api.NGB) 

export const deletedumping = (id) => serviceMaker(`/dumpinglocation/admin/${id}`, methods.DELETE, api.NGB)

export const deleteuser = (id) => serviceMaker(`/users/admin/delete/${id}`, methods.DELETE, api.NGB)

export const deleteequipment = (id) => serviceMaker(`/equipment/admin/encoders/${id}`, methods.DELETE, api.NGB)

export const deleteservicerequest = (id) => serviceMaker(`/serviceticket/encoder/admin/${id}`, methods.DELETE, api.NGB)

export const deleterole = (id) => serviceMaker(`/roles/admin/${id}`, methods.DELETE, api.NGB)

export const createpermission = (payload) => serviceMaker(`/permissions/admin`, methods.POST, api.NGB, payload)

export const createroute = (payload) => serviceMaker(`/routemaster/admin/create`, methods.POST, api.NGB, payload)

export const createstaging = (payload) => serviceMaker(`/stagingarea/admin`, methods.POST, api.NGB, payload)

export const createdumping = (payload) => serviceMaker(`/dumpinglocation/admin`, methods.POST, api.NGB, payload)

export const createarea = (payload) => serviceMaker(`/areamaster/admin/create`, methods.POST, api.NGB, payload)

export const createuser = (payload) => serviceMaker(`/users/admin/create`, methods.POST, api.NGB, payload)

 export const createattendance = (payload) => serviceMaker(`/attendence/checker/admin/checkin`, methods.POST, api.NGB, payload)

 export const createservicerequest = (payload) => serviceMaker(`/serviceticket/encoder/admin`, methods.POST, api.NGB, payload)

 export const checkout = (payload) => serviceMaker(`/attendence/checker/admin/checkout/`, methods.PUT, api.NGB, payload)

export const createrole = (payload) => serviceMaker(`/roles/admin`, methods.POST, api.NGB, payload)

export const createemployee = (payload) => serviceMaker(`/employees/admin/create`, methods.POST, api.NGB, payload)

export const createhauler = (payload) => serviceMaker(`/haulermaster/admin`, methods.POST, api.NGB, payload)

export const createLGUemployee = (payload) => serviceMaker(`/LGU/admin/create`, methods.POST, api.NGB, payload)

export const createvehicle = (payload) => serviceMaker(`/vehicles/admin/encoders`, methods.POST, api.NGB, payload)

export const createequipment = (payload) => serviceMaker(`/equipment/admin/encoders/`, methods.POST, api.NGB, payload)

export const createcountry = (payload) => serviceMaker(`/location/createcountry`, methods.POST, api.NGB, payload)

export const createcity = (payload) => serviceMaker(`/location/createState`, methods.POST, api.NGB, payload)

export const createarea1 = (payload) => serviceMaker(`/location/createDistrict`, methods.POST, api.NGB, payload)

export const editservicerequest = (payload) => serviceMaker(`/serviceticket/system/issue`, methods.PUT, api.NGB, payload)

export const editrole = (payload) => serviceMaker(`/roles/admin`, methods.PUT, api.NGB, payload)

export const editarea = (payload) => serviceMaker(`/areamaster/admin`, methods.PUT, api.NGB, payload)

export const editattendance = (payload) => serviceMaker(`/attendence/checker/admin/`, methods.PUT, api.NGB, payload)

export const Editpermission = (payload) => serviceMaker (`/permissions/admin`, methods.PUT, api.NGB, payload)

export const Edituser = (payload,id) => serviceMaker (`/users/admin/edit/${id}`, methods.PUT, api.NGB, payload)

export const Editemployee = (payload) => serviceMaker (`/employees/admin/edit`, methods.PUT, api.NGB, payload)

export const editroute = (payload) => serviceMaker (`/routemaster/admin`, methods.PUT, api.NGB, payload)  

export const Editequipment = (payload) => serviceMaker (`/equipment/admin/encoders/owner`, methods.PUT, api.NGB, payload)

export const editstaging = (payload) => serviceMaker (`/stagingarea/admin`, methods.PUT, api.NGB, payload)

export const editdumping = (payload) => serviceMaker (`/dumpinglocation/admin`, methods.PUT, api.NGB, payload)

export const editvehicle = (payload) => serviceMaker (`/vehicles/admin/encoders/owner`, methods.PUT, api.NGB, payload)

export const plandetails = () => serviceMaker(`/chargecode/template`, methods.GET, api.NGB)

export const employees = () => serviceMaker(`/employees/admin/readAll`, methods.GET, api.NGB)

export const haulers = () => serviceMaker(`/haulermaster/all`, methods.GET, api.NGB)

export const lguEmployees = () => serviceMaker(`/LGU/all`, methods.GET, api.NGB)

export const Areamasters = () => serviceMaker(`/areamaster/all`, methods.GET, api.NGB)

export const planprice = (id) => serviceMaker(`/prices/${id}?template=true`, methods.GET, api.NGB)

export const  redeem = (payload) =>
serviceMaker(`/redemption`, methods.POST, api.NGB, payload)
export const plandata = (id,cid,sid) => serviceMaker(`/salescataloge/salescataloges/${id}?clientId=${cid}&clientServiceId=${sid}&planId=0`, methods.GET, api.NGB)

export const addplan = (id,payload) => serviceMaker(`/multipleorders/${id}`, methods.POST, api.NGB,payload)


export const Tripdownload = (id) => serviceMaker(`/tripincoming/system/${id}`, methods.GET, api.NGB)

export const CreateIncomingTrip = (payload) => serviceMaker(`/tripincoming/admin`,methods.POST,api.NGB,payload)

export const Tripoutgoing = (id) => serviceMaker(`/tripoutgoing/system/${id}`, methods.GET, api.NGB)
 

export const searchvoucher = (id) => serviceMaker(`/vouchers/verify?pinNumber=${id}`, methods.GET, api.NGB)


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



export const addpermissiontorole = (id,payload) => serviceMaker(`/roles/assigningpermissions/${id}`, methods.PUT, api.NGB,payload)