<template>
    <div class="treeDetail-container">
        <!-- <div class="nav">当前位置：{{nodeInfo ? nodeInfo.label : ''}}</div> -->
        <div class="dataSet">
            <div class="dataLi">
                <div class="sum">已注册：{{dataSet.register}}</div>
                <div class="type">
                    <p>台区：{{dataSet.register}}</p>
                    <p>站房：{{dataSet.register}}</p>
                </div>
            </div>
            <div class="dataLi">
                <div class="sum">在线：{{dataSet.online}}</div>
                <div class="type">
                    <p>台区：{{dataSet.online}}</p>
                    <p>站房：{{dataSet.online}}</p>
                </div>
            </div>
            <div class="dataLi">
                <div class="sum">已投运：{{dataSet.transport}}</div>
                <div class="type">
                    <p>台区：{{dataSet.transport}}</p>
                    <p>站房：{{dataSet.transport}}</p>
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
                        <el-option label="台区" :value="1"></el-option>
                        <el-option label="站房" :value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="终端ESN">
                    <el-input v-model="searchForm.esn" placeholder="终端ESN" style="width: 150px"></el-input>
                </el-form-item>
                <el-form-item label="注册状态">
                    <el-select v-model="searchForm.register" placeholder="请选择" style="width:150px">
                        <el-option label="未注册" :value="1"></el-option>
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
                <el-button type="primary" @click="search">查询</el-button>
                <el-button @click="resetSearch">重置</el-button>
                <div style="float:right">
                   <el-button type="primary" @click="add">向导接入</el-button>
                    <el-button @click="exportData">导出</el-button> 
                </div>
            </el-form>
        </div>
        <div class="table">
            <el-table :data="tableData" style="width: 100%" border
            :header-cell-style="{textAlign: 'center',background: 'rgb(17,76,120)', color: '#FFF'}" 
            :cell-style="{ textAlign: 'center', color: '#333'}">
                <el-table-column type="index"></el-table-column>
                <el-table-column prop="transformerName" label="关联设备" ></el-table-column>
                <el-table-column label="设备类型">
                    <template slot-scope="scope">
                        <div>
                            <span type="text">{{scope.row.type !== 1 ? '站房' : ''}}</span>
                            <span type="text">{{scope.row.type === 1 ? '台区' : ''}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="esn" label="终端ESN"></el-table-column>
                <el-table-column label="注册状态">
                    <template slot-scope="scope">
                        <div>
                            <span type="text">{{scope.row.state !== 3 ? '未注册' : ''}}</span>
                            <span type="text">{{scope.row.state === 3 ? '已注册' : ''}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="在线状态">
                    <template slot-scope="scope">
                        <div>
                            <span type="text">{{scope.row.online === 0 ? '离线' : ''}}</span>
                            <span type="text">{{scope.row.online === 1 ? '在线' : ''}}</span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="投运状态">
                    <template slot-scope="scope">
                        <div>
                            <span type="text">{{scope.row.transport === 1 ? '未投运' : ''}}</span>
                            <span type="text">{{scope.row.transport !== 1 ? '已投运' : ''}}</span>
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
                :total="total">
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
                    type: 1,
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
                    type: 1,
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
                    type: 2,
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
                    type: 2,
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
        // text-align: center;
        font-size: 20px;
        .dataLi{
            width: 30%;
            height: 100px;
            background: #409EFF;
            border-radius: 10px;
            color: #FFF;
            display: flex;
            .sum{
                line-height: 100px;
                flex: 1;
                padding: 0 20px;
                box-sizing: border-box;
            }
            .type{
                flex: 1;
                p{
                    height: 50px;
                    line-height: 50px;
                    margin: 0;
                    padding: 0 20px;
                    box-sizing: border-box;
                }
            }
            
        }
    }
}
</style>
<style>
body .el-table th.gutter {
  display: table-cell !important;
}
</style>