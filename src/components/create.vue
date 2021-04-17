<template>
    <el-dialog
        :title="title"
        :visible.sync="dialogVisible"
        width="60%"
        @close="handleClose">
        <el-card class="box-card">
            <el-steps :active="step" align-center process-status="finish" style="margin: 10px 0 10px 0">
                <el-step title="设备信息" icon="el-icon-files"></el-step>
                <el-step title="关联终端" icon="el-icon-s-promotion"></el-step>
                <el-step title="图形浏览" icon="el-icon-monitor"></el-step>
            </el-steps>
            <div class="formBox">
                <div v-if="step === 0" style="margin: 20px 0">
                    <el-tabs type="border-card" v-model="activeName">
                        <el-tab-pane label="录入模型" name="first">
                            <div style="margin: 40px auto;width: 60%">
                                <el-form :model="addForm" :rules="rules" ref="addForm" label-width="120px" size="small">
                                    <el-form-item label="设备类型：" prop="type" class="nameBox">
                                        <el-select v-model="addForm.type" style="width:240px" placeholder=" ">
                                            <!-- <el-option label="台区" :value="1"></el-option> -->
                                            <el-option label="站房" :value="2"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <div v-if="addForm.type == 1">
                                        <el-form-item label="台区名称：" prop="tqname" class="nameBox">
                                            <el-input v-model="addForm.tqname" style="width:240px"></el-input>
                                            <el-checkbox v-model="addForm.relation" class="checkBox">关联现有配变</el-checkbox>
                                        </el-form-item>
                                        <el-form-item label="配变名称：" prop="variableName" v-if="addForm.relation">
                                            <el-select v-model="addForm.variableName" style="width:240px" placeholder=" ">
                                                <el-option
                                                v-for="item in variableList"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                        <el-form-item label="出线开关数量：" prop="num">
                                            <el-input v-model="addForm.num" style="width:240px"></el-input>
                                        </el-form-item>
                                        <el-form-item label="开关命名规则：" prop="nameRule">
                                            <el-select v-model="addForm.nameRule" style="width:240px" placeholder=" ">
                                                <el-option
                                                v-for="item in nameRuleList"
                                                :key="item.value"
                                                :label="item.label"
                                                :value="item.value">
                                                </el-option>
                                            </el-select>
                                        </el-form-item>
                                    </div>
                                    <div v-if="addForm.type == 2">
                                        <el-form-item label="站房名称：" prop="zfname" class="nameBox">
                                            <el-input v-model="addForm.zfname" style="width:240px"></el-input>
                                        </el-form-item>
                                    </div>
                                </el-form>
                            </div>
                        </el-tab-pane>
                        <el-tab-pane label="选择现有模型" name="second">
                            <div style="margin: 40px auto;width: 60%">
                                <el-form :model="modelForm" :rules="rules" ref="modelForm" label-width="120px" size="small">
                                    <el-form-item label="设备类型：" prop="type" class="nameBox">
                                        <el-select v-model="modelForm.type" style="width:240px" placeholder=" ">
                                            <!-- <el-option label="台区" :value="1"></el-option> -->
                                            <el-option label="站房" :value="2"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="选择台区：" prop="station" v-if="modelForm.type === 1">
                                        <el-select v-model="modelForm.station" filterable remote placeholder="请输入"
                                            :remote-method="remoteMethod" :loading="loading" style="width: 240px" @change="showTqInfo">
                                            <el-option v-for="item in stationList" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="选择站房：" prop="factory" v-if="modelForm.type === 2">
                                        <el-select v-model="modelForm.factory" filterable remote placeholder="请输入"
                                            :remote-method="remoteMethod" :loading="loading" style="width: 240px" no-data-text="无匹配的站房信息" @change="showZfInfo">
                                            <el-option v-for="item in factoryList" :key="item.value" :label="item.label" :value="item.value"></el-option>
                                        </el-select>
                                    </el-form-item>
                                    <div class="stationInfo" v-show="modelForm.isShow1">
                                        <p>配变名称：{{modelForm.name}}</p>
                                        <p>开关数量：{{modelForm.num}}</p>
                                    </div>
                                    <div class="stationInfo" v-show="modelForm.isShow2">
                                        <p>馈线名称：{{modelForm.name}}</p>
                                        <p>开关柜数量：{{modelForm.num}}</p>
                                    </div>
                                </el-form>
                            </div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
                <div v-if="step === 1" style="margin: 20px 0">
                    <div style="margin: 40px auto;width: 50%">
                        <el-form :model="relationForm" :rules="rules" ref="relationForm" label-width="120px" size="small">
                            <el-form-item :label="modelType">
                                <span style="padding: 0 16px">{{typeName}}</span>
                            </el-form-item>
                            <el-form-item label="终端名称：" prop="terminalName">
                                <el-input v-model="relationForm.terminalName" style="width:240px"></el-input>
                            </el-form-item>
                            <el-form-item label="ESN：" prop="esn">
                                <el-input v-model="relationForm.esn" style="width:240px"></el-input>
                                <el-popover placement="top-start" title="ESN码说明" width="200" trigger="hover">
                                    <div>ESN码用于标识一个融合终端。每个融合终端具备唯一的ESN码，可通过登录融合终端通过专用命令查询融合终端的ESN码</div>
                                    <img slot="reference" class="titleImg" src="../assets/image/shuoming.png" />
                                </el-popover>
                            </el-form-item>
                            <el-form-item label="所属产品：" prop="product">
                                <el-select v-model="relationForm.product" style="width:240px" placeholder=" ">
                                    <el-option
                                    v-for="item in productList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-popover placement="top-start" title="产品型号说明" width="200" trigger="hover">
                                    <div>每个融合终端都属于一类产品型号，物联管理平台通过产品型号管理和分类海量的融合终端。</div>
                                    <img slot="reference" class="titleImg" src="../assets/image/shuoming.png" />
                                </el-popover>
                            </el-form-item>
                            <el-form-item label="所属厂家：" prop="manufactor">
                                <el-select v-model="relationForm.manufactor" style="width:240px" placeholder=" ">
                                    <el-option
                                    v-for="item in manufactorList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="所属项目：" prop="project">
                                <el-select v-model="relationForm.project" style="width:240px" placeholder=" ">
                                    <el-option
                                    v-for="item in projectList"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
                <div v-if="step === 2" style="margin: 20px 0">
                    <div style="widthL50%;height:200px;background:#999"></div>
                </div>
                <div style="text-align:right;margin-right:10%">
                    <el-button type="primary" size="mini" v-if="step !== 2" @click="nextStep(step)">下一步</el-button>
                    <el-button type="primary" size="mini" v-else @click="nextStep(step)">完成</el-button>
                </div>
            </div>
        </el-card>
    </el-dialog>
