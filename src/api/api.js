import { get, post } from './http.js'

// 获取表格数据
export const getTableData = (data) => post( '/zfjr/ShowDeviceInfoController/getDeviceInfoDatagrid', data )

// 注销
export const delData = (data) => post( '/zfjr/plzxController/deleteIotInfo', data )

// 获取div汇总数据
export const getTopInfo = (data) => post( '/zfjr/getIoInfoDiv', data )

// 根据关键字查询站房列表
export const getZfListByName = (data) => post( '/zfjr/getDeviceInfoByName', data )

// 第一步到第二步的请求
export const nextOne = (data) => post( '/zfjr/saveYySb', data )

// 获取产品、工厂、项目
export const getListInfo = (data) => get( '/zfjr/projectInfo', data )