<template>
    <el-dialog
        :title="title"
        :visible.sync="dialogVisible"
        width="60%"
        class="dialogContainer"
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
                        <el-tab-pane label="录入模型" name="first" v-if="false">
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
                                <el-select v-model="relationForm.product" style="width:240px" placeholder=" " @change="changeProduct">
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
                <div v-if="step === 2" style="margin: 20px 0;height: 500px">
                    <iframe style="height: 100%;width: 100%" :src="iframeSrc"></iframe>
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
import { getZfListByName, nextOne, getListInfo, addZfInfo, getLineSrc } from "../api/api"
export default {
    data(){
        var inputEsn = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('ESN不能为空'));
            } else {
                let reg = /^[0-9a-zA-Z]*$/
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
            variableList:[],
            iframeSrc: ''
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
                // if(this.stationList && this.stationList.length === 0){
                // }
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
            this.step = 2
            this.getIframeSrc(this.detailId)
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
        // 获取产品、工厂、项目
        getListData(){
            getListInfo().then(res=>{
                // 产品列表
                let cpArr = [];
                let cpKeys = Object.keys(res.sscp);
                let cpValues = Object.values(res.sscp);
                for(let i = 0; i < cpKeys.length; i++){
                    let obj = {
                        value: cpKeys[i],
                        label: cpValues[i]
                    }
                    cpArr.push(obj)
                }
                this.productList = cpArr;

                // 厂家列表
                let cjArr = [];
                let cjKeys = Object.keys(res.cpcj);
                let cjValues = Object.values(res.cpcj);
                for(let i = 0; i < cjKeys.length; i++){
                    let obj = {
                        value: cjKeys[i],
                        label: cjValues[i]
                    }
                    cjArr.push(obj)
                }
                this.manufactorList = cjArr;

                let xmArr = [];
                let xmKeys = Object.keys(res.ssxm);
                let xmValues = Object.values(res.ssxm);
                for(let i = 0; i < xmValues.length; i++){
                    let obj = {
                        value: xmKeys[i],
                        label: xmValues[i]
                    }
                    if(xmValues[i] == '方天项目'){
                        this.relationForm.project = xmKeys[i]
                    }
                    xmArr.push(obj)
                }
                this.projectList = xmArr;
            })
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
        // 选择站房后
        showZfInfo(value){
            // if(value !== ""){
            //     this.modelForm.isShow2 = true
            // }else{
            //     this.modelForm.isShow2 = false
            // }
            let obj = {}
            obj = this.factoryList.find(item=>{
                return item.value === value
            })
            this.typeName = obj.label
            this.relationForm.terminalName = obj.label + '网关'
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
                                byqId: this.modelForm.factory,
                                areaName: this.$store.getters.getAreaName
                            }
                            nextOne(obj).then(res=>{
                                if(res.is_success){
                                    this.step = 1
                                }else{
                                    this.$message({
                                        type: 'error',
                                        message: res.errormsg
                                    })
                                }
                            })
                        }
                    })
                }
            }else if(step === 1){
                this.$refs['relationForm'].validate((valid) => {
                    if(valid){
                        let obj = {
                            gateway_name: this.relationForm.terminalName,
                            gateway_code: this.relationForm.esn,
                            org_id: this.$store.getters.getOrgId,
                            pms_id: this.modelForm.factory,
                            // facId: this.relationForm.manufactor,
                            fac_id: "",
                            pjId: this.relationForm.project,
                            pdId: this.relationForm.product,
                            relyType: "10",
                            isFixed: "F"
                        }
                        addZfInfo(obj).then(res=>{
                            if(res.code == 2000){
                                this.$message({
                                    type: 'success',
                                    message: '注册成功'
                                })
                                this.$emit("handleSuccess")
                                this.getIframeSrc(this.modelForm.factory)
                                this.step = 2
                            }else{
                                let errMsg = '注册失败'
                                if(JSON.parse(res.result).errMsg){
                                    errMsg = JSON.parse(res.result).errMsg
                                }
                                this.$message({
                                    type: 'error',
                                    message: errMsg
                                })
                                this.$emit("handleSuccess")
                                this.handleClose()
                            }
                        })
                        
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
            this.resetrelationForm();
            
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
        resetrelationForm(){
            this.relationForm = {
                terminalName:"",
                esn:"",
                product:"",
                manufactor:"",
                project:""
            }
            if(this.$refs['relationForm']){
                this.$refs['relationForm'].resetFields();
            }
        },
        // 根据关键字获取站房列表
        async remoteMethod(query) {
            // let arr = []
            if (query !== '') {
                let obj = {
                    dev_type: '10',
                    orgId: this.$store.getters.getOrgId,
                    name: query
                }
                this.loading = true;
                let Allarr = []
                await getZfListByName(obj).then(res=>{
                    if(res.code == 2000){
                        let objArr = Object.values(res.data)
                        objArr.filter(item=>{
                            let setArr = item.split(':')
                            let obj = {
                                value: setArr[0],
                                pmsId: setArr[1],
                                label: setArr[2]
                            }
                            Allarr.push(obj)
                        })
                        this.factoryList = Allarr
                    }
                    
                }).catch(err=>{
                    console.log(err)
                })
                this.loading = false;
            } else {
                this.loading = false;
            }
            // if(this.modelForm.type === 1){
            //     this.stationList = arr
            // }else{
            //     this.factoryList = arr
            //     console.log(this.factoryList)
            // }
        },
        // 选择产品
        changeProduct(value){
            this.relationForm.manufactor = ''
            let obj = {}
            obj = this.productList.find(item=>{
                return item.value === value
            })
            this.relationForm.manufactor = obj.label
        },
        getIframeSrc(id){
            let obj = {
                zfId: id,
                feederId:''
            }
            getLineSrc(obj).then(res=>{
                this.iframeSrc = 'http://21.47.224.120:19098/graph/Navigator.html?isClient=1;menubarshow=0;graph=' + res.graphName
            })
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