</template>
<script>
import { getZfListByName, nextOne, getListInfo } from "../api/api"
export default {
    data(){
        var inputEsn = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('ESN不能为空'));
            } else {
                let reg = /^[0-9]*$/
                if(!reg.test(value)){
                    return callback(new Error('ESN只能为数字'));
                }else{
                    return callback()
                }
            }
        };
        return{
            dialogVisible: false,
            step: 0,
            loading: false,
            activeName: "first",
            modelType: "台区名称：",
            typeName:"",
            addForm:{
                type: 2,
                tqname:"",
                zfname:"",
                num:"",
                nameRule:"",
                variableName:"",
                relation: false
            }, // 录入模型form
            modelForm:{
                type: 2,
                station:"",
                factory:"",
                name:"",
                num:"",
                isShow1: false,
                isShow2: false
            }, // 选择模型form
            relationForm: {
                terminalName:"",
                esn:"",
                product:"",
                manufactor:"",
                project:""
            },
            rules: {
                type: [
                    { required: true, message: '请选择设备类型', trigger: 'change' }
                ],
                tqname: [
                    { required: true, message: '请输入台区名称', trigger: 'blur' }
                ],
                zfname: [
                    { required: true, message: '请输入站房名称', trigger: 'blur' }
                ],
                num: [
                    { required: true, message: '请输入出线开关数量', trigger: 'blur' }
                ],
                nameRule: [
                    { required: true, message: '请选择开关命名规则', trigger: 'change' }
                ],
                variableName: [
                    { required: true, message: '请选择变量', trigger: 'change' }
                ],
                station: [
                    { required: true, message: '请选择台区', trigger: 'change' }
                ],
                factory: [
                    { required: true, message: '请选择站房', trigger: 'change' }
                ],
                terminalName: [
                    { required: true, message: '请输入终端名称', trigger: 'blur' }
                ],
                esn: [
                    { required: true, validator: inputEsn, trigger: 'blur' }
                ],
                product: [
                    { required: true, message: '请选择所属产品', trigger: 'change' }
                ],
                manufactor: [
                    { required: true, message: '请选择所属厂家', trigger: 'change' }
                ],
                project: [
                    { required: true, message: '请选择所属项目', trigger: 'change' }
                ],
            },
            nameRuleList:[],
            stationList:[],
            factoryList:[],
            productList:[],
            manufactorList:[],
            projectList:[],
            variableList:[]
        }
    },
    props:{
        visible: {
            default: false,
            type: Boolean
        },
        detailId: {
            default: ''
        },
        title: {
            default: "标题"
        }
    },
    watch:{
        visible(val){
            this.dialogVisible = val
            // this.getNameRuleList()
            // this.getVariableList()
            this.activeName = 'second'
            this.step = 0
        },
        // 切换tab
        activeName(val){
            if(val === 'first'){
                this.resetModelForm();
                if(this.nameRuleList && this.nameRuleList.length === 0){
                    this.getNameRuleList()
                    this.getVariableList()
                }
            } else if (val === 'second'){
                this.resetAddForm();
                if(this.stationList && this.stationList.length === 0){
                    // this.getStationList()
                    // this.getFactoryList()
                }
            }
        },
        // 传入id 进行初始化赋值
        detailId(val){
            if(val !== ''){
                this.getInfo()
            }
        },
        'addForm.type':{
            handler(val){
                this.resetAddForm();
                if(val === 1){
                    this.addForm.type = 1
                } else if (val === 2){
                    this.addForm.type = 2
                }
            }
        },
        'modelForm.type':{
            handler(val){
                this.resetModelForm();
                if(val === 1){
                    this.modelForm.type = 1
                } else if (val === 2){
                    this.modelForm.type = 2
                }
            }
        }
    },
    methods:{
        getInfo(){
            console.log(this.detailId)
        },
        // 关闭
        handleClose(){
            this.resetDialog()
            this.$emit("handleClose",false)
        },
        // 获取开关命名规则
        getNameRuleList(){
            this.nameRuleList = [{label:"*QF",value:1},{label:"DP",value:2},{label:"*EF*",value:3}]
        },
        // 获取台区
        getStationList(){
            this.stationList = [{label:"台区1",value:1},{label:"台区2",value:2},{label:"台区3",value:3}]
        },
        // 获取站房
        getFactoryList(){
            this.factoryList = [{label:"站房1",value:1},{label:"站房2",value:2},{label:"站房3",value:3}]
        },
        // 获取产品、工厂、项目
        getListData(){
            getListInfo().then(res=>{
                if(res.code == 2000){
                    console.log(res)
                    this.productList = res.sscp;
                    this.manufactorList = res.sscj;
                    this.projectList = res.ssxm
                }
            })
            this.productList = [{label:"产品1",value:1},{label:"产品2",value:2},{label:"产品3",value:3}]
            this.manufactorList = [{label:"厂家1",value:1},{label:"厂家2",value:2},{label:"厂家3",value:3}]
            this.projectList = [{label:"项目1",value:1},{label:"项目2",value:2},{label:"项目3",value:3}]
        },
        // 获取变量
        getVariableList(){
            this.variableList = [{label:"变量1",value:1},{label:"变量2",value:2},{label:"变量3",value:3}]
        },
        // 选择台区后，展示台区信息
        showTqInfo(value){
            this.modelForm.name="adhjas"
            this.modelForm.num= 5
            if(value !== ""){
                this.modelForm.isShow1 = true
            }else{
                this.modelForm.isShow1 = false
            }
        },
        // 选择站房后，展示站房信息
        showZfInfo(value){
            this.modelForm.name="adhjas"
            this.modelForm.num= 5
            if(value !== ""){
                this.modelForm.isShow2 = true
            }else{
                this.modelForm.isShow2 = false
            }
            let obj = {}
            obj = this.factoryList.find(item=>{
                return item.value === value
            })
            this.typeName = obj.value
            this.relationForm.terminalName = obj.value + '网关'
        },
        // 下一步
        nextStep(step){
            if(step === 0){
                this.getListData()
                if(this.activeName === "first"){
                    this.$refs['addForm'].validate((valid) => {
                        if(valid){
                            if(this.addForm.type === 2){
                                this.modelType = "站房名称："
                            } else{
                                this.modelType = "台区名称："
                            }
                            this.$refs['addForm'].resetFields();
                            this.step = 1;
                            
                        }
                    })
                } else if(this.activeName === "second"){
                    this.$refs['modelForm'].validate((valid) => {
                        if(valid){
                            if(this.modelForm.type === 2){
                                this.modelType = "站房名称："
                            } else{
                                this.modelType = "台区名称："
                            }
                            let obj = {
                                tqId: this.modelForm.factory
                            }
                            console.log(obj)
                            nextOne(obj).then(res=>{
                                console.log(res)
                            })
                            
                            console.log(this.typeName)
                            this.$refs['modelForm'].resetFields();
                            this.step = 1
                        }
                    })
                }
            }else if(step === 1){
                this.$refs['relationForm'].validate((valid) => {
                    if(valid){
                        this.$refs['relationForm'].resetFields();
                        this.step = 2
                    }
                })
            }else{
                this.handleClose()
            }
        },
        // 清除全部
        resetDialog(){
            this.step = 0;
            this.activeName = "first";
            this.resetAddForm();
            this.resetModelForm();
            if(this.$refs['relationForm']){
                this.$refs['relationForm'].resetFields();
            }
        },
        resetAddForm(){
            this.addForm = {
                type: 2,
                tqname:"",
                zfname:"",
                num:"",
                nameRule:"",
                variableName:"",
                relation: false
            }
            if(this.$refs['addForm']){
                this.$refs['addForm'].resetFields();
            }
        },
        resetModelForm(){
            this.modelForm = {
                type: 2,
                station:"",
                factory:"",
                name:"",
                num:"",
                isShow1: false,
                isShow2: false
            }
            if(this.$refs['modelForm']){
                this.$refs['modelForm'].resetFields();
            }
        },
        async remoteMethod(query) {
            let arr = []
            if (query !== '') {
                let obj = {
                    dev_type: '10',
                    orgId: this.$store.getters.getOrgId,
                    name: query
                }
                this.loading = true;
                // let getList = [{'选项1:1:pm-1': '选项1'},{'选项2:1:pm-2': '选项2'},{'选项11:11:pm-11': '选项1'},{'选项123:123:pm-123': '选项123'}]
                let Allarr = [{value:"1",id:1},{value:"12",id:2},{value:"12138",id:3},{value:"2",id:4},{value:"23",id:5}]
                await getZfListByName(obj).then(res=>{
                    if(res.code == 0){
                        Allarr = res.list
                    }
                }).catch(err=>{
                    console.log(err)
                })
                arr = Allarr.filter(item => {
                    return item.value.toLowerCase().indexOf(query.toLowerCase()) > -1;
                });
                this.loading = false;
            } else {
                arr = [];
            }
            if(this.modelForm.type === 1){
                this.stationList = arr
                console.log(this.stationList)
            }else{
                this.factoryList = arr
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.formBox{
    display: flex;
    flex-direction: column;
    .nameBox{
        position: relative;
    }
    .checkBox{
        position: absolute;
        top: 0;
        left: 250px;
    }
    .stationInfo{
        width: 60%;
        background: #eee;
        padding: 20px 40px;
    }
    .titleImg{
        width: 16px;
        height: 16px;
        position: relative;
        top: 3px;
        left: 10px;
    }
    
}
</style>
<style>
.box-card .el-step__icon-inner {
    font-size: 40px !important;
}
</style>