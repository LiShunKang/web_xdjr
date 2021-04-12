<template>
    <div>
        <div class="search">
            <el-input placeholder="输入设备名称" suffix-icon="el-icon-search" v-model="searchInput"></el-input>
        </div>
        <div class="tree" v-if="isLoadding">
            <el-tree ref="tree" :data="treeData" :props="defaultProps" node-key="id" :filter-node-method="filterNode" @node-click="handleNodeClick">
                <span class="custom-tree-node"  slot-scope="{ node, data }">
                    <span>
                        <img v-if="data.img === 'qy'" src="../assets/image/qy.png" style="position:relative;top:2px"/>
                        <img v-if="data.img === 'tq'" src="../assets/image/tq.png" style="position:relative;top:2px"/>
                        {{ node.label }}
                    </span>
                </span>
            </el-tree>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            searchInput:"",
            treeData:[
                {
                    label:"南京市",
                    id: 1,
                    children:[
                        {
                            label:"江宁区",
                            id: 11,
                            children:[
                                {
                                    label:"33",
                                    id: 111
                                },
                                {
                                    label:"3333",
                                    id: 112
                                }
                            ]
                        },
                        {
                            label:"秦淮区",
                            id:12,
                            children:[
                                {
                                    label:"22",
                                    id: 121
                                },
                                {
                                    label:"3322233",
                                    id: 122
                                }
                            ]
                        }
                    ]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            },
            isLoadding: false,
            allNodeName:[], // 当前点击的完整树名称集合
            allNodeId:[], // 当前点击的完整树id集合
        }
    },
    mounted(){
        this.initTree(this.treeData,0)
        this.$nextTick(()=>{
            this.isLoadding = true
        })
    },
    watch: {
      searchInput(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods:{
        // 点击树传参
        handleNodeClick(obj,node,event){
            this.changeBg(event)
            this.allNodeName = [obj.label]
            this.allNodeId = [obj.id]
            this.getAllNode(node.parent)
            this.$nextTick(()=>{
                let labelStr = this.allNodeName.join(' > ')
                let obj = {
                    label: labelStr,
                    id: this.allNodeId
                }
                this.$emit("getNode",obj)
            })
        },
        //点击切换背景色
        changeBg(event){
            // 重置颜色
            let nodeArr = event.tree.$el.getElementsByClassName('el-tree-node__content');
            for(let i = 0;i < nodeArr.length; i++){
                nodeArr[i].style.background = '#FFF'
                nodeArr[i].style.color = '#606266'
            }
            let targetNode = event.$refs.node.getElementsByClassName('el-tree-node__content')[0]
            targetNode.style.background = 'rgb(17,76,120)'
            targetNode.style.color = '#fff'
        },
        // 递归得到父节点
        getAllNode(obj){
            if(obj.parent !== null){
                this.allNodeName.unshift(obj.data.label)
                this.allNodeId.unshift(obj.data.id)
                this.getAllNode(obj.parent)
            }
        },
        // 初始化树 添加icon
        initTree(arr,num){
            num = num + 1
            arr.filter((item)=>{
                item.active = false;
                item.img = 'qy'
                if(num >= 3){
                    item.img = 'tq'
                }
                if(item.children && item.children.length !== 0){
                    this.initTree(item.children,num)
                }
            })
        },
        filterNode(value, data) {//搜索
          if (!value) return true;
          return data.label.indexOf(value) !== -1;
      },
    }
}
</script>
<style lang="scss" scoped>
.search{
    width:100%;
    margin: 20px 0;
}
.tree{
    width:100%;
}
</style>
<style>
.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
   background-color:  #F56C6C;
}
</style>