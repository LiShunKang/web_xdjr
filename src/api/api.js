import request from './http.js'

// 获取表格数据
export function getTableData(data) {
    return request({
        url: '/dist/terminalzf/ShowDeviceInfoController/getIotInfoDatagrid',
        method: 'post',
        params:data
    })
}
// 注销
export function delData(data) {
    return request({
        url: '/dist/terminalzf/plzxController/deleteIotInfo',
        method: 'post',
        params:data
    })
}
// 获取div汇总数据
export function getTopInfo(data) {
    return request({
        url: '/dist/terminalzf/ShowDeviceInfoController/getIotInfoDiv',
        method: 'post',
        params:data
    })
}
// 根据关键字查询站房列表
export function getZfListByName(data) {
    return request({
        url: '/dist/terminalzf/ShowDeviceInfoController/getDeviceInfoByName',
        method: 'post',
        params:data
    })
}
// 第一步到第二步的请求
export function nextOne(data) {
    return request({
        url: '/dist/terminalzf/ShowDeviceInfoController/saveYySb',
        method: 'post',
        params:data
    })
}
// 获取产品、工厂、项目
export function getListInfo(data) {
    return request({
        url: '/dist/terminalzf/ShowDeviceInfoController/projectInfo',
        method: 'post',
        params:data
    })
}
// 第二步到第三步的请求
export function addZfInfo(data) {
    return request({
        url: '/dist/terminalzf/iotController/addGatewayInfo',
        method: 'post',
        params:data
    })
}
// 获取线图
export function getLineSrc(data) {
    return request({
        url: '/dist/terminalzf/ShowDeviceInfoController/getGraphNameByZfId',
        method: 'post',
        params:data
    })
}
// 导出
export function exportList(data) {
    return request({
        url: '/dist/terminalzf/ShowDeviceInfoController/getGraphNameByZfId',
        method: 'post',
        params:data
    })
}