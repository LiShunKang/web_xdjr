<template>
    <el-dialog
        :title="title"
        :visible.sync="dialogVisible"
        width="70%"
        @close="handleClose">
        <div>
            <div>
                <div style="display:inline-block;margin: 0 20px">选择时间：
                    <el-date-picker v-model="time" type="daterange" range-separator="-" size="small"
                    start-placeholder="开始时间" end-placeholder="结束时间" style="width:240px" @change="changeTime"></el-date-picker>
                </div>
                <el-select v-model="electric" placeholder="请选择" style="width:150px">
                    <el-option
                    v-for="item in electricList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <el-button type="primary" style="margin: 0 20px" @click="search">查询</el-button>
            </div>
            <div ref="chart" style="width:100%;height:400px;margin:20px 0"></div>
        </div>
    </el-dialog>
</template>
<script>
import Echart from "echarts"
export default {
    data(){
        return{
            dialogVisible: false,
            option:{},
            time:null,
            electric: null,
            electricList:[{label:"电流（A）",value: 1},{label:"电压（V）",value:2}],
            xAxisData: []
        }
    },
    props:{
        visible: {
            default: false,
            type: Boolean
        },
        title: {
            default: "标题"
        }
    },
    watch:{
        visible(val){
            this.dialogVisible = val
            this.getxAxis()
            if(val){
                this.$nextTick(()=>{
                    this.showChart()
                })
            }
        }
    },
    methods:{
        handleClose(){
            this.resetDialog()
            this.$emit("handleClose",false)
        },
        resetDialog(){
            this.time = null;
            this.electric = null;
        },
        getxAxis(){
            let date = new Date()
            let y = date.getFullYear()
            let m = date.getMonth() + 1 >= 10 ? '' + (date.getMonth() + 1) : '0' + (date.getMonth() + 1)
            let d = date.getDate()
            let ymd = `${y}-${m}-${d} `
            console.log(ymd)
            let endTime = date.getHours()
            this.xAxisData = [];
            for(let i = 0; i < endTime; i++){
                let timeStr = ''
                if (i < 10){
                    timeStr = `${ymd}0${i}:00`
                } else {
                    timeStr = `${ymd}${i}:00`
                }
                this.xAxisData.push(timeStr)
            }
        },
        showChart(){
            let chartBox = this.$refs.chart
            let myChart = Echart.init(chartBox);
            this.option = {
                legend: {
                    data: ['A相电流值（A）', 'B相电流值（A）', 'C相电流值（A）']
                },
                dataZoom: [
                    {
                        show: true,
                        start: 0,
                        end: 50
                    },
                    {
                        type: 'inside',
                        start: 0,
                        end: 50
                    }
                ],
                xAxis: {
                    name:"时间",
                    type: 'category',
                    data: this.xAxisData,
                    // axisLabel: {  
                    //     interval:0,  
                    //     rotate:20  
                    // } 
                },
                yAxis: {
                    name:"(A)",
                    type: 'value'
                },
                series: [{
                    name: 'A相电流值（A）',
                    data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true,
                    itemStyle : {
                        normal : {
                            color:'#FF8C00',
                            lineStyle:{
                                color:'#FF8C00'
                            }
                        }
                    },
                },
                {
                    name: 'B相电流值（A）',
                    data: [220, 93, 332, 92, 1293, 130, 220, 93, 332, 92, 1293, 130, 1320,820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true,
                    itemStyle : {
                        normal : {
                            color:'#00BFFF',
                            lineStyle:{
                                color:'#00BFFF'
                            }
                        }
                    },
                },
                {
                    name: 'C相电流值（A）',
                    data: [ 1330, 1320,820, 932, 901,901, 934, 1290, 820, 932, 901, 934, 1290, 1330, 1320,934, 1290,820, 932,  1330, 1320],
                    type: 'line',
                    smooth: true,
                    itemStyle : {
                        normal : {
                            color:'#FF00FF',
                            lineStyle:{
                                color:'#FF00FF'
                            }
                        }
                    },
                }
                ]
            }
            myChart.setOption(this.option)
        },
        changeTime(value){
            if(value && value.length !== 0){
                let startTime = value[0].getTime();
                let endTime = value[1].getTime();
                if (startTime < endTime - 7*24*3600*1000) {
                    this.$message({
                        message: "开始时间和结束时间不能超过一周",
                        type: "warning"
                    })
                    this.time = null
                }
            }
        },
        search(){
        }
    }
}
</script>
<style lang="scss" scoped>
</style>