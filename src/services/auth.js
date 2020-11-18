import {
    serviceMaker,
    methods,
    api
} from "./index.js"

export const authAPI = (payload) => serviceMaker(`/auth/login`, methods.POST, api.NGB,payload)

export const dumpinglocation = () => serviceMaker(`/dumpinglocation/all`, methods.GET, api.NGB)

export const Attendance = () => serviceMaker(`/attendence/employee/admin/`, methods.GET, api.NGB)

export const stagingarea = () => serviceMaker(`/stagingarea/all`, methods.GET, api.NGB)

export const permissions = () => serviceMaker(`/permissions/all`, methods.GET, api.NGB)

export const roles = () => serviceMaker(`/roles/all`, methods.GET, api.NGB)

export const users = () => serviceMaker(`/users/admin/readAll`, methods.GET, api.NGB)

export const routemaster = () => serviceMaker(`/routemaster/all `, methods.GET, api.NGB)

export const equipment = () => serviceMaker(`/equipment/admin/encoders/owner`, methods.GET, api.NGB)

export const vehicle = () => serviceMaker(`/vehicles/admin/encoders/owner `, methods.GET, api.NGB)

export const simpleactivation = (payload) => serviceMaker(`/auth/signup`, methods.POST, api.NGB, payload)

export const deletevehicle = (id) => serviceMaker(`/vehicles/admin/encoders/${id}`, methods.DELETE, api.NGB) 

export const deletepermission = (id) => serviceMaker(`/permissions/admin/${id}`, methods.DELETE, api.NGB) 
 
export const deleteattendance = (id) => serviceMaker(`/attendence/admin/${id}`, methods.DELETE, api.NGB)

export const deletearea = (id) => serviceMaker(`/areamaster/admin/${id}`, methods.DELETE, api.NGB)

export const deleteroute = (id) => serviceMaker(`/routemaster/admin/${id}`, methods.DELETE, api.NGB)

export const deleteemployee = (id) => serviceMaker(`/employees/admin/delete/${id}`, methods.DELETE, api.NGB)

export const deletestagingarea = (id) => serviceMaker(`/stagingarea/admin/${id}`, methods.DELETE, api.NGB) 

export const deletedumping = (id) => serviceMaker(`/dumpinglocation/admin/${id}`, methods.DELETE, api.NGB)

export const deleteuser = (id) => serviceMaker(`/users/admin/delete/${id}`, methods.DELETE, api.NGB)

export const deleteequipment = (id) => serviceMaker(`/equipment/admin/encoders/${id}`, methods.DELETE, api.NGB)

export const deleterole = (id) => serviceMaker(`/roles/admin/${id}`, methods.DELETE, api.NGB)

export const createpermission = (payload) => serviceMaker(`/permissions/admin`, methods.POST, api.NGB, payload)

export const createroute = (payload) => serviceMaker(`/routemaster/admin`, methods.POST, api.NGB, payload)

export const createstaging = (payload) => serviceMaker(`/stagingarea/admin`, methods.POST, api.NGB, payload)

export const createdumping = (payload) => serviceMaker(`/dumpinglocation/admin`, methods.POST, api.NGB, payload)

export const createarea = (payload) => serviceMaker(`/areamaster/admin`, methods.POST, api.NGB, payload)

export const createuser = (payload) => serviceMaker(`/users/admin/create`, methods.POST, api.NGB, payload)

export const createrole = (payload) => serviceMaker(`/roles/admin`, methods.POST, api.NGB, payload)

export const createemployee = (payload) => serviceMaker(`/employees/admin/create`, methods.POST, api.NGB, payload)

export const createvehicle = (payload) => serviceMaker(`/vehicles/admin/encoders`, methods.POST, api.NGB, payload)

export const createequipment = (payload) => serviceMaker(`/equipment/admin/encoders/`, methods.POST, api.NGB, payload)

export const Editpermission = (payload) => serviceMaker (`/permissions/admin`, methods.PUT, api.NGB, payload)

export const Edituser = (payload) => serviceMaker (`/areamaster/admin`, methods.PUT, api.NGB, payload)

export const editroute = (payload) => serviceMaker (`/routemaster/admin`, methods.PUT, api.NGB, payload)  

export const editstaging = (payload) => serviceMaker (`/stagingarea/admin`, methods.PUT, api.NGB, payload)

export const plandetails = () => serviceMaker(`/chargecode/template`, methods.GET, api.NGB)

export const employees = () => serviceMaker(`/employees/admin/readAll`, methods.GET, api.NGB)

export const Areamasters = () => serviceMaker(`/areamaster/all`, methods.GET, api.NGB)

export const planprice = (id) => serviceMaker(`/prices/${id}?template=true`, methods.GET, api.NGB)

export const  redeem = (payload) =>
serviceMaker(`/redemption`, methods.POST, api.NGB, payload)
export const plandata = (id,cid,sid) => serviceMaker(`/salescataloge/salescataloges/${id}?clientId=${cid}&clientServiceId=${sid}&planId=0`, methods.GET, api.NGB)

export const addplan = (id,payload) => serviceMaker(`/multipleorders/${id}`, methods.POST, api.NGB,payload)


export const Tripdownload = (id) => serviceMaker(`/tripincoming/system/${id}`, methods.GET, api.NGB)
 

export const searchvoucher = (id) => serviceMaker(`/vouchers/verify?pinNumber=${id}`, methods.GET, api.NGB)