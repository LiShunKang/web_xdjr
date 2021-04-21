<template>
    <div class="treeDetail-container">
        <!-- <div class="nav">当前位置：{{nodeInfo ? nodeInfo.label : ''}}</div> -->
        <div class="dataSet">
            <div class="dataLi">
                <div class="infoBox">
                    <div class="iconBox"><i class="el-icon-s-order"></i></div>
                    <div class="dataBox">
                        <p>已注册<span style="color: #14989A">{{dataSet.register ? dataSet.register : 0}}</span></p>
                        <p>未注册<span style="color: #F56C6C">{{dataSet.noregister ? dataSet.noregister : 0}}</span></p>
                    </div>
                </div>
            </div>
            <div class="dataLi">
                <div class="infoBox">
                    <div class="iconBox"><i class="el-icon-s-platform"></i></div>
                    <div class="dataBox">
                        <p>在线<span style="color: #14989A">{{dataSet.online ? dataSet.online : 0}}</span></p>
                        <p>离线<span style="color: #F56C6C">{{dataSet.offline ? dataSet.offline : 0}}</span></p>
                        <p>未激活<span style="color: #FF00FF">{{dataSet.noActive ? dataSet.noActive : 0}}</span></p>
                    </div>
                </div>
            </div>
            <div class="dataLi">
                <div class="infoBox">
                    <div class="iconBox"><i class="el-icon-s-claim"></i></div>
                    <div class="dataBox">
                        <p>已投运<span style="color: #14989A">{{dataSet.transport ? dataSet.transport : 0}}</span></p>
                        <p>未投运<span style="color: #F56C6C">{{dataSet.ontransport ? dataSet.ontransport : 0}}</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="btnBox">
            <el-form :inline="true" :model="searchForm">
                <!-- <el-form-item label="关联设备">
                    <el-input v-model="searchForm.equipment" placeholder="请输入关联设备" style="width: 150px"></el-input>
                </el-form-item> -->
                <!-- <el-form-item label="设备类型">
                    <el-select v-model="searchForm.type" placeholder="请选择" style="width:150px">
                        <el-option label="台区" :value="3"></el-option>
                        <el-option label="站房" :value="10"></el-option>
                    </el-select>
                </el-form-item> -->
                <el-form-item label="终端ESN/设备名称">
                    <el-input v-model="searchForm.esn" placeholder="请输入" style="width: 150px"></el-input>
                </el-form-item>
                <el-form-item label="注册状态">
                    <el-select v-model="searchForm.register" placeholder="请选择" style="width:150px">
                        <el-option label="未注册" :value="1"></el-option>
                        <el-option label="已注册" :value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="在线状态">
                    <el-select v-model="searchForm.online" placeholder="请选择" style="width:150px">
                        <el-option label="未激活" :value="3"></el-option>
                        <el-option label="离线" :value="2"></el-option>
                        <el-option label="在线" :value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="投运状态">
                    <el-select v-model="searchForm.transport" placeholder="请选择" style="width:150px">
                        <el-option label="未投运" :value="0"></el-option>
                        <el-option label="已投运" :value="1"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="接入日期">
                    <el-date-picker v-model="searchForm.time" type="daterange" range-separator="-"
                    start-placeholder="开始日期" end-placeholder="结束日期" style="width:240px"></el-date-picker>
                </el-form-item>
                <el-button @click="search" icon="el-icon-search">查询</el-button>
                <el-button @click="resetSearch" icon="el-icon-refresh-right">重置</el-button>
                <div style="margin-bottom: 20px">
                   <el-button @click="add" icon="el-icon-upload">向导接入</el-button>
                    <el-button @click="exportData" :disabled="tableData.length === 0" icon="el-icon-download">导出</el-button> 
                </div>
            </el-form>
        </div>
        <div class="table">
            <el-table :data="tableData" style="width: 100%"
            :header-cell-style="{textAlign: 'center',background: '#F3F3F3', color: '#333'}" 
            :cell-style="{ textAlign: 'center', color: '#333'}">
                <el-table-column type="index"></el-table-column>
                <el-table-column prop="rely_name" label="关联设备" ></el-table-column>
                <!-- <el-table-column label="设备类型">
                    <template slot-scope="scope">
                        <div>
                            <span type="text">{{scope.row.type === 10 ? '站房' : ''}}</span>
                            <span type="text">{{scope.row.type === 3 ? '台区' : ''}}</span>
                        </div>
                    </template>
                </el-table-column> -->
                <el-table-column prop="dev_label" label="终端ESN"></el-table-column>
                <el-table-column label="注册状态">
                    <template slot-scope="scope">
                        <div>
                            <span type="text">{{scope.row.status === 1 ? '未注册' : ''}}</span>
                            <span type="text">{{scope.row.status === 2 ? '已注册' : ''}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="在线状态">
                    <template slot-scope="scope">
                        <div>
                            <span type="text">{{scope.row.is_online === 2 ? '离线' : ''}}</span>
                            <span type="text">{{scope.row.is_online === 1 ? '在线' : ''}}</span>
                            <span type="text">{{scope.row.is_online === 3 ? '未激活' : ''}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="投运状态">
                    <template slot-scope="scope">
                        <div>
                            <span type="text" class="danger">{{scope.row.run_state === 0 ? '未投运' : ''}}</span>
                            <span type="text" class="success">{{scope.row.run_state === 1 ? '已投运' : ''}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="person" label="接入负责人"></el-table-column>
                <el-table-column prop="CREAT_TIME" label="接入日期" min-width="85"></el-table-column>
                <el-table-column fixed="right" label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button @click="del(scope.row)" type="text" :disabled = "scope.row.status !== 3">注销</el-button>
                        <el-button @click="inputExport(scope.row)" type="text" v-if="false">曲线浏览</el-button>
                        <el-button @click="update(scope.row)" type="text">图形浏览</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[20, 50, 100, 200]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                style="text-align: right; margin-top: 20px"
                :total="total" background>
            </el-pagination>
        </div>
        <CreateNew :detailId="detailId" :visible="visible" @handleSuccess="search" title="向导接入" @handleClose="closeDialog"/>
        <AccessReport :visible="showAccessReport" title="曲线浏览" @handleClose="closeAccessReport"/>
    </div>
</template>
<script>
import CreateNew from "./create.vue"
import AccessReport from "./accessReport.vue"
import { getTableData, delData, getTopInfo } from "../api/api"
export default {
    components:{ CreateNew, AccessReport },
    data(){
        return{
            noData: false, // 无数据
            dataSet: {
                register: 0,
                noregister: 0,
                online: 0,
                offline: 0,
                noActive: 0,
                transport: 0,
                ontransport: 0,
            },
            searchForm: {
                type: null,
                equipment: null,
                esn: null,
                register: null,
                online: null,
                transport: null,
                time: []
            }, // 查询条件form
            tableData:[], // 表格数据
            detailId: '', // 当前行id
            visible: false,
            showAccessReport: false,
            currentPage: 1,
            pageNum: 1,
            pageSize: 20,
            total: 0,
            searchObj: {}, //查询中间变量
        }
    },
    // props:{
    //     nodeInfo:{
    //         default:{},
    //     }
    // },
    // watch:{
    //     nodeInfo(val){
    //         if(val){
    //             this.noData = false
    //         }else{
    //             this.noData = true
    //         }
    //     }
    // },
    created() {
        window.parent.postMessage('getOrgInfo', '*');
        // this.saveMessage('002237000020');
    },
    mounted(){
        let orgId;
        let loginUsrName;
        window.addEventListener('message', event => {
            console.log('ces',event.data)
            orgId = JSON.parse(event.data).orgId;
            console.log(orgId)
            loginUsrName = JSON.parse(event.data).loginUsrName;
            this.saveMessage(orgId, loginUsrName)
            this.search()
        })
    },
    methods:{
        // 查询
        search(){
            let startTime = null;
            let endTime = null;
            if(this.searchForm.time && this.searchForm.time.length !== 0){
               startTime = this.changeTime(this.searchForm.time[0]);
               endTime = this.changeTime(this.searchForm.time[1])
            }
            this.searchObj = {
                // trname: this.searchForm.equipment,
                ESN: this.searchForm.esn,
                register_state: this.searchForm.register,
                online_state: this.searchForm.online,
                run_state: this.searchForm.transport,
                start_date: startTime,
                end_date: endTime,
                page: this.pageNum,
                rows: this.pageSize,
                orgId: this.$store.getters.getOrgId,
                dev_type: "10"
            }
            this.getTable(this.searchObj)
        },
        resetSearch(){
            this.pageNum = 1;
            this.searchForm = {
                // trname: null,
                ESN: null,
                state: null,
                onlineState: null,
                runState: null,
                time: [],
                page: this.pageNum,
                rows: this.pageSize
            }
            this.search()
        },
        changeTime(date){
            let y = date.getFullYear()
            let m = date.getMonth() + 1 >= 10 ? '' + (date.getMonth() + 1) : '0' + (date.getMonth() + 1)
            let d = date.getDate() >= 10 ? '' + date.getDate() : '0' + date.getDate()
            let ymd = `${y}-${m}-${d}`
            return ymd
        },
        // 获得表格数据
        getTable(obj){
            getTableData(obj).then(res=>{
                console.log("表格数据")
                console.log(res)
                this.total = 0
                if(res.code == 2000){
                    this.tableData = res.data
                    this.total = res.total
                }
            })
            this.getTopDivInfo()
        },
        // 获取顶部汇总数据
        getTopDivInfo(){
            let obj = {
                orgId: this.$store.getters.getOrgId
            }
            getTopInfo(obj).then(res=>{
                console.log('顶部数据')
                console.log(res)
                console.log(res.code)
                console.log(res.data)
                if(res.code == 2000){
                    this.dataSet = {
                        register: res.data.REG_SUCCESS_SUM,
                        noregister: res.data.REG_FAIL_SUM,
                        online: res.data.ONLINE_SUM,
                        offline: res.data.OFFLINE_SUM,
                        noActive: res.data.NOACTIVE_SUM,
                        transport: res.data.RUN_SUM,
                        ontransport: res.data.NORUN_SUM
                    }
                }
            })
        },
        // 打开向导接入弹窗
        add(){
            this.visible = true
        },
        // 关闭向导接入
        closeDialog(){
            this.visible = false
            this.detailId = ''
        },
        // 打开接入报告弹窗
        inputExport(){
            this.showAccessReport = true
        },
        // 关闭接入报告弹窗
        closeAccessReport(){
             this.showAccessReport = false
        },
        // 编辑
        update(row){
            console.log(row)
            this.detailId = row.id
            this.visible = true
        },
        // 修改最大页数
        handleSizeChange(val){
            this.pageSize = val
            this.search()
        },
        // 点击切换页
        handleCurrentChange(val){
            this.pageNum = val
            this.search()
        },
        // 导出表格
        exportData(){
            this.$confirm('本次导出'+this.total+'条数据，是否确认导出?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let startTime = null;
                let endTime = null;
                if(this.searchForm.time && this.searchForm.time.length !== 0){
                startTime = this.changeTime(this.searchForm.time[0]);
                endTime = this.changeTime(this.searchForm.time[1])
                }
                let url = '/dist/terminal/plzxController/dcZfExcel?'
                if(this.searchForm.esn){
                    url = url + 'ESN=' + this.searchForm.esn + "&"
                }
                if(this.searchForm.register){
                    url = url + 'register_state=' + this.searchForm.register + "&"
                }
                if(this.searchForm.online){
                    url = url + 'online_state=' + this.searchForm.online + "&"
                }
                if(this.searchForm.transport){
                    url = url + 'run_state=' + this.searchForm.transport + "&"
                }
                if(this.searchForm.time && this.searchForm.time.length != 0){
                    url = url + 'start_date=' + startTime + "&end_date=" + endTime + "&"
                }
                url = url.substring(0,url.length-1)
                console.log(url)
                window.location.href = url
                // this.$message({
                //     type: 'success',
                //     message: '导出成功!'
                // });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                });          
            });
        },
        // 注销
        del(row){
            let id = [row.id]
            this.$confirm('是否确认注销?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                delData(id).then(res=>{
                    console.log("注销")
                    console.log(res)
                    if(res.code == 2000){
                        this.$message({
                            type: 'success',
                            message: '注销成功!'
                        });
                        this.getTable()
                    }else{
                        this.$message({
                            type: 'error',
                            // message: '注销失败!'
                            message: res.errMsg
                        });
                    }   
                })
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                });          
            });
        },
        saveMessage(orgId,loginUsrName) {
            this.$store.commit('setOrgId', orgId);
            this.$store.commit('setAreaName', loginUsrName);
            this.search()
        },
    }
}
</script>
<style lang="scss" scoped>
.treeDetail-container{
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    .nav{
        background: #DDD;
        box-sizing: border-box;
        height: 30px;
        line-height: 30px;
        // color: #409EFF;
        @include primary_color;
    }
    .btnBox{
        margin: 20px 0 2px 0;
    }
    .btn{
        // color: #409EFF;
        @include primary_color;
        cursor: pointer;
    }
    .dataSet{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 0 0 20px 0;
        .dataLi{
            width: 30%;
            height: 125px;
            box-sizing: border-box;
            border: 1px solid #000;
            border-top: 15px solid #000;
            @include border_color;
            border-radius: 10px;
            display: flex;
            .infoBox{
                width: 100%;
                height: 110px;
                display: flex;
                .iconBox{
                    width: 50px;
                    height: 50px;
                    box-sizing: border-box;
                    // background: #14989A;
                    @include background;
                    box-sizing: border-box;
                    margin: 30px 20px;
                    font-size: 35px;
                    line-height: 50px;
                    text-align: center;
                    border-radius: 5px;
                    color: #FFF;
                    &::after {
                        content: '';
                        display: block;
                        width: 52px;
                        height: 52px;
                        border: 1px solid #000;
                        @include border_color;
                        position: relative;
                        top: -52px;
                        left: -2px;
                        border-radius: 5px;
                    }
                }
                .dataBox{
                    display: flex;
                    color: #000;
                    flex: 1;
                    line-height: 110px;
                    p{
                        flex: 1;
                        font-size: 18px;
                        margin: 0;
                        span{
                            padding-left: 10px;
                            font-weight: 800;
                        }
                    }
                }
            }
        }
    }
}
</style>