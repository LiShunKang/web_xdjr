<template>
  <div class="home-container">
    <!-- <div class="side">
      <p class="title">导航树</p>
      <Tree @getNode="getTreeNode"/>
    </div> -->
    <div class="body">
      <!-- <TreeDetail :nodeInfo="treeNodeInfo" /> -->
      <TreeDetail/>
    </div>
  </div>
</template>

<script>
// import Tree from '@/components/tree.vue'
import TreeDetail from '@/components/treeDetail.vue'

export default {
  components: {
    // Tree,
    TreeDetail
  },
  data(){
    return{
      // treeNodeInfo:{}
    }
  },
  methods:{
    // getTreeNode(val){
    //   this.treeNodeInfo = val
    // }
  }
}
</script>
<style lang="scss" scoped>
.home-container{
  width:100vw;
  height: 100vh;
  display: flex;
  .side{
    width: 240px;
    height: 100%;
    box-sizing: border-box;
    border-right: 1px solid #000;
    padding: 0 10px;
    .title{
      height: 30px;
      font-size: 16px;
      line-height: 30px;
      display: flex;
      &::before{
        content: "";
        display: inline-block;
        width: 10px;
        height: 30px;
        background: rgb(1, 68, 211);
        margin-right: 20px;
      }
    }
  }
  .body{
    flex: 1;
  }
}
</style>
