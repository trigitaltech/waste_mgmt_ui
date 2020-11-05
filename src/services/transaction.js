import {
    serviceMaker,
    methods,
    api
  } from "./index.js"
  
  export const getTransactionHistoryOfficeBySE = (officeId,fromDate, toDate) => serviceMaker(
    `/financialTransactions/officeid/${officeId}?fromDate=${fromDate}&toDate=${toDate}`,
    methods.GET,
    api.NGB
  );

  export const getTransactionHistoryOffice = (officeId) => serviceMaker(
    `/financialTransactions/officeid/${officeId}`,
    methods.GET,
    api.NGB
  );