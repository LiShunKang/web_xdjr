(function(e){function t(t){for(var r,n,i=t[0],l=t[1],c=t[2],u=0,d=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);m&&m(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(r=!1)}r&&(s.splice(t--,1),e=n(n.s=a[0]))}return e}var r={},o={app:0},s=[];function n(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=r,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var m=l;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"28d7":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFBklEQVRYR52XW2wUVRzGf9+0pVAuykWFaKhGY/RBNAGrNojBREGunZ11kVcJatAQjYmACEIgIERjDEGUEPTNsOzOtikW+9QQgkhAYqJiVEQqXhIubSO1tOx2/ma2lLah7c5yniaZ7/+d75zzv4qoK5kcQXnJXLpZCtyPbBLoDswCxAVMF5GdwtF+7qw8yIwZ2SjUKgg6cGA82c53MZZJGhPiDbqA82B/AyXA7RhTJJX1/Ld/gc8or1jPvHnh95BraAFmDpnMayjYJDTOsBMgH5yDuO53gzJmMo+gYB5GTDDdoA2zd3C9j5FsMJvBBTQ0jKPzSkbiaYNvwVmH6x4seFv9Aen0fBzbKvSQYQ2UVywd7DZuFFBXdx9B7ivBvQa7qIm9OpT6goLMRCb9qaTlhp0m0Bw870x/u4EC8u/ddVJwt8E6XG9zwU2iAPzUekkbDfudspHTWbCgtdesT8CJE2Wcaz4keMJgK673dhTuyBg/tVXSajOOMLVydm+U9Amo9VfJ7D3DDlDjLbrpax9KUfgctf5BwRyDVbje9hDaI6AheRtdJWcJw8sprWTx4suRT1YMMHTuro5zeZNscA+JREuPAD+1u8dRWInr7SjIWbu/msDZjpgGjMLsFDifM378DmbPzg1rn0m/Lvgw7+Cut0LU11eQ7WpF/EE2eIBEont4glQC4wtJjmGnMEniwWsJKI0bjw9r3+NrvwBTqBgzUWRSNUKZ/u8yJEEYJVc7TyONR/YcNfHGPDadfhTZkTATmuxxauLHCtzCGsEWky0K43SPYJkFVOF5x4c19P0FktUbdhg3PmsA1k8fkphlZsuIxfcOy1O7v1rmHDGzT0IBxwRVduuEsoLvF57UYT7Y97jx9PVNwrRd6//Wkz9sCW48OayAxsbR6mhvN+yY8NNnwcYSi08s6HxDAfzUK5J2GbRGjiI/1YZoEX7qKvATsfjDNyXA9+ciqwfacewZFsdPROLJpH7EmBo6YTtwBjcehlRxKyw4sgxSgGkOsdihyAR+6gfE3aGAM6AKXG9yZON8zOULTaukW0wsp8bbU5R9Jn0RaAt94CjiMWpiJUWl3/rkVOVKmg06yHaPK5g/+qtraipVW0s2rAvhKXYKVkQKw/4kYQLLdVYROJ143jfFnT5TJYJjZrZT9Ma2sYWYtzYyUV3dWILcNrCfceMfRbYLgZn0FsEak80XjY2j6Wi/hFkruaCSRCKMisLLT62WtPWaO1QTix0tbASEzW2p0wxMIBeMvbliFO7k+zMh8EE5ykZMY+HC0KkKr75itBvXe7lHwJfJyXTlVbUUdQuFtxuIaGoaSVvLn5iNBqeSWOx8X0OSSb8veNNgH673QrHckfB+OinxvBnbiHmrQ5s+AaEv/Hf5a0nTDDbiehsikUYF+anNktaacZJc90wSiSsDBVx/ipLjEncZfEC2e1VR8T2YmKamUlovbZf0hhnNlI2Y0d9fbmzLfT8cuxqvVbbDBFqC5/0T9aADcOn0FBzbJ/SkwVm67Vni8V/7YwYfTHrGsQNC1WZ2BWkH2e5tYQ8XSYjvT0T2FmYrJY004xAjyt3+7Xgvz9CjWTJZQqmzHGmTYFI+5Rop0N5Bi06+6009Bc6LmMUljTKzC8B6XG93vmANsgoPp/mMl92A8dINw6nxF7LSIYbTPThlGwp12IUF9KpuaCgne2XODeM5dINdzI/nYV9RQrKY8fx/ebA7k09zmigAAAAASUVORK5CYII="},3450:function(e,t,a){"use strict";a("6e96")},"3abb":function(e,t,a){"use strict";a("9376")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],n={mounted:function(){this.$store.commit("setTheme","green")},computed:{theme:function(){return this.$store.getters.getTheme}},watch:{theme:function(e){window.document.documentElement.setAttribute("data-theme",e)}}},i=n,l=(a("5c0b"),a("2877")),c=Object(l["a"])(i,o,s,!1,null,null,null),m=c.exports,u=a("8c4f"),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-container"},[a("div",{staticClass:"body"},[a("TreeDetail")],1)])},p=[],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"treeDetail-container"},[a("div",{staticClass:"dataSet"},[a("div",{staticClass:"dataLi"},[a("div",{staticClass:"infoBox"},[e._m(0),a("div",{staticClass:"dataBox"},[a("p",[e._v("已注册"),a("span",{staticStyle:{color:"#14989A"}},[e._v(e._s(e.dataSet.register?e.dataSet.register:0))])]),a("p",[e._v("未注册"),a("span",{staticStyle:{color:"#F56C6C"}},[e._v(e._s(e.dataSet.noregister?e.dataSet.noregister:0))])])])])]),a("div",{staticClass:"dataLi"},[a("div",{staticClass:"infoBox"},[e._m(1),a("div",{staticClass:"dataBox"},[a("p",[e._v("在线"),a("span",{staticStyle:{color:"#14989A"}},[e._v(e._s(e.dataSet.online?e.dataSet.online:0))])]),a("p",[e._v("离线"),a("span",{staticStyle:{color:"#F56C6C"}},[e._v(e._s(e.dataSet.offline?e.dataSet.offline:0))])]),a("p",[e._v("未激活"),a("span",{staticStyle:{color:"#FF00FF"}},[e._v(e._s(e.dataSet.noActive?e.dataSet.noActive:0))])])])])]),a("div",{staticClass:"dataLi"},[a("div",{staticClass:"infoBox"},[e._m(2),a("div",{staticClass:"dataBox"},[a("p",[e._v("已投运"),a("span",{staticStyle:{color:"#14989A"}},[e._v(e._s(e.dataSet.transport?e.dataSet.transport:0))])]),a("p",[e._v("未投运"),a("span",{staticStyle:{color:"#F56C6C"}},[e._v(e._s(e.dataSet.ontransport?e.dataSet.ontransport:0))])])])])])]),a("div",{staticClass:"btnBox"},[a("el-form",{attrs:{inline:!0,model:e.searchForm}},[a("el-form-item",{attrs:{label:"终端ESN/设备名称"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入"},model:{value:e.searchForm.esn,callback:function(t){e.$set(e.searchForm,"esn",t)},expression:"searchForm.esn"}})],1),a("el-form-item",{attrs:{label:"注册状态"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.searchForm.register,callback:function(t){e.$set(e.searchForm,"register",t)},expression:"searchForm.register"}},[a("el-option",{attrs:{label:"未注册",value:1}}),a("el-option",{attrs:{label:"已注册",value:2}})],1)],1),a("el-form-item",{attrs:{label:"在线状态"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.searchForm.online,callback:function(t){e.$set(e.searchForm,"online",t)},expression:"searchForm.online"}},[a("el-option",{attrs:{label:"未激活",value:3}}),a("el-option",{attrs:{label:"离线",value:2}}),a("el-option",{attrs:{label:"在线",value:1}})],1)],1),a("el-form-item",{attrs:{label:"投运状态"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.searchForm.transport,callback:function(t){e.$set(e.searchForm,"transport",t)},expression:"searchForm.transport"}},[a("el-option",{attrs:{label:"未投运",value:0}}),a("el-option",{attrs:{label:"已投运",value:1}})],1)],1),a("el-form-item",{attrs:{label:"接入日期"}},[a("el-date-picker",{staticStyle:{width:"240px"},attrs:{type:"daterange","range-separator":"-","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.searchForm.time,callback:function(t){e.$set(e.searchForm,"time",t)},expression:"searchForm.time"}})],1),a("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.search}},[e._v("查询")]),a("el-button",{attrs:{icon:"el-icon-refresh-right"},on:{click:e.resetSearch}},[e._v("重置")]),a("div",{staticStyle:{"margin-bottom":"20px"}},[a("el-button",{attrs:{icon:"el-icon-upload"},on:{click:e.add}},[e._v("向导接入")]),a("el-button",{attrs:{disabled:0===e.tableData.length,icon:"el-icon-download"},on:{click:e.exportData}},[e._v("导出")])],1)],1)],1),a("div",{staticClass:"table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"header-cell-style":{textAlign:"center",background:"#F3F3F3",color:"#333"},"cell-style":{textAlign:"center",color:"#333"}}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{prop:"rely_name",label:"关联设备"}}),a("el-table-column",{attrs:{prop:"dev_label",label:"终端ESN"}}),a("el-table-column",{attrs:{label:"注册状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("span",{attrs:{type:"text"}},[e._v(e._s(1===t.row.status?"未注册":""))]),a("span",{attrs:{type:"text"}},[e._v(e._s(2===t.row.status?"已注册":""))])])]}}])}),a("el-table-column",{attrs:{label:"在线状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("span",{attrs:{type:"text"}},[e._v(e._s(2===t.row.is_online?"离线":""))]),a("span",{attrs:{type:"text"}},[e._v(e._s(1===t.row.is_online?"在线":""))]),a("span",{attrs:{type:"text"}},[e._v(e._s(3===t.row.is_online?"未激活":""))])])]}}])}),a("el-table-column",{attrs:{label:"投运状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[a("span",{staticClass:"danger",attrs:{type:"text"}},[e._v(e._s(0===t.row.run_state?"未投运":""))]),a("span",{staticClass:"success",attrs:{type:"text"}},[e._v(e._s(1===t.row.run_state?"已投运":""))])])]}}])}),a("el-table-column",{attrs:{prop:"person",label:"接入负责人"}}),a("el-table-column",{attrs:{prop:"CREAT_TIME",label:"接入日期","min-width":"85"}}),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",disabled:3!==t.row.status},on:{click:function(a){return e.del(t.row)}}},[e._v("注销")]),e._e(),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.update(t.row)}}},[e._v("图形浏览")])]}}])})],1),a("el-pagination",{staticStyle:{"text-align":"right","margin-top":"20px"},attrs:{"current-page":e.currentPage,"page-sizes":[20,50,100,200],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total,background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("CreateNew",{attrs:{detailId:e.detailId,visible:e.visible,title:"向导接入"},on:{handleSuccess:e.search,handleClose:e.closeDialog}}),a("AccessReport",{attrs:{visible:e.showAccessReport,title:"曲线浏览"},on:{handleClose:e.closeAccessReport}})],1)},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"iconBox"},[a("i",{staticClass:"el-icon-s-order"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"iconBox"},[a("i",{staticClass:"el-icon-s-platform"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"iconBox"},[a("i",{staticClass:"el-icon-s-claim"})])}],g=(a("841c"),a("ac1f"),a("99af"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"dialogContainer",attrs:{title:e.title,visible:e.dialogVisible,width:"60%"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.handleClose}},[r("el-card",{staticClass:"box-card"},[r("el-steps",{staticStyle:{margin:"10px 0 10px 0"},attrs:{active:e.step,"align-center":"","process-status":"finish"}},[r("el-step",{attrs:{title:"设备信息",icon:"el-icon-files"}}),r("el-step",{attrs:{title:"关联终端",icon:"el-icon-s-promotion"}}),r("el-step",{attrs:{title:"图形浏览",icon:"el-icon-monitor"}})],1),r("div",{staticClass:"formBox"},[0===e.step?r("div",{staticStyle:{margin:"20px 0"}},[r("el-tabs",{attrs:{type:"border-card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[e._e(),r("el-tab-pane",{attrs:{label:"选择现有模型",name:"second"}},[r("div",{staticStyle:{margin:"40px auto",width:"60%"}},[r("el-form",{ref:"modelForm",attrs:{model:e.modelForm,rules:e.rules,"label-width":"120px",size:"small"}},[r("el-form-item",{staticClass:"nameBox",attrs:{label:"设备类型：",prop:"type"}},[r("el-select",{staticStyle:{width:"240px"},attrs:{placeholder:" "},model:{value:e.modelForm.type,callback:function(t){e.$set(e.modelForm,"type",t)},expression:"modelForm.type"}},[r("el-option",{attrs:{label:"站房",value:2}})],1)],1),1===e.modelForm.type?r("el-form-item",{attrs:{label:"选择台区：",prop:"station"}},[r("el-select",{staticStyle:{width:"240px"},attrs:{filterable:"",remote:"",placeholder:"请输入","remote-method":e.remoteMethod,loading:e.loading},on:{change:e.showTqInfo},model:{value:e.modelForm.station,callback:function(t){e.$set(e.modelForm,"station",t)},expression:"modelForm.station"}},e._l(e.stationList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),2===e.modelForm.type?r("el-form-item",{attrs:{label:"选择站房：",prop:"factory"}},[r("el-select",{staticStyle:{width:"240px"},attrs:{filterable:"",remote:"",placeholder:"请输入","remote-method":e.remoteMethod,loading:e.loading,"no-data-text":"无匹配的站房信息"},on:{change:e.showZfInfo},model:{value:e.modelForm.factory,callback:function(t){e.$set(e.modelForm,"factory",t)},expression:"modelForm.factory"}},e._l(e.factoryList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),r("div",{directives:[{name:"show",rawName:"v-show",value:e.modelForm.isShow1,expression:"modelForm.isShow1"}],staticClass:"stationInfo"},[r("p",[e._v("配变名称："+e._s(e.modelForm.name))]),r("p",[e._v("开关数量："+e._s(e.modelForm.num))])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.modelForm.isShow2,expression:"modelForm.isShow2"}],staticClass:"stationInfo"},[r("p",[e._v("馈线名称："+e._s(e.modelForm.name))]),r("p",[e._v("开关柜数量："+e._s(e.modelForm.num))])])],1)],1)])],1)],1):e._e(),1===e.step?r("div",{staticStyle:{margin:"20px 0"}},[r("div",{staticStyle:{margin:"40px auto",width:"50%"}},[r("el-form",{ref:"relationForm",attrs:{model:e.relationForm,rules:e.rules,"label-width":"120px",size:"small"}},[r("el-form-item",{attrs:{label:e.modelType}},[r("span",{staticStyle:{padding:"0 16px"}},[e._v(e._s(e.typeName))])]),r("el-form-item",{attrs:{label:"终端名称：",prop:"terminalName"}},[r("el-input",{staticStyle:{width:"240px"},model:{value:e.relationForm.terminalName,callback:function(t){e.$set(e.relationForm,"terminalName",t)},expression:"relationForm.terminalName"}})],1),r("el-form-item",{attrs:{label:"ESN：",prop:"esn"}},[r("el-input",{staticStyle:{width:"240px"},model:{value:e.relationForm.esn,callback:function(t){e.$set(e.relationForm,"esn",t)},expression:"relationForm.esn"}}),r("el-popover",{attrs:{placement:"top-start",title:"ESN码说明",width:"200",trigger:"hover"}},[r("div",[e._v("ESN码用于标识一个融合终端。每个融合终端具备唯一的ESN码，可通过登录融合终端通过专用命令查询融合终端的ESN码")]),r("img",{staticClass:"titleImg",attrs:{slot:"reference",src:a("28d7")},slot:"reference"})])],1),r("el-form-item",{attrs:{label:"所属产品：",prop:"product"}},[r("el-select",{staticStyle:{width:"240px"},attrs:{placeholder:" "},on:{change:e.changeProduct},model:{value:e.relationForm.product,callback:function(t){e.$set(e.relationForm,"product",t)},expression:"relationForm.product"}},e._l(e.productList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),r("el-popover",{attrs:{placement:"top-start",title:"产品型号说明",width:"200",trigger:"hover"}},[r("div",[e._v("每个融合终端都属于一类产品型号，物联管理平台通过产品型号管理和分类海量的融合终端。")]),r("img",{staticClass:"titleImg",attrs:{slot:"reference",src:a("28d7")},slot:"reference"})])],1),r("el-form-item",{attrs:{label:"所属厂家：",prop:"manufactor"}},[r("el-select",{staticStyle:{width:"240px"},attrs:{placeholder:" "},model:{value:e.relationForm.manufactor,callback:function(t){e.$set(e.relationForm,"manufactor",t)},expression:"relationForm.manufactor"}},e._l(e.manufactorList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"所属项目：",prop:"project"}},[r("el-select",{staticStyle:{width:"240px"},attrs:{placeholder:" "},model:{value:e.relationForm.project,callback:function(t){e.$set(e.relationForm,"project",t)},expression:"relationForm.project"}},e._l(e.projectList,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1)]):e._e(),2===e.step?r("div",{staticStyle:{margin:"20px 0",height:"500px"}},[r("iframe",{staticStyle:{height:"100%",width:"100%"},attrs:{src:e.iframeSrc}})]):e._e(),r("div",{staticStyle:{"text-align":"right","margin-right":"10%"}},[2!==e.step?r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.nextStep(e.step)}}},[e._v("下一步")]):r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.nextStep(e.step)}}},[e._v("完成")])],1)])],1)],1)}),v=[],b=a("1da1"),y=(a("96cf"),a("b64b"),a("07ac"),a("b0c0"),a("7db0"),a("4de4"),a("1276"),a("d3b7"),a("bc3a")),F=a.n(y),S=F.a.create({timeout:5e3});S.interceptors.request.use((function(e){return e.headers["content-type"]="application/json",e}),(function(e){return console.log(e),Promise.reject(e)})),S.interceptors.response.use((function(e){return e.data}),(function(e){return console.log("err"+e),Promise.reject(e)}));var x=S;function w(e){return x({url:"/dist/terminalzf/ShowDeviceInfoController/getIotInfoDatagrid",method:"post",params:e})}function _(e){return x({url:"/dist/terminalzf/plzxController/deleteIotInfo",method:"post",params:e})}function A(e){return x({url:"/dist/terminalzf/ShowDeviceInfoController/getIotInfoDiv",method:"post",params:e})}function C(e){return x({url:"/dist/terminalzf/ShowDeviceInfoController/getDeviceInfoByName",method:"post",params:e})}function N(e){return x({url:"/dist/terminalzf/ShowDeviceInfoController/saveYySb",method:"post",params:e})}function I(e){return x({url:"/dist/terminalzf/ShowDeviceInfoController/projectInfo",method:"post",params:e})}function k(e){return x({url:"/dist/terminalzf/iotController/addGatewayInfo",method:"post",params:e})}function T(e){return x({url:"/dist/terminalzf/ShowDeviceInfoController/getGraphNameByZfId",method:"post",params:e})}var j={data:function(){var e=function(e,t,a){if(t){var r=/^[0-9a-zA-Z]*$/;return r.test(t)?a():a(new Error("ESN只能为数字"))}return a(new Error("ESN不能为空"))};return{dialogVisible:!1,step:0,loading:!1,activeName:"first",modelType:"台区名称：",typeName:"",addForm:{type:2,tqname:"",zfname:"",num:"",nameRule:"",variableName:"",relation:!1},modelForm:{type:2,station:"",factory:"",name:"",num:"",isShow1:!1,isShow2:!1},relationForm:{terminalName:"",esn:"",product:"",manufactor:"",project:""},rules:{type:[{required:!0,message:"请选择设备类型",trigger:"change"}],tqname:[{required:!0,message:"请输入台区名称",trigger:"blur"}],zfname:[{required:!0,message:"请输入站房名称",trigger:"blur"}],num:[{required:!0,message:"请输入出线开关数量",trigger:"blur"}],nameRule:[{required:!0,message:"请选择开关命名规则",trigger:"change"}],variableName:[{required:!0,message:"请选择变量",trigger:"change"}],station:[{required:!0,message:"请选择台区",trigger:"change"}],factory:[{required:!0,message:"请选择站房",trigger:"change"}],terminalName:[{required:!0,message:"请输入终端名称",trigger:"blur"}],esn:[{required:!0,validator:e,trigger:"blur"}],product:[{required:!0,message:"请选择所属产品",trigger:"change"}],manufactor:[{required:!0,message:"请选择所属厂家",trigger:"change"}],project:[{required:!0,message:"请选择所属项目",trigger:"change"}]},nameRuleList:[],stationList:[],factoryList:[],productList:[],manufactorList:[],projectList:[],variableList:[],iframeSrc:""}},props:{visible:{default:!1,type:Boolean},detailId:{default:""},title:{default:"标题"}},watch:{visible:function(e){this.dialogVisible=e,this.activeName="second",this.step=0},activeName:function(e){"first"===e?(this.resetModelForm(),this.nameRuleList&&0===this.nameRuleList.length&&(this.getNameRuleList(),this.getVariableList())):"second"===e&&this.resetAddForm()},detailId:function(e){""!==e&&this.getInfo()},"addForm.type":{handler:function(e){this.resetAddForm(),1===e?this.addForm.type=1:2===e&&(this.addForm.type=2)}},"modelForm.type":{handler:function(e){this.resetModelForm(),1===e?this.modelForm.type=1:2===e&&(this.modelForm.type=2)}}},methods:{getInfo:function(){console.log(this.detailId),this.step=2,this.getIframeSrc(this.detailId)},handleClose:function(){this.resetDialog(),this.$emit("handleClose",!1)},getNameRuleList:function(){this.nameRuleList=[{label:"*QF",value:1},{label:"DP",value:2},{label:"*EF*",value:3}]},getListData:function(){var e=this;I().then((function(t){console.log(t);for(var a=[],r=Object.keys(t.sscp),o=Object.values(t.sscp),s=0;s<r.length;s++){var n={value:r[s],label:o[s]};a.push(n)}e.productList=a,console.log(e.productList);for(var i=[],l=Object.keys(t.cpcj),c=Object.values(t.cpcj),m=0;m<l.length;m++){var u={value:l[m],label:c[m]};i.push(u)}e.manufactorList=i,console.log(e.manufactorList);for(var d=[],p=Object.keys(t.ssxm),h=Object.values(t.ssxm),f=0;f<h.length;f++){var g={value:p[f],label:h[f]};"方天项目"==h[f]&&(e.relationForm.project=p[f]),d.push(g)}e.projectList=d,console.log(e.projectList)}))},getVariableList:function(){this.variableList=[{label:"变量1",value:1},{label:"变量2",value:2},{label:"变量3",value:3}]},showTqInfo:function(e){this.modelForm.name="adhjas",this.modelForm.num=5,this.modelForm.isShow1=""!==e},showZfInfo:function(e){var t={};t=this.factoryList.find((function(t){return t.value===e})),this.typeName=t.label,this.relationForm.terminalName=t.label+"网关"},nextStep:function(e){var t=this;0===e?(this.getListData(),"first"===this.activeName?this.$refs["addForm"].validate((function(e){e&&(2===t.addForm.type?t.modelType="站房名称：":t.modelType="台区名称：",t.step=1)})):"second"===this.activeName&&this.$refs["modelForm"].validate((function(e){if(e){2===t.modelForm.type?t.modelType="站房名称：":t.modelType="台区名称：";var a={byqId:t.modelForm.factory,areaName:t.$store.getters.getAreaName};console.log(a),N(a).then((function(e){console.log("第一步"),console.log(e),e.is_success?t.step=1:t.$message({type:"error",message:e.errormsg})})),console.log(t.typeName)}}))):1===e?this.$refs["relationForm"].validate((function(e){if(e){var a={gateway_name:t.relationForm.terminalName,gateway_code:t.relationForm.esn,org_id:t.$store.getters.getOrgId,pms_id:t.modelForm.factory,fac_id:"",pjId:t.relationForm.project,pdId:t.relationForm.product,relyType:"10",isFixed:"F"};k(a).then((function(e){if(console.log("第二步"),console.log(e),2e3==e.code)t.$message({type:"success",message:"注册成功"}),t.$emit("handleSuccess"),t.getIframeSrc(t.modelForm.factory),t.step=2;else{var a="注册失败";JSON.parse(e.result).errMsg&&(a=JSON.parse(e.result).errMsg),t.$message({type:"error",message:a}),t.$emit("handleSuccess"),t.handleClose()}}))}})):this.handleClose()},resetDialog:function(){this.step=0,this.activeName="first",this.resetAddForm(),this.resetModelForm(),this.resetrelationForm()},resetAddForm:function(){this.addForm={type:2,tqname:"",zfname:"",num:"",nameRule:"",variableName:"",relation:!1},this.$refs["addForm"]&&this.$refs["addForm"].resetFields()},resetModelForm:function(){this.modelForm={type:2,station:"",factory:"",name:"",num:"",isShow1:!1,isShow2:!1},this.$refs["modelForm"]&&this.$refs["modelForm"].resetFields()},resetrelationForm:function(){this.relationForm={terminalName:"",esn:"",product:"",manufactor:"",project:""},this.$refs["relationForm"]&&this.$refs["relationForm"].resetFields()},remoteMethod:function(e){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function a(){var r,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(""===e){a.next=9;break}return r={dev_type:"10",orgId:t.$store.getters.getOrgId,name:e},t.loading=!0,o=[],a.next=6,C(r).then((function(e){if(console.log(e),console.log(e.data),2e3==e.code){var a=Object.values(e.data);console.log(a),a.filter((function(e){var t=e.split(":"),a={value:t[0],pmsId:t[1],label:t[2]};o.push(a)})),console.log("Allarr"),console.log(o),t.factoryList=o}})).catch((function(e){console.log(e)}));case 6:t.loading=!1,a.next=10;break;case 9:t.loading=!1;case 10:case"end":return a.stop()}}),a)})))()},changeProduct:function(e){this.relationForm.manufactor="",console.log(e);var t={};t=this.productList.find((function(t){return t.value===e})),console.log(t),this.relationForm.manufactor=t.label},getIframeSrc:function(e){var t=this,a={zfId:e,feederId:""};T(a).then((function(e){t.iframeSrc="http://21.47.224.120:19098/graph/Navigator.html?isClient=1;menubarshow=0;graph="+e.graphName}))}}},O=j,D=(a("3450"),Object(l["a"])(O,g,v,!1,null,"4cc31c75",null)),E=D.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.title,visible:e.dialogVisible,width:"70%"},on:{"update:visible":function(t){e.dialogVisible=t},close:e.handleClose}},[a("div",[a("div",[a("div",{staticStyle:{display:"inline-block",margin:"0 20px"}},[e._v("选择时间： "),a("el-date-picker",{staticStyle:{width:"240px"},attrs:{type:"daterange","range-separator":"-",size:"small","start-placeholder":"开始时间","end-placeholder":"结束时间"},on:{change:e.changeTime},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1),a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.electric,callback:function(t){e.electric=t},expression:"electric"}},e._l(e.electricList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-button",{staticStyle:{margin:"0 20px"},attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")])],1),a("div",{ref:"chart",staticStyle:{width:"100%",height:"400px",margin:"20px 0"}})])])},z=[],B=a("313e"),M=a.n(B),$={data:function(){return{dialogVisible:!1,option:{},time:null,electric:null,electricList:[{label:"电流（A）",value:1},{label:"电压（V）",value:2}],xAxisData:[]}},props:{visible:{default:!1,type:Boolean},title:{default:"标题"}},watch:{visible:function(e){var t=this;this.dialogVisible=e,this.getxAxis(),e&&this.$nextTick((function(){t.showChart()}))}},methods:{handleClose:function(){this.resetDialog(),this.$emit("handleClose",!1)},resetDialog:function(){this.time=null,this.electric=null},getxAxis:function(){var e=new Date,t=e.getFullYear(),a=e.getMonth()+1>=10?""+(e.getMonth()+1):"0"+(e.getMonth()+1),r=e.getDate(),o="".concat(t,"-").concat(a,"-").concat(r," ");console.log(o);var s=e.getHours();this.xAxisData=[];for(var n=0;n<s;n++){var i="";i=n<10?"".concat(o,"0").concat(n,":00"):"".concat(o).concat(n,":00"),this.xAxisData.push(i)}},showChart:function(){var e=this.$refs.chart,t=M.a.init(e);this.option={legend:{data:["A相电流值（A）","B相电流值（A）","C相电流值（A）"]},dataZoom:[{show:!0,start:0,end:50},{type:"inside",start:0,end:50}],xAxis:{name:"时间",type:"category",data:this.xAxisData},yAxis:{name:"(A)",type:"value"},series:[{name:"A相电流值（A）",data:[820,932,901,934,1290,1330,1320,820,932,901,934,1290,1330,1320,820,932,901,934,1290,1330,1320],type:"line",smooth:!0,itemStyle:{normal:{color:"#FF8C00",lineStyle:{color:"#FF8C00"}}}},{name:"B相电流值（A）",data:[220,93,332,92,1293,130,220,93,332,92,1293,130,1320,820,932,901,934,1290,1330,1320],type:"line",smooth:!0,itemStyle:{normal:{color:"#00BFFF",lineStyle:{color:"#00BFFF"}}}},{name:"C相电流值（A）",data:[1330,1320,820,932,901,901,934,1290,820,932,901,934,1290,1330,1320,934,1290,820,932,1330,1320],type:"line",smooth:!0,itemStyle:{normal:{color:"#FF00FF",lineStyle:{color:"#FF00FF"}}}}]},t.setOption(this.option)},changeTime:function(e){if(e&&0!==e.length){var t=e[0].getTime(),a=e[1].getTime();t<a-6048e5&&(this.$message({message:"开始时间和结束时间不能超过一周",type:"warning"}),this.time=null)}},search:function(){}}},R=$,V=Object(l["a"])(R,L,z,!1,null,"0f335a83",null),Y=V.exports,J={components:{CreateNew:E,AccessReport:Y},data:function(){return{noData:!1,dataSet:{register:0,noregister:0,online:0,offline:0,noActive:0,transport:0,ontransport:0},searchForm:{type:null,equipment:null,esn:null,register:null,online:null,transport:null,time:[]},tableData:[],detailId:"",visible:!1,showAccessReport:!1,currentPage:1,pageNum:1,pageSize:20,total:0,searchObj:{}}},created:function(){window.parent.postMessage("getOrgInfo","*")},mounted:function(){var e,t,a=this;window.addEventListener("message",(function(r){console.log("ces",r.data),e=JSON.parse(r.data).orgId,console.log(e),t=JSON.parse(r.data).loginUsrName,a.saveMessage(e,t),a.search()}))},methods:{search:function(){var e=null,t=null;this.searchForm.time&&0!==this.searchForm.time.length&&(e=this.changeTime(this.searchForm.time[0]),t=this.changeTime(this.searchForm.time[1])),this.searchObj={ESN:this.searchForm.esn,register_state:this.searchForm.register,online_state:this.searchForm.online,run_state:this.searchForm.transport,start_date:e,end_date:t,page:this.pageNum,rows:this.pageSize,orgId:this.$store.getters.getOrgId,dev_type:"10"},this.getTable(this.searchObj)},resetSearch:function(){this.pageNum=1,this.searchForm={ESN:null,state:null,onlineState:null,runState:null,time:[],page:this.pageNum,rows:this.pageSize},this.search()},changeTime:function(e){var t=e.getFullYear(),a=e.getMonth()+1>=10?""+(e.getMonth()+1):"0"+(e.getMonth()+1),r=e.getDate()>=10?""+e.getDate():"0"+e.getDate(),o="".concat(t,"-").concat(a,"-").concat(r);return o},getTable:function(e){var t=this;w(e).then((function(e){console.log("表格数据"),console.log(e),t.total=0,2e3==e.code&&(t.tableData=e.data,t.total=e.total)})),this.getTopDivInfo()},getTopDivInfo:function(){var e=this,t={orgId:this.$store.getters.getOrgId};A(t).then((function(t){console.log("顶部数据"),console.log(t),console.log(t.code),console.log(t.data),2e3==t.code&&(e.dataSet={register:t.data.REG_SUCCESS_SUM,noregister:t.data.REG_FAIL_SUM,online:t.data.ONLINE_SUM,offline:t.data.OFFLINE_SUM,noActive:t.data.NOACTIVE_SUM,transport:t.data.RUN_SUM,ontransport:t.data.NORUN_SUM})}))},add:function(){this.visible=!0},closeDialog:function(){this.visible=!1,this.detailId=""},inputExport:function(){this.showAccessReport=!0},closeAccessReport:function(){this.showAccessReport=!1},update:function(e){console.log(e),this.detailId=e.id,this.visible=!0},handleSizeChange:function(e){this.pageSize=e,this.search()},handleCurrentChange:function(e){this.pageNum=e,this.search()},exportData:function(){var e=this;this.$confirm("本次导出"+this.total+"条数据，是否确认导出?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var t=null,a=null;e.searchForm.time&&0!==e.searchForm.time.length&&(t=e.changeTime(e.searchForm.time[0]),a=e.changeTime(e.searchForm.time[1]));var r="/dist/terminalzf/plzxController/dcZfExcel?";e.searchForm.esn&&(r=r+"ESN="+e.searchForm.esn+"&"),e.searchForm.register&&(r=r+"register_state="+e.searchForm.register+"&"),e.searchForm.online&&(r=r+"online_state="+e.searchForm.online+"&"),e.searchForm.transport&&(r=r+"run_state="+e.searchForm.transport+"&"),e.searchForm.time&&0!=e.searchForm.time.length&&(r=r+"start_date="+t+"&end_date="+a+"&"),r=r.substring(0,r.length-1),console.log(r),window.location.href=r})).catch((function(){e.$message({type:"info",message:"已取消"})}))},del:function(e){var t=this,a=[e.id];this.$confirm("是否确认注销?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){_(a).then((function(e){console.log("注销"),console.log(e),2e3==e.code?(t.$message({type:"success",message:"注销成功!"}),t.getTable()):t.$message({type:"error",message:e.errMsg})}))})).catch((function(){t.$message({type:"info",message:"已取消"})}))},saveMessage:function(e,t){this.$store.commit("setOrgId",e),this.$store.commit("setAreaName",t),this.search()}}},U=J,q=(a("9f84"),Object(l["a"])(U,h,f,!1,null,"769b7cdb",null)),P=q.exports,G={components:{TreeDetail:P},data:function(){return{}},methods:{}},Z=G,W=(a("3abb"),Object(l["a"])(Z,d,p,!1,null,"376d25ae",null)),K=W.exports;r["default"].use(u["a"]);var Q=[{path:"/",name:"Home",component:K}],H=new u["a"]({routes:Q}),X=H,ee=a("2f62");r["default"].use(ee["a"]);var te=new ee["a"].Store({state:{orgId:"",areaName:"",theme:""},mutations:{setOrgId:function(e,t){e.orgId=t},setAreaName:function(e,t){e.areaName=t},setTheme:function(e,t){e.theme=t}},getters:{getOrgId:function(e){return e.orgId},getAreaName:function(e){return e.areaName},getTheme:function(e){return e.theme}},actions:{},modules:{}}),ae=a("5c96"),re=a.n(ae);a("0fae");r["default"].use(re.a,{size:"small"}),r["default"].config.productionTip=!1,new r["default"]({router:X,store:te,render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("70c1")},"6e7d":function(e,t,a){},"6e96":function(e,t,a){},"70c1":function(e,t,a){},9376:function(e,t,a){},"9f84":function(e,t,a){"use strict";a("6e7d")}});