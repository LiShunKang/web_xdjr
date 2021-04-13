<template>
    <div class="treeDetail-container">
        <!-- <div class="nav">当前位置：{{nodeInfo ? nodeInfo.label : ''}}</div> -->
        <div class="dataSet">
            <div class="dataLi">
                <div class="infoBox">
                    <div class="iconBox"><i class="el-icon-s-order"></i></div>
                    <div class="dataBox">
                        <p>已注册<span style="color: #DEB23F">{{dataSet.register}}</span></p>
                        <p>台区<span style="color: #14989A">{{dataSet.register}}</span></p>
                        <p>站房<span style="color: #14989A">{{dataSet.register}}</span></p>
                    </div>
                </div>
            </div>
            <div class="dataLi">
                <div class="infoBox">
                    <div class="iconBox"><i class="el-icon-s-platform"></i></div>
                    <div class="dataBox">
                        <p>在线<span style="color: #DEB23F">{{dataSet.online}}</span></p>
                        <p>台区<span style="color: #14989A">{{dataSet.online}}</span></p>
                        <p>站房<span style="color: #14989A">{{dataSet.online}}</span></p>
                    </div>
                </div>
            </div>
            <div class="dataLi">
                <div class="infoBox">
                    <div class="iconBox"><i class="el-icon-s-claim"></i></div>
                    <div class="dataBox">
                        <p>已投运<span style="color: #DEB23F">{{dataSet.transport}}</span></p>
                        <p>台区<span style="color: #14989A">{{dataSet.transport}}</span></p>
                        <p>站房<span style="color: #14989A">{{dataSet.transport}}</span></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="btnBox">
            <el-form :inline="true" :model="searchForm">
                <el-form-item label="关联设备">
                    <el-input v-model="searchForm.equipment" placeholder="请输入关联设备" style="width: 150px"></el-input>
                </el-form-item>
                <el-form-item label="设备类型">
                    <el-select v-model="searchForm.type" placeholder="请选择" style="width:150px">
                        <el-option label="台区" :value="3"></el-option>
                        <el-option label="站房" :value="10"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="终端ESN">
                    <el-input v-model="searchForm.esn" placeholder="终端ESN" style="width: 150px"></el-input>
                </el-form-item>
                <el-form-item label="注册状态">
                    <el-select v-model="searchForm.register" placeholder="请选择" style="width:150px">
                        <el-option label="注册失败" :value="1"></el-option>
                        <el-option label="已注册" :value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="在线状态">
                    <el-select v-model="searchForm.online" placeholder="请选择" style="width:150px">
                        <el-option label="离线" :value="1"></el-option>
                        <el-option label="在线" :value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="投运状态">
                    <el-select v-model="searchForm.transport" placeholder="请选择" style="width:150px">
                        <el-option label="未投运" :value="1"></el-option>
                        <el-option label="已投运" :value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-button @click="search" icon="el-icon-search">查询</el-button>
                <el-button @click="resetSearch" icon="el-icon-refresh-right">重置</el-button>
                <div style="float:right;margin-bottom: 20px">
                   <el-button @click="add">向导接入</el-button>
                    <el-button @click="exportData">导出</el-button> 
                </div>
            </el-form>
        </div>
        <div class="table">
            <el-table :data="tableData" style="width: 100%"
            :header-cell-style="{textAlign: 'center',background: '#F3F3F3', color: '#333'}" 
            :cell-style="{ textAlign: 'center', color: '#333'}">
                <el-table-column type="index"></el-table-column>
                <el-table-column prop="transformerName" label="关联设备" ></el-table-column>
                <el-table-column label="设备类型">
                    <template slot-scope="scope">
                        <div>
                            <span type="text">{{scope.row.type === 10 ? '站房' : ''}}</span>
                            <span type="text">{{scope.row.type === 3 ? '台区' : ''}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="esn" label="终端ESN"></el-table-column>
                <el-table-column label="注册状态">
                    <template slot-scope="scope">
                        <div>
                            <span type="text" class="danger">{{scope.row.state !== 3 ? '注册失败' : ''}}</span>
                            <span type="text" class="success">{{scope.row.state === 3 ? '已注册' : ''}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="在线状态">
                    <template slot-scope="scope">
                        <div>
                            <span type="text" class="danger">{{scope.row.online === 0 ? '离线' : ''}}</span>
                            <span type="text" class="success">{{scope.row.online === 1 ? '在线' : ''}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="投运状态">
                    <template slot-scope="scope">
                        <div>
                            <span type="text" class="danger">{{scope.row.transport === 1 ? '未投运' : ''}}</span>
                            <span type="text" class="success">{{scope.row.transport !== 1 ? '已投运' : ''}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="people" label="所属项目"></el-table-column>
                <el-table-column prop="date" label="接入日期" min-width="85"></el-table-column>
                <el-table-column fixed="right" label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button @click="del(scope.row)" type="text" :disabled = "scope.row.state !== 3">注销</el-button>
                        <el-button @click="inputExport(scope.row)" type="text">曲线浏览</el-button>
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
        <CreateNew :detailId="detailId" :visible="visible" title="向导接入" @handleClose="closeDialog"/>
        <AccessReport :visible="showAccessReport" title="曲线浏览" @handleClose="closeAccessReport"/>
    </div>
</template>
<script>
import CreateNew from "./create.vue"
import AccessReport from "./accessReport.vue"
export default {
    components:{ CreateNew, AccessReport },
    data(){
        return{
            noData: false, // 无数据
            dataSet: {
                register: 0,
                online: 0,
                transport: 0
            },
            searchForm: {
                type: '',
                equipment: '',
                esn: '',
                register: '',
                online: '',
                transport: ''
            }, // 查询条件form
            tableData:[
                {
                    id:1,
                    transformerName:"环山河",
                    type: 10,
                    esn: '1234567890',
                    date:"2021-02-26 12:00:00",
                    state:1,
                    transport: 1,
                    online: 0,
                    people:"镇江"
                },
                {
                    id:2,
                    transformerName:"环山河",
                    type: 10,
                    esn: '1234567890',
                    date:"2021-02-26 12:00:00",
                    state:2,
                    transport:0,
                    online: 0,
                    people:"镇江"
                },
                {
                    id:3,
                    transformerName:"环山河",
                    type: 3,
                    esn: '1234567890',
                    date:"2021-02-26 12:00:00",
                    state:3,
                    transport:1,
                    online: 0,
                    people:"镇江"
                },
                {
                    id:4,
                    transformerName:"环山河",
                    type: 3,
                    esn: '1234567890',
                    date:"2021-02-26 12:00:00",
                    state:3,
                    transport:0,
                    online: 1,
                    people:"镇江"
                },
            ], // 表格数据
            detailId: '', // 当前行id
            visible: false,
            showAccessReport: false,
            currentPage: 1,
            pageNum: 1,
            pageSize: 20,
            total: 100,
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
    methods:{
        // 查询
        search(){
            this.searchObj = {
                type: this.searchForm.type,
                equipment: this.searchForm.equipment,
                esn: this.searchForm.esn,
                register: this.searchForm.register,
                online: this.searchForm.online,
                transport: this.searchForm.transport
            }
            this.getTable(this.searchObj)
        },
        resetSearch(){
            this.searchForm = {
                type: '',
                equipment:'',
                esn:'',
                register:'',
                online:'',
                transport:''
            }
            this.search()
        },
        // 获得表格数据
        getTable(obj){
            console.log(obj)
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
                this.$message({
                    type: 'success',
                    message: '导出成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                });          
            });
        },
        // 注销
        del(row){
            this.$confirm('是否确认注销?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '注销成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                });          
            });
            console.log(row)
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
        color: #409EFF;
    }
    .btnBox{
        margin: 20px 0 2px 0;
    }
    .btn{
        color: #409EFF;
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
            border: 1px solid #14989A;
            border-top: 15px solid #14989A;
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
                    background: #14989A;
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
                        border: 1px solid #14989A;
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
                        margin: 0;
                        span{
                            padding-left: 10px;
                        }
                    }
                }
            }
        }
    }
    .danger {
        // color: #F56C6C
        color: #333
    }
    .success {
        color: #333;
        // color: #67C23A;
    }
}
</style>
<style lang="scss">
.treeDetail-container{
    .el-table th.gutter {
        display: table-cell !important;
    }
    .el-table__body .el-table__row.hover-row td {
        background: #effff7;
    }
    .btnBox{
        .el-button{
            background: #14989A !important;
            border-color: #14989A !important;
            color: #FFF;
            &:hover{
                opacity: 0.8;
            }
        }
    } 
    .table{
        .el-button{
            color: #14989A;
        }
        .is-disabled{
            color: #C0C4CC;
        }
    }
    .el-pagination.is-background .el-pager li:not(.disabled) {
        background-color: #fff;
    }
    .el-pagination.is-background .el-pager li:not(.disabled):hover {
        color: #14989A;
    }
    .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #14989A;
        color: #fff;
    }
}
</style>