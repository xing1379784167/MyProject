<template>
  <div class="edution-item">
     <project-title></project-title>
        <div><h3>教育背景</h3></div>
          　<el-row :gutter="20">
            <el-col :span="6" v-for="(item,index) in edutiontitle" :key="index"><div class="grid-content bg-purple" >{{item}}</div></el-col>
           
          </el-row>
  </div>
</template>

<script>
import ProjectTitle from '../../components/common/ProjectTitle.vue'
  export default {
    name:'Edution',
    data() {
        return {
            edutiontitle:['2010/09-2013/06','广东机电职业技术学院','汽车检测与维修','大专']
        }
    },
    components:{
        ProjectTitle
    }
  }

</script>
<style  scoped>
.edution-item {
    height: 100vh;
    background-image: url('../../assets/img/under2.jpg');
    background-size: cover;
}
.edution-item h3 {
  text-align: center;
  color: aliceblue;
  margin-bottom: 30px;
  line-height: 49px;
}
.el-row {
    margin-bottom: 20px;
    text-align: center;
    line-height: 49px;
  }
  .el-row:last-child {
    
      margin-bottom: 0;
    
  }
  .el-col {
    border-radius: 4px;
  }
  /* .bg-purple-dark {
    background: #99a9bf;
  } */
  .bg-purple {
    background: #e5e9f2;
  }
  /* .bg-purple-light {
    background: #e5e9f2;
  } */
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  /* .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  } */
</style>